"use client";

import { useCallback, useMemo, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { createInterviewKit, type InterviewKit, type InterviewKitResponse } from "@/lib/api";

interface InterviewRoomProps {
  applicationId: string;
  token: string;
  initial: InterviewKitResponse;
  title: string;
  company: string;
  link: string;
}

const EMPTY: ReadonlySet<number> = new Set();

/** localStorage-backed set of "answers I've already used", as an external store.
 *
 *  Lives at module scope on purpose: `useSyncExternalStore` needs `getSnapshot` to return
 *  the same reference until the data actually changes, which means caching the parsed Set
 *  against its raw string — mutable bookkeeping that must not be recreated by a render.
 */
function createCoveredStore(key: string) {
  const listeners = new Set<() => void>();
  let cachedRaw: string | null = null;
  let cachedSet: ReadonlySet<number> = EMPTY;

  const read = (): string | null => {
    try {
      return localStorage.getItem(key);
    } catch {
      return null; // Private mode / blocked storage — the room works without memory.
    }
  };

  return {
    subscribe(listener: () => void) {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    getSnapshot(): ReadonlySet<number> {
      const raw = read();
      if (raw !== cachedRaw) {
        cachedRaw = raw;
        try {
          cachedSet = raw ? new Set(JSON.parse(raw) as number[]) : EMPTY;
        } catch {
          cachedSet = EMPTY;
        }
      }
      return cachedSet;
    },
    getServerSnapshot: (): ReadonlySet<number> => EMPTY,
    write(next: ReadonlySet<number>) {
      try {
        localStorage.setItem(key, JSON.stringify([...next]));
      } catch {
        // Losing the ticks isn't worth interrupting the user mid-interview.
      }
      listeners.forEach((l) => l());
    },
  };
}

const coveredStores = new Map<string, ReturnType<typeof createCoveredStore>>();

function coveredStoreFor(applicationId: string) {
  const key = `hd:interview:covered:${applicationId}`;
  let store = coveredStores.get(key);
  if (!store) {
    store = createCoveredStore(key);
    coveredStores.set(key, store);
  }
  return store;
}

/** Which answers the user has already used, so they don't repeat a story mid-call.
 *  Per-device and disposable by design — a scratchpad for one conversation, not
 *  something worth a round trip while someone is talking to a recruiter. */
function useCoveredSet(applicationId: string) {
  const store = useMemo(() => coveredStoreFor(applicationId), [applicationId]);

  const covered = useSyncExternalStore(
    store.subscribe,
    store.getSnapshot,
    store.getServerSnapshot
  );

  const toggle = useCallback(
    (i: number) => {
      const next = new Set(store.getSnapshot());
      if (next.has(i)) next.delete(i);
      else next.add(i);
      store.write(next);
    },
    [store]
  );

  const reset = useCallback(() => store.write(EMPTY), [store]);

  return { covered, toggle, reset };
}

export default function InterviewRoom({
  applicationId,
  token,
  initial,
  title,
  company,
  link,
}: InterviewRoomProps) {
  const [state, setState] = useState<InterviewKitResponse>(initial);
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState("");
  const { covered, toggle, reset } = useCoveredSet(applicationId);

  async function generate() {
    setGenerating(true);
    setError("");
    try {
      setState(await createInterviewKit(applicationId, token));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not build your prep sheet.");
    }
    setGenerating(false);
  }

  const kit: InterviewKit | undefined = state.ready ? state.kit : undefined;

  return (
    <div className="min-h-screen bg-background text-text">
      {/* Slim bar instead of the dashboard shell: this screen gets read next to a live
          conversation, so everything that isn't the material is a distraction. */}
      <header className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-5 py-3">
          <Link
            href="/dashboard/history"
            className="text-sm text-text2 transition hover:text-text"
            aria-label="Back to application history"
          >
            ←
          </Link>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold">{title}</p>
            <p className="truncate text-xs text-text2">{company}</p>
          </div>
          {kit && kit.questions.length > 0 && (
            <span className="shrink-0 text-xs tabular-nums text-text2">
              {covered.size}/{kit.questions.length} covered
            </span>
          )}
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 pb-24 pt-6">
        {!kit && (
          <NotReady
            state={state}
            generating={generating}
            error={error}
            onGenerate={generate}
            link={link}
          />
        )}

        {kit && (
          <div className="space-y-10">
            <Vitals kit={kit} company={company} />

            {kit.tell_me_about_yourself.length > 0 && (
              <Section title="“Tell me about yourself”" hint="about 30 seconds">
                <ul className="space-y-2.5">
                  {kit.tell_me_about_yourself.map((b, i) => (
                    <li key={i} className="flex gap-3 text-[17px] leading-snug">
                      <span aria-hidden className="select-none text-accent">
                        ▸
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </Section>
            )}

            {kit.questions.length > 0 && (
              <Section
                title="What they'll likely ask"
                hint="tap a card once you've used it"
                action={
                  covered.size > 0 ? (
                    <button
                      onClick={reset}
                      className="text-xs text-text2 underline-offset-2 transition hover:text-text hover:underline"
                    >
                      Reset
                    </button>
                  ) : undefined
                }
              >
                <div className="space-y-3">
                  {kit.questions.map((q, i) => (
                    <QuestionCard
                      key={i}
                      question={q}
                      covered={covered.has(i)}
                      onToggle={() => toggle(i)}
                    />
                  ))}
                </div>
              </Section>
            )}

            {kit.gaps.length > 0 && (
              <Section title="If they push here" hint="answer straight, don't bluff">
                <div className="space-y-3">
                  {kit.gaps.map((g, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-yellow/30 bg-yellow/5 px-4 py-3"
                    >
                      <p className="text-sm font-medium">{g.gap}</p>
                      <p className="mt-1.5 text-[15px] leading-snug text-text2">{g.say}</p>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {kit.ask_them.length > 0 && (
              <Section title="Ask them" hint="when they say “any questions?”">
                <ul className="space-y-2.5">
                  {kit.ask_them.map((q, i) => (
                    <li key={i} className="flex gap-3 text-[17px] leading-snug">
                      <span aria-hidden className="select-none text-accent">
                        ▸
                      </span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </Section>
            )}

            <p className="border-t border-border pt-5 text-xs leading-relaxed text-text2">
              Built from this job posting and your resume — nothing here was invented, so you
              can say it out loud. Anything the posting wants that your resume doesn&apos;t show
              is in “If they push here”, not dressed up as an answer.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

function Vitals({ kit, company }: { kit: InterviewKit; company: string }) {
  const { one_liner, facts } = kit.company_brief;
  if (!one_liner && facts.length === 0 && !kit.your_angle) return null;

  return (
    <section className="rounded-2xl border border-border bg-surface p-5">
      {one_liner && (
        <p className="text-[15px] leading-snug">
          <span className="font-semibold">{company}</span>
          <span className="text-text2"> — {one_liner}</span>
        </p>
      )}
      {facts.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-2">
          {facts.map((f, i) => (
            <li
              key={i}
              className="rounded-full bg-surface2 px-3 py-1 text-xs text-text2"
            >
              {f}
            </li>
          ))}
        </ul>
      )}
      {kit.your_angle && (
        <p className="mt-4 border-t border-border pt-4 text-[15px] leading-snug">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">
            Your angle
          </span>
          <br />
          {kit.your_angle}
        </p>
      )}
    </section>
  );
}

function Section({
  title,
  hint,
  action,
  children,
}: {
  title: string;
  hint?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="mb-3 flex items-baseline justify-between gap-3">
        <h2 className="text-lg font-semibold">{title}</h2>
        {action ?? (hint && <span className="text-xs text-text2">{hint}</span>)}
      </div>
      {children}
    </section>
  );
}

function QuestionCard({
  question,
  covered,
  onToggle,
}: {
  question: { q: string; why: string; bullets: string[]; proof: string };
  covered: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={covered}
      className={`w-full rounded-xl border px-4 py-4 text-left transition ${
        covered
          ? "border-border bg-transparent opacity-45"
          : "border-border bg-surface hover:border-accent/40"
      }`}
    >
      <div className="flex items-start gap-3">
        <span
          aria-hidden
          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[11px] ${
            covered ? "border-green bg-green text-white" : "border-border text-transparent"
          }`}
        >
          ✓
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[17px] font-medium leading-snug">{question.q}</p>
          {question.why && <p className="mt-1 text-xs text-text2">{question.why}</p>}

          {!covered && question.bullets.length > 0 && (
            <ul className="mt-3 space-y-2">
              {question.bullets.map((b, i) => (
                <li key={i} className="flex gap-2.5 text-[15px] leading-snug text-text2">
                  <span aria-hidden className="select-none text-accent/70">
                    ▸
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}

          {!covered && question.proof && (
            <p className="mt-3 inline-block rounded-lg bg-accent-light px-2.5 py-1 text-xs font-medium text-accent">
              {question.proof}
            </p>
          )}
        </div>
      </div>
    </button>
  );
}

function NotReady({
  state,
  generating,
  error,
  onGenerate,
  link,
}: {
  state: InterviewKitResponse;
  generating: boolean;
  error: string;
  onGenerate: () => void;
  link: string;
}) {
  const blocked = state.can_generate === false;

  return (
    <div className="rounded-2xl border border-border bg-surface px-6 py-10 text-center">
      {blocked ? (
        <>
          <p className="text-sm font-medium">No prep sheet for this one</p>
          <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-text2">
            {state.reason ||
              "We don't have the text of this job posting, so there's nothing to prepare from."}
          </p>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-sm font-medium text-accent transition hover:text-accent2"
            >
              Open the original posting ↗
            </a>
          )}
        </>
      ) : (
        <>
          <p className="text-sm font-medium">Get ready for this interview</p>
          <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-text2">
            We&apos;ll turn this job posting and your resume into likely questions, your own
            stories to answer them with, and what to ask back.
          </p>
          <button
            onClick={onGenerate}
            disabled={generating}
            className="mt-6 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-hover disabled:opacity-60"
          >
            {generating ? "Preparing…" : "Build my prep sheet"}
          </button>
          <p className="mt-3 text-xs text-text2">Takes about half a minute. Saved after that.</p>
        </>
      )}

      {error && <p className="mt-4 text-sm text-red">{error}</p>}
    </div>
  );
}

"use client";

import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import { PLATFORMS, LOCATIONS, JOB_TYPES } from "@/lib/constants";
import type { UserProfile } from "@/lib/types";

const mockProfile: UserProfile = {
  name: "Igor",
  last_name: "Linnik",
  email: "igor@example.com",
  phone: "+1234567890",
  keywords: ["marketing", "content", "automation"],
  location: "remote",
  job_type: "full-time",
  platforms: ["remoteok", "indeed"],
  writing_style: "I write casually, short sentences. Direct. No fluff.",
  resume_url: "resume_igor.pdf",
  onboarding_completed: true,
};

export default function SettingsPage() {
  const [profile, setProfile] = useState<UserProfile>(mockProfile);
  const [keywordInput, setKeywordInput] = useState("");
  const [saved, setSaved] = useState(false);

  function update(updates: Partial<UserProfile>) {
    setProfile((prev) => ({ ...prev, ...updates }));
    setSaved(false);
  }

  function addKeyword(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const word = keywordInput.trim().replace(/,$/, "");
      if (word && !profile.keywords.includes(word)) {
        update({ keywords: [...profile.keywords, word] });
      }
      setKeywordInput("");
    }
  }

  function togglePlatform(id: string) {
    const current = profile.platforms;
    if (current.includes(id)) {
      if (current.length === 1) return;
      update({ platforms: current.filter((p) => p !== id) });
    } else {
      update({ platforms: [...current, id] });
    }
  }

  function handleSave() {
    // TODO: Save to backend
    console.log("Saving profile:", profile);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <DashboardLayout>
      <div className="max-w-2xl space-y-8">
        <div>
          <h2 className="text-xl font-bold text-text">Profile Settings</h2>
          <p className="text-sm text-text2 mt-1">Update your information and preferences.</p>
        </div>

        {/* Personal Info */}
        <section className="bg-surface border border-border rounded-xl p-6 space-y-4">
          <h3 className="font-semibold text-text">Personal Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="First name" value={profile.name} onChange={(e) => update({ name: e.target.value })} />
            <Input label="Last name" value={profile.last_name} onChange={(e) => update({ last_name: e.target.value })} />
          </div>
          <Input label="Email" type="email" value={profile.email} onChange={(e) => update({ email: e.target.value })} />
          <Input label="Phone" type="tel" value={profile.phone} onChange={(e) => update({ phone: e.target.value })} />
        </section>

        {/* Job Preferences */}
        <section className="bg-surface border border-border rounded-xl p-6 space-y-4">
          <h3 className="font-semibold text-text">Job Preferences</h3>

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-text">Keywords</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {profile.keywords.map((kw) => (
                <span key={kw} className="inline-flex items-center gap-1 px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
                  {kw}
                  <button type="button" onClick={() => update({ keywords: profile.keywords.filter((k) => k !== kw) })} className="hover:text-red">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </span>
              ))}
            </div>
            <Input
              value={keywordInput}
              onChange={(e) => setKeywordInput(e.target.value)}
              onKeyDown={addKeyword}
              placeholder="Add keyword, press Enter"
            />
          </div>

          <Select
            label="Location"
            value={profile.location}
            onChange={(e) => update({ location: e.target.value })}
            options={LOCATIONS.map((l) => ({ value: l.value, label: l.label }))}
          />

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-text">Job type</label>
            <div className="flex gap-4">
              {JOB_TYPES.map((jt) => (
                <label key={jt.value} className="flex items-center gap-2 cursor-pointer text-sm text-text">
                  <input
                    type="radio"
                    name="job_type"
                    value={jt.value}
                    checked={profile.job_type === jt.value}
                    onChange={(e) => update({ job_type: e.target.value })}
                    className="accent-accent"
                  />
                  {jt.label}
                </label>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className="bg-surface border border-border rounded-xl p-6 space-y-4">
          <h3 className="font-semibold text-text">Platforms</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PLATFORMS.filter((p) => p.status === "active").map((platform) => {
              const isSelected = profile.platforms.includes(platform.id);
              return (
                <button
                  type="button"
                  key={platform.id}
                  onClick={() => togglePlatform(platform.id)}
                  className={[
                    "text-left p-3 rounded-lg border-2 transition text-sm",
                    isSelected ? "border-accent bg-accent/5" : "border-border hover:border-text2",
                  ].join(" ")}
                >
                  <span className="font-medium text-text">{platform.name}</span>
                  <span className="text-xs text-text2 block">{platform.description}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Resume */}
        <section className="bg-surface border border-border rounded-xl p-6 space-y-4">
          <h3 className="font-semibold text-text">Resume</h3>
          {profile.resume_url ? (
            <div className="flex items-center justify-between p-3 bg-surface2 rounded-lg">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-sm text-text">{profile.resume_url}</span>
              </div>
              <button className="text-sm text-red hover:underline" onClick={() => update({ resume_url: null })}>
                Remove
              </button>
            </div>
          ) : (
            <p className="text-sm text-text2">No resume uploaded. Upload a PDF to enable auto-apply.</p>
          )}
          <Button variant="secondary" size="sm">Upload New Resume</Button>
        </section>

        {/* Writing Style */}
        <section className="bg-surface border border-border rounded-xl p-6 space-y-4">
          <h3 className="font-semibold text-text">Writing Style</h3>
          <Textarea
            value={profile.writing_style}
            onChange={(e) => update({ writing_style: e.target.value })}
            rows={4}
            placeholder="Paste a sample of your writing..."
            hint="AI will match your tone in cover letters."
          />
        </section>

        {/* Save */}
        <div className="flex items-center gap-4">
          <Button onClick={handleSave}>Save Changes</Button>
          {saved && <span className="text-sm text-green">Saved successfully!</span>}
        </div>
      </div>
    </DashboardLayout>
  );
}

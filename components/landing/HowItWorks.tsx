"use client";

import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    number: "01",
    title: "Upload your resume",
    description: "Drag & drop your PDF resume. Our AI reads it to understand your experience, skills, and writing style.",
  },
  {
    number: "02",
    title: "Set your preferences",
    description: "Choose keywords, locations, job types, and platforms. We'll only apply to jobs that match your criteria.",
  },
  {
    number: "03",
    title: "AI writes cover letters",
    description: "Claude AI generates personalized cover letters for each job — matching your tone, not generic templates.",
  },
  {
    number: "04",
    title: "Auto-apply while you sleep",
    description: "Our Chrome extension fills out applications and submits them. Wake up to interview invitations.",
  },
];

function Panel1() {
  return (
    <div className="bg-white rounded-2xl border border-[#E8E8F0] p-8 max-w-[400px] w-full" style={{ boxShadow: "0 8px 32px rgba(108,92,231,0.08)" }}>
      <p className="text-sm font-medium text-[#1A1A2E] mb-4">Upload Resume</p>
      <div className="border-2 border-dashed border-[#6C5CE7]/30 rounded-xl p-8 text-center bg-[#F7F7FB]">
        <div className="w-12 h-12 bg-[#EEE9FF] rounded-full flex items-center justify-center mx-auto mb-3">
          <svg className="w-6 h-6 text-[#6C5CE7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        </div>
        <p className="text-sm text-[#6B6B8A]">Drag & drop your PDF here</p>
        <p className="text-xs text-[#6B6B8A]/60 mt-1">or click to browse</p>
      </div>
      <div className="mt-4 flex items-center gap-2 text-xs text-[#00B894]">
        <span className="w-4 h-4 rounded-full bg-[#00B894] flex items-center justify-center">
          <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
        </span>
        resume_2026.pdf uploaded
      </div>
    </div>
  );
}

function Panel2() {
  const chips = ["Marketing Manager", "Growth Lead", "Content Strategy", "Remote", "USA", "Full-time"];
  return (
    <div className="bg-white rounded-2xl border border-[#E8E8F0] p-8 max-w-[400px] w-full" style={{ boxShadow: "0 8px 32px rgba(108,92,231,0.08)" }}>
      <p className="text-sm font-medium text-[#1A1A2E] mb-4">Job Preferences</p>
      <div className="space-y-4">
        <div>
          <label className="text-xs text-[#6B6B8A] mb-1.5 block">Keywords</label>
          <div className="flex flex-wrap gap-2">
            {chips.slice(0, 3).map((c) => (
              <span key={c} className="px-3 py-1.5 bg-[#EEE9FF] text-[#6C5CE7] text-xs rounded-full font-medium">{c}</span>
            ))}
          </div>
        </div>
        <div>
          <label className="text-xs text-[#6B6B8A] mb-1.5 block">Location & Type</label>
          <div className="flex flex-wrap gap-2">
            {chips.slice(3).map((c) => (
              <span key={c} className="px-3 py-1.5 bg-[#F7F7FB] text-[#1A1A2E] text-xs rounded-full border border-[#E8E8F0]">{c}</span>
            ))}
          </div>
        </div>
        <div>
          <label className="text-xs text-[#6B6B8A] mb-1.5 block">Platforms</label>
          <div className="flex gap-3">
            {["Indeed", "RemoteOK", "Wellfound"].map((p) => (
              <span key={p} className="flex items-center gap-1.5 text-xs text-[#1A1A2E]">
                <span className="w-3 h-3 rounded-sm bg-[#6C5CE7]" />
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Panel3() {
  const text = "Dear Hiring Manager,\n\nI'm excited to apply for the Marketing Manager role. With 5+ years driving data-driven campaigns that grew pipeline by 340%...";
  return (
    <div className="bg-white rounded-2xl border border-[#E8E8F0] p-8 max-w-[400px] w-full" style={{ boxShadow: "0 8px 32px rgba(108,92,231,0.08)" }}>
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-medium text-[#1A1A2E]">AI Cover Letter</p>
        <span className="flex items-center gap-1.5 text-[10px] text-[#6C5CE7]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] animate-pulse" />
          Writing...
        </span>
      </div>
      <div className="bg-[#F7F7FB] rounded-lg p-4 min-h-[120px]">
        <p className="text-xs text-[#1A1A2E] leading-relaxed whitespace-pre-wrap">
          {text}
          <span className="inline-block w-[2px] h-3 bg-[#6C5CE7] ml-0.5 animate-pulse align-middle" />
        </p>
      </div>
      <div className="mt-3 flex items-center gap-4">
        <div className="flex-1">
          <div className="flex justify-between text-[10px] mb-1"><span className="text-[#6B6B8A]">Tone match</span><span className="text-[#00B894]">96%</span></div>
          <div className="h-1 bg-[#E8E8F0] rounded-full"><div className="h-full w-[96%] bg-[#00B894] rounded-full" /></div>
        </div>
        <div className="flex-1">
          <div className="flex justify-between text-[10px] mb-1"><span className="text-[#6B6B8A]">Relevance</span><span className="text-[#6C5CE7]">92%</span></div>
          <div className="h-1 bg-[#E8E8F0] rounded-full"><div className="h-full w-[92%] bg-[#6C5CE7] rounded-full" /></div>
        </div>
      </div>
    </div>
  );
}

function Panel4() {
  return (
    <div className="bg-white rounded-2xl border border-[#E8E8F0] p-8 max-w-[400px] w-full" style={{ boxShadow: "0 8px 32px rgba(108,92,231,0.08)" }}>
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-medium text-[#1A1A2E]">Today&apos;s Results</p>
        <span className="flex items-center gap-1.5 text-[10px] text-[#00B894]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00B894] animate-pulse" />
          Campaign running
        </span>
      </div>
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="bg-[#EEE9FF] rounded-lg p-3 text-center">
          <p className="text-xl font-bold text-[#6C5CE7]">47</p>
          <p className="text-[10px] text-[#6B6B8A]">Applied</p>
        </div>
        <div className="bg-emerald-50 rounded-lg p-3 text-center">
          <p className="text-xl font-bold text-emerald-600">12</p>
          <p className="text-[10px] text-[#6B6B8A]">Interviews</p>
        </div>
        <div className="bg-blue-50 rounded-lg p-3 text-center">
          <p className="text-xl font-bold text-blue-600">156</p>
          <p className="text-[10px] text-[#6B6B8A]">Found</p>
        </div>
      </div>
      <div className="space-y-2">
        {[
          { title: "Marketing Manager", company: "Stripe", status: "Interview", color: "bg-emerald-100 text-emerald-700" },
          { title: "Growth Lead", company: "Notion", status: "Applied", color: "bg-amber-100 text-amber-700" },
          { title: "Content Strategist", company: "Vercel", status: "Applied", color: "bg-amber-100 text-amber-700" },
        ].map((j) => (
          <div key={j.title} className="flex items-center justify-between py-2 px-3 rounded-lg bg-[#F7F7FB]">
            <div><p className="text-xs font-medium text-[#1A1A2E]">{j.title}</p><p className="text-[10px] text-[#6B6B8A]">{j.company}</p></div>
            <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${j.color}`}>{j.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = panelRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) setActiveStep(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    panelRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const panels = [<Panel1 key={0} />, <Panel2 key={1} />, <Panel3 key={2} />, <Panel4 key={3} />];

  return (
    <section id="how-it-works" ref={sectionRef} className="relative" style={{ height: "400vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden" style={{ background: "linear-gradient(160deg, #f5f3ff 0%, #f8f7fc 40%, #faf5ff 70%, #f5f3ff 100%)" }}>
        {/* Subtle cloud blobs — very soft, matching purple palette */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 600, height: 600,
            background: "radial-gradient(circle, rgba(108,92,231,0.04) 0%, transparent 70%)",
            filter: "blur(80px)",
            top: "-10%", left: "0%",
            animation: "cloudFloat1 24s ease-in-out infinite alternate",
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 500, height: 500,
            background: "radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 70%)",
            filter: "blur(80px)",
            bottom: "-5%", right: "0%",
            animation: "cloudFloat2 28s ease-in-out infinite alternate",
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 400, height: 400,
            background: "radial-gradient(circle, rgba(196,181,253,0.04) 0%, transparent 70%)",
            filter: "blur(70px)",
            top: "25%", left: "45%",
            animation: "cloudFloat3 20s ease-in-out infinite alternate",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">
            {/* Left — sticky info */}
            <div className="flex flex-col justify-center">
              <p className="text-sm font-medium text-[#6C5CE7] mb-4">HOW IT WORKS</p>
              <div className="relative">
                {STEPS.map((step, i) => (
                  <div
                    key={step.number}
                    className="absolute top-0 left-0 w-full transition-all duration-500"
                    style={{
                      opacity: activeStep === i ? 1 : 0,
                      transform: activeStep === i ? "translateX(0)" : activeStep > i ? "translateX(-20px)" : "translateX(20px)",
                    }}
                  >
                    <p className="text-6xl font-bold text-[#6C5CE7]/15 mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
                      {step.number} <span className="text-2xl text-[#6B6B8A]/40">/ 04</span>
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
                      {step.title}
                    </h2>
                    <p className="text-lg text-[#6B6B8A] max-w-md">{step.description}</p>
                  </div>
                ))}
                {/* Spacer for layout */}
                <div className="invisible">
                  <p className="text-6xl font-bold mb-2">00 <span className="text-2xl">/ 04</span></p>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4">{STEPS[0].title}</h2>
                  <p className="text-lg max-w-md">{STEPS[0].description}</p>
                </div>
              </div>
              {/* Step dots */}
              <div className="flex gap-2 mt-8">
                {STEPS.map((_, i) => (
                  <div
                    key={i}
                    className="h-1.5 rounded-full transition-all duration-500"
                    style={{
                      width: activeStep === i ? 32 : 8,
                      backgroundColor: activeStep === i ? "#6C5CE7" : "#E8E8F0",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Right — scrollable panels (positioned absolute to allow scroll) */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>

      {/* Scrollable right panels */}
      <div className="absolute top-0 right-0 w-1/2 hidden lg:block">
        {STEPS.map((_, i) => (
          <div
            key={i}
            ref={(el) => { panelRefs.current[i] = el; }}
            className="h-screen flex items-center justify-center px-8"
          >
            <div
              className="transition-all duration-500"
              style={{
                opacity: activeStep === i ? 1 : 0.3,
                transform: activeStep === i ? "scale(1)" : "scale(0.95)",
              }}
            >
              {panels[i]}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile fallback: stacked cards */}
      <div className="lg:hidden absolute top-0 left-0 right-0">
        {STEPS.map((step, i) => (
          <div key={i} className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
            <p className="text-sm font-medium text-[#6C5CE7] mb-2">STEP {step.number} / 04</p>
            <h3 className="text-2xl font-bold text-[#1A1A2E] mb-2 text-center" style={{ fontFamily: "'Syne', sans-serif" }}>{step.title}</h3>
            <p className="text-sm text-[#6B6B8A] mb-6 text-center max-w-sm">{step.description}</p>
            {panels[i]}
          </div>
        ))}
      </div>
    </section>
  );
}

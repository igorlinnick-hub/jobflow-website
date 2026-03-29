"use client";

import { useEffect, useRef, useState } from "react";

const TYPING_FIELDS = [
  { label: "Full Name", value: "Alex Johnson", delay: 0 },
  { label: "Email", value: "alex.johnson@gmail.com", delay: 1.2 },
  { label: "Phone", value: "+1 (555) 234-5678", delay: 2.4 },
];

const COVER_LETTER_LINES = [
  "Dear Hiring Manager,",
  "",
  "I'm excited to apply for the Marketing Manager",
  "position at TechCorp. With 5+ years of experience",
  "in growth marketing and a proven track record of...",
];

export default function LiveDemo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            See the extension in action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our Chrome extension fills out applications automatically. Here&apos;s what it looks like.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left — auto-fill mockup */}
          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="bg-white rounded-[10px] shadow-[0_24px_80px_rgba(108,92,231,0.12)] border border-gray-100 overflow-hidden">
              {/* Browser chrome */}
              <div className="bg-gray-50 border-b border-gray-100 px-4 py-2.5 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 bg-white rounded-md border border-gray-200 px-3 py-1 text-[11px] text-gray-400 truncate">
                  indeed.com/jobs/apply/marketing-manager-techcorp
                </div>
              </div>

              {/* Page content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Marketing Manager</p>
                    <p className="text-xs text-gray-400">TechCorp · San Francisco, CA · $95k–$130k</p>
                  </div>
                  <span className={`text-[10px] font-medium px-2.5 py-1 rounded-full transition-all duration-500 ${visible ? "bg-emerald-100 text-emerald-700" : "bg-gray-100 text-gray-400"}`}>
                    {visible ? "Auto-filling..." : "Waiting"}
                  </span>
                </div>

                {/* Form fields */}
                <div className="space-y-3">
                  {TYPING_FIELDS.map((field, i) => (
                    <div key={field.label}>
                      <label className="text-[10px] font-medium text-gray-500 mb-1 block">{field.label}</label>
                      <div className="border border-gray-200 rounded-md px-3 py-1.5 text-xs text-gray-800 bg-white min-h-[28px] overflow-hidden">
                        {visible && (
                          <span
                            className="inline-block animate-[typeIn_0.6s_ease_both]"
                            style={{ animationDelay: `${field.delay + 0.5}s` }}
                          >
                            {field.value}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* Resume upload */}
                  <div>
                    <label className="text-[10px] font-medium text-gray-500 mb-1 block">Resume</label>
                    <div className={`border border-dashed rounded-md px-3 py-2 text-xs transition-all duration-500 ${visible ? "border-emerald-300 bg-emerald-50 text-emerald-700" : "border-gray-200 text-gray-400"}`}
                      style={{ transitionDelay: "3.6s" }}
                    >
                      {visible ? (
                        <span className="flex items-center gap-1.5 animate-[fadeInUp_0.4s_ease_both]" style={{ animationDelay: "3.8s" }}>
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          resume_alex_johnson.pdf uploaded
                        </span>
                      ) : "Drop resume here"}
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                <div className="mt-4">
                  <div
                    className={`w-full text-center py-2 rounded-md text-xs font-medium transition-all duration-500 ${visible ? "bg-accent text-white shadow-md shadow-accent/20" : "bg-gray-200 text-gray-400"}`}
                    style={{ transitionDelay: "4.5s" }}
                  >
                    {visible ? "✓ Application Submitted" : "Submit Application"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — cover letter generation */}
          <div className={`transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="bg-white rounded-[10px] shadow-[0_24px_80px_rgba(108,92,231,0.12)] border border-gray-100 overflow-hidden">
              {/* Header */}
              <div className="bg-gray-50 border-b border-gray-100 px-4 py-2.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-accent/10 rounded flex items-center justify-center">
                    <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-gray-700">AI Cover Letter Generator</span>
                </div>
                <span className="flex items-center gap-1.5 text-[10px] text-accent">
                  <span className={`w-1.5 h-1.5 rounded-full bg-accent ${visible ? "animate-pulse" : ""}`} />
                  Generating
                </span>
              </div>

              {/* Cover letter content */}
              <div className="p-5">
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-[10px] px-2 py-0.5 bg-accent/10 text-accent rounded-full font-medium">Personalized</span>
                  <span className="text-[10px] text-gray-400">Matches your writing style</span>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 min-h-[180px]">
                  {visible && COVER_LETTER_LINES.map((line, i) => (
                    <p
                      key={i}
                      className="text-xs text-gray-700 leading-relaxed animate-[fadeInUp_0.4s_ease_both]"
                      style={{ animationDelay: `${1.5 + i * 0.4}s`, minHeight: line ? undefined : "0.75rem" }}
                    >
                      {line}
                    </p>
                  ))}
                </div>

                {/* Tone indicators */}
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] text-gray-500">Tone Match</span>
                      <span className="text-[10px] font-medium text-emerald-600">96%</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-emerald-500 rounded-full transition-all duration-1000 ease-out ${visible ? "w-[96%]" : "w-0"}`}
                        style={{ transitionDelay: "3s" }}
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] text-gray-500">Relevance</span>
                      <span className="text-[10px] font-medium text-accent">92%</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-accent rounded-full transition-all duration-1000 ease-out ${visible ? "w-[92%]" : "w-0"}`}
                        style={{ transitionDelay: "3.3s" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats below */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { label: "Avg. time saved", value: "23 min", sub: "per application" },
                { label: "Success rate", value: "94%", sub: "forms filled" },
                { label: "Today", value: "12", sub: "auto-applied" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`bg-white rounded-[10px] border border-gray-100 shadow-sm p-3 text-center transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${4 + i * 0.2}s` }}
                >
                  <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                  <p className="text-[10px] text-gray-500">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import AIOrb from "./AIOrb";

export default function Hero() {
  return (
    <section className="hero relative pt-28 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — text with staggered load animation */}
          <div>
            <div
              className="inline-block mb-6 px-4 py-1.5 bg-accent-light text-accent text-sm font-medium rounded-full opacity-0 animate-[fadeInUp_0.5s_ease_0.1s_both]"
            >
              AI-Powered Job Search Automation
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#1A1A2E] leading-[1.1] mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
              <span className="opacity-0 animate-[fadeInUp_0.5s_ease_0.2s_both] inline-block">Stop applying manually.</span>
              <br />
              <span className="text-accent opacity-0 animate-[fadeInUp_0.5s_ease_0.28s_both] inline-block">Let AI do it for you.</span>
            </h1>

            <p className="text-lg text-[#6B6B8A] mb-8 max-w-lg opacity-0 animate-[fadeInUp_0.5s_ease_0.4s_both]">
              JobFlow finds jobs, writes personalized cover letters in your voice,
              and auto-applies while you sleep. Up to 50 applications per day.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-10 opacity-0 animate-[fadeInUp_0.5s_ease_0.5s_both]">
              <Link
                href="/signup"
                className="btn-primary w-full sm:w-auto bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-3.5 rounded-[10px] text-lg shadow-lg shadow-accent/25"
              >
                Get Started Free
              </Link>
              <a
                href="#how-it-works"
                className="btn-secondary w-full sm:w-auto border border-[#E8E8F0] hover:border-accent text-[#1A1A2E] font-medium px-8 py-3.5 rounded-[10px] text-lg"
              >
                See How It Works
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 opacity-0 animate-[fadeInUp_0.5s_ease_0.6s_both]">
              <div className="flex -space-x-3">
                {[
                  "bg-accent",
                  "bg-emerald-500",
                  "bg-amber-500",
                  "bg-rose-500",
                  "bg-blue-500",
                ].map((bg, i) => (
                  <div
                    key={i}
                    className={`w-9 h-9 rounded-full ${bg} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}
                  >
                    {["A", "M", "K", "J", "S"][i]}
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#6B6B8A]">
                Join <strong className="text-[#1A1A2E]">2,400+</strong> job seekers automating their search
              </p>
            </div>
          </div>

          {/* Right — AI Orb */}
          <div className="hidden lg:flex items-center justify-center opacity-0 animate-[fadeInUp_0.8s_ease_0.6s_both]">
            <AIOrb />
          </div>
        </div>
      </div>
    </section>
  );
}

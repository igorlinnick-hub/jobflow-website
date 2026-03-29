"use client";

import Link from "next/link";

const MOCK_JOBS = [
  { title: "Marketing Manager", company: "TechCorp", status: "applied", color: "bg-amber-100 text-amber-700" },
  { title: "Growth Lead", company: "StartupXYZ", status: "new", color: "bg-blue-100 text-blue-700" },
  { title: "Content Strategist", company: "RemoteFirst", status: "applied", color: "bg-amber-100 text-amber-700" },
  { title: "Digital Marketing", company: "BigCo", status: "interview", color: "bg-emerald-100 text-emerald-700" },
  { title: "SEO Manager", company: "SearchPro", status: "new", color: "bg-blue-100 text-blue-700" },
];

export default function Hero() {
  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — text */}
          <div>
            <div className="inline-block mb-6 px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full">
              AI-Powered Job Search Automation
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-gray-900 leading-[1.1] mb-6">
              Stop applying manually.
              <br />
              <span className="text-accent">Let AI do it for you.</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              JobFlow finds jobs, writes personalized cover letters in your voice,
              and auto-applies while you sleep. Up to 50 applications per day.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
              <Link
                href="/signup"
                className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-3.5 rounded-[10px] text-lg transition shadow-lg shadow-accent/25"
              >
                Get Started Free
              </Link>
              <a
                href="#how-it-works"
                className="w-full sm:w-auto border border-gray-300 hover:border-gray-400 text-gray-700 font-medium px-8 py-3.5 rounded-[10px] text-lg transition"
              >
                See How It Works
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4">
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
              <p className="text-sm text-gray-500">
                Join <strong className="text-gray-900">2,400+</strong> job seekers automating their search
              </p>
            </div>
          </div>

          {/* Right — animated dashboard mockup */}
          <div className="hidden lg:block animate-[fadeInUp_0.8s_ease_0.3s_both]">
            <div className="bg-white rounded-2xl shadow-[0_24px_80px_rgba(108,92,231,0.15)] border border-gray-100 overflow-hidden">
              {/* Top bar */}
              <div className="bg-gray-50 border-b border-gray-100 px-5 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs text-gray-400 font-medium">JobFlow Dashboard</span>
                <div />
              </div>

              {/* Stats row */}
              <div className="px-5 pt-4 pb-3 grid grid-cols-3 gap-3">
                <div className="bg-accent/5 rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-accent">47</p>
                  <p className="text-[10px] text-gray-500">Applied today</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-emerald-600">12</p>
                  <p className="text-[10px] text-gray-500">Interviews</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-blue-600">156</p>
                  <p className="text-[10px] text-gray-500">Jobs found</p>
                </div>
              </div>

              {/* Job list */}
              <div className="px-5 pb-5">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-semibold text-gray-700">Recent Applications</p>
                  <span className="flex items-center gap-1.5 text-[10px] text-emerald-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Campaign running
                  </span>
                </div>
                <div className="space-y-2">
                  {MOCK_JOBS.map((job, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-2 px-3 rounded-lg bg-gray-50 animate-[fadeInUp_0.5s_ease_both]"
                      style={{ animationDelay: `${0.5 + i * 0.1}s` }}
                    >
                      <div>
                        <p className="text-xs font-medium text-gray-800">{job.title}</p>
                        <p className="text-[10px] text-gray-400">{job.company}</p>
                      </div>
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${job.color}`}>
                        {job.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex items-center justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            No credit card required
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Setup in 5 minutes
          </div>
        </div>
      </div>
    </section>
  );
}

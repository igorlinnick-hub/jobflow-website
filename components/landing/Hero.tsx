"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AIOrb from "./AIOrb";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section
      className="relative pt-28 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(108,92,231,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(108,92,231,0.03) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — text with staggered load animation */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div
              variants={fadeUp}
              className="inline-block mb-6 px-4 py-1.5 bg-[#EEE9FF] text-[#6C5CE7] text-sm font-medium rounded-full"
            >
              AI-Powered Job Search Automation
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#1A1A2E] leading-[1.1] mb-6"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Stop applying manually.
              <br />
              <span className="text-[#6C5CE7]">Let AI do it for you.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg text-[#6B6B8A] mb-8 max-w-lg">
              JobFlow finds jobs, writes personalized cover letters in your voice,
              and auto-applies while you sleep. Up to 50 applications per day.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start gap-4 mb-10">
              <Link
                href="/signup"
                className="w-full sm:w-auto bg-[#6C5CE7] text-white font-semibold px-8 py-3.5 rounded-[10px] text-lg shadow-lg inline-block text-center"
                style={{
                  boxShadow: "0 8px 24px rgba(108,92,231,0.25)",
                  transition: "transform 0.15s, box-shadow 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(108,92,231,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(108,92,231,0.25)";
                }}
              >
                Get Started Free
              </Link>
              <a
                href="#how-it-works"
                className="w-full sm:w-auto border border-[#E8E8F0] text-[#1A1A2E] font-medium px-8 py-3.5 rounded-[10px] text-lg inline-block text-center"
                style={{ transition: "transform 0.15s, border-color 0.15s" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.borderColor = "#6C5CE7";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "#E8E8F0";
                }}
              >
                See How It Works
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[
                  "bg-[#6C5CE7]",
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
                Join <strong className="text-[#1A1A2E]">2,400+</strong> job seekers
                automating their search
              </p>
            </motion.div>
          </motion.div>

          {/* Right — AI Orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="hidden lg:flex items-center justify-center"
          >
            <AIOrb />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

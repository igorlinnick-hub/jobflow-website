"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AIOrb from "./AIOrb";

/*
  Section hints: each maps to a section id on the landing page.
  The orb floats between sections, changes size, and shows a chat bubble.
*/
const SECTION_CONFIG = [
  {
    id: "hero",
    message: "Hi! I'm your AI job assistant. Let me show you around.",
    side: "left" as const,
    orbSize: 64,
  },
  {
    id: "how-it-works",
    message: "This is how I help — from resume to auto-apply, all automated.",
    side: "right" as const,
    orbSize: 48,
  },
  {
    id: "features",
    message: "AI cover letters, auto-apply, multi-platform search — all built in.",
    side: "left" as const,
    orbSize: 52,
  },
  {
    id: "chrome-demo",
    message: "Watch how the Chrome extension fills forms and applies for you!",
    side: "right" as const,
    orbSize: 56,
  },
  {
    id: "stats",
    message: "Thousands of job seekers already saving hours every day.",
    side: "left" as const,
    orbSize: 44,
  },
  {
    id: "pricing",
    message: "Start free — upgrade when you're ready to go full autopilot.",
    side: "right" as const,
    orbSize: 48,
  },
  {
    id: "faq",
    message: "Got questions? I've got answers.",
    side: "left" as const,
    orbSize: 44,
  },
];

export default function FloatingAIGuide() {
  const [activeSection, setActiveSection] = useState(0);
  const [showBubble, setShowBubble] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Track which section is in view
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_CONFIG.forEach((config, index) => {
      const el = document.getElementById(config.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(index);
            setShowBubble(false);
            // Show bubble after a small delay when entering new section
            setTimeout(() => setShowBubble(true), 600);
          }
        },
        { threshold: 0.3 },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Track scroll to show guide only after user starts scrolling
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 200) setHasScrolled(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-hide bubble after 5s
  useEffect(() => {
    if (!showBubble) return;
    const timer = setTimeout(() => setShowBubble(false), 5000);
    return () => clearTimeout(timer);
  }, [showBubble, activeSection]);

  if (dismissed || !hasScrolled) return null;

  const config = SECTION_CONFIG[activeSection];
  const isRight = config.side === "right";

  return (
    <motion.div
      className="fixed z-50 pointer-events-none"
      style={{
        bottom: 32,
        ...(isRight ? { right: 24 } : { left: 24 }),
      }}
      initial={{ opacity: 0, scale: 0.5, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      layout
    >
      {/* Chat bubble */}
      <AnimatePresence mode="wait">
        {showBubble && (
          <motion.div
            key={activeSection}
            className="pointer-events-auto mb-3"
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ maxWidth: 240 }}
          >
            <div
              className="relative bg-white rounded-2xl px-4 py-3 text-[13px] text-[#1A1A2E] leading-relaxed"
              style={{
                boxShadow: "0 8px 32px rgba(108,92,231,0.15), 0 2px 8px rgba(0,0,0,0.06)",
                border: "1px solid rgba(108,92,231,0.1)",
              }}
            >
              {config.message}
              {/* Tail */}
              <div
                className="absolute -bottom-1.5 w-3 h-3 bg-white rotate-45"
                style={{
                  ...(isRight ? { right: 20 } : { left: 20 }),
                  boxShadow: "2px 2px 4px rgba(108,92,231,0.08)",
                  borderRight: "1px solid rgba(108,92,231,0.1)",
                  borderBottom: "1px solid rgba(108,92,231,0.1)",
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Orb + close button */}
      <div className="relative pointer-events-auto">
        <motion.div
          className="cursor-pointer"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => setShowBubble((s) => !s)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ width: config.orbSize, height: config.orbSize }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
          >
            <AIOrb size={config.orbSize} />
          </motion.div>
        </motion.div>

        {/* Dismiss button */}
        <button
          onClick={() => setDismissed(true)}
          className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white border border-[#E8E8F0] flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
          style={{ boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}
        >
          <svg className="w-2.5 h-2.5 text-[#6B6B8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}

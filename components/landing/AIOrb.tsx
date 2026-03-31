"use client";

import { motion } from "framer-motion";

const ORBIT_DOTS = [
  { radius: 140, duration: 6, size: 6, color: "#a78bfa", delay: 0 },
  { radius: 120, duration: 8, size: 4, color: "#c4b5fd", delay: 1 },
  { radius: 155, duration: 10, size: 5, color: "#6C5CE7", delay: 2 },
  { radius: 130, duration: 7, size: 3, color: "#a78bfa", delay: 3 },
  { radius: 145, duration: 9, size: 4, color: "#c4b5fd", delay: 0.5 },
  { radius: 160, duration: 11, size: 5, color: "#6C5CE7", delay: 1.5 },
];

export default function AIOrb() {
  return (
    <div className="relative w-[220px] h-[220px] lg:w-[320px] lg:h-[320px] mx-auto">
      {/* Gradient blob behind */}
      <div className="absolute inset-[-90px] bg-[radial-gradient(circle,rgba(108,92,231,0.08)_0%,transparent_70%)] rounded-full" />

      {/* Outer pulsing layer */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(108,92,231,0.3) 0%, rgba(167,139,250,0.15) 50%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Middle rotating layer — clockwise */}
      <motion.div
        className="absolute inset-[15%] rounded-full"
        style={{
          background: "conic-gradient(from 0deg, #6C5CE7, #a78bfa, #c4b5fd, #6C5CE7)",
          opacity: 0.6,
          filter: "blur(20px)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Inner rotating layer — counter-clockwise */}
      <motion.div
        className="absolute inset-[25%] rounded-full"
        style={{
          background: "conic-gradient(from 180deg, #a78bfa, #c4b5fd, #ffffff, #a78bfa)",
          opacity: 0.8,
          filter: "blur(12px)",
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />

      {/* Core bright center */}
      <div
        className="absolute inset-[35%] rounded-full"
        style={{
          background: "radial-gradient(circle, #ffffff 0%, #c4b5fd 40%, #6C5CE7 100%)",
          boxShadow: "0 0 60px rgba(108,92,231,0.4)",
        }}
      />

      {/* Orbiting dots */}
      {ORBIT_DOTS.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2"
          style={{ width: dot.size, height: dot.size }}
          animate={{ rotate: 360 }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            ease: "linear",
            delay: dot.delay,
          }}
        >
          <div
            className="rounded-full"
            style={{
              width: dot.size,
              height: dot.size,
              background: dot.color,
              boxShadow: `0 0 ${dot.size * 2}px ${dot.color}`,
              transform: `translateX(${dot.radius * (typeof window !== "undefined" && window.innerWidth < 1024 ? 0.69 : 1)}px) translateY(-50%)`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

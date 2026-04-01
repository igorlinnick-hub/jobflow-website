"use client";

import { motion } from "framer-motion";

const BLOBS = [
  {
    id: 0,
    size: "110%",
    gradient: "radial-gradient(circle at 30% 40%, #ffffff 0%, #c4b5fd 40%, #6C5CE7 80%, transparent 100%)",
    animate: {
      x: [0, 40, -25, 55, -10, 30, 0],
      y: [0, -35, 50, -20, 40, -45, 0],
      scale: [1, 1.15, 0.9, 1.2, 0.95, 1.1, 1],
      rotate: [0, 45, -30, 80, -60, 20, 0],
    },
    duration: 12,
  },
  {
    id: 1,
    size: "100%",
    gradient: "radial-gradient(circle at 70% 60%, #a78bfa 0%, #ffffff 35%, #6C5CE7 70%, transparent 100%)",
    animate: {
      x: [0, -50, 30, -15, 45, -35, 0],
      y: [0, 40, -30, 55, -25, 15, 0],
      scale: [1.1, 0.85, 1.2, 0.9, 1.15, 1.05, 1.1],
      rotate: [0, -60, 40, -90, 55, -25, 0],
    },
    duration: 15,
  },
  {
    id: 2,
    size: "95%",
    gradient: "radial-gradient(circle at 50% 30%, #6C5CE7 0%, #a78bfa 30%, #ffffff 60%, transparent 100%)",
    animate: {
      x: [0, 35, -45, 20, -30, 50, 0],
      y: [0, -50, 25, -40, 35, -15, 0],
      scale: [0.9, 1.2, 0.95, 1.15, 1.05, 0.85, 0.9],
      rotate: [0, 70, -45, 100, -70, 30, 0],
    },
    duration: 11,
  },
  {
    id: 3,
    size: "90%",
    gradient: "radial-gradient(circle at 40% 70%, #ffffff 0%, #c4b5fd 45%, transparent 100%)",
    animate: {
      x: [0, -20, 55, -40, 25, -55, 0],
      y: [0, 45, -20, 35, -50, 30, 0],
      scale: [1.05, 0.9, 1.25, 0.8, 1.1, 1.2, 1.05],
      rotate: [0, -40, 65, -85, 50, -30, 0],
    },
    duration: 13,
  },
  {
    id: 4,
    size: "85%",
    gradient: "radial-gradient(circle at 60% 45%, #a78bfa 0%, #ffffff 50%, #6C5CE7 90%, transparent 100%)",
    animate: {
      x: [0, 45, -35, 15, -50, 40, 0],
      y: [0, -25, 45, -55, 20, -35, 0],
      scale: [1, 1.3, 0.85, 1.1, 0.95, 1.2, 1],
      rotate: [0, 55, -75, 35, -55, 80, 0],
    },
    duration: 14,
  },
];

const MORPH = [
  "60% 40% 55% 45% / 45% 55% 45% 55%",
  "40% 60% 45% 55% / 55% 40% 60% 40%",
  "55% 45% 60% 40% / 40% 60% 40% 60%",
  "45% 55% 40% 60% / 60% 45% 55% 45%",
  "50% 50% 50% 50% / 50% 50% 50% 50%",
  "65% 35% 50% 50% / 35% 65% 45% 55%",
  "60% 40% 55% 45% / 45% 55% 45% 55%",
];

export default function AIOrb({ size = 320 }: { size?: number }) {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Ambient glow */}
      <motion.div
        className="absolute rounded-full"
        style={{
          inset: "-50%",
          background: "radial-gradient(circle, rgba(108,92,231,0.12) 0%, rgba(167,139,250,0.05) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{ scale: [1, 1.1, 1.05, 1.15, 1], opacity: [0.6, 0.9, 0.7, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main orb — clipped with morphing edge */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{ borderRadius: MORPH[0] }}
        animate={{ borderRadius: MORPH }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #ede9fe 0%, #c4b5fd 30%, #a78bfa 60%, #6C5CE7 100%)" }}
        />

        {BLOBS.map((blob) => (
          <motion.div
            key={blob.id}
            className="absolute"
            style={{
              width: blob.size,
              height: blob.size,
              top: "50%",
              left: "50%",
              marginTop: `-${parseInt(blob.size) / 2}%`,
              marginLeft: `-${parseInt(blob.size) / 2}%`,
              background: blob.gradient,
              borderRadius: "50%",
              filter: "blur(25px)",
              mixBlendMode: "soft-light",
            }}
            animate={blob.animate}
            transition={{ duration: blob.duration, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        {/* Hot white core */}
        <motion.div
          className="absolute"
          style={{
            width: "45%", height: "45%",
            top: "50%", left: "50%",
            marginTop: "-22.5%", marginLeft: "-22.5%",
            background: "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)",
            filter: "blur(15px)",
          }}
          animate={{
            x: [0, 25, -30, 15, -20, 35, 0],
            y: [0, -20, 30, -35, 25, -10, 0],
            scale: [1, 1.3, 0.8, 1.2, 0.9, 1.15, 1],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Secondary shimmer */}
        <motion.div
          className="absolute"
          style={{
            width: "35%", height: "35%",
            top: "30%", left: "60%",
            background: "radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(196,181,253,0.3) 50%, transparent 80%)",
            filter: "blur(18px)",
          }}
          animate={{
            x: [0, -40, 20, -50, 30, -15, 0],
            y: [0, 30, -25, 40, -35, 20, 0],
            scale: [0.8, 1.2, 0.9, 1.3, 1, 1.1, 0.8],
            opacity: [0.6, 1, 0.5, 0.9, 0.7, 1, 0.6],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Deep purple drift */}
        <motion.div
          className="absolute"
          style={{
            width: "60%", height: "60%",
            top: "50%", left: "50%",
            marginTop: "-30%", marginLeft: "-30%",
            background: "radial-gradient(circle, rgba(108,92,231,0.6) 0%, rgba(108,92,231,0.2) 50%, transparent 80%)",
            filter: "blur(20px)",
            mixBlendMode: "multiply",
          }}
          animate={{
            x: [0, -35, 45, -20, 40, -45, 0],
            y: [0, 40, -30, 50, -20, 35, 0],
            scale: [1, 0.7, 1.3, 0.8, 1.2, 0.9, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="absolute inset-[-2px] pointer-events-none"
        style={{
          border: "1px solid rgba(167,139,250,0.2)",
          boxShadow: "0 0 30px rgba(108,92,231,0.15), inset 0 0 30px rgba(108,92,231,0.05)",
        }}
        animate={{ borderRadius: MORPH, opacity: [0.4, 0.8, 0.5, 0.9, 0.4] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 2400, label: "Job seekers", suffix: "+" },
  { value: 50, label: "Max apps/day", suffix: "" },
  { value: 3, label: "More interviews", suffix: "x" },
];

function AnimatedNumber({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!active) return;
    setCurrent(0);
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let frame = 0;

    const interval = setInterval(() => {
      frame++;
      // ease-out: fast start, slow end
      const progress = 1 - Math.pow(1 - frame / steps, 3);
      const value = Math.round(target * progress);
      setCurrent(value);
      if (frame >= steps) {
        setCurrent(target);
        clearInterval(interval);
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [active, target]);

  return (
    <span className="text-5xl font-bold text-[#6C5CE7]" style={{ fontFamily: "'Syne', sans-serif" }}>
      {active ? current.toLocaleString() : "0"}{suffix}
    </span>
  );
}

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F7F7FB]">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <AnimatedNumber target={stat.value} suffix={stat.suffix} active={active} />
              <p className="text-[#6B6B8A] text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

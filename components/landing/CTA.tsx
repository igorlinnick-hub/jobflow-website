"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent">
      <ScrollReveal className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
          Ready to automate your job search?
        </h2>
        <p className="text-lg text-white/80 mb-8">
          Join JobFlow and start receiving interview invitations instead of sending applications manually.
        </p>
        <Link
          href="/signup"
          className="btn-secondary inline-block bg-white text-accent font-semibold px-8 py-3.5 rounded-[10px] text-lg hover:bg-gray-100 transition shadow-lg"
        >
          Get Started Free
        </Link>
      </ScrollReveal>
    </section>
  );
}

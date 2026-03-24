"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-gray-900">
            <span className="text-accent">Job</span>Flow
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900 transition">
              How it works
            </a>
            <a href="#features" className="text-sm text-gray-600 hover:text-gray-900 transition">
              Features
            </a>
            <Link href="/login" className="text-sm text-gray-600 hover:text-gray-900 transition">
              Log in
            </Link>
            <Link
              href="/signup"
              className="bg-accent hover:bg-accent/90 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
            >
              Sign Up Free
            </Link>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            <div className="flex flex-col gap-3 pt-4">
              <a href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900" onClick={() => setMenuOpen(false)}>
                How it works
              </a>
              <a href="#features" className="text-sm text-gray-600 hover:text-gray-900" onClick={() => setMenuOpen(false)}>
                Features
              </a>
              <Link href="/login" className="text-sm text-gray-600 hover:text-gray-900">
                Log in
              </Link>
              <Link
                href="/signup"
                className="bg-accent text-white text-sm font-medium px-4 py-2 rounded-lg text-center"
              >
                Sign Up Free
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

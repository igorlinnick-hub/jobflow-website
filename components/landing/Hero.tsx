import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full">
          AI-Powered Job Search Automation
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Stop applying manually.
          <br />
          <span className="text-accent">Let AI do it for you.</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          JobFlow finds jobs, writes personalized cover letters in your voice,
          and auto-applies while you sleep. Up to 50 applications per day.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/signup"
            className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-3.5 rounded-lg text-lg transition shadow-lg shadow-accent/25"
          >
            Get Started Free
          </Link>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto border border-gray-300 hover:border-gray-400 text-gray-700 font-medium px-8 py-3.5 rounded-lg text-lg transition"
          >
            See How It Works
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500">
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

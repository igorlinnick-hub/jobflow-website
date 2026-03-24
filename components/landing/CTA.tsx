import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to automate your job search?
        </h2>
        <p className="text-lg text-white/80 mb-8">
          Join JobFlow and start receiving interview invitations instead of sending applications manually.
        </p>
        <Link
          href="/signup"
          className="inline-block bg-white text-accent font-semibold px-8 py-3.5 rounded-lg text-lg hover:bg-gray-100 transition shadow-lg"
        >
          Get Started Free
        </Link>
      </div>
    </section>
  );
}

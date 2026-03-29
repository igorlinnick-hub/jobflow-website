import Link from "next/link";

const PLANS = [
  {
    name: "Free",
    price: "$0",
    period: "",
    description: "Try JobFlow with basic features",
    features: [
      "1 platform (RemoteOK)",
      "5 applications per day",
      "Basic cover letters",
      "Email notifications",
    ],
    cta: "Get Started",
    href: "/signup",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$16",
    period: "/month",
    description: "Full automation for serious job seekers",
    features: [
      "All platforms (Indeed, Wellfound, RemoteOK)",
      "50 applications per day",
      "AI cover letters in your voice",
      "Chrome Extension auto-apply",
      "SMS notifications",
      "Email monitoring",
      "Priority support",
    ],
    cta: "Start Pro",
    href: "/signup?plan=pro",
    highlighted: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F7F7FB]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Start free. Upgrade when you&apos;re ready to automate your entire job search.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={[
                "relative rounded-[10px] p-8 flex flex-col",
                plan.highlighted
                  ? "bg-white border-2 border-accent shadow-xl shadow-accent/10 scale-105"
                  : "bg-white border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.06)]",
              ].join(" ")}
            >
              {plan.highlighted && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-500">{plan.period}</span>
                  )}
                </div>
                <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={[
                  "block text-center py-3 px-6 rounded-[10px] font-medium transition",
                  plan.highlighted
                    ? "bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/25"
                    : "border border-gray-300 hover:border-gray-400 text-gray-700",
                ].join(" ")}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

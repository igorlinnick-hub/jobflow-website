"use client";

const ITEMS = [
  { icon: "📄", text: "Resume uploaded", sub: "Igor_CV_2026.pdf", live: false },
  { icon: "🔍", text: "Scanning Indeed", sub: "1,240 jobs found", live: false },
  { icon: "✨", text: "AI matching", sub: "47 relevant jobs", live: false },
  { icon: "✍️", text: "Letter generated", sub: "Marketing Manager @ Stripe", live: false },
  { icon: "✅", text: "Application sent", sub: "2 seconds ago", live: true },
  { icon: "📬", text: "Interview request", sub: "Notion replied!", live: true },
];

function TickerCard({ item }: { item: (typeof ITEMS)[0] }) {
  return (
    <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-[#E8E8F0] shrink-0 min-w-[220px]"
      style={{ boxShadow: "0 2px 8px rgba(108,92,231,0.08)" }}
    >
      <span className="text-xl">{item.icon}</span>
      <div>
        <div className="flex items-center gap-1.5">
          <p className="text-sm font-medium text-[#1A1A2E]">{item.text}</p>
          {item.live && (
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B894]"
              style={{ animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite" }}
            />
          )}
        </div>
        <p className="text-xs text-[#6B6B8A]">{item.sub}</p>
      </div>
    </div>
  );
}

export default function Ticker() {
  // Quadruple items to ensure seamless loop on wide screens
  const repeated = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div className="w-full overflow-hidden py-8 bg-[#F7F7FB]">
      <div
        className="flex gap-4"
        style={{
          animation: "ticker 30s linear infinite",
          width: "max-content",
        }}
      >
        {repeated.map((item, i) => (
          <TickerCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

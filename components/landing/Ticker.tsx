"use client";

const ITEMS = [
  { icon: "📄", text: "Resume uploaded", sub: "Igor_CV_2026.pdf", live: false },
  { icon: "🔍", text: "Scanning Indeed", sub: "1,240 jobs found", live: false },
  { icon: "✨", text: "AI matching", sub: "47 relevant jobs", live: false },
  { icon: "✍️", text: "Letter generated", sub: "Marketing Manager @ Stripe", live: false },
  { icon: "✅", text: "Application sent", sub: "2 seconds ago", live: true },
  { icon: "📬", text: "Interview request", sub: "Notion replied!", live: true },
];

function TickerCard({ item }: { item: typeof ITEMS[0] }) {
  return (
    <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-[#E8E8F0] shadow-[0_2px_8px_rgba(108,92,231,0.08)] shrink-0 min-w-[220px]">
      <span className="text-xl">{item.icon}</span>
      <div>
        <div className="flex items-center gap-1.5">
          <p className="text-sm font-medium text-[#1A1A2E]">{item.text}</p>
          {item.live && <span className="w-1.5 h-1.5 rounded-full bg-[#00B894] animate-pulse" />}
        </div>
        <p className="text-xs text-[#6B6B8A]">{item.sub}</p>
      </div>
    </div>
  );
}

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="w-full overflow-hidden py-8">
      <div className="flex gap-4 animate-[ticker_25s_linear_infinite] hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <TickerCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

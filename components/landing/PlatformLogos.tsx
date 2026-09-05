import Image from "next/image";

const PLATFORMS = [
  { name: "Indeed", src: "/logos/indeed.png" },
  { name: "ZipRecruiter", src: "/logos/ziprecruiter.png" },
  { name: "Greenhouse", src: "/logos/greenhouse.png" },
  { name: "Lever", src: "/logos/lever.png" },
  { name: "Ashby", src: "/logos/ashbyhq.png" },
];

export default function PlatformLogos() {
  return (
    <div className="w-full py-10 bg-[#F7F7FB]">
      <p className="text-center text-xs font-medium tracking-wider text-[#6B6B8A] uppercase mb-7">
        Applies for you on
      </p>
      <div className="flex items-center justify-center gap-7 sm:gap-12 flex-wrap px-4">
        {PLATFORMS.map((p, i) => (
          <div
            key={p.name}
            title={p.name}
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border border-[#E8E8F0] overflow-hidden"
            style={{
              boxShadow: "0 6px 18px rgba(108,92,231,0.12)",
              // Desynced durations + delays so the circles drift independently
              animation: `logoFloat ${4.6 + i * 0.7}s ease-in-out ${-i * 1.3}s infinite alternate`,
            }}
          >
            <Image src={p.src} alt={`${p.name} logo`} width={64} height={64} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

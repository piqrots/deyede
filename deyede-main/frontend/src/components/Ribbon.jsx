import Marquee from "react-fast-marquee";

const ITEMS = [
  "GARANSI 100%",
  "BANYAK KEUNTUNGAN",
  "KONVEKSI TERMURAH",
  "BAHAN PREMIUM",
  "JAHITAN RAPI",
  "TEPAT WAKTU",
];

export default function Ribbon({ inverted = false, speed = 40 }) {
  const base = inverted ? "bg-white text-black" : "bg-black text-white";
  const borderClass = inverted ? "border-black/20" : "border-white/15";
  return (
    <div
      data-testid="editorial-ribbon"
      className={`${base} border-y ${borderClass} py-4 overflow-hidden select-none`}
    >
      <Marquee speed={speed} gradient={false} pauseOnHover>
        {ITEMS.map((item) => (
          <span key={item} className="flex items-center">
            <span className="font-mono text-xs md:text-sm uppercase tracking-[0.35em] px-8">
              {item}
            </span>
            <span className="text-xs text-thread">•</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}

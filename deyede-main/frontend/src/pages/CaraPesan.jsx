import { ArrowUpRight, MessageCircle, PenTool, CreditCard, Scissors, Truck } from "lucide-react";
import { RevealLine, FadeUp, PageWrap } from "@/components/Reveal";
import Ribbon from "@/components/Ribbon";
import { STEPS, SIGNATURE_BG, WA_DEFAULT } from "@/data/content";

const ICONS = [MessageCircle, PenTool, CreditCard, Scissors, Truck];

const NOTES = [
  {
    title: "Minimal Order",
    desc: "Mulai dari 12 pcs per desain untuk kaos, dan fleksibel untuk produk lain — tanyakan ke admin.",
  },
  {
    title: "Estimasi Produksi",
    desc: "3–14 hari kerja tergantung jenis produk, jumlah, dan antrean produksi.",
  },
  {
    title: "Pembayaran",
    desc: "DP 50% untuk memulai produksi, pelunasan sebelum pengiriman. Transfer bank & QRIS.",
  },
  {
    title: "Pengiriman",
    desc: "Ambil langsung di workshop Semarang, atau kirim ke seluruh Indonesia via ekspedisi.",
  },
];

export default function CaraPesan() {
  return (
    <PageWrap>
      <section data-testid="steps-header" className="relative pt-32 md:pt-44 pb-16 md:pb-24 overflow-hidden">
        <img
          src={SIGNATURE_BG}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          <RevealLine delay={0.1}>
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-thread">
              Cara Pemesanan
            </span>
          </RevealLine>
          <h1 className="font-serif uppercase tracking-tighter leading-[0.9] mt-6">
            <RevealLine delay={0.25} className="text-5xl md:text-7xl lg:text-8xl">
              5 Langkah
            </RevealLine>
            <RevealLine delay={0.4} className="text-5xl md:text-7xl lg:text-8xl italic text-white/70">
              Pesan di Kami
            </RevealLine>
          </h1>
          <FadeUp delay={0.55} className="mt-8 max-w-lg text-sm md:text-base text-white/60 leading-relaxed">
            Proses yang sederhana dan transparan — dari obrolan pertama sampai
            paket tiba di tanganmu.
          </FadeUp>
        </div>
      </section>

      <Ribbon />

      <section data-testid="steps-list" className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="space-y-px bg-white/15 border border-white/15">
          {STEPS.map((item, i) => {
            const Icon = ICONS[i];
            const offset = i % 2 === 1 ? "lg:ml-24" : "lg:mr-24";
            return (
              <FadeUp key={item.step} delay={0.05} className="bg-black">
                <div
                  data-testid={`step-card-${item.step}`}
                  className={`group grid grid-cols-1 lg:grid-cols-12 gap-6 p-8 md:p-14 items-center hover:bg-white/[0.03] transition-colors duration-500 ${offset}`}
                >
                  <div className="lg:col-span-3 flex items-center gap-6">
                    <span className="font-mono text-6xl md:text-8xl text-white/15 group-hover:text-thread transition-colors duration-700">
                      {item.step}
                    </span>
                    <Icon className="w-8 h-8 text-white/40 group-hover:text-white transition-colors duration-500" strokeWidth={1.25} />
                  </div>
                  <div className="lg:col-span-9">
                    <h2 className="font-serif text-3xl md:text-4xl uppercase tracking-tight">
                      {item.title}
                    </h2>
                    <p className="mt-4 max-w-xl text-sm md:text-base text-white/50 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </section>

      <section data-testid="steps-notes" className="border-t border-white/15 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
          <FadeUp>
            <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-tighter mb-12">
              Hal yang Perlu <span className="italic text-white/70">Kamu Tahu</span>
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/15 border border-white/15">
            {NOTES.map((note, i) => (
              <FadeUp key={note.title} delay={i * 0.08} className="bg-black p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-sans font-light text-lg">{note.title}</h3>
                <p className="mt-3 text-sm text-white/50 leading-relaxed">{note.desc}</p>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.2} className="mt-14 text-center">
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="steps-wa-button"
              className="group inline-flex items-center gap-3 bg-white text-black font-mono text-xs uppercase tracking-[0.25em] px-10 py-5 border border-white transition-colors duration-300 hover:bg-transparent hover:text-white"
            >
              Mulai Langkah Pertama
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </FadeUp>
        </div>
      </section>
    </PageWrap>
  );
}

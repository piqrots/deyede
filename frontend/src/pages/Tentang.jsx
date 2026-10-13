import { RevealLine, FadeUp, PageWrap } from "@/components/Reveal";
import Ribbon from "@/components/Ribbon";
import { LOGO_URL, SIGNATURE_BG, BENEFITS, STATS } from "@/data/content";

export default function Tentang() {
  return (
    <PageWrap>
      <section data-testid="tentang-header" className="relative pt-32 md:pt-44 pb-16 md:pb-24 overflow-hidden">
        <img
          src={SIGNATURE_BG}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          <RevealLine delay={0.1}>
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-thread">
              Tentang Kami
            </span>
          </RevealLine>
          <h1 className="font-serif uppercase tracking-tighter leading-[0.9] mt-6">
            <RevealLine delay={0.25} className="text-5xl md:text-7xl lg:text-8xl">
              Dijahit di
            </RevealLine>
            <RevealLine delay={0.4} className="text-5xl md:text-7xl lg:text-8xl italic text-white/70">
              Semarang
            </RevealLine>
          </h1>
        </div>
      </section>

      <Ribbon />

      <section data-testid="tentang-story" className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <FadeUp className="lg:col-span-5">
            <img src={LOGO_URL} alt="Deyede Custom" className="w-48 md:w-64 h-auto mb-10" />
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/40">
              Spill The Design — Est. Semarang
            </p>
          </FadeUp>
          <FadeUp delay={0.15} className="lg:col-span-7 space-y-6 text-white/70 leading-relaxed text-base md:text-lg font-light">
            <p>
              <span className="font-serif text-2xl md:text-3xl text-white block mb-6">
                Deyede lahir dari satu keyakinan sederhana: setiap orang berhak
                memakai ceritanya sendiri.
              </span>
              Berawal dari workshop kecil di Semarang, kami tumbuh menjadi
              konveksi custom yang dipercaya komunitas, kampus, perusahaan,
              hingga brand clothing lokal. Nama Deyede dan tagline kami —
              <span className="italic"> Spill The Design</span> — adalah
              undangan terbuka: kamu bawa ide, kami yang mewujudkan.
            </p>
            <p>
              Kami percaya konveksi bukan sekadar jahit-menjahit. Ia tentang
              presisi pola, karakter bahan, dan detail kecil yang membuat satu
              potong pakaian terasa milikmu. Itulah mengapa setiap pesanan —
              12 pcs atau 12.000 pcs — melewati quality control yang sama
              ketatnya.
            </p>
          </FadeUp>
        </div>
      </section>

      <section data-testid="tentang-stats" className="border-y border-white/15">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <FadeUp
              key={stat.label}
              delay={i * 0.08}
              className={`px-6 md:px-10 py-10 md:py-14 border-white/15 ${
                i % 2 === 1 ? "border-l" : ""
              } ${i >= 2 ? "border-t md:border-t-0" : ""} ${i > 0 ? "md:border-l" : ""}`}
            >
              <p className="font-mono text-3xl md:text-5xl">{stat.value}</p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-white/50">
                {stat.label}
              </p>
            </FadeUp>
          ))}
        </div>
      </section>

      <section data-testid="tentang-visi" className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/15 border border-white/15">
          <FadeUp className="bg-black p-10 md:p-16">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/40 mb-6">Visi</p>
            <p className="font-serif text-2xl md:text-3xl leading-snug">
              Menjadi konveksi custom paling dipercaya di Semarang — tempat
              setiap desain, sekecil apa pun idenya, dijahit dengan serius.
            </p>
          </FadeUp>
          <FadeUp delay={0.1} className="bg-black p-10 md:p-16">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/40 mb-6">Misi</p>
            <ul className="space-y-4 text-white/60 text-sm md:text-base leading-relaxed">
              <li className="flex gap-4">
                <span className="font-mono text-white/30">01</span>
                Menghadirkan kualitas premium dengan harga yang jujur.
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-white/30">02</span>
                Mempermudah siapa pun memesan — dari konsultasi hingga kirim.
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-white/30">03</span>
                Menjaga waktu dan janji seperti menjaga kualitas jahitan.
              </li>
            </ul>
          </FadeUp>
        </div>
      </section>

      <section data-testid="tentang-benefits" className="border-t border-white/15 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-28">
          <FadeUp>
            <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-tighter mb-12">
              Nilai yang Kami <span className="italic text-white/70">Pegang</span>
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/15 border border-white/15">
            {BENEFITS.map((benefit, i) => (
              <FadeUp key={benefit.title} delay={i * 0.06} className="bg-black p-8 md:p-10">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-serif text-xl md:text-2xl">{benefit.title}</h3>
                <p className="mt-3 text-sm text-white/50 leading-relaxed">{benefit.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </PageWrap>
  );
}

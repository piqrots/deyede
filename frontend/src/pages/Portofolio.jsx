import { ArrowUpRight, MapPin, Instagram } from "lucide-react";
import { RevealLine, FadeUp, PageWrap } from "@/components/Reveal";
import Ribbon from "@/components/Ribbon";
import { PORTFOLIO, SIGNATURE_BG, WA_DEFAULT } from "@/data/content";

function FeaturedProject({ project }) {
  return (
    <FadeUp className="mt-12">
      <div data-testid="portfolio-featured" className="border border-white/15">
        <div className="bg-black overflow-hidden">
          <img
            src={project.image}
            alt={`${project.name} — Jersey, Goodie Bag, Medali, dan BIB`}
            className="w-full aspect-video object-contain"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8 md:p-12 border-t border-white/15">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-thread">
              Proyek Terbaru
            </p>
            <h3 className="font-serif text-3xl md:text-4xl uppercase tracking-tight mt-3">
              {project.name}
            </h3>
            <div className="mt-6 space-y-2.5 font-mono text-xs text-white/50">
              <p className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-thread" strokeWidth={1.5} />
                {project.location}
              </p>
              <p className="flex items-center gap-2.5">
                <Instagram className="w-3.5 h-3.5 text-thread" strokeWidth={1.5} />
                {project.instagram}
              </p>
            </div>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-5">
              Produk yang Kami Buat
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/15 border border-white/15">
              {project.products.map((product) => (
                <div key={product.name} className="bg-black p-5">
                  <p className="font-sans font-light">{product.name}</p>
                  <p className="mt-1.5 font-mono text-[11px] text-thread">
                    {product.material}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FadeUp>
  );
}

function ProjectRow({ item, index, catId }) {
  return (
    <FadeUp delay={index * 0.04}>
      <div
        data-testid={`portfolio-item-${catId}-${index}`}
        className="group grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 py-6 md:py-7 border-b border-white/15 hover:px-4 transition-all duration-500"
      >
        <div className="lg:col-span-4 flex flex-wrap gap-2">
          {item.images.map((src, i) => (
            <div
              key={i}
              className="w-20 h-20 xl:w-24 xl:h-24 shrink-0 border border-white/15 overflow-hidden bg-black"
            >
              <img
                src={src}
                alt={`${item.name} — foto ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
        <div className="lg:col-span-3 flex items-baseline gap-4">
          <span className="font-mono text-xs text-white/30 group-hover:text-thread transition-colors duration-500">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-serif text-xl md:text-2xl">{item.name}</h3>
        </div>
        <div className="lg:col-span-3 text-sm text-white/60 leading-relaxed self-center">
          {item.products}
          <span className="block mt-1.5 font-mono text-[11px] text-white/40">
            Bahan: {item.material}
          </span>
        </div>
        <div className="lg:col-span-2 lg:text-right font-mono text-[11px] uppercase tracking-[0.15em] text-white/40 self-center">
          {item.location}
        </div>
      </div>
    </FadeUp>
  );
}

export default function Portofolio() {
  return (
    <PageWrap>
      <section data-testid="portofolio-header" className="relative pt-32 md:pt-44 pb-16 md:pb-24 overflow-hidden">
        <img
          src={SIGNATURE_BG}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          <RevealLine delay={0.1}>
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-thread">
              Portofolio
            </span>
          </RevealLine>
          <h1 className="font-serif uppercase tracking-tighter leading-[0.9] mt-6">
            <RevealLine delay={0.25} className="text-5xl md:text-7xl lg:text-8xl">
              Karya Nyata
            </RevealLine>
            <RevealLine delay={0.4} className="text-5xl md:text-7xl lg:text-8xl italic text-white/70">
              Berbagai Kota
            </RevealLine>
          </h1>
          <FadeUp delay={0.55} className="mt-8 max-w-lg text-sm md:text-base text-white/60 leading-relaxed">
            Sebagian kecil karya yang sudah kami jahit untuk event lari dan
            organisasi di seluruh Indonesia — dari Semarang hingga Kendari.
          </FadeUp>
        </div>
      </section>

      <Ribbon />

      {PORTFOLIO.map((cat, ci) => (
        <section
          key={cat.id}
          data-testid={`portfolio-cat-${cat.id}`}
          className="border-b border-white/15"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
            <FadeUp>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-thread mb-4">
                {String(ci + 1).padStart(2, "0")} — {cat.category}
              </p>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
                <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-tighter">
                  {cat.headline}
                </h2>
                <p className="max-w-sm text-sm text-white/50 leading-relaxed md:text-right">
                  {cat.desc}
                </p>
              </div>
            </FadeUp>

            {cat.featured && <FeaturedProject project={cat.featured} />}

            <div className="mt-10 border-t border-white/15">
              {cat.items.map((item, i) => (
                <ProjectRow key={item.name} item={item} index={i} catId={cat.id} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section data-testid="portofolio-cta" className="bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 text-center">
          <FadeUp>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-thread mb-6">
              Keterangan
            </p>
            <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-tighter leading-tight">
              Ini Baru <span className="italic text-white/70">Sebagian Kecil.</span>
            </h2>
            <p className="mt-6 max-w-md mx-auto text-sm text-white/60 leading-relaxed">
              Masih banyak karya lain yang tidak sempat terpajang. Proyekmu
              bisa jadi yang berikutnya.
            </p>
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="portofolio-wa-button"
              className="group mt-10 inline-flex items-center gap-3 bg-white text-black font-mono text-xs uppercase tracking-[0.25em] px-10 py-5 border border-white transition-colors duration-300 hover:bg-transparent hover:text-white"
            >
              Diskusikan Proyekmu
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </FadeUp>
        </div>
      </section>
    </PageWrap>
  );
}

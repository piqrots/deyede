import { ArrowUpRight } from "lucide-react";
import { RevealLine, FadeUp, PageWrap } from "@/components/Reveal";
import Ribbon from "@/components/Ribbon";
import ProductImageSlider from "@/components/ProductImageSlider";
import { PRODUCTS, EXTRA_PRODUCTS, WA_DEFAULT, waLink } from "@/data/content";

export default function Katalog() {
  return (
    <PageWrap>
      <section data-testid="katalog-header" className="pt-32 md:pt-44 pb-16 md:pb-24 max-w-7xl mx-auto px-6 md:px-10">
        <RevealLine delay={0.1}>
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-thread">
            Katalog Produk
          </span>        </RevealLine>
        <h1 className="font-serif uppercase tracking-tighter leading-[0.9] mt-6">
          <RevealLine delay={0.25} className="text-5xl md:text-7xl lg:text-8xl">
            Pilih Kanvas
          </RevealLine>
          <RevealLine delay={0.4} className="text-5xl md:text-7xl lg:text-8xl italic text-white/70">
            Untuk Desainmu
          </RevealLine>
        </h1>
        <FadeUp delay={0.55} className="mt-8 max-w-lg text-sm md:text-base text-white/60 leading-relaxed">
          Dari kaos harian hingga seragam instansi — setiap produk dibuat
          custom sesuai desain, bahan, dan jumlah yang kamu butuhkan. Harga
          menyesuaikan kuantitas; semakin banyak, semakin hemat.
        </FadeUp>
      </section>

      <Ribbon />

      <section data-testid="katalog-grid" className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 border border-white/15">
          {PRODUCTS.map((product, i) => (
            <FadeUp key={product.id} delay={i * 0.08} className="bg-black">
              <article
                data-testid={`product-card-${product.id}`}
                className="group"
              >
                <div className={`overflow-hidden aspect-[4/3] ${product.contain ? "bg-white" : ""}`}>
                  <ProductImageSlider
                    images={product.images}
                    alt={product.name}
                    contain={product.contain}
                    testid={`product-slider-${product.id}`}
                  />
                </div>
                <div className="p-8 md:p-10 border-t border-white/15">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                        {product.tagline}
                      </p>
                      <h2 className="font-serif text-2xl md:text-3xl mt-2">{product.name}</h2>
                    </div>
                    <span className="font-mono text-xs text-white/60 whitespace-nowrap border border-white/20 px-3 py-1.5">
                      {product.price}
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-white/50 leading-relaxed">{product.desc}</p>
                  <a
                    href={waLink(`Halo Deyede! Saya tertarik dengan produk ${product.name}. Boleh info lebih lanjut?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`product-wa-${product.id}`}
                    className="group/link mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors duration-300"
                  >
                    Tanya Produk Ini
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </section>

      <section data-testid="katalog-extra" className="border-t border-white/15">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
          <FadeUp>
            <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-tighter mb-12">
              Dan Masih <span className="italic text-white/70">Banyak Lagi</span>
            </h2>
          </FadeUp>
          <div className="border-t border-white/15">
            {EXTRA_PRODUCTS.map((item, i) => (
              <FadeUp key={item.name} delay={i * 0.05}>
                <a
                  href={waLink(`Halo Deyede! Saya ingin tanya tentang ${item.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`extra-product-${i}`}
                  className="group flex items-center justify-between py-6 md:py-8 border-b border-white/15 hover:px-4 transition-all duration-500"
                >
                  <div className="flex items-baseline gap-4 md:gap-8">
                    <span className="font-mono text-xs text-white/30">
                      {String(i + 5).padStart(2, "0")}
                    </span>
                    <h3 className="font-serif text-xl md:text-3xl group-hover:italic transition-all duration-300">
                      {item.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4 md:gap-8">
                    <span className="hidden md:block font-mono text-xs text-white/40 uppercase tracking-[0.2em]">
                      {item.note}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white transition-colors duration-300" />
                  </div>
                </a>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="katalog-cta" className="border-t border-white/15 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 text-center">
          <FadeUp>
            <h2 className="font-serif text-4xl md:text-6xl uppercase tracking-tighter">
              Tidak Menemukan <span className="italic text-white/70">Yang Dicari?</span>
            </h2>
            <p className="mt-6 max-w-md mx-auto text-sm text-white/60">
              Hampir semua produk tekstil bisa kami kerjakan. Tanyakan langsung
              — konsultasi selalu gratis.
            </p>
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="katalog-wa-button"
              className="group mt-10 inline-flex items-center gap-3 bg-white text-black font-mono text-xs uppercase tracking-[0.25em] px-10 py-5 border border-white transition-colors duration-300 hover:bg-transparent hover:text-white"
            >
              Tanya via WhatsApp
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </FadeUp>
        </div>
      </section>
    </PageWrap>
  );
}

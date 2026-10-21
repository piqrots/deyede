import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { RevealLine, FadeUp, PageWrap } from "@/components/Reveal";
import Ribbon from "@/components/Ribbon";
import ProductImageSlider from "@/components/ProductImageSlider";
import {
  SIGNATURE_BG,
  PRODUCTS,
  STEPS,
  BENEFITS,
  STATS,
  WA_DEFAULT,
} from "@/data/content";
import { PROMO_OFFERS } from "@/data/promos";

function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 160]);

  return (
    <section data-testid="hero-section" className="relative h-screen overflow-hidden flex flex-col">
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <img
          src={SIGNATURE_BG}
          alt=""
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
      </motion.div>

      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-6 md:px-10 pt-20">
        <RevealLine delay={0.15}>
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-thread">
            Konveksi Termurah — Semarang, Jawa Tengah
          </span>
        </RevealLine>
        <h1 className="font-serif uppercase tracking-tighter leading-[0.9] mt-6">
          <RevealLine delay={0.3} className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
            Konveksi
          </RevealLine>
          <RevealLine delay={0.45} className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl italic">
            Semarang
          </RevealLine>
          <RevealLine delay={0.6} className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
            Termurah<span className="text-thread">.</span>
          </RevealLine>
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 max-w-md text-sm md:text-base text-white/70 leading-relaxed"
        >
          Deyede Custom Semarang menjahit ide dan identitasmu menjadi kaos,
          hoodie, jaket, hingga seragam — dengan bahan premium dan jahitan
          yang berbicara sendiri.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.7 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-wa-button"
            className="group flex items-center gap-2 bg-white text-black font-mono text-xs uppercase tracking-[0.2em] px-7 py-4 border border-white transition-colors duration-300 hover:bg-transparent hover:text-white"
          >
            Pesan via WhatsApp
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <Link
            to="/katalog"
            data-testid="hero-catalog-button"
            className="group flex items-center gap-2 border border-white/40 text-white font-mono text-xs uppercase tracking-[0.2em] px-7 py-4 transition-colors duration-300 hover:bg-white hover:text-black"
          >
            Lihat Katalog
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="relative z-10 pb-8 flex justify-center"
      >
        <ArrowDown className="w-5 h-5 text-thread animate-bounce" />
      </motion.div>
    </section>
  );
}

function Stats() {
  return (
    <section data-testid="stats-section" className="border-b border-white/15">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <FadeUp
            key={stat.label}
            delay={i * 0.08}
            className={`px-6 md:px-10 py-10 md:py-14 border-white/15 ${
              i % 2 === 1 ? "border-l" : ""
            } ${i >= 2 ? "border-t md:border-t-0" : ""} ${
              i > 0 ? "md:border-l" : ""
            }`}
          >
            <p className="font-mono text-3xl md:text-5xl">{stat.value}</p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-white/50">
              {stat.label}
            </p>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

function FeaturedProducts() {
  return (
    <section data-testid="featured-products" className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
      <FadeUp>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-thread mb-4">01 — Katalog</p>
            <h2 className="font-serif text-4xl md:text-6xl uppercase tracking-tighter">
              Produk <span className="italic text-white/70">Unggulan</span>
            </h2>
          </div>
          <Link
            to="/katalog"
            data-testid="featured-see-all-link"
            className="group flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors duration-300"
          >
            Lihat Semua
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </FadeUp>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 border border-white/15">
        {PRODUCTS.map((product, i) => (
          <FadeUp key={product.id} delay={i * 0.1} className="bg-black">
            <Link
              to="/katalog"
              data-testid={`featured-product-${product.id}`}
              className="group block"
            >
              <div className={`overflow-hidden aspect-[3/4] ${product.contain ? "bg-white" : ""}`}>
                <ProductImageSlider
                  images={product.images}
                  alt={product.name}
                  contain={product.contain}
                  testid={`featured-slider-${product.id}`}
                />
              </div>
              <div className="p-6 border-t border-white/15">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                  {product.tagline}
                </p>
                <h3 className="font-serif text-xl md:text-2xl mt-2">{product.name}</h3>
                <p className="mt-3 font-mono text-xs text-thread">{product.price}</p>
              </div>
            </Link>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

function PromoHighlights() {
  return (
    <section data-testid="promo-highlights" className="border-y border-white/15 bg-stitch">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-thread mb-4">
                Penawaran Deyede
              </p>
              <h2 className="font-serif text-4xl md:text-6xl uppercase tracking-tighter">
                Promo Jersey Fun Run Murah <span className="italic text-white/70">& Baju Organisasi Murah</span>
              </h2>
              <p className="mt-4 max-w-2xl text-sm text-white/55 leading-relaxed">
                Tersedia diskon sesuai jumlah pesanan dan periode promo. Pesanan baju organisasi juga dapat bonus free lanyard ID card anggota sesuai ketentuan.
              </p>
            </div>
            <Link
              to="/promo"
              data-testid="promo-details-link"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors"
            >
              Lihat Semua Promo
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROMO_OFFERS.map((offer, index) => (
            <FadeUp key={offer.title} delay={index * 0.1}>
              <article className="grid grid-cols-1 sm:grid-cols-[minmax(0,12rem)_1fr] border border-white/15 bg-black h-full">
                <Link to={`/promo/${offer.slug}/`} className="block overflow-hidden bg-white">
                  <img src={offer.thumbnail} alt={offer.gallery[0].alt} loading="lazy" className="w-full h-48 sm:h-full object-contain" />
                </Link>
                <div className="p-5 md:p-7 flex flex-col items-start">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-thread">Promo Deyede</p>
                  <h3 className="font-serif text-xl sm:text-2xl uppercase mt-2">
                    <Link to={`/promo/${offer.slug}/`} className="hover:text-thread transition-colors">{offer.title}</Link>
                  </h3>
                  <p className="font-mono text-sm text-thread mt-2">{offer.price}</p>
                  <p className="mt-3 text-sm text-white/50 leading-relaxed">{offer.summary}</p>
                  <Link
                    to={`/promo/${offer.slug}/`}
                    data-testid={`home-promo-detail-${offer.slug}`}
                    className="mt-auto pt-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/65 hover:text-white transition-colors"
                  >
                    Baca Detail Promo
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepsPreview() {
  return (
    <section data-testid="steps-preview" className="border-y border-white/15 bg-white/[0.02] bg-stitch">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
        <FadeUp>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-thread mb-4">02 — Alur</p>
          <h2 className="font-serif text-4xl md:text-6xl uppercase tracking-tighter mb-14">
            Pesan Itu <span className="italic text-white/70">Mudah</span>
          </h2>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-white/15 border border-white/15">
          {STEPS.map((item, i) => (
            <FadeUp key={item.step} delay={i * 0.08} className="bg-black p-8 group hover:bg-white/[0.03] transition-colors duration-500">
              <p className="font-mono text-4xl md:text-5xl text-white/20 group-hover:text-thread transition-colors duration-500">
                {item.step}
              </p>
              <h3 className="mt-6 font-sans font-light text-lg">{item.title}</h3>
              <p className="mt-3 text-sm text-white/50 leading-relaxed line-clamp-3">
                {item.desc}
              </p>
            </FadeUp>
          ))}
        </div>
        <FadeUp delay={0.3} className="mt-10">
          <Link
            to="/cara-pesan"
            data-testid="steps-see-detail-link"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] border border-white/40 px-7 py-4 transition-colors duration-300 hover:bg-white hover:text-black"
          >
            Lihat Alur Lengkap
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section data-testid="benefits-section" className="relative overflow-hidden max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute -top-10 right-0 font-serif uppercase leading-none text-[10rem] md:text-[15rem] text-outline"
      >
        DYD
      </span>
      <FadeUp>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-thread mb-4">03 — Keunggulan</p>
        <h2 className="font-serif text-4xl md:text-6xl uppercase tracking-tighter mb-14">
          Kenapa <span className="italic text-white/70">Deyede?</span>
        </h2>
      </FadeUp>
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/15 border border-white/15">
        {BENEFITS.map((benefit, i) => (
          <FadeUp
            key={benefit.title}
            delay={i * 0.08}
            className="bg-black p-8 md:p-10 group hover:bg-white/[0.03] transition-colors duration-500"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 group-hover:text-thread transition-colors duration-500">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-5 font-serif text-2xl">{benefit.title}</h3>
            <p className="mt-3 text-sm text-white/50 leading-relaxed">{benefit.desc}</p>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section data-testid="home-cta-section" className="relative border-t border-white/15 overflow-hidden">
      <img
        src={SIGNATURE_BG}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-40 text-center">
        <FadeUp>
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-thread mb-6">
            Punya Desain? Punya Ide?
          </p>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.95]">
            Kami Jahit,<br />
            <span className="italic text-white/70">Kamu Tampil.</span>
          </h2>
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="home-cta-wa-button"
            className="group mt-12 inline-flex items-center gap-3 bg-white text-black font-mono text-xs md:text-sm uppercase tracking-[0.25em] px-10 py-5 border border-white transition-colors duration-300 hover:bg-transparent hover:text-white"
          >
            Konsultasi Gratis Sekarang
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </FadeUp>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <PageWrap>
      <Hero />
      <Ribbon />
      <Stats />
      <FeaturedProducts />
      <PromoHighlights />
      <StepsPreview />
      <Ribbon inverted speed={30} />
      <Benefits />
      <CtaSection />
    </PageWrap>
  );
}

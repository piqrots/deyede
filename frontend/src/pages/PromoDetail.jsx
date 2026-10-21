import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { FadeUp, PageWrap } from "@/components/Reveal";
import { CONTACT, waLinkFor } from "@/data/content";
import { PROMO_OFFERS } from "@/data/promos";
import { usePageMetadata } from "@/hooks/usePageMetadata";

function WhatsAppLink({ message }) {
  return (
    <a
      href={waLinkFor(CONTACT.waNumber, message)}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-3 bg-white text-black font-mono text-xs uppercase tracking-[0.16em] px-6 py-4 border border-white transition-colors hover:bg-transparent hover:text-white"
    >
      Konsultasi via WhatsApp
      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

export default function PromoDetail() {
  const { slug } = useParams();
  const offer = PROMO_OFFERS.find((item) => item.slug === slug);

  usePageMetadata(
    offer
      ? {
          title: offer.pageTitle,
          description: offer.description,
          canonical: `https://konveksimurah.store/promo/${offer.slug}/`,
          image: offer.shareImage,
          imageAlt: offer.gallery[0].alt,
        }
      : null,
  );

  if (!offer) {
    return (
      <PageWrap>
        <section className="max-w-7xl mx-auto px-6 md:px-10 pt-36 pb-24">
          <h1 className="font-serif text-4xl uppercase">Promo tidak ditemukan</h1>
          <Link to="/promo/" className="mt-6 inline-flex items-center gap-2 text-sm text-thread">
            <ArrowLeft className="w-4 h-4" /> Kembali ke semua promo
          </Link>
        </section>
      </PageWrap>
    );
  }

  return (
    <PageWrap>
      <article>
        <header className="relative pt-32 md:pt-44 pb-14 md:pb-20 border-b border-white/15 bg-stitch">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <Link to="/promo/" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/50 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" /> Semua Promo
            </Link>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-thread mt-9">
              Promo Produk · Deyede Custom Semarang
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl uppercase tracking-tighter leading-[0.95] mt-5 max-w-5xl">
              {offer.title}
              <span className="block italic text-white/65">Custom di Semarang</span>
            </h1>
            <p className="mt-7 max-w-2xl text-sm md:text-base text-white/60 leading-relaxed">
              {offer.intro}
            </p>
            <p className="font-mono text-2xl sm:text-3xl text-thread mt-7">{offer.price}</p>
            <p className="mt-3 text-xs text-white/40">Harga awal; penawaran akhir menyesuaikan spesifikasi dan jumlah pesanan.</p>
            <div className="mt-8"><WhatsAppLink message={offer.message} /></div>
          </div>
        </header>

        <section className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-16">
          <div className={`grid gap-3 ${offer.gallery.length === 3 ? "grid-cols-2 md:grid-cols-3" : "grid-cols-1 sm:grid-cols-2"}`}>
            {offer.gallery.map((image, index) => (
              <figure key={image.src} className={`relative overflow-hidden bg-white ${offer.gallery.length === 3 && index === 0 ? "col-span-2 md:col-span-1" : ""}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full aspect-[4/3] object-contain"
                  loading={index > 0 ? "lazy" : "eager"}
                />
              </figure>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-7">
            <FadeUp>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-thread">Panduan Pemesanan</p>
              <h2 className="font-serif text-3xl md:text-5xl uppercase mt-4">Apa yang Perlu Disiapkan?</h2>
              <p className="mt-5 text-sm text-white/60 leading-relaxed">
                Agar penawaran lebih sesuai, siapkan jumlah pesanan, ukuran, desain atau referensi, pilihan bahan bila sudah ada, dan tanggal penggunaan. Tim akan membantu membahas spesifikasi serta harga sebelum pesanan masuk produksi.
              </p>
            </FadeUp>

            <div className="mt-10">
              <h2 className="font-serif text-2xl md:text-3xl uppercase">Keunggulan Pesanan Custom</h2>
              <ul className="mt-5 divide-y divide-white/15 border-y border-white/15">
                {offer.benefits.map((benefit) => (
                  <li key={benefit} className="py-4 flex gap-4 text-sm text-white/65 leading-relaxed">
                    <span className="font-mono text-thread">+</span>{benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <h2 className="font-serif text-2xl md:text-3xl uppercase">Proses Pembuatan</h2>
              <ol className="mt-5 border-t border-white/15">
                {offer.process.map((step, index) => (
                  <li key={step} className="grid grid-cols-[2rem_1fr] gap-4 py-4 border-b border-white/15">
                    <span className="font-mono text-xs text-thread">0{index + 1}</span>
                    <span className="text-sm text-white/60 leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="border-l-2 border-thread pl-6 py-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-thread">Promo Berlaku</p>
              <p className="mt-4 text-sm text-white/65 leading-relaxed">{offer.promoDetails}</p>
              <div className="mt-6"><WhatsAppLink message={offer.message} /></div>
            </div>
            <div className="mt-12">
              <h2 className="font-serif text-2xl uppercase">Pertanyaan Umum</h2>
              <div className="mt-5 divide-y divide-white/15 border-y border-white/15">
                {offer.faqs.map((faq) => (
                  <details key={faq.question} className="py-4 group">
                    <summary className="cursor-pointer list-none font-sans text-sm text-white/80 flex items-start justify-between gap-4">
                      {faq.question}
                      <span className="font-mono text-thread group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <p className="mt-3 pr-6 text-sm text-white/50 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </article>
    </PageWrap>
  );
}
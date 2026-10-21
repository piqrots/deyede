import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FadeUp, PageWrap } from "@/components/Reveal";
import { PROMO_OFFERS } from "@/data/promos";
import { usePageMetadata } from "@/hooks/usePageMetadata";

const PAGE_TITLE = "Promo Produk Konveksi Semarang | Deyede Custom";
const PAGE_DESCRIPTION =
  "Jelajahi promo produk Deyede Custom Semarang, termasuk jersey fun run murah mulai Rp45.000 dan baju organisasi murah mulai Rp100.000. Buka detail untuk melihat foto, proses, dan penawaran.";

export default function Promo() {
  usePageMetadata({
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    canonical: "https://konveksimurah.store/promo/",
    image: "https://konveksimurah.store/jersey1.jpeg",
    imageAlt: "Promo produk custom Deyede Semarang",
  });

  return (
    <PageWrap>
      <section className="relative pt-32 md:pt-44 pb-14 md:pb-18 overflow-hidden border-b border-white/15">
        <div className="absolute inset-0 bg-stitch opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-thread">
            Promo Deyede · Konveksi Semarang
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl uppercase tracking-tighter leading-[0.95] mt-6 max-w-5xl">
            Promo Deyede
            <span className="block italic text-white/65">Custom Semarang</span>
          </h1>
          <FadeUp delay={0.2} className="mt-8 max-w-2xl text-sm md:text-base text-white/60 leading-relaxed">
            Temukan penawaran untuk jersey fun run, baju organisasi, dan produk custom lainnya. Buka detail setiap promo untuk melihat foto, proses pembuatan, harga awal, serta cara konsultasi.
          </FadeUp>
          <p className="mt-5 max-w-2xl border-l-2 border-thread pl-4 text-sm text-white/70 leading-relaxed">
            Tanyakan diskon yang sedang berlaku. Untuk pesanan baju organisasi tersedia bonus gratis lanyard ID card anggota sesuai jumlah pesanan, kuota, dan ketentuan promo.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {PROMO_OFFERS.map((offer, index) => (
            <FadeUp key={offer.slug} delay={index * 0.1}>
              <article className="h-full border border-white/15 bg-black">
                <Link to={`/promo/${offer.slug}/`} className="block overflow-hidden bg-white">
                  <img src={offer.thumbnail} alt={offer.gallery[0].alt} className="w-full aspect-[16/9] object-contain" />
                </Link>
                <div className="p-6 md:p-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-thread">
                    Promo {String(index + 1).padStart(2, "0")} · Konveksi Semarang
                  </p>
                  <h2 className="font-serif text-2xl md:text-3xl uppercase mt-3">
                    <Link to={`/promo/${offer.slug}/`} className="hover:text-thread transition-colors">
                      {offer.title}
                    </Link>
                  </h2>
                  <p className="font-mono text-lg text-thread mt-3">{offer.price}</p>
                  <p className="mt-4 text-sm text-white/55 leading-relaxed">{offer.summary}</p>
                  <Link
                    to={`/promo/${offer.slug}/`}
                    data-testid={`promo-detail-${offer.slug}`}
                    className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] border-b border-white/40 pb-2 hover:border-thread hover:text-thread transition-colors"
                  >
                    Baca Detail Promo
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </section>
    </PageWrap>
  );
}
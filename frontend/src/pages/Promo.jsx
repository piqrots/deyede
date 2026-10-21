import { useEffect } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { FadeUp, PageWrap, RevealLine } from "@/components/Reveal";
import { CONTACT, IMAGES, waLinkFor } from "@/data/content";

const PAGE_TITLE = "Jersey Fun Run Murah & Baju Organisasi | Deyede Semarang";
const PAGE_DESCRIPTION =
  "Pesan jersey fun run custom mulai Rp45.000 dan baju organisasi mulai Rp100.000 di Deyede Custom Semarang. Lihat bahan, proses pembuatan, dan konsultasi via WhatsApp.";

const JERSEY_MESSAGE =
  "Halo Deyede, saya ingin konsultasi jersey fun run custom mulai Rp45.000.";
const ORGANIZATION_MESSAGE =
  "Halo Deyede, saya ingin konsultasi baju organisasi custom mulai Rp100.000.";

function WhatsAppLink({ message, children, className = "" }) {
  return (
    <a
      href={waLinkFor(CONTACT.waNumber, message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-3 bg-white text-black font-mono text-xs uppercase tracking-[0.16em] px-6 py-4 border border-white transition-colors hover:bg-transparent hover:text-white ${className}`}
    >
      {children}
      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

function OfferArticle({ id, number, title, price, image, alt, children, message }) {
  return (
    <article id={id} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 py-14 md:py-20 border-b border-white/15 scroll-mt-24">
      <div className="relative min-h-64 md:min-h-80 bg-white overflow-hidden">
        <img src={image} alt={alt} loading="lazy" className="absolute inset-0 w-full h-full object-contain" />
      </div>
      <div className="flex flex-col items-start justify-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-thread">
          Penawaran {number} · Produksi Custom Semarang
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight mt-4">
          {title}
        </h2>
        <p className="font-mono text-2xl text-thread mt-5">{price}</p>
        <div className="mt-5 text-sm text-white/60 leading-relaxed space-y-3">{children}</div>
        <WhatsAppLink message={message} className="mt-7">
          Konsultasi Harga
        </WhatsAppLink>
      </div>
    </article>
  );
}

export default function Promo() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.content;
    const canonical = document.querySelector('link[rel="canonical"]');
    const previousCanonical = canonical?.href;
    const addedCanonical = !canonical;
    const canonicalLink = canonical || document.createElement("link");

    document.title = PAGE_TITLE;
    if (description) description.content = PAGE_DESCRIPTION;
    if (addedCanonical) {
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = "https://konveksimurah.store/promo/";

    return () => {
      document.title = previousTitle;
      if (description && previousDescription) description.content = previousDescription;
      if (addedCanonical) canonicalLink.remove();
      else if (previousCanonical) canonicalLink.href = previousCanonical;
    };
  }, []);

  const productionSteps = [
    "Konsultasikan jumlah pesanan, ukuran, desain, dan tenggat acara.",
    "Pilih bahan dan teknik produksi yang sesuai dengan fungsi pakaian.",
    "Periksa detail desain dan spesifikasi sebelum produksi dimulai.",
    "Pesanan diproduksi dan diperiksa kualitas serta jumlahnya sebelum dikirim.",
  ];

  return (
    <PageWrap>
      <section className="relative pt-32 md:pt-44 pb-16 md:pb-20 overflow-hidden border-b border-white/15">
        <div className="absolute inset-0 bg-stitch opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <RevealLine>
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-thread">
              Promo Deyede · Konveksi Semarang
            </span>
          </RevealLine>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl uppercase tracking-tighter leading-[0.95] mt-6 max-w-5xl">
            <RevealLine>Jersey Fun Run Murah</RevealLine>
            <RevealLine className="italic text-white/65">& Baju Organisasi Custom</RevealLine>
          </h1>
          <FadeUp delay={0.2} className="mt-8 max-w-2xl text-sm md:text-base text-white/60 leading-relaxed">
            Produksi jersey untuk event lari dan baju organisasi dengan desain, ukuran, serta spesifikasi yang bisa disesuaikan. Harga jersey mulai Rp45.000 dan baju organisasi mulai Rp100.000.
          </FadeUp>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#jersey" className="font-mono text-[10px] uppercase tracking-[0.14em] border border-white/25 px-4 py-3 hover:border-thread hover:text-thread transition-colors">
              Jersey Fun Run
            </a>
            <a href="#organisasi" className="font-mono text-[10px] uppercase tracking-[0.14em] border border-white/25 px-4 py-3 hover:border-thread hover:text-thread transition-colors">
              Baju Organisasi
            </a>
          </div>
        </div>
      </section>

      <section id="jersey" className="max-w-7xl mx-auto px-6 md:px-10 scroll-mt-24">
        <OfferArticle
          number="01"
          title="Jersey Fun Run Murah"
          price="Mulai Rp45.000 / pcs"
          image={IMAGES.jersey}
          alt="Contoh jersey custom untuk peserta fun run"
          message={JERSEY_MESSAGE}
        >
          <p>
            Jersey fun run custom membantu panitia membuat tampilan peserta dan tim lebih mudah dikenali. Desain dapat menyesuaikan warna event, identitas komunitas, nama sponsor, dan kebutuhan nomor peserta.
          </p>
          <p>
            Bahan dan teknik cetak ditentukan bersama berdasarkan desain, jumlah pesanan, serta kenyamanan saat acara. Untuk event lari, pertimbangkan bahan yang ringan dan nyaman bergerak.
          </p>
          <p className="text-white/40 text-xs">
            Harga mulai merupakan harga awal. Harga akhir dikonfirmasi setelah jumlah, ukuran, bahan, dan detail desain diketahui.
          </p>
        </OfferArticle>

        <OfferArticle
          id="organisasi"
          number="02"
          title="Baju Organisasi Murah"
          price="Mulai Rp100.000 / pcs"
          image={IMAGES.pdhFront}
          alt="Contoh baju organisasi custom untuk komunitas dan kepanitiaan"
          message={ORGANIZATION_MESSAGE}
        >
          <p>
            Baju organisasi custom dapat dibuat untuk pengurus, komunitas, kepanitiaan, maupun kegiatan lapangan. Pilih model, warna, ukuran, logo, dan detail identitas agar seragam sesuai kebutuhan tim.
          </p>
          <p>
            Pilihan bahan dan detail produksi dibahas sebelum pengerjaan. Untuk kemeja organisasi, bahan seperti American Drill atau Japan Drill dapat dipertimbangkan sesuai model dan kenyamanan yang diinginkan.
          </p>
          <p className="text-white/40 text-xs">
            Harga mulai merupakan harga awal. Spesifikasi dan jumlah pesanan memengaruhi penawaran akhir.
          </p>
        </OfferArticle>
      </section>

      <section className="border-y border-white/15 bg-white/[0.02] bg-stitch">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-thread">Dari Ide ke Produksi</p>
            <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-tight mt-4">
              Proses Pembuatan yang Jelas
            </h2>
            <p className="mt-5 text-sm text-white/55 leading-relaxed">
              Setiap pesanan dimulai dari spesifikasi yang disepakati. Tim Deyede membantu membahas bahan dan detail produksi, lalu mengerjakan pesanan sesuai desain dan kebutuhan acara atau organisasi.
            </p>
            <Link to="/portofolio" className="mt-7 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-white/60 hover:text-white transition-colors">
              Lihat Hasil Pengerjaan
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <ol className="lg:col-span-7 border-t border-white/15">
            {productionSteps.map((step, index) => (
              <li key={step} className="grid grid-cols-[2.5rem_1fr] gap-4 py-5 border-b border-white/15">
                <span className="font-mono text-xs text-thread">0{index + 1}</span>
                <span className="text-sm text-white/70 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <FadeUp>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-thread">Untuk Event & Tim</p>
          <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-tight mt-4">
            Jersey, Seragam, hingga Medali
          </h2>
          <p className="mt-5 max-w-3xl text-sm text-white/55 leading-relaxed">
            Selain jersey fun run murah dan baju organisasi custom, Deyede juga melayani kebutuhan medali finisher dan merchandise event. Konsultasikan kebutuhan dalam satu percakapan agar spesifikasi, jumlah, dan jadwal pengerjaan dapat dibahas sejak awal.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <WhatsAppLink message="Halo Deyede, saya ingin konsultasi jersey, baju organisasi, atau kebutuhan event.">
              Tanya Jadwal & Harga
            </WhatsAppLink>
            <Link to="/cara-pesan" className="inline-flex items-center gap-3 border border-white/30 px-6 py-4 font-mono text-xs uppercase tracking-[0.16em] hover:border-white transition-colors">
              Cara Pemesanan
              <Check className="w-4 h-4" />
            </Link>
          </div>
        </FadeUp>
      </section>
    </PageWrap>
  );
}
const fs = require("fs");
const path = require("path");

const buildDirectory = path.join(__dirname, "..", "build");
const pages = [
  {
    file: "promo/index.html",
    title: "Promo Produk Konveksi Semarang | Deyede Custom",
    description:
      "Jelajahi promo produk Deyede Custom Semarang, termasuk jersey fun run dan baju organisasi. Buka detail untuk melihat foto, harga, dan penawaran.",
    url: "https://konveksimurah.store/promo/",
    image: "https://konveksimurah.store/jersey1.jpeg",
    imageAlt: "Promo produk custom Deyede Semarang",
  },
  {
    file: "promo/jersey-fun-run-murah/index.html",
    title: "Jersey Fun Run Murah Custom Mulai Rp45.000 | Deyede Semarang",
    description:
      "Pesan jersey fun run custom di Semarang mulai Rp45.000. Sesuaikan desain, warna, ukuran, dan jumlah untuk kebutuhan event lari. Tanyakan promo diskon via WhatsApp.",
    url: "https://konveksimurah.store/promo/jersey-fun-run-murah/",
    image: "https://konveksimurah.store/tubnailjersey.jpeg",
    imageAlt: "Promo jersey fun run custom mulai Rp45.000",
  },
  {
    file: "promo/baju-organisasi-murah/index.html",
    title: "Baju Organisasi Murah Custom Mulai Rp100.000 | Deyede Semarang",
    description:
      "Baju organisasi custom di Semarang mulai Rp100.000. Tanyakan diskon dan bonus gratis lanyard ID card anggota sesuai ketentuan promo.",
    url: "https://konveksimurah.store/promo/baju-organisasi-murah/",
    image: "https://konveksimurah.store/pdh1.jpeg",
    imageAlt: "Promo baju organisasi custom Deyede Semarang",
  },
];

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

for (const page of pages) {
  const filePath = path.join(buildDirectory, page.file);
  let html = fs.readFileSync(filePath, "utf8");
  const title = escapeHtml(page.title);
  const description = escapeHtml(page.description);
  const titlePattern = /<title>[\s\S]*?<\/title>/i;
  const descriptionPattern = /<meta\s+name="description"[^>]*>/i;

  if (!titlePattern.test(html) || !descriptionPattern.test(html)) {
    throw new Error(`Could not find title or description metadata in ${page.file}`);
  }

  html = html.replace(titlePattern, `<title>${title}</title>`);
  html = html.replace(
    descriptionPattern,
    `<meta name="description" content="${description}" />`,
  );

  const socialMetadata = [
    `<link rel="canonical" href="${page.url}" />`,
    '<meta property="og:type" content="website" />',
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${page.url}" />`,
    `<meta property="og:image" content="${page.image}" />`,
    `<meta property="og:image:alt" content="${escapeHtml(page.imageAlt)}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${page.image}" />`,
  ].join("\n    ");

  html = html.replace("</head>", `    ${socialMetadata}\n  </head>`);
  fs.writeFileSync(filePath, html);
}
export const LOGO_URL =
  "https://customer-assets-cm19k8pv.emergentagent.net/job_c27d21c5-4c2d-4415-8093-86e16dbe92a1/artifacts/da1d8a759880a12f_LOGO%20DEYEDE.webp";

export const SIGNATURE_BG =
  "https://customer-assets-cm19k8pv.emergentagent.net/job_c27d21c5-4c2d-4415-8093-86e16dbe92a1/artifacts/5a8e415af7c8c22e_ciri%20khas%20latar%20belakang%20deyede.png";

export const CONTACT = {
  waNumber: "62895638849294",
  waDisplay: "+62 895-6388-49294 ( 24 Hours )",
  waNumber2: "628213307722",
  waDisplay2: "+62 821-3307-722 ( 24 Hours )",
  email: "dydcustom@gmail.com",
  address: "DYD Custom Semarang, Kota Semarang, Jawa Tengah",
  mapsUrl:
    "https://www.google.com/maps/place/DYD+Custom+Semarang/@-7.0365825,110.4669816,17z/data=!3m1!4b1!4m6!3m5!1s0x2e708db7dc9f8fe9:0xf190604ffdf969c1!8m2!3d-7.0365825!4d110.4669816!16s%2Fg%2F11y17fl51p?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D",
  hours: "Senin – Sabtu, 09.00 – 17.00 WIB",
  instagram: "@deyedecustom",
  instagramUrl: "https://instagram.com/deyedecustom",
};

export const WA_MESSAGE =
  "Halo Deyede Custom Semarang! Saya ingin konsultasi pemesanan konveksi.";

export const ADMINS = [
  { label: "Admin 1", number: CONTACT.waNumber, display: CONTACT.waDisplay },
  { label: "Admin 2", number: CONTACT.waNumber2, display: CONTACT.waDisplay2 },
];

export const waLinkFor = (number, message) =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

export const waLink = (message) => waLinkFor(CONTACT.waNumber, message);

export const WA_DEFAULT = waLink(WA_MESSAGE);

export const IMAGES = {
  tshirt:
    "https://customer-assets-gfyr7b9c.emergentagent.net/job_deyede-profile/artifacts/b4d08950c11f0ddb_Kaos%20Indigo%20The%201975%20Kaos%20Putih.png",
  jersey:
    "https://customer-assets-gfyr7b9c.emergentagent.net/job_deyede-profile/artifacts/81072d7a223eb085_Mechanical%20Romance%20Jersey%20Mockup.png",
  pdhFront:
    "https://customer-assets-gfyr7b9c.emergentagent.net/job_deyede-profile/artifacts/2fffabfc5195bf43_Navy%20Utility%20Shirt%20with%20Ivory%20Accents.png",
  pdhBack:
    "https://customer-assets-gfyr7b9c.emergentagent.net/job_deyede-profile/artifacts/c973521aed791cc8_Analysis%20output%202.png",
  vestCreamFront:
    "https://customer-assets-gfyr7b9c.emergentagent.net/job_deyede-profile/artifacts/3e3d1588636fdf89_DEYEDE%20Green%20and%20Cream%20Utility%20Vest.png",
  vestCreamBack:
    "https://customer-assets-gfyr7b9c.emergentagent.net/job_deyede-profile/artifacts/afda8867507f95af_DEYEDE%20Custom%20Semarang%20Utility%20Vest.png",
  vestOliveFront:
    "https://customer-assets-gfyr7b9c.emergentagent.net/job_deyede-profile/artifacts/4af4f7bed37881d9_Olive%20Utility%20Vest%20with%20White%20Branding.png",
  vestOliveBack:
    "https://customer-assets-gfyr7b9c.emergentagent.net/job_deyede-profile/artifacts/02a5069e1ae70b4b_Olive%20Utility%20Vest%20with%20DEYEDE%20Branding.png",
  medaliVideo:
    "https://customer-assets-gfyr7b9c.emergentagent.net/job_deyede-profile/artifacts/1cab12d0895af781_SaveClip.App_AQOsrGHDaixpVfaF3kB815VJiLjXLSEtuuXye6l-ccfbYlmno7QJI4BYbHw3W7PF1tkIfKEGbxuMklrlNbVJoqeH.mp4",
  medaliUniba:
    "https://customer-assets-gfyr7b9c.emergentagent.net/job_deyede-profile/artifacts/b6e19b74d21a38fd_Medali%20Finisher%20UNIBA%20Fun%20Run%202026.png",
  medaliAmabel:
    "https://customer-assets-gfyr7b9c.emergentagent.net/job_deyede-profile/artifacts/31e6f71cf50d9372_Amabel%20Fun%20Run%20Finisher%20Medal.png",
  medaliColorRun:
    "https://customer-assets-gfyr7b9c.emergentagent.net/job_deyede-profile/artifacts/8319a8a7f870159e_Color%20Run%202026%20Finisher%20Medal.png",
  kaosThe1975Black:
    "https://customer-assets-gfyr7b9c.emergentagent.net/job_deyede-profile/artifacts/690b1c785827b695_Black%20Distressed%20The%201975%20Graphic%20T-Shirt.png",
  kaosAfterHours:
    "https://customer-assets-gfyr7b9c.emergentagent.net/job_deyede-profile/artifacts/884a74a82348c845_After%20Hours%20Cyber%20Angel%20T-Shirt.png",
  kaosBulls:
    "https://customer-assets-gfyr7b9c.emergentagent.net/job_deyede-profile/artifacts/46ce6d57f5dad165_Chicago%20Bulls%2023%20Legends%20Streetwear%20Tee.png",
  merchFlatlay:
    "https://customer-assets-gfyr7b9c.emergentagent.net/job_deyede-profile/artifacts/cb0defeb77054f79_Minimal%20Deyede%20Branded%20Merchandise%20Layout.png",
  merchUmbrella:
    "https://customer-assets-gfyr7b9c.emergentagent.net/job_deyede-profile/artifacts/3f07f70eb27b18d5_Minimal%20White%20Umbrella%20with%20Deyede%20Logo.png",
  merchTotebag:
    "https://customer-assets-gfyr7b9c.emergentagent.net/job_deyede-profile/artifacts/9415c1abcccf499b_02_tote_bag_deyede.png",
  merchMug:
    "https://customer-assets-gfyr7b9c.emergentagent.net/job_deyede-profile/artifacts/bf45332fc766c011_01_mug_deyede.png",
  merchCap:
    "https://customer-assets-gfyr7b9c.emergentagent.net/job_deyede-profile/artifacts/3b7646ec28d67ca3_04_topi_deyede.png",
  merchNotebook:
    "https://customer-assets-gfyr7b9c.emergentagent.net/job_deyede-profile/artifacts/5b38de5477becc50_05_buku_catatan_deyede.png",
  merchTumbler:
    "https://customer-assets-gfyr7b9c.emergentagent.net/job_deyede-profile/artifacts/aca46b495fe6225e_Minimalist%20White%20Deyede%20Bottle%20Duo.png",
};

export const PRODUCTS = [
  {
    id: "kaos",
    name: "Kaos Custom",
    tagline: "Cotton Combed 24s / 30s",
    desc: "Kaos sablon plastisol, DTF, dan bordir untuk komunitas, event, hingga brand clothing-mu sendiri.",
    price: "Mulai Dari Rp 65.000",
    images: [IMAGES.tshirt, IMAGES.kaosThe1975Black, IMAGES.kaosAfterHours],
    contain: true,
  },
  {
    id: "pdh",
    name: "Kemeja PDH",
    tagline: "American & Japan Drill",
    desc: "Kemeja PDH dan PDL untuk seragam kerja, organisasi, dan komunitas — potongan tegas dengan detail bordir presisi.",
    price: "Mulai Dari Rp 130.000",
    images: [IMAGES.pdhFront, IMAGES.pdhBack],
    contain: true,
  },
  {
    id: "jersey",
    name: "Jersey",
    tagline: "Dry Fit Full Printing",
    desc: "Jersey olahraga dan esports dengan printing full-body yang tajam dan bahan dry fit yang adem dipakai.",
    price: "Mulai Dari Rp 45.000",
    images: [IMAGES.jersey, IMAGES.kaosBulls],
    contain: true,
  },
  {
    id: "totebag",
    name: "Merchandise & Seminar Kit",
    tagline: "Totebag, Mug, Topi, Tumbler",
    desc: "Totebag, mug, topi, buku catatan, hingga tumbler custom untuk seminar kit, souvenir event, dan promosi brand.",
    price: "Mulai Dari Rp 5.000",
    images: [
      IMAGES.merchFlatlay,
      IMAGES.merchTotebag,
      IMAGES.merchMug,
      IMAGES.merchCap,
      IMAGES.merchNotebook,
      IMAGES.merchTumbler,
      IMAGES.merchUmbrella,
    ],
    contain: true,
  },
  {
    id: "vest",
    name: "Vest / Rompi",
    tagline: "Drill & Kanvas Premium",
    desc: "Rompi utility custom untuk event, media, komunitas, hingga petugas lapangan — banyak saku fungsional dengan bordir logo presisi.",
    price: "Mulai Dari Rp 100.000",
    images: [
      IMAGES.vestCreamFront,
      IMAGES.vestCreamBack,
      IMAGES.vestOliveFront,
      IMAGES.vestOliveBack,
    ],
    contain: true,
  },
  {
    id: "medali",
    name: "Medali",
    tagline: "COR LOGAM/ZINC ALLOY & TALI CUSTOM",
    desc: "Medali finisher dan penghargaan custom untuk fun run, lomba, hingga event kampus — lengkap dengan tali lanyard sablon sesuai desainmu.",
    price: "Mulai Dari Rp 25.000",
    images: [
      IMAGES.medaliAmabel,
      IMAGES.medaliVideo,
      IMAGES.medaliUniba,
      IMAGES.medaliColorRun,
    ],
    contain: true,
  },
];

export const EXTRA_PRODUCTS = [
  { name: "Hoodie & Sweater", note: "Fleece cotton premium" },
  { name: "Kaos Polo", note: "Lacoste PE / CVC" },
  { name: "Jaket & Varsity", note: "Taslan, drill, baby canvas" },
  { name: "Topi", note: "Bordir & sablon" },
  { name: "Seragam Kerja", note: "Kantor hingga lapangan" },
  { name: "Jas Almamater", note: "Kampus & organisasi" },
];

export const STEPS = [
  {
    step: "01",
    title: "Konsultasi",
    desc: "Ceritakan kebutuhanmu — jenis produk, jumlah, bahan, dan tenggat waktu. Tim kami bantu hitung estimasi harga secara transparan.",
  },
  {
    step: "02",
    title: "Kirimkan Referensimu",
    desc: "Kirim desainmu sendiri, atau serahkan pada tim desain kami — gratis. Kami review teknis agar hasil cetak dan jahitan maksimal.",
  },
  {
    step: "03",
    title: "Pembayaran DP",
    desc: "Setelah desain dan harga disepakati, kamu menerima invoice resmi. Produksi dimulai setelah uang muka terkonfirmasi.",
  },
  {
    step: "04",
    title: "Produksi",
    desc: "Pesananmu masuk lini produksi dengan quality control di setiap tahap — potong, jahit, sablon, hingga finishing.",
  },
  {
    step: "05",
    title: "Pelunasan & Kirim",
    desc: "Setelah pelunasan, pesanan bisa diambil langsung di workshop atau dikirim dengan aman ke lokasimu di seluruh Indonesia.",
  },
];

export const BENEFITS = [
  {
    title: "Bahan Premium",
    desc: "Hanya material pilihan — combed, drill, fleece, dan canvas terbaik di kelasnya.",
  },
  {
    title: "Jahitan Rapi",
    desc: "Jahitan rantai dan obras rapat, dicek satu per satu sebelum keluar workshop.",
  },
  {
    title: "Free Desain",
    desc: "Belum punya desain? Tim kreatif kami bantu wujudkan tanpa biaya tambahan.",
  },
  {
    title: "Harga Transparan",
    desc: "Estimasi jelas di awal. Tidak ada biaya tersembunyi di tengah jalan.",
  },
  {
    title: "Tepat Waktu",
    desc: "Timeline produksi disepakati sejak awal dan kami pegang komitmennya.",
  },
  {
    title: "Garansi Pesanan",
    desc: "Ada cacat produksi? Kami ganti. Setiap pesanan dilindungi garansi.",
  },
];

export const STATS = [
  { value: "500+", label: "Pelanggan Puas" },
  { value: "25K+", label: "Pcs Diproduksi" },
  { value: "24/7", label: "Siap Melayani" },
  { value: "100%", label: "Komitmen Kualitas" },
];

export const PORTFOLIO = [
  {
    id: "fun-run",
    category: "Fun Run",
    headline: "Paket Event Lari",
    desc: "Jersey, medali, racebag, hingga BIB number — satu vendor untuk seluruh kebutuhan event larimu.",
    featured: {
      name: "FUNRUN UNISSULA",
      location: "Semarang, Jawa Tengah",
      instagram: "@sultanagungfunrun",
      image:
        "https://customer-assets-gfyr7b9c.emergentagent.net/job_deyede-profile/artifacts/71b16a0c787e7056_FUNRUN%20UNISSULA.webp",
      products: [
        { name: "Jersey", material: "Dryfit Century Running" },
        { name: "Medali", material: "Zinc Alloy" },
        { name: "Goodie Bag", material: "Satin" },
        { name: "BIB Number", material: "Albatros" },
      ],
    },
    items: [
      { name: "SMANPAT FUNRUN", location: "Kendari, Sulawesi Tenggara", products: "Jersey Peserta · Jersey Panitia · Jersey Paccer · Medali · Racebag · BIB Number", material: "Dryfit Century Running · Timah Gold Kombinasi", images: ["/portofolio/manpat-1.png", "/portofolio/manpat-2.png", "/portofolio/manpat-3.png"] },
      { name: "DEWA EMAS FUNRUN", location: "Boyolali, Jawa Tengah", products: "Medali · Goodie Bag", material: "Timah Full Colour · Spunbond", images: ["https://customer-assets-gfyr7b9c.emergentagent.net/job_deyede-profile/artifacts/484461dbe5d85a13_Golden%20Race%20Medals%20at%20the%20Finish%20Line.png", "https://customer-assets-gfyr7b9c.emergentagent.net/job_deyede-profile/artifacts/c7f8370d2019f951_medali%20dewa%20emas%201.jpeg", "https://customer-assets-gfyr7b9c.emergentagent.net/job_deyede-profile/artifacts/951148c71b16e8a8_goodie%20bag%20dewa%20emas.webp"] },
      { name: "NEPAN FUNRUN", location: "Cirebon, Jawa Barat", products: "Jersey Peserta · Medali · BIB Number", material: "Dryfit Century Running · Timah Full Colour", images: ["/portofolio/nepan-1.png", "/portofolio/nepan-2.png", "/portofolio/nepan-3.png"] },
      { name: "JOGLO DAHAR", location: "Boyolali, Jawa Tengah", products: "Medali", material: "Timah Full Colour", images: ["/portofolio/joglo-dahar-1.png", "/portofolio/joglo-dahar-2.png", "/portofolio/joglo-dahar-3.png"] },
      { name: "UGJ FUNRUN", location: "Cirebon, Jawa Barat", products: "Racebag Serut", material: "Polyester Premium", images: ["/portofolio/ugj-1.png", "/portofolio/ugj-2.png", "/portofolio/ugj-3.png"] },
      { name: "ST. LOUIS 2 FUNRUN", location: "Surabaya, Jawa Timur", products: "Medali · Racebag · BIB Number", material: "Timah Full Colour · Spunbond", images: ["/portofolio/st-louis-1.png", "/portofolio/st-louis-2.png", "/portofolio/st-louis-3.png"] },
      { name: "MILAD MUHAMMADIYAH", location: "Blora, Jawa Tengah", products: "Jersey Peserta", material: "Dryfit Century Running", images: ["/portofolio/milad-1.png", "/portofolio/milad-2.png", "/portofolio/milad-3.png"] },
      { name: "UNIBA FUNRUN", location: "Madura, Jawa Timur", products: "Medali", material: "Zinc Alloy Natural & Gold", images: ["/portofolio/uniba-1.png", "/portofolio/uniba-2.png", "/portofolio/uniba-3.png"] },
    ],
  },
  {
    id: "organisasi",
    category: "Identitas Organisasi",
    headline: "Seragam & Identitas",
    desc: "PDH, vest, dan ID card untuk BEM, OSIS, Pramuka, hingga tim KKN.",
    items: [
      { name: "JAS ALMAMATER PAC IPNU & IPPNU", location: "Mranggen, Kab. Demak", products: "Jas Almamater", material: "High Twist", images: ["https://customer-assets-gfyr7b9c.emergentagent.net/job_deyede-profile/artifacts/1089cc73f357b9b4_Packaged%20Navy%20Uniforms%20with%20Neon%20Name%20Patches.png", "https://customer-assets-gfyr7b9c.emergentagent.net/job_deyede-profile/artifacts/0c961d6dcf5f6481_almet.jpeg"] },
      { name: "TK PERTIWI PEDURUNGAN", location: "Semarang, Jawa Tengah", products: "Setelan Kaos & Celana Training", material: "Cotton Combed 30s", images: ["https://customer-assets-gfyr7b9c.emergentagent.net/job_deyede-profile/artifacts/c7231e95fac7c7cc_tk.jpeg", "https://customer-assets-gfyr7b9c.emergentagent.net/job_deyede-profile/artifacts/3640b4f77c7eb572_tk%202.jpeg", "https://customer-assets-gfyr7b9c.emergentagent.net/job_deyede-profile/artifacts/492137a19abba1d0_tk%203.jpeg"] },
      { name: "BEM INSIP PEMALANG", location: "Pemalang, Jawa Tengah", products: "PDH", material: "American Drill · 2 Warna Kombinasi", images: ["/portofolio/bem-insip-1.png"] },
      { name: "PRAMUKA SMAN 1 JEPON", location: "Blora, Jawa Tengah", products: "PDH · ID Card PVC", material: "American Drill · 2 Warna Kombinasi", images: ["/portofolio/pramuka-jepon-1.png"] },
      { name: "OSIS MAN 2 REMBANG", location: "Rembang, Jawa Tengah", products: "PDH · ID Card PVC · Rompi 2-in-1", material: "Nagata Drill · 2 Warna Kombinasi", images: ["/portofolio/osis-rembang-1.png"] },
      { name: "LAZISMU BLORA", location: "Blora, Jawa Tengah", products: "PDH", material: "Nagata Drill", images: ["/portofolio/lazismu-1.png"] },
      { name: "GARDAPALA SMAN 2 BLORA", location: "Blora, Jawa Tengah", products: "PDH · Slayer", material: "Nagata Drill · 1 Warna", images: ["/portofolio/gardapala-1.png"] },
      { name: "PMR SMAN 2 BLORA", location: "Blora, Jawa Tengah", products: "Kaos · Slayer", material: "Cotton Combed 24s", images: ["/portofolio/pmr-1.png"] },
      { name: "KKN UIN WALISONGO", location: "Kab. Demak, Jawa Tengah", products: "Vest · ID Card", material: "American Drill · PVC", images: ["https://customer-assets-gfyr7b9c.emergentagent.net/job_deyede-profile/artifacts/46d6191da28d4c36_WhatsApp%20Image%202026-10-13%20at%2011.13.57.jpeg", "https://customer-assets-gfyr7b9c.emergentagent.net/job_deyede-profile/artifacts/01d4c5aedf7ff61a_WhatsApp%20Image%202026-10-13%20at%2011.13.58.jpeg", "https://customer-assets-gfyr7b9c.emergentagent.net/job_deyede-profile/artifacts/6dc675998aee01fe_WhatsApp%20Image%202026-10-13%20at%2011.14.04.jpeg", "https://customer-assets-gfyr7b9c.emergentagent.net/job_deyede-profile/artifacts/922a4ba66cc85ff7_WhatsApp%20Image%202026-10-13%20at%2011.14.04%20%281%29.jpeg", "https://customer-assets-gfyr7b9c.emergentagent.net/job_deyede-profile/artifacts/7f96f3a4a250fdd6_WhatsApp%20Image%202026-10-13%20at%2011.14.05.jpeg", "https://customer-assets-gfyr7b9c.emergentagent.net/job_deyede-profile/artifacts/eb6b964c713c4156_WhatsApp%20Image%202026-10-13%20at%2011.14.05%20%281%29.jpeg"] },
      { name: "KKN UNIMUS KEL. 20", location: "Semarang, Jawa Tengah", products: "Vest · ID Card PVC", material: "American Drill · 1 Warna", images: ["/portofolio/kkn20-1.png"] },
      { name: "KKN UNIMUS KEL. 15", location: "Semarang, Jawa Tengah", products: "Vest · ID Card PVC", material: "American Drill · 1 Warna", images: ["/portofolio/kkn15-1.png"] },
    ],
  },
  {
    id: "komunitas",
    category: "Artikel Komunitas",
    headline: "Apparel Komunitas",
    desc: "Kaos dan polo custom untuk kelas, guru, dan komunitas dengan teknik cetak premium.",
    items: [
      { name: "OFFICIAL MERCH @SEMARANGFOLK", location: "Semarang, Jawa Tengah", products: "Kaos Custom", material: "Cotton Combed 24s", images: ["https://customer-assets-gfyr7b9c.emergentagent.net/job_deyede-profile/artifacts/c5c8979201aa4022_Kaos%20folksmg%201.webp", "https://customer-assets-gfyr7b9c.emergentagent.net/job_deyede-profile/artifacts/f27473705eb35d79_baju%20hitam%20smgfolks.png"] },
      { name: "PKK WONODRI SENDANG RT. 09 RW. 05", location: "Semarang, Jawa Tengah", products: "Kaos Custom", material: "Cotton Combed 24s", images: ["https://customer-assets-gfyr7b9c.emergentagent.net/job_deyede-profile/artifacts/c39bec27d95421aa_Maroon%20T-Shirt%20on%20Textured%20Sofa.png"] },
      { name: "BMPN 5 JEPARA", location: "Jepara, Jawa Tengah", products: "Kaos Custom (DTF · Polyflex Foil Hologram · Reflektif Hologram)", material: "Cotton Combed 24s", images: ["/portofolio/bmpn-1.png", "/portofolio/bmpn-2.png", "/portofolio/bmpn-3.png"] },
      { name: "AM. TECH TEMANGGUNG", location: "Temanggung, Jawa Tengah", products: "Polo Full Printing · Finishing Kerah", material: "Dryfit Jarum 145 gsm", images: ["/portofolio/amtech-1.png"] },
    ],
  },
];

export const NAV_LINKS = [
  { to: "/", label: "Beranda", id: "beranda" },
  { to: "/katalog", label: "Katalog", id: "katalog" },
  { to: "/portofolio", label: "Portofolio", id: "portofolio" },
  { to: "/cara-pesan", label: "Cara Pesan", id: "cara-pesan" },
  { to: "/tentang", label: "Tentang", id: "tentang" },
  { to: "/kontak", label: "Kontak", id: "kontak" },
];

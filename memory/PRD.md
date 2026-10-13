# PRD — Deyede Custom Semarang Company Profile

## Original Problem Statement
Company profile untuk memasarkan bisnis konveksi "Deyede Custom Semarang": menampilkan jenis barang yang dijual, step-by-step pemesanan, dan keuntungan membeli di Deyede. Unik, khas, mudah dipahami. Memakai logo Deyede dari lampiran, referensi E-Katalog Star.ID (tapi tetap punya ciri khas sendiri), latar/garis variasi bernuansa hitam + putih #FFFFFF.

## User Choices
- Bahasa Indonesia, multi-halaman (React Router)
- Kontak pemesanan: tombol WhatsApp langsung
- Data kontak: CONTOH sementara (bisa diganti kapan saja)
- Gaya: konsep referensi E-Katalog Star.ID dengan identitas unik sendiri

## Architecture
- Frontend: React 19 + react-router-dom (5 halaman), Tailwind, framer-motion, Lenis smooth scroll, react-fast-marquee
- Backend: FastAPI template (tidak dipakai untuk fitur — situs company profile statis dengan CTA WhatsApp)
- Database: MongoDB tersedia tapi belum dipakai
- Design: /app/design_guidelines.json — monokrom hitam/putih + aksen benang emas #C8A96A (thread), Playfair Display + Manrope + IBM Plex Mono, sharp edges (rounded-none), tekstur garis khas Deyede, pola jahitan (bg-stitch), grain overlay, watermark outline "DYD"

## User Personas
- Klien komunitas/kampus/instansi yang ingin pesan seragam/merchandise custom
- Brand clothing lokal yang butuh mitra produksi
- Event organizer yang butuh seminar kit / merchandise

## Implemented (10 Okt 2026)
- 6 halaman: Beranda, Katalog, Portofolio (baru 13 Okt 2026 — 3 kategori dari PDF portofolio: Fun Run dengan featured card FUNRUN UNISSULA, Identitas Organisasi, Artikel Komunitas), Cara Pesan, Tentang, Kontak
- Logo Deyede asli dipakai di navbar, footer, halaman Tentang; favicon SVG khas (kotak jahitan + jarum)
- Semua CTA WhatsApp mengarah ke wa.me dengan pesan terisi otomatis
- Navbar responsif (hamburger di bawah lg), transisi halaman AnimatePresence, scroll reveal framer-motion, gambar grayscale→warna saat hover
- data-testid di semua elemen interaktif

## Data Kontak (diperbarui 10 Okt 2026 — data asli dari user)
- WA: +62 895-6388-49294 (wa.me/62895638849294), Instagram: @deyedecustom (instagram.com/deyedecustom)
- Alamat: DYD Custom Semarang → tautan Google Maps (CONTACT.mapsUrl di content.js), bisa diklik dari halaman Kontak & footer
- Email dydcustom@gmail.com (data asli); harga & statistik masih placeholder — ganti di /app/frontend/src/data/content.js

## Backlog
- P0: (kosong — semua data kontak sudah asli)
- P1: Galeri portofolio hasil produksi nyata (foto asli Deyede — kaos, PDH depan/belakang, jersey sudah terpasang di kartu produk)
- P1: Price list detail per produk & kuantitas (seperti E-Katalog referensi)
- P2: Size chart interaktif per jenis produk
- P2: FAQ (tanya jawab produksi, pembayaran, pengiriman)
- P2: Testimoni klien + daftar track record klien

## Next Tasks
1. Minta nomor WA/alamat/sosmed asli dari user → update content.js
2. Kumpulkan foto produk asli Deyede → ganti foto Unsplash
3. Tambah halaman/section price list bila user berikan daftar harga resmi

# Ganti Foto Produk "Kaos Custom" dengan Foto dari Lampiran

Foto produk "Kaos Custom" di situs company profile Deyede Custom Semarang diganti dari foto stok menjadi foto kaos putih bergambar "THE 1975" yang dilampirkan pengguna. Foto tampil apa adanya (latar putih), serasi dengan gaya monokrom situs.

## Untuk Siapa
Pengunjung situs Deyede Custom Semarang — calon klien yang melihat katalog produk dan ingin tahu contoh hasil kaos custom.

## Cakupan Perubahan
- Foto "Kaos Custom" diganti dengan foto lampiran di semua tempat foto itu tampil, karena sumbernya satu data bersama:
  - Kartu "Produk Unggulan" di halaman Beranda
  - Kartu produk "Kaos Custom" di halaman Katalog
- Foto ditampilkan apa adanya (latar putih polos, tanpa pemudaran ke hitam) — keputusan pengguna
- Perlakuan visual kartu tetap: tampil hitam-putih saat diam, berwarna saat disentuh kursor; potongan bingkai 3:4 (Beranda) dan 4:3 (Katalog) tetap
- Tidak ada perubahan lain: teks, harga, tautan WhatsApp, dan produk lain tidak disentuh

## Alur Pengguna
Pengunjung membuka Beranda atau Katalog → melihat kartu "Kaos Custom" dengan foto kaos asli dari lampiran → hover menampilkan warna asli foto → klik tetap mengarah ke katalog / WhatsApp seperti sebelumnya.

## Nuansa UI/UX
Tetap monokrom hitam-putih dengan aksen benang emas. Kotak foto putih menjadi elemen kontras yang justru menonjol di antara kartu lain yang gelap.

## Fase Implementasi
- Fase 1 (dibangun sekarang): ambil URL foto dari lampiran, ganti sumber gambar produk Kaos Custom, verifikasi tampilan di Beranda dan Katalog (desktop & ponsel)
- Fase 2 (nanti, bila diminta): mengganti foto produk lain (hoodie, jaket, totebag) dengan foto hasil produksi asli Deyede
- Fase 3 (nanti, bila diminta): galeri portofolio khusus berisi foto-foto hasil jahitan Deyede

## Asumsi
- Foto lampiran adalah milik/hak pakai Deyede dan boleh dipublikasikan di situs
- Foto dibiarkan berlatar putih sesuai pilihan pengguna; tidak ada penyuntingan foto
- Satu foto dipakai untuk semua tampilan produk Kaos Custom (Beranda + Katalog)
- Efek hover grayscale→warna dipertahankan karena merupakan ciri interaksi situs

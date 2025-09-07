# Markdown Preview

![Markdown Preview](markdown-logo.svg)

## Deskripsi

Markdown Preview adalah aplikasi web yang memungkinkan pengguna untuk menulis konten dalam format Markdown dan melihat hasilnya secara langsung (live preview). Aplikasi ini dirancang untuk memudahkan penulisan dokumen, blog, atau konten lain yang menggunakan sintaks Markdown dengan tampilan yang profesional dan responsif.

## Kegunaan / Manfaat

- **Preview Langsung**: Lihat hasil format Markdown secara real-time saat mengetik
- **Produktivitas**: Percepat penulisan konten terformat tanpa perlu beralih antar aplikasi
- **Kemudahan Penggunaan**: Antarmuka intuitif dengan toolbar untuk sintaks Markdown umum
- **Portabilitas**: Berjalan di browser tanpa perlu instalasi perangkat lunak tambahan
- **Ekspor Konten**: Simpan hasil sebagai file Markdown (.md) atau HTML (.html)
- **Mode Gelap**: Kurangi ketegangan mata saat bekerja di lingkungan dengan cahaya rendah

## Cara Menjalankan

1. Buka file `index.html` di browser web apa pun
2. Mulai ketik konten Markdown di panel kiri
3. Lihat hasil format secara langsung di panel kanan
4. Gunakan toolbar untuk menyisipkan sintaks Markdown umum dengan cepat

Tidak diperlukan konfigurasi tambahan atau instalasi server. Aplikasi ini berjalan sepenuhnya di sisi klien menggunakan HTML, CSS, dan JavaScript.

## Fitur

### Fitur Utama

- **Live Preview**: Melihat hasil format Markdown secara real-time
- **Toolbar Markdown**: Tombol cepat untuk menyisipkan sintaks Markdown umum
- **Panduan Sintaks**: Referensi cepat untuk sintaks Markdown dasar
- **Mode Gelap/Terang**: Beralih antara tema terang dan gelap sesuai preferensi
- **Penyimpanan Lokal**: Konten disimpan secara otomatis di browser

### Fitur Tambahan

- **Salin HTML/Markdown**: Salin konten dalam format HTML atau Markdown ke clipboard
- **Ekspor File**: Simpan konten sebagai file Markdown (.md) atau HTML (.html)
- **Mode Layar Penuh**: Fokus pada editor atau preview dalam mode layar penuh
- **Highlighting Kode**: Dukungan syntax highlighting untuk blok kode
- **Sanitasi HTML**: Perlindungan terhadap serangan XSS
- **Pintasan Keyboard**: Ctrl+S untuk menyimpan, Escape untuk keluar dari mode layar penuh

## Struktur Proyek

```
/
├── index.html              # File HTML utama
├── README.md               # Dokumentasi proyek
│── style.css               # File CSS untuk styling
│── script.js               # File JavaScript untuk fungsionalitas
\
```

## Demo

![Demo Markdown Preview](./assets/images/illustration.svg)

Aplikasi ini memiliki antarmuka yang terdiri dari dua panel utama:

1. **Panel Kiri**: Editor Markdown dengan dukungan sintaks highlighting
2. **Panel Kanan**: Preview hasil format Markdown secara real-time

Pengguna dapat mengetik atau menempelkan konten Markdown di panel kiri dan melihat hasilnya secara instan di panel kanan. Toolbar di bagian atas menyediakan akses cepat ke sintaks Markdown umum seperti heading, bold, italic, link, gambar, dan lainnya.

## Teknologi yang Digunakan

- **HTML5**: Struktur dasar aplikasi
- **CSS3**: Styling dan responsivitas
- **JavaScript**: Logika aplikasi dan interaktivitas
- **Marked.js**: Library untuk mengonversi Markdown ke HTML
- **Highlight.js**: Library untuk syntax highlighting pada blok kode
- **DOMPurify**: Library untuk sanitasi HTML
- **Font Awesome**: Ikon untuk antarmuka pengguna
- **Google Fonts**: Font Poppins dan Fira Code

## Pengembangan Lebih Lanjut

Beberapa ide untuk pengembangan lebih lanjut:

- Menambahkan dukungan untuk tabel Markdown yang lebih baik
- Implementasi fitur kolaborasi real-time
- Menambahkan opsi untuk mengimpor file Markdown
- Integrasi dengan layanan cloud storage (Google Drive, Dropbox)
- Menambahkan lebih banyak tema dan opsi kustomisasi
- Dukungan untuk ekstensi Markdown tambahan

---

Dibuat dengan ❤️ sebagai proyek demonstrasi. Silakan gunakan dan modifikasi sesuai kebutuhan Anda.

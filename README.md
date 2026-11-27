# Kantin-Vokasi

Aplikasi manajemen data menu dan stok kantin vokasi berbasis console (terminal), dibuat dengan TypeScript. Mendukung operasi Create, Read, Update, Delete, dan Search untuk data produk kantin.

**Tugas:** UAS Pemrograman Dasar
**Kelas / Kelompok:** T1[D] / Kelompok 10

## Anggota Kelompok

| No | Nama | NIM | GitHub |
|----|------|-----|--------|
| 1 | Moh Firras Ghiyats Adji Fadawkaz | 263140701111042 | [@firrasmencarimakna](https://github.com/firrasmencarimakna) |
| 2 | Rezel Nuh Alfachri | 263140701111063 | [@rezelnuhalfa](https://github.com/rezelnuhalfa) |
| 3 | M Arsya Qilana | 263140701111064 | [@arsyakilana](https://github.com/arsyakilana) |

## Pembagian Tugas

| Anggota | Tugas |
|---------|-------|
| Moh Firras Ghiyats Adji Fadawkaz | Menu utama, Create, validasi input, laporan bagian 1.1 |
| Rezel Nuh Alfachri | Read All, Read by ID, Search, laporan bagian 1.2 |
| M Arsya Qilana | Update, Delete, setup repository, README, rencana 3.2 |

## Analisis Masalah (Bagian A)

| Komponen | Uraian |
|----------|--------|
| Latar Belakang | Pencatatan menu, harga, dan stok kantin masih manual sehingga rawan data hilang, salah catat, dan pencarian lambat. Dibutuhkan aplikasi console sederhana untuk mengelola data produk secara terstruktur. |
| Pengguna | Admin kantin dan kasir/petugas kantin |
| Data Input | id, nama, kategori, harga, stok, tersedia, kata kunci pencarian, pilihan menu, konfirmasi hapus (y/n) |
| Data Output | Menu utama, daftar produk, detail produk, hasil pencarian, hasil kalkulasi (total produk, total nilai stok), pesan sukses dan error |

Detail lengkap ada di folder `docs/`.

## Entitas Data: Produk

| Properti | Tipe | Keterangan |
|----------|------|------------|
| id | string | Kode unik produk (contoh: "P001") |
| nama | string | Nama produk |
| kategori | string | Makanan / Minuman |
| harga | number | Harga satuan (rupiah) |
| stok | number | Jumlah persediaan |
| tersedia | boolean | true jika ada, false jika habis |

## Cara Menjalankan

Prasyarat: Node.js dan Git sudah terinstall.

```bash
git clone https://github.com/arsyakilana/kantin-vokasi.git
cd kantin-vokasi
npm install
npm start
```

## Struktur Folder

```
kantin-vokasi/
├── src/
│   └── index.ts
├── docs/
├── package.json
├── tsconfig.json
└── README.md
```

# Kantin-Vokasi

Aplikasi CLI manajemen produk kantin (CRUD) berbasis TypeScript.

## Cara Menjalankan

1. Clone repository ini
2. Install dependency:
   npm install
3. Jalankan program:
   npx ts-node src/index.ts

## Fitur

1. Tambah Produk
2. Lihat Semua Produk
3. Lihat Produk by ID
4. Ubah Produk
5. Hapus Produk
6. Cari Produk
7. Keluar

## Pembagian Tugas

| Anggota | Tugas |
|---------|-------|
| Firras  | Tambah produk + validasi input |
| Rezel   | Lihat semua produk, lihat by ID, cari produk |
| Arsya   | Ubah produk, hapus produk, README |
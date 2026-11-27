
import * as readlineSync from "readline-sync";

// ---------- 1. STRUKTUR DATA ----------
interface Produk {
  id: string; // kode unik, contoh: "P001"
  nama: string; // nama produk
  kategori: string; // "Makanan" / "Minuman"
  harga: number; // harga satuan (rupiah)
  stok: number; // jumlah persediaan
  tersedia: boolean; // true jika ada, false jika habis
}

// Data awal (disimpan di memori selama program berjalan)
const daftarProduk: Produk[] = [
  { id: "P001", nama: "Nasi Goreng", kategori: "Makanan", harga: 15000, stok: 20, tersedia: true },
  { id: "P002", nama: "Mie Ayam", kategori: "Makanan", harga: 12000, stok: 15, tersedia: true },
  { id: "P003", nama: "Es Teh", kategori: "Minuman", harga: 4000, stok: 30, tersedia: true },
  { id: "P004", nama: "Jus Alpukat", kategori: "Minuman", harga: 10000, stok: 0, tersedia: false },
];

// ---------- 2. FUNGSI BANTU (dipakai banyak fitur) ----------

// Menampilkan menu utama ke terminal (void)
function tampilMenu(): void {
  console.log("\n==============================");
  console.log("      KANTIN-VOKASI");
  console.log("==============================");
  console.log("1. Tambah Produk");
  console.log("2. Lihat Semua Produk");
  console.log("3. Lihat Produk by ID");
  console.log("4. Ubah Produk");
  console.log("5. Hapus Produk");
  console.log("6. Cari Produk");
  console.log("7. Keluar");
  console.log("==============================");
}

// Mengecek apakah input menu berupa angka 1-7 (return boolean)
function validasiPilihanMenu(input: string): boolean {
  if (input.trim() === "") {
    return false;
  }
  const angka: number = Number(input);
  return Number.isInteger(angka) && angka >= 1 && angka <= 7;
}

// Mencari posisi produk berdasarkan id, -1 jika tidak ada (return number)
function cariIndexById(id: string): number {
  return daftarProduk.findIndex((p) => p.id.toLowerCase() === id.toLowerCase());
}

// Menghitung total nilai stok = jumlah (harga x stok) semua produk (return number)
function hitungTotalNilaiStok(): number {
  let total: number = 0;
  for (const p of daftarProduk) {
    total += p.harga * p.stok;
  }
  return total;
}

// ---------- 3. FITUR (kerangka, isi oleh masing-masing anggota) ----------

// TODO (Firras): Create + validasi input
function tambahProduk(): void {
  console.log("[Tambah Produk] belum diimplementasikan.");
}

// TODO (Rezel): Read All + ringkasan (total produk, hitungTotalNilaiStok())
function tampilSemuaProduk(): void {
  console.log("[Lihat Semua Produk] belum diimplementasikan.");
}

// TODO (Rezel): Read by ID (pakai cariIndexById())
function tampilProdukById(): void {
  console.log("[Lihat Produk by ID] belum diimplementasikan.");
}

// TODO (Arsya): Update (pakai cariIndexById())
function ubahProduk(): void {
  console.log("[Ubah Produk] belum diimplementasikan.");
}

// TODO (Arsya): Delete + konfirmasi y/n (pakai cariIndexById() dan splice)
function hapusProduk(): void {
  console.log("[Hapus Produk] belum diimplementasikan.");
}

// TODO (Rezel): Search kata kunci + filter tambahan (pakai filter)
function cariProduk(): void {
  console.log("[Cari Produk] belum diimplementasikan.");
}

// ---------- 4. MENU UTAMA (perulangan + percabangan) ----------
function menuUtama(): void {
  let berjalan: boolean = true;

  while (berjalan) {
    tampilMenu();
    const input: string = readlineSync.question("Pilih menu (1-7): ");

    if (!validasiPilihanMenu(input)) {
      console.log("Pilihan menu tidak valid! Masukkan angka 1-7.");
      continue;
    }

    switch (Number(input)) {
      case 1:
        tambahProduk();
        break;
      case 2:
        tampilSemuaProduk();
        break;
      case 3:
        tampilProdukById();
        break;
      case 4:
        ubahProduk();
        break;
      case 5:
        hapusProduk();
        break;
      case 6:
        cariProduk();
        break;
      case 7:
        berjalan = false;
        break;
      default:
        console.log("Pilihan menu tidak valid!");
    }
  }

  console.log("\nTerima kasih telah menggunakan Kantin-Vokasi. Sampai jumpa!");
}

// ---------- 5. JALANKAN PROGRAM ----------
menuUtama();
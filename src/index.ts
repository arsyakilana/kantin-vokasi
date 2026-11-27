
import * as readlineSync from "readline-sync";

// ---------- 1. STRUKTUR DATA ----------
interface Produk {
  id: string;
  nama: string;
  kategori: string;
  harga: number;
  stok: number;
  tersedia: boolean;
}

// Data awal
const daftarProduk: Produk[] = [
  { id: "P001", nama: "Nasi Goreng", kategori: "Makanan", harga: 15000, stok: 20, tersedia: true },
  { id: "P002", nama: "Mie Ayam", kategori: "Makanan", harga: 12000, stok: 15, tersedia: true },
  { id: "P003", nama: "Es Teh", kategori: "Minuman", harga: 4000, stok: 30, tersedia: true },
  { id: "P004", nama: "Jus Alpukat", kategori: "Minuman", harga: 10000, stok: 0, tersedia: false },
];

// ---------- 2. FUNGSI BANTU ----------

function tampilMenu(): void {
  console.log("\n==============================");
  console.log("       KANTIN-VOKASI");
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

function validasiPilihanMenu(input: string): boolean {
  if (input.trim() === "") {
    return false;
  }

  const angka: number = Number(input);
  return Number.isInteger(angka) && angka >= 1 && angka <= 7;
}

function cariIndexById(id: string): number {
  return daftarProduk.findIndex(
    (p) => p.id.toLowerCase() === id.toLowerCase()
  );
}

function hitungTotalNilaiStok(): number {
  let total: number = 0;

  for (const p of daftarProduk) {
    total += p.harga * p.stok;
  }

  return total;
}

// ---------- 3. FITUR CREATE ----------

// TODO (Firras): Create + validasi input
function tambahProduk(): void {
  console.log("[Tambah Produk] belum diimplementasikan.");
}

// ---------- 4. FITUR READ ALL ----------

// TODO (Rezel): Read All + ringkasan
function tampilSemuaProduk(): void {
  console.log("\n========== DAFTAR SEMUA PRODUK ==========");

  if (daftarProduk.length === 0) {
    console.log("Belum ada produk yang tersedia.");
    return;
  }

  for (const p of daftarProduk) {
    console.log("----------------------------------------");
    console.log(`ID       : ${p.id}`);
    console.log(`Nama     : ${p.nama}`);
    console.log(`Kategori : ${p.kategori}`);
    console.log(`Harga    : Rp${p.harga.toLocaleString("id-ID")}`);
    console.log(`Stok     : ${p.stok}`);
    console.log(`Status   : ${p.tersedia ? "Tersedia" : "Habis"}`);
  }

  console.log("----------------------------------------");
  console.log("              RINGKASAN");
  console.log("----------------------------------------");
  console.log(`Total Produk     : ${daftarProduk.length}`);
  console.log(`Total Nilai Stok : Rp${hitungTotalNilaiStok().toLocaleString("id-ID")}`);
  console.log("========================================");
}

// ---------- 5. FITUR READ BY ID ----------

// TODO (Rezel): Read by ID
function tampilProdukById(): void {
  console.log("\n========== CARI PRODUK BERDASARKAN ID ==========");

  const id: string = readlineSync.question("Masukkan ID produk: ").trim();

  if (id === "") {
    console.log("ID produk tidak boleh kosong.");
    return;
  }

  const index: number = cariIndexById(id);

  if (index === -1) {
    console.log(`Produk dengan ID ${id} tidak ditemukan.`);
    return;
  }

  // Perbaikan: pengecekan undefined sebelum mengambil data produk
  const p: Produk | undefined = daftarProduk[index];

  if (p === undefined) {
    console.log("Data produk tidak ditemukan.");
    return;
  }

  console.log("\n========== DETAIL PRODUK ==========");
  console.log(`ID       : ${p.id}`);
  console.log(`Nama     : ${p.nama}`);
  console.log(`Kategori : ${p.kategori}`);
  console.log(`Harga    : Rp${p.harga.toLocaleString("id-ID")}`);
  console.log(`Stok     : ${p.stok}`);
  console.log(`Status   : ${p.tersedia ? "Tersedia" : "Habis"}`);
  console.log("==================================");
}

// ---------- 6. FITUR UPDATE ----------

// TODO (Arsya): Update (pakai cariIndexById())
function ubahProduk(): void {
  console.log("[Ubah Produk] belum diimplementasikan.");
}

// ---------- 7. FITUR DELETE ----------

// TODO (Arsya): Delete + konfirmasi y/n
function hapusProduk(): void {
  console.log("[Hapus Produk] belum diimplementasikan.");
}

// ---------- 8. FITUR SEARCH ----------

// TODO (Rezel): Search kata kunci + filter tambahan
function cariProduk(): void {
  console.log("\n========== PENCARIAN PRODUK ==========");

  const kataKunci: string = readlineSync
    .question("Masukkan kata kunci (ID/nama/kategori): ")
    .trim()
    .toLowerCase();

  if (kataKunci === "") {
    console.log("Kata kunci pencarian tidak boleh kosong.");
    return;
  }

  const hasilPencarian: Produk[] = daftarProduk.filter((p) =>
    p.id.toLowerCase().includes(kataKunci) ||
    p.nama.toLowerCase().includes(kataKunci) ||
    p.kategori.toLowerCase().includes(kataKunci)
  );

  if (hasilPencarian.length === 0) {
    console.log(`Produk dengan kata kunci "${kataKunci}" tidak ditemukan.`);
    return;
  }

  console.log(`\nDitemukan ${hasilPencarian.length} produk:`);

  for (const p of hasilPencarian) {
    console.log("----------------------------------------");
    console.log(`ID       : ${p.id}`);
    console.log(`Nama     : ${p.nama}`);
    console.log(`Kategori : ${p.kategori}`);
    console.log(`Harga    : Rp${p.harga.toLocaleString("id-ID")}`);
    console.log(`Stok     : ${p.stok}`);
    console.log(`Status   : ${p.tersedia ? "Tersedia" : "Habis"}`);
  }

  console.log("========================================");
}

// ---------- 9. MENU UTAMA ----------

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

// ---------- 10. JALANKAN PROGRAM ----------

menuUtama();

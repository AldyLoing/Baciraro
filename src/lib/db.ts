import Database from "better-sqlite3";
import path from "path";
import bcrypt from "bcryptjs";

const DB_PATH = path.join(process.cwd(), "baciraro.db");

let _db: Database.Database | null = null;

export function getDb(): Database.Database {
  if (!_db) {
    _db = new Database(DB_PATH);
    _db.pragma("journal_mode = WAL");
    initTables(_db);
    seedIfEmpty(_db);
  }
  return _db;
}

function initTables(db: Database.Database) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      name TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS compost_buckets (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      code TEXT UNIQUE NOT NULL,
      start_date TEXT NOT NULL,
      estimated_harvest TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'fermenting',
      type TEXT NOT NULL DEFAULT 'both',
      material TEXT DEFAULT '',
      notes TEXT DEFAULT '',
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS waste_stats (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      organic_kg REAL DEFAULT 0,
      inorganic_kg REAL DEFAULT 0,
      products_count INTEGER DEFAULT 0,
      updated_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT UNIQUE NOT NULL,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      category TEXT NOT NULL,
      story TEXT DEFAULT '',
      materials TEXT DEFAULT '[]',
      total_plastic_kg REAL DEFAULT 0,
      image_url TEXT DEFAULT '',
      gallery TEXT DEFAULT '[]',
      is_active INTEGER DEFAULT 1,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    );
  `);
}

function seedIfEmpty(db: Database.Database) {
  const userCount = db.prepare("SELECT COUNT(*) as c FROM users").get() as { c: number };
  if (userCount.c > 0) return;

  const hashedPassword = bcrypt.hashSync("baciraro", 10);

  const insertUser = db.prepare("INSERT INTO users (username, password, name) VALUES (?, ?, ?)");
  insertUser.run("admin", hashedPassword, "Admin Baciraro");

  const insertBucket = db.prepare(`
    INSERT INTO compost_buckets (code, start_date, estimated_harvest, status, type, material, notes)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);

  insertBucket.run("EMBR-001", "2026-06-01", "2026-09-01", "fermenting", "both", "Sampah dapur, daun kering", "Ember perdana Creative Studio");
  insertBucket.run("EMBR-002", "2026-06-15", "2026-09-15", "fermenting", "compost", "Sisa sayuran, kulit buah", "Ember uji coba pupuk kompos");
  insertBucket.run("EMBR-003", "2026-05-01", "2026-08-01", "ready", "both", "Campuran organik rumah tangga", "Siap panen minggu depan");

  const insertStats = db.prepare("INSERT INTO waste_stats (organic_kg, inorganic_kg, products_count) VALUES (?, ?, ?)");
  insertStats.run(1250, 3400, 47);

  const insertProduct = db.prepare(`
    INSERT INTO products (slug, title, description, category, story, materials, total_plastic_kg, image_url, gallery)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  insertProduct.run(
    "eco-board",
    "Papan Plastik (Eco-Board)",
    "Material alternatif kayu tahan air dari HDPE daur ulang untuk furnitur custom.",
    "plastic",
    "Eco-Board lahir dari keprihatinan terhadap menumpuknya sampah plastik HDPE di Tempat Pembuangan Akhir. Setiap lembar papan menyelamatkan puluhan kilogram tutup botol dan wadah plastik yang seharusnya berakhir di lautan. Tim Baciraro Creative bermitra dengan bank sampah lokal untuk mengumpulkan, memilah, dan mengolah HDPE menjadi lembaran papan berkualitas tinggi yang tahan air, anti-rayap, dan setara dengan kayu konvensional. Setiap papan memiliki tekstur unik — bukti bahwa sampah bisa menjadi mahakarya.",
    '[{"name":"Tutup Botol HDPE","amount":12,"unit":"kg"},{"name":"Wadah Plastik","amount":8,"unit":"kg"},{"name":"Kantong Kresek","amount":3,"unit":"kg"}]',
    23,
    "/2024/IMG20240510100826.jpg",
    '["/2024/IMG20240510100400.jpg","/2024/IMG20240428191222.jpg","/2024/IMG20240413085650.jpg"]'
  );

  insertProduct.run(
    "souvenir-csr",
    "Suvenir & Plakat CSR",
    "Suvenir ramah lingkungan pesanan resmi BUMN & korporasi sebagai alternatif durable dan bermakna.",
    "craft",
    "Setiap kali perusahaan memesan suvenir konvensional, mereka meninggalkan jejak karbon baru. Baciraro menawarkan alternatif: suvenir dan plakat CSR yang sepenuhnya dibuat dari sampah plastik daur ulang. Dari medali penghargaan hingga gantungan kunci korporat — setiap produk membawa cerita dampak. Program ini telah melibatkan 3 BUMN dan 12 perusahaan swasta, mengalihkan lebih dari 500 kg sampah plastik dari TPA. Setiap suvenir disertifikasi dengan digital certificate yang menampilkan jumlah plastik yang diselamatkan.",
    '[{"name":"HDPE Daur Ulang","amount":0.5,"unit":"kg"},{"name":"PP Daur Ulang","amount":0.3,"unit":"kg"},{"name":"Kardus Kemasan","amount":0.2,"unit":"kg"}]',
    0.8,
    "/2024/IMG20240409232612.jpg",
    '["/2024/IMG20240510100400.jpg","/2023/IMG_20230321_190018.jpg"]'
  );

  insertProduct.run(
    "sofa-puff-ecobrick",
    "Sofa Puff Ecobrick",
    "Sofa kriya hasil pemberdayaan kelompok perempuan desa dengan teknik ecobrick dari PET bekas.",
    "craft",
    "Sofa Puff Ecobrick adalah simbol pemberdayaan. Diproduksi oleh kelompok perempuan binaan di Desa Kolongan, setiap sofa diisi dengan ecobrick — botol PET yang dipadatkan dengan sampah plastik hingga menjadi sekeras bata. Satu sofa membutuhkan 60-80 botol ecobrick, setara dengan 15 kg sampah plastik yang tidak lagi berakhir di TPA atau laut. Program ini tidak hanya menciptakan furnitur yang nyaman dan artistik, tetapi juga memberikan penghasilan berkelanjutan bagi 20 perempuan kepala keluarga.",
    '[{"name":"Botol PET","amount":15,"unit":"kg"},{"name":"Residu Plastik","amount":5,"unit":"kg"},{"name":"Kain Tenun","amount":2,"unit":"meter"}]',
    20,
    "/2023/IMG_20230328_110320.jpg",
    '["/2023/IMG_20230208_110944.jpg","/2023/IMG_20230316_223413.jpg"]'
  );

  insertProduct.run(
    "karya-kreatif",
    "Karya Kreatif & Budaya",
    "Produk kreatif bernilai tinggi yang berakar pada budaya lokal dan semangat 10% Movement Baciraro.",
    "craft",
    "Karya Kreatif & Budaya adalah manifestasi dari filosofi Baciraro: 10% dari setiap profit disisihkan untuk pengembangan seni dan budaya lokal. Koleksi ini mencakup instalasi seni daur ulang, aksesori dari limbah tekstil, dan dekorasi rumah dari material reclaimed. Setiap karya adalah kolaborasi antara seniman lokal dan tim Baciraro, memastikan bahwa setiap rupiah yang dibelanjakan tidak hanya membeli produk, tetapi juga melestarikan warisan budaya Sulawesi Utara.",
    '[{"name":"Limbah Tekstil","amount":3,"unit":"kg"},{"name":"Kayu Reclaimed","amount":5,"unit":"kg"},{"name":"Residu Plastik","amount":2,"unit":"kg"}]',
    2,
    "/2023/IMG_20230121_213349.jpg",
    '["/2023/IMG_20230121_213331.jpg","/2023/IMG_20230121_213314.jpg"]'
  );

  insertProduct.run(
    "kompos-organik",
    "Kompos Organik",
    "Pupuk kompos berkualitas dari fermentasi sampah organik rumah tangga. Kaya nutrisi, siap pakai.",
    "organic",
    "Setiap hari, dapur rumah tangga menghasilkan sampah organik — kulit buah, sisa sayuran, ampas kopi. Di tangan Baciraro, limbah ini disulap menjadi kompos berkualitas tinggi. Proses fermentasi terkontrol selama 3 bulan di ember kompos menghasilkan pupuk organik yang kaya mikroba dan nutrisi. Kompos ini digunakan untuk menghidupi kebun komunitas dan dijual ke petani lokal dengan harga terjangkau. Program ini telah mengolah 1.250 kg sampah organik menjadi pupuk yang memberi kehidupan baru bagi tanah.",
    '[{"name":"Sampah Dapur","amount":50,"unit":"kg"},{"name":"Daun Kering","amount":20,"unit":"kg"},{"name":"Ampas Kopi","amount":5,"unit":"kg"}]',
    0,
    "/elmast/WhatsApp Image 2026-05-22 at 22.50.07.jpeg",
    '["/elmast/WhatsApp Image 2026-05-22 at 22.50.08 (1).jpeg","/elmast/WhatsApp Image 2026-05-22 at 22.50.09.jpeg","/2023/IMG_20230404_142636.jpg"]'
  );
}

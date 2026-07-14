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
}

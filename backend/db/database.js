const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const dbPath = path.join(__dirname, '..', 'rent.db');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Failed to connect to SQLite database:', err.message);
  } else {
    console.log('Connected to SQLite database at', dbPath);
  }
});

const initSql = `
  CREATE TABLE IF NOT EXISTS rents (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    amount REAL NOT NULL,
    rental_date TEXT NOT NULL,
    payment_date TEXT NOT NULL
  );
`;

db.serialize(() => {
  db.run(initSql, (err) => {
    if (err) {
      console.error('Error creating rents table:', err.message);
    } else {
      console.log('Rents table is ready.');
    }
  });
});

module.exports = db;

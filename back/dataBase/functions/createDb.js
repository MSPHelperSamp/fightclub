const sqlite3 = require("sqlite3").verbose();

function initializeDatabase() {
  const db = new sqlite3.Database("../mydatabase.db");

  db.serialize(() => {
    db.run(
      "CREATE TABLE IF NOT EXISTS emails (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT NOT NULL)"
    );
  });

  db.close();
}

module.exports = initializeDatabase;

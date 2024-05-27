const sqlite3 = require("sqlite3").verbose();

function addEmailInDb(email) {
  let allGood = true;
  const db = new sqlite3.Database("../mydatabase.db");

  db.run("INSERT INTO emails (email) VALUES (?)", [email], function (err) {
    if (err) {
      allGood = false;
      console.error("Ошибка при записи в базу данных:", err);
      db.close();
    } else {
      allGood = true;
      console.log("Email добавлен с ID:", this.lastID);
      db.close();
    }
  });
  return allGood;
}

module.exports = addEmailInDb;

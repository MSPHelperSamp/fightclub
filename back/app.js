const PORT = 3000;

const express = require("express");
const cors = require("cors");
const addEmailInDb = require("./dataBase/functions/addEmailInDb");
const initializeDatabase = require("./dataBase/functions/createDb");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://fightclubton.xyz",
      "https://fightclubton.xyz",
      "http://localhost:5173",
    ],
  })
);

// Initialize the database and create the table if it doesn't exist
initializeDatabase();

app.post("/api/email", (req, res) => {
  const { userEmail } = req.body;
  console.log(userEmail);
  if (userEmail) {
    addEmailInDb(userEmail);
    res.status(200).send("good");
  } else {
    res.statusCode = 401;
    res.send("don't good");
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});

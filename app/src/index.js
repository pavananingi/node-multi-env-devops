require("dotenv").config();

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    environment: process.env.NODE_ENV,
    logLevel: process.env.LOG_LEVEL,
    database: process.env.DB_URL
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

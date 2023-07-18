const express = require('express');
const { readFile } = require('./cacauTrybe');

const app = express();
app.use(express.json());

app.get('/chocolates/total', async (req, res) => {
  const file = await readFile();
  const lengt = file.chocolates.length;

  res.status(200).json({ totalChocolates: lengt });
});

app.get('/chocolates/search', async (req, res) => {
  const { name } = req.query;
  const file = await readFile();

  if (name) {
    const searchChocolate = file.chocolates
      .filter((chocolate) => chocolate.name.toLowerCase().includes(name.toLowerCase()));

    res.status(searchChocolate.length === 0 ? 404 : 200).json(searchChocolate);
  }
});

module.exports = app;

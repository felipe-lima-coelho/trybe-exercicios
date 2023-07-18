const express = require('express');
const { readFile } = require('./cacauTrybe');

const app = express();
app.use(express.json());

app.get('/chocolates/total', async (req, res) => {
  const file = await readFile();
  const lengt = file.chocolates.length;

  res.status(200).json({ totalChocolates: lengt });
});

module.exports = app;

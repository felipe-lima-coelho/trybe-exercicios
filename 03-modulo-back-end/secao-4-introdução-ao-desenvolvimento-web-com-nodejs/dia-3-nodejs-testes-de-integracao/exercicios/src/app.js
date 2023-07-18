const express = require('express');
const { readFile, writeFile } = require('./cacauTrybe');

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

app.put('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const { name, brandId } = req.body;
  const file = await readFile();
  const findId = file.chocolates.find((chocolate) => chocolate.id === Number(id));

  if (!findId) {
    return res.status(404).json({ message: 'chocolate not found' });
  }

  const updatedChocolate = { id: Number(id), name, brandId };

  await writeFile(id, updatedChocolate);

  res.status(200).json({ chocolate: updatedChocolate });
});

module.exports = app;

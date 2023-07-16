const express = require('express');
const readFileJson = require('./utils/readFileJson');

const app = express();

app.use(express.json());

app.get('/movies', async (req, res) => {
  const readFile = await readFileJson();

  res.status(200).json({ movies: readFile });
});

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const readFile = await readFileJson();

  const findMovie = readFile.find((movie) => movie.id === Number(id));

  if (!findMovie) {
    return res.status(404).json({ message: 'Movie not found' });
  }

  res.status(200).json(findMovie);
});

module.exports = app;

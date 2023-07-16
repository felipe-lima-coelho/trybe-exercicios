const express = require('express');
const readFileJson = require('./utils/readFileJson');
const writeFileJson = require('./utils/writeFileJson');
const updateFileJson = require('./utils/updateFileJson');
const deleteFileJson = require('./utils/deleteFileJson');

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

app.post('/movies', async (req, res) => {
  const newMovie = req.body;
  await writeFileJson(newMovie);

  const movies = await readFileJson();

  res.status(201).json({ movies });
});

app.put('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const { movie, price } = req.body;
  const file = await readFileJson();

  const findIndex = file.findIndex((movie) => movie.id === Number(id));

  if (!findIndex) {
    return res.status(404).json({ message: 'Movie not found' });
  }

  updateFileJson(findIndex, movie, price);

  const idMovie = file[findIndex].id;
  const updatedMovie = { idMovie, movie, price };

  res.status(200).json({ ...updatedMovie });
});

app.delete('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const file = await readFileJson();
  const findMovie = file.find((movie) => movie.id === Number(id));

  if (!findMovie) {
    return res.status(404).json({ message: 'Movie not found' });
  };

  deleteFileJson(id);
  res.status(200).end();
});

module.exports = app;

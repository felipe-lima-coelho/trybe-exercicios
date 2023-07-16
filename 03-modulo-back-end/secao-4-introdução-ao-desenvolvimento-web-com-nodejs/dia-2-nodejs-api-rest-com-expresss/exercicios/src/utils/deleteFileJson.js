const fs = require('fs').promises;
const path = require('path');
const readFileJson = require('./readFileJson');

const moviesPath = path.resolve(__dirname, '../movies.json');

const deleteFileJson = async (id) => {
  try {
    const file = await readFileJson();
    const findIndex = file.findIndex((movie) => movie.id === Number(id));

    file.splice(findIndex, 1);

    await fs.writeFile(moviesPath, JSON.stringify(file));
  } catch (error) {
    console.error(error);
  }
};

module.exports = deleteFileJson;

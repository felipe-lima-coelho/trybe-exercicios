const fs = require('fs').promises;
const path = require('path');
const readFileJson = require('./readFileJson');

const moviesPath = path.resolve(__dirname, '../movies.json');

const writeFileJson = async (newMovie) => {
  try {
    const readFile = await readFileJson();
    const lengthJson = readFile.length;
    const objNewMovie = { id: lengthJson + 1, ...newMovie };
    readFile.push(objNewMovie);

    await fs.writeFile(moviesPath, JSON.stringify(readFile));
  } catch (error) {
    console.error(error);
  }
};

module.exports = writeFileJson;

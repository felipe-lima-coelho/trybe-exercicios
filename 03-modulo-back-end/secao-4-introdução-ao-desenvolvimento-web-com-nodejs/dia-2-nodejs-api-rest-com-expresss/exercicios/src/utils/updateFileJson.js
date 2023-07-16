const fs = require('fs').promises;
const path = require('path');
const readFileJson = require('./readFileJson');

const moviesPath = path.resolve(__dirname, '../movies.json');

const updateFileJson = async (index, movie, price) => {
  try {
    const file = await readFileJson();

    file[index].movie = movie;
    file[index].price = price;

    await fs.writeFile(moviesPath, JSON.stringify(file));

    return true;
  } catch (error) {
    console.error(error);
  }
};

module.exports = updateFileJson;

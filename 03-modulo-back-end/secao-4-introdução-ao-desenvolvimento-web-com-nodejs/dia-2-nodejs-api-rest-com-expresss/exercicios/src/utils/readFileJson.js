const fs = require('fs').promises;
const path = require('path');

const moviesPath = path.resolve(__dirname, '../movies.json');

const readFileJson = async () => {
  try {
    const file = await fs.readFile(moviesPath, 'utf8');
    const fileJson = JSON.parse(file);

    return fileJson;
  } catch (error) {
    console.error(error);
  }
};

module.exports = readFileJson;

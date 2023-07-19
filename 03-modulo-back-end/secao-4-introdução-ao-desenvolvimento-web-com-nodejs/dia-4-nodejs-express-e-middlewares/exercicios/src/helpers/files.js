const fs = require('fs').promises;
const { join } = require('path');

const path = '../data/info.json';

const readFile = async () => {
  try {
    const file = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(file);
  } catch (error) {
    console.error(error);
  }
};

const addToFile = async (body) => {
  try {
    const file = await readFile();
    const lengthFile = file.length;
    const newActivite = { id: lengthFile + 1, ...body };

    await fs.writeFile(join(__dirname, path), JSON.stringify(newActivite));
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  readFile,
  addToFile,
};

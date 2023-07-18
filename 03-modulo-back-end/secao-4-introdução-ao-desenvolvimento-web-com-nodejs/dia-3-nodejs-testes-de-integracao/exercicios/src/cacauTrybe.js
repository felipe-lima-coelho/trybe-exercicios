const fs = require('fs').promises;
const { join } = require('path');

const path = './files/chocolates.json';

const readFile = async () => {
  try {
    const file = await fs.readFile(join(__dirname, path), 'utf-8');
    
    return JSON.parse(file);
  } catch (error) {
    console.error(error);
  }
};

const writeFile = async (id, updatedChocolate) => {
  try {
    const file = await readFile();

    const findIndexChocolates = file.chocolates
      .findIndex((chocolate) => chocolate.id === Number(id));

    file.chocolates[findIndexChocolates] = updatedChocolate;

    await fs.writeFile(join(__dirname, path), file);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  readFile,
  writeFile,
};

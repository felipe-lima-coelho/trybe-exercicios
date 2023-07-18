const fs = require('fs').promises;
const { join } = require('path');

const readFile = async () => {
  try {
    const path = './files/chocolates.json';
    const file = await fs.readFile(join(__dirname, path), 'utf-8');
    
    return JSON.parse(file);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  readFile,
};

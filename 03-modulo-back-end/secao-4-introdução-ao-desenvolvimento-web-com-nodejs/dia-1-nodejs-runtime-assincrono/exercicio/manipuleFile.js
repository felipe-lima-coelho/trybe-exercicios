const fs = require('fs').promises;

const fileName = 'simpsons.json';

const readAndPrint = async () => {
  try {
    const file = await fs.readFile(fileName);
    const fileJson = JSON.parse(file);

    fileJson.forEach((character) => {
      console.log(`${character.id} - ${character.name}`);
    });

  } catch (error) {
    console.error(error);
  }
};

// readAndPrint();

const getSimpsonById = async (id) => {
  try {
    const file = await fs.readFile(fileName);
    const fileJson = JSON.parse(file);
    const findId = fileJson.find((character) => Number(character.id) === id);

    if (findId) {
      console.log(`${findId.id} - ${findId.name}`);
    } else {
      throw new Error('id não encontrado');
    }

  } catch (error) {
    console.log(error);
  }
};

// getSimpsonById(6);
// getSimpsonById(99);

const removeSimpsonId10And6 = async () => {
  try {
    const index = [9, 5];

    const file = await fs.readFile(fileName);
    const fileJson = JSON.parse(file);

    index.forEach((i) => {
      fileJson.splice(i, 1);
    });

    fs.writeFile(fileName, JSON.stringify(fileJson));

  } catch (error) {
    console.error(error);
  }
};

// removeSimpsonId10And6();

const readAndCreateFile = async () => {
  try {
    const file = await fs.readFile(fileName);
    const fileJson = JSON.parse(file);

    const simpsonFamily = fileJson
      .filter((character) => Number(character.id) === 1 || Number(character.id) === 4);

    fs.writeFile('simpsonFamily.json', JSON.stringify(simpsonFamily));

  } catch (error) {
    console.error(error);
  }
};

// readAndCreateFile()

const fileNameSimpsonFamily = 'simpsonFamily.json';

const addCharacterToSimpsonFamily = async () => {
  try {
    const fileAllCharacter = await fs.readFile(fileName);
    const fileAllCharacterJson = JSON.parse(fileAllCharacter);

    const nelson = fileAllCharacterJson.find((character) => character.name === 'Nelson Muntz');

    const file = await fs.readFile(fileNameSimpsonFamily);
    const fileJson = JSON.parse(file);

    fileJson.push(nelson);

    fs.writeFile(fileNameSimpsonFamily, JSON.stringify(fileJson));

  } catch (error) {
    console.error(error);
  }
};

// addCharacterToSimpsonFamily();

const changeCharacterInFamily = async () => {
  try {
    const fileAllCharacters = await fs.readFile(fileName);
    const fileAllCharactersJson = JSON.parse(fileAllCharacters);

    const marggie = fileAllCharactersJson.find((character) => character.name === 'Maggie Simpson');

    const file = await fs.readFile(fileNameSimpsonFamily);
    const fileJson = JSON.parse(file);

    const indexOfNelson = fileJson.findIndex((character) => character.name === 'Nelson Muntz');

    fileJson[indexOfNelson] = marggie;

    fs.writeFile(fileNameSimpsonFamily, JSON.stringify(fileJson));
  } catch (error) {
  console.error(error);
  }
};

changeCharacterInFamily();

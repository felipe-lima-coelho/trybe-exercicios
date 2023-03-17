const countries = require('./data');

// Calcule a quantidade total da população de todos os países.

const expectedResult = 120797034;
const getPopulation = (arr) => arr.reduce((acc, curr) => acc + curr.population, 0);

console.log(getPopulation(countries));

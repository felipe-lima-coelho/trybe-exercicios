const countries = require('./data');

// Calcule a área total de todos os países.

const expectedResult = 4311757;
const getTotalArea = (arr) => arr.reduce((acc, curr) => acc + curr.area, 0);

console.log(getTotalArea(countries));

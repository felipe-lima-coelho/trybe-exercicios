const countries = require('./data');

// Encontre o país com o maior nome.

const expectedResult = {
  name: 'American Samoa',
  region: 'Oceania',
  currencies: [{ code: 'USD', name: 'United States Dollar' }],
  capital: 'Pago Pago',
  population: 55197,
  area: 199
}
const longestName = (arr) => arr.reduce((acc, curr) => {
  if (curr.name.length > acc.name.length) {
    return curr
  }
  return acc
}, arr[0]);

console.log(longestName(countries));

// Retorne a quantidade de vezes que a letra a maiúscula ou minúscula aparece no array de nomes.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
const expectedResult = 20;
const countA = (arr) => {
  const arrayToArray = arr.join('').toLowerCase().split('');
  return arrayToArray.reduce((acc, curr) => {
    if (curr === 'a') {
      return acc += 1
    }
    return acc;
  }, 0);
}

console.log(countA(names));

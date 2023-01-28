// - Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

// const romanNumber = {
//   I: 1,
//   V: 5,
//   X: 10,
//   L: 50,
//   C: 100,
//   D: 500,
//   M: 1000,
// };

// function translRoman(entrada, objeto) {
//   let valorRomano = entrada;
//   let valorTransl = 0;

//   for (let i = 0; i < entrada.length; i += 1) {
//     if (objeto[valorRomano[i]] < valorTransl) {
//       valorTransl -= objeto[valorRomano[i]];
//     } else {
//       valorTransl += objeto[valorRomano[i]];
//     }
//   }

//   console.log(valorTransl);
// }

// translRoman("XV", romanNumber);

// - Crie uma função chamada arrayOfNumbers que receberá a variável array como parâmetro.
// - Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array, que deverá ser retornado ao final pela função.

let vector = [
  [1, 2],
  [3, 4, 5, 6],
  [7, 8, 9, 10],
];

function arrayOfNumbers(array) {
  let newArray = [];

  for (let ia = 0; ia < array.length; ia += 1) {
    for (let ib = 0; ib < array[ia].length; ib += 1) {
      if (array[ia][ib] % 2 === 0) {
        newArray.push(array[ia][ib]);
      }
    }
  }

  return newArray;
}

console.log(arrayOfNumbers(vector));

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

// - A partir do array de frutas basket, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array [‘Melancia’, ‘Abacate’, ‘Melancia’, ‘Melancia’, ‘Uva’], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.
// - Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...

const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

const arrayFrutas = ['Melancia', 'Abacate', 'Uva', 'Laranja', 'Jaca', 'Pera', 'Banana'];


function numFrutas(arrayCesta, frutas) {
  const objFrutas = {};
  let sum = 0;

  for (let iFrutas = 0; iFrutas < arrayFrutas.length; iFrutas += 1) {
    for (let iBasket = 0; iBasket < basket.length; iBasket += 1) {
      if (arrayFrutas[iFrutas] === basket[iBasket]) {
        sum += 1;
      }
    }
  
    objFrutas[arrayFrutas[iFrutas]] = sum;
    sum = 0;
  }

  return objFrutas;
}

let fraseConsole = 'Sua cesta possui:';

for (let i in numFrutas(basket, arrayFrutas)) {
  fraseConsole += ` ${numFrutas(basket, arrayFrutas)[i]} ${i}s,`
}

fraseConsole = fraseConsole.slice(0, -1) + '.';

console.log(fraseConsole);

// - Usando o objeto abaixo, faça o que for pedido a seguir:

let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

// - Acesse as chaves nome, sobrenome, andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato: “O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101”.

const ultimoMorador = moradores.blocoDois[moradores.blocoDois.length - 1];

console.log(`O morador do bloco 2 de nome ${ultimoMorador.nome} ${ultimoMorador.sobrenome} mora no ${ultimoMorador.andar}º andar, apartamento ${ultimoMorador.apartamento}`);

// - Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome. Depois faça o mesmo para os moradores do bloco 2.

let nomeCompleto = '';

for (let i = 0; i < moradores.blocoUm.length; i += 1) {
  nomeCompleto = `${moradores.blocoUm[i].nome} ${moradores.blocoUm[i].sobrenome}`
  console.log(nomeCompleto);
}

for (let i = 0; i < moradores.blocoDois.length; i += 1) {
  nomeCompleto = `${moradores.blocoDois[i].nome} ${moradores.blocoDois[i].sobrenome}`
  console.log(nomeCompleto);
}
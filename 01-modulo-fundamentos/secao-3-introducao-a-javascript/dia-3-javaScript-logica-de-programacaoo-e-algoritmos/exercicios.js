// - crie um algoritmo que imprima na tela o fatorial de 10.

let aFat = [];
let multip = 1;

for (let i = 9; i >= 0; i -= 1) {
  aFat[i] = i + 1;
  multip *= i + 1;
}

console.log(
  `${aFat[9]}! = ${aFat[9]} x ${aFat[8]} x ${aFat[7]} x ${aFat[6]} x ${aFat[5]} x ${aFat[4]} x ${aFat[3]} x ${aFat[2]} x ${aFat[1]} x ${aFat[0]} = ${multip}`
);

// - Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = "tryber";
let newWord = "";

for (let i = word.length - 1; i >= 0; i -= 1) {
  newWord += word[i];
}

console.log(`Palavra invertida: ${newWord}`);

let secWord = "brasil";
newWord = "";

for (let i = secWord.length - 1; i >= 0; i -= 1) {
  newWord += secWord[i];
}

console.log(`Nova palavra invertida: ${newWord}`);

// - Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

let array = ["java", "javascript", "python", "html", "css"];
let maiorPalavra = "";
let menorPalavra = array[0];

for (let ia = 0; ia < array.length; ia += 1) {
  for (let ib = 0; ib < array[ia].length - 1; ib += 1) {
    if (maiorPalavra.length - 1 < array[ia].length - 1) {
      maiorPalavra = array[ia];
      continue;
    }
    if (menorPalavra.length - 1 > array[ia].length - 1) {
      menorPalavra = array[ia];
    }
  }
}

console.log(`Maior palavra: ${maiorPalavra}`);
console.log(`Menor palavra: ${menorPalavra}`);

// - Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.

let maiorPrimo = 0;

for (let numeroAtual = 2; numeroAtual <= 50; numeroAtual += 1) {
  let primo = true;

  for (let numeroDivisor = 2; numeroDivisor < numeroAtual; numeroDivisor += 1) {
    if (numeroAtual % numeroDivisor === 0) {
      primo = false;
    }
  }
  if (primo) {
    maiorPrimo = numeroAtual;
  }
}

console.log(maiorPrimo);

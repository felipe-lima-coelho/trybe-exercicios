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

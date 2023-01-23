const a = 13;
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

if (a > b) {
  console.log(`O maior número entre ${a} e ${b} é o número ${a}`);
} else {
  console.log(`O maior número entre ${a} e ${b} é o número ${b}`);
}

const c = 2;

if (a > b && a > c) {
  console.log(`O maior número entre ${a}, ${b} e ${c} é o número ${a}`);
} else if (b > a > c) {
  console.log(`O maior número entre ${a}, ${b} e ${c} é o número ${b}`);
} else {
  console.log(`O maior número entre ${a}, ${b} e ${c} é o número ${c}`);
}

const valor = -10;

if (valor > 0) {
  console.log(`O valor recebido é ${valor}, portanto ele é positivo`);
} else if (valor < 0) {
  console.log(`O valor recebido é ${valor}, portanto ele é negativo`);
} else {
  console.log(`O valor recebido é ${valor}, portanto ele é igual a zero`);
}

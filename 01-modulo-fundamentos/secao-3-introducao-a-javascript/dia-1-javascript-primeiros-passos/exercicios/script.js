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

const angulo1 = 70;
const angulo2 = 90;
const angulo3 = 20;
const somaAngulos = angulo1 + angulo2 + angulo3;

if (
  angulo1 < 0 ||
  angulo1 === isNaN ||
  angulo2 < 0 ||
  angulo2 === isNaN ||
  angulo3 < 0 ||
  angulo3 === isNaN
) {
  console.log("ERROR");
} else if (somaAngulos === 180) {
  console.log(true);
} else {
  console.log(false);
}

const pecaXadrez = "Cavalo";

switch (pecaXadrez.toLowerCase()) {
  case "peao":
    console.log('1 casa na diagonal "para frente"');
    break;
  case "bispo":
    console.log("todas as casas na diagonais");
    break;
  case "cavalo":
    console.log('se move em forma de "L"');
    break;
  case "torre":
    console.log('se move como um sinal de "+"');
    break;
  case "dama":
    console.log("se move como uma torre e um bispo juntos");
    break;
  case "rei":
    console.log("se move apenas uma casa para qualquer direção");
    break;
  default:
    console.log("Peça informada não existe no Xadrez");
}

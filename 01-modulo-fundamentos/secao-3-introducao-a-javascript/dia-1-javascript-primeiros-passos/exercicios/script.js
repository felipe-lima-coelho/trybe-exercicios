// Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

const a = 13;
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas constantes com os valores que serão comparados.

if (a > b) {
  console.log(`O maior número entre ${a} e ${b} é o número ${a}`);
} else {
  console.log(`O maior número entre ${a} e ${b} é o número ${b}`);
}

// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.

const c = 2;

if (a > b && a > c) {
  console.log(`O maior número entre ${a}, ${b} e ${c} é o número ${a}`);
} else if (b > a > c) {
  console.log(`O maior número entre ${a}, ${b} e ${c} é o número ${b}`);
} else {
  console.log(`O maior número entre ${a}, ${b} e ${c} é o número ${c}`);
}

// Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

const valor = -10;

if (valor > 0) {
  console.log(`O valor recebido é ${valor}, portanto ele é positivo`);
} else if (valor < 0) {
  console.log(`O valor recebido é ${valor}, portanto ele é negativo`);
} else {
  console.log(`O valor recebido é ${valor}, portanto ele é igual a zero`);
}

// Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

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

// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

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

// - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

const a = 10;
const b = 2;

function adicao(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

// - Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

function maiorValor(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

// - Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

const c = 7;

function maiorValor3(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else if (c > a && c > b) {
    return c;
  }
}

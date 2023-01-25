// - Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

// n = 5

// *****
// *****
// *****
// *****
// *****

let n = 6;
let asterisco = "";

for (let ia = 1; ia <= n; ia += 1) {
  for (let ib = 1; ib <= n; ib += 1) {
    asterisco += "*";
  }
  console.log(asterisco);
  asterisco = "";
}

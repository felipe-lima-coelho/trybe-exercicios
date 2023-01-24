const inputSalario = document.querySelector("#salario-bruto");
const inputCalcular = document.querySelector("#botao-calcular");
const sectionResposta = document.querySelector("#resposta");

function calcularSalarioLiquido() {
  const salarioBruto = inputSalario.value;
  let inss = 0;

  if (salarioBruto <= 1556.94) {
    inss = salarioBruto * 0.08;
  } else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    inss = salarioBruto * 0.09;
  } else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    inss = salarioBruto * 0.11;
  } else {
    inss = 570.88;
  }

  const salarioReduzidoInss = salarioBruto - inss;
  let salarioLiquido = 0;

  if (salarioReduzidoInss <= 1903.98) {
    salarioLiquido = salarioReduzidoInss;
  } else if (salarioReduzidoInss >= 1903.99 && salarioReduzidoInss <= 2826.65) {
    salarioLiquido = salarioReduzidoInss * 0.075 - 142.8;
  } else if (salarioReduzidoInss >= 2826.66 && salarioReduzidoInss <= 3751.05) {
    salarioLiquido = salarioReduzidoInss * 0.15 - 354.8;
  } else if (salarioReduzidoInss >= 3751.06 && salarioReduzidoInss <= 4664.68) {
    salarioLiquido = salarioReduzidoInss * 0.225 - 636.13;
  } else {
    salarioLiquido = salarioReduzidoInss * 0.275 - 869.36;
  }

  sectionResposta.innerHTML = `<h2>O salário líquido descontado INSS e IR é de ${salarioLiquido}</h2>`;
}

inputCalcular.addEventListener("click", calcularSalarioLiquido);

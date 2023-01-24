const inputSalario = document.querySelector("#salario-bruto");
const inputCalcular = document.querySelector("#botao-calcular");
const sectionResposta = document.querySelector("#resposta");

function calcularSalarioLiquido() {
  const salarioBruto = inputSalario.ariaValueMax;
  let inss = 0;

  if (salarioBruto > 5189.82) {
    inss = 570.88;
  } else if (salarioBruto <= 5189.82 && salarioBruto > 2594.92) {
    inss = salarioBruto * 0.11;
  } else if (salarioBruto <= 2594.92 && salarioBruto > 1556.94) {
    inss = salarioBruto * 0.09;
  } else {
    inss = salarioBruto * 0.08;
  }
}

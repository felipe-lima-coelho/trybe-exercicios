const botaoCalcular = document.querySelector("#botaoCalcular");
const inputCusto = document.querySelector("#custo");
const inputVenda = document.querySelector("#venda");
const sectionResposta = document.querySelector("#resposta");

function calcularLucro() {
  const imposto = 1.2;
  const valorVenda = inputVenda.value;
  const valorCusto = inputCusto.value;
  const custoTotal = valorCusto * imposto;

  if (
    valorVenda < 0 ||
    valorCusto < 0 ||
    valorVenda === isNaN ||
    valorCusto === isNaN
  ) {
    sectionResposta.innerHTML =
      "<h3>ERROR: Digite corretamente um número maior ou igual a 0</h3>";
  } else {
    const lucro = valorVenda - custoTotal;
    const lucroMil = lucro * 1000;
    sectionResposta.innerHTML = `<h3>O lucro de cada venda é de ${lucro}. Após 1000 vendas o lucro será de ${lucroMil}</h3>`;
  }
}

botaoCalcular.addEventListener("click", calcularLucro);

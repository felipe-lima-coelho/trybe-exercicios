let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// - Percorra o array imprimindo todos os valores nele contidos com a função console.log()

for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
}

// - Some todos os valores contidos no array e imprima o resultado

let soma = 0;

for (let i = 0; i < numbers.length; i += 1) {
  soma += numbers[i];
}

console.log(`A soma total é igual a ${soma}`);

// - Calcule e imprima a média aritmética dos valores contidos no array;

const mAritimetica = soma / (numbers.length - 1);

console.log(mAritimetica);

// - Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”

if (mAritimetica > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}

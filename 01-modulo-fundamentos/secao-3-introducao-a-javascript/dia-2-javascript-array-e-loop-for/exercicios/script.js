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

// - Utilizando for, descubra qual o maior valor contido no array e imprima-o

let compara = 0;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > compara) {
    compara = numbers[i];
  }
}

console.log(`O maior número da Array é ${compara}`);

// - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”

let quantosImpar = 0;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 !== 0) {
    quantosImpar += 1;
  }
}

if (quantosImpar !== 0) {
  console.log(`existem ${quantosImpar} valores ímpares no array`);
} else {
  console.log("nenhum valor ímpar encontrado");
}

// - Utilizando for, descubra qual o menor valor contido no array e imprima-o

let menoValor = 1000;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < menoValor) {
    menoValor = numbers[i];
  }
}

console.log(`O menor valor da Array é o ${menoValor}`);

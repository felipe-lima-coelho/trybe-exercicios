// - Crie duas funções JavaScript com as seguintes especificações:

// - Função 1: Escreva uma função que substitua a letra ‘x’ em uma frase.
//    . O nome da função deverá ser substituaX;
//    . A função deverá receber um nome por parâmetro;
//    . Declare dentro da função uma variável do tipo const, com o nome frase, atribuindo o valor 'Tryber x aqui!';
//    . A função deverá retornar uma nova frase em que o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.

const substituaX = (nome) => {
  const frase = 'Tryber x aqui!';
  let novaFrase = frase.split('x').join(nome);

  return novaFrase;
};

console.log(substituaX('Felipe'));

// // Nova pessoa contratada

// crie uma função que receba como parâmetro o nome completo da nova pessoa colaboradora e que automaticamente gere um email no formato nome_da_pessoa@trybe.com;

const emailName = (name) => {
  const email = name.toLowerCase().replace(' ', '_');
  return { name, email: `${email}@trybe.com`};
};

// utilize a função newEmployees, definida abaixo, para receber a sua função como parâmetro e criar o objeto de cada pessoa contratada.

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(emailName));

// // Sorteador de loteria

// Desenvolva uma HOF que retorne o resultado de um sorteio. Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”).

const checkNumber = (number) => {
  const randomNumbers = Math.floor(Math.random() * 6);
  
  if (number !== randomNumbers) {
    return false;
  }
  return true;
}

const prizeDraw = (number, callback) => {
  if (callback(number)) {
    return 'Parabéns, você ganhou';
  }
  return 'Tente novamente';
};

console.log(prizeDraw(5, checkNumber));

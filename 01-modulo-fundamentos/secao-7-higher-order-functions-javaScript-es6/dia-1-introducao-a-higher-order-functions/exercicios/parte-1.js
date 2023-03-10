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

// // Corretor automático de exame

// Crie uma HOF que receberá três parâmetros:
  // O primeiro será um array de respostas corretas (soluções);
  // O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
  // O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:
    // Uma resposta correta adiciona 1 ponto à pontuação final;
    // A ausência de uma resposta não altera a pontuação (quando for “N.A”);
    // Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
  // Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compare = (arrRight, arrAnswers) => {
  let sum = 0;

  arrRight.forEach((element, index) => {
    if (element === arrAnswers[index]) {
      sum += 1;
    }
    if (element !== arrAnswers[index] && arrAnswers[index] !== 'N.A') {
      sum -= 0.5;
    }
    if (arrAnswers[index] === 'N.A') {
      sum += 0;
    }
  });

  return sum;
};

const count = (arrRight, arrAnswers, callback) => {
  return callback(arrRight, arrAnswers);
};

console.log(count(RIGHT_ANSWERS, STUDENT_ANSWERS, compare));

const readline = require('readline-sync');

const bmi = () => {
  const weight = readline.questionFloat('What’s your weight? ');
  const height = readline.questionFloat('What’s your height in meters? ');
  const calculate = weight / (height ** 2);

  if (calculate < 18.5) {
    console.log('Abaixo do peso (magreza)');
  } else if (calculate >= 18.5 && calculate <= 24.9) {
    console.log('Peso normal');
  } else if (calculate >= 25 && calculate <= 29.9) {
    console.log('Acima do peso (sobrepeso)');
  } else if (calculate >= 30 && calculate <= 34.9) {
    console.log('Obesidade grau I');
  } else if (calculate >= 35 && calculate <= 39.9) {
    console.log('Obesidade grau II');
  } else {
    console.log('Obesidade graus III e IV');
  }


  console.log(calculate);
  return calculate;
};

bmi()

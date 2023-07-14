const readline = require('readline-sync');

const bmi = () => {
  const weight = readline.questionInt('What’s your weight? ');
  const height = readline.questionFloat('What’s your height? ');

  const calculate = weight / (height ** 2);
  console.log(calculate);
  return calculate;
};

bmi()

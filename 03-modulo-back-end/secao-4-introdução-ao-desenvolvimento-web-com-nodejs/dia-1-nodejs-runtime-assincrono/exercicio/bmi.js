const readline = require('readline-sync');

const bmi = () => {
  const weight = readline.questionFloat('What’s your weight? ');
  const height = readline.questionFloat('What’s your height in meters? ');

  const calculate = weight / (height ** 2);
  console.log(calculate);
  return calculate;
};

bmi()

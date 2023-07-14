const weight = 100;
const height = 1.87;

const bmi = () => {
  const calculate = weight / (height ** 2);
  console.log(calculate);
  return calculate;
};

bmi()

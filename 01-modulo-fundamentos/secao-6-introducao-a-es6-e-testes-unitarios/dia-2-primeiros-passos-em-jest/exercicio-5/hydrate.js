const hydrate = (string) => {
  const stringToArray = string.split(' ');
  let sum = 0;

  stringToArray.forEach((element) => {
    const transformInt = parseInt(element, 10);

    if (transformInt) {
      sum += transformInt;
    }
  });

  let cup = 'copo';

  if (sum > 1) {
    cup = 'copos';
  }

  return `${sum} ${cup} de água`;
};

console.log(hydrate('1 cerveja, 2 shots e 1 catuaba'));

module.exports = hydrate;

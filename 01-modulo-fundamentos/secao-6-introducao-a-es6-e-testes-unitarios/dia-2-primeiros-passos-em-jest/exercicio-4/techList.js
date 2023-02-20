const techList = (array, string) => {
  if (array.length === 0) return 'Vazio!';
  
  const arrayResult = [];

  for (let i = 0; i < array.length; i += 1) {
    if (Array.isArray(array)) {
      const arrayOrderly = array.sort();
      arrayResult.push({
        tech: arrayOrderly[i],
        name: string,
      });
    }
  }

  return arrayResult;
};

module.exports = techList;

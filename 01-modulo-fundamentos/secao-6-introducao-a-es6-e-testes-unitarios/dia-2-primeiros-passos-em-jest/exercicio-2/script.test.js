const myFizzBuzz = require('./script');

describe('Testando a função myFizzBuzz', () => {
  test('Passando o argumento 15 o retorno esperado é "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  test('Passando o argumento 21 o retorno esperado é "fizz"', () => {
    expect(myFizzBuzz(21)).toBe('fizz');
  });
  test('Passando o argumento 35 o retorno esperado é "buzz"', () => {
    expect(myFizzBuzz(35)).toBe('buzz');
  });
  test('Passando o argumento 7 o retorno esperado é 7', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });
  test('Passando o argumento "nao" o retorno esperado é false', () => {
    expect(myFizzBuzz('nao')).toBe(false);
  });
});

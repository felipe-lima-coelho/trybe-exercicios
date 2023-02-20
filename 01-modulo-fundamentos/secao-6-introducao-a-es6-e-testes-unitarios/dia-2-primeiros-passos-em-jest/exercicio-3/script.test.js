const {mapString, encode, decode} = require('./script');

describe('Testando a função encode e decode', () => {
  test('Passando o argumento "ola mundo" é esperado "4l1 m5nd4"', () => {
    expect(encode('ola mundo')).toBe('4l1 m5nd4');
  });
  test('Passando o argumento "4l1 m5nd4" é esperado "ola mundo"', () => {
    expect(decode('4l1 m5nd4')).toBe('ola mundo');
  });
  test('Passando o argumento "aeiou" é esperado "12345"', () => {
    expect(encode('aeiou')).toBe('12345');
  });
  test('Passando o argumento "12345" é esperado "aeiou"', () => {
    expect(decode('12345')).toBe('aeiou');
  });
  test('Passando o argumento "bcdfgh" é esperado "bcdfgh"', () => {
    expect(encode('bcdfgh')).toBe('bcdfgh');
  });
  test('Passando o argumento "trybe" é esperado 5 como o tamanho da string', () => {
    expect(encode('trybe').length).toBe(5);
  });
});

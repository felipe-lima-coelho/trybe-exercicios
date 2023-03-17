import validator from 'validator';

const textInput = document.querySelector('#text-input');
const selectValidator = document.querySelector('#select-validator');
const btnCheck = document.querySelector('#check-form');
const response = document.querySelector('#response');

btnCheck.addEventListener('click', (event) => {
  event.preventDefault();
  const text = textInput.value;
  const optionSelected = selectValidator.value;

  if (optionSelected === 'email') {
    response.innerHTML = `A validação retornou ${validator.isEmail(text)}`;
  }
  if (optionSelected === 'let') {
    response.innerHTML = `A validação retornou ${validator.isAlpha(text)}`;
  }
  if (optionSelected === 'boo') {
    response.innerHTML = `A validação retornou ${validator.isBoolean(text)}`;
  }
  if (optionSelected === 'date') {
    response.innerHTML = `A validação retornou ${validator.isDate(text)}`;
  }
  if (optionSelected === 'empty') {
    response.innerHTML = `A validação retornou ${validator.isEmpty(text)}`;
  }
});

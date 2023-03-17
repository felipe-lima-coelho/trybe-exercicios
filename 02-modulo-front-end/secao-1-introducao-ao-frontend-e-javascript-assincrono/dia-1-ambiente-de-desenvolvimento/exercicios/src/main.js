import validator from 'validator';

const textInput = document.querySelector('#text-input');
const selectValidator = document.querySelector('#select-validator');
const btnCheck = document.querySelector('#check-form');
const response = document.querySelector('#response');

btnCheck.addEventListener('click', (event) => {
  event.preventDefault()
  const text = textInput.value;
  const optionSelected = selectValidator.value;

  switch (optionSelected) {
    case 'email':
      response.innerHTML = `A validação retornou ${validator.isEmail(text)}`;
      break;
    case 'let':
      response.innerHTML = `A validação retornou ${validator.isAlpha(text)}`;
      break;
    case 'boo':
      response.innerHTML = `A validação retornou ${validator.isBoolean(text)}`;
      break;
    case 'date':
      response.innerHTML = `A validação retornou ${validator.isDate(text)}`;
      break;
    default:
      response.innerHTML = `A validação retornou ${validator.isEmpty(text)}`;
      break;
  }
});

import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const NEXT_COLOR = 'NEXT_COLOR';
const PREVIOUS_COLOR = 'PREVIOUS_COLOR';
const RANDOM_COLOR = 'RANDOM_COLOR';

const next = () => ({ type: NEXT_COLOR });
const previous = () => ({ type: PREVIOUS_COLOR });
const random = () => ({ type: RANDOM_COLOR });

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const criarCor = () => {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEXT_COLOR:
      return { ...INITIAL_STATE, index: state.index + 1 };
    case PREVIOUS_COLOR:
      return { ...INITIAL_STATE, index: action.index - 1 };
    case RANDOM_COLOR:
      state.colors.splice(state.index, 0, criarCor());
      return state
    default:
      return state;
  };
};

const store = createStore(reducer, composeWithDevTools());

const btnNextColor = document.querySelector('#next');
btnNextColor.addEventListener("click", () => store.dispatch(next()));

const btnPreviousColor = document.querySelector('#previous');
btnPreviousColor.addEventListener("click", () => store.dispatch(previous()));

const btnRandomColor = document.querySelector('#random');
btnRandomColor.addEventListener("click", () => store.dispatch(random()));

store.subscribe(() => {
  const GLOBAL_STORE = store.getState();
  const containerElement = document.querySelector('#container');
  const texColorElement = document.querySelector('#value');

  containerElement.style.backgroundColor = GLOBAL_STORE.colors[GLOBAL_STORE.index];
  texColorElement.innerHTML = GLOBAL_STORE.colors[GLOBAL_STORE.index];
});

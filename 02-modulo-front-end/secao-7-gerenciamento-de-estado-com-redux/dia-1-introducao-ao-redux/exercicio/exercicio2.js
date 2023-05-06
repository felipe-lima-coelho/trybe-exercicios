import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const STATUS = 'STATUS';
const THEME = 'THEME';

const status = () => ({ type: STATUS });
const theme = () => ({ type: THEME });

const INITIAL_STATE = {
  status: 'offline',
  theme: 'dark',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STATUS:
      return {
        ...state,
        status: state.status === 'offline' ? 'online' : 'offline',
      };
    case THEME:
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark',
      };
    default:
      return state;
  };
};

const store = createStore(reducer, composeWithDevTools());

const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');

themeButton.addEventListener('click', () => store.dispatch(theme()));

statusButton.addEventListener('click', () => store.dispatch(status()));

const render = () => {
  const GLOBAL_STATE = store.getState();
  const bodyElement = document.querySelector('body');
  const statusTextElement = document.querySelector('#status');
  const btnToggleTheme = document.querySelector('#toggle-theme');
  const btnToggleStatus = document.querySelector('#toggle-status');

  bodyElement.style.color = GLOBAL_STATE
    .theme === 'dark' ? 'white' : '#333';
  bodyElement.style.backgroundColor = GLOBAL_STATE
    .theme === 'dark' ? '#333' : 'white';

  statusTextElement.innerHTML = GLOBAL_STATE
    .status === 'offline' ? 'Offline' : 'Online';

  btnToggleTheme.innerHTML = `${GLOBAL_STATE.theme === 'dark' ? 'Light' : 'Dark'} Mode`;

  btnToggleStatus.innerHTML = GLOBAL_STATE
  .status === 'offline' ? 'Ficar Online' : 'Ficar Offline';


};

store.subscribe(render);

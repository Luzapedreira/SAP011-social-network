// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

import register from './pages/register/register.js';
import login from './pages/login/login.js';
import timeline from './pages/timeline/timeline.js';

export default {
  register: register(),
  login: login(),
  timeline: timeline(),
};

const main = document.querySelector('#teste');

const init = () => {
  window.addEventListener('hashchange', () => {
    main.innerHTML = '';
    switch (window.location.hash) {
      case '#login':
        main.appendChild(login());
        break;
      case '#register':
        main.appendChild(register());
        break;
      case '#timeline':
        main.appendChild(timeline());
        break;
      default:
        main.appendChild(register());
    }
  });
};

window.addEventListener('load', () => {
  main.appendChild(login());
  init();
});

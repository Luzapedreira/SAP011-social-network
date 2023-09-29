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

document.addEventListener('DOM', async () => {
  const main = document.querySelector('#teste');
  let logged = false;

  const init = async () => {
    main.innerHTML = '';
    const pages = window.location.hash;

    switch (pages) {
      case '#login':
        if (!logged) {
          main.appendChild(login());
        } else {
          window.location.hash = '#timeline';
        }
        break;
      case '#register':
        main.appendChild(register());
        break;
      case '#timeline':
        if (logged) {
          main.appendChild(timeline());
        } else {
          window.location.hash = '#login';
        }
        break;
      default:
        window.location.hash = '#login';
        break;
    };
  };

  window.addEventListener('hashchange', init);
  window.addEventListener('load', init);
import register from './pages/register/register.js';
import login from './pages/login/login.js';
import timeline from './pages/timeline/timeline.js';

let logged = false;

const main = document.querySelector('#teste');
export function registerPage() {
  const content = document.createElement('div');
  content.textContent = 'Página de Registro';
  return content;
}
export function loginPage() {
  const content = document.createElement('div');
  content.textContent = 'Página de Login';
  return content;
}
export function timelinePage() {
  const content = document.createElement('div');
  content.textContent = 'Página da Linha do Tempo';
  return content;
}

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
  }
};

window.addEventListener('hashchange', init);
window.addEventListener('load', init);

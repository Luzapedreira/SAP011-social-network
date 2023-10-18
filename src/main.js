import register from './pages/register/register.js';
import login from './pages/login/login.js';
import timeline from './pages/timeline/timeline.js';

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

      main.appendChild(login());
      break;
    case '#register':
      main.appendChild(register());
      break;
    case '#timeline':

      main.appendChild(await timeline());

      break;
    default:
      window.location.hash = '#login';
      break;
  }
};

window.addEventListener('hashchange', init);
window.addEventListener('load', init);

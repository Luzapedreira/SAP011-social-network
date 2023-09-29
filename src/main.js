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

export default (message) => {
  const alert = document.createElement('div');
  alert.classList.add('alertMessage');
  alert.innerText = message;
  const body = document.querySelector('body');
  body.appendChild(alert);
  setTimeout(() => {
    body.removeChild(alert);
  }, 2000); // 2000 milissegundos = 2 segundos
};

export default (message) => {
  // Cria um elemento <div> para a mensagem de alerta
  const alert = document.createElement('div');

  // Adiciona a classe 'customAlert' ao elemento <div>
  alert.classList.add('alertMessage');

  // Define o texto da mensagem na mensagem de alerta
  alert.innerText = message;

  // Obtém a referência ao elemento <body> da página
  const body = document.querySelector('body');

  // Adiciona o elemento de alerta à página (como filho do <body>)
  body.appendChild(alert);

  // Define um temporizador para remover o elemento de alerta após 2 segundos (2000 milissegundos)
  setTimeout(() => {
    body.removeChild(alert);
  }, 2000); // 20000 milissegundos = 2 segundos
};

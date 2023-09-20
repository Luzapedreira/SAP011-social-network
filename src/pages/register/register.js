export default () => {
  const container = document.createElement('div');
  const template = '
  <h2>UM TESTE DE FUNCIONAMENTO</h2>
  <p>Um teste de como vamos desenvolver a aplicação em SPA.</p>
  <h3>SERÁ QUE COMPLICA AINDA MAIS?</h3>
  <p>Só praticando para aprender.</p>
  ';
  container.innerHTML = template;

  return container;
}
export default () => {
  const container = document.createElement('div');
  container.classList.add('container');

  container.innerHTML = `
    <section class="page-section">
      <div class="section-text">
        <h2> "Timeline"</h2> 
        <p>Um teste de como vamos desenvolver a aplicação em SPA.</p>
        <h3>SERÁ QUE COMPLICA AINDA MAIS?</h3>
        <p>Só praticando para aprender.</p>
      <div class="section-text">
    </section>
    `;
  return container;
};

import { lerPosts } from '../../firebase/firebase-store';

export default () => {
  const container = document.createElement('section');
  const template = `
              <h1>Olá! Fique por dentro das pérolas que rolaram no Checkout!</h1>
              `;

  container.innerHTML = template;

  function mostrarPosts(posts) {
    const postTemplate = posts.map((post) => `
        <p>${post.textoDoPost}</p>
        <button id="edit-${post.id}" class="edit-btn" data-postid="${post.id}">editar</button>
      `);

    container.innerHTML += postTemplate.join();

    const edicaoBtns = container.querySelectorAll('.edit-btn');
    edicaoBtns.forEach((editBtn) => {
      editBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const id = event.target.dataset.postid;
        const novoTexto = 'Novo texto do post da Narooka!';

        atualizaPost(id, novoTexto);
      });
    });
  }

  lerPosts(mostrarPosts);

  return container;
};
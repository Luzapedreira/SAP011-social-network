// import { createPost } from './firestore.js';

// const publicarBtn = ..........;

// publicarBtn.addEventListener('click', () => {
//   const texto = ......... .value;
  
//   createPost(texto, idUser);
// });
export default () => {
  const container = document.createElement('div');
  container.classList.add('container');

  container.innerHTML = `
    <section class="timeline-section">
      <div class='sign-ou' id='sign-out'
      <button class='sign-out' id='sign-out alt='Sign Out'></button>
      <textarea id='timeline-text' placeholder='Compartilhe a sua rotina.'></textarea>
      <button id="post-button">Publicar</button>
 
      <div id="post-container">
      </div>
    </section>
    `;
  return container;
};

import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import {
  postUser,
  postViewer,
  postEdit,
  awesome,
  noAwesome,
  deletePost,
} from '../../firebase/firebase-store.js';
import { db } from '../../firebase/firebase-config.js';

export default async () => {
  const container = document.createElement('div');
  container.classList.add('container');

  container.innerHTML = `
    <header>
    </header>

    <main>
    </main>
    `;

  const auth = getAuth();
  const existingPosts = await postViewer();

  async function checkIfUserLiked(postId, userId) {
    try {
      const postRef = doc(db, 'posts', postId);
      const postSnapshot = await getDoc(postRef);

      if (postSnapshot.exists()) {
        const postData = postSnapshot.data();

        if (postData.likeUsers && postData.likeUsers.includes(userId)) {
          return true;
        }
      }

      return false;
    } catch (error) {
      console.error('Erro ao verificar o like do usuário:', error);
      throw error;
    }
  }

  const modalDelete = () => {
    const templateDelete = `
  };<div id="fade" class="hide"></div>
    <div id="modal" class="hide">
      <p class="message-delete">Are you sure?</p> 
      <div class="button-modal">
       <button id="cancel-modal">Cancel</button>
        <button id="delete-modal">Delete</button>
      </div>
    </div>  
  `;
    const modalContainer = document.createElement('section');
    modalContainer.classList.add('modal-container');
    modalContainer.innerHTML = templateDelete;
    document.body.appendChild(modalContainer);

    const modal = modalContainer.querySelector('#modal');
    const fade = modalContainer.querySelector('#fade');
    const deleteModal = modalContainer.querySelector('#delete-modal');
    const cancelModal = modalContainer.querySelector('#cancel-modal');

    cancelModal.addEventListener('click', () => {
      modalContainer.remove();
    });

    deleteModal.addEventListener('click', async () => {
      await deletePost();
      modalContainer.remove();
    });

    return { fade, modal, deleteModal };
  };

  function renderPost(post) {
    console.log(post.timestamp);

    const timelinePost = container.querySelector('#post-feed');
    const postContainer = document.createElement('div');
    postContainer.className = 'post';

    const userContainer = document.createElement('div');
    userContainer.className = 'user-container';

    const userTitle = document.createElement('div');
    userTitle.className = 'user-title';

    const postIcon = document.createElement('i');
    postIcon.className = 'fa-solid fa-circle-user icon-user';

    const postTitle = document.createElement('h2');
    postTitle.textContent = `${post.userName}`;

    const postContentContainer = document.createElement('div');
    postContentContainer.className = 'post-container';

    const postContent = document.createElement('p');
    postContent.textContent = post.post;

    // Cria os elementos de edição e exclusão
    let deleteButton = '';
    if (post.idUser === auth.currentUser.uid) {
      deleteButton = document.createElement('button');
      deleteButton.innerHTML = '<i class=\'material-symbols-outlined\'>delete</i>';
      deleteButton.className = 'delete-button';
    }

    let editButton = '';

    if (post.idUser === auth.currentUser.uid) {
      editButton = document.createElement('button');
      editButton.innerHTML = '<i class=\'fa-regular fa-pen-to-square\'></i>';
      editButton.className = 'edit-button';
    }
    const userActions = document.createElement('div');
    userActions.className = 'user-actions';

    const likeAction = document.createElement('div');
    likeAction.className = 'like-actions like-actions-right';

    const starButton = document.createElement('button');
    starButton.innerHTML = '<i class= ></i>';
    starButton.className = 'star-button';

    const starCount = document.createElement('span');
    starCount.className = 'like-count';
    starCount.textContent = post.likeUsers
      ? post.likeUsers.length.toString()
      : '0';

    userTitle.appendChild(postIcon);
    userTitle.appendChild(postTitle);
    userContainer.appendChild(userTitle);
    if (editButton) userContainer.appendChild(editButton);
    postContainer.appendChild(userContainer);
    postContainer.appendChild(postContentContainer);
    postContentContainer.appendChild(postContent);
    postContainer.appendChild(userActions);

    if (deleteButton) userActions.appendChild(deleteButton);
    likeAction.appendChild(starCount);
    likeAction.appendChild(starButton);
    userActions.appendChild(likeAction);
    postContainer.setAttribute('data-post-id', post.id);
    // postContainer.appendChild(timestampElement);
    timelinePost.appendChild(postContainer);

    // lógica para os botões de editar e lixeira so aparecer para quem for dono do post

    postContainer.setAttribute('data-post-id', post.id);
    postContainer.setAttribute('data-post-author-id', post.authorId);

    if (deleteButton) {
      deleteButton.addEventListener('click', () => {
        const { fade, modal, deleteModal } = modalDelete();

        deleteModal.addEventListener('click', async () => {
          try {
            await deletePost(post.id);
            postContainer.remove();
          } catch (error) {
            console.error('Erro ao excluir o post', error);
          } finally {
            modal.remove();
            fade.remove();
          }
        });
      });
    }

    if (editButton) {
      editButton.addEventListener('click', async () => {
        starButton.style.display = 'none';
        starCount.style.display = 'none';
        // Recupera o conteúdo atual do post
        const postId = postContainer.getAttribute('data-post-id');
        const postContentElement = postContainer.querySelector('p'); // Obtém o elemento do conteúdo do post
        const originalContent = postContentElement.textContent;

        const editForm = document.createElement('form');
        editForm.className = 'edit-form';

        // Cria um formulário de edição preenchido com o conteúdo atual
        const editTextArea = document.createElement('textarea');
        editTextArea.value = originalContent; // Usa o conteúdo atual
        editTextArea.className = 'edit-textarea';
        editForm.appendChild(editTextArea);

        const cancelButton = document.createElement('button');
        cancelButton.innerHTML = '<i class= ></i>';
        cancelButton.className = 'cancel-button';
        editForm.appendChild(cancelButton);

        const saveButton = document.createElement('button');
        saveButton.innerHTML = '<i class= ></i>';
        saveButton.className = 'save-button';
        editForm.appendChild(saveButton);

        postContentContainer.replaceChild(editForm, postContentElement);

        // Adiciona um manipulador de evento para o botão "Salvar"
        saveButton.addEventListener('click', async (event) => {
          event.preventDefault();
          const newContent = editTextArea.value;

          if (newContent !== originalContent) {
            try {
              // Usa a função de edição no Firebase Firestore para atualizar o conteúdo
              await postEdit(postId, newContent);
              // Atualiza o conteúdo na interface do usuário
              postContentElement.textContent = newContent;

              postContentContainer.replaceChild(postContentElement, editForm);
            } catch (error) {
              console.error('Erro ao editar o post', error);
              alert('Erro ao editar o post. Tente novamente mais tarde.');
            }
          } else {
            postContentContainer.replaceChild(postContentElement, editForm);
          }
          starButton.style.display = 'inline-block';
          starCount.style.display = 'inline-block';
        });

        cancelButton.addEventListener('click', (event) => {
          event.preventDefault();
          postContentElement.textContent = originalContent;
          postContentContainer.replaceChild(postContentElement, editForm);

          starButton.style.display = 'inline-block';
          starCount.style.display = 'inline-block';
        });
      });
    }

    starButton.addEventListener('click', async () => {
      window.location.reload(); // temporário reload de page
      const postId = starButton.closest('.post').getAttribute('data-post-id');
      const user = auth.currentUser;
      const idUserAtual = user ? user.uid : null;

      try {
        const hasLiked = await checkIfUserLiked(postId, idUserAtual);

        if (!hasLiked) {
          await awesome(postId, idUserAtual);
          const starCount = starButton.nextElementSibling;
          if (starCount) {
            const currentCount = parseInt(starCount.textContent, 10);
            if (!Number.isNaN(currentCount)) {
              const newCount = currentCount + 1;
              starCount.textContent = newCount.toString(); // Atualiza o contador de likes
            } else {
              console.error(
                'O conteúdo do contador de curtidas não é um número válido:',
                starCount.textContent,
              );
            }
          } else {
            console.error('Elemento do contador de curtidas não encontrado.');
          }
        } else {
          await noAwesome(postId, idUserAtual);
          console.log('Descurtiu o post');
          const starCount = starButton.nextElementSibling;
          if (starCount) {
            const currentCount = parseInt(starCount.textContent, 10);
            if (!Number.isNaN(currentCount)) {
              const newCount = currentCount - 1;
              starCount.textContent = newCount.toString(); // Atualiza o contador de likes
            } else {
              console.error(
                'O conteúdo do contador de curtidas não é um número válido:',
                starCount.textContent,
              );
            }
          } else {
            console.error('Elemento do contador de curtidas não encontrado.');
          }
        }
      } catch (error) {
        console.error('Erro ao curtir o post', error);
        alert('Erro ao curtir o post. Tente novamente mais tarde.');
      }
    });
  }

  existingPosts.forEach((item) => renderPost(item));

  function renderPostsIfAuthenticated(userName, idUser) {
    const timelinePost = container.querySelector('#post-feed');
    const newPostContainerLocation = container.querySelector('#new-post-container');

    if (!isNewPostContainerCreated) {
      const newPostContainer = document.createElement('div');
      newPostContainer.className = 'new-post-container';

      const icon = document.createElement('i');
      icon.className = '';

      const userNameElement = document.createElement('h2');
      userNameElement.className = 'username';
      userNameElement.textContent = `${userName}`;

      const postContentDiv = document.createElement('div');
      postContentDiv.className = 'post-content-div';

      const postContentTextarea = document.createElement('textarea');
      postContentTextarea.placeholder = 'Compartilhe aqui a sua rotina.';
      postContentTextarea.id = 'post-content';

      // Adiciona o ícone e a <textarea> como filhos do div de conteúdo
      postContentDiv.appendChild(icon);
      postContentDiv.appendChild(userNameElement);
      postContentDiv.appendChild(postContentTextarea);

      // Adiciona a div de conteúdo ao contêiner da postagem
      newPostContainer.appendChild(postContentDiv);

      const publishButton = document.createElement('button');
      publishButton.innerHTML = `<img src=''>`;
      publishButton.id = 'publish-icon';

      const contentBox = document.createElement('div');
      contentBox.className = 'content-box';

      contentBox.appendChild(postContentTextarea);
      contentBox.appendChild(publishButton);
      newPostContainer.appendChild(contentBox);

      publishButton.addEventListener('click', async () => {
        try {
          const contentPost = postContentTextarea.value;

          if (!contentPost) {
            alert('Preencha todos os campos.');
            return;
          }

          const newPostData = {
            userName,
            idUser,
            post: contentPost,
            timestamp: new Date(),
          };

          await postUser(
            newPostData.post,
            newPostData.userName,
            newPostData.idUser,
          );

          renderPost(newPostData);
          postContentTextarea.value = '';

          // newPostContainer.appendChild(timestampElement);

          timelinePost.insertBefore(newPostContainer, timelinePost.firstChild);
        } catch (error) {
          console.error('Erro ao criar postagem', error);
          alert('Erro ao criar postagem. Tente novamente mais tarde.');
        }
      });

      newPostContainerLocation.appendChild(newPostContainer);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderPostsIfAuthenticated();
  });

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const username = user.displayName;
      const userId = user.uid;

      try {
        const posts = await postViewer();
        renderPost(posts);
      } catch (error) {
        console.error('Erro ao buscar posts', error);
      }
      renderPostsIfAuthenticated(username, userId);
    }
  });

  // Função para fazer logout
  function logout() {
    console.log('Botão de sair clicado no menu desktop');

    signOut(auth)
      .then(() => {
        window.location = '/';
      })
      .catch((error) => {
        console.error('Erro ao fazer logout', error);
        alert('Erro ao fazer logout. Tente novamente mais tarde');
      });
  }

  const logoutButton = container.querySelector('.btn-logout');
  logoutButton.addEventListener('click', logout);

  const logoutButtonDesktop = container.querySelector('.btn-logout-desktop');
  logoutButtonDesktop.addEventListener('click', logout);

  return container;
};

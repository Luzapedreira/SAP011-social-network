import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
//import  from '../../firebase/firebase-config.js';
import { firebaseConfig } from '../../firebase/firebase-config.js';
export default () => {
  // import 'firebase/auth'; // Importe a parte de autenticação do Firebase

  // Função para fazer login com o Google
  function LoginGoogle() {
    const provider = new GoogleAuthProvider(firebaseConfig);
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Sucesso - usuário logado com o Google
        const user = result.user;
        // eslint-disable-next-line no-console
        console.log('Usuário logado com o Google:', user);
      })
      .catch((error) => {
        // Erro durante o login com o Google
        // eslint-disable-next-line no-console
        console.error('Erro durante o login com o Google:', error);
      });
  }

  // Adicione o evento de clique ao botão "google" para fazer login com o Google
  const googleButton = document.querySelector('#google');
  googleButton.addEventListener('click', () => {
    LoginGoogle();
  });
};
// Resto do seu código HTML e lógica permanece inalterado...

const container = document.createElement('main');
container.classList.add('main');
container.innerHTML = `
    <section" class="about-login">
     <p id='about-login'> Compartilhe aqui a sua rotina e inspire-se com os hábitos saudáveis de outras pessoas </p>
    </section>
    <section class="page-login">
      <h2>Sign in</h2>
    </section>
    <form class='input-group'>
      <div class='forms'>
        <input type='email' class='...' id='email' required></input>
        <span class="highlight"></span>
        <span class="bar"></span>
        <label for='email' class='input-group__label'>E-mail address</label>
      </div>
      <div class='forms'>
        <input type='password' class='input-login' id='password' required></input>
        <span class="highlight"></span>
        <span class="bar"></span>
        <label for='password' class='input-group__label'>Password</label>
      </div>
    </form>
    <button class='sign-in-button' id='sign-in'>Sign In</button>
    <button id='google' class='google-login'>
      <p>Continue com o Google</p>
    </button>

    `;
  return container;
};


// Adicione o container à página
document.body.appendChild(container);

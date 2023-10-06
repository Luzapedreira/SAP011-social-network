import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { firebaseConfig } from '../../firebase/firebase-config.js';

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
// Resto do seu código HTML e lógica permanece inalterado...

export default () => {
  const container = document.createElement('main');
  container.classList.add('main');
  container.innerHTML = `
    <section" class="about-login">
     <p id='about-login'>Enter the world of health and well-being! Share your workout routines, healthy recipes and connect with enthusiasts like you. Together, we inspire and motivate each other to achieve our goals.</p>
    </section>
    <section class="page-login">
      <h2>Sign in</h2>
      <p class='page-login'>Connect and be inspired by others like you.</p>
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
        <a href='#forgot' id='recoverPasswordButton'>Forgot your password?</a>
      </div>
    </form>
    <section id="loginGoogle">
      <button class = "button-login-google" id="google"> Entre com Google</button>
      <img id= "google-icon" alt="google-icon">
    </section>          
    <section id="register">
      <p>Ainda não tem uma conta?</p>
      <button class='register' id='register'>New Account</button>
    </section>
    <button class='sign-in-button' id='sign-in'>Sign In</button>
    <button id='google' class='google-login'>
      <p>Continue com o Google</p>
    </button> `;
  // Adicione o evento de clique ao botão "google" para fazer login com o Google
  const googleButton = container.querySelector('#google');
  googleButton.addEventListener('click', () => {
    LoginGoogle();
  });
  return container;
};

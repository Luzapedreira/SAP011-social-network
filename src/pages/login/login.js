import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { firebaseConfig } from '../../firebase/firebase-config.js';

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
        <a href='#forgot' id='btn-recover-password'>Forgot your password?</a>
      </div>
    </form>
    <button class='sign-in-button' id='sign-in'>Sign In</button>
    <section id="loginGoogle">
      <button class = "button-login-google" id="google"> Entre com Google</button>
      <img id= "google-icon" alt="google-icon">
    </section>          
    <section id="register">
      <p>Ainda não tem uma conta?</p>
      <button class='sign-up-button' id='register'>Register</button>
    </section>`;
  // Adicione o evento de clique ao botão "google" para fazer login com o Google
  const googleButton = container.querySelector('#google');
  googleButton.addEventListener('click', () => {
    LoginGoogle();
  });
  return container;
};

// Função para fazer login com o Google
function LoginGoogle() {
  const provider = new GoogleAuthProvider(firebaseConfig);
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log('Usuário logado com o Google:', user);
    })
    .catch((error) => {
      console.error('Erro durante o login com o Google:', error);
    });
}

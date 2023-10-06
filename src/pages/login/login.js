import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// import  from '../../firebase/firebase-config.js';
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

const container = document.createElement('main');
container.classList.add('main');
container.innerHTML = `
  
  <section class="about-login">
    <p id='about-login'> Compartilhe aqui a sua rotina e inspire-se com os hábitos saudáveis de outras pessoas </p>
  </section>
  <section class="page-login">
    <h2>Sign in</h2>
  </section>
  <form id="login-form">
  <input type="email" id="email" placeholder="E-mail" required>
  <input type="password" id="password" placeholder="Senha" required>
  <button type="submit">Login</button>
</form>
<button id="google-login">Login com o Google</button>
  <button id='google' class='google-login'>
    <p>Continue com o Google</p>
  </button>
`;
// Adicione o evento de clique ao botão "google" para fazer login com o Google
const googleButton = container.querySelector('#google');
googleButton.addEventListener('click', () => {
  LoginGoogle();
});

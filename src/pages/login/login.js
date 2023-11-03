import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { firebaseConfig } from '../../firebase/firebase-config.js';
import { login } from '../../firebase/firebase-auth.js';

export default () => {
  const container = document.createElement('main');
  container.classList.add('main');
  container.innerHTML = `
  
  <figure class="logo"> <img src="https://i.pinimg.com/750x/f8/c0/ab/f8c0ab491204f96cde244db38d199540.jpg" alt="logo-fithub" /> </figure>
  <section class="about-login">
     <p id='about-login'>Enter the world of health and well-being! Share your workout routines, healthy recipes and connect with enthusiasts like you. Together, we inspire and motivate each other to achieve our goals.</p>
    </section>
    <section class="page-login">
      <h4 class='page-login'>Welcome to FitHub Woman.<br> Sign in to access:</h4>
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
        <!-- <a href='#forgot' id='btn-recover-password'>Forgot your password?</a> -->
      </div>
    </form>
    <button type='button' class='sign-in-button' id='sign-in'>Sign In</button>
    <br>

    <section id='loginGoogle'>
      <button class = 'button-login-google' id='google' <img src='https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png' alt='google-icon'> Continue with Google <img src='https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png'></button>
    </section>    
          
    <section id='register'><br>
        <h4>Don´t have an account?</h4>
        <br>
        <button class='sign-up-button' id='register'>Register</button>
      </section>
      `;
  const goRegister = container.querySelector('#register');
  goRegister.addEventListener('click', () => {
    window.location.hash = '#register';
  });
  // Função para fazer login com o Google
  function loginGoogle() {
    const provider = new GoogleAuthProvider(firebaseConfig);
    const auth = getAuth();

    return signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log('Usuário logado com o Google:', user);
      })
      .catch((error) => {
        console.error('Erro durante o login com o Google:', error);
      });
  }

  const googleButton = container.querySelector('#google');
  googleButton.addEventListener('click', () => {
    loginGoogle().then(() => {
      window.location.hash = '#timeline';
    });
    // window.location.hash = '#timeline';
  });

  const enterLogin = container.querySelector('#sign-in'); // Seleciona o botão de login.
  enterLogin.addEventListener('click', () => {
    const email = container.querySelector('#email'); // Captura o campo de e-mail.
    const password = container.querySelector('#password');
    window.location.hash = '#timeline';
    // window.location.hash = "#timeline"; // Vai para a âncora "#timeline" em caso de sucesso.

    login(email.value, password.value)
      .then(() => {
        window.location.hash = '#timeline'; // Redireciona para a âncora "#timeline" em caso de sucesso.
      })
      .catch((error) => {
        if (error.message === 'Firebase: Error (auth/user-not-found).') {
          alert('User not found'); // Exibe um alerta se o usuário não for encontrado.
        } else if (error.message === 'Firebase: Error (auth/wrong-password)') {
          alert('Password not found'); // Exibe um alerta se a senha estiver incorreta.
        }
        console.error(error);
      });
  });

  return container;
};

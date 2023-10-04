export default () => {
  const container = document.createElement('main');
  container.classList.add('main');
  container.innerHTML = `
    <article class='login-page'>
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
      <div class='register-input'>
        <label for='register-input' class='register-group__label'>Ainda não tem uma conta?</label>
        <button class='sign-up-button' id='sign-up-button'>Sign up</button>
      </div>
    </article>

    `;

document.body.appendChild(container)
};

// Função ir para a página de registro
function goRegisterPage() {
  window.location.href = 'pages/register/register.js';
}

document.getElementById('sign-up-button').addEventListener('click', goRegisterPage);

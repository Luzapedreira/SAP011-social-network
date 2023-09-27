export default () => {
  const container = document.createElement('div');
  container.classList.add('container');

  container.innerHTML = `
  <section class="about-register>
    <p id='about-regiser'> Cadastre-se, compartilhe a sua rotina e inspire-se com os hábitos saudáveis de outras pessoas </p>
  </section>
  <section class="page-register">
      <h2>Register</h2>
  </section>
  <form class='input-register' id='input-register'>
    <input type='text' id='name' class='input-register' placeholder='Nome Completo'></input>
    <input type='text' id='nickname' class='input-register' placeholder='Como gosta de ser chamade'></input>
    <input type='email' id='email' class='input-register' placeholder='E-mail'></input>
    <p class='smallContent'>Enter at least 8 characters</p>
    <input type='password' id='password' class='input-register' placeholder='Password'></input>
    <input id='confirm-password' type='password' class='input-register' placeholder='Confirme sua senha'></input>
    <button id='sign-up-button' class='sign-up-button'>Sign Up</button>
  </form>
  <button id='google' class='google-login'>
    <p>Continue com o Google</p>
  </button>
  `;
  return container;
};

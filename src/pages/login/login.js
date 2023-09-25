export default () => {
  const container = document.createElement('div');
  container.classList.add('container');

  container.innerHTML = `
    <section class="about-login">
      <p id='about-login'> Compartilhe aqui a sua rotina e inspire-se com os hábitos saudáveis de outras pessoas </p>
    </section>
    <section class="page-login">
      <h2>Sign in</h2>
    </section>
    <form class='input-login'>
      <input type='email' class='input-login' placeholder='E-mail' id='email' required></input>
      <input type='password' class='input-login'placeholder='Password' id='password' required></input>
      <button class='sign-in-button' id='sign-in'>Sign In</button>
    </form>
    <button id='google' class='google-login'>
      <p>Continue com o Google</p>
    </button>

    `;
  return container;
};

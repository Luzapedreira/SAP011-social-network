export default () => {
  const container = document.createElement('div');
  container.classList.add('container');

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

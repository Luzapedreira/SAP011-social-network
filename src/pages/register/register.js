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
    <div class='forms'>
      <span class='highlight'></span>
      <span class='bar'></span>
      <input type='text' id='name' class='input-register' required></input>
      <label for='name' class='input-group__label'>Full name</label>
    </div>
    <div class='forms'>
      <span class='highlight'></span>
      <span class="bar"></span>
      <input type='text' id='nickname' class='input-register' required></input>
      <label for='nickname' class='input-group__label'>Best name</label>
    </div>
    <div class='forms'>
      <span class='highlight'></span>
      <span class='bar'></span> 
      <input type='email' id='email' class='input-register' required></input>
      <label for='email' class='input-group__label'>E-mail</label>
    </div>
    <div class='forms'>
      <span class='highlight'></span>
      <span class='bar'></span>   
      <input type='password' id='password' class='input-register' required></input>
      <label for='password' class='input-group__label'>Password</label>
    </div>
    <div class='forms'>
      <span class='highlight'></span>
      <span class='bar'></span>  
      <input id='confirm-password' type='password' class='input-register' required></input>
      <label for='confirm-password' class='input-group__label'>Confirme password</label>
    </div>
    <button id='sign-up-button' class='sign-up-button'>Sign Up</button>
  </form>
  <button id='google' class='google-login'>
    <p>Continue com o Google</p>
  </button>
  <div class='login-input>
      <label for='login-input' class='input-group__label'>Já tem uma conta?</label>
      <button class='sign-in-button' id='login'>Login</button>
    </div>
  `;
  return container;
};

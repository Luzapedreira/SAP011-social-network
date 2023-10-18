import register from './../src/pages/register/register.js';
import login from './../src/pages/login/login.js';
import timeline from './../src/pages/timeline/timeline.js';

describe('testando spa da página principal', () => {
  document.body.innerHTML =
    ` <main id="teste"></main> `
  it('deve exibir o formulário de login ao carregar a página', () => {
    expect(typeof pages).toBe('function');
  })
}) 
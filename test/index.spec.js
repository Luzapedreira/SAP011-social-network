// importamos la funcion que vamos a testear
// import { myFunction } from '../src/lib/index';

// describe('myFunction', () => {
//   it('debería ser una función', () => {
//     expect(typeof myFunction).toBe('function');
//   });
// });

// Teste Login de Usuário com Google
import { googleLogin } from '../src/firebase/firebase-auth';

describe('googleLogin', () => {
  it('Esperado que o usuário faça login com conta google', () => {
    // eslint-disable-next-line no-undef
    const mockProvider = new GoogleAuthProvider();
    // eslint-disable-next-line no-undef
    signInWithPopup.mockResolvedValue();
    googleLogin();
    // eslint-disable-next-line no-undef
    expect(signInWithPopup).toHaveBeenCalledWith({ currentUser: { uid: 'test' } }, mockProvider);
  });
});

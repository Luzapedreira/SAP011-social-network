import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { firebaseConfig } from '../../src/firebase/firebase-config.js';
import { login } from '../../src/firebase/firebase-auth.js';

describe('testando as funções do login', () => {
    it('deve logar com sucesso quando usuário e senha estiverem corretos', () =>{
        
    })
})

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

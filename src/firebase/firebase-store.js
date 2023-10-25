import { collection, query, onSnapshot } from 'firebase/firestore';
import { db } from './firebase-config.js';

export function lerPosts() {
  const q = query(collection(db, 'posts'));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const posts = [];
    querySnapshot.forEach((doc) => {
      posts.push(doc.data().text);
    });
    console.log('posts: ', posts.join(', '));
  });
}

// const db = getFirestore(app);

// export const users = async (name) => addDoc(collection(db, 'infos-add'), {
//   nome: name,
// });

// export const postUser = async (postagem, nickname, id) => addDoc(collection(db, 'posts'), {
//   userName: nickname,
//   post: postagem,
//   idUser: id,
//   likes: 0,
//   likeUsers: [],
//   timestamp: new Date(),
// });

// export const postViewer = async () => {
//   const messages = [];
//   const queryOrder = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
//   const querySnapshot = await getDocs(queryOrder);
//   querySnapshot.forEach((item) => {
//     const data = item.data();
//     data.id = item.id;
//     console.log(data);
//     messages.push(data);
//   });
//   return messages;
// };

// export const postEdit = (postId, textArea) => {
//   updateDoc(doc(db, 'posts', postId), {
//     post: textArea,
//   });
// };

// export const awesome = async (postId, usernameUser) => updateDoc(doc(db, 'posts', postId), {
//   likeUsers: arrayUnion(usernameUser),
// });

// export const noAwesome = async (postId, usernameUser) => updateDoc(doc(db, 'posts', postId), {
//   likeUsers: arrayRemove(usernameUser),
// });

// export const deletePost = async (postId) => {
//   try {
//     await deleteDoc(doc(db, 'posts', postId));
//     console.log('Post excluído com sucesso');
//   } catch (error) {
//     console.error('Erro ao excluir o post:', error);
//     throw error;
//   }
// };

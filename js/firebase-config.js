// Configuração do app Web do Firebase da OS 061 - SOSSEGO (projeto agenda-061-sossego).
// Estes valores NÃO são secretos; a segurança vem das Regras do Firestore e do Authentication.
export const firebaseConfig = {
  apiKey: "AIzaSyAV4LH5lSz7JSQF_-C3MQ1qYNTPcua7VEY",
  authDomain: "agenda-061-sossego.firebaseapp.com",
  projectId: "agenda-061-sossego",
  storageBucket: "agenda-061-sossego.firebasestorage.app",
  messagingSenderId: "548813849896",
  appId: "1:548813849896:web:65e36e0a10a95208333c1d"
};
// true enquanto o config acima ainda não foi preenchido
export const semConfig = Object.values(firebaseConfig).some(v => String(v).includes('COLE_AQUI'));

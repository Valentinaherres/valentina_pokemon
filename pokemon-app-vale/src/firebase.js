// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_DOMINIO_AUTH",
  projectId: "TU_ID_PROYECTO",
  storageBucket: "TU_BUCKET_ALMACENAMIENTO",
  messagingSenderId: "TU_ID_REMISOR_MENSAJES",
  appId: "TU_ID_APP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
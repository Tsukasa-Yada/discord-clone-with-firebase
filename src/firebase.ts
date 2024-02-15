import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCfzLeugUukva0W0Tq-KtpwEHYRGWUoqY0",
  authDomain: "discord-clone-with-firebase.firebaseapp.com",
  projectId: "discord-clone-with-firebase",
  storageBucket: "discord-clone-with-firebase.appspot.com",
  messagingSenderId: "822691265626",
  appId: "1:822691265626:web:df9a4b66acd84f590f2c63"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
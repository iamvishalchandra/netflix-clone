import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA9hqOIDR-p1JCGU6rOdreHBVIY0BDKYHQ",
  authDomain: "netflixclonebyvishalchandra.firebaseapp.com",
  projectId: "netflixclonebyvishalchandra",
  storageBucket: "netflixclonebyvishalchandra.appspot.com",
  messagingSenderId: "776343132682",
  appId: "1:776343132682:web:4c42ce9fb3d1c3bb729df3",
};

const firebasApp = firebase.initializeApp(firebaseConfig);
const db = firebasApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;

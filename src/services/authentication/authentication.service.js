import * as firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAAUZ0-h_Kvb-T-VaPG2gDwarLdb6nhqTo",
  authDomain: "meals-to-go-f1537.firebaseapp.com",
  projectId: "meals-to-go-f1537",
  storageBucket: "meals-to-go-f1537.appspot.com",
  messagingSenderId: "140085611465",
  appId: "1:140085611465:web:b040ab438adf6641a4f618",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;

export const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

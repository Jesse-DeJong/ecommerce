import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyDug49_yitSAwwcvRiupRJSla9UEmk3YGE",
  authDomain: "latvia-ecommerce.firebaseapp.com",
  projectId: "latvia-ecommerce",
  storageBucket: "latvia-ecommerce.appspot.com",
  messagingSenderId: "652790738938",
  appId: "1:652790738938:web:10e4bf38b6f746dc807e43"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export default firestore;
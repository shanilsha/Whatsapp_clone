import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDm1llByzHK1dGUONyK23D8IqRNGWCbot4",
    authDomain: "whatsapp-clone-b7d00.firebaseapp.com",
    projectId: "whatsapp-clone-b7d00",
    storageBucket: "whatsapp-clone-b7d00.appspot.com",
    messagingSenderId: "94386313925",
    appId: "1:94386313925:web:7dfdaf6dc44a55baf0eeac"
  };

  const app = !firebase.apps.length
   ? firebase.initializeApp(firebaseConfig)
   : firebase.app();

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {db,auth,provider}
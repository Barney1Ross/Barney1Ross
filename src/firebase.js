import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAvCfuoVVmPEPbAT6kQ23W0p2VMnK0ea5o",
    authDomain: "facebook-clone-e4fdb.firebaseapp.com",
    projectId: "facebook-clone-e4fdb",
    storageBucket: "facebook-clone-e4fdb.appspot.com",
    messagingSenderId: "1064552616397",
    appId: "1:1064552616397:web:33d7e05d85b15637bf3484"
  });

  const auth = firebase.auth();
  const provider = new firebase.auth.FacebookAuthProvider();

  const db= firebaseConfig.firestore();
  const storage = firebase.storage();

  export { auth, provider, db, storage}
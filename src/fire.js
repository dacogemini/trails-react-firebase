
import firebase from 'firebase'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB-fcto1Ma9v9gGgLgefE6puNQpNtGrihE",
    authDomain: "greenboot-hiking.firebaseapp.com",
    databaseURL: "https://greenboot-hiking.firebaseio.com",
    projectId: "greenboot-hiking",
    storageBucket: "greenboot-hiking.appspot.com",
    messagingSenderId: "626626805350"
  };
  firebase.initializeApp(config);

  export default firebase;

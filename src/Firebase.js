import firebase from 'firebase/app' ; 
import 'firebase/database' ;  
import 'firebase/auth' ;  

const config = {
    apiKey: "AIzaSyCPKw_qdLWQES9nMgXKsn6KRr0njQGYK9M",
    authDomain: "react-helloworld-177c4.firebaseapp.com",
    databaseURL: "https://react-helloworld-177c4.firebaseio.com",
    projectId: "react-helloworld-177c4",
    storageBucket: "react-helloworld-177c4.appspot.com",
    messagingSenderId: "729630627253"
  };
  firebase.initializeApp(config);

  export const provider = new firebase.auth.GoogleAuthProvider() ; 
  export const auth = new firebase.auth() ; 

  export default firebase ; 
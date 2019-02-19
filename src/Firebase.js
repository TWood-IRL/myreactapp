import firebase from 'firebase/app' ; 
import 'firebase/database' ;  
import 'firebase/auth' ;  

const config = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId
  };
  firebase.initializeApp(config);

  export const provider = new firebase.auth.GoogleAuthProvider() ; 
  export const auth = new firebase.auth() ; 

  export default firebase ; 
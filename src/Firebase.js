import firebase from 'firebase/app' ; 
import 'firebase/database' ;  
import 'firebase/auth' ;  

const config = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    databaseURL: process.env.REACT_APP_databaseURL,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId
  };
  firebase.initializeApp(config);

  export const provider = new firebase.auth.GoogleAuthProvider() ; 
  export const auth = new firebase.auth() ; 

  export default firebase ; 
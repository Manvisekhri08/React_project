import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider  } from 'firebase/auth'

const firebaseConfig = {

    apiKey: "AIzaSyB7q7IKD5WrgWcOukySdmguMlwVB-WksP0",
  
    authDomain: "the-black-swan-4c238.firebaseapp.com",
  
    projectId: "the-black-swan-4c238",
  
    storageBucket: "the-black-swan-4c238.appspot.com",
  
    messagingSenderId: "646824234926",
  
    appId: "1:646824234926:web:5f0734d0c653c6ac13023f"
  
  };

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
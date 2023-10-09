import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc  } from 'firebase/firestore';


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
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot= await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch(error) {
            console.log("error creating user", error.message);
        }
    }
    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async(email, password) => {
    if(!email || !password) return;
    return await  createUserWithEmailAndPassword(auth, email, password);
}
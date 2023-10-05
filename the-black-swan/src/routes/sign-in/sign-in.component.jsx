import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from '../../utils/firebase/firebase.utils';
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
const SignIn = () => {

    useEffect(() => {
        (async () => {
          const response = await getRedirectResult(auth);
          if (response) {
            const userDocRef = await createUserDocumentFromAuth(response.user);
          }
        })();
      }, []);
    const logGoogleUser = async() => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };
    return (
        <div>
            <h1>Hi I'm Sign In</h1>
            <button onClick={logGoogleUser}>Sign In With Google Pop Up</button>
            <button onClick={signInWithGoogleRedirect}>Sign In With Google Redirect</button>
        </div>
    )
}

export default SignIn;
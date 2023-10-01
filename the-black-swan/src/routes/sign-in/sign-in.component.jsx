import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils'
const SignIn = () => {
    const logGoogleUser = async() => {
        const response = await signInWithGooglePopup();
    }
    return (
        <div>
            <h1>Hi I'm Sign In</h1>
            <button onClick={logGoogleUser}>Sign In With Google Pop Up</button>
        </div>
    )
}

export default SignIn;
import { useState } from "react";
import { createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from '../../components/form-input/form-input.component';
import './sign-in-form.styles.scss';
import Button from "../button/button.component";

const defaultFormField = {
    email : '',
    password : ''
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormField);
    const { email, password} = formFields;


    const resetFormField = () => {
        setFormFields(defaultFormField);
    }

    const signInWithGoogle = async() => {
         await signInWithGooglePopup();
        
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
       
        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormField();

        } catch(error) {
            if(error.code === 'auth/invalid-login-credentials') {
                alert("wrong credentials")
            }
           console.log(error);
        }
    };

    const handleChange = (event) => {
        const {name , value } = event.target;
        setFormFields({...formFields, [name]: value});
    };
    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label = "Email" type="email" required onChange={handleChange} name="email" value={email}/>

                <FormInput label = "Password" type="password" required onChange={handleChange} name="password" value={password}/>

                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type = 'button'  buttonType="google" onClick={signInWithGoogle}>Google sign in</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;
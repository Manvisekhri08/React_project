import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const defaultFormField = {
    displayName : '',
    email : '',
    password : '',
    confirmPassword : ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormField);
    const { displayName, email, password, confirmPassword } = formFields;
    console.log(formFields);

    const resetFormFeild = () => {
        setFormFields(defaultFormField);
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            alert("Passwords does not match!");
            return;
        }
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {displayName});
            resetFormFeild();

        } catch(error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('email already in use');
            }
            console.error('error',error);
        }
    };

    const handleChange = (event) => {
        const {name , value } = event.target;
        setFormFields({...formFields, [name]: value});
    };
    return (
        <div >
            <h1>Sign Up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input type="text" required onChange={handleChange} name="displayName" value={displayName}/>

                <label>Email</label>
                <input type="email" required onChange={handleChange} name="email" value={email}/>

                <label>Password</label>
                <input type="password" required onChange={handleChange} name="password" value={password}/>

                <label>Confirm Password</label>
                <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;
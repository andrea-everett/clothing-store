import { useState } from 'react';

import FormInput from '../form-input/form-input.component';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup  } from '../../utils/firebase.utils';

import './sign-in-form.styles.scss';

const  defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {  email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

         try {
             const response = await signInAuthWithEmailAndPassword(email, password);
             console.log(response);
            resetFormFields();
         } catch (error) {
             switch(error.code) {
                 case 'auth/wrong-password':
                     alert('incorrect password for email');
                     break
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default:
                    console.log(error);
             }}
        //   if (error.code === 'auth/wrong-password') {
        //          alert('incorrect password for email');
        //      }
             console.log(error);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };
        

    return (
        <div className='sign-up-container'>
            <h2>Already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <label> Display Name</label>

            <FormInput 
                    label= "Email"
                    type="email" 
                    required onChange={handleChange}  
                    name="email" 
                    value={ email}/>


            <FormInput type="password" 
                    required onChange={handleChange} 
                    name="confirmPassword"
                    value={ confirmPassword}/>

                <button type="submit">Sign In</button>
                <button buttonType='button ' onClick={signInWithGoogle}>Google sign in</button>
            </form>
        </div>
    );
};

export default SignInForm;



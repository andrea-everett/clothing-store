import { signInWithGooglePopup , 
    createUserDocumentFromAuth} 
from "../../utils/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = createUserDocumentFromAuth(user);
    };

    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                    Sign In With Google Pop up
            </button>
        </div>
    );
};

export default SignIn;
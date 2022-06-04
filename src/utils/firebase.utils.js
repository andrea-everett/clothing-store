import {  initializeApp } from 'firebase/app';
import { 
    getAuth , 
    signInWithRedirect, 
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signOut} 
     from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBIdOGcHovY1ygYKJ9z6Bp2JC3-Cc4DIX4",
    authDomain: "clothing-store-3d865.firebaseapp.com",
    projectId: "clothing-store-3d865",
    storageBucket: "clothing-store-3d865.appspot.com",
    messagingSenderId: "765669141998",
    appId: "1:765669141998:web:d245f9b6a81c652b2fb2ff",
    measurementId: "G-LJ0GEXV0KV"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
      prompt: "select_account"
  });


  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

  export const db = getFirestore();

  export  const createUserDocumentFromAuth = async  (
      userAuth,
      additionalInformation = {}
  ) => {
      if (!userAuth) return;
      
        const userDocRef = doc(db, 'users',  userAuth.uid);

        const userSnapshot = await getDoc(userDocRef);
  

    if(!userSnapshot.exists()) {
        const { displayName, email } =userAuth;
        const createdAt = new Date();

        try {
            await setDoc (userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }}

    return userDocRef;
    };

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

   return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = () => signOut(auth);
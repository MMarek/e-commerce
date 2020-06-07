import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAZLU4C7yv54mXcDrgIy-l6_RZryRbsp9g",
    authDomain: "first-e-commerce.firebaseapp.com",
    databaseURL: "https://first-e-commerce.firebaseio.com",
    projectId: "first-e-commerce",
    storageBucket: "first-e-commerce.appspot.com",
    messagingSenderId: "1039724946207",
    appId: "1:1039724946207:web:23b7be3fd7210257f6c62a"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC7N0q9q9uZIjMsTZDuIJCTOJObAui8IBQ",
  authDomain: "sansa-clothing.firebaseapp.com",
  databaseURL: "https://sansa-clothing.firebaseio.com",
  projectId: "sansa-clothing",
  storageBucket: "",
  messagingSenderId: "845783033299",
  appId: "1:845783033299:web:b3e12be2876cb658"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (authUser, additionalData) => {
  if (!authUser) return;

  const userRef = firestore.doc(`users/${authUser.uid}`);

  const snapshot = await userRef.get();
  console.log(snapshot);

  if (!snapshot.exists) {
    const { displayName, email } = authUser;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
      console.log("Success");
    } catch (err) {
      console.error("Errorr creating user", err.message);
    }
  }

  return userRef;
};

export default firebase;

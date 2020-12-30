import firebase from "firebase/app";
import "firebase/auth";

const config =  {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export function initFirebase(): void {
  if (!firebase.apps.length) {
    firebase.initializeApp(config)
  }
}

initFirebase();

export async function login(): Promise<void> {
  const provider = new firebase.auth.TwitterAuthProvider();
  const result = await firebase.auth().signInWithPopup(provider);
}


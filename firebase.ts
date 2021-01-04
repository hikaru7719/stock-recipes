import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import "reflect-metadata";
import { Recipe } from "./model";

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export function initFirebase(): void {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
}

initFirebase();

export async function login(): Promise<void> {
  const provider = new firebase.auth.TwitterAuthProvider();
  await firebase.auth().signInWithPopup(provider);
}

export async function logout(): Promise<void> {
  await firebase.auth().signOut();
}

export async function upload(
  uid: string,
  file: File,
  fileName: string
): Promise<string> {
  const array = fileName.split(".");
  const path = `${uid}/${uuidv4()}${
    array.length > 0 ? "." + array[array.length - 1] : ""
  }`;
  const imageRef = firebase.storage().ref().child(path);
  await imageRef.put(file);
  return path;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function download(path: string): Promise<any> {
  return firebase.storage().ref().child(path).getDownloadURL();
}

export function getCurrentUserUid(): string | null {
  return firebase.auth().currentUser?.uid;
}

export async function createRecipe(uid: string, recipe: Recipe): Promise<void> {
  const result = await firebase
    .firestore()
    .collection(`/users/${uid}/recipes`)
    .withConverter(recipeConverter)
    .add(recipe);
  console.log(result);
}

export async function findRecipes(uid: string): Promise<Array<Recipe>> {
  const list: Array<Recipe> = [];
  const snapshot = await firebase
    .firestore()
    .collection(`/users/${uid}/recipes`)
    .withConverter(recipeConverter)
    .get();
  snapshot.forEach((v) => {
    list.push(v.data());
  })
  return list;
}

const recipeConverter = {
  toFirestore(recipe: Recipe): firebase.firestore.DocumentData {
    return recipe.toJSON();
  },
  fromFirestore(
    snapshot: firebase.firestore.QueryDocumentSnapshot,
    options: firebase.firestore.SnapshotOptions
  ): Recipe {
    const recipe = Recipe.of(snapshot.data(options));
    recipe.id = snapshot.id;
    return recipe;
  },
};

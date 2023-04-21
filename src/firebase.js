import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCY5IlYGVPk_P1RB_DKtzdFER8kIviwZMw",
  authDomain: "chat-1c27a.firebaseapp.com",
  projectId: "chat-1c27a",
  storageBucket: "chat-1c27a.appspot.com",
  messagingSenderId: "1003396516125",
  appId: "1:1003396516125:web:882568782a48448dc379f4"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyCn30PXI-ScXt3epCE6d7TnQIZh6EkqrtQ",
  authDomain: "agrupa-unimet.firebaseapp.com",
  projectId: "agrupa-unimet",
  storageBucket: "agrupa-unimet.appspot.com",
  messagingSenderId: "1086619926283",
  appId: "1:1086619926283:web:fa22edf350020d26462c0e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
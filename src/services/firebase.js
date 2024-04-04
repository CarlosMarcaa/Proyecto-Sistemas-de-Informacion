import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyCn30PXI-ScXt3epCE6d7TnQIZh6EkqrtQ",
  authDomain: "agrupa-unimet.firebaseapp.com",
  projectId: "agrupa-unimet",
  storageBucket: "agrupa-unimet.appspot.com",
  messagingSenderId: "1086619926283",
  appId: "1:1086619926283:web:fa22edf350020d26462c0e"
};

// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// export const auth = getAuth(app);

class Firebase {
  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.db = getFirestore(this.app);
    this.auth = getAuth(this.app);
  }
  login(email, password) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  async register(name, lastname, email, password) {
    await createUserWithEmailAndPassword(this.auth, email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name,
      displayLastname: lastname,
      photoURL: "https://i.pravatar.cc/150?img=1"
    })
  }
}

export default new Firebase();
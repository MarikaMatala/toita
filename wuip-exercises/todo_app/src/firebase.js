import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvcyAuuGSFITeQ1RglyUiVGsVspMcnGCg",
    authDomain: "todo-crud-13c8b.firebaseapp.com",
    projectId: "todo-crud-13c8b",
    storageBucket: "todo-crud-13c8b.appspot.com",
    messagingSenderId: "822014918971",
    appId: "1:822014918971:web:2042a861f4df9cac63b71e"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

export { db };
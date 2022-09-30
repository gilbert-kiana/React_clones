import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBvF00Q5g3WDvhQ8W0Eb99NVHUCug7sCPQ",
  authDomain: "fir-connection-8d92b.firebaseapp.com",
  projectId: "fir-connection-8d92b",
  storageBucket: "fir-connection-8d92b.appspot.com",
  messagingSenderId: "307550527183",
  appId: "1:307550527183:web:b094f81ce9cd04ec8121ba",
  measurementId: "G-6T9E2X65C5",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyDmi4F4IZ3Ac1N7RatJxD6Dp1l1iJX7hOw",
  authDomain: "callsystem-7603e.firebaseapp.com",
  projectId: "callsystem-7603e",
  storageBucket: "callsystem-7603e.firebasestorage.app",
  messagingSenderId: "208387089490",
  appId: "1:208387089490:web:10fab9b1486c6678702b8b",
  measurementId: "G-20P2F64K3X"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };


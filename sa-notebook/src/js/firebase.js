import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQRt4Az9dpajaaQY8FdZJKZsPYSPIUfgo",
  authDomain: "noteballsvuecourse.firebaseapp.com",
  projectId: "noteballsvuecourse",
  storageBucket: "noteballsvuecourse.appspot.com",
  messagingSenderId: "747981756263",
  appId: "1:747981756263:web:6dfce1640b6068da3741c2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

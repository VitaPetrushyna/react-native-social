import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firebase-firestore";
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoa_8s3qC8mL9frc9zSqOYgNbv9GWE6cI",
  authDomain: "rn-project-3a002.firebaseapp.com",
  databaseURL: "https://rn-project-3a002-default-rtdb.firebaseio.com",
  projectId: "rn-project-3a002",
  storageBucket: "rn-project-3a002.appspot.com",
  messagingSenderId: "514774283087",
  appId: "1:514774283087:web:b1a1e78b9828eaa6554b3a",
  measurementId: "G-72J7QS0QNE",
};

// export default app;

export default firebase.initializeApp(firebaseConfig);

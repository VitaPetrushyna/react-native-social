import * as firebase from "firebase";
import "firebase/auth";

// import * as firebase from "firebase/compat/app";
// import "firebase/compat/auth";

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoa_8s3qC8mL9frc9zSqOYgNbv9GWE6cI",
  authDomain: "rn-project-3a002.firebaseapp.com",
  projectId: "rn-project-3a002",
  storageBucket: "rn-project-3a002.appspot.com",
  messagingSenderId: "514774283087",
  appId: "1:514774283087:web:b1a1e78b9828eaa6554b3a",
  measurementId: "G-72J7QS0QNE",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export default app;

export default firebase.initializeApp(firebaseConfig);

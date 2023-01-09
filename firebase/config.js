import * as firebase from "firebase";

import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5yOwCGq1unfidUzpm9JZIgzHopSp_-kk",
  authDomain: "rn-project-52f79.firebaseapp.com",
  projectId: "rn-project-52f79",
  storageBucket: "rn-project-52f79.appspot.com",
  messagingSenderId: "116120277197",
  appId: "1:116120277197:web:d5513d8156ecdf8fd51984",
  measurementId: "G-ZEQJ6CCSVG",
};

// export default app;
firebase.initializeApp(firebaseConfig);

export default firebase;

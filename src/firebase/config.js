import {initializeApp} from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAvDIoLk8YTInVbeKDS1GCX_xgYxEGywyU",
    authDomain: "vue-auth-c4ebc.firebaseapp.com",
    projectId: "vue-auth-c4ebc",
    storageBucket: "vue-auth-c4ebc.appspot.com",
    messagingSenderId: "48392066460",
    appId: "1:48392066460:web:2004992cd382136c212459"
  };

  initializeApp(firebaseConfig);

  const auth = getAuth();

  export {auth}
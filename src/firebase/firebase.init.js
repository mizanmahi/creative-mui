
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBtFX8KofV92-TGEpUTvz_wOmGdgD9YOk",
  authDomain: "creative-mui.firebaseapp.com",
  projectId: "creative-mui",
  storageBucket: "creative-mui.appspot.com",
  messagingSenderId: "916049606198",
  appId: "1:916049606198:web:7fd9d7f0d19dde3a50ca97"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp)

export default firebaseApp;
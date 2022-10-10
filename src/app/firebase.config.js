// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLy_S_Q8qQAujYYmbYNC2qucCqjAUlMnE",
  authDomain: "crmbyoxy.firebaseapp.com",
  databaseURL: "https://crmbyoxy-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "crmbyoxy",
  storageBucket: "crmbyoxy.appspot.com",
  messagingSenderId: "295905211191",
  appId: "1:295905211191:web:a823601eba9a48d296a0b2"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Initialize Cloud Storage and get a reference to the service

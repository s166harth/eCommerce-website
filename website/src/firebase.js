import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth} from "firebase/auth";




const firebaseConfig = {

    apiKey: "AIzaSyAjYSPJ8Rs5c1ERr9MqjwKth_J7m--2eF8",
  
    authDomain: "ecommerce-b83f6.firebaseapp.com",
  
    projectId: "ecommerce-b83f6",
  
    storageBucket: "ecommerce-b83f6.appspot.com",
  
    messagingSenderId: "128855575249",
  
    appId: "1:128855575249:web:dee1c353358bc8c45ad3f0",
  
    measurementId: "G-R80ZLXV44G"
  
  };


  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);

  const auth = getAuth(firebaseApp);

  
  export { db, auth };
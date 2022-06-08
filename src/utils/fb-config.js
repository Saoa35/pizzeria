import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDrKjk0sVZ0xs-ievcuoeeiP7SRBq31FE4",
    authDomain: "pizza-shop-25e11.firebaseapp.com",
    databaseURL: "https://pizza-shop-25e11-default-rtdb.firebaseio.com",
    projectId: "pizza-shop-25e11",
    storageBucket: "pizza-shop-25e11.appspot.com",
    messagingSenderId: "723401930179",
    appId: "1:723401930179:web:fa9f33ddc07bb65da4f976"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  export default firebase;
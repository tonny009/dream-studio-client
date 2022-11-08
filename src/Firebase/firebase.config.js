// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDrgmHOGluWczPnDsB-Wnj6Dr1QDx3ejWY",
    authDomain: "photograpgy-service.firebaseapp.com",
    projectId: "photograpgy-service",
    storageBucket: "photograpgy-service.appspot.com",
    messagingSenderId: "379620006534",
    appId: "1:379620006534:web:c7ad244441f1e693b80f07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
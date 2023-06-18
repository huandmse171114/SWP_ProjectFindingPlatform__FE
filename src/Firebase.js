// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAmCgjnnibkNyfAz2os1Z3IA2HcJAR83J8",
    authDomain: "findhub-media.firebaseapp.com",
    projectId: "findhub-media",
    storageBucket: "findhub-media.appspot.com",
    messagingSenderId: "618982717354",
    appId: "1:618982717354:web:8e96657a1fea6be4289dd3",
    measurementId: "G-50XBWCZ186"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVbgHy-KCMiwbzt_ktBymZpu9qanFsnjs",
  authDomain: "logistics-supply-chain-mgmt.firebaseapp.com",
  projectId: "logistics-supply-chain-mgmt",
  storageBucket: "logistics-supply-chain-mgmt.firebasestorage.app",
  messagingSenderId: "387562901856",
  appId: "1:387562901856:web:5c2888989f01f4c64c4e05",
  measurementId: "G-M8P7CVB3RC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
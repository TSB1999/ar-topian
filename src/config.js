// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"
import "firebase/storage";
// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

var config = {
  apiKey: "AIzaSyDO-cHNkvzEatVsCXt2xV5W-gt2iFwQOQY",
  authDomain: "ar-topian.firebaseapp.com",
  projectId: "ar-topian",
  storageBucket: "ar-topian.appspot.com",
  messagingSenderId: "477206419327",
  appId: "1:477206419327:web:0848db8f6e9a19b685ac4a",
  measurementId: "G-GCTXR057RX",
};
// Initialize Firebase
export const app = firebase.initializeApp(config);

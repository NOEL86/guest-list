import firebase from "firebase";
import "firebase/auth";
import "firebase/analytics";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCWdSs9WXhYaDyJcBvZjlIH1PWME-VpzUU",
  authDomain: "guest-list-4530e.firebaseapp.com",
  databaseURL: "https://guest-list-4530e.firebaseio.com",
  projectId: "guest-list-4530e",
  storageBucket: "guest-list-4530e.appspot.com",
  messagingSenderId: "249794698669",
  appId: "1:249794698669:web:5f79bbc8fbbda1f31fd524",
  measurementId: "G-J111KK5K85"
};
// Initialize Firebase
let fire = firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default fire;

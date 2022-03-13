import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDUq5Qu24cXymB0OH9XEhYS7Kd-q4o_83g",
	authDomain: "linkedin-clone-85413.firebaseapp.com",
	projectId: "linkedin-clone-85413",
	storageBucket: "linkedin-clone-85413.appspot.com",
	messagingSenderId: "74199848243",
	appId: "1:74199848243:web:ae05de0ee136060d3f1a46",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
export default firebase;

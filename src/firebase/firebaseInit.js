import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDHziMyfnnJspNttcM6-qBjK3JVYQYLc_w",
    authDomain: "invoice-vuex-app.firebaseapp.com",
    projectId: "invoice-vuex-app",
    storageBucket: "invoice-vuex-app.appspot.com",
    messagingSenderId: "1086197044461",
    appId: "1:1086197044461:web:f96f4e6507cc234d76a8e4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
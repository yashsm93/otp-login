import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDj9sBVKrekzc_dfSPDkwd6ypuZM_r3muA",
  authDomain: "phone-num-login.firebaseapp.com",
  databaseURL: "https://phone-num-login-default-rtdb.firebaseio.com",
  projectId: "phone-num-login",
  storageBucket: "phone-num-login.appspot.com",
  messagingSenderId: "732981989737",
  appId: "1:732981989737:web:0f6e3defec56407bc52df8",
  measurementId: "G-DKNGP7H4Z7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

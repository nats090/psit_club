// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE9Exyd9kL6PrMjJtmctRlAGl4bMZPIMM",
  authDomain: "login-form-c634d.firebaseapp.com",
  projectId: "login-form-c634d",
  storageBucket: "login-form-c634d.appspot.com",
  messagingSenderId: "777199725956",
  appId: "1:777199725956:web:61d57b9989cf76e108c1d1",
  measurementId: "G-D98JCW15CQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and export it
const auth = getAuth(app);
export { auth };

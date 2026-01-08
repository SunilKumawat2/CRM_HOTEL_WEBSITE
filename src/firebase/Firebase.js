// src/firebase/Firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5e_Xgj6Dlh5Mj1D652uw9B5JInt8cRVg",
  authDomain: "hotel-management-f16be.firebaseapp.com",
  projectId: "hotel-management-f16be",
  storageBucket: "hotel-management-f16be.firebasestorage.app",
  messagingSenderId: "940687694044",
  appId: "1:940687694044:web:c915f7debd114572867c19",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);

// ✅ Optional: Disable reCAPTCHA verification for localhost testing
if (window.location.hostname === "localhost") {
  auth.settings.appVerificationDisabledForTesting = true;
}

export default app;

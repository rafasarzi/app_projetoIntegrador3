import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import {
//   API_KEY,
//   AUTH_DOMAIN,
//   PROJECT_ID,
//   STORAGE_BUCKET,
//   MESSAGING_SENDER_ID,
//   APP_ID,
//   MEASUREMENT_ID,
// } from "react-native-dotenv"


const firebaseConfig = {
  apiKey: "AIzaSyBtHExpj4UkEo_OslNMcEn0FfAnJjV2x9I",
  authDomain: "alura-esporte-f6641.firebaseapp.com",
  projectId: "alura-esporte-f6641",
  storageBucket: "alura-esporte-f6641.appspot.com",
  messagingSenderId: "231746444950",
  appId: "1:231746444950:web:ebeaaffb452ac702f06cb7",
  measurementId: "G-EZEKBNPZGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
})

export { auth }; 
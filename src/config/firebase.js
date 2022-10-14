
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  API_KEY,
  AUTH_DAMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID
} from "@env"

const firebaseConfig = {
  apiKey:API_KEY,
  authDomain:AUTH_DAMAIN,
  projectId:PROJECT_ID,
  storageBucket:STORAGE_BUCKET,
  messagingSenderId:MESSAGING_SENDER_ID,
  appId:APP_ID,
  measurementId:MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
})

export { auth }

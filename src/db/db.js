import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";
import "firebase/auth";

// Initialize Firebase
const app = initializeApp({
  apiKey: "AIzaSyDwPGfLRX4BWVB2A52t3deWJr9Mzy1eETU",
  authDomain: "climatechange-fae57.firebaseapp.com",
  databaseURL: "https://climatechange-fae57-default-rtdb.firebaseio.com",
  projectId: "climatechange-fae57",
  storageBucket: "primary-climatechange",
  messagingSenderId: "1046179322241",
  appId: "1:1046179322241:web:e7ae45ceb15e365419b080",
});

export const db = getFirestore(app);
export const storage = getStorage(app);
export const staticStorage = getStorage(app, "gs://static-climatechange");

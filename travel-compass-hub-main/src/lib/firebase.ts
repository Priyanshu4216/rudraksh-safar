import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyA5uXmLIfttFFzCex89MYOfjiLNhITCEgM",
    authDomain: "rudraksh-safar-notifications.firebaseapp.com",
    projectId: "rudraksh-safar-notifications",
    storageBucket: "rudraksh-safar-notifications.firebasestorage.app",
    messagingSenderId: "381479794792",
    appId: "1:381479794792:web:63f4b264560ed048efa3dd",
    measurementId: "G-BE6Z9T6PC6"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const VAPID_KEY = "BKB9LRJxzklESpVqUe7guQJQrebkKGupeSJ-fXigKDfStnZnkZxzuds2BjwvnK56IQI5U38mcSdXCKORH08Kw4g";

export { app, messaging, getToken, onMessage };

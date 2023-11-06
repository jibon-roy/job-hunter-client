
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const getApp = import.meta.env;

const firebaseConfig = {
    apiKey: getApp.VITE_apiKey,
    authDomain: getApp.VITE_authDomain,
    projectId: getApp.VITE_projectId,
    storageBucket: getApp.VITE_storageBucket,
    messagingSenderId: getApp.VITE_messagingSenderId,
    appId: getApp.VITE_appId,
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); 
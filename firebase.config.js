import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
import Constants from "expo-constants";

// Firebase config
const firebaseConfig = {
  apiKey: Constants.expoConfig.extra.apiKey,
  authDomain: Constants.expoConfig.extra.authDomain,
  projectId: Constants.expoConfig.extra.projectId,
  storageBucket: Constants.expoConfig.extra.storageBucket,
  messagingSenderId: Constants.expoConfig.extra.messagingSenderId,
  appId: Constants.expoConfig.extra.appId,
};

// initialize firebase
const app = initializeApp(firebaseConfig);
export const database = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

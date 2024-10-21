import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importa o AsyncStorage

const firebaseConfig = {
  apiKey: "AIzaSyAC1CwAZzzbhcaphu7BLUo0fSgIpFAkLVg",
  authDomain: "app-financa-b717b.firebaseapp.com",
  databaseURL: "https://app-financa-b717b-default-rtdb.firebaseio.com",
  projectId: "app-financa-b717b",
  storageBucket: "app-financa-b717b.appspot.com",
  messagingSenderId: "502577923686",
  appId: "1:502577923686:web:f79e7f1c13c0d7d7e40fa7"
};

// Inicializa o Firebase com persistência usando o AsyncStorage
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)  // Configura a persistência com AsyncStorage
});

export { auth };

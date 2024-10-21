import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importa o AsyncStorage

const firebaseConfig = {
  //pegar no firebas
};

// Inicializa o Firebase com persistência usando o AsyncStorage
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)  // Configura a persistência com AsyncStorage
});

export { auth };

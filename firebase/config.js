import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDeqCclCUROLp8eEmaywTgFCWc2a1iB0JA",
  authDomain: "web-final-13654.firebaseapp.com",
  databaseURL: "https://web-final-13654-default-rtdb.firebaseio.com",
  projectId: "web-final-13654",
  storageBucket: "web-final-13654.appspot.com",
  messagingSenderId: "693933429473",
  appId: "1:693933429473:web:b62711b314d3d4dd435da0",
  measurementId: "G-WWPRY87QXM"
};

const app = initializeApp(firebaseConfig); // firebase'i çalıştıran fonksiyon
const realDb = getDatabase(app); // veri tabanına verileri çek
const auth = getAuth(app) // kullanıcı işlemlerinde kullanılır
export { realDb, auth } // bu değişkenleri dışarıya çıkarır
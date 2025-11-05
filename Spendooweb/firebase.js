import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDz_ovjG8Y78Y-fN8cxUDb0bVmJuhwDOEY",
  authDomain: "spendoo-888.firebaseapp.com",
  databaseURL: "https://spendoo-888-default-rtdb.firebaseio.com",
  projectId: "spendoo-888",
  storageBucket: "spendoo-888.firebasestorage.app",
  messagingSenderId: "766263715089",
  appId: "1:766263715089:web:7e344163247b98abd818b0",
  measurementId: "G-Z3LTC2QXVW"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

console.log("✅ Firebase Connected:", app.name);

// js/firebase.js

const firebaseConfig = {
  apiKey: "AIzaSyCtToXsyI1gbBn7JytIq1vy8vBR1UgReEQ",
  authDomain: "coin-investment-15e18.firebaseapp.com",
  projectId: "coin-investment-15e18",
  storageBucket: "coin-investment-15e18.firebasestorage.app",
  messagingSenderId: "145147689452",
  appId: "1:145147689452:web:569ab6c1b1e1045659a8c9"
};

// Evita reinicializar Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
window.db = db;
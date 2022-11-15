import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

import API_KEY from "./apikey.js";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "netlify-firebase-61350.firebaseapp.com",
  projectId: "netlify-firebase-61350",
  storageBucket: "netlify-firebase-61350.appspot.com",
  messagingSenderId: "199755872048",
  appId: "1:199755872048:web:882a99a60a1eab5896faf5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let db = getFirestore(app);

const submitBtn = document.getElementById("submit");

async function addDocument_AutoID(input1, input2) {
  var ref = collection(db, "inputs");

  const docRef = await addDoc(ref, {
    input1: input1,
    input2: input2,
  })
    // will need to display message in the DOM
    .then(() => {
      alert("Data added successfully");
    })
    .catch((error) => {
      alert("Unsuccessful operation, error:" + error);
    });
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;

  console.log(input1, input2);

  addDocument_AutoID(input1, input2);
});

console.log(app);

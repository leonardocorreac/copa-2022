  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDdZBalFoAr_-oxDIZm6mOZZYmOmm02bHs",
    authDomain: "copa-2022-c33d2.firebaseapp.com",
    projectId: "copa-2022-c33d2",
    storageBucket: "copa-2022-c33d2.appspot.com",
    messagingSenderId: "1051434582918",
    appId: "1:1051434582918:web:62f68d8661aeddc3fba207"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export default app

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyA-6jKJat2MZMEPzkQfNOxW4hsf3dQ5ESY",
    authDomain: "authentication-app-56e22.firebaseapp.com",
    projectId: "authentication-app-56e22",
    storageBucket: "authentication-app-56e22.appspot.com",
    messagingSenderId: "215289143898",
    appId: "1:215289143898:web:8d3b976c023951bd2e2e63"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)

  let signin = document.querySelector('#signin')

  signin.addEventListener("click",()=>{
  
    const email = document.getElementById('email') 
    const password = document.getElementById('password')
  
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      alert('hi')

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error)
    });
  })
  
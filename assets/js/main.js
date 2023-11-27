
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";


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
  const db = getFirestore(app);

  
  let signup = document.querySelector('#signup')

  signup.addEventListener('click',()=>{
    const getemail = document.querySelector('#email') 
    const getpassword = document.querySelector('#password')
  
    createUserWithEmailAndPassword(auth, getemail.value, getpassword.value)
       .then(async (userCredential) => {
        const user = userCredential.user;
        console.log(user.email)
        alert('Account Created')
        await setDoc(doc(db, "users", user.uid), {
          email: getemail.value,
          password: getpassword.value,
        });
        location.href = './signin.html'
              
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error)
      });
    
  })















































// /*===== LOGIN SHOW and HIDDEN =====*/
// const signUp = document.getElementById('sign-up'),
//     signIn = document.getElementById('sign-in'),
//     loginIn = document.getElementById('login-in'),
//     loginUp = document.getElementById('login-up')


// signUp.addEventListener('click', ()=>{
//     // Remove classes first if they exist
//     loginIn.classList.remove('block')
//     loginUp.classList.remove('none')

//     // Add classes
//     loginIn.classList.toggle('none')
//     loginUp.classList.toggle('block')
// })

// signIn.addEventListener('click', ()=>{
//     // Remove classes first if they exist
//     loginIn.classList.remove('none')
//     loginUp.classList.remove('block')

//     // Add classes
//     loginIn.classList.toggle('block')
//     loginUp.classList.toggle('none')
// })
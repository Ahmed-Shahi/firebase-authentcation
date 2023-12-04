import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getDatabase,ref, set,onValue} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyA-6jKJat2MZMEPzkQfNOxW4hsf3dQ5ESY",
  authDomain: "authentication-app-56e22.firebaseapp.com",
  projectId: "authentication-app-56e22",
  storageBucket: "authentication-app-56e22.appspot.com",
  messagingSenderId: "215289143898",
  appId: "1:215289143898:web:8d3b976c023951bd2e2e63"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

 document.querySelector('#addtodo').addEventListener('click',(e)=>{
      e.preventDefault()
    set(ref(db,'user/' + document.getElementById('inp').value),{

      list  : document.getElementById('inp').value

    })
    alert('Sucessfully Added  !')

 })
 
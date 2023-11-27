import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, doc, deleteDoc, updateDoc, deleteField } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA-6jKJat2MZMEPzkQfNOxW4hsf3dQ5ESY",
  authDomain: "authentication-app-56e22.firebaseapp.com",
  projectId: "authentication-app-56e22",
  storageBucket: "authentication-app-56e22.appspot.com",
  messagingSenderId: "215289143898",
  appId: "1:215289143898:web:8d3b976c023951bd2e2e63"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let addtodo = document.querySelector('#addtodo')
addtodo.addEventListener('click', async () => {
  let getinp = document.querySelector('#inp')
  const docRef = await addDoc(collection(db, "todos"), {
    name: getinp.value,
    time: new Date().toLocaleString()
  });
  console.log("Document written with ID: ", docRef.id);
})
let ul = document.querySelector('#getul')
let arr = [];
function getdata() {

  onSnapshot(collection(db, 'todos'), (data) => {
    data.docChanges().forEach((newData) => {
      console.log(newData.doc.data())
      arr.push(newData.doc.id)
      if (newData.type == 'removed') {
        let del = document.getElementById(newData.doc.id)
        del.remove()
      }
      else if (newData.type == 'added') {
        ul.innerHTML += `
        <li id=${newData.doc.id}>${newData.doc.data().name} <br> ${newData.doc.data().time} <button id='del' onclick="delTodo('${newData.doc.id}')">
        Delete</button> <button id='edit' onclick="edit(this,'${newData.doc.id}')">Edit</button></li>`
      }
      console.log()
    })
  })
}

getdata()


async function delTodo(id) {
  await deleteDoc(doc(db, "todos", id));
}

async function edit(e, id) {
  let updatetime = new Date().toLocaleString()
  let updatename = prompt('CHANGE A NAME')
  e.parentNode.firstChild.nodeValue = updatename;
  await updateDoc(doc(db, "todos", id), {
    name: updatename,
    time: updatetime
  });
}

let delall = document.querySelector('#delall')

delall.addEventListener('click',async () => {
  ul.innerHTML = "";
  for(var i = 0; i< arr.length; i++) {
    await deleteDoc(doc(db, "todos", arr[i]));
  }

  
})

window.delall = delall
window.edit = edit
window.delTodo = delTodo
window.getdata = getdata
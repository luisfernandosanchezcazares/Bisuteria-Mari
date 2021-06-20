import firebase from 'firebase/app'
import 'firebase/firestore'

firebase.initializeApp({
    apiKey: 'AIzaSyDxFgpGSzgq-_pF_23dDNq9pWFw0QEe5MQ',
    authDomain: 'bisuteria-mari.firebaseapp.com',
    projectId: 'bisuteria-mari'
});
  
var db = firebase.firestore();

function mixed() {
    console.log("cacerola");
}

// Agregar Documentos

// function guardar() {
//     console.log('Hola Mundo');
//     db.collection("users").add({
//         first: "Ada",
//         last: "Lovelace",
//         born: 2021
//     })
//     .then((docRef) => {
//         console.log("Document written with ID: ", docRef.id);
//     })
//     .catch((error) => {
//           console.error("Error adding document: ", error);
//     });
// }

// Leer Documentos

// var tabla = document.getElementById('producto');

// db.collection("Productos").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data().ruta}`);
//         tabla.innerText = "Hola";
//     });
// });

export default db
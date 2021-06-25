import React, {useState} from 'react'
import Header from '../Components/Header'
import Buttons from '../Components/Button'
import db from '../firebase/conexion'

const vec = [];

const listItem = ({item}) => {
    return(
        <div className="Product" >
            <h1>{item.precio}</h1>
            <img src={`./Imgs/${item.ruta}.png`} className="ImgsP" key={item.ruta} alt="Imagen"></img>
            <div className="proof">
                <Buttons type="btnVer" text="Ver Detalles" name={item.ruta} id = {item.id}/>
            </div>
        </div>
    );
}

const Ejemplo = () => {

    const [list, setList] = useState([]);

    const agregar = () => {
        console.log('Hola Mundo');
    db.collection("users").add({
        first: "Ada",
        last: "Lovelace",
        born: 2021
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
          console.error("Error adding document: ", error);
    });
    }

    const cargar = () => {
        // const caja = document.getElementById('producto');
        db.collection('Productos').get().then((querySnapshot) => {
    
            // caja.innerHTML = '';
            querySnapshot.forEach((doc) => {

            const obj = {
                id: doc.id,
                precio: doc.data().precio,
                ruta: doc.data().ruta
            }

            setList(vec);
            vec.push(obj);
            
            // console.log(`${doc.id} => ${doc.data().ruta}`);
            // caja.innerHTML += `
            // <div class="Product" >
            //     <img src="./Imgs/${doc.data().ruta}.png" class="ImgsP" key="P1" alt="Imagen"></img>
            //         <div class="proof">
                        
            //         <button class="btnVer" id="${doc.data().ruta}"/ onClick = "(function() {
            //             console.log('Presionado');
            //         }());">Ver Detalles</button>
            //         </div>
            // </div>
            // `;

            });
        });

        console.log("La longitud es " + list.length)
    }

    return (
        <>
            {/* <button onClick = {cargar}>Push me</button> */}
            <div className="Products">
                <div className="Title">PRODUCTOS</div>
                <div id="producto" className="cajamix" onLoad = {cargar()}>
                    {list.map((item) => listItem({item}))}
                </div>
            </div>
        </>
    )
}

export default Ejemplo

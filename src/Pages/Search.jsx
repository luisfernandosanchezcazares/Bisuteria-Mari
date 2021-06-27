import React, {useState, useEffect} from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import FooterSm from '../Components/FooterSm'
import ListItem from '../Components/ListItem'
import db from '../firebase/conexion'

const Search = () => {

    const [list, setList] = useState([])
    const [cad, setCad] = useState("")

    useEffect(() => {
        const vec = [];
        const val = localStorage.getItem("search");
        db.collection('Productos').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
            
            // setCad(doc.data().nombre)
            // const x = localStorage.getItem('search');

            // console.log(cad.includes(x));

            // if(cad.includes(x))
            // {
            //     vec.push({
            //        id: doc.id,
            //        precio: doc.data().precio,
            //        ruta: doc.data().ruta,
            //        nombre: doc.data().nombre,
            //        categoria: doc.data().categoria
            //     })
            //     console.log("Se añadio")
            // }
            })
            // setList(vec)
        })
    })

    return (
        <>
            <Header/>
            <div className="Products">
                <div className="Title">Pulseras</div>
                <div>
                    {list.map((item) => <ListItem item = {item} />)}
                </div>
            </div>
            <Footer/>
            <FooterSm/>
        </>
    )
}

export default Search

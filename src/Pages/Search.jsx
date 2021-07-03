import React, {useState, useEffect} from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import FooterSm from '../Components/FooterSm'
import ListItem from '../Components/ListItem'
import db from '../firebase/conexion'

const Search = () => {

    const [list, setList] = useState([])

    useEffect(() => {
        const vec = [];
        const cadInput = localStorage.getItem("search").toLowerCase();
        db.collection('Productos').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const name = [doc.data().nombre].toString().toLowerCase()
                if(name.includes(cadInput))
                    vec.push({
                        id: doc.id,
                        precio: doc.data().precio,
                        url: doc.data().url,
                        nombre: doc.data().nombre,
                        categoria: doc.data().categoria
                    })
            })
            setList(vec)
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

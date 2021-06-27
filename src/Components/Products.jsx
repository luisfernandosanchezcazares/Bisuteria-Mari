import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid'
import ListItem from '../Components/ListItem'
import db from '../firebase/conexion'

const Products = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
        const vec = [];
        db.collection('Productos').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                vec.push({
                   id: doc.id,
                   precio: doc.data().precio,
                   ruta: doc.data().ruta,
                   nombre: doc.data().nombre,
                   categoria: doc.data().categoria
                });
            
            });
            setList(vec)
        });
    }, [])

    return(
        <>
            <div className="Products">
                <div className="Title">PRODUCTOS</div>
                <div>
                    {list.map((item) => <ListItem item = {item}/>)}
                </div>
            </div>
        </>
    )

}
export default Products
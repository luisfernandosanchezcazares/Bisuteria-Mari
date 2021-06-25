import React, {useState, useEffect} from 'react'
import Buttons from './Button'
import Grid from '@material-ui/core/Grid'
import db from '../firebase/conexion'
import { zipObject } from 'lodash';

const Opc=["P1","P2","P3","P4","P5","P6","P7","P8","P9","P10","P11","P12","P13","P14","P15","P16","P17","P18","P19","P20"];

const listItem = ({item}) => {
    return(
        <div className="Product" >
            <img src={`./Imgs/${item.ruta}.png`} className="ImgsP" key={item.ruta} alt="Imagen"></img>
            <div className="proof">
                <Buttons type="btnVer" text="Ver Detalles" name={item.ruta} id = {item.id}/>
            </div>
        </div>
    );
}

const renderImgs  =()=>{   
    const renderImg =(name) =>(
        <div className="Product">

            <img src={"./Imgs/" + name + ".png"} className="ImgsP" key={name} alt="Imagen"></img>
            <div className="proof">
                {/* <Buttons type="btnVer" text="Ver Detalles" name={name} /> */}


            </div>


        </div>
    
    )
    return Opc.map(renderImg)
    
}

const Products = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
        const vec = [];
        db.collection('Productos').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

            // const obj = {
            //     id: doc.id,
            //     precio: doc.data().precio,
            //     ruta: doc.data().ruta
            // }
            
            vec.push({
                id: doc.id,
                precio: doc.data().precio,
                ruta: doc.data().ruta
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
                    {list.map((item) => listItem({item}))}
                </div>
            </div>
        </>
    )

}
export default Products
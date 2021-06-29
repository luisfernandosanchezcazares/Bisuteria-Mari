import React from 'react'
import Button from './Button'

const ListItem = ({item}) => {
    return(
        <div className="Product" >
            <img src = {item.ruta} className = "ImgsP" key = {item.ruta} alt = "Imagen"/> 
            <div className="proof">
                <Button type="btnVer" text="Ver Detalles" name={item.ruta} id = {item.id}/>
            </div>
        </div>
    );
}

export default ListItem

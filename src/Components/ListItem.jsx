import React from 'react'
import Button from './Button'

const ListItem = ({item}) => {
    return(
        <div className="Product" >
            <img src = {item.url} className = "ImgsP" key = {item.url} alt = "Imagen"/> 
            <div className="proof">
                <Button type="btnVer" text="Ver Detalles" name={item.url} id = {item.id}/>
            </div>
        </div>
    );
}

export default ListItem

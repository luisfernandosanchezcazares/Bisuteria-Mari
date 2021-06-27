import React, {useState, useEffect} from 'react'
import Button from './Button'
import firebase from 'firebase'

const ListItem = ({item}) => {

    const [picture, setPicture] = useState("")

    useEffect(() => {
        const storageR = firebase.storage().refFromURL(`gs://bisuteria-mari.appspot.com/${item.ruta}`)
        storageR.getDownloadURL().then((url) => setPicture(url))
    }, [])

    return(
        <div className="Product" >
            <img src = {picture} className = "ImgsP" key = {item.ruta} alt = "Imagen"/>
            <div className="proof">
                <Button type="btnVer" text="Ver Detalles" name={item.ruta} id = {item.id}/>
            </div>
        </div>
    );
}

export default ListItem

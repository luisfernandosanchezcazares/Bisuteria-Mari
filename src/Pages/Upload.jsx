import React, {useState} from 'react'
import db from '../firebase/conexion'
import firebase from 'firebase'
import CircularProgress from '../Components/CircularProgress'

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const Upload = () => {

    const [uploadValue, setUploadValue] = useState(0)
    const [picture, setPicture] = useState("")
    const [ruta, setRuta] = useState("")
    const [categoria, setCategoria] = useState(1)

    const uploadImage = (event) => {
        const file = event.target.files[0]
        const storageR = firebase.storage().refFromURL(`gs://bisuteria-mari.appspot.com/Imgs/${file.name}`)
        const task = storageR.put(file)

        task.on('state-changed', (snapshot) => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadValue(percentage)
        }, error => {
            console.log("Error al subir la imagen")
        }, () => {
            setUploadValue(100)
            console.log('ruta ' + storageR.fullPath)
            setRuta(storageR.fullPath)
            storageR.getDownloadURL().then((url) => setPicture(url))
        })
    }

    const addRegistro = () => {

        let c = ''

        switch(categoria)
        {
            case 1:
                c = 'collares'
                break;
            case 2:
                c = 'pulseras'
                break;
            case 3:
                c = 'aretes'
                break;
        }
        db.collection('Productos').add({
            nombre: document.getElementById('nombre').value,
            categoria: c,
            precio: document.getElementById('precio').value,
            ruta: ruta
        })

        document.getElementById('nombre').value = ''
        document.getElementById('precio').value = ''
    }

    const handleChange = (event) => {
        setCategoria(event.target.value)
    }

    return (
        <>
            <input id = "nombre" className = "cuadroTexto" placeholder = "Ingresa nombre del producto"/><br/>
            {/* <input id = "categoria" className = "cuadroTexto" placeholder = "Ingresa categoria del producto"/><br/> */}
            <input id = "precio" className = "cuadroTexto" placeholder = "Ingresa precio del producto"/><br/>

            <FormControl>
                <InputLabel id="demo-simple-select-required-label">Categoria</InputLabel>
                <Select
                    labelId="demo-simple-select-required-label"
                    id="demo-simple-select-required"
                    value = {categoria}
                    onChange = {handleChange}
                >
                    <MenuItem value = {1} >Collares</MenuItem>
                    <MenuItem value = {2} >Pulseras</MenuItem>
                    <MenuItem value = {3} >Aretes</MenuItem>
                </Select>
                <FormHelperText>Required</FormHelperText>
            </FormControl>
            <br/>
            <CircularProgress value = {uploadValue} />
            <br/>
            <input type = "file" text = "Subir" onChange = {uploadImage}/>
            <br/>
            <img width = "200" src = {picture}/>
            <button onClick = {addRegistro}>Subir</button>
        </>
    )
}

export default Upload

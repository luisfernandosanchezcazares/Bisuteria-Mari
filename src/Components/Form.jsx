import React, {useState} from 'react'
import db from '../firebase/conexion'
import firebase from 'firebase'
import CircularProgress from '../Components/CircularProgress'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid'
import {IconContext} from 'react-icons'
import RenderIcon from '../Components/RenderIcon'

const Form = () => {

    const [uploadValue, setUploadValue] = useState(0)
    const [picture, setPicture] = useState("")
    const [file, setFile] = useState(null)
    const [categoria, setCategoria] = useState("collares")

    const mountImage = (event) => {
        setFile(event.target.files[0])
    }

    const uploadInfo = () => {
        const storageR = firebase.storage().refFromURL(`gs://bisuteria-mari.appspot.com/Imgs/${file.name}`)
        const task = storageR.put(file)

        task.on('state-changed', (snapshot) => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadValue(percentage)
        }, error => {
            console.log("Error al subir la imagen")
        }, () => {
            setUploadValue(100)
            storageR.getDownloadURL().then((url) => addRegistro(url))
        })
    }

    const addRegistro = (url) => {
        setPicture(url)
        db.collection('Productos').add({
            nombre: document.getElementById('nombre').value,
            categoria: categoria,
            precio: document.getElementById('precio').value,
            ruta: url
        })

        document.getElementById('nombre').value = ''
        document.getElementById('precio').value = ''
    }

    const handleChange = (event) => {
        setCategoria(event.target.value)
    }

    return (
        <Grid className="General" alignContent="center">
            <div className="cajaInsercion">
                <input id="nombre" className="cuadroTexto" placeholder="Ingresa nombre del producto" /><br />
                <input id="precio" className="cuadroTexto" placeholder="Ingresa precio del producto" /><br />

                <FormControl color = "secondary">
                    <InputLabel id="demo-simple-select-required-label" className = "il">Categoria</InputLabel>
                    <Select
                        labelId = "demo-simple-select-required-label"
                        id = "demo-simple-select-required"
                        value = {categoria}
                        onChange = {handleChange}
                        className = "seleccion"
                    >
                        <MenuItem value = {"collares"} >Collares</MenuItem>
                        <MenuItem value = {"pulseras"} >Pulseras</MenuItem>
                        <MenuItem value = {"aretes"} >Aretes</MenuItem>
                    </Select>
                    <FormHelperText>Requerido</FormHelperText>
                </FormControl>
                <br />
                <br />
                <label for="file-upload" className = "botonSubirImagen">
                    <i class="fas fa-cloud-upload-alt"></i> Subir imagen
                </label>
                <input id="file-upload" className = "subirImagen" type = "file" accept = "image/png, image/jpeg, image/jpg" onChange = {mountImage}/>
                <br />
                <br />
                {
                    uploadValue === 100 ? 
                        <IconContext.Provider value={{ size: '3em' }}>
                            <RenderIcon name= "check"/>
                        </IconContext.Provider>
                    : 
                    <CircularProgress value = {uploadValue} />
                }
                <br />
                <img width = "200" src = {picture} className="imgUpload"/>
                <br />
                <button className = "botonBuscar" onClick={uploadInfo}>Subir</button>
            </div>
        </Grid>
    )
}

export default Form

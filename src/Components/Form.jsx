import React, {useState, useEffect} from 'react'
import db from '../firebase/conexion'
import firebase from 'firebase'
import CircularProgress from '../Components/CircularProgress'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {IconContext} from 'react-icons'
import RenderIcon from '../Components/RenderIcon'
import Grid from '@material-ui/core/Grid'
import TableRow from '../Components/TableRow'

const Form = () => {

    const [uploadValue, setUploadValue] = useState(0)
    const [picture, setPicture] = useState("")
    const [update, setUpdate] = useState(true)
    const [file, setFile] = useState(null)
    const [categoria, setCategoria] = useState("collares")
    const [list, setList] = useState([])

    useEffect(() => {
        const vec = []
            db.collection('Productos').get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    vec.push({
                        id: doc.id,
                        nombre: doc.data().nombre,
                        categoria: doc.data().categoria,
                        precio: doc.data().precio,
                        ruta: doc.data().ruta,
                        url: doc.data().url
                    })
                })
                setList(vec)
            })
    }, [update])

    const mountImage = (event) => {
        setFile(event.target.files[0])
    }

    const uploadInfo = () => {

        const nombre = document.getElementById('nombre').value
        const precio = document.getElementById('precio').value

        if(nombre === '')
        {
            console.log("El campo nombre no puede estar vacio")
            
        }
        else
            if(precio === '') 
            {
                console.log("El campo precio no puede estar vacio")
            }
            else
            {
                const storageR = firebase.storage().refFromURL(`gs://bisuteria-mari.appspot.com/Imgs/${file.name}`)
                const task = storageR.put(file)

                task.on('state-changed', (snapshot) => {
                    let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setUploadValue(percentage)
                }, error => {
                    console.log("Error al subir la imagen")
                }, () => {
                    setUploadValue(100)
                    storageR.getDownloadURL().then((url) => addRegistro(storageR.fullPath, url))
                })
            }
    }

    const addRegistro = (ruta, url) => {
        setPicture(url)
        db.collection('Productos').add({
            nombre: document.getElementById('nombre').value,
            categoria: categoria,
            precio: document.getElementById('precio').value,
            ruta: ruta,
            url: url
        })

        document.getElementById('nombre').value = ''
        document.getElementById('precio').value = ''

        setUpdate(!update)
    }

    const handleChange = (event) => {
        setCategoria(event.target.value)
    }

    return (
        <Grid className="General" container justify="center">
            <div className="cajaForm">
                <div className="tituloForm">Añadir Producto</div>
                <input id="nombre" className="inputTexto" placeholder="Ingresa nombre del producto" /><br />
                <input id="precio" className="inputTexto" placeholder="Ingresa precio del producto" /><br />

                <FormControl color="secondary">
                    <InputLabel id="demo-simple-select-required-label" className="il">Categoria</InputLabel>
                    <Select
                        labelId="demo-simple-select-required-label"
                        id="demo-simple-select-required"
                        value={categoria}
                        onChange={handleChange}
                        className="seleccion"
                    >
                        <MenuItem value={"collares"} >Collares</MenuItem>
                        <MenuItem value={"pulseras"} >Pulseras</MenuItem>
                        <MenuItem value={"aretes"} >Aretes</MenuItem>
                    </Select>
                    <FormHelperText>Requerido</FormHelperText>
                </FormControl>
                <br />
                <br />
                <label for="file-upload" className="botonSubirImagen">
                    <i class="fas fa-cloud-upload-alt"></i> Seleccionar imagen
                </label>
                <input id="file-upload" className="ocultar" type="file" accept="image/png, image/jpeg, image/jpg" onChange={mountImage} />
                <br />
                <br />
                {
                    uploadValue === 100 ?
                        <IconContext.Provider value={{ size: '3em' }}>
                            <RenderIcon name="check" />
                        </IconContext.Provider>
                        :
                        <CircularProgress value={uploadValue} />
                }
                <br />
                <img width="200" src={picture} className="imgUpload" alt=""/>
                <br />
                <button className="botonSubirImagen" onClick={uploadInfo}>Subir Registro</button>
            </div>

            <div className="cajaTablaForm">
                <div className="tituloForm">Productos</div>
                <table className="tablaProds">
                    <tr className="tablaEnc">
                        <td>Nombre Producto</td>
                        <td>Precio</td>
                        <td>Categoria</td>
                        <td>Imagen</td>
                        <td>Eliminar</td>
                    </tr>
                    {
                        list.map((item) => <TableRow item={item} onClickHandle={() => {
                            firebase.storage().refFromURL(`gs://bisuteria-mari.appspot.com/${item.ruta}`).delete()
                            db.collection('Productos').doc(item.id).delete()
                            setTimeout(() =>  setUpdate(!update), 100)
                        }}/>)
                    }
                </table>
            </div>
        </Grid>
    )
}

export default Form

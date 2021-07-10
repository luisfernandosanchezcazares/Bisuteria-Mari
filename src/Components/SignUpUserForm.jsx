import React from 'react'
import Grid from '@material-ui/core/Grid'
import {IconContext} from 'react-icons'
import RenderIcon from './RenderIcon'
import db from '../firebase/conexion'
import Alert from '@material-ui/lab/Alert'
import {useHistory} from 'react-router-dom'

const SignUpUserForm = () => {

    const history = useHistory()
    const [users, setUsers] = React.useState([])
    const [error, setError] = React.useState('')

    React.useEffect(() => {
        const v = []
        db.collection('Users').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                v.push({usuario: doc.data().usuario})
            })
            setUsers(v)
        })
    }, [])

    const addUser = () => {
        const usuario = document.getElementById('Usuario').value
        const clave = document.getElementById('Clave').value
        const correo = document.getElementById('Correo').value

        if(usuario === '' || clave === '' || correo === '')
            setError('No puede haber campos vacios')
        else
            if(userExists(usuario))
                setError('El usuario ya existe')
            else
            {
                setError('')
                db.collection('Users').add({
                    usuario: usuario,
                    clave: clave,
                    correo: correo
                })
                sessionStorage.setItem('userName', usuario)
                history.push('/')
            }
    }

    const userExists = (user) => {
        let existe = false;
        users.forEach((index) => {
            if(index.usuario === user)
                existe = true
        })
        return existe;
    }

    return (
        <Grid container className="General" justify="center" alignContent="center"
            alignItems="center" direction="column" xs="auto" lg={12} md={12}>

            <Grid item className="Title2" alignItems="center" direction="column">Registrate</Grid>

            <br/>

            <Grid item direction="column" className="cajaForm" xs={12} lg={12} md={12}>
                <IconContext.Provider direction="column" value={{ size: '65px' }}>
                    <RenderIcon name={"user"}></RenderIcon>
                </IconContext.Provider> <br/>
                { error !== '' ? <Alert severity="error" className >{error}</Alert> : <></> }
                <input id="Usuario" className="inputTexto2" placeholder="Nombre Usuario" /><br />
                
                <input id="Clave" className="inputTexto2" type="password" placeholder="Contraseña" /><br />
                <input id="Correo" className="inputTexto2" placeholder="Correo"></input>
                <button className="Accept" onClick={addUser}>Registrar</button>
            </Grid>
        </Grid>
    )


}


export default SignUpUserForm
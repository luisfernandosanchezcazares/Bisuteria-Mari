import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid'
import {IconContext} from 'react-icons'
import RenderIcon from '../Components/RenderIcon'
import db from '../firebase/conexion'
import {useHistory, Link} from 'react-router-dom'
import Alert from '@material-ui/lab/Alert'


const LogInForm = () => {

    const history = useHistory()

    const [user, setUser] = useState({})
    const [error, setError] = useState("")

    useEffect(() => {
        db.collection('Users').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => setUser({usuario: doc.data().usuario, clave: doc.data().clave}))
        })
    }, [])

    const iniciarSesion = () => {
        const usuario = document.getElementById('Usuario').value
        const clave = document.getElementById('Clave').value

        if(usuario === '')
            setError('El nombre de usuario no puede estar vacio')
        else
            if(clave === '')
                setError('La contraseña no puede estar vacia')
            else
                if(usuario !== user.usuario)
                    setError('El nombre de usuario no existe')
                else
                    if(clave !== user.clave)
                        setError('La contraseña esta incorrecta')
                    else
                    {
                        sessionStorage.setItem('userName', usuario)
                        history.push('/Upload')
                    }
    }

    return (
        <Grid container className="General" justify="center" alignContent="center"
            alignItems="center" direction="column" xs="auto" lg={12} md={12}>

            <Grid item className="Title2" alignItems="center" direction="column">Iniciar Sesión</Grid>

            <br/>

            <Grid item direction="column" className="cajaForm" xs={12} lg={12} md={12}>
                <IconContext.Provider direction="column" value={{ size: '65px' }}>
                    <RenderIcon name={"user"}></RenderIcon>
                </IconContext.Provider> <br/>
                
                { 
                error !== '' ? <Alert severity="error" className >{error}</Alert> : <></> }
                <input id="Usuario" className="inputTexto2" placeholder="Nombre Usuario" /><br />
                <input id="Clave" className="inputTexto2" type="password" placeholder="Contraseña" /><br />
                <button className="Accept" onClick={iniciarSesion}>Aceptar</button>

                {
                    <Link to="SignUp" ><Alert severity="info" className="Alert" >No tienes  cuenta registrate</Alert></Link> 
                }
            </Grid>
        </Grid>
    )
}

export default LogInForm
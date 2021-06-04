import React from 'react';
import Button from './Button';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {Link} from 'react-router-dom'
import {BrowserRouter as Router,
    Switch,
    Route} from 'react-router-dom'
import {useHistory} from 'react-router-dom'

const Header = () => {

    const history = useHistory()

    const onClickHandle = ({ruta}) => {
        history.push(ruta)
    }
    
    return(
        <Grid className="header" container justify = "center" column spacing = {2}>
            <Grid className="headerUp" container item xs = {12}>
                <Grid container justify = "left" container item xs = {12} sm = {4} md = {6} lg = {6}>
                    <img height="50px" src="./Imgs/logo.png" className="Logo"/>
                    <p className ="eslogan">Luce elegante, luce genial</p>
                </Grid>
                <Grid container item xs = {12} sm = {8} md = {6} lg = {6}>
                    <div className="cajaBusqueda">
                        <input className="cuadroTexto" placeholder="Ingresa el nombre del producto"/>
                        <Button type="botonBuscar" text="Buscar" />
                    </div>
                    
                </Grid>
            </Grid>
            <Grid className="headerDown" container item xs = {12}>
                    <ul className="nav">
                        <li><Link to = "/Prueba" onClick = {onClickHandle("/Prueba")}>Inicio</Link></li>
                        <li><Link to = "/Prueba" onClick = {onClickHandle("/Prueba")}>Categorias</Link>
                            <ul>
                                <li><Link to = "/Prueba" onClick = {onClickHandle("/Prueba")}>Collares</Link></li>
                                <li><Link to = "/Prueba" onClick = {onClickHandle("/Prueba")}>Aretes</Link></li>
                                <li><Link to = "/Prueba" onClick = {onClickHandle("/Prueba")}>Pulseras</Link></li>
                            </ul>
                        </li>
                        <li><Link to = "/" onClick = {onClickHandle("/")}>Contacto</Link></li>
                        <li><Link to = "/" onClick = {onClickHandle("/")}>Acerca De</Link></li>
                    </ul>
            </Grid>
        </Grid>
    );
}

export default Header
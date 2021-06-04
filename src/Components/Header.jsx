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

    const onClickHandle = () => {
        history.push("/Prueba")
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
                    {/* <ul className="nav">
                        <li><a href="">Inicio</a></li>
                        <li><a href="">Categorias</a>
                            <ul>
                                <li><a href="">Collares</a></li>
                                <li><a href="">Aretes</a></li>
                                <li><a href="">Pulseras</a></li>
                            </ul>
                        </li>
                        <li><a href="">Contacto</a></li>
                        <li><a href="">Acerca De</a></li>
                    </ul> */}
                    <div>
                        <Link to = "/Prueba" onClick = {onClickHandle} className = "a">Inicio</Link>
                    </div>
            </Grid>
        </Grid>
    );
}

export default Header
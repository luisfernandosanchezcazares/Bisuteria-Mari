import React from 'react';
import Button from './Button';
import Grid from '@material-ui/core/Grid'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';

const Header = () => {
    return(
        // <AppBar position="static">
        //     <Toolbar>
        //         <IconButton edge="start"  color="inherit" aria-label="menu">
        //             <MenuIcon />
        //         </IconButton>
        //         <Typography variant="h6">
        //             News
        //          </Typography>
        //         <Button color="inherit">Login</Button>
        //     </Toolbar>
        // </AppBar>
        <Grid className="header" container justify = "center" column spacing = {2}>
            <Grid className="headerUp" container item xs = {12}>
                <Grid container justify = "left" container item xs = {4} md = {6} lg = {6}>
                    <img height="50px" src="./Imgs/logo.png" className="Logo"/>
                    <p>Luce elegante, luce genial</p>
                </Grid>
                <Grid container item xs = {8} md = {6} lg = {6}>
                    <div className="cajaBusqueda">
                        <input className="cuadroTexto" placeholder="Ingresa el nombre del producto"/>
                        <Button type="botonBuscar" text="Buscar" />
                    </div>
                    
                </Grid>
            </Grid>
            <Grid className="headerDown" container item xs = {12}>
                    <ul className="nav">
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
                    </ul>
            </Grid>
        </Grid>
    );
}

export default Header
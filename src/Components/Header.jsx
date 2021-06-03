import React from 'react';
import Button from './Button';
import Grid from '@material-ui/core/Grid'

const Header = () => {
    return(
        <Grid className="header" container justify = "center" column spacing = {2}>
            <Grid className="headerUp" container item xs = {12}>
                <Grid container justify = "left" container item xs = {4}>
                    <img src="./Imgs/logo.png"/>
                    <p>AQUI VA EL ESLOGAN</p>
                </Grid>
                <div>
                    <input className="cuadroTexto" placeholder="Ingresa el nombre del producto"/>
                    <Button type="botonBuscar" text="Buscar" />
                </div>
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
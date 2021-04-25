import React from 'react';
import Button from './Button';

const Header = () => {
    return(
        <div className="header">
            <div className="headerUp">
                    <img src="./Imgs/logo.png" className="Logo"/>
                    <p>AQUI VA EL ESLOGAN</p>
                <div className="cajaBusqueda">
                    <input className="cuadroTexto" placeholder="Ingresa el nombre del producto"/>
                    <Button type="botonBuscar" text="Buscar" />
                </div>
            </div>
            <div className="headerDown">
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
            </div>
        </div>
    );
}

export default Header
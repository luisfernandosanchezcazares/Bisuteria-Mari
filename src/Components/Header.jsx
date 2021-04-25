import React from 'react';
import Button from './Button';

const Header = () => {
    return(
        <div className="header">
            <div className="headerUp">
                <img src="./Imgs/logo.png" className="cajaLogo"/>
                <div className="cajaBusqueda">
                    <input className="cuadroTexto" placeholder="Ingresa el nombre del producto"/>
                    <Button type="botonBuscar" text="Buscar" />
                </div>
            </div>
            <div className="headerDown">

            </div>
        </div>
    );
}

export default Header
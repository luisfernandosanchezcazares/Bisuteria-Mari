import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid'
import {useHistory, Link} from 'react-router-dom'
import {IconContext} from 'react-icons'
import RenderIcon from '../Components/RenderIcon'

const Header = () => {

    const [sesion, setSesion] = useState(sessionStorage.getItem('userName') === null)

    const history = useHistory()

    const onClickHandle = ({ruta}) => {
        history.push(ruta)
    }

    return(
        <Grid className="header" container justify = "center" column spacing = {2}>
            <Grid className="headerUp" container item xs = {12}>
                <Grid container justify = "left" container item xs = {12} sm = {4} md = {6} lg = {6}>
                    <img height="50px" src="./Imgs/logo.png" className="Logo"/>
                    <p className="eslogan">Luce elegante, luce genial</p>
                </Grid>
                <Grid container item xs = {12} sm = {8} md = {6} lg = {6}>
                    <div className="cajaBusqueda">
                        <input id = "inputBusqueda" className="cuadroTexto" placeholder="Ingresa el nombre del producto"/>
                        <button className = "botonBuscar" onClick = {() => {
                            localStorage.setItem('search',document.getElementById("inputBusqueda").value)
                            history.push("/Search")
                        }}>Buscar</button>
                    </div> 
                    
                </Grid>
            </Grid>
            <Grid className="headerDown" container item xs = {12}>
                    <ul className="nav">
                        <li><Link to = "/" onClick = {onClickHandle("/")}>Inicio</Link></li>
                        <li><div>Categorias</div>
                            <ul>
                                <li><Link to = "/Necklaces" onClick = {onClickHandle("/Necklaces")}>Collares</Link></li>
                                <li><Link to = "/Earrings" onClick = {onClickHandle("/Earrings")}>Aretes</Link></li>
                                <li><Link to = "/Wristband" onClick = {onClickHandle("/Wristband")}>Pulseras</Link></li>
                            </ul>
                        </li>
                        <li><Link to = "/About" onClick = {onClickHandle("/About")}>Acerca De</Link></li>
                        {
                            sesion ?
                                <li><Link to = "/LogIn" onClick = {onClickHandle("/LogIn")}>Iniciar Sesión</Link></li>
                            :
                            <>
                                <li>
                                    <Link to="/" onClick={() => {
                                        sessionStorage.removeItem('userName')
                                        setSesion(!sesion)
                                    }
                                    }>
                                        Cerrar Sesión
                                    </Link>
                                </li>

                                {
                                    sessionStorage.getItem('userName') !== null && sessionStorage.getItem('userName') === 'Admin Bisuteria' 
                                    ?
                                        <Link to="/Upload" className="config" onClick={onClickHandle("/Upload")}>
                                            <IconContext.Provider direction="column" value={{ size: '1.25em', color: '#FF60BD' }}>                                        <RenderIcon name={"admin"}></RenderIcon>
                                            </IconContext.Provider>
                                        </Link>
                                    :
                                    <></>
                                }
                                
                            </>
                        }
                    </ul>
            </Grid>
        </Grid>
    );
}

export default Header
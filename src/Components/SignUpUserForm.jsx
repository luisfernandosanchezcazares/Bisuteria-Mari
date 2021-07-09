import React from 'react'
import Grid from '@material-ui/core/Grid'
import {IconContext} from 'react-icons'
import RenderIcon from './RenderIcon'


const SignUpUserForm = ()=>{
    return (
        <Grid container className="General" justify="center" alignContent="center"
            alignItems="center" direction="column" xs="auto" lg={12} md={12}>

            <Grid item className="Title2" alignItems="center" direction="column">Registrate</Grid>

            <br/>

            <Grid item direction="column" className="cajaForm" xs={12} lg={12} md={12}>
                <IconContext.Provider direction="column" value={{ size: '65px' }}>
                    <RenderIcon name={"user"}></RenderIcon>
                </IconContext.Provider> <br/>
                
                <input id="Usuario" className="inputTexto2" placeholder="Nombre Usuario" /><br />
                
                <input id="Clave" className="inputTexto2" type="password" placeholder="Contraseña" /><br />
                <input id="Correo" className="inputTexto2" placeholder="Correo"></input>
                <button className="Accept">Registrar</button>
            </Grid>
        </Grid>
    )


}


export default SignUpUserForm
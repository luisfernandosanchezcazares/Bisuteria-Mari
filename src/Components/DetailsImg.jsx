import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid'

const DetailsImg=({item})=>{

    return(
        <Grid container md="auto" lg={12} xs="auto" className="General" direction="row" alignContent="center" alignItems="center" spacing={2}>
            <Grid container item alignItems="center" direction="column" md={6} xs="auto">
                <img src={`./Imgs/${item.ruta}.png`} className="ImgsP" alt="Imagen"/>
            </Grid>

            <Grid container item md={5} xs="auto" className="DataNImg" alignContent="center" direction="column">
                <h3>Nombre:</h3>
                {item.ruta}
                <h3> Precio:</h3>
                {item.precio}$
            </Grid>
        </Grid >
    )

}

export default DetailsImg
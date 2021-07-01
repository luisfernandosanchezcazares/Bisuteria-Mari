import React from 'react'
import Grid from '@material-ui/core/Grid'

const DetailsImg=({item})=>{
    return(
        <Grid container md="auto" lg={12} xs="auto" className="General" direction="row" alignContent="center" alignItems="center" spacing={2}>
            <Grid container item alignItems="center" direction="column" md={6} xs="auto">
                <img src = {item.url} className="ImgsP" alt="Imagen"/>
            </Grid>
            <Grid container item md={5} xs="auto" className="DataNImg" alignContent="center" direction="column">
                <h3>Nombre:</h3>
                {item.nombre}
                <h3>Precio:</h3>
                ${item.precio}.00
            </Grid>
        </Grid >
    )
}

export default DetailsImg
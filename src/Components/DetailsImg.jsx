import React from 'react'
import Grid from '@material-ui/core/Grid'
import {IconContext} from 'react-icons'
import RenderIcon,{validValues} from '../Components/RenderIcon'
import Skeleton from '@material-ui/lab/Skeleton'

const DetailsImg=({item})=>{
    return(
        <Grid container md="auto" lg={12} xs="auto" className="General" direction="row" alignContent="center" alignItems="center" spacing={2}>
            <Grid container item alignItems="center" direction="column" md={6} xs="auto">

                {
                    item ?
                <img src = {item.ruta} className="ImgsP" alt="Imagen"/>
               
                   :
                   <Skeleton 
                   variant="rect"
                   height={300}
                   width={300}/>
              

              }
            </Grid>
            <Grid container item md={5} xs="auto" className="DataNImg" alignContent="center" direction="column">
                <div className="DataProduct">
                <h3 className="data">Nombre:</h3>
                <div className="Icon3">
                <IconContext.Provider value={{size:'30px', color:"#0026E6"}}  >
                    <RenderIcon name={"name"}></RenderIcon>
                </IconContext.Provider>

                </div>
                {item.nombre}
               
                <h3 className="data"> 
                
                Precio:
               
                </h3>
                <div className="Icon3">
                <IconContext.Provider value={{size:'30px'}}>
                    <RenderIcon name={"price"}></RenderIcon>
                </IconContext.Provider>

                </div>
                ${item.precio}.00
                </div>
            </Grid>
        </Grid >
    )
}

export default DetailsImg
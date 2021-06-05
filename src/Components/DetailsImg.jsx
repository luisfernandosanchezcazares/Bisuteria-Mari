import React from 'react'
import Grid from '@material-ui/core/Grid'

const DetailsImg=({name})=>{

    
    return(
       
        <Grid container md="auto" lg={12} xs="auto" className="General" direction="row" alignContent="center" alignItems="center" spacing={2}>
           
             <Grid container  item alignItems="center"  direction="column" md={6} xs="auto">
             <img src={"./Imgs/"+name+".png"} className="ImgsP"  alt="Imagen"></img>
            
             </Grid>

            <Grid container item  md={5} xs="auto" className="DataNImg" alignContent="center" direction="column">
                     <h3>Nombre:</h3>
                     Nombre Prueba
                    <h3> Precio:</h3>
                    500$
                    
                     
            </Grid>
        
        </Grid >
      

    )

}
export default DetailsImg
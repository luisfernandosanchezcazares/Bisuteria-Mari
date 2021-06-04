import React from 'react'
import Grid from '@material-ui/core/Grid'

const DetailsImg=({name})=>{
    return(
       
        <Grid container md={12} className="General" direction="row" alignContent="center" >
           
             <Grid item>
             <img src={"./Imgs/"+name+".png"} className="ImgsP"  alt="Imagen"></img>
                  </Grid>

                  <Grid item  md={6}className="DataNImg">
                     Nombre:
                     Precio:
                     
                  </Grid>
        
        </Grid >
      

    )

}
export default DetailsImg
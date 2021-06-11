import react from 'react'
import Grid from '@material-ui/core/Grid'


const Opc=["WhatsApp","Envelope"];
const Titles=["351-112-45-23","someone@.com"]


const renderImgs  =()=>{  
  let ind=0;
    const renderImg =(name) =>(
        <li className="Contact">
        <p className="Detail">
       
      <img src={"./Imgs/ImgsSocialM/"+name+".png"} key={name} className="SocialImg"></img>
      
        {Titles[ind++]}     
      </p>
       </li>
       
     
    )

    return Opc.map(renderImg)
    
}
    

const Footer=()=>{
    return(

        <Grid container direction="row" className="Footer">
           
            <Grid container item xs="auto" lg={4} md={4} direction="column" alignContent="center" className="ContactUs">
           Contacto
          <hr></hr>
           <ul>
          
          {renderImgs()}
        


          <li className="Contact">
        <p className="DetailL">
       
      <img src="./Imgs/ImgsSocialM/Location.png"  className="SocialImgL"></img>
        Domicilio Conocido
       
          
      </p>
       </li>
           </ul>
                      </Grid>

             <Grid container item  xs="auto" lg={4} md={4} direction="column" alignContent="center"  className="Data">
           Ayuda
           <hr></hr> 
           <ul>
              <li className="Contact">Preguntas Frecuentes</li> 
            
           </ul>
           </Grid>
           
          
           
           <Grid container item  xs="auto" lg={4} md={4} direction="column" alignContent="center" className="QuickAccess">
           Acceso Rápido 
           <hr></hr>
           <ul>
              <li className="Contact">Acerca De</li> 
              <li className="Contact">Datos extras que debe</li> 
           </ul>
           </Grid>
        </Grid>
        
      

    )

}
export default Footer
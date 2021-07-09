import React from 'react'
import Grid from '@material-ui/core/Grid'
import {useHistory, Link} from 'react-router-dom'
import {IconContext} from 'react-icons'
import RenderIcon,{validValues} from '../Components/RenderIcon'




const Opc=["whats","Email","location"];
const Titles=["353-109-91-01","bisuteriamari2021@gmail.com","María de Jesús Castañeda #10"]


const renderImgs =()=>{  
  let ind=0;
    const renderImg =(name) =>(
        <li className="Contact">

     
        <IconContext.Provider direction="column" className="Ic" value={{ size:'20px'} }>
                    <RenderIcon name={Opc[ind]}></RenderIcon>
                </IconContext.Provider>
              

        <p className="Detail">
       
                     
        {Titles[ind++]}     
      </p>
       </li>
       
     
    )

    return Opc.map(renderImg)
    
}
    

const Footer=()=>{

  const history = useHistory()

  const onClickHandle = ({ruta}) => {
      history.push(ruta)
  }
    return(

        <Grid container direction="row" className="Footer">
           
            <Grid container item xs="auto" lg={4} md={4} direction="column" alignContent="center" className="ContactUs">
           Contacto
          <hr></hr>
           <ul>
          
          {renderImgs()}
        

           </ul>
                      </Grid>

             <Grid container item  xs="auto" lg={4} md={4} direction="column" alignContent="center"  className="Data">
             Ayuda
             
           <hr></hr> 
           <ul>
          
           
              <li className="Contact"> 
              <IconContext.Provider direction="column" value={{size:'20px'}}>
                    <RenderIcon name={"questionMark"}></RenderIcon>
               
                </IconContext.Provider>
              
              <Link  className="Detail" to = "/Questions" onClick = {onClickHandle("/Questions")}> 
              
           
              Preguntas Frecuentes</Link></li> 
              
           </ul>
           </Grid>
           
          
           
           <Grid container item  xs="auto" lg={4} md={4} direction="column" alignContent="center"  className="QuickAccess">
           Acceso Rápido 
           <hr></hr>
           <ul>
          
              <li className="Contact">
              <IconContext.Provider direction="row"  value={{ size:'20px'} }>
                    <RenderIcon name={"about"}></RenderIcon>
                </IconContext.Provider>
                 <Link  className="Detail" to = "/About" onClick = {onClickHandle("/About")}>Acerca De</Link></li> 
           
           </ul>
           </Grid>
        </Grid>
        
      

    )

}
export default Footer
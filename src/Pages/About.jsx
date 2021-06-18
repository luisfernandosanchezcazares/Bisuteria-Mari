import Header from '../Components/Header';
import Footer from '../Components/Footer';
import FooterSm from '../Components/FooterSm';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import '../Style/Bisuteria.css';
import {IconContext} from 'react-icons'
import RenderIcon,{validValues} from '../Components/RenderIcon'


const About = () => {
    
  return (
    <>
  
     <Header></Header>
     <Grid container direction="column" alignItems="center" alignContent="center" className="InfoCont">
     <Grid  item className="Info" xs={12} md={12} >
         <Typography align="center" display="block">

            <h3>Bisutería Mary</h3> 
            <IconContext.Provider direction="column" value={{ size:'25px', color: 'yellow'} }>
                    <RenderIcon name={"star"}></RenderIcon>
                </IconContext.Provider>
            <p>Bisutería Mary es la mejor opcion para ti en cuestion  de calidad y precio</p>
           <h3>Desarrolladores</h3>
           <IconContext.Provider direction="column" value={{ size:'20px'} }>
                    <RenderIcon name={"computer"}></RenderIcon>
                </IconContext.Provider>
           <p >Luis Fernando Sánchez Cazares. </p>
           <p >César Alejandro Ochoa Garibay.</p>

           </Typography>
          
      </Grid>
      </Grid>
    <Footer></Footer>
    <FooterSm></FooterSm>
  
        </>
  );
}

export default About;
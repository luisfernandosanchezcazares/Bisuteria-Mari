import Header from '../Components/Header';
import Footer from '../Components/Footer';
import FooterSm from '../Components/FooterSm';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'


import '../Style/Bisuteria.css';


const Questions = () => {
    
  return (
    <>
  
     <Header></Header>
     <Grid container direction="column" alignItems="center" alignContent="center" className="InfoCont">
     <Grid  item className="Info" xs={12} md={12} >
         <Typography align="center" display="block">
           <h3>¿Cómo comprar?</h3>
           <p >Para comprar debe mandar mensaje al sig número de what's app 351-112-45-23, </p>
          
           <p> para ponerso de acuerdo con la vendedora para la entrega y pago del producto.</p>
           
          
           <h3>¿Acepta tarjeta?</h3>
           <p>Por el momento al ser un negocio pequeño solo se cuenta como método de pago efectivo.</p>
           <h3>¿Tiene horario?</h3>
           <p>si, se atenderán los mensajes desde 08:00 a.m. hasta 08:00 p.m.</p>
           <h3>¿Hay entregas fuera de la localidad?</h3>
           <p>Por el momento las entregas solo son en Jiquilpan Michoacan.</p>


           </Typography>
          
      </Grid>
      </Grid>
    <Footer></Footer>
    <FooterSm></FooterSm>
  
        </>
  );
}

export default Questions;
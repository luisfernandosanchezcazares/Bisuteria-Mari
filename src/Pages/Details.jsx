import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import FooterSm from '../Components/FooterSm';
import DetailsImg from '../Components/DetailsImg'

import '../Style/Bisuteria.css';



const Details = () => {
    
  return (
    <>
  
     <Header/>
     <DetailsImg name={localStorage.getItem("value")} ></DetailsImg>

    <Footer></Footer>
    <FooterSm></FooterSm>
   
     
        </>
  );
}

export default Details;

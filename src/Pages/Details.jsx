import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import FooterSm from '../Components/FooterSm';
import Slider from '../Components/Slider';
import Products from '../Components/Products';
import DetailsImg from '../Components/DetailsImg'
import '../Style/Bisuteria.css';
import App from './AddProduct'


const Details = () => {
    
  return (
    <>
  
     <Header/>
     <DetailsImg name={localStorage.getItem("value")} ></DetailsImg>

    <Footer></Footer>
    <FooterSm></FooterSm>
   <App></App>
     
        </>
  );
}

export default Details;

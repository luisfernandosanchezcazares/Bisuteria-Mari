import React from 'react'
import Header from '../Components/Header';
import Slider from '../Components/Slider';
import Products from '../Components/Products';
import Footer from '../Components/Footer';
import FooterSm from '../Components/FooterSm';


const MainPage = () => {
    return (
        <>
          <Header/>
          <Slider/>
          <Products/>
          <Footer/>
          <FooterSm/>
        </>
    )
}

export default MainPage

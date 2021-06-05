import Header from '../Components/Header';
import Footer from '../Components/Footer';
import FooterSm from '../Components/FooterSm';
import Slider from '../Components/Slider';
import Products from '../Components/Products';
import DetailsImg from '../Components/DetailsImg'
import Cookies from 'universal-cookie'
import '../Style/Bisuteria.css';



const Details = () => {
  
  
  return (
    <>
  
      <Header></Header>
     <DetailsImg name={localStorage.getItem("value")} ></DetailsImg>

    <Footer></Footer>
    <FooterSm></FooterSm>
     
        </>
  );
}

export default Details;

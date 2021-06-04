import './App.css';
import Header from './Components/Header';
import Slider from './Components/Slider';
import Products from './Components/Products';
import Footer from './Components/Footer';
import FooterSm from './Components/FooterSm';
import './Style/Bisuteria.css';
import DetailsImg from './Components/DetailsImg.jsx'
import Details from './Pages/Details'
  


function App() {
  return (
    <div className="App">
            
          <Header/>
          <Slider/>
          <Products/>
        
          <Footer/>
          <FooterSm/>

        <Details></Details>
          
    </div>
  );
}

export default App;

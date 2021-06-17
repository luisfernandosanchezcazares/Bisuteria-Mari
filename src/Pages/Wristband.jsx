import Header from '../Components/Header';
import Footer from '../Components/Footer';
import FooterSm from '../Components/FooterSm';
import Buttons from '../Components/Button'

import '../Style/Bisuteria.css';

const Opc=["P1","P9","P10","P18","P19","P20"];

const renderImgs  =()=>{   
  const renderImg =(name) =>(
    <div className="Product"> 
   
      <img src={"./Imgs/"+name+".png"} className="ImgsP" key={name} alt="Imagen"></img>
      <div className="proof">
          <Buttons  type="btnVer" text="Ver Detalles" name={name}/>
          
          
      </div>

    
  </div>
  
  )
  return Opc.map(renderImg)
  
}

const Wristband = () => {
    
  return (
    <>
  
     <Header></Header>
     <div className="Products">
           <div className="Title">Pulseras</div>
          <div>
          {renderImgs()}
         </div>
         
      </div>
    <Footer></Footer>
    <FooterSm></FooterSm>
  
        </>
  );
}

export default Wristband;
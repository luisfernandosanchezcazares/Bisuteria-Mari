import Header from '../Components/Header';
import Footer from '../Components/Footer';
import FooterSm from '../Components/FooterSm';
import Buttons from '../Components/Button'

import '../Style/Bisuteria.css';

const Opc=["P2","P3","P4","P5","P6","P7","P8"];

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

const Necklaces = () => {
    
  return (
    <>
  
     <Header></Header>
     <div className="Products">
           <div className="Title">COLLARES</div>
          <div>
          {renderImgs()}
         </div>
         
      </div>
    <Footer></Footer>
    <FooterSm></FooterSm>
  
        </>
  );
}

export default Necklaces;

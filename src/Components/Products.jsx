import React from 'react'
import Buttons from './Button'
import Grid from '@material-ui/core/Grid'


const Opc=["P1","P2","P3","P4","P5","P6","P7","P8","P9","P10","P11","P12","P13","P14","P15","P16","P17","P18","P19","P20"];



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



const Products=(onClickImg)=>{
    
    return(
       
        <div className="Products">
           
             <div className="Title">PRODUCTOS</div>
           
            <div>
            {renderImgs(onClickImg)}
           </div>
           
    
        </div>
      

    )

}
export default Products
import React from 'react'
import Button from './Button'
import Grid from '@material-ui/core/Grid'

const Opc=["P1","P2","P3","P4","P5","P6","P7","P8","P9"];


const renderImgs  =(onClickImg)=>{   
    const renderImg =(name) =>(
      <div className="Product"> 
     
        <img src={"./Imgs/"+name+".png"} className="ImgsP" key={name} alt="Imagen"></img>
        <div className="proof">
            <Button type="btnVer" text="Ver Detalles"/>
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
import react from 'react'

const Opc=["P1","P2","P3","P4","P5","P6"];


const renderImgs  =(onClickImg)=>{   
    const renderImg =(name) =>(
      <div className="Product"> 
     
        <img src={"./Imgs/"+name+".png"} className="ImgsP" alt="Imagen"></img>
        <div className="proof">
        <button className="btnVer">Ver Detalles</button>
        </div>
        </div>
    
    )
    return Opc.map(renderImg)
    
}

const Products=(onClickImg)=>{
    return(
       
        <div className="Products">
             <div className="Title">Productos</div>
           
            <div>
            {renderImgs(onClickImg)}
           </div>
           
        </div>
      

    )

}
export default Products
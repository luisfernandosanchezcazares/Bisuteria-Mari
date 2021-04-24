import react from 'react'

const Opc=["P1","P2","P3","P4","P5","P6"];




const renderImgs  =(onClickImg)=>{   
    const renderImg =(name) =>(
      <div className="Product"> 
      <div className="proof">
        <img src={"./Imgs/"+name+".png"} className="ImgsP" alt="Imagen"></img>
        <button className="btnVer">ver Detalles</button>
        </div>
        </div>
    
    )
    return Opc.map(renderImg)
    
}

const Products=(onClickImg)=>{
    return(

        <div className="Products">
           
            <div>
            {renderImgs(onClickImg)}
           </div>
           
        </div>
      

    )

}
export default Products
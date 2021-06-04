import React from 'react'

const DetailsImg=({name})=>{
    return(
       
        <div >
           
             <div>
             <img src={"./Imgs/"+name+".png"} className="ImgsP"  alt="Imagen"></img>
                  </div>
        
        </div>
      

    )

}
export default DetailsImg
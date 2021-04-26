import react from 'react'




const Opc=["WhatsApp","Envelope"];
const Titles=["","","351-112-45-23","someone@.com"]
let ind=0;

const renderImgs  =(onClickImg)=>{  
    
    const renderImg =(name) =>(
        <li className="Contact">
        <p className="Detail">
       
      <img src={"./Imgs/ImgsSocialM/"+name+".png"} key={name} className="SocialImg"></img>
    
      
      {Titles[ind++]}
      
       
          
      </p>
       </li>
   
    
    )
    return Opc.map(renderImg)
    
}
    

const Footer=(onClickImg)=>{
    return(

        <div className="Footer">
           
            <div className="ContactUs">
           Contacto
          <hr></hr>
           <ul>
          
          {renderImgs(onClickImg)}


          <li className="Contact">
        <p className="Detail">
       
      <img src="./Imgs/ImgsSocialM/Location.png"  className="SocialImgL"></img>
        Domicilio Conocido
       
          
      </p>
       </li>
           </ul>
                      </div>

           <div className="Data">
           Ayuda
           <hr></hr>
           </div>
           
           <div className="QuickAccess">
           Acceso Rápido
           <hr></hr>
           <ul>
              <li className="Contact">Acerca De</li> 
           </ul>
           </div>
        </div>

        
      

    )

}
export default Footer
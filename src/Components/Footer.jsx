import react from 'react'

const Footer=()=>{
    return(

        <div className="Footer">
           
            <div className="ContactUs">
           Contacto
          <hr></hr>
           <ul>
           <li className="Contact">
            <p className="Detail">
          <img src="./Imgs/ImgsSocialM/WhatsApp.png"  className="SocialImg"></img>
          351-117-25-28</p>
           </li>

           <li className="Contact">
               <p className="Detail">
          <img src="./Imgs/ImgsSocialM/Envelope.png"  className="SocialImg"></img>
          okay@someone.com</p>
           </li>
           <li className="Contact">
          <p className="Detail">     
          <img src="./Imgs/ImgsSocialM/Location.png"  className="SocialImgL"></img>
          Some known spot</p>
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
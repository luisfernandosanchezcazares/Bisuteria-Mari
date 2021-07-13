import React from 'react'
import {IconContext} from 'react-icons'
import RenderIcon from '../Components/RenderIcon'
const FooterSm=()=>{
    return(

        <div className="FooterSm">
           
            <div className="Rights">
           @BisuteriaMari 2020-2021
           </div>
           
           <div className="Sm">
               <ul>
                   <li className="SmIcon">
                   <IconContext.Provider direction="column" className="Ic" value={{ size:'25px'} }>
                    <RenderIcon name={"whats"}></RenderIcon>
                </IconContext.Provider>
                   </li>

                   <li className="SmIcon">
                   <img src="./Imgs/ImgsSocialM/Facebook.png"  className="SocialImg" alt="ImgF"></img>
                   </li>
               </ul>

           </div>
          
        </div>

        
      

    )

}

export default FooterSm
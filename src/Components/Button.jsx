import React,{useState} from 'react'



const Buttons = ({text, type}) => {

    return(
        <button className={type} onClick={()=>{
            console.log("Estamos dentro del click");
            
        
           
           }}>
            {text}
        </button>
    );
}

export default Buttons
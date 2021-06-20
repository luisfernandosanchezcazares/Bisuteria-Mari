import React,{useState} from 'react'


import {useHistory} from 'react-router-dom'


const Buttons = ({text, type, name, id}) => {

    
    const history = useHistory();

    return(
        <button className={type} key={name} onClick={()=>{

            history.push("/Details")
            localStorage.setItem('value',id);

            
}}>
           
           
            {text}


        </button>

            
      
        
         
          
    );
}

export default Buttons
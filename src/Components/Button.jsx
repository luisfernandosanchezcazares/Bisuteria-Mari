import React,{useState} from 'react'
import Footer from './Footer'
import {BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter,
    Redirect
    } from 'react-router-dom' 
 
import DetailsImg from './DetailsImg'
import {useHistory} from 'react-router-dom'


const Buttons = ({text, type, name}) => {

    
    const history = useHistory();

    return(
        <button className={type} key={name} onClick={(onClickHandle)=>{

            history.push("/Details")
            localStorage.setItem('value',name);

            
}}>
            {text}


        </button>

            
      
        
         
          
    );
}

export default Buttons
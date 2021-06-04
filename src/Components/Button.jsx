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
import Details from "../Pages/Details"



const Buttons = ({text, type, name}) => {

    

    return(
        <button className={type} key={name} onClick={()=>{

           
           
           }}>
            {text}


        </button>

        /*<BrowserRouter>
            <Route  path = '/DetailsImg'>
         
             <DetailsImg name={name}></DetailsImg>
             
            </Route>

            <Link to="./DetailsImg" className="btnVer">Ver Detalles</Link>
      </BrowserRouter>*/
        
         
          
    );
}

export default Buttons
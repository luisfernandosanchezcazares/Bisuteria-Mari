import React from 'react'
import Buttons from './Button'
import Grid from '@material-ui/core/Grid'
import {Modal,textField,Button} from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import shadows from '@material-ui/core/styles/shadows'
const Opc=["P1","P2","P3","P4","P5","P6","P7","P8","P9"];

const useStyles=makeStyles ((themes)=>({
    modal:{
        position:'absolute',
        width: 500,
        backgroundColor: 'white',
        border: '2px solid black',
        boxShadow: themes.shadows[5],
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)'
        
    }
}))

const renderImgs  =(onClickImg)=>{   
    const renderImg =(name) =>(
      <div className="Product"> 
     
        <img src={"./Imgs/"+name+".png"} className="ImgsP" key={name} alt="Imagen"></img>
        <div className="proof">
            <Buttons type="btnVer" text="Ver Detalles"/>
        </div>
    </div>
    
    )
    return Opc.map(renderImg)
    
}

const Products=(onClickImg)=>{
    return(
       
        <div className="Products">
             <div className="Title">PRODUCTOS</div>
           
            <div>
            {renderImgs(onClickImg)}
           </div>
           
        </div>
      

    )

}
export default Products
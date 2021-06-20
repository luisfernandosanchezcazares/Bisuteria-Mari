import React, {useState} from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import FooterSm from '../Components/FooterSm';
import DetailsImg from '../Components/DetailsImg'

import '../Style/Bisuteria.css';
import App from './AddProduct'
import db from '../firebase/auxi.js'

const Details = () => {

  const [item, setItem] = useState({});

  const getDoc = () => {
    const obj = db.collection('Productos').doc(localStorage.getItem("value"));
    obj.get().then((doc) => {
          setItem(doc.data());
  });
  
    // const nv = {
    //   id: obj.id,
    //   // precio: obj.data().precio,
    //   // ruta: obj.data().ruta
    // }
    // console.log("mi objeto es " + nv.ruta);
  }
    
  return (
    <div /*onLoad = {getDoc()}*/>
      {/* {getDoc("FlaKJuvPBPSWmNRS5DD8")} */}
     <Header/>
     {getDoc()}
     <DetailsImg item = {item} />
    <Footer/>
    <FooterSm/>
    {/* <App/> */}
     
        </div>
  );
}

export default Details;

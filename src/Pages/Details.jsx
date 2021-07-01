import React, {useState, useEffect} from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import FooterSm from '../Components/FooterSm';
import DetailsImg from '../Components/DetailsImg'
import '../Style/Bisuteria.css';
import db from '../firebase/conexion'
import firebase from 'firebase'

const Details = () => {

  const [item, setItem] = useState({});

  useEffect(() => {
    const obj = db.collection('Productos').doc(localStorage.getItem("value"));
    obj.get().then((doc) => {
      setItem({
        nombre: doc.data().nombre,
        precio: doc.data().precio,
        categoria: doc.data().categoria,
        url: doc.data().url
      })
    });
  }, [])
    
  return (
    <>
      <Header/>
      <DetailsImg item = {item}/>
      <Footer/>
      <FooterSm/>
    </>
  );
}

export default Details;

import React, {useState, useEffect} from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import FooterSm from '../Components/FooterSm';
import ListItem from '../Components/ListItem'
import db from '../firebase/conexion'
import '../Style/Bisuteria.css';

const Earrings = () => {

  const [list, setList] = useState([])

  useEffect(() => {
    const vec = [];
    db.collection('Productos').where("categoria", "==", "aretes").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          vec.push({
            id: doc.id,
            precio: doc.data().precio,
            ruta: doc.data().ruta,
            nombre: doc.data().nombre,
            categoria: doc.data().categoria
          })
      })
      setList(vec)
    })
  }, [])
    
  return (
    <>
      <Header/>
      <div className="Products">
        <div className="Title">Aretes</div>
        <div>
          {list.map((item) => <ListItem item = {item}/>)}
        </div>
      </div>
      <Footer/>
      <FooterSm/>

    </>
  );
}

export default Earrings;
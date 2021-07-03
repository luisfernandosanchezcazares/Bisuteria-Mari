import React, {useState, useEffect}from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import FooterSm from '../Components/FooterSm';
import ListItem from '../Components/ListItem'
import db from '../firebase/conexion'
import '../Style/Bisuteria.css';

const Necklaces = () => {

  const [list, setList] = useState([])

  useEffect(() => {
    const vec = [];
        db.collection('Productos').where("categoria", "==", "collares").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                vec.push({
                   id: doc.id,
                   precio: doc.data().precio,
                   url: doc.data().url,
                   nombre: doc.data().nombre,
                   categoria: doc.data().categoria
                });
            });
            setList(vec)
        });
  }, [])
    
  return (
    <>
      <Header/>
      <div className="Products">
        <div className="Title">COLLARES</div>
        <div>
          {list.map((item) => <ListItem item = {item} key={item.nombre}/>)}
        </div>
      </div>
      <Footer />
      <FooterSm />

    </>
  );
}

export default Necklaces;

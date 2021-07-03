import React, {useState, useEffect} from 'react'
import Button from './Button'
import Skeleton from '@material-ui/lab/Skeleton'

const ListItem = ({item}) => {

    const [loader, setLoader] = useState(false)

    useEffect(() => setTimeout(() => setLoader(true), 1000), [])

    return(
        <div className="Product" >
            {
                loader ?
                    <img src={item.url} className="ImgsP" key={item.url} alt="Imagen" />
                :
                    <Skeleton variant="rect" height={300}  width={300} />   
            }
            <div className="proof">
                <Button type="btnVer" text="Ver Detalles" name={item.url} id = {item.id}/>
            </div>
        </div>
    );
}

export default ListItem

import React from 'react'
import Button from './Button'
import Skeleton from '@material-ui/lab/Skeleton'

const ListItem = ({item}) => {
    return(
        <div className="Product" >
            {
                item.url ?
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

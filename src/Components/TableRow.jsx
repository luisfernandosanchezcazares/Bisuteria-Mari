import React, {useState, useEffect}from 'react'
import {IconContext} from 'react-icons'
import RenderIcon from '../Components/RenderIcon'
import db from '../firebase/conexion'

const TableRow = ({item, onClickHandle}) => {

    return (
        <tr className="tablaFila">
            <td>{item.nombre}</td>
            <td>${item.precio}.00</td>
            <td>{item.categoria}</td>
            <td><img width="50" src={item.url} className="ImgsP"/></td>
            <td>
                <button className="buttonDelete" onClick={onClickHandle}>
                    <IconContext.Provider value={{ size: '2em' }}>
                        <RenderIcon name="delete" />
                    </IconContext.Provider>
                </button>
            </td>
        </tr>
    )
    
}

export default TableRow

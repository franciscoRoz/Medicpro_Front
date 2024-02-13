import React from 'react'
import { formatNumber } from '../../Utility/formarnumber'

export const TablaProductosVenta = ({productos}) => {
  
  return (
    <div>
        <table className='Tablaproducto'>
            <thead>
                <tr><td>Nombre</td>
                <td>Cantidad</td>
                <td>Precio Total</td>
                <td>Precio Total IVA</td>
                <td>Porcentaje</td></tr>
            </thead>
            <tbody>
                {productos?.map((item,index)=>(
                  <tr key={index}>
                      <td>{item.nombre}</td>
                      <td>{item.cantidad}</td>
                      <td>{item.precioneto*item.cantidad}</td>
                      <td>{(item.precioneto*item.cantidad)*0.19}</td>
                      <td>{formatNumber(((item.valorventa * 100) / item.precioneto) - 100)}%</td>
                  </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

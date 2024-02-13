import React from 'react'

export const TablaProductos = ({Productos}) => {
  
  
    return (
    <>
        
    <table className='Tablaproducto'>
        <thead>
            <tr>
                <td>Codigo</td>
                <td>Nombre</td>
                <td>Stock en Transito</td>
                <td>Stock Disponible</td>
                <td>Familia</td>
                <td>Precio Unitario</td>
            </tr>
        </thead>
        <tbody>
            
                {Productos?.map((item,index)=>(
                    <tr key={index}>
                        <td>{item.codigo}</td>
                        <td>{item.nombre}</td>
                        <td>{item.stocktransito}</td>
                        <td>{item.stock}</td>
                        <td>{item.familia}</td>
                        <td>{item.precioneto}</td>
                    </tr>
                ))}
            
        </tbody>
    </table>
    </>
  )
}

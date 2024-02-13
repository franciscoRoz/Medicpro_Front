import React from 'react'

export const TablaProductosShop = ({form}) => {
  
    return (
    <>
        
    <table className='Tablaproducto'>
        <thead>
            <tr>
                <td>Nombre Proveedor</td>
                <td>Nombre Producto</td>
                <td>Codigo</td>
                <td>Cantidad</td>
                <td>Valor en Dolar</td>
                <td>Eliminar</td>
            </tr>
        </thead>
        <tbody>
            
                {form.productos?.map((item,index)=>(
                    <tr key={index}>
                        <td>{item.Proveedor}</td>
                        <td>{item.Producto}</td>
                        <td>{item.Codigo}</td>
                        <td>{parseFloat(item.Cantidad).toLocaleString('es-CL')}</td>
                        <td>{parseFloat(item.ValorDolar).toLocaleString('es-CL')}</td>
                        <td>Eliminar</td>
                    </tr>
                ))}
            
        </tbody>
    </table>
    </>
  )
}

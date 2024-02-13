import React, { useState } from 'react'

export const ListadeOrdenCompra = () => {
const [Ordenesdecompra, setOrdenesdecompra] = useState([{
    "cliente": "12",
    "vendedor": "12",
    "documento": "q2",
    "ordencompra": "12",
    "iva":1123123,
    "total":12123123123123,
    "adjunto": [
        {
            "Documento": "",
            "Url": "",
            "Nombre": ""
        }
    ],
    "Productos": [
        {
            "nombre": "ALGODON HIDROFILO KILO",
            "valorventa": "12222",
            "cantidad": "12",
            "precioneto": 2002
        },
        {
            "nombre": "ALGODON HIDROFILO KILO",
            "valorventa": "12222",
            "cantidad": "12",
            "precioneto": 2002
        },
        {
            "nombre": "ALGODON HIDROFILO KILO",
            "valorventa": "12222",
            "cantidad": "12",
            "precioneto": 2002
        },
        {
            "nombre": "ALGODON HIDROFILO KILO",
            "valorventa": "12222",
            "cantidad": "12",
            "precioneto": 2002
        },
        {
            "nombre": "ALGODON HIDROFILO KILO",
            "valorventa": "12222",
            "cantidad": "12",
            "precioneto": 2002
        },
        {
            "nombre": "ALGODON HIDROFILO KILO",
            "valorventa": "12222",
            "cantidad": "12",
            "precioneto": 2002
        },
        {
            "nombre": "ALGODON HIDROFILO KILO",
            "valorventa": "12222",
            "cantidad": "12",
            "precioneto": 2002
        },
        {
            "nombre": "ALGODON HIDROFILO KILO",
            "valorventa": "12222",
            "cantidad": "12",
            "precioneto": 2002
        }
    ]
}])
 




    let handleeliminar=(index)=>{

        let lista=[...Ordenesdecompra];
        lista.splice(index, 1);
        setOrdenesdecompra(lista)
    }

  return (
    <div className='bloque-render'>
    <h2>Ingreso Orden de Compra</h2>
    <hr />
    

    <table className='Tablaproducto'>
        <thead>
            <tr><td>Orden de compra</td>
            <td>Nombre Cliente</td>
            <td>Precio Total</td>
            <td>I.V.A 19%</td>
            <td>Vendedor</td>
            <td>Detalle</td>
            <td>Modificar</td>
            <td>Eliminar</td></tr>
        </thead>
        <tbody>
            {Ordenesdecompra?.map((item,index)=>(
                <tr key={index}>
                    <td>{item.ordencompra}</td>
                    <td>{item.cliente}</td>
                    <td>{item.total}</td>
                    <td>{item.iva}</td>
                    <td>{item.vendedor}</td>
                    <td>Detalle</td>
                    <td>Icono Modificar</td>
                    <td><img onClick={() =>handleeliminar(index)} src='https://res.cloudinary.com/dgi90lgbq/image/upload/v1707088600/npprklizofvutpbdflwz.png' alt='logo eliminar' width={"25px"} style={{cursor: 'pointer'}}/></td>
                </tr>
            ))}
        </tbody>
    </table>
    
    </div>
  )
}

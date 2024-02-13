import React, { useState } from 'react'

let Inputform = ({ titulo, name, type, value, setform, formulario, Disabled = false }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setform({ ...formulario, [name]: value });
    };

    return (
        < >
            <label className='element-input'>
                <div className='modifier-titulo'>{titulo}</div>
                <input className='modifier-input'
                    type={type}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    disabled={Disabled}
                />
            </label>
        </>)
}

export const IngresarStock = ({ item, handleModal ,posicion,Productos,setProductos}) => {
    const [nuevostock, setnuevostock] = useState({ lote: "", unidades: "", unidadcaja: "" })
     
    let handlesave=()=>{
        const nuevoproducto = [...Productos];
        let nuevodetalle = nuevoproducto[posicion].detalles
        nuevodetalle.push(nuevostock)
        
        
        // Verifica si el elemento y el documento existen en el arreglo
        if (nuevoproducto[posicion] && nuevoproducto[posicion]) {
          // Actualiza el nombre del documento en la copia del arreglo
          nuevoproducto[posicion].detalles = nuevodetalle;
      
          // Actualiza el estado Adquisiciones con la nueva copia del arreglo
          console.log(nuevoproducto);
          setProductos(nuevoproducto);
        } else {
          console.error('El elemento o documento especificado no existe en el arreglo.');
        }
    }
    return (
        <div>
            <span>Ingreso de Stock</span>

            <hr />
            <br />
            <Inputform
                titulo='Codigo'
                type='text'
                value={item.codigo}
                Disabled={true}
            />
            <Inputform
                titulo='Nombre'
                type='text'
                value={item.nombre}
                Disabled={true}
            />
            <Inputform
                titulo='Lote'
                name='lote'
                type='text'
                value={nuevostock.lote}
                setform={setnuevostock}
                formulario={nuevostock}
                Disabled={false}
            />
            <Inputform
                titulo='Nuevo stock'
                name='unidades'
                type='Number'
                value={nuevostock.unidades.toLocaleString('es-CL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                setform={setnuevostock}
                formulario={nuevostock}
                Disabled={false}
            />
            <Inputform
                titulo='Productos por caja'
                name='unidadcaja'
                type='number'
                value={nuevostock.unidadcaja.toLocaleString('es-CL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                setform={setnuevostock}
                formulario={nuevostock}
                Disabled={false}
            />

            <br />
            <br />
            <div className='element-save-bar'>
                <button className="element-boton cerrar" onClick={handleModal}>Cerrar</button>
                <button className="element-boton Guardar" onClick={handlesave}>Guardar</button>
            </div>
        </div>
    )
}

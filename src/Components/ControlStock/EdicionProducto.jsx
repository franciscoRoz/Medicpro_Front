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

export const ListaEdicion = ({ item, Productos, EditProductos, handleModaldetalles,posicion,setProducto }) => {
    const [edit, setedit] = useState(true)

    
    let handleditar = () => {
        setedit(!edit)
    }
    let handlesave=()=>{
        const nuevoproducto = [...Productos];

        // Verifica si el elemento y el documento existen en el arreglo
        if (nuevoproducto[posicion] && nuevoproducto[posicion]) {
          // Actualiza el nombre del documento en la copia del arreglo
          nuevoproducto[posicion] = item;
      
          // Actualiza el estado Adquisiciones con la nueva copia del arreglo
          console.log(nuevoproducto);
          setProducto(nuevoproducto);
        } else {
          console.error('El elemento o documento especificado no existe en el arreglo.');
        }
        handleModaldetalles()
    }

    return (
        <div>
            <div className='element-edit-bar'>
                <span>Detalle</span>
                <img onClick={handleditar} src='https://res.cloudinary.com/dgi90lgbq/image/upload/v1707088600/uvowjb2taevrvvb2qcdq.png' alt='logo modificar' width={"25px"} />
            </div>
            <hr />
            <br />
            <Inputform
                titulo='Codigo'
                name='codigo'
                type='text'
                value={item.codigo}
                setform={EditProductos}
                formulario={item}
                Disabled={edit}
            />
            <Inputform
                titulo='Nombre'
                name='nombre'
                type='text'
                value={item.nombre}
                setform={EditProductos}
                formulario={item}
                Disabled={edit}
            />
            <Inputform
                titulo='Familia'
                name='familia'
                type='text'
                value={item.familia}
                setform={EditProductos}
                formulario={item}
                Disabled={edit}
            />
            <Inputform
                titulo='Descripcion'
                name='descripcion'
                type='text'
                value={item.descripcion}
                setform={EditProductos}
                formulario={item}
                Disabled={edit}
            />
            <Inputform
                titulo='Observaciones'
                name='nota'
                type='text'
                value={item.nota}
                setform={EditProductos}
                formulario={item}
                Disabled={edit}
            />
            <Inputform
                titulo='Precio Neto'
                name='precioneto'
                type='text'
                value={item.precioneto}
                setform={EditProductos}
                formulario={item}
                Disabled={edit}
            />
            <Inputform
                titulo='Stock'
                name='stock'
                type='number'
                value={item.stock}
                setform={EditProductos}
                formulario={item}
                Disabled={edit}
            />
            <Inputform
                titulo='Stock en transito'
                name='stocktransito'
                type='number'
                value={item.stocktransito}
                setform={EditProductos}
                formulario={item}
                Disabled={edit}
            />
            <br />
            <br />
            <div className='element-save-bar'>
                <button className="element-boton cerrar" onClick={handleModaldetalles}>Cerrar</button>
                <button className="element-boton Guardar" onClick={handlesave}>Guardar</button>
            </div>
        </div>
    )
}

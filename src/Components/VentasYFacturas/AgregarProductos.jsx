import React, { useState } from 'react'
import { formatNumber } from '../../Utility/formarnumber';


const Selectform = ({ productos, onChange }) => {
    // Extraer valores únicos de la propiedad "producto"
    const opcionesProductos = [...new Set(productos.map((item) => item.nombre))];

    return (
        <select onChange={onChange}>
            <option value="">Selecciona un producto</option>
            {opcionesProductos.map((producto, index) => (
                <option key={index} value={producto}>
                    {producto}
                </option>
            ))}
        </select>
    );
};

let Inputform = ({ name, type, value, setform, formulario }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;

        setform({ ...formulario, [name]: value });



    };

    return (

        <input className='modifier-input'
            type={type}
            name={name}
            value={value}
            onChange={handleChange}

        />
    )
}


export const AgregarProductos = ({ OrdenCompra, setOrdenCompra, handleModal, productos }) => {

    const [producto, setproducto] = useState({ nombre: "", valorventa: "", cantidad: "", precioneto: "" });

    let onChange = (e) => {
        console.log(OrdenCompra);
        const selectedProduct = e.target.value;
        const Productoencontrado = productos.find(producto => producto.nombre === selectedProduct);
        setproducto({ ...producto, nombre: selectedProduct, precioneto: Productoencontrado?.precioneto })
    }
    const handleadd = (e) => {
        setOrdenCompra(prevState => ({
            ...prevState,
            Productos: [...prevState.Productos, producto]
        }));
    }
    return (

        <div>

            <h3>Agregar Proveedor y Producto</h3>
            <br />
            <hr />

            <table>
                <thead>
                    <tr>
                        <td>Nombre</td>
                        <td>Valor Unidad</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><Selectform
                        productos={productos}
                        onChange={onChange}

                    />
                    </td>
                        <td><span>{producto.precioneto}</span>
                        </td>
                        </tr>
                </tbody>
                <thead>
                    <tr>
                        <td>Cantidad</td>
                        <td>Precio Venta Unidad</td>
                        </tr>
                </thead>
                <tbody>
                    <tr> 
                        <td><Inputform
                        name='cantidad'
                        type='number'
                        value={producto.cantidad}
                        setform={setproducto}
                        formulario={producto}

                    /></td>
                        <td>
                            <Inputform
                                name='valorventa'
                                type='number'
                                value={producto.valorventa}
                                setform={setproducto}
                                formulario={producto} />
                        </td>
                        </tr>
                </tbody>
                <thead>
                    <tr>
                        <td>Precio Total</td>
                        <td>Precio Total IVA</td>
                        <td>Porcentaje Ganancia</td>
                        </tr>
                </thead>
                <tbody>
                    <tr>
                         <td><span>{producto.valorventa * producto.cantidad}</span></td>
                        <td><span>{(producto.valorventa * producto.cantidad) * 0.19}</span></td>
                        <td><span>{formatNumber(((producto.valorventa * 100) / producto.precioneto) - 100)}%</span></td>
                        </tr>
                </tbody>
            </table>
            <div className='bloque-acciones'>
                <button className="element-boton cerrar" onClick={handleModal}>Cerrar</button>
                <button className="element-boton agregar" onClick={handleadd}>Agregar</button>

            </div>
        </div>

    )
}

import React from 'react'

import { TablaProductosShop } from './TablaProductosShop'

import { FormAddProducto } from './FormAddProducto';
import { SendCreacion } from '../../Helpers/SendCreacion';

let Inputform = ({ titulo, name, type, value, setform, formulario, Disabled = false }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        if(name==="abono" ){
            return setform({...formulario,[name]: value,pabonousd:formulario.opeusd*(value/100),pabono:formulario.opepesos*(value/100)})
        }
        setform({ ...formulario, [name]: value ,pabonousd:formulario.opeusd*(formulario.abono/100),pabono:formulario.opepesos*(formulario.abono/100)});
        
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
const Selectform = ({ opciones, titulo, opcionSeleccionada, setOpcionSeleccionada, name, setproductos, Productos }) => {

    const handleChange = (e) => {
        if (name === "Proveedor") {

            const nombresProductosAlgotec = Productos.find(proveedor => proveedor.proveedor === e.target.value)?.producto.map(producto => producto.nombre) || [];

            const productosObjeto = nombresProductosAlgotec.reduce((obj, nombre, index) => {
                obj[nombre] = nombre;
                return obj;
            }, {});
            setproductos(productosObjeto)
        }
        setOpcionSeleccionada({ ...opcionSeleccionada, [name]: e.target.value });
    };

    return (
        <div className='element-input'>
            <label htmlFor="miSelect" className='modifier-titulo'>{titulo}:</label>
            <select className='modifier-input' id="miSelect" value={opcionSeleccionada.proveedor} onChange={handleChange}>
                <option value="" >
                    Selecciona una opción
                </option>
                {Object.keys(opciones).map((key) => (
                    <option key={key} value={key}>
                        {opciones[key]}
                    </option>
                ))}
            </select>
        </div>
    );
}

export const FormPedido = ({ formulario, setform, proveedores }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        SendCreacion(formulario)
        return window.location.replace(`/Seguimiento-Pedidos`)
    };
    return (
        <form onSubmit={handleSubmit}>

            <div className='bloque-inputform'>
                <Inputform
                    titulo='Numero de Operación'
                    name='noperacion'
                    type='`text`'
                    value={formulario.noperacion}
                    setform={setform}
                    formulario={formulario}
                />
                <Inputform
                    titulo='Valor Dolar'
                    name='vdolar'
                    type='number'
                    value={formulario.vdolar.toLocaleString('es-CL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    setform={setform}
                    formulario={formulario}
                />
                <Inputform
                    titulo='PI'
                    name='pi'
                    type='text'
                    value={formulario.pi}
                    setform={setform}
                    formulario={formulario}
                />
                <Inputform
                    titulo='Valor Operación Pesos'
                    type='text'
                    value={formulario.opepesos.toLocaleString('es-CL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    Disabled={true}
                />
                <Inputform
                    titulo='Valor Operación USD'
                    type='text'
                    value={formulario.opeusd.toLocaleString('es-CL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    Disabled={true}
                />
                <Inputform
                    titulo='SWIFT1'
                    name='swift'
                    type='text'
                    value={formulario.swift}
                    setform={setform}
                    formulario={formulario}
                />
                <Inputform
                    titulo='Fecha'
                    name='fecha'
                    type='date'
                    value={formulario.fecha}
                    setform={setform}
                    formulario={formulario}
                />
                <Selectform
                    opciones={{ Full: "Full (F)",Complementaria:"Complementario (C)" }}
                    name='toperacion'
                    titulo='Tipo Operación'
                    opcionSeleccionada={formulario}
                    setOpcionSeleccionada={setform}

                />
                <Selectform
                    opciones={{ Santander: "Santander" }}
                    name="banco"
                    titulo="Banco"
                    opcionSeleccionada={formulario}
                    setOpcionSeleccionada={setform}

                />
                <Inputform
                    titulo='Comisión Banco % CAE'
                    name='cae'
                    type='Number'
                    value={formulario.cae}
                    setform={setform}
                    formulario={formulario}
                />
            </div>

            <div className='modifier-separador'><span >Abono Inicial</span></div>
        

            <div className='bloque-porcentajes'>
                <Inputform
                    titulo='Porcentaje de Abono'
                    name='abono'
                    type='number'
                    value={formulario.abono}
                    setform={setform}
                    formulario={formulario}
                />
                <Inputform
                    titulo='Valor en Dolares'
                    type='text'
                    value={formulario.pabonousd.toLocaleString('es-CL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    Disabled={true}
                />
                <Inputform
                    titulo='Valor en Pesos'
                    type='text'
                    value={formulario.pabono.toLocaleString('es-CL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    Disabled={true}
                />
            </div>
            <div className='modifier-separador'><span >Lista de Productos</span></div>

            <div className='Bloque-Manejo Productos'>
                <FormAddProducto
                    Selectform={Selectform}
                    Inputform={Inputform}
                    Proveedor={proveedores}
                    formulario={formulario}
                    setform={setform} />
                <TablaProductosShop
                    form={formulario} />
            </div>

            <div className='element-generarcompra'><button type='submit'>Generar Compra</button></div>

        </form>
    )
}

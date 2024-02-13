import React, { useState } from 'react'
import { Modal } from '../Modal'

export const FormAddProducto = ({ Selectform, Inputform, Proveedor, formulario, setform, }) => {
    const proveedores = Proveedor.map(proveedor => proveedor.proveedor);

    const proveedoresObjeto = proveedores.reduce((obj, nombre) => {
        obj[nombre] = nombre;
        return obj;
    }, {});
    const [opcionSeleccionada, setOpcionSeleccionada] = useState({ Proveedor: "", Producto: "", Cantidad: "", ValorDolar: "", Codigo: "" });
    const [showModal, setShowModal] = useState(false);
    const [productos, setproductos] = useState({})

    const handleModal = (e) => {
        e.preventDefault()
        setShowModal(!showModal);
    };


    const handleadd = (e) => {
        e.preventDefault()
        setform({...formulario,pabonousd:formulario.opeusd*(formulario.abono/100),pabono:formulario.opepesos*(formulario.abono/100)})
        const codigoProducto = Proveedor
            .flatMap(proveedor => proveedor.producto)
            .find(producto => producto.nombre === opcionSeleccionada.Producto)?.codigo;

        
        let operaciondolar=formulario.opeusd+(opcionSeleccionada.Cantidad*opcionSeleccionada.ValorDolar)
        let operacionpesos=operaciondolar*formulario.vdolar
         setform(prevState => ({
            ...prevState,
            productos: [...prevState.productos, { ...opcionSeleccionada, Codigo: codigoProducto }],opeusd:operaciondolar,opepesos:operacionpesos
        }));

        setOpcionSeleccionada({ Proveedor: "", Producto: "", Cantidad: "", ValorDolar: "", Codigo: "" })
        setShowModal(!showModal);
    }
    return (
        <div className='bloque-agregarproducto'>
            <div className='elment-boton-agregarproducto'>

                <button className="modifier-agregar-productos" onClick={handleModal}>Agregar Productos</button>
            </div>

            <Modal showModal={showModal} closeModal={handleModal}>
                <div>
             
                    <h3>Agregar Proveedor y Producto</h3>
                    <br/>
                    <hr />
                    <Selectform
                        opciones={proveedoresObjeto}
                        name="Proveedor"
                        titulo="Proveedor"
                        opcionSeleccionada={opcionSeleccionada}
                        setOpcionSeleccionada={setOpcionSeleccionada}
                        setproductos={setproductos}
                        Productos={Proveedor}
                    />
                    <br />
                    <Selectform
                        name="Producto"
                        opciones={productos}
                        titulo="Producto"
                        opcionSeleccionada={opcionSeleccionada}
                        setOpcionSeleccionada={setOpcionSeleccionada} />
                    <br />
                    <Inputform
                        titulo='Cantidad'
                        name='Cantidad'
                        type='Number'
                        value={opcionSeleccionada.Cantidad.toLocaleString('es-CL')}
                        setform={setOpcionSeleccionada}
                        formulario={opcionSeleccionada}
                    />
                    <br />
                    <Inputform
                        titulo='Precio Dolar'
                        name='ValorDolar'
                        type='Number'
                        value={opcionSeleccionada.ValorDolar.toLocaleString('es-CL')}
                        setform={setOpcionSeleccionada}
                        formulario={opcionSeleccionada}
                    />
                    <br />
                    <div className='bloque-acciones'>
                        <button className="element-boton cerrar" onClick={handleModal}>Cerrar</button>
                        <button className="element-boton agregar" onClick={handleadd}>Agregar</button>

                    </div>
                </div>
            </Modal>
        </div>
    )
}

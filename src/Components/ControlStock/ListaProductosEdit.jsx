import React, { useState } from 'react'
import { Modal } from '../Modal';
import { ListaEdicion } from './EdicionProducto';
import { IngresarStock } from './IngresarStock';

export const TablaProductosEdit = ({ Productos, setProductos }) => {
    const [showModalmodificar, setShowModalmodificar] = useState(false);
    const [showModaldetalles, setShowModaldetalles] = useState(false);
    const [modalItem, setModalItem] = useState(null);
    const [posicion, setposicion] = useState('')

    const handleModalmodificar = (item,index) => {
        if (showModalmodificar === false) {
            setModalItem(item)
        } else {
            setModalItem(null);
        }
        setposicion(index);
        setShowModalmodificar(!showModalmodificar);
    };
    const handleModaldetalles = (item,index) => {
        if (showModaldetalles === false) {
            setModalItem(item)
        } else {
            setModalItem(null);
        }
        setposicion(index);
        setShowModaldetalles(!showModaldetalles);
    };

    let handleeliminar=(index)=>{

        let lista=[...Productos];
        lista.splice(index, 1);
        setProductos(lista)
    }

    return (
        <div>

            <table className='Tablaproducto'>
                <thead>
                    <tr>
                        <td>Codigo</td>
                        <td>Nombre</td>
                        <td>Stock en Transito</td>
                        <td>Stock Disponible</td>
                        <td>Familia</td>
                        <td>Detalles</td>
                        <td>Ingresar Stock</td>
                        <td>eliminar</td>
                    </tr>
                </thead>
                <tbody>

                    {Productos?.map((item, index) => (
                        <tr key={index}>
                            <td>{item.codigo}</td>
                            <td>{item.nombre}</td>
                            <td>{item.stocktransito}</td>
                            <td>{item.stock}</td>
                            <td>{item.familia}</td>
                            <td><img onClick={() => handleModaldetalles(item,index)} src='https://res.cloudinary.com/dgi90lgbq/image/upload/v1707088600/w5qf1ic1jlz0jctrvshx.png' alt='logo detalles' width={"25px"} style={{cursor: 'pointer'}}/></td>
                            <td><img onClick={() => handleModalmodificar(item,index)} src='https://res.cloudinary.com/dgi90lgbq/image/upload/v1707088600/uvowjb2taevrvvb2qcdq.png' alt='logo modificar' width={"25px"} style={{cursor: 'pointer'}}/></td>
                            <td><img onClick={() =>handleeliminar(index)} src='https://res.cloudinary.com/dgi90lgbq/image/upload/v1707088600/npprklizofvutpbdflwz.png' alt='logo eliminar' width={"25px"} style={{cursor: 'pointer'}}/></td>


                        </tr>
                    ))}

                </tbody>
            </table>
            <Modal showModal={showModaldetalles} closeModal={handleModaldetalles}>
                <ListaEdicion
                    item={modalItem}
                    EditProductos={setModalItem}
                    handleModaldetalles={handleModaldetalles}
                    posicion={posicion} 
                    Productos={Productos}
                    setProducto={setProductos}
                    />
            </Modal>

            <Modal showModal={showModalmodificar} closeModal={handleModalmodificar}>
                <IngresarStock
                    item={modalItem}
                    handleModal={handleModalmodificar}
                    posicion={posicion}
                    Productos={Productos}
                    setProductos={setProductos}
                />
            </Modal>
        </div>
    )
}

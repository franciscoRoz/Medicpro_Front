import React, { useState } from 'react'
import { Modal } from '../Modal';
import { ModificarEstado } from './ModificarEstado';
import { SubirDocumentos } from './SubirDocumentos';



export const TablaSeguimiento = ({ Adquisiciones,setadquisiciones }) => {

    const [showModal, setShowModal] = useState(false);
    const [showModaldocumento, setShowModaldocumento] = useState(false);
    const [modalItem, setModalItem] = useState(null);
    const [posicion, setposicion] = useState('')
  
    const handleModal = (item) => {
        if (showModal === false) {
            setModalItem(item)
        } else {
            setModalItem(null);
        }
        setShowModal(!showModal);
    };
    const handleModaldocumento = (item,index) => {
        if (showModal === false) {
            setModalItem(item)
            setposicion(index)
        } else {
            setModalItem(null);
        }
        setShowModaldocumento(!showModaldocumento);
    };

    return (
        <>

            <table className='Tablaproducto'>
                <thead>
                    <tr>
                        <td>Numero Operacion</td>
                        <td>Tipo Operacion</td>
                        <td>PI</td>
                        <td>Fecha</td>
                        <td>Total Operacion USD</td>
                        <td>Total Operacion Pesos</td>
                        <td>Estado</td>
                        <td>Actualizar Estado</td>
                        <td>Documentos</td>
                    </tr>
                </thead>
                <tbody>

                    {Adquisiciones?.map((item, index) => (
                        <tr key={index}>
                            <td>{item.noperacion}</td>
                            <td>{item.toperacion}</td>
                            <td>{item.pi}</td>
                            <td>{item.fecha}</td>
                            <td>{item.opeusd}</td>
                            <td>{item.opepesos}</td>
                            <td>{item.estado}</td>
                            <td><img onClick={() => handleModal(item)} src="https://res.cloudinary.com/dgi90lgbq/image/upload/v1707178303/mbkgvqp4evhafpftjdyr.png" alt="icono actualizar" width={"30px"} /></td>
                            <td> <img onClick={() =>handleModaldocumento(item,index)} src="https://res.cloudinary.com/dgi90lgbq/image/upload/v1707566776/msk2anyl7kachkqz7lgd.png" alt="imagen de documentos" width={"30px"}/></td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <Modal showModal={showModal} closeModal={handleModal} >
                <ModificarEstado
                    adquisicion={modalItem}
                    setadquisicion={setModalItem}
                    handleModal={handleModal}
                     />
            </Modal>
            <Modal showModal={showModaldocumento} closeModal={handleModaldocumento}>
                <SubirDocumentos item={modalItem} Adquisiciones={Adquisiciones} setadquisiciones={setadquisiciones} index={posicion} handleModaldocumento={handleModaldocumento} />
            </Modal>

        </>
    )
}

import React, { useState } from 'react'
import { Modal } from '../Modal'
import { DragAndDrop } from '../VentasYFacturas/DragAndDrop';
import { SetURL } from '../../Helpers/SetURL';
import { url } from '../../Url';

export const SubirDocumentos = ({ item, Adquisiciones, setadquisiciones,index ,handleModaldocumento}) => {
  const [showModal, setShowModal] = useState(false);
  const [indexdocumento, setindexdocumento] = useState()
 

  const handleModal = (index) => {
 
    setindexdocumento(index)
    setShowModal(!showModal);
  };
let handledownloadfile=(nombre)=>{
 
    console.log(`${url}/SYSTEM/Downloadfile/${nombre}`);
  
    window.location.href = `${url}/SYSTEM/Downloadfile/${nombre}`;
}

  return (
    <div className='bloque-dubirdocumentos'>
      <h3>Documentos</h3>
      <hr />
      <table className='element-tabla'>

        <tbody>
          {item?.documentos?.map((documento, index) => (
            <tr key={index}>
              <td>{documento.titulo}</td>
              {documento.nombre === "" ? <td><img style={{cursor: 'pointer',margin:'5px 50px 5px 50px'}} onClick={() => handleModal(index)} src="https://res.cloudinary.com/dgi90lgbq/image/upload/v1707758619/pwd8nqsfmzaxazd3s2sd.png" alt="imagen de subir" width={'40px'} /></td> : <td><span onClick={()=>handledownloadfile(documento.nombre)} className='modifier-documento'>{documento.nombre}</span></td>}
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'flex-end' }}>
                    <button onClick={()=>handleModaldocumento()} className='element-boton cerrar'>Cerrar</button>
                  
                </div>
      <Modal showModal={showModal} closeModal={handleModal}>
        <DragAndDrop
          indexdocumento={indexdocumento}
          index={index}
          Adquisiciones={Adquisiciones}
          setadquisiciones={setadquisiciones}
          handleModal={handleModal} />
      </Modal>
    </div>
  )
}

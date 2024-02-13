import React, { useState } from 'react';
import { UploadFile } from '../../Helpers/UploadFile';
export const DragAndDropOrdenCompra = ({Adquisiciones,setadquisiciones,handleModal,ordencompra}) => {
    
    const [dragging, setDragging] = useState(false);
    const [upload, setupload] = useState(false)
    const [nameFile, setnameFile] = useState('')
    const handleDragOver = (e) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = () => {
        setDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragging(false);
        const files = Array.from(e.dataTransfer.files);
        setnameFile(files[0].name)
        setupload(!upload)
        if (!files) {
            console.log('No se subio archivo');
            return
        }
        UploadFile(files)
        console.log(files);
    };
    let handlesave=()=>{

        
        const nuevasAdquisiciones = {...Adquisiciones};
        nuevasAdquisiciones.adjunto.Url=ordencompra;
        nuevasAdquisiciones.adjunto.Documento=nameFile;
        
        setadquisiciones(nuevasAdquisiciones)
        handleModal()

        
    }

    return (
        <>
            {upload ? <div

                style={{
                    border: `2px dashed 'gray'}`,
                    padding: '20px',
                    borderRadius: '10px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    width: '600px',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >

                <img src="https://res.cloudinary.com/dgi90lgbq/image/upload/v1707789865/scbd22bvij00rkiec25v.png" alt="Icono PDF" width={'100px'} />
                <span>{nameFile}</span>
                <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                    <button onClick={handleModal} className='element-boton cerrar'>Cerrar</button>
                    <button onClick={handlesave} className='element-boton guardar'>Guardar</button>
                </div>

            </div> : <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                style={{
                    border: `2px dashed ${dragging ? 'blue' : 'gray'}`,
                    padding: '20px',
                    borderRadius: '10px',
                    textAlign: 'center',
                    cursor: 'pointer'
                }}
            >
                <h2>Arrastra y suelta archivos aquí</h2>

            </div>}

        </>
    );
}


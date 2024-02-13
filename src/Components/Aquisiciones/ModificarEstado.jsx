import React from 'react'
import { DetalleSeguimiento } from './DetalleSeguimiento';

import "../../CSS/Seguimiento.css"
import { UpdateAdquisicion } from '../../Helpers/UpdateAdquisicion';

const Selectform = ({ opciones, titulo, opcionSeleccionada, setOpcionSeleccionada, name }) => {

    const handleChange = (e) => {
        setOpcionSeleccionada({ ...opcionSeleccionada, [name]: e.target.value });
    };

    return (
        <div className='element-input'>
            <label htmlFor="miSelect" className='modifier-select-seguimiento'>{titulo}</label>
            <select className='modifier-input' id="miSelect" value={opcionSeleccionada.estado} onChange={handleChange}>
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

export const ModificarEstado = ({ adquisicion, setadquisicion,handleModal }) => {

    let handleSubmit=()=>{
        UpdateAdquisicion(adquisicion)
        handleModal()
        console.log(adquisicion);
        window.location.reload();
    }
    return (
        <div className='bloque-detalle-seguimiento'>
            <div className='elemento-seguimiento'>
                <h3>Ingreso de Stock</h3>
                <Selectform opciones={{ Pendiente: "Pendiente", Pagado: "Pagado", Transito: "Transito", Arrivado: "Arrivado", Ingresado: "Ingresado", Cerrado: "Cerrado" }}
                    titulo="Estado"
                    name="estado"
                    opcionSeleccionada={adquisicion}
                    setOpcionSeleccionada={setadquisicion}
                />
                <button onClick={handleSubmit} className='modifier-botton guardar'>Guardar</button>
            </div>
            <hr />
            <br />
            <DetalleSeguimiento
                adquisicion={adquisicion}
                setadquisicion={setadquisicion} />
        </div>
    )
}

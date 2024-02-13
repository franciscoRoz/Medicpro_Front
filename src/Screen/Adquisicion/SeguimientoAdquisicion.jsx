import React, { useEffect, useState } from 'react'
import { TablaSeguimiento } from '../../Components/Aquisiciones/TablaSeguimiento'
import { useGetAdquisiciones } from '../../Hooks/useGetAdquisiciones';

import "../../CSS/Seguimiento.css"

export const SeguimientoAdquisicion = () => {

    const [adquisiciones, setadquisiciones] = useState()
    const { data, loading } = useGetAdquisiciones();
    useEffect(() => {
        
        if (!loading) {
            setadquisiciones(data);
        }
    }, [data, loading]);

    return (
        <>{loading ? (<p>cargando</p>) : (<div className='bloque-render'>
            <h2>Seguimiento de Adquisiciones</h2>
            <hr />
            <br />
            <TablaSeguimiento
                Adquisiciones={adquisiciones} 
                setadquisiciones={setadquisiciones}/>
        </div>)}</>
    )
}

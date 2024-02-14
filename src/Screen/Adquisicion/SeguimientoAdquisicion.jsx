import React, { useEffect, useState } from 'react'
import { TablaSeguimiento } from '../../Components/Aquisiciones/TablaSeguimiento'
import { useGetAdquisiciones } from '../../Hooks/useGetAdquisiciones';

import "../../CSS/Seguimiento.css"
import { LoadingSpinner } from '../../Components/Spiner';

export const SeguimientoAdquisicion = () => {

    const [adquisiciones, setadquisiciones] = useState()
    const { data, loading } = useGetAdquisiciones();
    useEffect(() => {
        
        if (!loading) {
            setadquisiciones(data);
        }
    }, [data, loading]);

    return (
        <>{loading ? (<LoadingSpinner/>) : (<div className='bloque-render'>
            <h2>Seguimiento de Adquisiciones</h2>
            <hr />
            <br />
            <TablaSeguimiento
                Adquisiciones={adquisiciones} 
                setadquisiciones={setadquisiciones}/>
        </div>)}</>
    )
}

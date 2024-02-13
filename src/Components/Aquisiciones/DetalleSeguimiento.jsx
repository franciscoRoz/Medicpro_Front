import React, { useEffect, useState } from 'react'
import { formatNumber } from '../../Utility/formarnumber';

const Selectform = ({ opciones, titulo, opcionSeleccionada, setOpcionSeleccionada, name,posicion=0 }) => {

    const handleChange = (e) => {
        const nuevoObjetoCompleto = {
            ...opcionSeleccionada,
            abonos: opcionSeleccionada.abonos.map((abono, currentIndex) => {
                if (currentIndex === posicion) {
                    return { ...abono, [name]: e.target.value }
                }
                return abono;
            })
        };       
        return setOpcionSeleccionada(nuevoObjetoCompleto)
        
    }; 
    
    return (
        <div className='element-input'>
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

let Inputform = ({ name, type, value, setform, formulario, Disabled = false, types = '', posicion = 0 ,calcularPromedioVdolar}) => {

    const handleChange = (e) => {
        

        const { name, value } = e.target;

        if (types === 'abonos') {
            calcularPromedioVdolar()
            const nuevoObjetoCompleto = {
                ...formulario,
                abonos: formulario.abonos.map((abono, currentIndex) => {
                    if (currentIndex === posicion) {
                        if (name === 'abono') {
                            return { ...abono, [name]: value, pabono: formulario.opepesos * (value / 100), pabonousd: formulario.opeusd * (value / 100) }
                        }
                        return { ...abono, [name]: value }
                    }
                    return abono;
                })
            };
            const sumaAbonos = nuevoObjetoCompleto.abonos.reduce((suma, abono) => suma + parseInt(abono.abono), 0);
           
            return sumaAbonos <=100 ||isNaN(sumaAbonos)?setform(nuevoObjetoCompleto):console.log("ingresa mas del 100%")
        }

        const nuevoObjetoCompleto = { ...formulario, envio: { ...formulario.envio, [name]: value} };
        
        setform(nuevoObjetoCompleto);


    };


    return (
        < >
            <input className='modifier-input adquisiciones'
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                disabled={Disabled}
            />
        </>)
}

export const DetalleSeguimiento = ({ adquisicion, setadquisicion }) => {

    const [rowsabono, setrowsabono] = useState('')
    const [dolarpromedio, setdolarpromedio] = useState('')


    const calcularPromedioVdolar = () => {
        let totalVdolar = 0;
        adquisicion.abonos.forEach((abono) => {
            totalVdolar += parseFloat(abono.vdolar || 0);
        });
        return setdolarpromedio(totalVdolar / adquisicion.abonos.length);
    };

    const contarObjetosAbonos = () => {

        return setrowsabono(adquisicion.abonos.length);
    };

    useEffect(() => {
        calcularPromedioVdolar()
        contarObjetosAbonos()
        return () => {

        }
    }, [])
    let handleagregar = () => {
        const productosActualizados = [...adquisicion.abonos];
        const ultimoAbono = productosActualizados[productosActualizados.length - 1];
        //Validacion de item vacio antes de agregar otro
        const ultimoAbonoVacio = Object.values(ultimoAbono).every(value => value === "");
        if (ultimoAbonoVacio) {
            return console.log("El último abono está vacío.");
        }

        productosActualizados.push({
            abono: "",
            fecha: "",
            pabono: "",
            pabonousd: "",
            banco: "",
            swift: "",
            cae: "",
            vdolar: "",
        });
        setadquisicion({
            ...adquisicion,
            abonos: productosActualizados
        });
        contarObjetosAbonos()

    }
    return (
        <div >
            <table className='Tablaproducto'>
                <thead>
                    <tr>
                        <td>Numero Operacion</td>
                        <td>Tipo Operacion</td>
                        <td>PI</td>
                        <td>Fecha</td>
                        <td>Valor Dolar Promedio</td>
                        <td>Total USD</td>
                        <td>Total Pesos</td>

                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td>{adquisicion.noperacion}</td>
                        <td>{adquisicion.toperacion}</td>
                        <td>{adquisicion.pi}</td>
                        <td>{adquisicion.fecha}</td>
                        <td>{formatNumber(dolarpromedio)}</td>
                        <td>{formatNumber(adquisicion.opeusd)}</td>
                        <td>{formatNumber(adquisicion.opepesos)}</td>
                    </tr>

                </tbody>
            </table>
            <div className='modifier-separador'><span>Datos de Envio </span></div>
            <table className='Tablaproducto'>
                <thead>
                    <tr>
                        <td>Shipping</td>
                        <td>Dolar Shipping</td>
                        <td>Pesos Shipping</td>
                        <td>Fecha Embarque</td>
                        <td>Fecha Arribo</td>
                        <td>Numero Aprov</td>
                        <td>Gastos</td>

                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td><Inputform name='shipping'
                            type='text'
                            value={adquisicion.envio.shipping}
                            setform={setadquisicion}
                            formulario={adquisicion} /></td>
                        <td><Inputform name='dolarshipping'
                            type='text'
                            value={formatNumber(adquisicion.envio.dolarshipping)}
                            setform={setadquisicion}
                            formulario={adquisicion} /></td>
                        <td><Inputform name='pesosshipping'
                            type='text'
                            value={formatNumber(adquisicion.envio.pesosshipping)}
                            setform={setadquisicion}
                            formulario={adquisicion} /></td>
                        <td><Inputform name='fechaembarque'
                            type='date'
                            value={adquisicion.envio.fechaembarque}
                            setform={setadquisicion}
                            formulario={adquisicion} /></td>
                        <td><Inputform name='fechaarribo'
                            type='date'
                            value={adquisicion.envio.fechaarribo}
                            setform={setadquisicion}
                            formulario={adquisicion} /></td>
                        <td><Inputform name='numeroaprv'
                            type='text'
                            value={adquisicion.envio.numeroaprv}
                            setform={setadquisicion}
                            formulario={adquisicion} /></td>
                        <td><Inputform name='gastos'
                            type='Number'
                            value={formatNumber(adquisicion.envio.gastos)}
                            setform={setadquisicion}
                            formulario={adquisicion} /></td>
                    </tr>

                </tbody>
                <thead>
                    <tr>
                        <td>THC</td>
                        <td>N° Asignacion</td>
                        <td>Total Pesos Transporte</td>
                        <td>Valor Pesos Aduana</td>
                        <td>Fecha de Cierre</td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td><Inputform name='thc'
                            type='text'
                            value={adquisicion.envio.thc}
                            setform={setadquisicion}
                            formulario={adquisicion} /></td>
                        <td><Inputform name='nasignacion'
                            type='text'
                            value={adquisicion.envio.nasignacion}
                            setform={setadquisicion}
                            formulario={adquisicion} /></td>
                        <td><Inputform name='totalpesostransporte'
                            type='text'
                            value={formatNumber(adquisicion.envio.totalpesostransporte)}
                            setform={setadquisicion}
                            formulario={adquisicion} /></td>
                        <td><Inputform name='valoraduana'
                            type='text'
                            value={formatNumber(adquisicion.envio.valoraduana)}
                            setform={setadquisicion}
                            formulario={adquisicion} /></td>
                        <td><Inputform name='fechacierre'
                            type='date'
                            value={adquisicion.envio.fechacierre}
                            setform={setadquisicion}
                            formulario={adquisicion} /></td>
                    </tr>

                </tbody>
            </table>
            <div className='modifier-separador'><span>Pagos Parciales</span><button onClick={handleagregar} className='modifier-botton agregar'>Agregar</button></div>
            <table className='Tablaproducto'>
                <thead>
                    <tr>
                        <td>Fecha Operacion</td>
                        <td>Valor Dolar</td>
                        <td>Porcentaje</td>
                        <td>Abono Dolar</td>
                        <td>Abono Pesos</td>
                        <td>Banco</td>
                        <td>Comsion Banco</td>
                        <td>SWIFT</td>
                    </tr>
                </thead>
                <tbody>
                    {adquisicion?.abonos?.map((item, index) => (
                        <tr key={index}>
                            {index !== rowsabono ?
                                <>
                                    <td>{item.fecha}</td>
                                    <td>{formatNumber(item.vdolar)}</td>
                                    <td>{item.abono}%</td>
                                    <td>{formatNumber(item.pabonousd)}</td>
                                    <td>{formatNumber(item.pabono)}</td>

                                    <td>{item.banco}</td>
                                    <td>{item.cae}</td>
                                    <td>{item.swift}</td></>
                                : <>
                                    <td><Inputform
                                        name='fecha'
                                        type='date'
                                        value={item.fecha}
                                        setform={setadquisicion}
                                        formulario={adquisicion}
                                        types='abonos'
                                        posicion={index} 
                                        calcularPromedioVdolar={calcularPromedioVdolar}/></td>
                                    <td><Inputform
                                        name='vdolar'
                                        type='number'
                                        value={item.vdolar}
                                        setform={setadquisicion}
                                        formulario={adquisicion}
                                        types='abonos'
                                        posicion={index} 
                                        calcularPromedioVdolar={calcularPromedioVdolar}/></td>
                                    <td><Inputform
                                        name='abono'
                                        type='number'
                                        value={item.abono}
                                        setform={setadquisicion}
                                        formulario={adquisicion}
                                        types='abonos'
                                        posicion={index}
                                        calcularPromedioVdolar={calcularPromedioVdolar} /></td>
                                    <td><Inputform
                                        name='pabonousd'
                                        type='text'
                                        Disabled={true}
                                        value={formatNumber(item.pabonousd)}
                                        calcularPromedioVdolar={calcularPromedioVdolar} /></td>
                                    <td><Inputform
                                        name='pabono'
                                        type='text'
                                        Disabled={true}
                                        value={formatNumber(item.pabono)}
                                        calcularPromedioVdolar={calcularPromedioVdolar} /></td>

                                    <td><Selectform
                        name="Producto"
                        opciones={{ Santander: "Santander" }}
                        titulo="Producto"
                        opcionSeleccionada={adquisicion}
                        setOpcionSeleccionada={setadquisicion} />{item.banco}</td>
                                    <td><Inputform
                                        name='cae'
                                        type='number'
                                        value={item.cae}
                                        setform={setadquisicion}
                                        formulario={adquisicion}
                                        types='abonos'
                                        posicion={index} 
                                        calcularPromedioVdolar={calcularPromedioVdolar}/></td>
                                    <td><Inputform
                                        name='swift'
                                        type='text'
                                        value={item.swift}
                                        setform={setadquisicion}
                                        formulario={adquisicion}
                                        types='abonos'
                                        posicion={index} 
                                        calcularPromedioVdolar={calcularPromedioVdolar}/></td></>}</tr>

                    ))}
                </tbody>
            </table>
            <div className='modifier-separador'><span>Productos</span></div>
            <table className='Tablaproducto'>
                <thead>
                    <tr>
                        <td>Proveedor</td>
                        <td>Producto</td>
                        <td>Cantidad</td>
                        <td>Valor Dolar</td>
                        <td>Valor Pesos</td>
                    </tr>
                </thead>
                <tbody>
                    {adquisicion?.productos?.map((item, index) => (
                        <tr key={index}>
                            <td>{item.Proveedor}</td>
                            <td>{item.Producto}</td>
                            <td>{item.Cantidad}</td>
                            <td>{formatNumber(item.ValorDolar)}</td>
                            <td>{formatNumber(item.ValorDolar)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

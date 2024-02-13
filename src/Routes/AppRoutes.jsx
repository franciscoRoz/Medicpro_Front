import { Route, Routes } from 'react-router-dom'


import { Adquisicion } from '../Screen/Adquisicion/AdquisicionAsia.jsx'
import { AdquisicionAmerica } from '../Screen/Adquisicion/AdquisicionAmerica.jsx'
import { ListaProductos } from '../Screen/ControlStock/ListaProductos.jsx'
import { ListaProductosEdit } from '../Screen/ControlStock/ListaProductosEdit.jsx'
import { SeguimientoAdquisicion } from '../Screen/Adquisicion/SeguimientoAdquisicion.jsx'
import { IngresarVenta } from '../Screen/VentasyFacturas/IngresarVenta.jsx'
import { ListadeOrdenCompra } from '../Screen/VentasyFacturas/ListadeOrdenCompra.jsx'

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/*' element={<Adquisicion/>}/>
        <Route path='/Generaradquisicionasia' element={<Adquisicion/>}/>
        <Route path="/GeneraradquisicionAmerica" element={<AdquisicionAmerica/>}/>
        <Route path="/ListaProductos" element={<ListaProductos/>}/>
        <Route path="/ManejodeStock" element={<ListaProductosEdit/>}/>
        <Route path='/SeguimientoPedidos' element={<SeguimientoAdquisicion/>}/>
        <Route path='/IngresoVentas' element={<IngresarVenta/>}/>
        <Route path='/Adm.deFacturas' element={<ListadeOrdenCompra/>}/>
        
        <Route path='/paginaError' element={<AdquisicionAmerica/>}/>
        
    </Routes>
  )
}

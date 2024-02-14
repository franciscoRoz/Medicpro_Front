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
        <Route path='/*' element={<ListaProductos/>}/>
        <Route path='/Generar-adquisicion-asia' element={<Adquisicion/>}/>
        <Route path="/Generar-adquisicion-America" element={<AdquisicionAmerica/>}/>
        <Route path="/Lista-Productos" element={<ListaProductos/>}/>
        <Route path="/Manejo-de-Stock" element={<ListaProductosEdit/>}/>
        <Route path='/Seguimiento-Pedidos' element={<SeguimientoAdquisicion/>}/>
        <Route path='/Ingreso-Ventas' element={<IngresarVenta/>}/>
        <Route path='/Adm.-de-Facturas' element={<ListadeOrdenCompra/>}/>
        
        <Route path='*/paginaError' element={<AdquisicionAmerica/>}/>
        
    </Routes>
  )
}

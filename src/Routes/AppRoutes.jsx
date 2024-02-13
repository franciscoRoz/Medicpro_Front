import React from 'react'
import { Route, Routes } from 'react-router-dom'
import  App  from '../App.js'


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
        <Route path='/*' element={<App/>}/>
        <Route path='/Medicpro_Front/Generar-adquisicion-asia' element={<Adquisicion/>}/>
        <Route path="/Medicpro_Front/Generar-adquisicion-America" element={<AdquisicionAmerica/>}/>
        <Route path="/Medicpro_Front/Lista-Productos" element={<ListaProductos/>}/>
        <Route path="/Medicpro_Front/Manejo-de-Stock" element={<ListaProductosEdit/>}/>
        <Route path='/Medicpro_Front/Seguimiento-Pedidos' element={<SeguimientoAdquisicion/>}/>
        <Route path='/Medicpro_Front/Ingreso-Ventas' element={<IngresarVenta/>}/>
        <Route path='/Medicpro_Front/Adm.-de-Facturas' element={<ListadeOrdenCompra/>}/>
        
        <Route path='/Medicpro_Front/paginaError' element={<App/>}/>
        
    </Routes>
  )
}

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {AppRoutes} from './Routes/AppRoutes.jsx'
import { BrowserRouter } from 'react-router-dom';
import {Sidebar} from './Components/SideBar.jsx'
//import { HashRouter } from 'react-router-dom';
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';
import App from './App.js';
import { Adquisicion } from './Screen/Adquisicion/AdquisicionAsia.jsx';
import { AdquisicionAmerica } from './Screen/Adquisicion/AdquisicionAmerica.jsx';
import { ListaProductos } from './Screen/ControlStock/ListaProductos.jsx';
import { ListaProductosEdit } from './Screen/ControlStock/ListaProductosEdit.jsx';
import { SeguimientoAdquisicion } from './Screen/Adquisicion/SeguimientoAdquisicion.jsx';
import { ListadeOrdenCompra } from './Screen/VentasyFacturas/ListadeOrdenCompra.jsx';
import { IngresarVenta } from './Screen/VentasyFacturas/IngresarVenta.jsx';
const router = createHashRouter([
        { path:'/*' ,element:<App/>},
        { path:'/Generar-adquisicion-asia' ,element:<Adquisicion/>},
        { path:"/Generar-adquisicion-America" ,element:<AdquisicionAmerica/>},
        { path:"/Lista-Productos" ,element:<ListaProductos/>},
        { path:"/Manejo-de-Stock" ,element:<ListaProductosEdit/>},
        { path:'/Seguimiento-Pedidos',element:<SeguimientoAdquisicion/>},
        { path:'/Ingreso-Ventas' ,element:<IngresarVenta/>},
        { path:'/Adm.-de-Facturas' ,element:<ListadeOrdenCompra/>},
        
        { path:'/paginaError' ,element:<App/>},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
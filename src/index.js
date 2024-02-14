import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { AppRoutes } from './Routes/AppRoutes'
import { BrowserRouter, Link } from 'react-router-dom';
import { Sidebar } from './Components/SideBar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    
    <BrowserRouter>
    <Link to="/Generaradquisicionasia">boton para ir a adquisicion</Link>
    <AppRoutes />
    </BrowserRouter>
  
  </React.StrictMode>
);
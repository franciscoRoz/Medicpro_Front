import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import {AppRoutes} from './Routes/AppRoutes'
import { BrowserRouter } from 'react-router-dom';
import {Sidebar} from './Components/SideBar'
//import { HashRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Sidebar/>
   
    <BrowserRouter>
    
    <div className='bloque-layout'><AppRoutes /></div>
    </BrowserRouter>
  
  </React.StrictMode>,
);


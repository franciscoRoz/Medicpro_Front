import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {AppRoutes} from './Routes/AppRoutes.jsx'
//import { BrowserRouter } from 'react-router-dom';
import {Sidebar} from './Components/SideBar.jsx'
import { HashRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
   
   
    <HashRouter>
    <Sidebar/>
    <div className='bloque-layout'><AppRoutes /></div>
    </HashRouter>
  
  //h</React.StrictMode>
);


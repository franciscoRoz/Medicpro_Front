import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoutes from './Routes/AppRoutes.jsx'
import { Header } from './Components/Header';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <BrowserRouter>
    <AppRoutes />
    </BrowserRouter>
  
  </React.StrictMode>
);


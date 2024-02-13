import React, { useState } from 'react'
import { TablaProductos } from '../../Components/ControlStock/ListaProductos'
import { useEffect } from 'react';

import "../../CSS/ListaProductos.css"
export const ListaProductos = () => {

  const [productos, setProductos] = useState([
    {codigo: "TIA3X6", nombre: "Alcohol pad 3x6cm", familia: "Medicpro", descripcion: "TOALLITA IMPREGNADA DE ALCOHOL AL 70%", nota: "CAJA 100 SACHETS", precioneto: "5", stock: 100000, stocktransito: 100},
    {codigo: "ALGODON HIDROFILO KILO", nombre: "ALGODON HIDROFILO KILO", familia: "Medicpro", descripcion: "ALGODON HIDROFILO KILO", nota: "ALGODON HIDROFILO KILO", precioneto: 2002, stocktransito: 1542, stockn: 100},
    {codigo: "GNTE75X75", nombre: "GASA NO TEJIDA ESTÉRIL 7,5 X 7,5 CM", familia: "Medicpro", descripcion: "GASA NO TEJIDA ESTÉRIL 7,5 X 7,5 CM", nota: "CAJAS POR 2000 UNIDADES", precioneto: 14, stock: 100000, stocktransito: 100},
    {codigo: "YSMMS60-75", nombre: "ENVOLTURA SMMS POLIPROPILENO 60 GR 75X75 CM", familia: "STERIPRO", descripcion: "ENVOLTURA SMMS 60 GR 75X75 CM", nota: "CAJAS X 250", precioneto: 103, stock: 10430, stocktransito: 1100}
  ]);

  const [filtroNombre, setFiltroNombre] = useState('');
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  useEffect(() => {
    setProductosFiltrados(productos);
  }, [productos]);



  const filtrarPorNombre = (nombre) => {
    const productosFiltrados = productos.filter(producto =>
      producto.nombre.toLowerCase().includes(nombre.toLowerCase())
    );
    setProductosFiltrados(productosFiltrados);
  };


  return (
    <div className='bloque-render'>
      <h2>Lista de Productos</h2>
      <hr />
      <br />
      <div className='bloque-filtro-productos'>
        <label className='element-input'>
          <div className='modifier-buscar'>Buscar </div>
          <input className='modifier-input'
            type="text"
            name="buscar"
            value={filtroNombre}
            placeholder='Busca por nombre de productos'
            onChange={(e) => {
              setFiltroNombre(e.target.value);
              filtrarPorNombre(e.target.value);
            }}
          />
        </label>
      </div>
      <TablaProductos
        Productos={productosFiltrados} />
    </div>
  )
}

import React, { useState } from 'react'
import { Modal } from '../../Components/Modal';
import { TablaProductosVenta } from '../../Components/VentasYFacturas/TablaProductosVenta';
import { AgregarProductos } from '../../Components/VentasYFacturas/AgregarProductos';
import { DragAndDropOrdenCompra } from '../../Components/VentasYFacturas/DragAndDropIngresoCompra';

import "../../CSS/VentasyFacturas.css"



const Selectform = ({ opciones, titulo, form, setform, name }) => {

  const handleChange = (e) => {
    setform({ ...form, [name]: e.target.value });
  };

  return (
    <div className='element-input'>
      <label htmlFor="miSelect" className='modifier-select-seguimiento'>{titulo}</label>
      <select className='modifier-input' id="miSelect" value={form.estado} onChange={handleChange}>
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

let Inputform = ({ titulo, name, type, value, setform, formulario, Disabled = false }) => {

  const handleChange = (e) => {
      const { name, value } = e.target;
      setform({ ...formulario, [name]: value ,pabonousd:formulario.opeusd*(formulario.abono/100),pabono:formulario.opepesos*(formulario.abono/100)});
      
  };

  return (
      < >
          <label className='element-input'>

              <div className='modifier-titulo'>{titulo}</div>
              <input className='modifier-input'
                  type={type}
                  name={name}
                  value={value}
                  onChange={handleChange}
                  disabled={Disabled}
              />

          </label>
      </>)
}

export const IngresarVenta = () => {
  const [Modalshow, setModalshow] = useState(false)
  const [Modalshowdocumento, setModalshowdocumento] = useState(false)
  const [OrdenCompra, setOrdenCompra] = useState({cliente:'',vendedor:'',documento:'',ordencompra:'',adjunto:{Documento:'',Url:'',Nombre:''},Productos:[]})

  let Clientes = { "MUNICIPALIDAD DE CUNCO": "MUNICIPALIDAD DE CUNCO",  "Alejandro Hip Hernández": "Alejandro Hip Hernández", "ALMAVET SPA" : "ALMAVET SPA" }
  
  let Vendedores={"pablo pasten Ch":"pablo pasten Ch","paola pasten Ch":"paola pasten Ch"}

  let TipoDocumento={'Orden de Compra':"Orden de Compra","Boleta":"Boleta","Sin Documentos":"Sin Documentos"}
  let productos = [
    { codigo: "TIA3X6", nombre: "Alcohol pad 3x6cm", familia: "Medicpro", descripcion: "TOALLITA IMPREGNADA DE ALCOHOL AL 70%", nota: "CAJA 100 SACHETS", precioneto: "5", stock: 100000, stocktransito: 100 },
    { codigo: "ALGODON HIDROFILO KILO", nombre: "ALGODON HIDROFILO KILO", familia: "Medicpro", descripcion: "ALGODON HIDROFILO KILO", nota: "ALGODON HIDROFILO KILO", precioneto: 2002, stocktransito: 1542, stockn: 100 },
    { codigo: "GNTE75X75", nombre: "GASA NO TEJIDA ESTÉRIL 7,5 X 7,5 CM", familia: "Medicpro", descripcion: "GASA NO TEJIDA ESTÉRIL 7,5 X 7,5 CM", nota: "CAJAS POR 2000 UNIDADES", precioneto: 14, stock: 100000, stocktransito: 100 },
    { codigo: "YSMMS60-75", nombre: "ENVOLTURA SMMS POLIPROPILENO 60 GR 75X75 CM", familia: "STERIPRO", descripcion: "ENVOLTURA SMMS 60 GR 75X75 CM", nota: "CAJAS X 250", precioneto: 103, stock: 10430, stocktransito: 1100 }
]
  const handleModal = () => {
  
    setModalshow(!Modalshow);
};
let handleModaldocumento=()=>{
  setModalshowdocumento(!Modalshowdocumento)
}

  return (
    <div className='bloque-render'>
      <h2>Ingreso Orden de Compra</h2>
      <hr />
      <br/>
      <div className='bloque-form-order'>
      <Selectform
opciones={Clientes}
titulo="Seleccion de Cliente"
name='cliente'
form={OrdenCompra}
setform={setOrdenCompra}
/>
<Selectform
opciones={Vendedores}
titulo="Seleccion de Vendedor"
name='vendedor'
form={OrdenCompra}
setform={setOrdenCompra}
/>
<Selectform
opciones={TipoDocumento}
titulo="Tipo Documento"
name='cliente'
form={OrdenCompra}
setform={setOrdenCompra}
/>
<div>
  
<Inputform
titulo='Orden de Compra' 
name='ordencompra' 
type='text' 
value={OrdenCompra.ordencompra}
setform={setOrdenCompra}
formulario={OrdenCompra}
/>



<br/>
<div className='element-subirdocumentos'>
  <span>Adjuntar Documento:</span>
  <img style={{cursor: 'pointer',margin:'5px 50px 5px 50px'}} onClick={handleModaldocumento} src="https://res.cloudinary.com/dgi90lgbq/image/upload/v1707758619/pwd8nqsfmzaxazd3s2sd.png" alt="imagen de subir" width={'40px'} />
  
  </div>

</div>
      </div>

      <br/>
<div>
  <div className='bloque-agregar'> <button className='element-boton agregar' onClick={handleModal}>Agregar Producto</button></div>
  <TablaProductosVenta
  productos={OrdenCompra.Productos}/>
  <Modal showModal={Modalshow} closeModal={handleModal}>
                <AgregarProductos
                 OrdenCompra={OrdenCompra}
                 setOrdenCompra={setOrdenCompra}
                  handleModal={handleModal}
                  productos={productos} />
            </Modal>


            <Modal showModal={Modalshowdocumento} closeModal={handleModaldocumento}>
            <DragAndDropOrdenCompra
          Adquisiciones={OrdenCompra}
          setadquisiciones={setOrdenCompra}
          handleModal={handleModaldocumento} 
          ordencompra={OrdenCompra.ordencompra}/>
            </Modal>
</div>
    </div>
  )
}

import React, { useState } from 'react'
import '../../CSS/Adquisicion.css'
import { FormPedido } from '../../Components/Aquisiciones/FormPedido'


export const AdquisicionAmerica = () => {

  const [formulario, setformulario] = useState({
    noperacion: "",
    fecha: "",
    vdolar: "",
    pi: "",
    opepesos: 0,
    opeusd: 0,
    swift: "",
    toperacion: "",
    banco: "",
    cae: "",
    abono: "",
    pabono: "",
    pabonousd: "",
    productos: []
  })

  let Proveedores = [{ proveedor: "Algotec", producto: [{ nombre: "TORULA ALGODON CHICA", codigo: "TORULA" }, { nombre: "TORULA ALGODON MEDIANA", codigo: "TORULA" }] }, { proveedor: "Jiujiang Huada", producto: [{ nombre: "GASA NO TEJIDA ESTERIL 5X5", codigo: "AGNTE5X5" }, { nombre: "GASA NO TEJIDA ESTERIL 7.5X7.5", codigo: "AGNTE7.5X7.5" }] }]

  return (
    <div className='bloque-render'>
      <h2>Adquisiciones America</h2>
      <hr />
      <br />
      <FormPedido
        formulario={formulario}
        setform={setformulario}
        proveedores={Proveedores} />
    </div>

  )
}

'use client'

import "./pdfgen2.css";
import { formatCurrency } from "../helpers";


export default function PdfGen({ pres }) {
  return (
    <div id="mainTable" className="bg-gray-300 max-w-[900px] w-full m-auto p-2 flex flex-col">
      <div className="flex justify-between py-2 bg-slate-700 text-white">
        <div
          id="membrete"
          className="div8 flex flex-col items-center justify-center p-2 w-2/3"
        >
          <h2 className="text-xl font-bold">Zingueria Don Torcuato</h2>
          <h4 className="text-sm">obras@zingueriadontorcuato.com</h4>
          <h4 className="text-sm">Tel: 11-5308-8311</h4>
        </div>
        <div
          id="Dia"
          className="div1 text-md flex flex-col items-center justify-center font-semibold w-1/3"
        >
          <h2 id="fecha" className="">
            {pres.fecha}
          </h2>
          <h3 id="nPresupuesto" className=" font-normal">
            Presupuesto nº <span className="font-bold">{pres.id}</span>
          </h3>
        </div>
      </div>

      <hr className="my-1" />

      <div className="flex bg-gray-100 py-2 text-sm font-normal">
        <div
          id="cliente"
          className="px-4 div3 flex flex-col justify-center"
        >
          <h2 id="razonSocial" className="font-bold text-2xl">
            {(pres.razonSocial).toUpperCase()}
          </h2>
          <h3 id="razonSocial" className="text-lg">
            CUIT: {pres.cuit}
          </h3>
        </div>
      </div>

      <hr className="my-2" />

      <div className="flex justify-center bg-gray-100 p-1">
        <div id="espacio" className="div4">
          <h2 className="font-bold text-lg">Presupuesto</h2>
        </div>
      </div>

      <div className="bg-gray-100 py-2 px-1">
        <div id="detalle" className="div5 w-full">
          <table className="blueTable">
            <thead>
              <tr>
                <th>Cantidad</th>
                <th>Detalle</th>
              </tr>
            </thead>
            <tbody>
              {pres.detalle.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.cantidad}</td>
                    <td>{item.descripcion}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <hr className="my-2" />
      <div className="bg-slate-700 px-1 py-2 text-white">
        <div id="totales" className="div7 flex justify-between">
          <h4>Subtotal</h4>
          <h3 id="total" className="px-3">
            {formatCurrency(parseInt(pres.subtotal))}
          </h3>
        </div>
      </div>
      <hr className="my-2" />

      <div className="bg-gray-100 py-2 px-1">
        <div id="footer" className="div6 text-sm">
          <p><strong>Notas: </strong>{pres.observaciones}</p>
          <p className="text-xs text-gray-600 italic">
            Presupuesto valido por 7 (siete) dias a partir de la fecha de
            emisión
          </p>
        </div>
      </div>

      <div className="bg-slate-700 px-1 py-2 text-white">
        <div id="totales" className="div7 flex justify-between">
          <h4 className="font-bold">Total</h4>
          <h3 id="total" className="px-3 font-bold ">
            {formatCurrency(parseInt(pres.totalPresupuesto))}
          </h3>
        </div>
      </div>
    </div>
  );
}

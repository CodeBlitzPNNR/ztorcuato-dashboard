"use client";
import { useState } from "react";
import { formatCurrency } from "@/app/helpers";
import "./table.css";

export default function Home() {
  const [envio, setEnvio] = useState(false);
  const [detalle, setDetalle] = useState([]);
  const [total, setTotal] = useState();
  const detalleMock = [
    {
      codigo: 1,
      cantidad: 1,
      detalle: 'La pija',
      precio: 3500,
      impuesto: true,      
    },{
      codigo: 2,
      cantidad: 3,
      detalle: 'La pija',
      precio: 5100,
      impuesto: false,      
    },{
      codigo: 3,
      cantidad: 2,
      detalle: 'La pija',
      precio: 3500,
      impuesto: true,      
    },{
      codigo: 4,
      cantidad: 21,
      detalle: 'La pija',
      precio: 500,
      impuesto: true,      
    },]

  const agregarItem = (item) => {    
    setDetalle(...detalleMock, item)
    calcularTotal()
  }

  const handleChange = () => {
    setEnvio(!envio);    
  };

  const calcularTotal = () => {    
    const subTotal = detalleMock.reduce((acc, item) => {
      return acc + item.precio * item.cantidad
    }, 0);
    setTotal(subTotal)
    }
    
  const handleEdit = () => {
    console.log('Editando')
  }

  const handleDelete = () => {
    console.log('Borrando')
  }

  return (
    <main className="min-h-[100dvh] p-6">
      <h1 className="font-bold text-2xl">Nuevo Presupuesto</h1>
      <div className="flex justify-center items-center min-h-[90dvh] max-w-[1024px] m-auto">
        <div className="flex flex-col bg-white rounded-2xl px-3 py-3 w-full">
          <div className="mb-2 p-2">
            {/* RAZON SOCIAL */}
            <label className="text-gray-800 text-md font-bold" htmlFor="nombre">
              Razón Social:
            </label>
            <input
              id="razon-social"
              type="text"
              className="block w-full px-2 py-1 bg-gray-100 rounded-lg"
              placeholder="Razón social del cliente"
              name="razon-social"
            />
          </div>

          {/* FECHA */}
          <div className="mb-2 p-2">
            <label className="text-gray-800 text-md font-bold" htmlFor="nombre">
              Fecha:
            </label>
            <input
              id="date"
              type="date"
              className="block w-full px-2 py-1 bg-gray-100 rounded-lg"
              placeholder="Fecha"
              name="fecha"
            />
          </div>

          {/* METODO DE PAGO */}
          <div className="mb-2 p-2">
            <label className="text-gray-800 text-md font-bold" htmlFor="nombre">
              Método de pago:
            </label>
            <input
              id="metodo"
              type="text"
              className="block w-full px-2 py-1 bg-gray-100 rounded-lg"
              placeholder="Método de pago"
              name="metodo"
            />
          </div>

          {/* ENVIO */}
          <div className="mb-2 p-2">
            <label className="text-gray-800 text-md font-bold" htmlFor="nombre">
              Envío
            </label>
            <input
              id="envio"
              type="checkbox"
              className="mx-2 px-2 py-1 bg-gray-100 rounded-lg"
              name="envio"
              onChange={handleChange}
            />
          </div>

          {/* COSTO DE ENVIO */}
          {envio ? (
            <div className="mb-2 p-2">
              <label
                className="text-gray-800 text-md font-bold"
                htmlFor="nombre"
              >
                Costo de envío
              </label>
              <input
                id="costo"
                type="number"
                className="block w-full px-2 py-1 bg-gray-100 rounded-lg"
                placeholder="Costo de envío"
                name="costo"
              />
            </div>
          ) : null}

          <hr className="my-2" />

          {/* DETALLE */}
          <div>
            <div className="mb-2 p-2">
              <label
                className="text-gray-800 text-md font-bold"                
              >
                Detalle de los items:
              </label>
            </div>

            <div className="mb-2 p-2">
              <label
                className="text-gray-800 text-md font-bold"                
              >
                Código:
              </label>
              <input
                id="codigo"
                type="number"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Código del producto"
                name="codigo"
              />
            </div>

            <div className="mb-2 p-2">
              <label
                className="text-gray-800 text-md font-bold"                
              >
                Detalle del item:
              </label>
              <input
                id="detalle"
                type="textarea"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Ingrese descripcion del producto o servicio"
                name="detalle"
              />
            </div>

            <div className="mb-2 p-2">
              <label
                className="text-gray-800 text-md font-bold"                
              >
                Cantidad:
              </label>
              <input
                id="cantidad"
                type="number"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Cantidad de items"
                name="cantidad"
              />
            </div>

            <div className="mb-2 p-2">
              <label
                className="text-gray-800 text-md font-bold"
                htmlFor="precio"
              >
                Precio:
              </label>
              <input
                id="precio"
                type="number"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Precio individual"
                name="precio"
              />
            </div>

            <div className="flex justify-between">
              <div className="mb-2 p-2 flex justify-center items-center">
                <label
                  className="text-gray-800 text-md font-bold"                  
                >
                  Impuesto:
                </label>
                <input
                  id="impuesto"
                  type="checkbox"
                  className="mx-2"
                  name="impuesto"
                />
              </div>
              <input
                type="submit"
                className=" max-w-[40%] rounded-md w-full bg-slate-800 p-3 uppercase font-bold text-white text-lg hover:bg-slate-600"
                value="Agregar item"
                onClick={agregarItem}
              />
            </div>
          </div>

          <hr className="my-2" />

          <table className="blueTable my-4">
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Cantidad</th>
                <th>Detalle</th>
                <th>Precio</th>
                <th>Impuesto</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {detalleMock.map((det, index) => {
                return (
                  <tr key={index}>
                    <td>{det.codigo}</td>
                    <td>{det.cantidad}</td>
                    <td>{det.detalle}</td>
                    <td>{formatCurrency(det.precio)}</td>                    
                    <td>{det.impuesto ? 'Si' : 'No'}</td>
                    <td>{formatCurrency(det.cantidad * det.precio * (det.impuesto ? 1.21 : 1))}</td>                    
                      <td className="flex gap-1 justify-center">
                        <p onClick={handleEdit} className="font-semibold bg-yellow-300 py-[1px] px-1 rounded-lg hover:cursor-pointer hover:text-white">Editar</p>                         
                        <p onClick={handleDelete} className="font-semibold bg-red-500 py-[1px] px-1 rounded-lg hover:cursor-pointer hover:text-white">Borrar</p>
                      </td>
                    
                  </tr> 
                )
              })}             
            </tbody>
          </table>
          
          <div className="flex justify-end">
            <h3 className="font-bold text-white bg-slate-800 rounded-xl py-3 px-6 max-w-[25%] text-center">Total: {formatCurrency(total)}</h3>
          </div>
          

          <hr className="my-2" />

          <input
            type="submit"
            className=" rounded-md my-4 w-full bg-red-800 p-3 uppercase font-bold text-white text-lg hover:bg-slate-800"
            value="Finalizar Presupuesto"
          />
        </div>
      </div>
    </main>
  );
}

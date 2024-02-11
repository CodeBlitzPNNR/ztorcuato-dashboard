"use client";

import { useState } from "react";
import { formatCurrency, sumaTotal, toastTrigger } from "@/app/helpers";
import { useForm } from "react-hook-form";
import TotalShowcase from "@/app/components/TotalShowcase";
import "./table.css";


export default function Home() {
  const [envio, setEnvio] = useState(false);
  const [detalle, setDetalle] = useState([]);
  const [cliente, setCliente] = useState({});    
  const { register, handleSubmit, reset } = useForm();  

  const agregarItem = (item) => {        
    setDetalle([...detalle, item]);
    toastTrigger('success', 'Item agregado');
    reset();  
  }

  const agregarCliente = (data) => {             
    setCliente({
      razonSocial: data.razon,
      fecha: data.fecha,
      metodo: data.metodo,
      envio: data.envio,
      costo: data.costo,      
    });
    toastTrigger('success', 'Cliente confirmado');    
  }

  const postPresupuesto = () => {
    const presup = {
      ...cliente, 
        detalle: detalle              
    }
    console.log(presup)
  }

  const handleChange = () => {
    setEnvio(!envio);    
  };  
    
  const handleEdit = () => {
    console.log('Editando')
  }

  const handleDelete = () => {
    console.log('Borrando')
  }

  return (
    <main className="min-h-[100dvh] p-6">
      <h1 className="font-bold text-2xl">Nuevo Presupuesto</h1>
      <div className="flex flex-col justify-center items-center min-h-[40dvh] max-w-[1024px] m-auto gap-10">        


        {/* FORMULARIO DETALLE DE PRODUCTOS Y SERVICIOS */}


        <form onSubmit={handleSubmit((data) => {                    
          agregarItem(data)
        })} className="flex flex-col bg-gray-300 rounded-2xl px-3 py-3 w-full">          

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
                {...register('codigo')}
              />
            </div>

            <div className="mb-2 p-2">
              <label
                className="text-gray-800 text-md font-bold"                
              >
                Detalle del item:
              </label>
              <input
                id="descripcion"
                type="textarea"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Ingrese descripcion del producto o servicio"
                {...register('descripcion')}
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
                {...register('cantidad')}
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
                {...register('precio')}
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
                  {...register('impuesto')}
                />
              </div>
              <button 
                className=" max-w-[40%] rounded-md w-full bg-slate-800 p-3 uppercase font-bold text-white text-lg hover:bg-slate-600"
                type='submit'>
                  Agregar item
              </button>                           
            </div>
          </div>

          <hr className="my-2" />

          {detalle ?
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
              {detalle.map((det, index) => {
                return (
                  <tr key={index}>
                    <td>{det.codigo}</td>
                    <td>{det.cantidad}</td>
                    <td>{det.descripcion}</td>
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
          : null }
          
          <div className="flex justify-end">
          <TotalShowcase
            value={sumaTotal(detalle)}
          />
          </div>
        </form>


        {/* FORMULARIO DATOS CLIENTE */}

        <form onSubmit={handleSubmit((data) => {                
          agregarCliente(data)   
        })} className="flex flex-col bg-gray-300 rounded-2xl px-3 py-3 w-full">
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
              {...register('razon')}
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
              {...register('fecha')}
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
              {...register('metodo')}
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
              {...register('envio')}
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
                {...register('costo')}
              />
            </div>
          ) : null}

          <hr className="my-2" />

          <div className="flex justify-center">
          <input
            type="submit"            
            className=" max-w-[40%] rounded-md w-full bg-slate-800 p-3 uppercase font-bold text-white text-lg hover:bg-slate-600"
            value="Confirmar datos del cliente"
          />   
          </div>       
        </form>
        <button onClick={ postPresupuesto } className=" rounded-md my-4 w-full bg-red-800 p-3 uppercase font-bold text-white text-lg hover:bg-slate-800">
          Finalizar Presupuesto
        </button>        
      </div>
    </main>
  );
}

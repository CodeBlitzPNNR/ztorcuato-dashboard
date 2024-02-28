    "use client";   
    
    import clients from "../../clients";
    import { useState } from "react"
    import { formatCurrency } from "@/app/helpers";
    import './table2.css'
    
    export default function Home() {
        
const presupMock = [
  {
    id: 1,
    razonSocial: "Los pollos hermanos",
    cuit: 30335038623,
    fecha: "2024-02-12",
    metodo: "Efectivo",
    envio: false,
    total: 139000,
    detalle: [
      {
        codigo: "13",
        descripcion: "Chapas Galvanizadas",
        cantidad: "30",
        precio: "3200",
        impuesto: false,
      },
      {
        codigo: "14",
        descripcion: "Chapas Translucidas verdes",
        cantidad: "12",
        precio: "3800",
        impuesto: false,
      },
      {
        codigo: "1",
        descripcion: "Mano de Obra",
        cantidad: "1",
        precio: "120000",
        impuesto: false,
      },
      {
        codigo: "4",
        descripcion: "Herrajes y Fierros de soldado",
        cantidad: "1",
        precio: "12000",
        impuesto: false,
      },
    ],
  },
  {
    id: 2,
    razonSocial: "Mr. Big",
    cuit: 30325038613,
    fecha: "2024-02-11",
    metodo: "Efectivo",
    envio: false,
    total: 19000,
    detalle: [
      {
        codigo: "13",
        descripcion: "Chapas Galvanizadas",
        cantidad: "30",
        precio: "3200",
        impuesto: false,
      },
      {
        codigo: "14",
        descripcion: "Chapas Translucidas verdes",
        cantidad: "12",
        precio: "3800",
        impuesto: false,
      },
      {
        codigo: "1",
        descripcion: "Mano de Obra",
        cantidad: "1",
        precio: "120000",
        impuesto: false,
      },
      {
        codigo: "4",
        descripcion: "Herrajes y Fierros de soldado",
        cantidad: "1",
        precio: "12000",
        impuesto: false,
      },
    ],
  },
  {
    id: 3,
    razonSocial: "Los pollos hermanos",
    cuit: 30335038623,
    fecha: "2024-02-12",
    metodo: "Efectivo",
    envio: false,
    total: 139000,
    detalle: [
      {
        codigo: "13",
        descripcion: "Chapas Galvanizadas",
        cantidad: "30",
        precio: "3200",
        impuesto: false,
      },
      {
        codigo: "14",
        descripcion: "Chapas Translucidas verdes",
        cantidad: "12",
        precio: "3800",
        impuesto: false,
      },
      {
        codigo: "1",
        descripcion: "Mano de Obra",
        cantidad: "1",
        precio: "120000",
        impuesto: false,
      },
      {
        codigo: "4",
        descripcion: "Herrajes y Fierros de soldado",
        cantidad: "1",
        precio: "12000",
        impuesto: false,
      },
    ],
  },
  {
    id: 4,
    razonSocial: "Los pollos hermanos",
    cuit: 30335038623,
    fecha: "2024-02-12",
    metodo: "Efectivo",
    envio: false,
    total: 139000,
    detalle: [
      {
        codigo: "13",
        descripcion: "Chapas Galvanizadas",
        cantidad: "30",
        precio: "3200",
        impuesto: false,
      },
      {
        codigo: "14",
        descripcion: "Chapas Translucidas verdes",
        cantidad: "12",
        precio: "3800",
        impuesto: false,
      },
      {
        codigo: "1",
        descripcion: "Mano de Obra",
        cantidad: "1",
        precio: "120000",
        impuesto: false,
      },
      {
        codigo: "4",
        descripcion: "Herrajes y Fierros de soldado",
        cantidad: "1",
        precio: "12000",
        impuesto: false,
      },
    ],
  },

  {
    id: 5,
    razonSocial: "Los pollos hermanos",
    cuit: 30335038623,
    fecha: "2024-02-12",
    metodo: "Efectivo",
    envio: false,
    total: 139000,
    detalle: [
      {
        codigo: "13",
        descripcion: "Chapas Galvanizadas",
        cantidad: "30",
        precio: "3200",
        impuesto: false,
      },
      {
        codigo: "14",
        descripcion: "Chapas Translucidas verdes",
        cantidad: "12",
        precio: "3800",
        impuesto: false,
      },
      {
        codigo: "1",
        descripcion: "Mano de Obra",
        cantidad: "1",
        precio: "120000",
        impuesto: false,
      },
      {
        codigo: "4",
        descripcion: "Herrajes y Fierros de soldado",
        cantidad: "1",
        precio: "12000",
        impuesto: false,
      },
    ],
  },];
    
      return (
        <main className="min-h-[100dvh] p-8">
          <h1 className="font-bold text-2xl">Búsqueda de presupuestos</h1>
          <div className="p-3 max-w-[900px] m-auto rounded-xl my-3 flex gap-4">        
              <form className="flex flex-col items-center m-auto gap-4 bg-gray-300 p-4 rounded-lg w-[50%]">            
                <input type="text" placeholder="Buscar por Razon Social" className="rounded-lg py-1 px-2 w-full"/>                                                                          
                <button className=" max-w-[300px] rounded-md w-full bg-slate-800 px-1 py-2 uppercase font-bold text-white text-lg hover:bg-slate-600">
                  Buscar
                </button>
              </form>
              <form className="flex flex-col items-center m-auto gap-4 bg-gray-300 p-4 rounded-lg w-[50%]">            
                <input type="text" placeholder="Buscar por Cuit (sin guíones)" className="rounded-lg py-1 px-2 w-full"/>                                                                          
                <button className=" max-w-[300px] rounded-md w-full bg-slate-800 px-1 py-2 uppercase font-bold text-white text-lg hover:bg-slate-600">
                  Buscar
                </button>
              </form>
          </div>
          <div className="bg-white w-2/3 m-auto">
          {presupMock ? (
            <table className="blueTable my-4">
              <thead>
                <tr>
                  <th>Razon Social</th>
                  <th>Cuit</th>
                  <th>Fecha</th>
                  <th>Monto</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {presupMock.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.razonSocial}</td>
                      <td>{item.cuit}</td>
                      <td>{item.fecha}</td>
                      <td>{formatCurrency(item.total)}</td>                      
                      <td className="flex gap-1 justify-center">
                        <button                          
                          className="font-semibold bg-emerald-300 py-[1px] px-4 rounded-lg hover:cursor-pointer hover:text-white"
                        >
                          Ver
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : null}
            </div>                    
          
        </main>
      );
    };
  



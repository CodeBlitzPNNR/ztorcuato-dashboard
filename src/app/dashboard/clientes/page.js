"use client";

import ClientCard from "../../components/ClientCard"
import Spinner from "../../components/Spinner"
import clients from "../../clients";
import { useState } from "react"

export default function Home() {
  const clientes = clients
  const [isLoading, setIsLoading] = useState(false);  
  const [clientesFiltrados, setClientesFiltrados] = useState(clientes);    
  
  const handleChange = (data) => {
    if (isNaN(data) === false) {
      
      setClientesFiltrados(clientes.filter((item) => 
        data === ''
        ? item
        : item.cuit.includes(data)
      ))      
    } else if (isNaN(data) === true) {
      
      setClientesFiltrados(clientes.filter((item) => 
        data === ''
        ? item
        : item.razonSocial.toLowerCase().includes(data)))
    } else {
      setClientesFiltrados(clientes)
    }};        

  return (
    <main className="min-h-[100dvh] p-8">
      <h1 className="font-bold text-2xl">Clientes</h1>
      <div className="p-4 max-w-[900px] m-auto rounded-xl mb-4 bg-slate-900" >        
          <form className="flex items-center m-auto gap-4">            
            <input type="text" placeholder="Buscar por Razon Social o Cuit" className="rounded-lg py-1 px-2 w-full" onChange={(e) => handleChange(((e.target.value).toLowerCase()))}/>                                                                          
          </form>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center h-[500px]">
        <Spinner/>
      </div> 
      ) : (
          <div className="w-[100%] gap-2 grid lg:grid-cols-2 grid-cols-1">            
            {clientesFiltrados.map(
        ( {id, razonSocial, cuit, direccion, email, telefono }, index ) =>             
            <ClientCard
              key={index}
              id={id}
              razonSocial={razonSocial}
              cuit={cuit}
              direccion={direccion}
              email={email}
              telefono={telefono}        
            />
            )}
          </div>
        )
      }            
    </main>
  );
};

'use client';
import { useForm } from "react-hook-form";
import { toastTrigger } from "@/app/helpers";

export default function Home() {
    
    const { register, handleSubmit, reset } = useForm(); 

    const guardarCliente = (data) => {
        console.log(data)
        toastTrigger('success', 'Cliente agregado a base de datos');  
        reset();
    }

  
  return (
    <main className="min-h-[100dvh] p-6">
      <h1 className="font-bold text-2xl">Nuevo Cliente</h1>
      <div className="flex justify-center items-center min-h-[90dvh]">
        <form onSubmit={handleSubmit((data) => {                    
          guardarCliente(data)
        })}
        className="flex flex-col gap-3 bg-white rounded-2xl px-4 py-8 w-[50%]">
                <div className="mb-4">
                    <label
                        className="text-gray-800"
                        htmlFor="nombre"
                    >Razón Social:</label>
                    <input 
                        id="razon"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Razón social del Cliente"
                        {...register('razon')}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="text-gray-800"
                        htmlFor="empresa"
                    >Cuit:</label>
                    <input 
                        id="cuit"
                        type="number"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Cuit del Cliente"
                        {...register('cuit')}               
                    />
                </div>

                <div className="mb-4">
                    <label
                        className="text-gray-800"
                        htmlFor="telefono"
                    >Dirección:</label>
                    <input 
                        id="direccion"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Dirección del cliente"
                        {...register('direccion')}
                    />
                </div>

                <div className="mb-4">
                    <label
                        className="text-gray-800"
                        htmlFor="email"
                    >E-mail:</label>
                    <input 
                        id="email"
                        type="email"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Email del Cliente"
                        {...register('email')}                
                    />
                </div>

                <div className="mb-4">
                    <label
                        className="text-gray-800"
                        htmlFor="telefono"
                    >Teléfono:</label>
                    <input 
                        id="telefono"
                        type="tel"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Teléfono del Cliente"
                        {...register('telefono')}                   
                    />
                </div>
                
                <input 
                        type="submit"
                        className=' rounded-md mt-5 w-full bg-slate-900 p-3 uppercase font-bold text-white text-lg hover:bg-slate-800'
                        value="Registrar Cliente"                        
                    />
            </form>
            
        </div>
    </main>
  );
}

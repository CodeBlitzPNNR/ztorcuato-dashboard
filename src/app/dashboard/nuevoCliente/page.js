export default function Home() {
  
  return (
    <main className="min-h-[100dvh] p-6">
      <h1 className="font-bold text-2xl">Nuevo Cliente</h1>
      <div className="flex justify-center items-center min-h-[90dvh]">
        <div className="flex flex-col gap-3 bg-white rounded-2xl px-4 py-8 w-[50%]">
                <div className="mb-4">
                    <label
                        className="text-gray-800"
                        htmlFor="nombre"
                    >Razón Social:</label>
                    <input 
                        id="razon-social"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Razón social del Cliente"
                        name="razon-social"
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
                        name="cuit"                    
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
                        name="direccion"
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
                        name="email"                    
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
                        name="telefono"                    
                    />
                </div>
                
                <input 
                        type="submit"
                        className=' rounded-md mt-5 w-full bg-slate-900 p-3 uppercase font-bold text-white text-lg hover:bg-slate-800'
                        value="Registrar Cliente"
                    />
            </div>
            
        </div>
    </main>
  );
}

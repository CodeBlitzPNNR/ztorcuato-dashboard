import PresupuestoDetails from "@/app/components/PresupuestoDetails";
import axios from "axios";

async function getData() {
  const axiosConfig = {
    method: "GET",
    url: `https://api-zingueria-adaro-cp.vercel.app/api/presupuestos`,
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios(axiosConfig);
  console.log("response: ", response.data);
  return response.data;
}

export default async function Home() {  
  const presupuestos = await getData();

  return (
      <main className="min-h-[100dvh] p-8">
      <h1 className="font-bold text-2xl">Búsqueda de presupuestos</h1>
      <div className="p-3  m-auto max-w-[900px] rounded-xl my-3 flex gap-4">
        <form className="flex flex-col items-center m-auto gap-4 bg-gray-300 p-4 rounded-lg w-[50%]">
          <input
            type="text"
            placeholder="Buscar por Razon Social"
            className="rounded-lg py-1 px-2 w-full"
          />
          <button className=" max-w-[300px] rounded-md w-full bg-slate-800 px-1 py-2 uppercase font-bold text-white text-lg hover:bg-slate-600">
            Buscar
          </button>
        </form>
        <form className="flex flex-col items-center m-auto gap-4 bg-gray-300 p-4 rounded-lg w-[50%]">
          <input
            type="text"
            placeholder="Buscar por Cuit (sin guíones)"
            className="rounded-lg py-1 px-2 w-full"
          />
          <button className=" max-w-[300px] rounded-md w-full bg-slate-800 px-1 py-2 uppercase font-bold text-white text-lg hover:bg-slate-600">
            Buscar
          </button>
        </form>
      </div>  
        <PresupuestoDetails pres={presupuestos} />       
    </main>
  );
}

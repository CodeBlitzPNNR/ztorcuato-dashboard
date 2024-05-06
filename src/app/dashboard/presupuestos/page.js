"use client";
import { useState } from "react";
import PresupuestoDetails from "@/app/components/PresupuestoDetails";
import Spinner from "@/app/components/Spinner";
import { useForm } from "react-hook-form";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Home() {
  const [presupuestos, setPresupuestos] = useState("");
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const getData = async () => {
    try {      
      setLoading(true);
      const response = await axios.get(
        "https://api-zingueria-adaro-cp.vercel.app/api/presupuestos?limit=15"
      );            
      setPresupuestos(response.data.baseDatos);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getFilterData = async (filter, params) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api-zingueria-adaro-cp.vercel.app/api/presupuestos/${filter}?${params}&limit=10`
      );
      setPresupuestos(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="min-h-[100dvh] p-8">
      <h1 className="font-bold text-2xl">Búsqueda de presupuestos</h1>
      <div className="p-3  m-auto max-w-[900px] rounded-xl my-3 flex gap-4">
        <form className="flex flex-col items-center m-auto gap-4 bg-gray-300 p-4 rounded-lg w-[50%]">
          <input            
            type="text"
            className="rounded-lg py-1 px-2 w-full"
            placeholder="Buscar por Razon Social"
            {...register("razonsocial")}
          />
          <button type="submit" className=" max-w-[300px] rounded-md w-full bg-slate-800 px-1 py-2 uppercase font-bold text-white text-lg hover:bg-slate-600">
            Buscar
          </button>
        </form>
        <form className="flex flex-col items-center m-auto gap-4 bg-gray-300 p-4 rounded-lg w-[50%]">
          <input
            type="text"
            placeholder="Buscar por Cuit (sin guíones)"
            className="rounded-lg py-1 px-2 w-full"
            {...register("razonsocial")}
          />
          <button type="submit" className=" max-w-[300px] rounded-md w-full bg-slate-800 px-1 py-2 uppercase font-bold text-white text-lg hover:bg-slate-600">
            Buscar
          </button>
        </form>
      </div>
      

      {loading ? (
        <Spinner />
      ) : (
        <>
          {presupuestos ? (                        
            <PresupuestoDetails pres={presupuestos} />
          ) : (
            <div className="flex flex-col items-center justify-center m-auto gap-4 bg-gray-300 p-4 rounded-lg max-w-96">
              <button
                onClick={() => getData()}
                className=" max-w-[300px] rounded-md w-full bg-slate-800 px-1 py-2 uppercase font-bold text-white text-lg hover:bg-slate-600"
              >
                Ver todos
              </button>
              <p className=" justify-center m-auto text-xs ">
                * Esto puede tardar un momento.
              </p>
            </div>
          )}
        </>
      )}
    </main>
  );
}

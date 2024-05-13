'use client';

import Presupuesto from "@/app/components/Presupuesto";
import { useAuth } from "@/app/helpers";

export default function presupuestoInfo({ params }) {

  const showInfo = useAuth();

  return (
    <div>
      { showInfo ? 
      (<section className="p-3">
        <h1 className="font-bold text-xl">PRESUPUESTO N° {params.presupuestoId}</h1>        
          <Presupuesto params={ params.presupuestoId } />
        <div className="flex justify-center mt-4">
          <button  className="px-4 py-2 bg-emerald-700 text-white font-bold rounded-lg hover:bg-emerald-400">CREAR PDF</button>
        </div>
      </section>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <div className="bg-slate-300 p-11 rounded-xl items-center flex flex-col gap-4">
            <h6>Las credenciales no son válidas o caducaron.</h6>
            <a
              href="/"
              className="bg-slate-700 text-white py-2 px-4 rounded-xl"
            >
              Volver al login
            </a>
          </div>
        </div>
      )
    }
    </div>
  );
}

/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import React from 'react';
import Presupuesto from "@/app/components/Presupuesto";
import { useAuth } from "@/app/helpers";
import Print from '@/app/components/Print'

export default function presupuestoInfo({ params }) {

  const showInfo = useAuth();  

  return (
    <div>
      {showInfo ?
        (<section className="p-3">
          <h1 className="font-bold text-xl">PRESUPUESTO N° {params.presupuestoId}</h1>
          <Print name={params.presupuestoId}>
            <Presupuesto params={params.presupuestoId} />
          </Print >          
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

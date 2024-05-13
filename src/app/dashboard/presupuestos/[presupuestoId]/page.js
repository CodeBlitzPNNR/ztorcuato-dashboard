'use client';

import React from 'react';
import Presupuesto from "@/app/components/Presupuesto";
import { useAuth } from "@/app/helpers";

export default function presupuestoInfo({ params }) {

  const showInfo = true;

  const convertToPdf = () => {
    const html2pdf = require('html2pdf.js');

    const content = document.getElementById('imprimir');

    const opt = {
      margin: [0, 0],
      filename: `Presupuesto.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'em', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(content).save();
  };

  return (
    <div>
      {showInfo ? (
        <section className="p-3">
          <h1 className="font-bold text-xl">PRESUPUESTO N° {params.presupuestoId}</h1>
          <div id="imprimir">
            <Presupuesto params={params.presupuestoId} />
          </div>
          <div className="flex justify-center mt-4">
            <button onClick={convertToPdf} className="px-4 py-2 bg-emerald-700 text-white font-bold rounded-lg hover:bg-emerald-400">CREAR PDF</button>
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
      )}
    </div>
  );
}

import Presupuesto from "@/app/components/Presupuesto";

export default function presupuestoInfo({ params }) {

  return (
    <div>
      <section className="p-3">
        <h1 className="font-bold text-xl">PRESUPUESTO N° {params.presupuestoId}</h1>        
          <Presupuesto params={ params.presupuestoId } />
        <div className="flex justify-center mt-4">
          <button className="px-4 py-2 bg-emerald-700 text-white font-bold rounded-lg hover:bg-emerald-400">CREAR PDF</button>
        </div>
      </section>
    </div>
  );
}

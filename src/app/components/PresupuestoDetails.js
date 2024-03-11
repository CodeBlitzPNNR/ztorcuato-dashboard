"use client";

import { formatCurrency} from "@/app/helpers";
import { useRouter } from "next/navigation";
import "./table2.css";

export default function PresupuestoDetails({ pres }) {      
  
  const router = useRouter()  
  const handleClick = (id) => {
    router.push(`/dashboard/presupuestos/${id}`)
  }

  return (          
      <div className="bg-white w-4/5 m-auto">
        {pres ? (
          <table className="blueTable my-4">
            <thead>
              <tr>
                <th>Razon Social</th>
                <th>Cuit</th>
                <th>Fecha</th>
                <th>Monto</th>
                <th>Detalle</th>
              </tr>
            </thead>

            <tbody>
              {pres.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.razonSocial}</td>
                    <td>{item.cuit}</td>
                    <td>{item.fecha}</td>
                    <td>{formatCurrency(item.totalPresupuesto)}</td>
                    <td className="flex gap-1 justify-center">
                      <button className="font-semibold bg-emerald-300 py-[1px] px-4 rounded-lg hover:cursor-pointer hover:text-white" onClick={() => {handleClick(item.id)}}>
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
  );
}

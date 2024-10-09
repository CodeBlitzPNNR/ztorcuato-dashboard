"use client";

import { formatCurrency } from "@/app/helpers";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import axios from "axios";
import "./table2.css";

export default function PresupuestoDetails({ pres }) {  
  const presupuesto = pres
  const router = useRouter();
  const handleClick = (id) => {
    if (presupuesto.tipo){
      router.push(`/dashboard/presupuestos/simp/${id}`);
    } else {
      router.push(`/dashboard/presupuestos/${id}`);
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Estás seguro?",
      text: "No podras recuperar esta información",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#6ee7b7",
      cancelButtonColor: "#b91c1c",
      confirmButtonText: "Si, eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://api-zingueria-adaro-cp.vercel.app/api/presupuestos/delete/${id}`).then (response => {
          Swal.fire({
            title: "Eliminado!",
            text: "La entrada fue correctamente eliminada.",
            icon: "success"          
          });
          router.push(`/dashboard`);
        }).catch (error => {
          console.log(error)
        })        
      }
    });
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
              <th>⛔</th>
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
                  <td>
                    <button
                      className="font-semibold bg-emerald-300 py-[1px] px-4 rounded-lg hover:cursor-pointer hover:text-white w-20"
                      onClick={() => {
                        handleClick(item.id);
                      }}
                    >
                      Ver
                    </button>
                  </td>
                  <td>
                    <button
                      className="font-semibold bg-red-700 py-[1px] px-4 rounded-lg hover:cursor-pointer hover:text-white w-20"
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                    >
                      Borrar
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

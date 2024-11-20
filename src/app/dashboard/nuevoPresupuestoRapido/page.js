"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { formatCurrency, useAuth, toastTrigger } from "@/app/helpers";
import { useForm } from "react-hook-form";
import "./table.css";
import axios from "axios";

export default function Home() {
  const [detalle, setDetalle] = useState([]);
  const [cliente, setCliente] = useState({});
  const [finalizar, setFinalizar] = useState();
  const [total, setTotal] = useState(0)
  const { register, handleSubmit, reset, watch } = useForm();
  const showInfo = useAuth();
  const router = useRouter();

  const subtotal = watch("subtotal");
  useEffect(() => {
    if (subtotal) {
      const calculado = parseFloat(subtotal) * 1.21;
      setTotal(isNaN(calculado) ? 0 : calculado.toFixed(2)); // Asegurar que no se genere NaN
    } else {
      setTotal(0);
    }
  }, [subtotal]);

  const agregarItem = (item) => {
    if (item.descripcion === "") {
      toastTrigger("error", "Chequear que los campos no esten vacíos")
    } else {
      setDetalle([
        ...detalle,
        {
          cantidad: parseFloat(item.cantidad),
          descripcion: item.descripcion
        },
      ]);
      toastTrigger("success", "Item agregado");
      reset({ cantidad: '', descripcion: '' });
    }
  };

  const agregarCliente = (data) => {
    if (detalle.length === 0) {
      toastTrigger("error", "Antes de confirmar el cliente, cargue los items.");
    } else {
      setCliente({
        razonSocial: data.razon,
        cuit: parseInt(data.cuit),
        fecha: data.fecha,
        observaciones: data.observaciones,
        totalPresupuesto: total,
        subtotal: data.subtotal
      });
      toastTrigger(
        "success",
        "Cliente confirmado, exporte el presupuesto al final de la página"
      );
      setFinalizar(true);
    }
  };

  const postPresupuesto = () => {
    const presup = {
      ...cliente,
      detalle: detalle,
      tipo: "simp"
    };
    postData(presup);
  };

  const handleDelete = (index) => {
    setDetalle((detalleExistente) => {
      return detalleExistente.filter((item, currIndex) => currIndex !== index);
    });
  };

  async function postData(presupuesto) {
    axios
      .post(
        "https://api-zingueria-adaro-cp.vercel.app/api/presupuestos/",
        // "https://pruebas-zingueria-adaro.vercel.app/api/presupuestos/",
        presupuesto
      )
      .then(function (response) {

        toastTrigger(
          "success",
          "Presupuesto agregado exitosamente, espere mientras es redireccionado."
        );
        router.push(`/dashboard/presupuestos`);
      })
      .catch(function (error) {
        console.log(error);
        toastTrigger(
          "error",
          "Hubo un error enviando el presupuesto, espere unos minutos e intente de nuevo o contacte a mantenimiento."
        );
      });
  }

  return showInfo ? (
    <main className="min-h-[100dvh] p-4">
      <h1 className="font-bold text-2xl">Nuevo presupuesto rápido</h1>
      <div className="flex gap-2items-center min-h-[40dvh] m-auto gap-2">
        {/* FORMULARIO DE CLIENTE */}
        <form
          onSubmit={handleSubmit((data) => {
            agregarCliente(data);
          })}
          className="flex flex-col bg-gray-300 rounded-2xl px-3 py-3 w-full max-w-[500px]"
        >
          {/* RAZON SOCIAL */}
          <div className="mb-1 p-1">
            <label className="text-gray-800 text-md font-bold" htmlFor="nombre">
              Razón Social:
            </label>
            <input
              id="razon-social"
              type="text"
              className="block w-full px-2 py-1 bg-gray-100 rounded-lg"
              placeholder="Razón social del cliente"
              {...register("razon")}
            />
          </div>

          {/* CUIT */}
          <div className="mb-1 p-1">
            <label className="text-gray-800 text-md font-bold" htmlFor="nombre">
              Cuit:
            </label>
            <input
              id="cuit"
              type="number"
              className="block w-full px-2 py-1 bg-gray-100 rounded-lg"
              placeholder="Cuit"
              {...register("cuit")}
            />
          </div>

          {/* FECHA */}
          <div className="mb-1 p-1">
            <label className="text-gray-800 text-md font-bold" htmlFor="nombre">
              Fecha:
            </label>
            <input
              id="date"
              type="date"
              className="block w-full px-2 py-1 bg-gray-100 rounded-lg"
              placeholder="Fecha"
              {...register("fecha")}
            />
          </div>

          <div className="mb-1 p-1">
            <label className="text-gray-800 text-md font-bold">
              Observaciones:
            </label>
            <textarea
              id="observaciones"
              className="block w-full p-1 bg-gray-50 rounded-lg resize-none h-64"
              placeholder="Ingrese informacion extra"
              {...register("observaciones")}
            />
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <label
              htmlFor="subtotal"
              className="text-gray-800 text-md font-bold"
            >
              Subtotal:
            </label>
            <input
              id="subtotal"
              type="number"
              className="block w-48 p-1 bg-gray-50 rounded-lg"
              placeholder="Subtotal"
              {...register("subtotal")}
            />
          </div>
          <hr className="my-2" />
          <div className="flex justify-between">
            <label
              htmlFor="total"
              className="text-gray-800 text-md font-bold"
            >
              Total:
            </label>
            <input
              id="total"
              type="number"
              className="block w-48 p-1 bg-gray-50 rounded-lg"
              placeholder="Total"
              value={total} // Asigna el valor calculado
              readOnly // Solo lectura
            />
          </div>
          <hr className="my-4" />

          <div className="flex justify-center">
            <input
              type="submit"
              className="rounded-md w-full bg-slate-800 p-3 uppercase font-bold text-white text-xs md:text-lg  hover:bg-slate-600"
              value="Confirmar cliente"
            />
          </div>
        </form>

        {/* FORMULARIO DETALLE DE PRODUCTOS Y SERVICIOS */}
        <form
          onSubmit={handleSubmit((data) => {
            agregarItem(data);
          })}
          className="flex flex-col bg-gray-300 rounded-2xl px-2 py-3 w-full"
        >
          {/* DETALLE */}
          <div>

            <div className="mb-2 p-2">
              <label className="text-gray-800 text-md font-bold">
                Cantidad:
              </label>
              <input
                id="cantidad"
                type="number"
                step=".01"
                className="mt-1 block w-full p-1 bg-gray-50"
                placeholder="Cantidad de items"
                {...register("cantidad")}
              />
            </div>

            <div className="mb-2 p-2">
              <label className="text-gray-800 text-md font-bold">
                Detalle del item:
              </label>
              <textarea
                id="descripcion"
                className="mt-1 block w-full p-1 bg-gray-50 resize-none h-40"
                placeholder="Ingrese descripcion del producto o servicio"
                {...register("descripcion")}
              />
            </div>

            <div className="flex justify-end">
              <button
                className=" max-w-[30%] rounded-md w-full bg-slate-800 p-2 uppercase font-bold text-white text-xs md:text-lg hover:bg-slate-600"
                type="submit"
              >
                Agregar item
              </button>
            </div>
          </div>

          <hr className="my-4" />

          {detalle ? (
            <table className="blueTable my-4">
              <thead>
                <tr>
                  <th>Cantidad</th>
                  <th>Detalle</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {detalle.map((det, index) => {
                  return (
                    <tr key={index}>
                      <td className="text-left">{det.cantidad}</td>
                      <td className="text-left">{det.descripcion}</td>
                      <td className="flex gap-1 justify-center">
                        <button
                          onClick={() => handleDelete(index)}
                          className="font-semibold bg-red-500 py-[1px] px-1 rounded-lg hover:cursor-pointer hover:text-white"
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
        </form>

        {/*BOTON DE EXPORTAR FORMULARIO */}

        {finalizar ? (
          <button
            onClick={postPresupuesto}
            className=" rounded-lg bg-red-800 p-3 uppercase font-bold text-white text-xs md:text-lg hover:bg-slate-800"
          >
            Exportar Presupuesto
          </button>
        ) : null}
      </div>
    </main>
  ) : (
    <div className="w-full h-full flex justify-center items-center">
      <div className="bg-slate-300 p-11 rounded-xl items-center flex flex-col gap-4">
        <h6>Las credenciales no son válidas o caducaron.</h6>
        <a href="/" className="bg-slate-700 text-white py-2 px-4 rounded-xl">
          Volver al login
        </a>
      </div>
    </div>
  );
}

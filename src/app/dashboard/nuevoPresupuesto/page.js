"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { formatCurrency, useAuth, toastTrigger } from "@/app/helpers";
import { useForm } from "react-hook-form";
import TotalShowcase from "@/app/components/TotalShowcase";
import "./table.css";
import axios from "axios";

export default function Home() {
  const [envio, setEnvio] = useState(false);
  const [detalle, setDetalle] = useState([]);
  const [total, setTotal] = useState(0);
  const [cliente, setCliente] = useState({});
  const [finalizar, setFinalizar] = useState(0);
  const { register, handleSubmit, reset } = useForm();
  const showInfo = useAuth();
  const router = useRouter();

  useEffect(() => {
    let sum = 0;
    detalle.forEach((item) => {
      sum += item.total;
      console.log("Suma1: ", sum);
    });
    console.log("Suma2: ", sum);
    setTotal(sum);
  }, [detalle]);

  const agregarItem = (item) => {
    setDetalle([
      ...detalle,
      {
        codigo: parseInt(item.codigo),
        descripcion: item.descripcion,
        cantidad: parseInt(item.cantidad),
        precio: parseFloat(item.precio),
        impuesto: item.multiplo,
        total: item.cantidad * item.precio * item.multiplo,
      },
    ]);
    toastTrigger("success", "Item agregado");
    reset();
  };

  const agregarCliente = (data) => {
    if (detalle.length === 0) {
      toastTrigger("error", "Antes de confirmar el cliente, cargue los items.");
    } else {
      setCliente({
        razonSocial: data.razon,
        cuit: parseInt(data.cuit),
        fecha: data.fecha,
        metodo: data.metodo,
        envio: data.envio,
        totalPresupuesto: total,
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
    };
    console.log(JSON.stringify(presup));
    postData(presup);
  };

  const handleChange = () => {
    setEnvio(!envio);
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
        presupuesto
      )
      .then(function (response) {
        console.log("Presupuesto:", presupuesto);
        console.log("Respuesta:", response);
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
      <h1 className="font-bold text-2xl">Nuevo Presupuesto</h1>
      <div className="flex flex-col justify-center items-center min-h-[40dvh] max-w-[1024px] m-auto gap-5">
        {/* FORMULARIO DETALLE DE PRODUCTOS Y SERVICIOS */}
        <form
          onSubmit={handleSubmit((data) => {
            agregarItem(data);
          })}
          className="flex flex-col bg-gray-300 rounded-2xl px-2 py-3 w-full"
        >
          {/* DETALLE */}
          <div>
            <div className="mb-1 p-1">
              <label className="text-gray-800 text-md font-bold">
                Detalle de los items:
              </label>
            </div>

            <div className="mb-2 p-2">
              <label className="text-gray-800 text-md font-bold">Código:</label>
              <input
                id="codigo"
                type="number"
                className="mt-1 block w-full p-1 bg-gray-50"
                placeholder="Código del producto"
                {...register("codigo")}
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

            <div className="mb-2 p-2">
              <label className="text-gray-800 text-md font-bold">
                Cantidad:
              </label>
              <input
                id="cantidad"
                type="number"
                className="mt-1 block w-full p-1 bg-gray-50"
                placeholder="Cantidad de items"
                {...register("cantidad")}
              />
            </div>

            <div className="mb-2 p-2">
              <label
                className="text-gray-800 text-md font-bold"
                htmlFor="precio"
              >
                Precio:
              </label>
              <input
                id="precio"
                type="number"
                className="mt-1 block w-full p-1 bg-gray-50"
                placeholder="Precio individual"
                {...register("precio")}
              />
            </div>

            <div className="flex justify-between">
              <div className="mb-2 p-2 flex justify-center items-center">
                <select {...register("multiplo", { required: true })}>
                  <option value={1}>Sin impuesto...</option>
                  <option value={1.21}>21%</option>
                  <option value={1.105}>10.5%</option>
                </select>                
              </div>

              <button
                className=" max-w-[30%] rounded-md w-full bg-slate-800 p-2 uppercase font-bold text-white text-xs md:text-lg hover:bg-slate-600"
                type="submit"
              >
                Agregar item
              </button>
            </div>
          </div>

          <hr className="my-2" />

          {detalle ? (
            <table className="blueTable my-4">
              <thead>
                <tr>
                  <th>Codigo</th>
                  <th>Cantidad</th>
                  <th>Detalle</th>
                  <th>Precio</th>
                  <th>Subtotal</th>
                  <th>Impuesto</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {detalle.map((det, index) => {
                  return (
                    <tr key={index}>
                      <td className="text-left">{det.codigo}</td>
                      <td className="text-left">{det.cantidad}</td>
                      <td className="text-left">{det.descripcion}</td>
                      <td className="text-left">{formatCurrency(det.precio)}</td>
                      <td className="text-left">{formatCurrency(det.cantidad * det.precio)}</td>
                      <td className="text-left">{det.impuesto>1 ? det.impuesto  : 'No'}</td>
                      <td className="text-left">
                        {formatCurrency(
                          det.cantidad * det.precio * det.impuesto
                        )}
                      </td>
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

          <div className="flex justify-end">
            <TotalShowcase value={total} />
          </div>
        </form>

        {/* FORMULARIO DATOS CLIENTE */}

        <form
          onSubmit={handleSubmit((data) => {
            agregarCliente(data);
          })}
          className="flex flex-col bg-gray-300 rounded-2xl px-3 py-3 w-full"
        >
          {/* RAZON SOCIAL */}
          <div className="mb-2 p-2">
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
          <div className="mb-2 p-2">
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
          <div className="mb-2 p-2">
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

          {/* METODO DE PAGO */}
          <div className="mb-2 p-2">
            <label className="text-gray-800 text-md font-bold" htmlFor="nombre">
              Método de pago:
            </label>
            <input
              id="metodo"
              type="text"
              className="block w-full px-2 py-1 bg-gray-100 rounded-lg"
              placeholder="Método de pago"
              {...register("metodo")}
            />
          </div>

          {/* ENVIO */}
          <div className="mb-2 p-2">
            <label className="text-gray-800 text-md font-bold" htmlFor="nombre">
              Envío
            </label>
            <input
              id="envio"
              type="checkbox"
              className="mx-2 px-2 py-1 bg-gray-100 rounded-lg"
              {...register("envio")}
              onChange={handleChange}
            />
          </div>

          {/* COSTO DE ENVIO */}
          {envio ? (
            <div className="mb-2 p-2">
              <label
                className="text-gray-800 text-md font-bold"
                htmlFor="nombre"
              >
                Costo de envío
              </label>
              <input
                id="costo"
                type="number"
                className="block w-full px-2 py-1 bg-gray-100 rounded-lg"
                placeholder="Costo de envío"
                {...register("costo")}
              />
            </div>
          ) : null}

          <hr className="my-2" />

          <div className="flex justify-center">
            <input
              type="submit"
              className=" max-w-[40%] rounded-md w-full bg-slate-800 p-3 uppercase font-bold text-white text-xs md:text-lg  hover:bg-slate-600"
              value="Confirmar cliente"
            />
          </div>
        </form>
        {finalizar ? (
          <button
            onClick={postPresupuesto}
            className=" rounded-md w-full bg-red-800 p-3 uppercase font-bold text-white text-xs md:text-lg hover:bg-slate-800"
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

"use client";

import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation';
import { toastTrigger } from './helpers';
import axios from "axios";

export default function Home() {

  const { register, handleSubmit, reset } = useForm();
  const router = useRouter()

  async function postUserData(data) {
    console.log(data)
    axios
      .post(
        "https://zingueria-login.vercel.app/api/session/",
        data
      )
      .then(function (response) {
        console.log("Data:", response);
        console.log("Respuesta:", response.data.token, response.status);
        const session = response.data.token
        localStorage.setItem('sessionID', session)
        response.status === 201 ? router.push('/dashboard') : toastTrigger('error', 'Usuario no encontrado o incorrecto.')
      })
      .catch(function (error) {
        reset();
        toastTrigger('error', 'Usuario no encontrado o incorrecto.')
        console.log(error);
      });
  }

  return (
    <main className="min-h-[100dvh] flex flex-col justify-center items-center bg-pri">
      <form
        onSubmit={ handleSubmit((data) => {
          postUserData(data)
        })}
        className="bg-slate-900 rounded-lg p-4 flex flex-col gap-8"
      >
        <div>
          <img className=" max-h-24" src="./logoWhite.png" alt="logo" />
        </div>
        <h1 className="text-white text-lg text-center">Acceso a sistemas</h1>
        <div className="flex flex-col justify-center items-center gap-2">
          <input
            className="rounded px-1 w-full"
            {...register('username')}
            placeholder="Usuario"
            autoComplete="user"
          />
          <input
            className="rounded px-1 w-full"
            type='password'
            {...register('password')}
            placeholder="Contraseña"
            autoComplete="new-password"
          />          

          <button
            className="text-white bg-slate-500 py-1 px-2 w-full text-sm rounded text-center hover:bg-slate-400"            
            type="submit"
          >            
            Ingresar
          </button>                     
        </div>
      </form>            
    </main>
  );
}

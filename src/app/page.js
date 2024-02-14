"use client";
import { useForm } from "react-hook-form";
import { getData } from "./components/Services";



// admin: info@zingueriaadaro.com.ar
// pss: zingueria1695Adaro


export default function Home() {
  const { register, handleSubmit, reset } = useForm(); 
  

  return (
    <main className="min-h-[100dvh] flex flex-col justify-center items-center bg-pri">
      <form
        onSubmit={ handleSubmit((data) => {
          console.log(data)
          getData();

                
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
            autocomplete="user"
          />
          <input
            className="rounded px-1 w-full"
            {...register('password')}
            placeholder="Contraseña"
            autocomplete="new-password"
          />
          <label htmlFor="">
          info@zingueriaadaro.com.ar            
          </label>

          <label htmlFor="">
          zingueria1695Adaro
          </label>

          <button
            className="text-white bg-slate-500 py-1 px-2 w-full text-sm rounded text-center hover:bg-slate-400"            
            type="submit"
          >            
            Ingresar
          </button>
          <button
            className="text-white bg-slate-500 py-1 px-2 w-full text-sm rounded text-center hover:bg-slate-400"            
          >
            Olvidaste la contraseña?
          </button>
        </div>
      </form>
    </main>
  );
}

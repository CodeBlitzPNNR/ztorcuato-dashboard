'use client';

import { useAuth } from "../helpers";
import "./dashboardStyles.css";


export default function Home() {
  

  const showInfo = useAuth();

  return (
    <>
      {showInfo ? (

        <main className=" dashboard min-h-[100dvh] flex flex-col justify-center items-center">
          <img className=" w-[35%] p-2" src="/logoWhite.png" alt="logo" />
        </main>

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
    </>
  );
}

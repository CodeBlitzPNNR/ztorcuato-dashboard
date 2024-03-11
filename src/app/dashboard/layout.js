'use client';

import SessionError from "../components/SessionError";
import { useAuth } from "../helpers";

export default function DashboardLayout({ children }) {
  
  const showInfo = useAuth();

  return (
    <>    
    
      <main className="flex min-h-screen ">
      <aside className="bg-slate-800 w-1/5 flex flex-col justify-between py-4">
        <div className="flex flex-col justify-center items-center">
          <img className="max-w-[70%] p-2" src="/logoWhite.png" alt="logo" />
          { showInfo ? (
          <nav>
            <ul className="font-semibold my-2 py-2 px-8 text-white">
              <li className="hover:translate-x-3 hover:text-pri duration-150 text-xl">
                <a href="/dashboard/presupuestos">Presupuestos</a>
              </li>
              <li className="hover:translate-x-3 hover:text-pri duration-150">
                <a href="/dashboard/nuevoPresupuesto">- Nuevo presupuesto</a>
              </li>
            </ul>
          </nav>
          ) : (
              null
            )}    
        </div>
        <div className="flex justify-center">
          <a
            className="font-semibold bg-slate-500 px-4 py-2 rounded-xl hover:bg-slate-300"
            href="https://codeblitzpnnr.github.io/zingueria-torcuato/index.html#"
          >
            Salir del sistema
          </a>
        </div>
      </aside>
      <section className="w-full">{children}</section>
    </main>
    
    </>
  );
}

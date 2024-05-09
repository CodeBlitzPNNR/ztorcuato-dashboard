'use client';

import SessionError from "../components/SessionError";
import { useAuth } from "../helpers";

export default function DashboardLayout({ children }) {
    const showInfo = useAuth();

    const handleLogOut = () => {
      localStorage.removeItem('sessionID')
    }

  return (
    <>    
    
      <main className="flex min-h-screen ">
      <aside className="bg-slate-800 w-1/5 flex flex-col justify-between py-4">
        <div className="flex flex-col justify-center items-center">
          <img className="max-w-[250px] w-full p-2" src="/logoWhite.png" alt="logo" />
          { showInfo ? (
          <nav>
            <ul className="font-semibold my-2 py-2 px-8 text-white">
              <li className="hover:translate-x-3 hover:text-pri duration-150 text-xs md:text-lg mb-2">
                <a href="/dashboard/presupuestos">Presupuestos</a>
              </li>
              <li className="hover:translate-x-3 hover:text-pri duration-150 text-xs md:text-lg mb-2">
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
            onClick={() => handleLogOut()}
            className="font-semibold bg-slate-500 px-4 py-2 rounded-xl hover:bg-slate-300 text-xs md:text-lg"
            href="/"
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

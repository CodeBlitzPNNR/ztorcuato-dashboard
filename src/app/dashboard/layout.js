
  export default function DashboardLayout({ children }) {
    return (
      <main className="flex min-h-screen ">
        <sidebar className='bg-slate-800 w-1/5 flex flex-col justify-between py-4'>
          <div className="flex flex-col justify-center items-center">
          <img className="max-w-[70%] p-2" src="/logoWhite.png" alt="logo" />          
          <nav>
            <ul className=" text-white font-semibold py-2 px-8">
              <li className="hover:translate-x-3 hover:text-pri duration-150 text-xl"><a href="/dashboard/clientes">Clientes</a></li>
              <li className="hover:translate-x-3 hover:text-pri duration-150"><a href="/dashboard/nuevoCliente">- Nuevo cliente</a></li>
              <br />
              <li className="hover:translate-x-3 hover:text-pri duration-150 text-xl"><a href="/dashboard/presupuestos">Presupuestos</a></li>
              <li className="hover:translate-x-3 hover:text-pri duration-150"><a href="/dashboard/nuevoPresupuesto">- Nuevo presupuesto</a></li>
            </ul>                                   
          </nav> 
          </div>         
          <div className="flex justify-center">
              <a className="font-semibold bg-slate-500 px-4 py-2 rounded-xl hover:bg-slate-300" href="https://codeblitzpnnr.github.io/zingueria-torcuato/index.html#">Salir del sistema</a>          
            </div>
        </sidebar>
        <section className="w-full">
          {children} 
        </section>
      </main>
      
    )
  }
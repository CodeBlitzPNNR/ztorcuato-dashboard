export default function Sidebar() {
    return (
      <sidebar className="bg-blue-400 min-w-56 flex justify-center py-4">        
          <ul className="flex flex-col gap-8 items-center">
            <li>
              <a className="font-bold text-slate-800 bg-white py-2 px-4 rounded-3xl hover:bg-slate-200 shadow-xl" href="">Clientes</a>
            </li>
            <li>
              <a className="font-bold text-slate-800 bg-white py-2 px-4 rounded-3xl hover:bg-slate-200 shadow-xl" href="">Presupuestos</a>
            </li>
          </ul>        
      </sidebar>
    );
  }
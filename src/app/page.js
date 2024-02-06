
export default function Home() {
  
  return (
    <main className="min-h-[100dvh] flex flex-col justify-center items-center bg-pri">
      <form action="" className="bg-slate-900 rounded-lg p-4 flex flex-col gap-8">
        <div className="">
          <img className=" max-h-24" src="./logoWhite.png" alt="logo" />
        </div>        
        <h1 className="text-white text-lg text-center">Acceso a sistemas</h1>
        <div className="flex flex-col justify-center items-center gap-2">          
            <input className="rounded px-1 w-full" name="username" placeholder="Usuario" autocomplete="user" />                    
            <input
            className="rounded px-1 w-full"
              name="password"
              placeholder="Contraseña"
              autocomplete="new-password"
            />
            
          <a className="text-white bg-slate-500 py-1 px-2 w-full text-sm rounded text-center hover:bg-slate-400" href="/dashboard" class="link">
            Ingresar
          </a>      
          <a className="text-white bg-slate-500 py-1 px-2 w-full text-sm rounded text-center hover:bg-slate-400" href="#" class="link">
            Olvidaste la contraseña?
          </a>
          
        </div>        
      </form>
    </main>
  );
}

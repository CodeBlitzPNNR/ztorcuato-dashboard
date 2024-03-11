export default function SessionError ( text ) {
    <div className="w-full h-full flex justify-center items-center max-h-[400px] max-w-[800px]">
          <div className="bg-slate-300 p-11 rounded-xl items-center flex flex-col gap-4">
            <h6>{ text }</h6>
            <a
              href="/"
              className="bg-slate-700 text-white py-2 px-4 rounded-xl"
            >
              Volver al login
            </a>
          </div>
        </div>
}

const ClientCard = ({ id, razonSocial, cuit, direccion, email, telefono }) => {
  return (
    <div className="bg-slate-300 p-2 rounded-xl">
        <div className="flex justify-between font-bold text-2xl py-2">
          <h2>{razonSocial}</h2><h2>{cuit}</h2>
        </div>
        <div className="flex justify-between items-center">
          <div className="p-2">
            <p>📍 {direccion}</p>
            <p>📧 {email}</p>
            <p>📞 {telefono}</p>
          </div>
          <div className="p-2">
            <a className="bg-slate-900 text-white rounded-lg py-2 px-4 hover:bg-slate-700" href={`http://localhost:3000/dashboard/cliente/${id}`}>Ver</a>
          </div>
        </div>                        
    </div>    
  )
}

export default ClientCard
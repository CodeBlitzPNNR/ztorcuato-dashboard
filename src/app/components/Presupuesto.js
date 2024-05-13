import axios from "axios";
import PdfGen from "./PdfGen"

async function getData( id ) {    
  const axiosConfig = {
    method: 'GET',
    url: `https://api-zingueria-adaro-cp.vercel.app/api/presupuestos/${id.params}`,
    headers: {
      'Content-Type': 'application/json'
    },
  }; 

  const response = await axios(axiosConfig);  
  return response.data 
}

export default async function Presupuesto ( params ) {
    const presupuesto = await getData( params );      

    return (
        <div className="w-full container m-auto">
            <PdfGen pres={ presupuesto }/>            
        </div>
    )
};
import { toastTrigger } from "../helpers";
import PdfGen from "./PdfGen"

async function getData( id ) {    
    const PRESUP_ID_URL = `https://my-json-server.typicode.com/CodeBlitzPNNR/CodeBlitz-JSON-mock2/presupuestos/${id.params}`
    const res = await fetch(PRESUP_ID_URL)
    const data = await res.json();
    try {            
        return data        
    } catch (error) {
        toastTrigger('error', 'Algo salio mal.');        
    }
}

export default async function Presupuesto ( params ) {
    const presupuesto = await getData( params );      
        
    // MOCK DE PRESUPUESTO
    const presupuesto1 = {
        "id": 167,
        "razonSocial": "Los pollos hermanos",
        "cuit": 30335038623,
        "fecha": "2024-02-12",
        "metodo": "Efectivo",
        "envio": false,
        "total": 139000,
        "detalle": [
          {
            "codigo": "13",
            "descripcion": "Chapas Galvanizadas",
            "cantidad": "30",
            "precio": "3200",
            "impuesto": true,
            "total": "116160"            
          },
          {
            "codigo": "14",
            "descripcion": "Chapas Translucidas verdes",
            "cantidad": "12",
            "precio": "3800",
            "impuesto": true,
            "total": "55176"
          },
          {
            "codigo": "1",
            "descripcion": "Mano de Obra",
            "cantidad": "1",
            "precio": "120000",
            "impuesto": false,
            "total": "120000"
          },
          {
            "codigo": "4",
            "descripcion": "Herrajes y Fierros de soldado",
            "cantidad": "1",
            "precio": "12000",
            "impuesto": false,
            "total": "12000"
          }
        ]
      };

    return (
        <div className="w-full container m-auto">
            <PdfGen pres={ presupuesto }/>            
        </div>
    )
};
import PdfGen from "./PdfGen"

async function getData() {
    const res = await fetch(`https://my-json-server.typicode.com/CodeBlitzPNNR/CodeBlitz-JSON-mock2/presupuestos/1`)
    try {
        return res.json()
    } catch (error) {
        console.log('Salio todo como el orto.', error)
    }
}

export default async function Presupuesto () {
    const presupuesto = await getData();
    console.log(presupuesto)

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
            "impuesto": false
          },
          {
            "codigo": "14",
            "descripcion": "Chapas Translucidas verdes",
            "cantidad": "12",
            "precio": "3800",
            "impuesto": false
          },
          {
            "codigo": "1",
            "descripcion": "Mano de Obra",
            "cantidad": "1",
            "precio": "120000",
            "impuesto": false
          },
          {
            "codigo": "4",
            "descripcion": "Herrajes y Fierros de soldado",
            "cantidad": "1",
            "precio": "12000",
            "impuesto": false
          }
        ]
      };

    return (
        <div className="w-full container m-auto">
            {/* <PdfGen pres={presupuesto1}/> */}
            HOLA SOY UN COMPONENTE CORNUDO
        </div>
    )
};
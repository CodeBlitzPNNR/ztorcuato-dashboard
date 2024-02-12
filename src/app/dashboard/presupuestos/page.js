
export default function Home() {
  
const presupMock = {
  razonSocial: "Los pollos hermanos",
  fecha: "2024-02-12",
  metodo: "Efectivo",
  envio: false,
  detalle: [
    {
      codigo: "13",
      descripcion: "Chapas Galvanizadas",
      cantidad: "30",
      precio: "3200",
      impuesto: false,
    },
    {
      codigo: "14",
      descripcion: "Chapas Translucidas verdes",
      cantidad: "12",
      precio: "3800",
      impuesto: false,
    },
    {
      codigo: "1",
      descripcion: "Mano de Obra",
      cantidad: "1",
      precio: "120000",
      impuesto: false,
    },
    {
      codigo: "4",
      descripcion: "Herrajes y Fierros de soldado",
      cantidad: "1",
      precio: "12000",
      impuesto: false,
    },
  ],
};

  return (
    <main className="min-h-[100dvh] flex flex-col justify-center items-center bg-pri">
      <div>botones</div>
    </main>
  );
}


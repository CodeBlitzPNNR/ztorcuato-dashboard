import { useParams } from "next/navigation";
import clients from '../../clients'

export default function Home({ cliente }) {

    const { id } = useParams()    
    console.log(id)

    const cliente = id? clients.filter((client) => client.id === id) : null
  
    return (
      <main className="min-h-[100dvh] flex flex-col justify-center items-center">
        Cliente
      </main>
    );
  }
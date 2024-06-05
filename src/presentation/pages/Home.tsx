import { ListaDeRegalos } from "../components/home/ListaDeRegalos";
import { Welcome } from "../components/home/Welcome";


export default function Home() {
  return (
    <main className="bg-orange-50">
        <Welcome/>
        <ListaDeRegalos/>
    </main>
  )
}

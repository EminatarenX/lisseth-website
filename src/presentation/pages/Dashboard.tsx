import { Container } from "../components/Dashboard/Container"

export const Dashboard = () => {
  return (
    <div className="bg-slate-200 p-5 ">
        <h1 className="text-6xl font-semibold text-slate-800">Bienvenid@</h1>
        <div className="flex flex-col lg:flex-row gap-5">
        <Container title="Regalos">
            hola
        </Container>

        <Container title="Mesa de Regalos">
            hola
        </Container>
        </div>
    </div>
  )
}

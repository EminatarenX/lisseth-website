import { Regalos } from "./Regalos";

export const ListaDeRegalos = () => {
  return (
    <div className="bg-white  md:mx-[100px] lg:mx-[200px] xl:mx-[400px] ">
      <section className="flex  flex-col items-center gap-10">
        <div className="bg-[#53746E] rounded-full p-3 ">
          <h1 className="text-white text-4xl tracking-wider font-thin ">
            LISTA DE REGALOS
          </h1>
        </div>
        <div className="flex flex-col gap-10">
          <p className="text-center text-sm mx-6">
            Les compartimos una lista de regalos, para que puedan 
            seleccionar su favorito y comprarlo en la tienda que prefieran.
          </p>
          <p className=" text-center font-semibold text-sm">
            SELECCIONA UNA IMAGEN PARA APARTAR TU REGALO
          </p>
        </div>
      </section>
      <Regalos />
    </div>
  );
};

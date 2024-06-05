import { Regalos } from "./Regalos";

export const ListaDeRegalos = () => {
  return (
    <div className="bg-white lg:mx-[300px] xl:mx-[500px]">
      <section className="flex flex-col items-center gap-10">
        <div className="bg-[#1d7c7c] rounded-full p-6 ">
          <h1 className="text-white text-4xl tracking-wider ">
            LISTA DE REGALOS
          </h1>
        </div>
        <div className="flex flex-col gap-10">
          <p className="text-2xl text-center">
            Les compartimos una lista de regalos, para que puedan <br />
            seleccionar su favorito y comprarlo en la tienda que prefieran.
          </p>
          <p className="text-2xl text-center font-semibold">
            SELECCIONA UNA IMAGEN PARA APARTAR TU REGALO
          </p>
        </div>
      </section>
      <Regalos />
    </div>
  );
};

import { useEffect, useState } from "react";
import { Regalo } from "../home/types";
import { fetchService } from "../../../services";

export const RegalosApartados = () => {
  const [regalosApartados, setRegalosApartados] = useState<Regalo[]>([]);
  useEffect(() => {
    const fetchRegalosApartados = async () => {
      const data = await fetchService.get("/regalo/apartados");
      console.log(data);
      setRegalosApartados(data);
    };
    fetchRegalosApartados();
  }, []);
  return (
    <>
      {regalosApartados.length === 0 ? (
        <p>No hay regalos apartados</p>
      ) : (
        regalosApartados.map((regalo) => (
          <div key={regalo.id} className="flex h-20 w-full gap-2 shadow p-2 justify-start">
            <div className="w-1/8">
              <img
                src={regalo.image}
                alt={regalo.name}
                className="object-contain h-full w-full"
              />
            </div>
            <div>
              <h1 className="font-bold">{regalo.name}</h1>

              <p>{regalo.user?.fullName}</p>
              <p>{regalo.user?.phone}</p>
            </div>
          </div>
        ))
      )}
    </>
  );
};

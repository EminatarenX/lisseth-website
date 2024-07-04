import { useEffect, useState } from "react";
import { Regalo } from "../home/types";
import { fetchService } from "../../../services";
import PersonRemoveOutlinedIcon from '@mui/icons-material/PersonRemoveOutlined';
import Swal from "sweetalert2";

export const RegalosApartados = () => {
  const [regalosApartados, setRegalosApartados] = useState<Regalo[]>([]);

  const handleLiberarRegalo = async(id: string) => {
    try {
      await fetchService.patch(`/regalo/apartados/${id}`, {available: true})
      Swal.fire('Regalo disponible', 'El regalo puede ser apartado por alguien mas de nuevo', 'success')
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    const fetchRegalosApartados = async () => {
      const data = await fetchService.get("/regalo/apartados");
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
          <div key={regalo.id} className="flex h-20 w-full gap-2 shadow  justify-start">
            <div className="w-1/8 p-2">
              <img
                src={regalo.image}
                alt={regalo.name}
                className="object-contain h-full w-full"
              />
            </div>
            <div className="w-full p-2">
              <h1 className="font-bold">{regalo.name}</h1>

              <p>{regalo.user?.fullName}</p>
              <p>{regalo.user?.phone}</p>
            </div>
            <button className="px-5"
              onClick={() => handleLiberarRegalo(regalo.id)}
            >
              <PersonRemoveOutlinedIcon sx={{color: 'gray'}}/>
            </button>
            
          </div>
        ))
      )}
    </>
  );
};

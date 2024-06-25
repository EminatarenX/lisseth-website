import { Button, Modal } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { useState } from "react";
import { IRegalo, Regalo as IRegaloPro } from "./types";
import { fetchService } from "../../../services";
import Swal from "sweetalert2";
import { ModalEditRegalo } from "../Dashboard/ModalEditRegalo";
export interface RegaloEditable {
  id: string
  name: string
  image: string
  urls: string[]
  available: boolean
}
export const Regalo = ({ regalo }: IRegalo) => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);  
  const [ gift, setRegalo ] = useState<IRegaloPro | null>(null);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleDelete = async (id: string) => {
    setOpen(false);
    const result = await Swal.fire({
        title: "¿Estás seguro?",
        text: "No podrás revertir esta acción",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
        
      });
    if (!result.isConfirmed) return;

    try {
      await fetchService.delete(`/regalo/${id}`);
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      alert("Error al eliminar el regalo")
    }
  }

  const handleEditModal = (regalo: IRegaloPro) => {
    setOpen(false);
    setRegalo(regalo);
    setOpenEdit(true);
  }

  const handleApartarRegalo = (regaloId: string) => {
    setOpen(false)
    const userStorage = localStorage.getItem("user");
    if (!userStorage) return
    const userId = JSON.parse(userStorage).id;
    Swal.fire({
     title: "¿Estás seguro?",
      text: "Podrás ver el regalo apartado en tu perfil, puedes cambiar de opinión en cualquier momento",
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, apartar',
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await fetchService.patch(`/user/${userId}/apartar/${regaloId}`,{} );
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        } catch (error) {
          alert("Error al apartar el regalo")
        }
      }
    });
  }

  console.log(regalo)

  return (
    <>
      <ModalEditRegalo open={openEdit} setOpen={setOpenEdit} regalo={gift} />

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex justify-center items-center"
      >
        <div className="bg-white w-[400px] p-5 rounded-md">
          <img
            className="object-cover w-full h-[250px]"
            src={regalo.image}
            alt="regalo.png"
          />
          <h1 className="text-center text-lg font-semibold text-neutral-700">
            {regalo.name}
          </h1>
          <p className="text-center text-sm text-neutral-500 mt-2">{""}</p>
          <div className="flex justify-between mt-5 flex-col">
            <h3 className="text-lg font-semibold text-neutral-700">
              Links de referencia
            </h3>
            {regalo.urls.length > 0 &&
              regalo.urls.map((url, index) => {
                return (
                  <a
                    key={index}
                    href={url}
                    target="_blank"
                    className="text-sm truncate text-[#1d7c7c]"
                  >
                    {url}
                  </a>
                );
              })}
            <p className="text-sm text-neutral-500">
              {regalo.available ? "Disponible" : `Apartado por ${regalo.user?.fullName}`}
            </p>
          </div>
          {window.location.pathname === "/dashboard" ? (
            <div className="flex gap-2">
            <Button
              onClick={() => handleDelete(regalo.id)}
              variant="contained"
              color="error"
              sx={{ mt: 2, p: 1 }}
              className="w-full"
            >
              <DeleteIcon />
            </Button>
            <Button
              onClick={() => handleEditModal(regalo)}
              variant="contained"
              color="primary"
              sx={{ mt: 2, p: 1 }}
              className="w-full"
            >
              <EditNoteIcon/>
            </Button>
            </div>
          ) : (
            <Button
              onClick={() => handleApartarRegalo(regalo.id)}
              variant="contained"
              color="primary"
              sx={{ mt: 2, p: 1 }}
              className="w-full"
              disabled={!regalo.available}
            >
              {regalo.available ? "Apartar regalo" : "Regalo apartado"}
            </Button>
          )}
        </div>
      </Modal>
      <div
        className=" flex flex-col justify-between hover:cursor-pointer shadow-lg rounded-xl hover:-translate-y-10 transition-all"
        onClick={handleOpen}
      >
        <div className="w-full">
          <img
            className="object-cointain "
            src={regalo.image}
            alt="regalo.png"
            height={200}
            width={200}
          />
        </div>
        <h1 className=" p-2 text-center font-semibold text-xs  text-neutral-700 uppercase">
          {regalo.name}
        </h1>
      </div>
    </>
  );
};

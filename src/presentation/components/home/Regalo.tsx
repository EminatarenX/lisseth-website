import { Button, Modal } from "@mui/material";
import { useState } from "react";
import { IRegalo } from "./types";
export const Regalo = ({ regalo }: IRegalo) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
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
              {regalo.available ? "Disponible" : "Apartado por"}
            </p>
          </div>
          {window.location.pathname === "/dashboard" ? (
            <Button
              variant="contained"
              color="warning"
              sx={{ mt: 2, p: 1 }}
              className="w-full"
            >
              Eliminar regalo
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2, p: 1 }}
              className="w-full"
            >
              Apartar regalo
            </Button>
          )}
        </div>
      </Modal>
      <div
        className="relative flex flex-col justify-between hover:cursor-pointer"
        onClick={handleOpen}
      >
        <div className="relative flex justify-center w-full h-[300px]">
          <img
            className="object-cover w-full"
            src={regalo.image}
            alt="regalo.png"
          />
        </div>
        <h1 className="text-center font-semibold text-xl text-neutral-700 uppercase">
          {regalo.name}
        </h1>
      </div>
    </>
  );
};

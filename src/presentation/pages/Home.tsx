import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { ListaDeRegalos } from "../components/home/ListaDeRegalos";
import { Welcome } from "../components/home/Welcome";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { fetchService } from "../../services";
import { AxiosError } from "axios";
import { Informacion } from "../components/home/informacion";
type Inputs = {
  name: string;
  phone: string;
};

export default function Home() {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const newUser = {
      fullname: data.name,
      telephone: data.phone,
    };
    try {
    
      const user = await fetchService.post("/user", newUser);
      localStorage.setItem("user", JSON.stringify(user));
      handleClose();
    } catch (error: unknown) {
      const err = error as AxiosError<{ message: string[] }>;
      const errorMessage = err.response?.data.message[0] || "Error desconocido"; // Asigna un mensaje predeterminado si no hay mensaje de error
      setError(errorMessage); // Ahora siempre pasamos un string a setError
    } 
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      handleOpen();
    }
  }, []);

  return (
    <div className="bg-orange-50">
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Gracias por visitar nuestra pagina de regalos!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Por favor ingrese su nombre y numero de telefono para poder
              continuar
            </Typography>
            {error ? (
              <p className="border border-red-500 rounded p-3 text-center text-red-500 mt-5">
                {error}
              </p>
            ) : null}
            {errors.name ? (
              <p className="border border-red-500 rounded p-3 text-center text-red-500 mt-5">
                El campo nombre es requerido
              </p>
            ) : errors.phone ? (
              <p className="border border-red-500 rounded p-3 text-center text-red-500 mt-5">
                El numero tiene que ser de 10 dígitos
              </p>
            ) : null}
            <TextField
              id="standart-basic"
              label="Nombre completo"
              variant="standard"
              sx={{ mt: 2 }}
              className="w-full"
              {...register("name", { required: true })}
            />
            <TextField
              id="standart-basic"
              label="Numero de telefono"
              variant="standard"
              sx={{ mt: 2 }}
              className="w-full"
              {...register("phone", { required: true, minLength: 10 })}
            />
            <Button
              variant="contained"
              color="success"
              sx={{ mt: 3 }}
              className="w-full"
              type="submit"
            >
              Success
            </Button>
          </form>
        </Box>
      </Modal>
      <main>
        <Welcome />
        <ListaDeRegalos />
        <Informacion />
      </main>
      <footer className="bg-[#53746E] text-white text-center p-32 ">
        <p>© 2021 Lisseth & Roberto</p>
      </footer>
    </div>
  );
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

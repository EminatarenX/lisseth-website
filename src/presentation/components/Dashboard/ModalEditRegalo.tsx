import { Modal, Box, Typography, Stack, TextField, IconButton, Button } from '@mui/material'
import { useForm } from 'react-hook-form';
import { fetchService } from '../../../services';
import Swal from 'sweetalert2';
import { Regalo } from '../home/types';

interface Props {
    open: boolean;
    setOpen: (open: boolean) => void;
    regalo: Regalo | null;
}
type Inputs = {
    name: string;
    url: string
    urla: string;
    urlb: string;
    urlc: string
  };

export const ModalEditRegalo = ({open, setOpen, regalo}: Props) => {
    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit = async (data: Inputs) => {
        const formData = {
            name: data.name,
            urls: [data.urla, data.urlb, data.urlc]
        }
        try {
            await fetchService.patch(`/regalo/${regalo?.id}`, formData)
            setOpen(false)
            Swal.fire({title: 'Listo', text: 'Se recargara la pagina para ver los cambios', icon: 'success'})
            setTimeout(() => {
                window.location.reload()
            }, 3000)
        } catch (error) {
            console.log(error)
            alert('ocurrio un error')
            
        }
    }
  return (
    <Modal
    open={open}
    onClose={() => setOpen(false)}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}
  >
    <Box sx={{backgroundColor: 'white', padding: 3, borderRadius: 3}}>
      <Typography
        id="modal-modal-title"
        variant="h6"
        component="h2"
        className={" text-slate-700"}
      >
        Llena los campos para agregar un nuevo regalo
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>

        <Stack direction="row" spacing={2}>
        <TextField
          id="standart-basic"
          label="Nombre del producto"
          variant="standard"
          defaultValue={regalo?.name}
          sx={{ mt: 2 }}
          className="w-full"
          {...register("name", { required: true })}
        />
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            {/* <PhotoCamera /> */}
          </IconButton>
        </Stack>
        <TextField
          id="standart-basic"
          label="Link de referencia ( opcional )"
          defaultValue={regalo?.urls[0]}
          variant="standard"
          sx={{ mt: 2 }}
          className="w-full"
          {...register("urla" )}
        />
        <TextField
          id="standart-basic"
          label="Link de referencia ( opcional )"
          variant="standard"
          sx={{ mt: 2 }}
          defaultValue={regalo?.urls[1]}
          className="w-full"
          {...register("urlb")}
        />
        <TextField
          id="standart-basic"
          label="Link de referencia ( opcional )"
          variant="standard"
          defaultValue={regalo?.urls[2]}
          sx={{ mt: 2 }}
          className="w-full"
          {...register("urlc")}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 3, p: 2 }}
          className="w-full"
        >
          Finalizar edición
        </Button>
      </form>
    </Box>
  </Modal>
  )
}

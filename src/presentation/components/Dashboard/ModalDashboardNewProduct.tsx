import { Box, Button, IconButton, Modal, Stack, TextField, Typography } from "@mui/material";
import { PhotoCamera } from '@mui/icons-material'
import { useForm, SubmitHandler } from 'react-hook-form'
import { fetchService} from '../../../services'
type Inputs = {
    name: string;
    url: string
    urla: string;
    urlb: string;
    urlc: string
    image: FileList;
  };

interface Props {
    isOpenAddGift: boolean;
    setIsOpenAddGift: (value: boolean) => void;
  
}

export const ModalDashboardNewProduct = ({isOpenAddGift, setIsOpenAddGift}: Props) => {

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<Inputs>();
  
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
  
      const formData = new FormData()
      formData.append('name', data.name)
      formData.append('image', data.image[0])
      formData.append('urls', data.urla)
      formData.append('urls', data.urlb)
      formData.append('urls', data.urlc)
      
      try {
        const data = await fetchService.post('/gift', formData)
        console.log(data)
        alert('Regalo agregado')
      } catch (error) {
      
        console.log(error)
        alert('ocurrio un error')
      }finally{
        window.location.reload()
        setIsOpenAddGift(false)
      }
    };
  return (
    <>
    <Modal
        open={isOpenAddGift}
        onClose={() => setIsOpenAddGift(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
              sx={{ mt: 2 }}
              className="w-full"
              {...register("name", { required: true })}
            />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
              >
                <input hidden accept="image/*" type="file" {...register("image", { required: true})}/>
                <PhotoCamera />
              </IconButton>
            </Stack>
            <TextField
              id="standart-basic"
              label="Link de referencia ( opcional )"
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
              className="w-full"
              {...register("urlb")}
            />
            <TextField
              id="standart-basic"
              label="Link de referencia ( opcional )"
              variant="standard"
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
              Agregar un regalo
            </Button>
          </form>
        </Box>
      </Modal>
      </>
  )
}

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 5,
    borderRadius: 10,
  };
  
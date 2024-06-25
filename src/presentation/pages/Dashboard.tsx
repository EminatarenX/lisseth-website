import { Button } from '@mui/material'
import { Container } from "../components/Dashboard/Container";
import { useState } from "react";
import { Regalos } from "../components/home/Regalos";
import { ModalDashboardNewProduct } from '../components/Dashboard/ModalDashboardNewProduct'
import { RegalosApartados } from '../components/Dashboard/RegaloApartado';



export const Dashboard = () => {
  const [isOpenAddGift, setIsOpenAddGift] = useState(false);

  return (
    <div className="bg-slate-200 p-5 ">
      <ModalDashboardNewProduct isOpenAddGift={isOpenAddGift} setIsOpenAddGift={setIsOpenAddGift}/>
      <h1 className="text-6xl font-semibold text-slate-800">Dashboard</h1>
      <div className="flex flex-col lg:flex-row gap-5">
        <Container title="Regalos apartados">
          <article className='flex flex-col gap-5 mt-5'>
           <RegalosApartados />
          </article>
        </Container>

        <Container title="Mesa de Regalos">
          <Button
            type="button"
            onClick={() => setIsOpenAddGift(!isOpenAddGift)}
            variant="contained"
            color="primary"
            sx={{ mt: 3, p: 2 }}
            className="w-full"
          >
            Agregar un regalo
          </Button>
          <Regalos />
        </Container>
      </div>
    </div>
  );
};



export const Informacion = () => {

  return (
    <section className="bg-white md:mx-[100px] lg:mx-[200px] xl:mx-[400px] flex flex-col gap-5 relative">
    <p className="text-center tracking-wider my-10">
      Les compartimos imágenes de referencia, en algunos sugerimos marca o <br />
      color pero realmente lo que nos quieran regalar lo recibimos con
      mucho amor{" "}
    </p>
    {/* <div className="flex justify-center w-full">
    <article className="grid lg:grid-cols-8 grid-cols-4 gap-5">
        {
            imagenes.map( (imagen, i) => (
                <img src={`./${imagen.name}`} alt={imagen.name.split('.')[0]} key={i} className={`${i === 6 ? 'object-cover': 'object-cover'} h-20 w-20`} />
            ))
        }
    </article>
    </div> */}
   <div className="flex justify-center">
   <p className="text-center tracking-wide p-2 rounded-full bg-[#53746E] text-white mx-5 w-full lg:w-1/2">
      Si tu compra es en línea o quieres enviar tu regalo <br />
      te compartimos nuestros datos {" "}
    </p>
   </div>
    <p className="text-center text-xl uppercase my-10">
      DIRECCION: <br /> <span className=" text-base">CALLE SAN FERNANDO #10,<br /> COL. PLAN DE AYALA AMPLIACION
      NORTE <br /> TUXTLA GUTIERREZ, CHIAPAS, 29020 <br /> ENTRE CALLES: <br /> Guadalajara y
      san miguel</span>
    </p>
      <div className='flex justify-center'>
      <p className="text-center"> <a href='https://wa.me/+529612490244'>Roberto zavala:  961 249 0244</a><br />
      <a href='https://wa.me/+528115898862'>Lisseth de los santos: 811 589 8862</a> </p>
      </div>
    <div className="flex justify-center my-5">
    <p className="text-center p-1 rounded-full bg-[#53746E] mx-5 w-full lg:w-1/2 text-white uppercase text-lg font-semibold">sI YA APARTASTE TU REGALO O <br/>
    TIENES ALGUNA DUDA, ENVIANOS UN WSP</p>
    </div>
    <img src="./thanks.png" alt="thanks" className="object-contain mx-5 lg:mx-32 mb-20" />
    {/* <img src="./floor-right.png" alt="floor_right" className="absolute left-0 bottom-32 lg:block hidden  lg:h-[500px]  lg:w-[300px] object-cover" /> */}
    {/* <img src="./floor-left.png" alt="floor_right" className="absolute right-0 top-20 lg:block hidden lg:h-[600px]  lg:w-[200px] object-cover" /> */}
  </section>
  )
}

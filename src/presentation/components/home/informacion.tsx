
export const Informacion = () => {
    const imagenes = [
        {name: 'amazon.png'},
        {name: 'mercadolibre.svg'},
        {name: 'temu.png'},
        {name: 'walmart.png'},
        {name: 'liverpool.webp'},
        {name: 'coopel.webp'},
        {name: 'sears.png'},
        {name: 'package.png'}

    ]
  return (
    <section className="bg-white md:mx-[100px] lg:mx-[200px] xl:mx-[400px] flex flex-col gap-5 relative">
    <p className="text-center tracking-wider">
      Les compartimos imágenes de referencia, en algunos sugerimos marca o <br />
      color pero realmente lo que nos quieran regalar lo recibimos con
      mucho amor{" "}
    </p>
    <div className="flex justify-center w-full">
    <article className="grid lg:grid-cols-8 grid-cols-4 gap-5">
        {
            imagenes.map( (imagen, i) => (
                <img src={`./${imagen.name}`} alt={imagen.name.split('.')[0]} key={i} className='object-contain h-20 w-20' />
            ))
        }
    </article>
    </div>
    <p className="text-center tracking-wide">
      Si tu compra es en línea o quieres enviar tu regalo te compartimos
      nuestros datos{" "}
    </p>
    <p className="text-center text-xl uppercase">
      DIRECCION: <br /> CALLE SAN FERNANDO #10,<br /> COL. PLAN DE AYALA AMPLIACION
      NORTE <br /> TUXTLA GUTIERREZ, CHIAPAS, 29020 <br /> ENTRE CALLES: <br /> Guadalajara y
      san miguel
    </p>
    <p className="text-center">Roberto zavala / Lisseth de los santos <br />
    961 249 0244 / 811 589 8862</p>
    <div className="flex justify-center">
    <p className="text-center p-1 rounded-full bg-[#53746E] mx-5 w-full lg:w-1/2 text-white uppercase text-lg">sI YA ENVIASTE TU REGALO O <br/>
    TIENES ALGUNA DUDA, ENVIANOS UN WSP</p>
    </div>
    <img src="./thanks.png" alt="thanks" className="object-contain mx-5 lg:mx-32 mb-20" />
    <img src="./floor-right.png" alt="floor_right" className="absolute left-0 bottom-32 lg:block hidden  lg:h-[650px]  lg:w-[300px] object-cover" />
    <img src="./floor-left.png" alt="floor_right" className="absolute right-0 top-20 lg:block hidden lg:h-[600px]  lg:w-[200px] object-cover" />
  </section>
  )
}
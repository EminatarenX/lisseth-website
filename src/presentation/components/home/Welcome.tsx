export const Welcome = () => {
  return (
    <section className="bg-white md:mx-[100px] lg:mx-[200px] xl:mx-[400px] relative">
      <article className="relative ">
        {/* <div className=" bg-slate-100 absolute top-0 w-full h-3/4 z-10" /> */}
        <img
          src="./hero2.png"
          alt="hero-img"
          className="object-cover w-full z-20"
        />
      </article>

      <div className="relative flex flex-col items-center py-10 gap-10">
        {/* <img src="./title.png" alt="pagina" className="-mt-20 absolute w-full object-cover"/> */}
        <h1 className="text-6xl great-vibes-regular lg:scale-[1.5]">Lisseth y <br /> Roberto</h1>
        <div className="border-y-2 border-black flex gap-10 ">
          <span className=" lg:text-xl font-semibold py-3 p-5 lg:pl-20 flex justify-center items-center" >SABADO</span>
          <span className=" border-x-2 border-black px-5 lg:px-14 py-3 lg:text-xl font-semibold">
            26 DE OCTUBRE 
          </span>
          <span className=" lg:text-xl font-semibold py-3 p-5 lg:pr-20">05:30 P.M.</span>
        </div>
        <img src="./image.png" alt="save_the_date" className="w-2/3 lg:w-1/3"/>
      </div>

      {/* <img src="./file.png" alt="plant" className="absolute -left-[610px] top-[50%] rotate-[290deg]"/>
      <img src="./file.png" alt="plant" className="absolute -right-[610px] top-[50%] rotate-[230deg]"/>
      <img src="./file.png" alt="plant" className="absolute -right-[610px] top-[90%] rotate-[290deg]"/>
      <img src="./file.png" alt="plant" className="absolute -left-[610px] top-[90%] rotate-[230deg]"/> */}
      <img src="./floor-right.png" alt="floor_right" className="absolute left-0 -bottom-60 lg:block hidden  lg:h-[650px]  lg:w-[300px] object-cover" />
      <img src="./floor-left.png" alt="floor_right" className="absolute right-0 -bottom-40 lg:block hidden  lg:h-[650px]  lg:w-[300px] object-cover" />
    </section>
  );
};

const Profiles = () => {
  return (
    <div>
      <div className="mt-[20px] w-full relative">
        <div className=" w-full block photo-and-buttons flex items-center justify-center ">
          <div className=" w-[442px] h-[442px]">
            <div className="w-[442px] h-[442px] bg-zinc-300 rounded-[300px]" />
            <div className="w-20 h-20 bg-green-400 rounded-[100px] relative bottom-[75px] left-[300px]">
              <div className="p-2 justify-center items-center gap-2.5 flex">
                <div className="w-6 h-6 relative" />
              </div>
            </div>
            <div className="w-20 h-20 bg-neutral-400 rounded-[100px] relative bottom-[150px] left-[75px]">
              <div className="p-2 justify-center items-center gap-2.5 flex">
                <div className="w-6 h-6 relative" />
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="mt-[20px] w-full block relative rounded-[300px]">
        <div className="details-and-data items-center justify-center">

          <div className="block text-center text-black text-4xl">¿Puede ser la mascota que encontraste?</div>
          <div className="block h-[148px] flex-col justify-start items-center gap-1.5">
            <div className="justify-start items-center gap-2">

              <div className="text-center text-black text-base font-bold font-['Poppins'] leading-normal tracking-tight">Juan</div>
            </div>
            <div className="text-center"><span>Perdido en<br /></span><span>Av. Sarmiento y 21 de Septiembre, Montevideo</span></div>
            <div className="text-center"><span>Detalles<br /></span><span>Tiene una pata de color blanco</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profiles

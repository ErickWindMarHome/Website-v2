import { useSelector } from 'react-redux'

const PorQue = () => {
  const mobileQuery = useSelector((state) => state.states.mobileQuery)
  const locacion = useSelector((state) => state.states.locacion)

  return locacion === 'pr' ? (
    <>
      <div className="box-border flex w-full items-center justify-center bg-[#e5e5eb] p-[50px] text-[#234992]" id="conocenos">
        <article className="mb-[40px] box-border flex w-full flex-col items-center justify-center text-[3rem] font-bold">
          <div className="flex items-center justify-center">
            <div className="mb-[5vh] w-full text-center text-[30px] md:text-[50px]">
              ¿POR QUÉ <br />
              WINDMAR HOME?
            </div>
          </div>
          <article className="flex h-full w-[80%] flex-col items-center justify-center md:h-full md:flex-row">
            <img
              className="W-[20%] mr-[20px] md:w-[30%]"
              src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/PorQue/WidnmarIcono01.webp"
              alt=""
            />
            <img
              className="W-[20%] mr-[20px] md:w-[30%]"
              src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/PorQue/WidnmarIcono02.webp"
              alt=""
            />
            <img
              className="W-[20%] mr-[20px] md:w-[30%]"
              src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/PorQue/WidnmarIcono03.webp"
              alt=""
            />
            <img
              className="W-[20%] mr-[20px] md:w-[30%]"
              src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/PorQue/WidnmarIcono04.webp"
              alt=""
            />
          </article>
          <p className="box-border pt-[40px] text-justify text-[1.15rem] font-normal" id="Description">
            Contamos con más de 20 años de experiencia energizando hogares y empresas en Puerto Rico y más recientemente en Florida, por medio de
            energía renovable. Nuestro equipo de profesionales altamente capacitado garantiza el mejor servicio de sistemas solares fotovoltaicos y
            otras alternativas de energía solar. ¡Confía en los expertos, únete a Windmar Home!
          </p>
        </article>
      </div>
    </>
  ) : (
    <>
      <div className="box-border flex w-full items-center justify-center bg-[#e5e5eb] p-[100px] text-[#234992]" id="conocenos">
        <article className="mb-[40px] box-border flex w-full flex-col items-center justify-center text-[3rem] font-bold">
          <div className="flex items-center justify-center">
            <div className="text-center">WHY WINDMAR SOLAR + ROOFING?</div>
          </div>
          <article className="flex h-full w-full flex-col items-center justify-center md:h-full md:w-[80%] md:flex-row">
            <img
              className="W-[20%] mr-[20px] md:w-[30%]"
              src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/PorQue/WidnmarIcono05.webp"
              alt=""
            />
            <img
              className="W-[20%] mr-[20px] md:w-[30%]"
              src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/PorQue/WidnmarIcono06.webp"
              alt=""
            />
            <img
              className="W-[20%] mr-[20px] md:w-[30%]"
              src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/PorQue/WidnmarIcono07.webp"
              alt=""
            />
            <img
              className="W-[20%] mr-[20px] md:w-[30%]"
              src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/PorQue/WidnmarIcono08.webp"
              alt=""
            />
          </article>
          <p className="box-border pt-[40px] text-justify text-[1.15rem] font-normal" id="Description">
            We have more than 20 years of experience energizing homes and businesses in Puerto Rico and more recently in Florida, through renewable
            energy. Our team of highly trained professionals guarantees the best service in solar photovoltaic systems and other solar energy
            alternatives, trust the experts, join Windmar Solar + Roofing!
          </p>
        </article>
      </div>
    </>
  )
}

export default PorQue

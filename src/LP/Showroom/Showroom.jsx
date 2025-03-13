import React from 'react'
import Carousel from '/src/LP/Showroom/components/Carousel'
import useTitle from '../../hooks/useTitle'
function Showroom() {
  useTitle('Team Jorge Serrano leads - WindMar')
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <section className="flex w-full flex-col items-center justify-center bg-[url('https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Showroom/Fondo+paneles+Solares+mobile-02.webp')] bg-cover bg-no-repeat md:bg-[url('https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Showroom/Fondo+paneles+solares+Desktop_Mesa+de+trabajo+1.webp')]">
        <img
          className="mt-[20px] w-[30%] md:mt-[50px] md:w-[10%]"
          src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/JorgeSerrano/Logo+wh-04.webp"
          alt=""
        />
        <h1 className="my-[20px] w-[85%] text-left text-[20px] text-white md:my-[50px] md:w-[70%] md:text-[45px]">
          <strong className="text-[#FF9E18]">Te invitamos</strong> a que pases por nuestro <strong className="text-[#FF9E18]">Showroom</strong> en la
          avenida <strong className="text-[#FF9E18]">Roosevelt</strong> en <strong className="text-[#FF9E18]">San Juan</strong> donde podrás:
        </h1>
      </section>
      <Carousel />
      <section className="my-10 hidden w-[90%] items-center justify-center px-10 md:flex md:flex-row">
        <div className="mx-8 flex w-full flex-col items-center justify-center rounded-[30px] bg-[#E4E4E4]">
          <img className="w-full" src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Showroom/Productos-07.webp" alt="" />
          <p className="w-[80%] px-[20px] py-[30px] text-[#70706F]">
            Conocer todo sobre nuestro proceso de <strong>sellado de techos</strong> (roofing) con Gardner.
          </p>
        </div>
        <div className="mx-8 flex w-full flex-col items-center justify-center rounded-[30px] bg-[#E4E4E4]">
          <img className="w-full" src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Showroom/Productos-06.webp" alt="" />
          <p className="w-[80%] px-[20px] py-[30px] text-[#70706F]">
            Diseñar tu <strong>sistema</strong> de <strong>placas</strong> a la medida de las necesidades de tu <strong>hogar.</strong>
          </p>
        </div>
        <div className="mx-8 flex w-full flex-col items-center justify-center rounded-[30px] bg-[#E4E4E4]">
          <img className="w-full" src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Showroom/Productos-05.webp" alt="" />
          <p className="w-[80%] px-[20px] py-[30px] text-[#70706F]">
            Recibir información sobre las mejores <strong>baterías portátiles</strong> para tu hogar.
          </p>
        </div>
      </section>
      <section className="mb-20 flex w-[80%] flex-col items-center justify-center md:mt-8 md:flex-row md:items-start">
        <div className="flex w-full flex-col items-center justify-center">
          <div className="relative top-5 z-20 flex w-[60%] flex-col items-center justify-center bg-[url('https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Showroom/Forma+de+texto+(Visitanos)-08.webp')] bg-cover bg-center bg-no-repeat p-2 text-center md:hidden">
            <p className="w-full text-[16px] leading-tight text-white">
              <strong className="text-[35px]">Visítanos</strong>
              <br />
              ¡Te estamos esperando!
            </p>
          </div>
          <img
            className="w-[80%] md:mx-4 md:w-[95%]"
            src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Showroom/Mapa+Desktop-04.webp"
            alt=""
          />
        </div>
        <div className="mb-[30%] mt-0 flex w-full flex-col items-center justify-center md:mx-4 md:mb-0">
          <div className="flex w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-8 text-center md:block md:bg-[url('https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Showroom/Forma+de+texto+(Visitanos)-08.webp')] md:p-2">
            <p className="w-full text-[20px] leading-tight text-white">
              <strong className="text-[45px]">Visitanos</strong>
              <br />
              ¡te estamos esperando!
            </p>
          </div>

          <div className="w-[80%] md:mx-10 md:w-full">
            <h1 className="mb-2 mt-4 text-center text-[20px] font-bold text-[#70706F] md:text-left">Dirección:</h1>
            <p className="font-regular mb-4 text-center text-[16px] text-[#70706F] md:text-left">
              1255 Avenida F.D. Roosevelt,
              <br /> San Juan, 00920, Puerto Rico
            </p>
            <h1 className="mb-2 text-center text-[20px] font-bold text-[#70706F] md:text-left">Horario de atención:</h1>
            <p className="font-regular text-center text-[16px] text-[#70706F] md:text-left">
              Lunes a Sábado <br /> 9:00 am - 6:00 pm
            </p>
          </div>
        </div>

        <div className="fixed bottom-0 z-50 mx-8 mt-10 flex h-[20vh] w-full transform flex-col items-center justify-center bg-white sm:-translate-x-1/2 md:hidden">
          <h1 className="text-center text-[20px] text-[#676767] md:text-left md:text-[30px]">
            <strong>¡Llama ya</strong> y agenda tu cita!
          </h1>
          <a href="tel:+17873661120">
            <button className="mt-4 rounded-full bg-[#0038A8] px-8 py-2 text-[20px] font-bold text-white md:text-[30px]">787-366-1120</button>
          </a>
        </div>

        <div className="md:mt-18 mx-8 mt-10 hidden w-[80%] flex-col items-center justify-center md:flex md:w-full md:justify-end">
          <h1 className="text-center text-[20px] text-[#676767] md:text-left md:text-[30px]">
            <strong>¡Llama ya</strong> y agenda tu cita!
          </h1>
          <a href="tel:+17873661120">
            <button
              id="Team-Jorge-Serrano-leads"
              className="mt-4 rounded-full bg-[#0038A8] px-8 py-2 text-[20px] font-bold text-white md:text-[30px]"
            >
              787-366-1120
            </button>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Showroom

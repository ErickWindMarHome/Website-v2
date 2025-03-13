import { TbCoin } from 'react-icons/tb'
import { LuPhone } from 'react-icons/lu'
import { IoShieldCheckmarkOutline, IoTimeOutline, IoCheckmarkCircleOutline } from 'react-icons/io5'

import Footer from '../../layouts/General/Footer/Footer'
import Header from '../../layouts/General/Header/Header'

function C2c() {
  return (
    <>
      <Header />
      <div className="relative mb-[50px] mt-[100px] h-[366px] w-full overflow-hidden">
        <img
          src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/C2C/BannerC2C.webp"
          alt=""
          className="object-cover xl:-translate-y-[250px]"
        />
        <div className="absolute inset-0 h-full w-full bg-black/80"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 text-white">
          <div className="px-4 text-center">
            <h1 className="text-xl font-semibold lg:text-5xl">Estás más cerca de tener en tu casa energía de la buena</h1>
            <h2 className="text-sm">Obtén una cotización gratis basada en tus necesidades energéticas</h2>
          </div>
          <span className="text-2xl font-bold text-[#FF9E29]">¡Llama ahora!</span>
          <a href="tel:+17873957766" className="flex justify-start gap-3 rounded-full bg-[#FF9E29] px-8 py-3 font-bold">
            <LuPhone className="size-6" />
            <span>(787) 395-7766</span>
          </a>
        </div>
      </div>
      <div className="max-w-[1200px] px-8">
        <div className="mb-8 flex flex-col items-center justify-center gap-8 lg:flex-row">
          <h1 className="text-4xl text-[#1C4299] lg:w-[80%]">
            <span className="font-bold">Somos la compañia</span> en la que más
            <span className="font-bold text-[#FF9E29]">
              {' '}
              puertorriqueños <br className="hidden lg:block" /> confían
            </span>
          </h1>
          <p className="lg:w-[80%]">
            Haz tu transición a energía renovable con la empresa boricua que ha instalado más sistemas en la isla y que tiene la estructura correcta
            para responderte antes, durante y después de la compra.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 text-[#1C4299] lg:flex-row lg:gap-8">
          <div className="flex h-[150px] w-full flex-col items-start justify-center gap-2 bg-[#DEE8FF42]/20 p-4">
            <IoTimeOutline className="size-10" />
            <h2 className="font-bold uppercase">Servicio 24/7</h2>
          </div>
          <div className="flex h-[150px] w-full flex-col items-start justify-center gap-2 bg-[#DEE8FF42]/20 p-4">
            <TbCoin className="size-10" />
            <h2 className="font-bold uppercase">Pago fijo</h2>
          </div>
          <div className="flex h-[150px] w-full flex-col items-start justify-center gap-2 bg-[#DEE8FF42]/20 p-4">
            <IoShieldCheckmarkOutline className="size-10" />
            <h2 className="w-[80%] font-bold uppercase">Más de 20 años de experiencia</h2>
          </div>
        </div>
        <hr className="my-[50px] w-full border border-[#1E1E1E54]/30 lg:my-[100px]" />
      </div>
      <div className="mb-[80px] flex w-full flex-col-reverse items-center justify-center gap-8 px-8 lg:flex-row">
        <img src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/C2C/C2C.webp" alt="" className="lg:w-[40%]" />
        <div className="flex flex-col gap-8 lg:w-[30%]">
          <h1 className="text-4xl text-[#1C4299]">
            Contigo <span className="font-semibold text-[#FF9E29]">en todo momento</span>
          </h1>
          <p>
            Los profesionales de WindMar Home estarán contigo desde el momento de la cotización hasta mucho después de la instalación porque nuestra
            energía de la buena empieza por nuestro servicio. Te asistimos con todo lo relacionado a:
          </p>
          <ul className="flex flex-col items-start gap-4">
            <li className="flex items-center justify-center gap-2">
              <IoCheckmarkCircleOutline className="size-10 text-[#FF9E29]" />
              <span>Instalación</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <IoCheckmarkCircleOutline className="size-10 text-[#FF9E29]" />
              <span>Permisos</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <IoCheckmarkCircleOutline className="size-10 text-[#FF9E29]" />
              <span>Mantenimiento</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <IoCheckmarkCircleOutline className="size-10 text-[#FF9E29]" />
              <span>Garantías</span>
            </li>
          </ul>
          <a href="tel:+17873957766" className="flex w-fit justify-start gap-3 rounded-full bg-[#FF9E29] px-8 py-3 font-bold text-white">
            <LuPhone className="size-6" />
            <span>(787) 395-7766</span>
          </a>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default C2c

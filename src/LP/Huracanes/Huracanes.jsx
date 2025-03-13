import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../layouts/General/Header/Header'
import Pixel from '../../components/Pixel/Pixel'

function Huracanes() {
  return (
    <div>
      <Pixel pixelID="1826134724345924" />
      <Header />
      <div className="relative mt-16 md:mt-12 md:flex md:w-full">
        <div className="md:w-[80%]">
          <img
            src="https://windmar-website-cms.s3.amazonaws.com/Huracanes/IMG/background-huracanes-2.webp"
            alt="Fondo para móvil"
            className="w-full md:hidden"
          />
          <img
            src="https://windmar-website-cms.s3.amazonaws.com/Huracanes/IMG/background-huracanes-desktop.webp"
            alt="Fondo para escritorio"
            className="hidden w-full md:block md:h-screen"
          />
        </div>
        <div className="absolute top-0 mt-12 flex flex-col items-center justify-between md:static md:mt-0 md:w-full md:flex-row md:p-0">
          <div className="w-[80%] text-center md:w-[80%] md:p-6 md:text-left">
            <h1 className="text-5xl text-slate-50 md:text-black">
              ¡<strong className="text-[#FF9E18]">Prepárate</strong> <br /> hoy mismo!
            </h1>
            <p className="md:texl-xl mt-8 text-balance text-xl text-slate-50 md:mt-6 md:text-black">
              <strong>Descarga y comparte</strong> nuestra guía con tus seres queridos para estar <strong>protegidos y conectados</strong> en la
              temporada de huracanes.
            </p>
            <div className="mt-32 md:mb-20 md:mt-6">
              <Link
                to="https://scms.windmar.com/uploads/La_Guia_de_Huracanes_2024_Wind_Mar_Home_99ab9db25f.pdf"
                target="_blank"
                className="rounded-2xl bg-[#F89B24] px-5 py-2.5 text-2xl font-semibold text-slate-50 no-underline md:w-[70%] md:bg-[#1C4299] md:py-3"
              >
                Descargar Guía
              </Link>
            </div>
            <h2 className="mx-auto mb-6 hidden w-[80%] text-balance text-2xl text-[#1C4299] md:block">
              Contigo <strong>antes, durante</strong> y <strong>después</strong> de un huracán
            </h2>
            <img
              src="https://windmar-website-cms.s3.amazonaws.com/Huracanes/IMG/logo-windmar-12.webp"
              alt="Logo WindmarHome"
              className="mx-auto hidden w-[35%] md:block"
            />
          </div>
          <img
            src="https://windmar-website-cms.s3.amazonaws.com/Huracanes/IMG/productos-huracanes-08.webp"
            alt="Productos para huracanes"
            className="m-2 md:m-0 md:hidden"
          />
          <img
            src="https://windmar-website-cms.s3.amazonaws.com/Huracanes/IMG/background-huracanes-desktop-11.webp"
            alt="Fondo de escritorio adicional"
            className="hidden md:block md:h-screen"
          />
        </div>
      </div>
      <div className="mt-[350px] flex w-full items-center justify-center text-slate-50 md:hidden">
        <h2 className="absolute w-[300px] text-balance text-center text-3xl">
          Contigo <strong>antes, durante</strong> y <strong>después</strong> de un huracán.
        </h2>
        <img src="https://windmar-website-cms.s3.amazonaws.com/Huracanes/IMG/background-huracanes.webp" alt="Fondo móvil" />
      </div>
    </div>
  )
}

export default Huracanes

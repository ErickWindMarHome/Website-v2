import React from 'react'
import FormsGerentes_RHF from '../../components/FormsCareers_RHF/FormsGerentes_RHF'
import { Reclutamiento_LP } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'

function Reclutamiento_H_Rivera() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start bg-[url('https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Reclutamiento/Mobile/Fondo-+mobile-02.webp')] bg-cover bg-center bg-no-repeat md:bg-[url('https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Reclutamiento/Desktop/Bg_LP_H_Rivera_DS.webp')] md:bg-fixed md:bg-top">
      <div className="mb-[500px] flex w-full flex-col items-center justify-center md:fixed md:mb-[100px] md:flex-row-reverse">
        <div className="flex w-full flex-col items-center justify-center md:relative md:bottom-40 md:h-screen md:justify-start">
          <section className="relative m-12 flex w-[90%] flex-col items-center justify-center px-8 py-4 md:top-20 md:px-14">
            <div className="absolute inset-0 z-0 rounded-[30px] bg-white opacity-40 md:inset-x-14 md:inset-y-3 md:top-0 md:bg-fixed"></div>
            <img
              className="z-20 my-2 md:mt-8 md:w-[25%]"
              src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Reclutamiento/Mobile/LOGO.webp"
              alt="Logo"
            />
            <h1 className="z-10 w-full text-center text-[30px] font-bold text-white md:w-[90%] md:text-[40px]">Regístrate Hoy</h1>
            <p className="z-10 w-[90%] text-center text-[14px] text-[18px] text-white md:my-2">
              Da el <strong>primer paso</strong> hacia un <strong>crecimiento profesional</strong> junto a nuestra empresa <strong>líder</strong> en{' '}
              <strong>energía solar</strong>. Descubre <strong>oportunidades</strong> emocionantes para construir una <strong>carrera</strong>{' '}
              impactante en el mundo de la <strong>energía renovable.</strong>
            </p>

            <FormsGerentes_RHF
              id="Team-Reclutamiento"
              campaign={'Reclutamiento'}
              recruitment={'sales'}
              estilos={Reclutamiento_LP}
              boton={'Enviar'}
              tittle={true}
              phone={true}
              email={true}
              municipio={false}
              city={false}
              text={true}
              placeholder={true}
            />

            <img
              src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Reclutamiento/Mobile/LOGO_ENERGIA.webp"
              alt="Logo Energia"
              className="z-20 md:my-2 md:w-[30%]"
            />
          </section>
        </div>
        <section className="flex w-[90%] flex-col items-center justify-center md:relative md:top-64">
          <div className="my-4 w-[50%] border-2 border-white opacity-50 md:hidden"></div>
          <h1 className="w-[80%] text-center text-[25px] text-white md:ml-[100px] md:w-[75%] md:text-left md:text-[40px]">
            <strong>Únete</strong> a un <strong>futuro</strong> lleno de posibilidades con <strong>WindMar Home</strong>
          </h1>
        </section>
      </div>
    </div>
  )
}

export default Reclutamiento_H_Rivera

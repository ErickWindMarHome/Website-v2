import React from 'react'
import FormsLeads_PR_RHF from '../../components/FormsLeads/FormsLeads_reactHookForm/Formsleads_PR_RHF'
import { LP_Rayitos } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'
import useTitle from '../../hooks/useTitle'
import Header from '../../layouts/General/Header/Header'
import Pixel from '../../components/Pixel/Pixel'

function Rayitos() {
  useTitle('Educación de la buena- Windmar')
  // Determinar si es mobile o desktop usando window.innerWidth
  const isMobile = window.innerWidth < 768

  return (
    <>
      <Pixel pixelID="1826134724345924" />
      <Header />
      <div className="flex w-full flex-col items-center justify-center">
        <section className="relative">
          <img
            className="block w-full md:hidden"
            src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/RayitosDeSol/IPHONE15PRO.WEBP/LandingPage+Rayitos+de+Sol+arte_IMAGEN_PRINCIPAL-09.webp"
            alt=""
          />
          <img
            className="hidden w-full md:block"
            src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/RayitosDeSol/MACBOOK+AIR.WEBP/LandingPage+Rayitos+de+Sol+arte_IMAGEN_PRINCIPAL-03.webp"
            alt=""
          />
          <img
            className="absolute bottom-0 left-1/2 z-20 mb-[18vh] w-[70%] -translate-x-1/2 transform md:mb-[10vh] md:w-[30%]"
            src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/RayitosDeSol/MACBOOK+AIR.WEBP/LandingPage+Rayitos+de+Luz+arte_IMAGEN_logo.webp"
            alt=""
          />
        </section>

        <section className="flex h-[40vh] w-full flex-col items-center justify-center bg-[url('https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/RayitosDeSol/IPHONE15PRO.WEBP/LandingPage+Rayitos+de+Sol+arte_IMAGEN_BACKGROUND_1_IMPACTAMOS.webp')] bg-cover bg-center bg-no-repeat md:h-[50vh] md:bg-[url('https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/RayitosDeSol/MACBOOK+AIR.WEBP/LandingPage+Rayitos+de+Sol+arte_IMAGEN_BACKGROUND-04.webp')]">
          <h1 className="font-dreaming text-[40px] text-[#0038A8] md:text-[70px]">Impactamos</h1>
          <p className="mt-[8%] w-[80%] text-center text-[14px] text-[#0038A8] md:w-[55%] md:text-[24px]">
            la vida de nuestros niños <strong>llevando luz a sus salones de clase</strong> y enseñándoles sobre el valor de la energía solar
          </p>
        </section>

        <img
          className=""
          src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/RayitosDeSol/MACBOOK+AIR.WEBP/Rayitos+de+Sol+arte_IMAGEN_CUENTO_INFANTIL-05.webp"
          alt=""
        />
        <img
          className="block md:hidden"
          src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/RayitosDeSol/IPHONE15PRO.WEBP/LandingPage+Rayitos+de+Sol+arte_ICONO_PARTE1-13.webp"
          alt=""
        />
        <section className="flex w-full flex-col items-center justify-center text-center md:flex-row">
          <img
            className="hidden w-[60%] md:mr-8 md:block"
            src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/RayitosDeSol/MACBOOK+AIR.WEBP/LandingPage+Rayitos+de+Sol+arte_ICONO_PARTE1-07.webp"
            alt=""
          />
          <p className="w-[70%] text-[12px] md:mr-[15vh] md:text-left md:text-[22px]">
            Creemos firmemente que todos los niños puertorriqueños merecen una educación digna,
            <strong> con espacios adecuados facilitando así un ambiente escolar sano y completo,</strong>
            que cubra todas las necesidades de los estudiantes y los maestros.
          </p>
        </section>
        <div className="border-1 w-[70%] border-[#0038A8] md:mb-10 md:w-[80%]" />

        <img
          className="block md:hidden"
          src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/RayitosDeSol/IPHONE15PRO.WEBP/LandingPage+Rayitos+de+Sol+arte_ICONO_PARTE2-14.webp"
          alt=""
        />

        <section className="flex w-full flex-col items-center justify-center text-center md:flex-row">
          <img
            className="hidden w-[60%] md:mr-8 md:block"
            src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/RayitosDeSol/MACBOOK+AIR.WEBP/LandingPage+Rayitos+de+Sol+arte_ICONO_PARTE2-08.webp"
            alt=""
          />
          <p className="w-[70%] text-[12px] md:mr-[15vh] md:text-left md:text-[22px]">
            Integrar al niño en el mundo de la energía solar es esencial, ya que es una realidad que continuará expandiéndose año tras año
            mundialmente. <br />
            <br />
            Por esto es importante <strong>mantener a nuestros niños actualizados y que puedan salir al mundo preparados y conscientes</strong> de las
            oportunidades a las que pueden acceder.
          </p>
        </section>

        <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden pt-4">
          {/* Fondo */}
          <div className="absolute inset-0 z-0 bg-[url('https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/RayitosDeSol/IPHONE15PRO.WEBP/LandingPage+Rayitos+de+Sol+arte_IMAGEN_BACKGROUND-11.webp')] bg-cover bg-top bg-no-repeat md:bg-none"></div>

          {/* Contenido principal */}
          <div className="relative z-20 flex w-full flex-col items-center justify-center pt-[30%] md:flex-row md:pt-0">
            <div
              className={`relative z-20 w-[80%] rounded-[15px] bg-white text-center md:mx-[15vh] md:w-full ${isMobile ? 'shadow-lg' : ''}`}
              id="Rayitos"
            >
              <h1 className="mx-4 mt-4 w-[80%] text-[14px] text-[#0038A8] md:w-[70%] md:pl-[3vh] md:text-left md:text-[16px]">
                <strong>Si deseas presentar tu caso a la Fundación</strong> o tienes alguna duda, deja tus datos aquí y te contactaremos pronto.
              </h1>
              <FormsLeads_PR_RHF
                id="rayitos-de-sol-wh"
                campaign="RayitosDeSolWH"
                recruitment="sales"
                estilos={LP_Rayitos}
                boton="Enviar"
                tittle={true}
                phone={true}
                email={true}
                city={true}
                text={false}
                placeholder={true}
              />
            </div>
            <img
              className="hidden w-[50%] md:block"
              src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/RayitosDeSol/MACBOOK+AIR.WEBP/LandingPage+Rayitos+de+Sol+arte_IMAGEN_FORMULARIO.webp"
              alt=""
            />
          </div>
        </section>
      </div>
    </>
  )
}

export default Rayitos

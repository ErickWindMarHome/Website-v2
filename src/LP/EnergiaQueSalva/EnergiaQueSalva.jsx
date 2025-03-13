import React, { useRef } from 'react'
import Pixel from '../../components/Pixel/Pixel'
import Header from '../../layouts/General/Header/Header'
import Footer from '../../layouts/General/Footer/Footer'
import Barra from '../../layouts/General/Barra/Barra'

import { MdArrowForwardIos } from 'react-icons/md'
import FormsLeads_PR_RHF from '../../components/FormsLeads/FormsLeads_reactHookForm/Formsleads_PR_RHF'
import { LP_EnergiaQueSalva } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'
import SliderEnergiaQueSalva from './Components/SliderEnergiaQueSalva'

function EnergiaQueSalva() {
  const formRef = useRef(null)

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }
  return (
    <>
      <Pixel pixelID="1826134724345924" />
      <Header />
      <div className="relative mt-[18%] flex w-full justify-center md:mt-[6%] md:h-screen">
        <div className="w-full md:h-screen">
          <img
            src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/EneergiaQueSalva/MACBOOK/208_+ARTELandingPage+energia+que+salva_IMAGEN_PRINCIPAL-03.webp"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute top-0 flex h-full w-full flex-col items-center justify-end pb-10 md:pb-24">
          <button
            onClick={() => scrollToForm()}
            className="m-0 flex items-center justify-between gap-3 rounded-sm border-[1px] border-white px-6 py-1 text-slate-50 md:rounded-none md:border-none md:bg-[#FF9E18]"
          >
            <span className="m-0">APRENDE MÁS AQUÍ</span>
            <span className="translate-y-[-1px] text-xl">
              <MdArrowForwardIos />
            </span>
          </button>
        </div>
      </div>
      <div className="relative flex items-center justify-center p-8 py-16 md:py-16">
        <img
          src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/EneergiaQueSalva/IPHONE/208_+ARTELandingPage+energia+que+salva_IMAGEN_BACKGROUND-12.webp"
          alt=""
          className="absolute w-full opacity-90 md:hidden"
        />
        <img
          src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/EneergiaQueSalva/MACBOOK/208_+ARTELandingPage+energia+que+salva_IMAGEN_BACKGROUND-08.webp"
          alt=""
          className="absolute hidden md:block"
        />
        <div className="flex w-[85%] flex-col justify-around gap-4 text-center text-[#0038A8] md:w-[45%]">
          <h1 className="my-4 font-dreaming md:text-6xl">Contribuimos</h1>
          <p className="m-0">
            a la mejora de la calidad de vida{' '}
            <strong>de pacientes que requieran dispositivos médicos que deban estar energizados continuamente,</strong> instalando sistemas solares
            completos en sus hogares.
          </p>
        </div>
      </div>
      <div className="w-full">
        <SliderEnergiaQueSalva />
      </div>
      <section ref={formRef} className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url('https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/RayitosDeSol/IPHONE15PRO.WEBP/LandingPage+Rayitos+de+Sol+arte_IMAGEN_BACKGROUND-11.webp')] bg-cover bg-top bg-no-repeat md:bg-none"></div>
        <div className="relative z-20 flex w-full flex-col items-center justify-center pt-[30%] md:flex-row md:pt-0">
          <div className="relative z-20 w-[80%] rounded-[15px] bg-white text-center shadow-md md:mx-[15vh] md:w-full md:shadow-none" id="Rayitos">
            <h1 className="mx-4 mt-4 w-[80%] text-[14px] text-[#0038A8] md:w-full md:pl-[3vh] md:text-left md:text-[16px]">
              <strong>Si deseas presentar tu caso a la Fundación</strong> o tienes alguna duda, deja tus datos aquí y te contactaremos pronto.
            </h1>
            <FormsLeads_PR_RHF
              id="energia-que-salva-wh"
              campaign="EnergiaQueSalva"
              recruitment="sales"
              estilos={LP_EnergiaQueSalva}
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
            src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/EneergiaQueSalva/MACBOOK/208_+ARTELandingPage+energia+que+salva_IMAGEN_FORMULARIO.webp"
            alt=""
          />
        </div>
      </section>
      <Footer color="blue" />
      <Barra caseLocation="incentivos" color="blue" />
    </>
  )
}

export default EnergiaQueSalva

import useTitle from '../../hooks/useTitle'
import Pixel from '../../components/Pixel/Pixel'

import SliderTags from './Components/SliderTags'
import SliderTips from './Components/SliderTips'
import Barra from '../../layouts/General/Barra/Barra'
import Footer from '../../layouts/General/Footer/Footer'
import Header from '../../layouts/General/Header/Header'

import { MdArrowForwardIos } from 'react-icons/md'
import { LP_AdultoMayor } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'
import FormsLeads_PR_RHF from '../../components/FormsLeads/FormsLeads_reactHookForm/Formsleads_PR_RHF'
import { useRef } from 'react'

function AdultoMayor() {
  useTitle('Programa Educativo para Mayores - Windmar')

  const Form = useRef(null)

  const scrollToForm = () => {
    if (Form.current) {
      Form.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <>
      <Pixel pixelID="1826134724345924" />
      <Header />
      <div className="relative mb-6 flex h-screen w-full justify-center md:mb-24">
        <div className="h-screen w-full">
          <img
            src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/AdultoMayor/MACBOOK/208_+ARTELandingPage+Adulto+Mayor_IMAGEN_PRINCIPAL-03.webp"
            className="h-full w-full object-cover object-[63%]"
            alt="Imagen Principal"
          />
        </div>
        <div className="absolute top-0 flex h-full w-full flex-col items-center justify-end pb-24">
          <button
            onClick={() => scrollToForm()}
            className="m-0 flex items-center justify-between gap-3 rounded-sm border-[1px] border-white px-6 py-1.5 font-bold text-slate-50 md:rounded-lg md:border-none md:bg-[#FF9E18]"
          >
            <span className="m-0">APRENDE MÁS AQUÍ</span>
            <span className="translate-y-[-1px] text-xl">
              <MdArrowForwardIos />
            </span>
          </button>
        </div>
      </div>

      <div className="relative">
        <img
          src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/AdultoMayor/MACBOOK/208_+ARTELandingPage+Adulto+Mayor_IMAGEN_BACKGROUND-04.webp"
          alt=""
          className="absolute -top-32 z-10 hidden w-full md:block"
        />
        <img
          src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/AdultoMayor/IPHONE/208_+ARTELandingPage+Adulto+Mayor_IMAGEN_BACKGROUND-16.webp"
          alt=""
          className="absolute -top-8 z-10 w-full opacity-35 md:hidden"
        />
        <div className="sticky z-20 mx-auto flex w-[80%] flex-col items-center justify-center py-8 md:w-[66%]">
          <h1 className="mb-10 font-dreaming text-5xl text-[#0038A8] md:text-6xl">Cuidamos</h1>
          <p className="text-center text-[#0038A8] md:mb-20 md:text-2xl">
            al adulto mayor, <strong>guiándolo en su camino hacia la energía solar,</strong> evitando que caiga en fraudes que afecten sus bolsillos y
            su tranquilidad.
          </p>
          <p className="m-0 text-center md:text-2xl">
            Adquirir un sistema solar{' '}
            <strong>es una inversión importante que trae muchos beneficios y mejor calidad de vida para las familias en Puerto Rico;</strong> tener un
            flujo de energía sostenible, constante y estable en casa facilitará al 100% la vida de las personas cruzando la tercera edad; no se
            preocuparán por los apagones, ni porque sus dispositivos médicos funcionen adecuadamente.
          </p>
          <br />
          <p className="text-center md:text-2xl">
            La fundación Windmar tiene el compromiso de{' '}
            <strong>educar a nuestros adultos mayores para que adquieran el sistema solar a través de una compañía legítima</strong> y confiable que
            les ofrezca un servicio de alta calidad para que realicen su transición adecuadamente a energía solar.
          </p>
        </div>
      </div>
      <hr className="my-8 h-[2px] w-[80%] border-0 bg-[#0038a8] md:w-[50%]" />

      {/* Logo Fundacion */}

      <img
        src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/AdultoMayor/MACBOOK/208_+ARTELandingPage+Adulto+Mayor_LOGO_FUNDACIO%CC%81N.webp"
        alt=""
        className="my-6 w-[60%] md:w-[40%]"
      />

      {/* Slider */}

      <SliderTags />

      {/* Imagen */}
      <div className="relative flex w-full items-center">
        <img
          src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/AdultoMayor/MACBOOK/208_+ARTELandingPage+Adulto+Mayor_IMAGEN_2-05.webp"
          alt=""
          className="z-10 h-full w-full"
        />
        <div className="absolute z-20 ml-[10%] flex w-[44%] flex-col gap-4 md:gap-16">
          <img
            src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/AdultoMayor/MACBOOK/208_+ARTELandingPage+Adulto+Mayor_LOGO_WH.webp"
            alt=""
            className="w-[50%]"
          />
          <p className="text-xs text-[#0038A8] md:text-3xl">
            En WindMar Home queremos <strong>cuidarte, protegerte y acompañarte</strong> en el camino hacia la energía solar de manera segura.
          </p>
        </div>
      </div>

      {/* Tips */}
      <div className="py-12 md:p-16">
        <h1 className="mx-auto text-balance text-center text-xl text-[#0038A8] md:w-[60%] md:text-3xl">
          <strong>Tips para proteger tu dinero</strong> en tu transición a energía solar
        </h1>
        <div className="mx-auto mt-12 w-screen md:hidden">
          <SliderTips />
        </div>
        <div className="mx-auto mt-12 hidden w-[90%] md:block">
          <div className="grid grid-cols-2 grid-rows-3 gap-4">
            <div className="flex w-full items-center overflow-hidden rounded-xl shadow-md">
              <h1 className="m-0 translate-y-14 text-[160px] font-bold text-[#FF9E18]">01</h1>
              <div className="flex h-full flex-col justify-center p-4">
                <div className="mb-4 flex items-end">
                  <img
                    src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/AdultoMayor/MACBOOK/208_+ARTELandingPage+Adulto+Mayor_ICONO_01-07.webp"
                    alt=""
                    className="ml-auto w-8"
                  />
                </div>
                <p className="m-0 text-center text-sm">
                  Asegúrate de leer los términos y condiciones de tu contrato solar, <strong>especialmente la letra pequeña.</strong>
                </p>
              </div>
            </div>
            <div className="flex w-full items-center overflow-hidden rounded-xl shadow-md">
              <h1 className="m-0 translate-y-14 text-[160px] font-bold text-[#FF9E18]">02</h1>
              <div className="flex h-full flex-col justify-center p-4">
                <div className="mb-4 flex items-end">
                  <img
                    src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/AdultoMayor/MACBOOK/208_+ARTELandingPage+Adulto+Mayor_ICONO_02-08.webp"
                    alt=""
                    className="ml-auto w-8"
                  />
                </div>
                <p className="m-0 text-center text-sm">
                  Pídele a un familiar o persona de confianza que te acompañen durante la visita del consultor,{' '}
                  <strong>cuatro ojos ven más que dos.</strong>
                </p>
              </div>
            </div>
            <div className="flex w-full items-center overflow-hidden rounded-xl shadow-md">
              <h1 className="m-0 translate-y-14 text-[160px] font-bold text-[#FF9E18]">03</h1>
              <div className="flex h-full flex-col justify-center p-4">
                <div className="mb-4 flex items-end">
                  <img
                    src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/AdultoMayor/MACBOOK/208_+ARTELandingPage+Adulto+Mayor_ICONO_03-09.webp"
                    alt=""
                    className="ml-auto w-8"
                  />
                </div>
                <p className="m-0 text-center text-sm">
                  <strong>¡NO TE DEJES ENGAÑAR!</strong>
                  <br />
                  No se hace mantenimiento de sistema solar sin costo, además <strong>antes agendamos esta clase de visitas.</strong>
                </p>
              </div>
            </div>
            <div className="flex w-full items-center overflow-hidden rounded-xl shadow-md">
              <h1 className="m-0 translate-y-14 text-[160px] font-bold text-[#FF9E18]">04</h1>
              <div className="flex h-full flex-col justify-center p-4">
                <div className="mb-4 flex items-end">
                  <img
                    src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/AdultoMayor/MACBOOK/208_+ARTELandingPage+Adulto+Mayor_ICONO_04-10.webp"
                    alt=""
                    className="ml-auto w-8"
                  />
                </div>
                <p className="m-0 text-center text-sm">
                  Todos los beneficios hablados con el consultor (beneficios, precios, tiempos) deben estar en el contrato,
                  <strong> lo que no está escrito no tiene valides.</strong>
                </p>
              </div>
            </div>
            <div className="col-span-2 flex w-full items-center justify-center gap-5 overflow-hidden rounded-xl shadow-md">
              <h1 className="m-0 translate-y-12 text-[180px] font-bold text-[#0038A8]">05</h1>
              <p className="m-0 w-[50%] text-pretty text-center text-xl text-[#0038A8]">
                Únete a la familia <strong className="text-2xl font-bold">WindMar Home</strong>
                <br />
                para tu seguridad y tranquilidad,{' '}
                <span className="font-semibold text-[#FF9E18]">
                  siempre <br /> estaremos para darte una asesoría profesional.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-8 hidden h-[2px] w-[90%] border-0 bg-[#0038a8] md:block" />
      <section ref={Form} className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden pt-4">
        <div className="absolute inset-0 z-0 bg-[url('https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/RayitosDeSol/IPHONE15PRO.WEBP/LandingPage+Rayitos+de+Sol+arte_IMAGEN_BACKGROUND-11.webp')] bg-cover bg-top bg-no-repeat md:bg-none"></div>
        <div className="relative z-20 flex w-full flex-col items-center justify-center pt-[30%] md:flex-row md:pt-0">
          <div className="relative z-20 w-[80%] rounded-[15px] bg-white text-center shadow-md md:mx-[15vh] md:w-full md:shadow-none" id="Rayitos">
            <h1 className="mx-4 mt-4 w-[80%] text-[14px] text-[#0038A8] md:w-full md:pl-[3vh] md:text-left md:text-[16px]">
              <strong>Si deseas presentar tu caso a la Fundación</strong> o tienes alguna duda, deja tus datos aquí y te contactaremos pronto.
            </h1>
            <FormsLeads_PR_RHF
              id="adulto-mayor-wh"
              campaign="AdultoMayor"
              recruitment="sales"
              estilos={LP_AdultoMayor}
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
            src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/AdultoMayor/MACBOOK/208_+ARTELandingPage+Adulto+Mayor_IMAGEN_FORMULARIO.webp"
            alt=""
          />
        </div>
      </section>
      <Footer color="blue" />
      <Barra caseLocation="incentivos" color="blue" />
    </>
  )
}

export default AdultoMayor

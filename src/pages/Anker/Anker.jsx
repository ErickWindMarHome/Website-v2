// Import Components
import { useState, useRef } from 'react'
import useTitle from '../../hooks/useTitle'
import Pixel from '../../components/Pixel/Pixel'
import Barra from '../../layouts/General/Barra/Barra'
import Header from '../../layouts/General/Header/Header'
import { LP_AnkerNew } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'

import AnkerBank from './AnkerBank'
import Accessories from './Accessories'
import TransferSwitch from './TransferSwitch'
import FooterAnker from './FooterAnker'
import { Helmet } from 'react-helmet'
import FormLeads_PR_RHF_Appointment from '../../components/FormsLeads/FormsLeads_reactHookForm/FormLeads_PR_RHF_Appointment'

const Anker = () => {
  useTitle('Libertad energética con Baterías Anker - WindMar')
  const [Info, setInfo] = useState(null)
  const formRef = useRef(null) // Create a reference for the form section

  const handleCardClick = (cardInfo) => {
    setInfo((prevInfo) => (prevInfo === cardInfo ? '' : cardInfo))
  }

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Con Anker podrás energiza tu apartamento, tus dispositivos y mantener tus bebidas y alimentos fríos en cualquier lugar con energía solar"
        />
      </Helmet>
      <Pixel pixelID="727322852553482" />
      <Header />
      <div className="mt-20 flex h-[500px] w-full flex-col items-center justify-center bg-[url(https://windmar-website-cms.s3.amazonaws.com/LPs/Anker/Mobile+foto.webp)] bg-cover bg-bottom bg-no-repeat px-28 md:h-[600px] md:items-start md:bg-[url(https://windmar-website-cms.s3.amazonaws.com/LPs/Anker/Fondo+arriba+desktop.webp)] md:bg-center">
        <div className="flex h-full w-full flex-col items-center justify-between py-3 md:w-[60%] md:justify-center">
          <div className="p-6 text-center md:mb-20">
            <img src="https://windmar-website-cms.s3.amazonaws.com/LPs/Anker/Logo+Anker+solo.webp" alt="" className="mx-auto w-full md:w-[70%]" />
            <h2 className="m-0 w-60 text-sm text-white md:w-auto md:text-3xl">La solución más brillante para tu</h2>
            <h1 className="text-xl font-semibold text-[#00A6E0] md:text-5xl">apartamento.</h1>
          </div>
          <img
            src="https://windmar-website-cms.s3.amazonaws.com/LPs/Anker/Logo+energia+que+te+acompa%C3%B1a.webp"
            alt=""
            className="w-[50%] md:w-56"
          />
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-3 bg-black p-4">
        <p className="m-0 text-white md:text-2xl">Para una consulta GRATIS</p>
        <button className="rounded-lg bg-[#00A6E0] px-2 pb-1 pt-1 font-semibold text-white md:text-2xl" onClick={scrollToForm}>
          CONTÁCTANOS
        </button>
      </div>
      <section className="flex flex-col items-center justify-center gap-8 py-8 md:p-14" ref={formRef}>
        <div>
          <h1 className="mx-auto w-[80%] text-balance text-center text-base text-[#6D6E71] md:text-3xl">
            Completa el formulario y recibe el catálogo <span className="font-bold text-[#00A6E0]">Anker </span>
            con información detallada sobre los productos.
          </h1>
          <p className="m-0 text-center font-bold text-[#00A6E0] md:text-3xl">¡Nuestro equipo te contactará prontamente!</p>
        </div>

        <FormLeads_PR_RHF_Appointment
          id="anker_pr"
          campaign={'Anker_pr'}
          recruitment={'sales'}
          estilos={LP_AnkerNew}
          boton={'Adquiere tu catálogo'}
          tittle={false}
          phone={true}
          appointment={true}
          email={true}
          text={false}
          product={['Anker']}
        />
      </section>
      <div className="flex w-full flex-col items-center justify-center gap-8 bg-[url(https://windmar-website-cms.s3.amazonaws.com/LPs/Anker/Fondo+iconos+mobile.webp)] bg-cover pb-12 pt-12 md:flex-row md:items-start md:gap-32 md:bg-[url(https://windmar-website-cms.s3.amazonaws.com/LPs/Anker/Fondo+iconos+desktop.webp)] md:pb-4 md:pt-4">
        <div className="flex flex-col items-center justify-center">
          <img src="https://windmar-website-cms.s3.amazonaws.com/LPs/Anker/Icono+Caja.webp" alt="" className="w-14" />
          <h2 className="text-xl font-bold text-[#00A6E0]">200 Millones+</h2>
          <p className="m-0 text-center text-sm text-white">
            Más de 200 millones de productos <br /> vendidos en todo el mundo
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="https://windmar-website-cms.s3.amazonaws.com/LPs/Anker/Icono+mundo.webp" alt="" className="w-14" />
          <h2 className="text-xl font-bold text-[#00A6E0]">146 Países</h2>
          <p className="m-0 text-center text-sm text-white">
            Disponible en <br className="hidden md:block" /> 146 países
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="https://windmar-website-cms.s3.amazonaws.com/LPs/Anker/Icono+bombillo.webp" alt="" className="w-14" />
          <h2 className="text-xl font-bold text-[#00A6E0]">10 Años de innovación</h2>
          <p className="m-0 text-center text-sm text-white">
            Pionero en tecnología de <br /> carga durante 10 años{' '}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-6">
        <h1 className="text-2xl font-bold text-[#00A6E0] md:text-5xl">Conoce la familia</h1>
        <img src="https://windmar-website-cms.s3.amazonaws.com/LPs/Anker/Logo+Anker+solo.webp" alt="" className="mx-auto w-[80%] md:w-96" />
        <div className="mt-8 grid grid-cols-1 place-items-center items-center justify-center gap-2 px-6 md:flex-row lg:grid-cols-3">
          <div className="flex min-h-[326px] w-[350px] cursor-pointer flex-col items-center justify-center">
            <div className="flex flex-col items-center">
              <h2 className="font-bold text-[#00A6E0]">Baterías</h2>
              <img src="https://windmar-website-cms.s3.amazonaws.com/LPs/Anker/Boton+Baterias.webp" alt="" className="md:w-[80%]" />
              <p className="mt-3 h-20 text-balance text-center">Con las baterías Anker tendrás el poder del sol en todo momento y lugar.</p>
            </div>
            <button className="rounded-lg bg-[#00A6E0] px-2 pb-1 pt-1 font-semibold text-white" onClick={() => handleCardClick('AnkerBank')}>
              Más informacion
            </button>
          </div>
          {Info === 'AnkerBank' && (
            <div className="md:hidden">
              <AnkerBank />
            </div>
          )}
          <div className="flex min-h-[326px] w-[350px] cursor-pointer flex-col items-center justify-center">
            <h2 className="font-bold text-[#00A6E0]">Accesorios</h2>
            <img src="https://windmar-website-cms.s3.amazonaws.com/LPs/Anker/Boton+Accesorios.webp" alt="" className="md:w-[80%]" />
            <p className="mt-3 h-20 text-balance text-center">
              Sus paneles solares, son ideales para mantener tus baterías portátiles cargadas en cualquier lugar.{' '}
            </p>
            <button className="rounded-lg bg-[#00A6E0] px-2 pb-1 pt-1 font-semibold text-white" onClick={() => handleCardClick('Accesories')}>
              Más informacion
            </button>
          </div>
          {Info === 'Accesories' && (
            <div className="md:hidden">
              <Accessories />
            </div>
          )}
          <div className="flex min-h-[326px] w-[350px] cursor-pointer flex-col items-center justify-center">
            <h2 className="font-bold text-[#00A6E0]">Transfer Switch</h2>
            <img src="https://windmar-website-cms.s3.amazonaws.com/LPs/Anker/Boton+Transferswitch.webp" alt="" className="md:w-[80%]" />
            <p className="mt-3 h-20 text-balance text-center">
              El interruptor de transferencia de Anker es un dispositivo que permite la transferencia automática y segura de energía.{' '}
            </p>
            <button className="rounded-lg bg-[#00A6E0] px-2 pb-1 pt-1 font-semibold text-white" onClick={() => handleCardClick('Trasnfer')}>
              Más informacion
            </button>
          </div>
          {Info === 'Trasnfer' && (
            <div className="md:hidden">
              <TransferSwitch />
            </div>
          )}
        </div>
      </div>
      {Info === 'AnkerBank' && (
        <div className="hidden md:block">
          <AnkerBank />
        </div>
      )}
      {Info === 'Accesories' && (
        <div className="hidden md:block">
          <Accessories />
        </div>
      )}
      {Info === 'Trasnfer' && (
        <div className="hidden md:block">
          <TransferSwitch />
        </div>
      )}

      {Info === 'AnkerBank' && (
        <FooterAnker text="Consigue la batería Anker perfecta para ti llamando a este número (787-395-7766) o haciendo" scrollToForm={scrollToForm} />
      )}
      {Info === 'Accesories' && (
        <FooterAnker
          text="Consigue el Accesorio Anker perfecto para ti llamando a este número (787-395-7766) o haciendo"
          scrollToForm={scrollToForm}
        />
      )}
      {Info === 'Trasnfer' && (
        <FooterAnker text="Llama a este número para obtener una consulta gratuita (787-395-7766) o has" scrollToForm={scrollToForm} />
      )}

      {!Info && (
        <div className="relative w-full">
          <img src="https://windmar-website-cms.s3.amazonaws.com/LPs/Anker/fondo+abajo+desktop.webp" alt="" className="hidden w-full md:block" />
          <img src="https://windmar-website-cms.s3.amazonaws.com/LPs/Anker/fondo+abajo+mobile.webp" alt="" className="block md:hidden" />
          <div className="absolute left-8 top-20 flex flex-col items-start gap-8 md:left-16 md:top-12 md:items-center">
            <div className="flex flex-col-reverse justify-center gap-8 md:flex-col md:items-center">
              <div className="flex w-[500px] flex-col items-start md:items-center">
                <h2 className="w-[350px] text-xl font-light text-white md:text-center">Nunca sufras de interrupciones en tu apartamento</h2>
                <img src="https://windmar-website-cms.s3.amazonaws.com/LPs/Anker/Energizalo+hoy.webp" alt="" className="w-[262px] md:w-[472px]" />
              </div>
              <img src="https://windmar-website-cms.s3.amazonaws.com/LPs/Anker/Logos+Windmar+Anker.webp" alt="" className="w-72" />
            </div>
            <img src="https://windmar-website-cms.s3.amazonaws.com/LPs/Anker/Logo+N01.webp" alt="" className="w-28" />
          </div>
        </div>
      )}
      <Barra color="black" caseLocation="anker" scrollToForm={scrollToForm} />
    </>
  )
}

export default Anker

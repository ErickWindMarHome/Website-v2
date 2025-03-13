import Pixel from '../../components/Pixel/Pixel'
import Header from '../../layouts/General/Header/Header'
import FormsLeads_PR_RHF from '../../components/FormsLeads/FormsLeads_reactHookForm/Formsleads_PR_RHF'
import { LP_CambiateNew } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'
import ButtonTel from '../../components/ButtonTel/ButtonTel'
import { GrNext } from 'react-icons/gr'
import { FaWpforms } from 'react-icons/fa6'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import useValidSchedule from '../../hooks/useValidSchedule'

export default function CambiateNewTel() {
  const [form, setForm] = useState(false)
  const handleForm = (e) => {
    setForm(true)
    handleSmoothScroll(e)
  }

  const isOfficeHours = useValidSchedule()

  const formVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeInOut' } },
  }

  const handleSmoothScroll = (e) => {
    e.preventDefault()
    const targetId = e.currentTarget.getAttribute('href').slice(1) // Obtiene el id del target (sin el #)
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', // Animación suave
        block: 'center', // Posiciona la sección al inicio de la ventana
      })
    }
  }

  return (
    <>
      <Pixel pixelID="1826134724345924" />
      <Header />
      <div className="mt-20 w-full lg:mt-32 [&>section]:mt-10">
        <section
          id="cambiateEnergiaBuena"
          className={`mx-auto grid w-[90%] grid-cols-1 place-items-center gap-10 lg:gap-0 2xl:w-[60%] ${(!isOfficeHours || form) && 'lg:grid-cols-2'}`}
        >
          <div className="mx-auto flex h-full w-[85%] flex-col items-center text-center font-semibold text-[#0038A8] lg:items-start lg:text-start">
            <p className="text-xl lg:text-3xl">
              50,000 Hogares ya cuentan con <strong>Energía de la Buena</strong>
            </p>
            <p className="mt-5 w-[90%] lg:text-xl">
              Únete a Windmar Home en tu transición a energía solar y olvídate de la inestabilidad de la red eléctrica tradicional
            </p>
            {isOfficeHours ? (
              <>
                <h1 className="my-4 text-2xl lg:text-4xl">
                  ¡<strong>Llama ahora</strong> o <strong>déjanos tus datos</strong>!
                </h1>
                <div
                  className={`${form && 'lg:flex-col lg:items-start lg:gap-3'} flex flex-col items-center justify-center gap-3 lg:flex-row lg:gap-8`}
                >
                  <ButtonTel
                    number={'787-395-7766'}
                    style="flex w-fit items-center justify-between gap-5 rounded-full bg-[#FF9E18] px-10 py-3 text-xl font-bold text-white"
                  />
                  <button
                    className="flex w-fit items-center justify-between gap-5 rounded-full bg-[#FF9E18] px-10 py-3 text-sm font-bold text-white lg:text-xl"
                    href="#fomrulario"
                    onClick={handleForm}
                  >
                    <FaWpforms /> Déjanos tus datos
                  </button>
                </div>
              </>
            ) : (
              <h1 className="my-4 text-2xl lg:text-4xl">
                ¡<strong>déjanos tus datos</strong>!
              </h1>
            )}
          </div>

          <motion.div
            id="fomrulario"
            variants={formVariants}
            initial="hidden"
            animate={!isOfficeHours || form ? 'visible' : 'hidden'}
            exit="exit"
            className={`${!isOfficeHours || form ? 'block lg:flex' : 'hidden'} h-full w-full justify-items-center ease-in-out`}
          >
            <FormsLeads_PR_RHF
              id="cambiate_a_energia_de_la_buena"
              campaign="cambiate_a_energia_de_la_buena"
              recruitment="sales"
              estilos={LP_CambiateNew}
              boton="Enviar"
              tittle={false}
              phone={true}
              email={true}
              city={false}
              text={false}
              placeholder={true}
            />
          </motion.div>
        </section>
        <section className="mx-auto grid w-[90%] grid-cols-1 lg:grid-cols-2 2xl:w-[60%]">
          <div className="flex flex-col items-center justify-center lg:order-2 lg:mt-12">
            <h1 className="text-center text-xl text-[#0038A8] lg:w-[95%] lg:text-start">
              La única compañía que ofrece <strong>financiamiento exclusivo</strong> con un banco de Puerto Rico, <strong>Oriental Bank.</strong>
            </h1>
            <div className="w-full lg:grid lg:grid-cols-2">
              <img
                className="mx-auto mt-8 w-[75%] lg:mt-0 lg:w-full"
                src="https://windmar-website-cms.s3.amazonaws.com/LPs/CambiateEnergiaSolar/Desktop/NEWS/MACBOOK+AIR/334_Arte++LP+Cambiate+a+energia+solar+FIGMA+-+claro_LOGO_SUNNOVA_2-24.webp"
                alt="logo sunnova"
              />
              <a
                className="my-auto hidden h-10 w-[95%] -translate-x-4 items-center justify-between gap-2 bg-[#e28734] px-4 text-sm font-bold text-white lg:flex"
                href="#cambiateEnergiaBuena"
                onClick={handleSmoothScroll}
              >
                <h1 className="flex-1">CÁMBIATE AHORA</h1> <GrNext size={20} />
              </a>
            </div>
          </div>
          <img
            className="mx-auto w-[90%] lg:order-1"
            src="https://windmar-website-cms.s3.amazonaws.com/LPs/CambiateEnergiaSolar/Desktop/NEWS/MACBOOK+AIR/334_Arte++LP+Cambiate+a+energia+solar+FIGMA+-+claro_IMAGEN_SUNNOVA_2-23.webp"
            alt=""
          />
        </section>
        <section className="h-fit rounded-lg lg:mx-auto lg:grid lg:w-[90%] lg:grid-cols-3 lg:gap-0 2xl:w-[60%]">
          <div className="col-span-2 aspect-video lg:w-full">
            <iframe
              className="h-full w-full rounded-lg"
              src="https://www.youtube.com/embed/YWCZHbJsFRk"
              title="Por qué Windmar"
              allowFullScreen
            ></iframe>
          </div>
          <div className="hidden h-full w-full lg:block">
            <img
              src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/CambiateEnergiaSolar/nuevos+ajustes/334_Arte++LP+Cambiate+a+energia+solar+FIGMA+-+claro_KPIS+MACBOOK.webp"
              alt="Información Windmar"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
          <div className="block h-full w-full lg:hidden">
            <img
              src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/CambiateEnergiaSolar/nuevos+ajustes/334_Arte++LP+Cambiate+a+energia+solar+FIGMA+-+claro_KPIS.webp"
              alt="Información Windmar"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </section>

        <section className='bg-[url("https://windmar-website-cms.s3.amazonaws.com/LPs/CambiateEnergiaSolar/Mobile/NEWS/IPHONE14_15PRO/334_Arte++LP+Cambiate+a+energia+solar+FIGMA+-+claro_IMAGEN_FONDO-19.webp")] bg-cover bg-center lg:bg-[url("https://windmar-website-cms.s3.amazonaws.com/LPs/CambiateEnergiaSolar/Mobile/NEWS+IMG+WEBP/MACBOOK+AIR/334_Arte++LP+Cambiate+a+energia+solar+FIGMA+-+claro_IMAGEN_FONDO-23.webp")]'>
          <div className="mx-auto w-[80%] place-items-center lg:grid lg:grid-cols-2 lg:place-items-center lg:gap-10 xl:gap-5">
            <div className="text-center text-xl text-[#0038A8] lg:order-2">
              <h1 className="lg:pt-10">
                No dependas de una <strong>red eléctrica inestable.</strong>
              </h1>
              <div className="mx-auto my-7 grid grid-cols-2 place-items-center text-center lg:mx-0 lg:flex lg:w-full lg:gap-5">
                <div>
                  <img
                    className="mx-auto w-20"
                    src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/CambiateEnergiaSolar/nuevos+ajustes/334_Arte++LP+Cambiate+a+energia+solar+FIGMA+-+claro_ICONO_INSTALACION-60.webp"
                    alt="icono instalación"
                  />
                  <h1 className="text-lg font-bold">Instalación</h1>
                </div>
                <div>
                  <img
                    className="mx-auto w-20"
                    src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/CambiateEnergiaSolar/nuevos+ajustes/334_Arte++LP+Cambiate+a+energia+solar+FIGMA+-+claro_ICONO_PERMISOS-61.webp"
                    alt=""
                  />
                  <h1 className="text-lg font-bold">Permisos</h1>
                </div>
                <div>
                  <img
                    className="mx-auto w-20"
                    src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/CambiateEnergiaSolar/nuevos+ajustes/334_Arte++LP+Cambiate+a+energia+solar+FIGMA+-+claro_ICONO_MANTENIMIENTO-62.webp"
                    alt=""
                  />
                  <h1 className="text-lg font-bold">Mantenimiento</h1>
                </div>
                <div>
                  <img
                    className="mx-auto w-20"
                    src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/CambiateEnergiaSolar/nuevos+ajustes/334_Arte++LP+Cambiate+a+energia+solar+FIGMA+-+claro_ICONO_GARANTIA-63.webp"
                    alt="icono garantía"
                  />
                  <h1 className="text-lg font-bold">Garantía</h1>
                </div>
              </div>
              <h1 className="hidden text-4xl font-bold text-[#FF9E18] lg:block">Siempre incluidas.</h1>
              <a
                className="mx-auto mt-10 flex items-center justify-between gap-2 bg-[#EF8023] px-4 py-2 text-lg font-bold text-white"
                href="#cambiateEnergiaBuena"
                onClick={handleSmoothScroll}
              >
                <h1 className="flex-1">CÁMBIATE AHORA</h1> <GrNext size={20} />
              </a>
            </div>
            <div className="lg:order-1">
              <img
                src="https://windmar-website-cms.s3.amazonaws.com/LPs/CambiateEnergiaSolar/Desktop/NEWS/MACBOOK+AIR/334_Arte++LP+Cambiate+a+energia+solar+FIGMA+-+claro_IMAGEN_QUE_INCLUYE_4-25.webp"
                alt=""
              />
            </div>
          </div>
          <div className="py-4 lg:py-10">
            <svg className="mx-auto w-[40%]" xmlns="http://www.w3.org/2000/svg" width="188" height="125" viewBox="0 0 188 125" fill="none">
              <g filter="url(#filter0_d_1127_323)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.21501 85.88L11.975 85.7899L11.805 97.88L22.975 85.7899H25.095L27.155 97.7899L35.855 85.7899H38.715L26.695 102.02H22.405L21.085 90.7999L10.495 102.02H6.54501L6.605 87.99C6.015 87.01 4.885 86.59 3.225 86.72C2.925 86.44 2.925 86.17 3.225 85.89"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M47.275 86.42L57.345 85.1501L56.045 89.2801C57.795 87.9701 59.545 86.93 61.295 86.08C63.405 85.05 71.765 83.83 71.305 88.75L66.025 101.79H60.725L65.405 89.97C66.095 86.1 59.695 86.91 54.835 91.98L50.785 101.8H45.325L50.465 89.38C50.765 87.63 50.285 87.07 47.075 87.17C46.735 87.06 46.815 86.62 47.275 86.42Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M87.4151 94.5399L88.4451 92.09C89.2851 89.1 88.4751 86.4899 84.8651 86.8099C78.0851 87.5099 71.5451 100.1 79.8151 100.03C82.9351 100.05 85.8151 97.4499 87.4151 94.5399ZM85.3651 99.4399C80.3951 102.83 70.8251 103.87 70.2551 97.28C69.9351 93.58 72.8951 89.16 77.2351 86.74C79.8551 85.28 82.8851 84.81 85.3851 84.95C87.7051 85.08 89.5751 85.86 90.2251 87.78L92.9551 81.24C93.5451 79.54 92.5551 78.78 89.9651 78.86C89.5951 78.79 89.7451 77.98 90.3951 77.87L99.8351 77.11L90.0551 101.77H84.3751L85.3551 99.4299L85.3651 99.4399Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M97.5354 86.4199L107.605 85.15L106.295 89.2801C108.045 87.9701 109.305 86.93 111.055 86.08C113.165 85.05 121.525 83.83 121.075 88.75L120.925 89.12C122.515 87.93 124.035 86.95 125.575 86.08C127.675 84.9 136.045 83.59 135.585 88.75L130.305 101.79H125.125L129.985 89.97C130.665 85.73 124.665 86.75 119.855 91.71L115.775 101.79H110.475L115.155 89.97C115.845 86.1 109.935 86.91 105.075 91.98L101.025 101.8H95.5654L100.705 89.38C101.005 87.63 100.525 87.0699 97.3154 87.1699C96.9754 87.0599 97.0554 86.6199 97.5154 86.4199"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M157.965 86.0599L168.035 84.7899L166.725 88.9199C168.475 87.6099 169.775 86.21 171.525 85.35C172.645 84.8 175.685 84.3 178.205 84.7L175.775 88.4C174.435 86.88 169.425 87.76 165.535 91.6L161.485 101.42H156.025L161.165 89C161.465 87.25 160.985 86.6899 157.775 86.7899C157.435 86.6799 157.515 86.2399 157.975 86.0399"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M147.545 96.9101L148.945 93.69C144.145 93.53 140.815 94.6 139.605 97.48C138.915 99.19 140.125 100.45 143.225 99.7501C145.095 99.2201 146.505 98.2801 147.535 96.9101M149.405 92.6301C142.775 92.1201 135.445 94.0301 133.815 97.7801C131.925 102.7 140.775 103.31 146.325 99.72L145.545 101.52H151.475L155.665 90.21C158.765 83.65 148.125 83.93 143.285 85.47C140.885 86.24 138.895 87.59 137.435 89.68H144.055C145.035 85.3 152.435 84.9701 151.175 88.6201L149.425 92.6401L149.405 92.6301Z"
                  fill="white"
                />
                <path
                  d="M94.075 105.8H96.045L94.525 109.73H98.1049L99.615 105.8H101.585L97.575 116.23H95.615L97.435 111.49H93.8549L92.025 116.23H90.075L94.075 105.8Z"
                  fill="white"
                />
                <path
                  d="M117.525 105.54C118.955 105.54 120.025 106 120.725 106.92C121.425 107.84 121.605 109.01 121.255 110.43C120.985 111.52 120.455 112.54 119.665 113.5C118.875 114.46 117.965 115.2 116.915 115.72C115.875 116.24 114.755 116.49 113.575 116.49C112.095 116.49 111.015 116.05 110.345 115.17C109.675 114.29 109.515 113.13 109.875 111.7C110.275 110.07 111.155 108.67 112.505 107.5C114.005 106.2 115.675 105.54 117.515 105.54M116.995 107.39C116.245 107.39 115.525 107.57 114.815 107.93C114.105 108.29 113.485 108.81 112.935 109.49C112.385 110.17 112.025 110.87 111.845 111.59C111.635 112.45 111.715 113.17 112.095 113.77C112.475 114.37 113.155 114.66 114.135 114.66C115.275 114.66 116.345 114.26 117.335 113.45C118.325 112.65 118.965 111.67 119.255 110.52C119.495 109.57 119.395 108.81 118.975 108.24C118.555 107.67 117.895 107.38 116.985 107.38L116.995 107.39Z"
                  fill="white"
                />
                <path
                  d="M134.325 105.8H136.095L136.065 113.07L141.465 105.8H143.155L140.725 116.23H138.895L140.345 109.99L135.715 116.23H134.215L134.245 109.68L130.965 116.23H129.095L134.325 105.8Z"
                  fill="white"
                />
                <path
                  d="M155.235 105.8H160.845L160.145 107.65H156.505L155.675 109.8H159.335L158.645 111.64H154.965L153.895 114.41H157.595L156.915 116.23H151.235L155.235 105.8Z"
                  fill="white"
                />
                <path fillRule="evenodd" clipRule="evenodd" d="M53.085 38.61L54.265 71.01L58.035 67.28L53.085 38.61Z" fill="white" />
                <path fillRule="evenodd" clipRule="evenodd" d="M21.2849 79.63L48.3949 61.91L53.5949 62.88L21.2849 79.63Z" fill="white" />
                <path fillRule="evenodd" clipRule="evenodd" d="M80.3146 81.23L46.9346 70.8099L45.4346 66.95L80.3146 81.23Z" fill="white" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M51.2051 65.4399L52.9951 66.23L53.1451 67.5599L51.5751 68.47L49.8551 67.74L49.7051 66.35L51.2051 65.4399Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M47.1749 72.3199L50.9249 73.5399L39.5949 101.85H33.2849L47.1749 72.3199Z"
                  fill="white"
                />
                <path d="M41.1049 71.1899L20.825 81.71H40.0449C40.0249 78.24 40.3649 74.7199 41.1049 71.1899Z" fill="white" />
                <path
                  d="M51.8446 49.26L51.3946 36.89L41.4446 32.9399L46.4346 45.51L22.9346 42.75L37.0546 61.75L23.7146 63.73L32.2846 70.51L43.5446 63.15C45.5846 58 48.4046 53.34 51.8446 49.28"
                  fill="white"
                />
                <path
                  d="M145.665 72.08L156.245 63.72L142.905 61.74L157.035 42.74L133.535 45.5L138.465 32.9299L125.965 37.9199L128.665 14.41L109.675 28.5399L107.755 15.1899L99.3451 25.77L89.9651 4L80.5851 25.77L72.2351 15.1899L70.2451 28.5399L51.2551 14.41L52.6951 26.63L55.8751 45.0499C58.6651 42.4399 61.7351 40.15 65.0251 38.23C76.0851 31.86 89.6051 29.69 102.895 33.24C116.235 36.85 126.825 45.45 133.195 56.51C137.575 64.05 139.975 72.74 139.915 81.72H166.825L167.395 81.47L145.695 72.09"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1127_323"
                  x="0"
                  y="0"
                  width="187.205"
                  height="124.49"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dx="3" dy="2" />
                  <feGaussianBlur stdDeviation="3" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1127_323" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1127_323" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </section>
      </div>
    </>
  )
}

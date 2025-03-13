import Pixel from '../../components/Pixel/Pixel'
import { MdArrowForwardIos } from 'react-icons/md'

//Layout
import Header from '../../layouts/General/Header/Header'
import Footer from '../../layouts/General/Footer/Footer'
import Barra from '../../layouts/General/Barra/Barra'

import { FaArrowRight } from 'react-icons/fa'
import SliderComunidades from './Components/SliderComunidades'
import SliderFundacion from './Components/SliderFundacion'
import SliderProposito from './Components/SliderProposito'
import FlipCard from './Components/FlipCard'
import useTitle from '../../hooks/useTitle'

const FundacionWindmar = () => {
  useTitle('Fundación WindMar - Windmar')
  return (
    <>
      <Pixel pixelID="1826134724345924" />
      <Header />
      <div className="relative mb-24 flex h-screen w-full justify-center">
        <div className="h-screen w-full">
          <video
            src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/General/video_fundacion_windmar.mp4"
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            controls={false}
          ></video>
        </div>
        <div className="absolute top-0 flex h-full w-full flex-col items-center justify-end pb-24">
          <h1 className="text-balance text-center text-white md:w-[60%]">
            ILUMINANDO A PUERTO RICO CON <strong>ENERGÍA DE LA BUENA</strong>
          </h1>
          <button className="m-0 flex items-center justify-between gap-3 rounded-sm border-[1px] border-white px-6 py-1 text-slate-50 md:rounded-none md:border-none md:bg-[#FF9E18]">
            <span className="m-0">APRENDE MÁS AQUÍ</span>
            <span className="translate-y-[-1px] text-xl">
              <MdArrowForwardIos />
            </span>
          </button>
        </div>
      </div>

      {/* Texto Fundacion */}
      <div className="relative md:max-w-[1536px]">
        <img
          src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/General/MACBOOK+AIR.WEBP/Landing+Page+Fundaci%E0%B8%82n+Windmar+arte_BACKGROUND_SOL_1_MAC.webp"
          alt=""
          className="absolute -top-28 right-0 hidden w-[80%] md:block"
        />
        <img
          src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/General/IPHONE15PRO.WEBP/BACKGROUND_SOL_1_IPHONE.webp"
          alt=""
          className="absolute -top-28 right-0 md:hidden"
        />
        <div className="mx-auto flex w-[80%] flex-col items-center justify-center gap-6 text-center text-base md:w-[75%] md:text-2xl">
          <p>
            La Fundación WindMar se estableció con el firme propósito de <strong>donar e instalar sistemas solares fotovoltaicos integrales,</strong>{' '}
            incluyendo baterías Tesla, en las comunidades más necesitadas de Puerto Rico
          </p>
          <p>
            Además de este compromiso, <strong>desarrollamos programas educativos para niños y colaboramos en iniciativas estratégicas</strong> con
            otras compañías y organizaciones sin fines de lucro para educar a personas mayores sobre la energía solar y sus ventajas.
          </p>
          <p>
            En la Fundación WindMar tenemos una convicción sólida en <strong>reconocer el inmenso potencial del sol para generar electricidad</strong>{' '}
            y en abordar la crucial necesidad de estabilidad energética en Puerto Rico.
          </p>
        </div>
        <img
          src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/General/MACBOOK+AIR.WEBP/Landing+Page+Fundaci%E0%B8%82n+Windmar+arte_BACKGROUND_SOL_1_MAC.webp"
          alt=""
          className="absolute -bottom-52 left-0 hidden scale-x-[-1] md:block md:w-[100%]"
        />
        <img
          src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/General/IPHONE15PRO.WEBP/BACKGROUND_SOL_1_IPHONE.webp"
          alt=""
          className="absolute -bottom-44 left-0 scale-x-[-1] md:hidden"
        />
      </div>

      {/* Mapa */}
      <div className="flex flex-col items-center justify-center gap-6 p-12 md:max-w-[1536px]">
        <h1 className="font-bold text-[#0038A8]">Nuestras donaciones</h1>
        <img
          src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/General/MACBOOK+AIR.WEBP/ICONO_CLIC_MAC.webp"
          alt=""
          className="w-[75px] rounded-full border-2 border-[#FF9E18] md:w-[69px]"
        />
        <div className="w-full">
          <img
            src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/General/MACBOOK+AIR.WEBP/208_Landing+Page+Fundaci%E0%B8%82n+Windmar+arte_IMAGEN_MAPA_DESKTOP+copia.webp"
            className="w-screen md:mx-auto md:min-w-[50%]"
          />
        </div>
        <div className="flex items-center justify-center text-xs font-bold text-[#0038A8] md:hidden">
          <p className="m-0 w-[60%]">DESLIZA PARA CONOCER NUESTRAS DONACIONES EN CADA MUNICIPIO</p>
          <FaArrowRight className="text-2xl" />
        </div>
      </div>

      {/* Proposito */}
      <div className="flex w-full flex-col items-center gap-12 pb-20 md:max-w-[1536px]">
        <h1 className="mb-6 font-bold text-[#0038A8]">Nuestro propósito</h1>
        <SliderProposito className="md:hidden" />
        <div className="hidden items-center justify-center gap-16 md:flex">
          <FlipCard
            title={'IMPACTAR'}
            icon={'https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/General/MACBOOK+AIR.WEBP/ICONO_IMPACTAR-12.webp'}
            description={
              'A la comunidad puertorriqueña ofreciendo herramientas que le permitan reconocer a la energía solar como un recurso inagotable de energía sostenible. <br /><strong>Al compartir la misma visión, inspiramos a otros a lograr nuestra misión.</strong>'
            }
          />
          <FlipCard
            title={'DONAR'}
            icon={'https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/General/MACBOOK+AIR.WEBP/ICONO_DONAR-13.webp'}
            description={
              'Sistemas de paneles solares para <strong>mejorar la calidad de vida de pacientes que sufren de apagones constantes</strong> y dependen de equipo médico para sobrevivir.'
            }
          />
          <FlipCard
            title={'CONTRIBUIR'}
            icon={'https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/General/MACBOOK+AIR.WEBP/ICONO_CONTRIBUIR-14.webp'}
            description={
              '<strong>En lograr la meta de 100% energía renovable para el 2050</strong> y continuar contribuyendo en el desarrollo energético de Puerto Rico.'
            }
          />
        </div>

        {/* Slider Comunidades energia de la buena */}
        <h1 className="text-center text-2xl font-bold text-[#0038A8] md:m-10 md:text-4xl">
          Impactando comunidades <br /> con energía de la buena
        </h1>
        <SliderComunidades />
      </div>

      {/* Fundacion Wind */}
      <div className="w-full md:max-w-[1536px]">
        <div className="relative flex h-48 w-full items-center justify-center bg-[#FF9E18] md:h-72">
          <img
            src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/General/IPHONE15PRO.WEBP/ICONO_LOGO_FUNDACION_BLANCO-49.webp"
            alt=""
            className="z-20 w-[78%] -translate-y-7 border-white bg-[#FF9E18] px-4 md:w-[50%] md:-translate-y-11"
          />
          <div className="absolute bottom-0 h-[67%] w-[90%] rounded-t-3xl border-x-4 border-t-4 border-white"></div>
        </div>
        <div>
          <SliderFundacion />
        </div>
      </div>
      <Footer color="blue" />
      <Barra caseLocation="incentivos" color="blue" />
    </>
  )
}

export default FundacionWindmar

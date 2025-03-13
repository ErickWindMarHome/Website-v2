import { useState } from 'react'
import { LD_LP_AlexPares } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'
import FormsLeads_PR_RHF from '../../components/FormsLeads/FormsLeads_reactHookForm/Formsleads_PR_RHF'
import SliderAlexMobile from './components/SliderAlex'
import useTitle from '../../hooks/useTitle'

const LD_AlexPares = () => {
  useTitle('Team Energía de la buena leads - WindMar')

  const [, setCurrentIndex] = useState(0)

  const slides = [
    {
      img: 'https://windmar-website-cms.s3.amazonaws.com/LPs/AlexPares/LEADGEN_ALEX/MACBOOK+AIR/IMAGEN_Card_Solar-29.webp',
      bgImage:
        'https://windmar-website-cms.s3.amazonaws.com/LPs/AlexPares/LEADGEN_ALEX/MACBOOK+AIR/ArteLEADGENDise%E0%B8%84o+Alex+Pares_IMAGEN_Fondo_Solar-23.webp',
      title: 'Solar',
      description:
        'Con nuestro Sistema Solar fotovoltaico tendrás todo el poder del sol energizando tu hogar las 24 horas del día. Mejorarás tu calidad de vida y cuidarás tu bolsillo.',
    },
    {
      img: 'https://windmar-website-cms.s3.amazonaws.com/LPs/AlexPares/LEADGEN_ALEX/MACBOOK+AIR/IMAGEN_Card_Anker-30.webp',
      bgImage:
        'https://windmar-website-cms.s3.amazonaws.com/LPs/AlexPares/LEADGEN_ALEX/MACBOOK+AIR/ArteLEADGENDise%E0%B8%84o+Alex+Pares_IMAGEN_Fondo_Anker-24.webp',
      title: 'Anker',
      description:
        'Siente la comodidad de la batería portátil Anker con WindMar Home, garantizando que tus dispositivos estén conectados en cualquier lugar donde te encuentres.',
    },
    {
      img: 'https://windmar-website-cms.s3.amazonaws.com/LPs/AlexPares/LEADGEN_ALEX/MACBOOK+AIR/IMAGEN_Card_Roofing-31.webp',
      bgImage:
        'https://windmar-website-cms.s3.amazonaws.com/LPs/AlexPares/LEADGEN_ALEX/MACBOOK+AIR/ArteLEADGENDise%E0%B8%84o+Alex+Pares_IMAGEN_Fondo_Roofing-25.webp',
      title: 'Roofing',
      description:
        'El sellado de techo te ayudará a proteger la estructura de tu hogar impidiendo que el aire, el humo, el agua, el polvo y los gases dañen el interior y exterior de tu propiedad.',
    },
  ]

  return (
    <div className="flex h-full min-h-screen w-screen flex-col items-center justify-around overflow-hidden bg-[url('https://windmar-website-cms.s3.amazonaws.com/LPs/AlexPares/LEADGEN_ALEX/MACBOOK+AIR/ArteLEADGENDise%E0%B8%84o+Alex+Pares_IMAGEN_Fondo_Solar-23.webp')] bg-cover pb-4 pt-4 lg:h-screen lg:flex-row lg:py-0">
      <div className="flex h-fit w-full flex-col items-center justify-center p-4 lg:h-full lg:w-[30%]">
        <img className="mb-6 hidden w-[30%] lg:block" src="https://windmar-website-cms.s3.amazonaws.com/Footer/FooterLogo.svg" alt="" />
        <p className="text-center text-xs text-white">
          WINDMAR HOME <br />
          <span className="text-lg font-bold lg:text-xl">CONTÁCTANOS</span>
        </p>
        <FormsLeads_PR_RHF
          id="LD_AlexPares"
          campaign={'LD_AlexPares'}
          recruitment={'sales'}
          estilos={LD_LP_AlexPares}
          boton={'Enviar'}
          tittle={false}
          phone={true}
          email={true}
          city={true}
          text={false}
          placeholder={true}
        />
      </div>
      <div className="relative flex h-full w-full items-center justify-center lg:w-[55%] lg:translate-x-[7%]">
        <SliderAlexMobile slides={slides} Index={setCurrentIndex} />
      </div>
    </div>
  )
}

export default LD_AlexPares

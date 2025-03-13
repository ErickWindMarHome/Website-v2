import React, { useState, useEffect } from 'react'
import Header from '../../layouts/General/Header/Header'
import BgContenedorMobile from '../../assets/EdwinColon/Group_142.svg'
import BgContenedorTablet from '../../assets/EdwinColon/Group_142.svg'
import BgContenedorDesktop from '../../assets/EdwinColon/Group_149.svg'
import BgContenedorLargeDesktop from '../../assets/EdwinColon/Group_149.svg'
import GroupBoton from '../../assets/EdwinColon/GroupBoton.svg'
import GroupBotonDos from '../../assets/EdwinColon/Group_168.svg'
import ImgFooterAzulMobile from '../../assets/EdwinColon/Group_143.svg'
import ImgFooterAzulTablet from '../../assets/EdwinColon/BgDosDesktop.svg'
import ImgFooterAzulDesktop from '../../assets/EdwinColon/BgDosDesktop.svg'
import ImgFooterAzulLargeDesktop from '../../assets/EdwinColon/BgDosDesktop.svg'
import { useSelector } from 'react-redux'
import { LP_EdwinColon } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'
import Pixel from '../../components/Pixel/Pixel'
import FormsGerentes_RHF from '../../components/FormsCareers_RHF/FormsGerentes_RHF'
import useTitle from '../../hooks/useTitle'
const EdwinColon = () => {
  useTitle('Team Windmar Solar careers - WindMar')
  // const dispatch = useDispatch();
  const { mobileQuery } = useSelector((state) => state.states)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  let footerImage
  if (windowWidth <= 429) {
    footerImage = ImgFooterAzulMobile
  } else if (windowWidth <= 768) {
    footerImage = ImgFooterAzulTablet
  } else if (windowWidth <= 1120) {
    footerImage = ImgFooterAzulDesktop
  } else {
    footerImage = ImgFooterAzulLargeDesktop
  }

  let bgImage
  if (windowWidth <= 429) {
    bgImage = BgContenedorMobile
  } else if (windowWidth <= 768) {
    bgImage = BgContenedorTablet
  } else if (windowWidth <= 1120) {
    bgImage = BgContenedorDesktop
  } else {
    bgImage = BgContenedorLargeDesktop
  }

  return (
    <>
      <Pixel pixelID="1826134724345924" />
      <Header />
      <div className="flex w-full flex-col items-center justify-center lg:mt-[4%]">
        <div className="w-full lg:flex-row">
          <img src={bgImage} className="mt-[15%] w-full lg:mt-[5%]" />
          <div className="items-left relative bottom-[22%] left-[5%] z-10 flex w-full flex-col lg:bottom-[45%] lg:left-[10%] lg:w-[100%]">
            <p className="font-monserrat text-left text-[30px] font-[400] text-white lg:mb-0 lg:text-[60px]">
              Energía renovable,
              <br />
              <strong className="text-[25px] lg:text-[60px]">compromiso renovable</strong>
            </p>
            <a href="#EdwinColon">
              <img src={GroupBoton} className="w-[70%] cursor-pointer lg:mt-[5%] lg:w-[40%]" alt="Botón" />
            </a>
          </div>
        </div>
        <img src={GroupBotonDos} className="relative bottom-[8%] z-20 block w-full lg:mt-[5%] lg:hidden lg:w-[50%]" />

        {/* formulario */}
        <div className="relative bottom-[5%] z-30 mt-[-5%] box-border flex w-full flex-col items-center bg-no-repeat lg:bottom-[10%]">
          <h1 className="font-monserrat w-full text-center text-[12px] font-[400] text-[#70706F] lg:mt-0 lg:text-[20px]">WINDMAR HOME </h1>
          <p className="font-monserrat mb-[5vh] w-[90%] text-center text-[17px] font-bold text-black lg:w-[50%] lg:text-[30px]">
            DESCUBRE NUEVAS OPORTUNIDADES CON NOSOTROS
          </p>
          <p className="font-monserrat mb-[3%] w-[90%] text-center text-[15px] font-[600] text-[#0038A8] lg:w-[95%] lg:text-center lg:text-[30px]">
            Regístrate ahora y explora las emocionantes posibilidades de crecimiento profesional y en nuestra empresa líder en energía solar.
          </p>
          <section className="relative z-30 flex w-full flex-col items-center justify-center lg:top-0 lg:flex-row-reverse">
            <FormsGerentes_RHF
              id="EdwinColon"
              campaign={'EdwinColon'}
              recruitment={'sales'}
              estilos={LP_EdwinColon}
              boton={'Enviar'}
              tittle={false}
              phone={true}
              email={true}
              city={true}
              text={true}
              placeholder={true}
            />
            <img src={footerImage} className="relative top-[10%] z-30 w-full lg:top-0 lg:w-[50%]" />
          </section>
        </div>
      </div>
    </>
  )
}

export default EdwinColon

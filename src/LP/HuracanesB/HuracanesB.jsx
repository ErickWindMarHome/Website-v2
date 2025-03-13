import React, { useState, useEffect } from 'react'
import Header from '../../layouts/General/Header/Header'
import BgContenedorMobile from '../../assets/HuracanesB/Group_143.svg'
import BgContenedorTablet from '../../assets/HuracanesB/Group_147.svg'
import BgContenedorDesktop from '../../assets/HuracanesB/Group_146.svg'
import BgContenedorLargeDesktop from '../../assets/HuracanesB/Group_146.svg'
import { useSelector } from 'react-redux'
import { LP_Huracanes } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'
import Pixel from '../../components/Pixel/Pixel'
import FormsLeads_PR_RHF from '../../components/FormsLeads/FormsLeads_reactHookForm/Formsleads_PR_RHF'
import useTitle from '../../hooks/useTitle'
const HuracanesB = () => {
  useTitle('Potección contra huracanes - WindMar')

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
  // let footerImage;
  // if (windowWidth <= 429) {
  //   footerImage = ImgFooterAzulMobile;
  // } else if (windowWidth <= 884) {
  //   footerImage = ImgFooterAzulTablet;
  // } else if (windowWidth <= 1200) {
  //   footerImage = ImgFooterAzulDesktop;
  // } else {
  //   footerImage = ImgFooterAzulLargeDesktop;
  // }

  let BannerImage
  if (windowWidth <= 429) {
    BannerImage = 'https://windmar-website-cms.s3.amazonaws.com/Huracanes/B/Group_143.svg'
  } else if (windowWidth <= 884) {
    BannerImage = 'https://windmar-website-cms.s3.amazonaws.com/Huracanes/B/Group_147.svg'
  } else if (windowWidth <= 1200) {
    BannerImage = 'https://windmar-website-cms.s3.amazonaws.com/Huracanes/B/Group_146.svg'
  } else {
    BannerImage = 'https://windmar-website-cms.s3.amazonaws.com/Huracanes/B/Group_146.svg'
  }

  let divHeight
  if (windowWidth <= 429) {
    divHeight = '150vh' // height for mobile
  } else if (windowWidth <= 884) {
    divHeight = '100vh' // height for tablet
  } else {
    divHeight = '90vh' // height for desktop
  }

  return (
    <>
      <Pixel pixelID="1826134724345924" />
      <Header />
      <div className="box-border flex w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat pt-[20%] md:pt-[5%]">
        <div
          className="box-border flex w-full flex-col items-center justify-center bg-no-repeat pt-[3%] text-white md:pt-[0%] lg:mt-[2%] lg:pt-[8%]"
          style={{
            backgroundImage: `url(${BannerImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: divHeight,
          }}
        >
          {/* <img src={BannerImage} className="w-full h-full object-cover" /> */}
          <p className="font-monserrat absolute bottom-[45%] mb-[30%] w-full px-[10%] pt-[90%] text-center text-[25px] font-[400] leading-tight md:bottom-[40%] md:left-[0%] md:mb-[35%] md:px-[5%] md:text-[50px] lg:top-[10%] lg:ml-[38%] lg:w-[50%] lg:px-[5%] lg:pt-[5%] lg:text-[35px] lg:text-[#1C4299]">
            Tu mejor inversión <br />
            <strong className="text-[33px] text-[#FF9E18] md:text-[70px] lg:text-[40px]">para la tormenta</strong>
          </p>
          <div className="absolute top-[175%] mb-[15%] flex w-[90%] flex-col items-center justify-center text-center text-[15px] text-[#676767] md:right-[20%] md:top-[83%] md:w-[70%] md:text-[18px] lg:right-[57%] lg:top-[80%] lg:w-[40%] lg:flex-row lg:items-start lg:justify-start lg:p-[1%] lg:text-left lg:text-[14px] lg:text-white">
            <p className="lg:text-left">
              <strong className="text-[#FF9E18]"> Es hora de que asegures tu familia y tu hogar con WindMar Home</strong>, la compañía solar que más
              huracanes ha pasado junto al pueblo puertorriqueño. Su compromiso en proveer un servicio 24/7 durante el paso de eventos atmosféricos la
              convierte en la empresa líder y más confiable para la temporada.
            </p>
          </div>

          {/* formulario */}
          <div className="font-monserrat absolute top-[40%] mb-[5%] flex w-[90%] flex-col items-center justify-center text-center text-[15px] font-[400] text-white md:right-[15%] md:top-[38%] md:w-[90%] md:text-[23px] lg:top-[35%] lg:w-[50%] lg:text-[20px]">
            <strong className="hidden lg:ml-[12%] lg:block lg:w-[60%] lg:text-[20px] lg:font-[400] lg:text-[#1C4299]">
              Pasa la temporada con la compañía que ha enfrentado más huracanes
            </strong>
            <p className="w-[80%] md:ml-[10%] lg:hidden lg:text-[#1C4299]">
              Pasa la temporada con la{' '}
              <span className="font-bold text-[#FF9E18]">
                <strong className="md:text-[23px] md:font-[400] md:text-white">compañía que ha enfrentado más huracanes</strong>
              </span>
            </p>

            <FormsLeads_PR_RHF
              id="Huracanes"
              campaign={'HuracanesB'}
              recruitment={'sales'}
              estilos={LP_Huracanes}
              boton={'Enviar'}
              tittle={false}
              phone={true}
              email={true}
              city={true}
              text={true}
              placeholder={true}
              DivTres={false}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default HuracanesB

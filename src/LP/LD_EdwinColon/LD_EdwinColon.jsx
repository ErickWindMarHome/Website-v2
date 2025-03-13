import { useState, useEffect } from 'react'
import Header from '../../layouts/General/Header/Header'
import ImgMobile from '../../assets/LD_EdwinColon/BGMobile.svg'
import ImgTablet from '../../assets/LD_EdwinColon/BGMobile.svg'
import ImgDesktop from '../../assets/LD_EdwinColon/BGDesktop.svg'
import ImgLargeDesktop from '../../assets/LD_EdwinColon/BGDesktop.svg'
import { LD_LP_EdwinColon } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'
import Pixel from '../../components/Pixel/Pixel'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SolarMobile from '../../assets/LD_EdwinColon/Solar.svg'
import SolarTablet from '../../assets/LD_EdwinColon/SolarTablet.svg'
import SolarDesktop from '../../assets/LD_EdwinColon/SolarDesktop.svg'
import SolarLargeDesktop from '../../assets/LD_EdwinColon/SolarDesktop.svg'
import AnkerMobile from '../../assets/LD_EdwinColon/Bateria_AnkerMobile.svg'
import AnkerTablet from '../../assets/LD_EdwinColon/Bateria_AnkerTablet.svg'
import AnkerDesktop from '../../assets/LD_EdwinColon/Bateria_AnkerDesktop.svg'
import AnkerLargeDesktop from '../../assets/LD_EdwinColon/Bateria_AnkerDesktop.svg'
import RoofingMobile from '../../assets/LD_EdwinColon/RoofingMobile.svg'
import RoofingTablet from '../../assets/LD_EdwinColon/RoofingTablet.svg'
import RoofingDesktop from '../../assets/LD_EdwinColon/RoofingDesktop.svg'
import RoofingLargeDesktop from '../../assets/LD_EdwinColon/RoofingDesktop.svg'
import FormsLeads_PR_RHF from '../../components/FormsLeads/FormsLeads_reactHookForm/Formsleads_PR_RHF'
import useTitle from '../../hooks/useTitle'

const EdwinColon = () => {
  useTitle('Team Windmar Solar leads - WindMar')
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 884)
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    adaptiveHeight: true,
    beforeChange: (current, next) => setActiveIndex(next), // Actualiza el estado activeIndex antes de cambiar la imagen
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          centerMode: true,
          centerPadding: '40px',
        },
      },
      {
        breakpoint: 884,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,
          centerPadding: '40px',
        },
      },
      {
        breakpoint: 429,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '40px',
        },
      },
    ],
  }

  // Definición de las flechas de previo y siguiente
  function SamplePrevArrow(props) {
    const { onClick } = props // Elimina la destructuración de className
    return (
      <svg
        className="absolute left-[5px] top-[45%] z-10 md:left-[15%] lg:left-[12%]"
        onClick={onClick}
        width="23"
        height="38"
        viewBox="0 0 23 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_1_1320)">
          <path d="M18.5 4.5L4 19L18.5 33.5" stroke="#E9E9E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <filter id="filter0_d_1_1320" x="0" y="0.5" width="22.5" height="37" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="1.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1320" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1320" result="shape" />
          </filter>
        </defs>
      </svg>
    )
  }

  function SampleNextArrow(props) {
    const { onClick } = props
    return (
      <svg
        className="absolute right-[5px] top-[45%] z-10 md:right-[15%] lg:right-[20%]"
        onClick={onClick}
        width="23"
        height="38"
        viewBox="0 0 23 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_1_1321)">
          <path d="M4 33.5L18.5 19L4 4.5" stroke="#E9E9E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <filter id="filter0_d_1_1321" x="0" y="0.5" width="22.5" height="37" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="1.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1321" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1321" result="shape" />
          </filter>
        </defs>
      </svg>
    )
  }
  let Image
  if (windowWidth <= 429) {
    Image = ImgMobile
  } else if (windowWidth <= 884) {
    Image = ImgTablet
  } else if (windowWidth <= 1200) {
    Image = ImgDesktop
  } else {
    Image = ImgLargeDesktop
  }

  let Solar
  if (windowWidth <= 429) {
    Solar = SolarMobile
  } else if (windowWidth <= 884) {
    Solar = SolarTablet
  } else if (windowWidth <= 1200) {
    Solar = SolarDesktop
  } else {
    Solar = SolarLargeDesktop
  }

  let Anker
  if (windowWidth <= 429) {
    Anker = AnkerMobile
  } else if (windowWidth <= 884) {
    Anker = AnkerTablet
  } else if (windowWidth <= 1200) {
    Anker = AnkerDesktop
  } else {
    Anker = AnkerLargeDesktop
  }

  let Roofing
  if (windowWidth <= 429) {
    Roofing = RoofingMobile
  } else if (windowWidth <= 884) {
    Roofing = RoofingTablet
  } else if (windowWidth <= 1200) {
    Roofing = RoofingDesktop
  } else {
    Roofing = RoofingLargeDesktop
  }

  // Estilos para las imágenes del carrusel
  let carouselStyles1 = {
    opacity: 0.5,
    transform: 'scale(0.7) rotateY(-30deg)',
    zIndex: -1,
    position: 'relative',
    marginLeft: '60%',
  }

  let carouselStyles2 = {
    opacity: 0.5,
    transform: 'scale(0.7) rotateY(-30deg)',
    zIndex: -1,
    position: 'relative',
    marginLeft: '-60%',
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      setIsTablet(window.innerWidth <= 884)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <Pixel pixelID="1826134724345924" />
      <Header />
      <div className="box-border flex w-full flex-col items-center justify-center lg:pt-[4%]">
        <div className="box-border flex w-full flex-col items-center justify-center pt-[1%] md:pt-[12%] lg:flex lg:flex-row lg:pt-[1%]">
          <section className="flex flex-col items-center justify-center">
            <p className="font-monserrat mb-[10%] block w-[90%] pt-[30%] text-center text-[18px] font-[400] leading-tight text-black lg:hidden">
              TRANSFORMA TU HOGAR CON ENERGÍA SOLAR: <br />
              <strong className="text-[18px] md:w-[80%] lg:text-[30px]">¡DESCÚBRELO CON WINDMAR HOME!</strong>
            </p>
            <img src={Image} className="w-full lg:mr-[2%]" />
          </section>
          <section className="flex w-[80%] flex-col items-center justify-center md:w-full lg:mt-[5vh] lg:w-[70%]">
            <p className="font-monserrat hidden font-[400] leading-tight text-black lg:z-10 lg:block lg:w-[90%] lg:text-center lg:text-[30px]">
              TRANSFORMA TU HOGAR CON ENERGÍA SOLAR: <br />
              <strong className="text-[18px] lg:text-[30px]">¡DESCÚBRELO CON WINDMAR HOME!</strong>
            </p>
            <FormsLeads_PR_RHF
              id="LD_EdwinColon"
              campaign={'LD_EdwinColon'}
              recruitment={'sales'}
              estilos={LD_LP_EdwinColon}
              boton={'Enviar'}
              tittle={false}
              phone={true}
              email={true}
              city={true}
              text={true}
              placeholder={true}
            />
          </section>
        </div>

        {/* carousel mobile y tablet */}
        <div className="relative top-0 z-10 w-[100%] md:mb-[5%] md:mt-[10%] lg:top-[20%]">
          <Slider {...settings}>
            {/* Solar */}
            <div className="md:ml-[16%]">
              <img
                className="lg:w-[60%]"
                src={Solar}
                alt="Solar"
                style={
                  activeIndex === 0
                    ? {}
                    : activeIndex === 1
                      ? isTablet
                        ? {
                            opacity: 0.5,
                            transform: 'scale(0.7) rotateY(-30deg)',
                            zIndex: -1,
                            position: 'relative',
                            marginLeft: '50%',
                          }
                        : { ...carouselStyles1, zIndex: -1 }
                      : isTablet
                        ? {
                            opacity: 0.5,
                            transform: 'scale(0.7) rotateY(-30deg)',
                            zIndex: -1,
                            position: 'relative',
                            marginLeft: '-50%',
                          }
                        : { ...carouselStyles2, zIndex: -1 }
                }
              />
            </div>

            {/* Anker */}
            <div className="md:ml-[16%]">
              <img
                className="lg:w-[60%]"
                src={Anker}
                alt="Anker"
                style={
                  activeIndex === 1
                    ? {}
                    : activeIndex === 2
                      ? isTablet
                        ? {
                            opacity: 0.5,
                            transform: 'scale(0.7) rotateY(-30deg)',
                            zIndex: -1,
                            position: 'relative',
                            marginLeft: '50%',
                          }
                        : { ...carouselStyles1, zIndex: -1 }
                      : isTablet
                        ? {
                            opacity: 0.5,
                            transform: 'scale(0.7) rotateY(-30deg)',
                            zIndex: -1,
                            position: 'relative',
                            marginLeft: '-50%',
                          }
                        : { ...carouselStyles2, zIndex: -1 }
                }
              />
            </div>

            {/* Roofing */}
            <div className="md:ml-[16%]">
              <img
                className="lg:w-[60%]"
                src={Roofing}
                alt="Roofing"
                style={
                  activeIndex === 2
                    ? {}
                    : activeIndex === 0
                      ? isTablet
                        ? {
                            opacity: 0.5,
                            transform: 'scale(0.7) rotateY(-30deg)',
                            zIndex: -1,
                            position: 'relative',
                            marginLeft: '50%',
                          }
                        : { ...carouselStyles1, zIndex: -1 }
                      : isTablet
                        ? {
                            opacity: 0.5,
                            transform: 'scale(0.7) rotateY(-30deg)',
                            zIndex: -1,
                            position: 'relative',
                            marginLeft: '-50%',
                          }
                        : { ...carouselStyles2, zIndex: -1 }
                }
              />
            </div>
          </Slider>
        </div>
      </div>
    </>
  )
}

export default EdwinColon

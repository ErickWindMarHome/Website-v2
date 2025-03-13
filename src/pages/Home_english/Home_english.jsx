// Estilos
import './Home_english.css'
// Librerías
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Redux
import { setlenguaje } from '../../features/states/statesSlice'

// Componentes
import FooterBar from '../../layouts/General/FooterBar/FooterBar'
// import BannerIncentivos from "../../components/BannerIncentivos/BannerIncentivos";

import Pixel from '../../components/Pixel/Pixel'
import Header from '../../layouts/General/Header/Header'
import Lema_english from '../../layouts/Home_english/Lema_english/Lema_english'
import PorQue_english from '../../layouts/Home_english/PorQue_english/PorQue_english'
import Marcas_english from '../../layouts/Home_english/Marcas_english/Marcas_english'
import ImageCarousel_english from '../../layouts/Home_english/ImageCarousel_english/ImageCarousel_english'
import Estadisticas_english from '../../layouts/Home_english/Estadisticas_english/Estadisticas_english'
import Footer from '../../layouts/General/Footer/Footer'
import FormLead from '../../components/FormLead/FormLead'

function Home_english() {
  const mobileQuery = useSelector((state) => state.states.mobileQuery)
  const WhyWindmarData = useSelector((state) => state.homeData.WhyWindmarData)
  const attributes = useSelector((state) => state.homeData.attributes)
  const lenguaje = useSelector((state) => state.states.lenguaje)
  const formvisible = useSelector((state) => state.states.formvisible)

  const dispatch = useDispatch()
  let locacion = ''

  if (window.location.pathname.length > 2) {
    locacion = window.location.pathname.substring(1, 3)
  }

  useEffect(() => {
    if (lenguaje === 'es') {
      dispatch(setlenguaje('es'))
      document.title = 'Windmar Home español'
    } else {
      dispatch(setlenguaje('en'))
      document.title = 'Windmar Home inglés'
    }
  }, [lenguaje, dispatch])

  console.log(WhyWindmarData)
  console.log(attributes)

  const residencial = [
    '/images/residencial/residencial1.webp',
    '/images/residencial/residencial2.webp',
    '/images/residencial/residencial4.webp',
    '/images/residencial/residencial5.webp',
    '/images/residencial/residencial6.webp',
    '/images/residencial/residencial7.webp',
    '/images/residencial/residencial8.webp',
    '/images/residencial/residencial9.webp',
    '/images/residencial/residencial10.webp',
  ]

  const residencialMobile = [
    '/images/residencial/residencial1-mobile.webp',
    '/images/residencial/residencial2-mobile.webp',
    '/images/residencial/residencial4-mobile.webp',
    '/images/residencial/residencial5-mobile.webp',
    '/images/residencial/residencial6-mobile.webp',
    '/images/residencial/residencial7-mobile.webp',
    '/images/residencial/residencial8-mobile.webp',
    '/images/residencial/residencial9-mobile.webp',
    '/images/residencial/residencial10-mobile.webp',
  ]

  const comercial = [
    '/images/comercial/comercial1.webp',
    '/images/comercial/comercial2.webp',
    '/images/comercial/comercial3.webp',
    '/images/comercial/comercial4.webp',
    '/images/comercial/comercial5.webp',
    '/images/comercial/comercial6.webp',
  ]

  const residential = [
    '/images/residential/residential1.webp',
    '/images/residential/residential2.webp',
    '/images/residential/residential3.webp',
    '/images/residential/residential4.webp',
    '/images/residential/residential5.webp',
  ]

  const residentialMobile = [
    '/images/residential/residential1-mobile.webp',
    '/images/residential/residential2-mobile.webp',
    '/images/residential/residential3-mobile.webp',
    '/images/residential/residential4-mobile.webp',
    '/images/residential/residential5-mobile.webp',
  ]

  return locacion === 'fl' ? (
    <>
      <Pixel pixelID="1826134724345924" />
      <Header />
      <div className="base"></div>

      <Lema_english />
      <PorQue_english />
      <Estadisticas_english />
      <ImageCarousel_english images={mobileQuery === 'mobile' ? residentialMobile : residential} title="Residential" />
      {/* <Marcas /> */}
      <div className="espacio"></div>
      <Footer color="blue" />
      {formvisible && <FormLead />}
      <FooterBar />
    </>
  ) : (
    <>
      <Header />
      <div className="base" id="inicio"></div>
      <Lema_english />
      <PorQue_english />
      <Estadisticas_english />
      <ImageCarousel_english images={mobileQuery === 'mobile' ? residencialMobile : residencial} title="Residential" />
      <ImageCarousel_english images={comercial} title="Commercial" />
      <Marcas_english />
      <div className="espacio"></div>
      <Footer color="blue" />
      {formvisible && <FormLead />}
      <FooterBar />
    </>
  )
}

export default Home_english

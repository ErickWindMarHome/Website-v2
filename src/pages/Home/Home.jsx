// Estilos
import './Home.css'
// Librerías
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Redux
import { setLocacion } from '../../features/states/statesSlice'

// Componentes
import FooterBar from '../../layouts/General/FooterBar/FooterBar'
import Pixel from '../../components/Pixel/Pixel'

// Lazy load
import Header from '../../layouts/General/Header/Header'
import Lema from '../../layouts/Home/Lema/Lema'
import PorQue from '../../layouts/Home/PorQue/PorQue'
import Marcas from '../../layouts/Home/Marcas/Marcas'
import ImageCarousel from '../../layouts/Home/ImageCarousel/ImageCarousel'
import Estadisticas from '../../layouts/Home/Estadisticas/Estadisticas'
import Footer from '../../layouts/General/Footer/Footer'
import { Helmet } from 'react-helmet'
import FormLead from '../../components/FormLead/FormLead'
import ButtonRoofle from '../../components/modalRoofle/ButtonRoofle'

function Home() {
  const mobileQuery = useSelector((state) => state.states.mobileQuery)
  const formvisible = useSelector((state) => state.states.formvisible)
  //const WhyWindmarData = useSelector((state) => state.homeData.WhyWindmarData);
  //const attributes = useSelector((state) => state.homeData.attributes);
  const dispatch = useDispatch()
  let locacion = ''

  if (window.location.pathname.length > 2) {
    locacion = window.location.pathname.substring(1, 3)
  }

  // console.log("La locacion es:", locacion, "y el mobileQuery es:", mobileQuery);

  useEffect(() => {
    if (locacion === 'fl') {
      dispatch(setLocacion('fl'))
      document.title = 'Solar energy and roofing - WindMar'
    } else {
      dispatch(setLocacion('pr'))
      document.title = 'Energía solar, batería portátil y roofing – WindMar'
    }
  }, [locacion, dispatch])

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
    <div className="relative w-full">
      <Helmet>
        <meta
          name="description"
          content="We have more than 20 years of experience energizing homes and businesses in Puerto Rico and more recently in Florida, by means of renewable energy"
        />
      </Helmet>
      <Pixel pixelID="1826134724345924" />
      <Header />
      <ButtonRoofle />
      <div className="base"></div>
      {/* <BannerHomeFL /> */}
      <Lema />
      <PorQue />
      <Estadisticas />
      <ImageCarousel images={mobileQuery === 'mobile' ? residentialMobile : residential} title="Residential" />
      <Marcas />
      <div className="espacio"></div>
      <Footer color="blue" />
      {formvisible && <FormLead />}
      <FooterBar />
    </div>
  ) : (
    <div className="relative w-full">
      <Pixel pixelID="1826134724345924" />
      <Helmet>
        <meta
          name="description"
          content="Contamos con más de 20 años de experiencia energizando hogares y empresas en Puerto Rico y más recientemente en Florida, por medio de energía renovable…"
        />
      </Helmet>
      <Header />
      <div className="base" id="inicio"></div>
      {/* <BannerPromos /> */}
      <Lema />
      <PorQue />
      <Estadisticas />
      <ImageCarousel images={mobileQuery === 'mobile' ? residencialMobile : residencial} title="Residencial" />
      <ImageCarousel images={comercial} title="Comercial" />
      <Marcas />
      <div className="espacio"></div>
      <Footer color="blue" />
      {formvisible && <FormLead />}
      <FooterBar />
    </div>
  )
}

export default Home

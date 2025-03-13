// import validator from "validator";
import './TecnicoRoofing.css'
import './TecnicoRoofingMobible.css'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// Redux toolkit
import { useSelector } from 'react-redux'

//Layout
import Header from '../../layouts/General/Header/Header'
import Footer from '../../layouts/General/Footer/Footer'
import Barra from '../../layouts/General/Barra/Barra'
//imagenes
import backgroundImage from '../../assets/TecnicoRoofing/BannerRofing.jpg'
import backgroundImageMobile from '../../assets/TecnicoDeInstalacion/BanneTecnico.jpg'
import TecnicoInsConv from '../../assets/TecnicoRoofing/WH-buscamos-tecnico-Roofing-.png'
import RequisitosTecRoofing from '../../assets/TecnicoRoofing/WH-Roofing-photo.jpg'
import SalarioComFV from '../../assets/FuerzaDeVenta/SalarioComFV.png'
import PlanMedFV from '../../assets/FuerzaDeVenta/PlanMedFV.png'
import TrabajoFullFV from '../../assets/FuerzaDeVenta/TrabajoFullFV.png'
import BonoFV from '../../assets/FuerzaDeVenta/BonoFV.png'
import OportunidadCreFV from '../../assets/FuerzaDeVenta/OportunidadCreFV.png'
import VacacionesFV from '../../assets/FuerzaDeVenta/VacacionesFV.png'
import FormsCareers_RHF from '../../components/FormsCareers_RHF/FormsCareers_RHF'
import useTitle from '../../hooks/useTitle'
import { Helmet } from 'react-helmet'

const TecnicoRoofing = () => {
  useTitle('Técnicos roofing - WindMar')
  const { mobileQuery } = useSelector((state) => state.states)

  function SampleNextArrow(props) {
    const { onClick } = props
    return (
      <div className={`RoofingSl-${mobileQuery}`} onClick={onClick}>
        &gt;
      </div>
    )
  }

  function SamplePrevArrow(props) {
    const { onClick } = props
    return (
      <div className={`RoofingSli-${mobileQuery}`} onClick={onClick}>
        &lt;
      </div>
    )
  }
  const settings1 = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Únete a Windmar Home como técnico de roofing. Con tu ayuda, ¡podrémos continuar energizando a Puerto Rico de manera limpia y confiable!."
        />
      </Helmet>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div
            className="flex flex-col pt-[25%] lg:flex-row lg:bg-cover lg:bg-center lg:pt-[10%]"
            style={{
              backgroundImage: `url(${mobileQuery ? backgroundImageMobile : backgroundImage})`,
            }}
          >
            <FormsCareers_RHF Rol="Técnico de Roofing" id="tecnico_roofing" campaign={'TecnicoRoofing'} recruitment={'installers'} />

            {/* <FormsCareers_RHF Rol="tecnicoRoofing" id="tecnico_roofing" /> */}
            <div className="flex flex-col items-center justify-center">
              <img className="w-[80%] pt-[5%]" src={TecnicoInsConv} alt="¡energiza tu carrera hoy!" />
              <p className="w-[65%] text-center font-[15px] text-white">
                Únete a Windmar Home como técnico de roofing. Con tu ayuda, ¡podrémos continuar energizando a Puerto Rico de manera limpia y
                confiable!.
                <br />
                <br />
                Nuestro sellado de techo no solo evita filtraciones de agua y garantiza el rendimiento óptimo de los paneles solares, sino que también
                ayuda a reducir la temperatura de los hogares, brindando un ambiente más fresco a aquellos que aún no tienen sistemas solares.
              </p>
            </div>
          </div>
          <div className="mb-[5%] flex w-full flex-col items-center justify-center bg-[#ff9e18] p-[1%] text-center text-white">
            <p className="w-[80%]">
              <strong>¡La experiencia previa no es requerida!</strong> Te ofrecemos el adiestramiento necesario para certificarte como Técnico de
              Roofing con WindMar Home.
            </p>
          </div>
        </div>
        <div className="flex w-[50%] flex-col items-center justify-center lg:flex-row">
          <section className="flex w-full flex-col lg:flex lg:flex-row">
            <div>
              <img src={RequisitosTecRoofing} alt="" className="w-full lg:w-[80%]" />
            </div>
            <article className="p-[5%]">
              <h2 className="text-center font-semibold text-[#0038a8]">Requisitos</h2>
              <p className="m-[2%] text-center font-semibold text-black">
                Experiencia previa en sellados para instalaciones solares o completar la certificación de Técnico de Roofing que ofrecemos
              </p>
            </article>
          </section>
        </div>

        <section className="mt-[10%] flex flex-col items-center justify-center">
          <h1 className="text-[50px] font-semibold text-[#0038a8]">Beneficios</h1>
          <div className="mb-[5%] flex w-[50%] flex-wrap justify-center lg:w-[90%]">
            <img className="shadow hover:shadow-xl" src={SalarioComFV} alt="" />
            <img className="shadow hover:shadow-xl" src={PlanMedFV} alt="" />
            <img className="shadow hover:shadow-xl" src={TrabajoFullFV} alt="" />
            <img className="shadow hover:shadow-xl" src={BonoFV} alt="" />
            <img className="shadow hover:shadow-xl" src={OportunidadCreFV} alt="" />
            <img className="shadow hover:shadow-xl" src={VacacionesFV} alt="" />
          </div>

          <div className={`GaleriaRoofing-${mobileQuery}`}>
            <div className={`SliderRoofing-${mobileQuery}`}>
              <Slider {...settings1}>
                <div className="Slider1"></div>
                <div className="Slider2"></div>
                <div className="Slider3"></div>
                <div className="Slider4"></div>
                <div className="Slider5"></div>
              </Slider>
            </div>
          </div>
          <h2 className="mb-[5%] text-center text-[20px] font-semibold text-[#0038a8] lg:text-[40px]">
            ¡Ayúdanos a sellar un futuro más brillante para Puerto Rico!
          </h2>
        </section>
      </div>
      <Footer color="blue" />
      <Barra caseLocation="incentivos" color="blue" />
    </>
  )
}

export default TecnicoRoofing

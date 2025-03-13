import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// Redux toolkit
import { useSelector } from 'react-redux'

//Layout
import Header from '../../layouts/General/Header/Header'
import Footer from '../../layouts/General/Footer/Footer'
import Barra from '../../layouts/General/Barra/Barra'

import backgroundImage from '../../assets/TecnicoDeInstalacion/BanneTecnico.jpg'
import backgroundImageMobile from '../../assets/TecnicoDeInstalacion/BanneTecnico.jpg'
import LPTesla from '../../assets/TecnicoDeInstalacion/LP-FUERZA-DE-VENTAS-TESLA-.png'
import TecnicoInsConv from '../../assets/TecnicoDeInstalacion/TecnicoInsConv.png'
import RequisitosTecInst from '../../assets/TecnicoDeInstalacion/RequisitosTecInst.png'
import SalarioComFV from '../../assets/FuerzaDeVenta/SalarioComFV.png'
import PlanMedFV from '../../assets/FuerzaDeVenta/PlanMedFV.png'
import TrabajoFullFV from '../../assets/FuerzaDeVenta/TrabajoFullFV.png'
import BonoFV from '../../assets/FuerzaDeVenta/BonoFV.png'
import OportunidadCreFV from '../../assets/FuerzaDeVenta/OportunidadCreFV.png'
import VacacionesFV from '../../assets/FuerzaDeVenta/VacacionesFV.png'
import FormsCareers_RHF from '../../components/FormsCareers_RHF/FormsCareers_RHF'
import useTitle from '../../hooks/useTitle'
import { Helmet } from 'react-helmet'

const TecnicoDeInstalacion = () => {
  useTitle('Técnicos instaladores - WindMar')
  const { mobileQuery } = useSelector((state) => state.states)

  function SampleNextArrow(props) {
    const { onClick } = props
    return (
      <div className={`InstallerSl-${mobileQuery}`} onClick={onClick}>
        &gt;
      </div>
    )
  }

  function SamplePrevArrow(props) {
    const { onClick } = props
    return (
      <div className={`InstallerSli-${mobileQuery}`} onClick={onClick}>
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
          content="Si ya tienes experiencia básica en electricidad y construcción y deseas trabajar como técnico instalador en Windmar Home, solicita aquí."
        />
      </Helmet>
      <Header />
      <div className="flex w-full flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div
            className="flex flex-col pt-[25%] lg:flex-row lg:bg-cover lg:bg-center lg:pt-[10%]"
            style={{
              backgroundImage: `url(${mobileQuery ? backgroundImageMobile : backgroundImage})`,
            }}
          >
            <FormsCareers_RHF Rol="Técnico de instalación" id="tecnico-placas-solares" campaign={'TecnicoInstalacion'} recruitment={'installers'} />

            {/* <FormsCareers_RHF
              Rol="tecnicoInstalacion"
              id="tecnico-placas-solares"
            /> */}
            <div className="flex flex-col items-center justify-center">
              <img className="w-[50%] pt-[5%]" src={TecnicoInsConv} alt="¡energiza tu carrera hoy!" />
              <p className="w-[65%] text-center font-[15px] text-white">
                Como técnico de instalación te encargarás de ensamblar, instalar y darle mantenimiento a nuestros sistemas solares fotovoltaicos. Si
                ya tienes experiencia básica en electricidad y construcción y deseas trabajar como técnico instalador en Windmar Home la compañia #1
                en la industria de la energía solar en Puerto Rico, solicita aquí.
              </p>
              <img className="w-[50%]" src={LPTesla} alt="¡energiza tu carrera hoy!" />
            </div>
          </div>
          <div className="mb-[5%] flex flex-col items-center justify-center bg-[#ff9e18] p-[1%] text-center text-white">
            <p className="w-[80%]">
              Únete a la familia WindMar y trabaja con los expertos. Explora las oportunidades que WindMar Home te ofrece para desarrollar tu carrera
              profesional mientras disfrutas de múltiples beneficios
            </p>
          </div>
        </div>
        <div className="flex w-[80%] flex-col items-center justify-center lg:flex-row">
          <section className="flex w-full flex-col lg:flex lg:flex-row">
            <img src={RequisitosTecInst} alt="" className="w-full lg:w-[50%]" />
            <ul className="m-[2%] font-semibold text-[#0038a8]">
              <li className="py-[2%] text-[20px]">➜ Conocimiento básico de electricidad y construcción </li>
              <li className="py-[2%] text-[20px]">➜ Operación de maquinaria pesada </li>
              <li className="py-[2%] text-[20px]">➜ Experiencia solar preferida pero no requerida </li>
            </ul>
          </section>
        </div>

        <section className="mt-[8%] flex w-full flex-col items-center justify-center">
          <h1 className="text-[50px] font-semibold text-[#0038a8]">Beneficios</h1>
          <div className="flex w-[50%] flex-wrap justify-center lg:w-[90%]">
            <img className="shadow hover:shadow-xl" src={SalarioComFV} alt="" />
            <img className="shadow hover:shadow-xl" src={PlanMedFV} alt="" />
            <img className="shadow hover:shadow-xl" src={TrabajoFullFV} alt="" />
            <img className="shadow hover:shadow-xl" src={BonoFV} alt="" />
            <img className="shadow hover:shadow-xl" src={OportunidadCreFV} alt="" />
            <img className="shadow hover:shadow-xl" src={VacacionesFV} alt="" />
          </div>
          {/* 
          <div className={`GaleriaInstaller-${mobileQuery}`}>
            <div className={`SliderInstaller-${mobileQuery}`}>
              <Slider {...settings1}>
                <div className="GaleriaInstaller1"></div>
                <div className="GaleriaInstaller2"></div>
                <div className="GaleriaInstaller3"></div>
                <div className="GaleriaInstaller4"></div>
              </Slider>
            </div>
          </div>*/}
          <h2 className="m-8 text-center text-[20px] font-semibold text-[#0038a8] lg:text-[40px]">¡Tu Futuro con WindMar empieza hoy!</h2>
        </section>
      </div>
      <Footer color="blue" />
      <Barra caseLocation="incentivos" color="blue" />
    </>
  )
}

export default TecnicoDeInstalacion

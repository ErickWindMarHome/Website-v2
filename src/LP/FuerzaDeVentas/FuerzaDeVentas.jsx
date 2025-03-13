// import validator from "validator";
// Redux toolkit
import { useSelector } from 'react-redux'

//Layout
import Header from '../../layouts/General/Header/Header'
import Footer from '../../layouts/General/Footer/Footer'
import Barra from '../../layouts/General/Barra/Barra'
//imagenes
import EOSR4358 from '../../assets/FuerzaDeVenta/EOSR4358.png'
import backgroundImageMobile from '../../assets/FuerzaDeVenta/FondoFuerzaDeVenta.png'
import LPFUERZADEVENTAS02 from '../../assets/FuerzaDeVenta/LP-FUERZA-DE-VENTAS-02.png'
import RequisitosFV from '../../assets/FuerzaDeVenta/RequisitosFV.png'
import SalarioComFV from '../../assets/FuerzaDeVenta/SalarioComFV.png'
import PlanMedFV from '../../assets/FuerzaDeVenta/PlanMedFV.png'
import TrabajoFullFV from '../../assets/FuerzaDeVenta/TrabajoFullFV.png'
import BonoFV from '../../assets/FuerzaDeVenta/BonoFV.png'
import OportunidadCreFV from '../../assets/FuerzaDeVenta/OportunidadCreFV.png'
import VacacionesFV from '../../assets/FuerzaDeVenta/VacacionesFV.png'
import FormsCareers_RHF from '../../components/FormsCareers_RHF/FormsCareers_RHF'
import useTitle from '../../hooks/useTitle'
import { Helmet } from 'react-helmet'

const FuerzaDeVentas = () => {
  useTitle('Fuerza de ventas - WindMar')
  const { mobileQuery } = useSelector((state) => state.states)

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Si quieres crecer en un ambiente positivo en la compañía #1 en la industria de la energía solar como consultor energético, solicita aquí."
        />
      </Helmet>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div
            className="flex flex-col pt-[25%] lg:flex-row lg:bg-cover lg:bg-center lg:pt-[10%]"
            style={{
              backgroundImage: `url(${
                mobileQuery ? backgroundImageMobile : 'https://windmar-website-cms.s3.amazonaws.com/Windmar1.0/PR/equipo-de-trabajo-windmar-home.webp'
              })`,
            }}
          >
            <FormsCareers_RHF id="fuerza-de-ventas" campaign={'FuerzasDeVentas'} recruitment={'sales'} />
            <div className="flex flex-col items-center justify-center">
              <img className="w-[50%] pt-[5%]" src={LPFUERZADEVENTAS02} alt="¡energiza tu carrera hoy!" />
              <p className="w-[65%] text-center font-[15px] text-white">
                Buscamos personas apasionadas por proveer una experiencia de calidad a todos los clientes de WindMar Home. Si quieres crecer en un
                ambiente positivo en la compañía #1 en la industria de la energía solar como consultor energético, solicita aquí.
              </p>
              <img className="w-[50%]" src={EOSR4358} alt="¡energiza tu carrera hoy!" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-[#ff9e18] p-[1%] text-center text-white">
            <p className="w-[80%]">
              Únete a la familia WindMar y trabaja con los expertos. Explora las oportunidades que WindMar Home te ofrece para desarrollar tu carrera
              profesional mientras disfrutas de múltiples beneficios.
            </p>
          </div>
        </div>

        <div className="flex w-full items-center justify-center">
          <iframe
            className="h-[20rem] w-[95%] p-[3%] lg:h-[40rem] lg:w-[80%] lg:p-[3%]"
            src="https://www.youtube.com/embed/e8ZfNQcQouA?si=FhlDV8K-Zy4IoA1n"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="flex w-[80%] flex-col items-center justify-center lg:flex-row">
          <section className="flex w-full flex-col lg:flex lg:flex-row">
            <img src={RequisitosFV} alt="" className="w-full lg:w-[50%]" />
            <ul className="m-[2%] font-semibold text-[#0038a8]">
              <li className="py-[2%] text-[20px]">➜ Computadora y/o Smartphone </li>
              <li className="py-[2%] text-[20px]">➜ Comunicación efectiva </li>
              <li className="py-[2%] text-[20px]">➜ Deseos de crecer dentro de la organización continuamente </li>
              <li className="py-[2%] text-[20px]">➜ Capacidad de trabajar bajo mínima supervisión </li>
              <li className="py-[2%] text-[20px]">➜ Orientado a cumplir su meta personal y la de su equipo </li>
              <li className="py-[2%] text-[20px]">➜ Compromiso con orientar a nuestros clientes correctamente </li>
              <li className="py-[2%] text-[20px]">➜ Profesionalismo </li>
              <li className="py-[2%] text-[20px]">➜ “Team Player” </li>
              <li className="py-[2%] text-[20px]">➜ Siempre llevar el nombre de WindMar en alto </li>
            </ul>
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
          <h2 className="mb-[5%] text-center text-[20px] font-semibold text-[#0038a8] lg:text-[40px]">¡Tu Futuro con WindMar empieza hoy!</h2>
        </section>
      </div>
      <Footer color="blue" />
      <Barra caseLocation="incentivos" color="blue" />
    </>
  )
}

export default FuerzaDeVentas

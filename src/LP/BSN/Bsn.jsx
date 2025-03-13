import Header from '../../layouts/General/Header/Header'
import Footer from '../../layouts/General/Footer/Footer'
import Barra from '../../layouts/General/Barra/Barra'

import check from '../../assets/BSN/check_circle.png'

// Redux toolkit
import BannerReglasMobile from '../../assets/BSN/Banner_ReglasMobile.png'
import { useSelector } from 'react-redux'
import FormsLeads_PR_RHF_BSN from '../../components/FormsLeads/FormsLeads_reactHookForm/Formsleads_PR_RHF_BSN'
import { LP_BSN } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'
import { Link } from 'react-router-dom'
import Pixel from '../../components/Pixel/Pixel'
import useTitle from '../../hooks/useTitle'
import { Helmet } from 'react-helmet'
const Bsn = () => {
  useTitle('Promoción BSN - WindMar')
  // const dispatch = useDispatch();
  const { mobileQuery } = useSelector((state) => state.states)
  const LogoContenedor = 'https://scms.windmar.com/uploads/Logos_BSN_5831a7b318.svg'
  // const dontFound = "https://scms.windmar.com/uploads/Image_don_t_found_2f058eb8b6.png"
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="No pierdas la oportunidad de ganar grandes premios en BSN y dale un impulso a tu hogar con energía solar y Windmar Home."
        />
      </Helmet>
      <Pixel pixelID="1826134724345924" />
      <Header />
      <div
        className="box-border flex w-full flex-col items-center justify-center bg-cover bg-top bg-no-repeat pt-[10%] lg:pt-[5%]"
        style={{
          backgroundImage:
            window.innerWidth <= 640
              ? `url("https://windmar-website-cms.s3.amazonaws.com/Windmar1.0/PR/fondo-mobile-bsn.webp")`
              : `url("https://windmar-website-cms.s3.amazonaws.com/Windmar1.0/PR/fondo-desktop-bsn-01.webp")`,
        }}
      >
        <img src={LogoContenedor} className="mt-[1%] w-[80%] py-[10%] lg:mt-[1%] lg:w-[30%] lg:py-[5%]" />
        <div className="flex w-[90%] flex-col items-center justify-center text-[13px] lg:flex lg:w-[70%] lg:flex-col lg:items-center lg:justify-center lg:text-[20px]">
          <h1 className="w-full text-center font-rocGrotesk text-white">¡ANOTA CON ENERGÍA DE LA BUENA!</h1>
          <p className="w-full text-center font-rocGrotesk font-[400] text-white">
            En WindMar Home, queremos llevarte una experiencia inolvidable en la cancha del BSN con premios increíbles.
          </p>

          <FormsLeads_PR_RHF_BSN
            id="Bsn"
            campaign={'BSN'}
            estilos={LP_BSN}
            boton={'Enviar'}
            tittle="Completa el formulario para el chance de ganar premios fuera de liga. "
            phone={true}
            email={true}
            city={true}
          />
        </div>

        {/* como participar   */}
        <div className="flex w-[100%] flex-col items-center justify-center">
          <h1 className="mt-[10%] w-full text-center font-rocGrotesk font-medium text-white lg:mt-[5%]">¿CÓMO PARTICIPAR?</h1>
          <p className="mb-12 w-[80%] text-center font-rocGrotesk text-white lg:w-[100%] lg:text-[25px]">
            Simple, <strong className="font-rocGrotesk font-[400] text-[#F9CF3D]">agenda una cita con WindMar Home</strong> entre el 1 de abril al 1
            de septiembre.
            <br />
            ¡Cinco meses llenos de oportunidades para ganar!
          </p>

          <h2 className="w-[80%] bg-white py-6 text-center font-rocGrotesk text-[15px] font-[800] text-[#062768] lg:w-[60%] lg:text-[25px]">
            PREMIOS MENSUALES <br />
            <strong className="w-[80%] bg-white text-center font-rocGrotesk text-[15px] font-[800] text-[#a9241a] lg:w-[60%] lg:text-[25px]">
              (5 ganadores)
            </strong>
          </h2>
          <div className="flex w-[80%] flex-col justify-center bg-[#062768] p-[3%] text-center text-[13px] font-[400] text-white lg:w-[60%]">
            <div className="flex">
              <img src={check} className="h-[20px] w-[20px] lg:h-[30px] lg:w-[30px]" />{' '}
              <p className="w-[90%] justify-center bg-[#062768] text-center font-rocGrotesk text-[13px] font-[400] text-white lg:text-[25px]">
                ¡4 taquillas para disfrutar de los juegos de la BSN!
              </p>
            </div>

            <div className="flex">
              <img src={check} className="h-[20px] w-[20px] lg:h-[30px] lg:w-[30px]" />{' '}
              <p className="w-[90%] justify-center bg-[#062768] text-center font-rocGrotesk text-[13px] font-[400] text-white lg:text-[25px]">
                $50 Gift Card Visa de WindMar Home para tus compras favoritas
              </p>
            </div>

            <hr className="w-full border-[2px] border-white" />

            <p className="w-[90%] justify-center bg-[#062768] text-center font-rocGrotesk text-[13px] font-[400] text-white lg:text-[25px]">
              Cada 3ra semana del mes, seleccionaremos a un ganador del mes corriente.
            </p>
            <strong className="w-[90%] justify-center bg-[#062768] text-center font-rocGrotesk text-[13px] font-[500] text-white lg:text-[25px] lg:font-[600]">
              ¡Prepárate para vivir la emoción en primera fila!
            </strong>
          </div>
        </div>

        {/* premios principales   */}

        <div className="w-full flex-col items-center justify-center">
          <h1 className="mt-[5%] w-full text-center font-rocGrotesk text-white">PREMIOS PRINCIPALES</h1>
          <p className="text-center font-rocGrotesk font-[700] text-[#F9CF3D] lg:text-[25px]">(2 ganadores)</p>

          <div className="w-[100%] flex-col items-center justify-center p-4 lg:flex lg:w-full lg:flex-row lg:items-center lg:justify-center lg:p-10">
            <section className="m-[5%] w-[90%] lg:m-[5%] lg:w-[100%]">
              <h2 className="bg-white py-6 text-center font-rocGrotesk text-[15px] font-[800] text-[#062768] lg:text-[25px]">
                PRIMER GANADOR <br />
              </h2>
              <div className="justify-rigth text-rigth bg-[#062768] p-8 font-rocGrotesk text-[15px] font-[400] text-white">
                <p className="flex bg-[#062768] font-rocGrotesk text-[15px] font-[400] text-white lg:text-[25px]">
                  <img src={check} className="mr-[2%] h-[8%] w-[8%] lg:h-[30px] lg:w-[30px]" /> 4 Taquillas VIP para el primer o segundo juego de la
                  final de la BSN* (Dependiendo de la disponibilidad)
                </p>
                <p className="justify-rigth text-rigth flex bg-[#062768] font-rocGrotesk text-[15px] font-[400] text-white lg:text-[25px]">
                  <img src={check} className="mr-[2%] h-[8%] w-[8%] lg:h-[30px] lg:w-[30px]" /> ¡O su equivalente en valor cash para que puedas
                  disfrutarlo a tu manera!
                </p>
              </div>
            </section>

            <section className="m-[5%] w-[90%] lg:m-[5%] lg:w-[100%]">
              <h2 className="bg-white py-6 text-center font-rocGrotesk text-[15px] font-[800] text-[#062768] lg:text-[25px]">
                SEGUNDO GANADOR <br />
              </h2>
              <div className="justify-rigth text-rigth bg-[#062768] p-8 font-rocGrotesk text-[15px] font-[400] text-white">
                <p className="flex bg-[#062768] font-rocGrotesk text-[15px] font-[400] text-white lg:text-[25px]">
                  <img src={check} className="mr-[2%] h-[8%] w-[8%] lg:h-[30px] lg:w-[30px]" /> ¡Un VIP Viewing Party en ECO's Sports para hasta 25
                  personas, incluyéndote a ti!
                </p>
                <p className="justify-rigth text-rigth flex bg-[#062768] font-rocGrotesk text-[15px] font-[400] text-white lg:text-[25px]">
                  <img src={check} className="mr-[2%] h-[8%] w-[8%] lg:h-[30px] lg:w-[30px]" />
                  Incluye $500 de consumo en bebidas y comida.* (El parking no está incluido)
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* reglas */}
        <div
          className="flex w-[80%] flex-col items-center justify-center rounded-[25px] bg-top bg-no-repeat p-[1%] lg:w-[90%] lg:p-10"
          style={{
            backgroundImage:
              window.innerWidth <= 640
                ? `url(${BannerReglasMobile})`
                : `url("https://windmar-website-cms.s3.amazonaws.com/Windmar1.0/PR/reglas-promocion-bsn-windmar-home.webp")`,
          }}
        >
          <div className="flex flex-col items-center justify-center p-[2%] lg:w-full lg:p-10">
            <h2 className="text-rigth LG:pt-[5%] lg:text-rigth w-[95%] p-[2%] pt-[5%] font-rocGrotesk text-[20px] font-[700] text-white lg:w-[100%] lg:pb-[10%] lg:text-[40px] lg:font-medium lg:text-white">
              REGLAS IMPORTANTES
              <br />
              <p className="text-rigth ml-[5%] w-[90%] py-6 font-rocGrotesk text-[15px] font-[400] text-white lg:text-[25px]">
                {' '}
                - Asegúrate de tener tu cita agendada para cualificar. <br />
                <br />- No pierdas la oportunidad de ganar grandes premios y darle un impulso a tu hogar con energía solar.
              </p>
              <Link to="/pr/bsnreglas" className="w-full text-white">
                <button className="w-[60%] border-[1px] p-[2%] text-[10px] no-underline lg:w-[25%] lg:border-[1px] lg:p-[1%] lg:text-[15px] lg:font-[700]">
                  REGLAS DEL SORTEO
                </button>
              </Link>
            </h2>
            <p className="w-full pt-4 text-center font-rocGrotesk text-[25px] font-[800] text-white lg:text-[40px]">RECUERDA</p>

            <p className="w-[100%] flex-col items-center justify-center p-2 text-center font-rocGrotesk text-[15px] font-[400] text-white lg:w-[100%] lg:flex-col lg:items-center lg:justify-center lg:p-6 lg:text-center lg:text-[25px] lg:font-[400] lg:text-white">
              ¡No solo se trata de la energía en la cancha! Asegúrate de agendar una cita con WindMar Home para recibir una orientación personalizada
              sobre energía solar y descubre cómo puedes ahorrar mientras apoyas a tu equipo favorito.
            </p>

            <p className="mb-[10%] bg-[#F9CF3D] p-4 text-center font-rocGrotesk text-[15px] font-[800] text-black lg:mt-[5%] lg:text-[25px]">
              NO LA DEJES CAER, ¡GANA CON WINDMAR HOME!
            </p>
          </div>
        </div>
      </div>
      <Footer color="blue" />
      <Barra caseLocation="incentivos" color="blue" />
    </>
  )
}

export default Bsn

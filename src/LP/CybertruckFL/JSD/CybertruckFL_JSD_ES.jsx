//Redux imports
import { useSelector } from 'react-redux'
//import images
import cybertruckImgDesktop from '../../../assets/cybertruckfl/Group_23.svg'
import cybertruckImgMobile from '../../../assets/cybertruckfl/Group_26.svg'
import tesla1 from '../../../assets/cybertruckfl/tesla1.png'
import truck1 from '../../../assets/cybertruckfl/truck1.png'
import truck2 from '../../../assets/cybertruckfl/truck2.png'
import checkCircle from '../../../assets/cybertruckfl/check-circle.svg'
import Header from '../../../layouts/General/Header/Header'
import Footer from '../../../layouts/General/Footer/Footer'
import Pixel from '../../../components/Pixel/Pixel'

// Librearias
import { Link } from 'react-router-dom'
import { LP_CybertruckFL_JSD } from '../../../utils/Styles_Forms_LP/styles_Forms_Leads'
import FormsLeadsFL_DN_JSD from '../../../components/FormsLeadsFL_DN/FormsLeadsFL_DN_JSD'

const CybertruckFL_JSD_ES = () => {
  const mobileQuery = useSelector((state) => state.states.mobileQuery)
  return (
    <>
      <Pixel pixelID="1826134724345924" />
      <Header />
      <div className="flex flex-col items-center justify-center bg-black">
        <div id="top" className="w-full pt-[20%] lg:pt-[10%]">
          {mobileQuery === 'desktop' ? (
            <div className="relative h-auto w-full">
              <img src={cybertruckImgDesktop} alt="" className="h-auto w-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90"></div>
            </div>
          ) : (
            <div className="relative h-auto w-full">
              <img src={cybertruckImgMobile} alt="" className="h-auto w-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90"></div>
            </div>
          )}
        </div>
        <article className="flex w-full flex-col items-center p-3">
          <div className="flex w-full flex-col items-center justify-center">
            <div className="relative bottom-[28%] flex h-full w-full flex-col items-center justify-center lg:bottom-[91%] lg:mb-[8%] lg:h-full lg:w-[80%]">
              <div className="flex w-full flex-col items-center">
                <h1 className="w-[95%] text-center text-[20px] font-bold uppercase text-white lg:w-[95%] lg:text-[27px]">
                  ¡Completa esta encuesta para tener la oportunidad de ganar un Cybertruck!
                </h1>
                <p className="text-center text-[16px] uppercase text-gray-300 lg:mb-[2%] lg:text-[20px]">
                  ¡Comienza tu transición a la energía solar!
                </p>
              </div>
              <FormsLeadsFL_DN_JSD
                id="FormCyberTruckFL"
                campaign="CybertruckFL"
                estilos={LP_CybertruckFL_JSD}
                tittle={false}
                placeholder={true}
                city={true}
                email={true}
                phone={true}
              />
            </div>
            <p className="relative bottom-[22%] w-full text-center text-2xl uppercase text-white lg:bottom-[100%] lg:w-[80%] lg:text-[25px]">
              CAMBIA A LA ENERGÍA SOLAR CON WINDMAR SOLAR + ROOFING Y PARTICIPA PARA GANAR <strong>CYBERTRUCK O UNA TESLA</strong> POWERWALL
            </p>

            <div className="relative bottom-[22%] w-full border-[1px] border-white lg:bottom-[100%] lg:w-[30%]" />
          </div>

          <div className="relative bottom-[5%] w-full lg:bottom-[50%] lg:flex lg:w-[80%]">
            <div className="text-white">
              {mobileQuery === 'desktop' ? (
                <h2 className="mb-[3%] font-[600]">
                  EARN POWERFUL <br /> ENERGY AT HOME OR ON <br /> THE GO
                </h2>
              ) : (
                <h2 className="mb-[8%] font-[600]">
                  GANA ENERGÍA POTENTE <br /> EN CASA O EN MOVIMIENTO
                </h2>
              )}
              <span>
                <p className="w-full lg:w-[80%]">
                  Por cada compra e instalación de una Tesla Powerwall, recibirás la oportunidad de participar en nuestro sorteo de un año y ganar el
                  esperado Tesla Cybertruck o el potente almacenamiento de energía Powerwall.
                </p>
              </span>
            </div>
            <div className="w-full lg:w-[100%]">
              <img src={tesla1} alt="" />
            </div>
          </div>
        </article>
        <div className="relative bottom-[2%] w-full text-white lg:bottom-[12%] lg:w-[65%]">
          <section>
            <h2 className="text-center font-bold text-white lg:mb-[5%]">PARA PARTICIPAR</h2>
            <ul className="w-[90%] list-none">
              <li className="flex items-start">
                <img src={checkCircle} alt="Check" className="mr-2" />
                <p>Arrendar, financiar o comprar un sistema solar con un Tesla Powerwall.</p>
              </li>
              <li className="flex items-start">
                <img src={checkCircle} alt="Check" className="mr-2" />
                <p>Debes tener al menos 18 años.</p>
              </li>
              <li className="flex items-start">
                <img src={checkCircle} alt="Check" className="mr-2" />
                <p>
                  Mantén tu contrato durante el cierre del período de participación. Cualquier contrato firmado antes del final del período de
                  participación tiene la oportunidad de ganar.
                </p>
              </li>
              <li className="flex items-start">
                <img src={checkCircle} alt="Check" className="mr-2" />
                <p>
                  Keep your contract during the closing of the participation period. Any contract signed before the end of the participation period
                  has a chance to win.
                </p>
              </li>
            </ul>
            <Link to="/fl/cybertruckRules" className="mb-[5%] flex flex-col items-center justify-center no-underline">
              <button className="w-[90%] cursor-pointer border-[2px] px-[3%] py-[1%] font-bold text-white">REGLAS DEL SORTEO</button>
            </Link>
          </section>
        </div>
        <article className="relative bottom-[2%] lg:bottom-[8%] lg:flex">
          <img src={truck1} alt="" />
          <img src={truck2} alt="" />
        </article>
        <section className="relative bottom-[1%] lg:bottom-[5%]">
          {mobileQuery === 'desktop' ? (
            <>
              <h1 className="mt-[5%] text-center text-white">GIVEAWAY RULES</h1>
              <h3 className="mb-[5%] mt-[5%] text-center text-white">POTENCIA Y GANA CON WINDMAR SOLAR + ROOFING</h3>

              <Link to="/fl/cybertruckRules" className="flex flex-col items-center justify-center no-underline">
                <button className="mb-[5%] w-[90%] cursor-pointer border-[2px] px-[3%] py-[1%] font-bold text-white">REGLAS DEL SORTEO</button>
              </Link>
            </>
          ) : (
            <>
              <h1 className="mt-[5%] text-center text-[18px] font-[700] text-white">REGLAS DEL SORTEO</h1>
              <h3 className="mb-[5%] mt-[5%] text-center text-[18px] font-[700] text-white">POTENCIA Y GANA CON WINDMAR SOLAR + ROOFING</h3>

              <Link to="/fl/cybertruckRules" className="flex flex-col items-center justify-center no-underline">
                <button className="mb-[5%] w-[90%] cursor-pointer border-[2px] px-[3%] py-[1%] font-bold text-white">REGLAS DEL SORTEO</button>
              </Link>
            </>
          )}
        </section>
      </div>
      <Footer color="black" />
    </>
  )
}

export default CybertruckFL_JSD_ES

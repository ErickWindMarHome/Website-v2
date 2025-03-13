//Redux imports
import { useSelector, useDispatch } from 'react-redux'
//import images
import bannerfirmapr from '../../assets/cybertruckpr/bannerfirmapr.jpg'
import logoprcyber from '../../assets/cybertruckpr/logoprcyber.png'

import Pixel from '../../components/Pixel/Pixel'
import Header from '../../layouts/General/Header/Header'
import Footer from '../../layouts/General/Footer/Footer'

// Librearias
import { Link } from 'react-router-dom'

import FormsLeads from '../../components/FormsLeads/FormsLeads'
import { LP_CybertruckPR } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'
import FormsLeads_PR_RHF from '../../components/FormsLeads/FormsLeads_reactHookForm/Formsleads_PR_RHF'

const CybertruckPR_ES = () => {
  const dispatch = useDispatch()
  const mobileQuery = useSelector((state) => state.states.mobileQuery)
  return (
    <>
      <Pixel pixelID="1826134724345924" />
      <Header />
      <div className={`CybertruckprContenedor-${mobileQuery}`}>
        <div className={`Cybertruckpr-${mobileQuery}`}>
          <article>
            <div id="top">
              <img src={logoprcyber} alt="" />
            </div>
            <div>
              <section>
                <a href="#gana">
                  <button>¡PARTICIPA HOY!</button>
                </a>
              </section>
            </div>
          </article>
        </div>
        <div className={`Cybertruckprform-${mobileQuery}`} id="gana">
          <article>
            {mobileQuery === 'mobile' ? (
              <p>
                ¡Pudieras ganar un <span>Tesla Cybertruck o un</span> <span>Tesla Model Y!</span>
                <div></div>
              </p>
            ) : null}

            <FormsLeads_PR_RHF
              id="CyberTruckGiveaway"
              estilos={LP_CybertruckPR}
              tittle={'Participa'}
              placeholder={true}
              city={true}
              email={false}
              phone={true}
              campaign={'CyberTruckGiveaway'}
            />

            {mobileQuery === 'desktop' ? (
              <p>
                ¡Pudieras ganar un <span>Tesla Cybertruck o un</span> <span>Tesla Model Y!</span>
                <div></div>
              </p>
            ) : null}
          </article>
        </div>

        <div className={`Cybertruckprregal-${mobileQuery}`}>
          <article>
            <img src={bannerfirmapr} alt="" />
          </article>
          <div></div>
        </div>

        <div className={`Cybertruckprparti-${mobileQuery}`}>
          <article>
            <div>
              <h1>PARA PARTICIPAR</h1>

              <ul>
                <li>
                  <span>
                    <img draggable="false" role="img" alt="✔" src="https://s.w.org/images/core/emoji/14.0.0/svg/2714.svg" />
                    Ser <strong>mayor de 18 años</strong> de edad.
                  </span>
                </li>

                <li>
                  <span>
                    <img draggable="false" role="img" alt="✔" src="https://s.w.org/images/core/emoji/14.0.0/svg/2714.svg" />
                    Obtener un sistema solar firmando contrato con WindMar Home.
                  </span>
                </li>

                <li>
                  <span>
                    <img draggable="false" role="img" alt="✔" src="https://s.w.org/images/core/emoji/14.0.0/svg/2714.svg" />
                    Mantener tu contrato vigente durante el cierre del periodo de participación. Todo contrato vigente al finalizar el periodo de
                    participación, cuenta con la oportunidad de ganar.
                  </span>
                </li>
              </ul>

              <p> ¡Se escogerán dos ganadores en el sorteo!</p>

              <h2>
                Gran premio: Cybertruck
                <br />
                <span>Segundo premio: Tesla Model Y.</span>
              </h2>

              <section>
                <Link to="/pr/cybertruck/rules">
                  <button>REGLAS DEL SORTEO</button>
                </Link>
              </section>
            </div>
          </article>
          <div></div>
        </div>

        <div className={`Cybertruckprunete-${mobileQuery}`}>
          <article>
            <h1>
              ¡Únete hoy a <br />
              <span>Energía de la Buena!</span>
            </h1>
            <p>
              Solo los mayores de 18 años pueden participar. El sorteo{' '}
              <strong>comienza el sábado, 1 de julio de 2023 a las 12:01 a.m. y finaliza el domingo, 30 de junio de 2024 a las 11:59 p.m. </strong>
              Los ganadores se estarán anunciando en julio de 2024. Solo se van a contar los participantes cuyas cuentas estén activas el 30 de mayo
              de 2024. Nada que comprar para participar. Sorteo auspiciado por WindMar Home.
            </p>
          </article>
        </div>
        <Footer color="black" />
      </div>
    </>
  )
}

export default CybertruckPR_ES

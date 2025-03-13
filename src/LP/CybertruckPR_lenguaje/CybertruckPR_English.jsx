import './CybertruckPR_Englishdesktop.css'
import './CybertruckPR_Englishmobile.css'
//Redux imports
import { useSelector, useDispatch } from 'react-redux'
//import images
import bannerfirmapr from '../../assets/cybertruckpr/bannerfirmapr.jpg'
import logoprcyber from '../../assets/cybertruckpr/logoprcyber.png'

import Pixel from '../../components/Pixel/Pixel'
import Header from '../../layouts/General/Header/Header'
import Footer from '../../layouts/General/Footer/Footer'

//import lenguaje
import { setlenguaje } from '../../features/states/statesSlice'

// Librerias
import { Link } from 'react-router-dom'
import FormsLeads from '../../components/FormsLeads/FormsLeads'
import { LP_CybertruckPR } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'

import FormsLeads_PR_RHF from '../../components/FormsLeads/FormsLeads_reactHookForm/Formsleads_PR_RHF'

const CybertruckPR_English = () => {
  const dispatch = useDispatch()
  const mobileQuery = useSelector((state) => state.states.mobileQuery)
  const lenguaje = useSelector((state) => state.states.lenguaje)
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
                  <button>PARTICIPATE TODAY!</button>
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
              campaign={'CyberTruckGiveaway'}
              estilos={LP_CybertruckPR}
              tittle={'Participate'}
              placeholder={true}
              city={true}
              email={false}
              phone={true}
            />
            {mobileQuery === 'desktop' ? (
              <p>
                You could win a <span>Tesla Cybertruck or a</span> <span>Tesla Model Y!</span>
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
              <h1>TO PARTICIPATE</h1>

              <ul>
                <li>
                  <span>
                    <img draggable="false" role="img" alt="✔" src="https://s.w.org/images/core/emoji/14.0.0/svg/2714.svg" />
                    Be <strong>18 years or older</strong>.
                  </span>
                </li>

                <li>
                  <span>
                    <img draggable="false" role="img" alt="✔" src="https://s.w.org/images/core/emoji/14.0.0/svg/2714.svg" />
                    Get a solar system by signing a contract with WindMar Home.
                  </span>
                </li>

                <li>
                  <span>
                    <img draggable="false" role="img" alt="✔" src="https://s.w.org/images/core/emoji/14.0.0/svg/2714.svg" />
                    Maintain your contract valid during the participation period closure. Any valid contract at the end of the participation period
                    has the opportunity to win.
                  </span>
                </li>
              </ul>

              <p> Two winners will be chosen in the draw!</p>

              <h2>
                Grand prize: Cybertruck
                <br />
                <span>Second prize: Tesla Model Y.</span>
              </h2>

              <section>
                <Link to="/pr/cybertruck/rulesenglish">
                  <button>SWEEPSTAKES RULES</button>
                </Link>
              </section>
            </div>
          </article>
          <div></div>
        </div>

        <div className={`Cybertruckprunete-${mobileQuery}`}>
          <article>
            <h1>
              Join today <br />
              <span>Good Energy!</span>
            </h1>
            <p>
              Only individuals aged 18 and above can participate. The draw{' '}
              <strong>starts on Saturday, July 1, 2023, at 12:01 a.m. and ends on Sunday, June 30, 2024, at 11:59 p.m.</strong>
              Winners will be announced in July 2024. Only participants with active accounts on May 30, 2024, will be considered. No purchase
              necessary to participate. Sweepstakes sponsored by WindMar Home.
            </p>
          </article>
        </div>
        <Footer color="black" />
      </div>
    </>
  )
}

export default CybertruckPR_English

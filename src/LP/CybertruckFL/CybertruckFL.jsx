import './CybertruckFLdesktop.css'
import './CybertruckFLmobile.css'
//Redux imports
import { useSelector } from 'react-redux'
//import images
import headerImg from '../../assets/cybertruckfl/header.png'
import cybertruckImg from '../../assets/cybertruckfl/backgr.png'
import tesla1 from '../../assets/cybertruckfl/tesla1.png'
import truck1 from '../../assets/cybertruckfl/truck1.png'
import truck2 from '../../assets/cybertruckfl/truck2.png'

import Header from '../../layouts/General/Header/Header'
import Footer from '../../layouts/General/Footer/Footer'
import Pixel from '../../components/Pixel/Pixel'

// Librearias
import { Link } from 'react-router-dom'
import { LP_CybertruckFL } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'
import FormsLeadsFL_DN from '../../components/FormsLeadsFL_DN/FormsLeadsFL_DN'
import { Helmet } from 'react-helmet'

const CybertruckFL = () => {
  const mobileQuery = useSelector((state) => state.states.mobileQuery)
  return (
    <>
      <Helmet>
        <meta name="description" content="Switch to solar with windmar solar + roofing and enter to win a cybertruck or a tesla powerwall" />
      </Helmet>
      <Pixel pixelID="1826134724345924" />
      <Header />
      <div className={`Cybertruckfl-${mobileQuery}`}>
        <div id="top">
          <img src={cybertruckImg} alt="" />
        </div>
        <section>
          <img src={headerImg} alt="" />
        </section>
        <article>
          <section>
            <div>
              {mobileQuery === 'desktop' ? (
                <>
                  <h1>START YOUR TRANSITION TO SOLAR ENERGY!</h1>
                </>
              ) : (
                <>
                  <p>
                    SWITCH TO SOLAR WITH <br />
                    WINDMAR SOLAR + ROOFING AND ENTER TO <br />
                    WIN A{' '}
                    <strong>
                      {' '}
                      CYBERTRUCK <br /> OR A TESLA POWERWALL
                    </strong>
                  </p>
                  <section>
                    <hr />
                  </section>
                  <h1>
                    START YOUR <br /> TRANSITION <br /> TO SOLAR ENERGY!
                  </h1>
                </>
              )}
            </div>
            <div></div>
          </section>
          <section>
            <div>
              <FormsLeadsFL_DN
                id="FormCyberTruckFL"
                campaign="CybertruckFL"
                estilos={LP_CybertruckFL}
                tittle={false}
                placeholder={true}
                city={true}
                email={true}
                phone={true}
              />
            </div>
            <div>
              {mobileQuery === 'desktop' ? (
                <>
                  <p>
                    SWITCH TO SOLAR WITH <br />
                    WINDMAR SOLAR + ROOFING AND ENTER TO <br />
                    WIN A{' '}
                    <strong>
                      {' '}
                      CYBERTRUCK <br /> OR A TESLA POWERWALL
                    </strong>
                  </p>
                  <section>
                    <hr />
                  </section>
                </>
              ) : null}
            </div>
          </section>
          <section>
            <div>
              {mobileQuery === 'desktop' ? (
                <h2>
                  EARN POWERFUL ENERGY <br /> AT HOME OR ON THE GO
                </h2>
              ) : (
                <h2>
                  EARN POWERFUL <br /> ENERGY AT HOME OR ON <br /> THE GO
                </h2>
              )}
              <span>
                <p>
                  For every purchase and installation of a Tesla Powerwall, you will receive the opportunity to enter our year-long giveaway and win
                  the anticipated Tesla Cybertruck or the potent Powerwall energy storage.
                </p>
              </span>
            </div>
            <div>
              <img src={tesla1} alt="" />
            </div>
          </section>
        </article>
        <div>
          <section>
            <h2>TO PARTICIPATE</h2>
            <ul>
              <li>
                <p>Lease, finance or purchase a Solar system with a Tesla Powerwall.</p>
              </li>
              <li>
                <p> Must be at least 18 years old.</p>
              </li>
              <li>
                <p>For every Tesla Powerwall obtained with WindMar Solar + Roofing, it equals 1 entry for the giveaway.</p>
              </li>
              <li>
                <p>
                  Keep your contract during the closing of the participation period. Any contract signed before the end of the participation period
                  has a chance to win.
                </p>
              </li>
            </ul>
            <Link to="/fl/cybertruckRules">
              <button>GIVEAWAY RULES</button>
            </Link>
          </section>
          <article>
            <img src={truck1} alt="" />
            <img src={truck2} alt="" />
          </article>
          <section>
            <h1>GIVEAWAY RULES</h1>
            {mobileQuery === 'desktop' ? (
              <h3>POWER UP AND WIN WITH WINDMAR SOLAR + ROOFING</h3>
            ) : (
              <h3>
                POWER UP AND WIN WITH WINDMAR <br /> SOLAR + ROOFING
              </h3>
            )}
            <Link to="/fl/cybertruckRules">
              <button>GIVEAWAY RULES</button>
            </Link>
          </section>
        </div>
      </div>
      <Footer color="black" />
    </>
  )
}

export default CybertruckFL

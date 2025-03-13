import './LearnAndWinb.css'
import './LearnAndWinbMobile.css'
// Redux toolkit
import { useSelector } from 'react-redux'

import { useState, useRef } from 'react'
//Layout
import Header from '../../layouts/General/Header/Header'
import Footer from '../../layouts/General/Footer/Footer'
//imagenes
import BannerLearAndWinUno from '../../assets/LearnAndWinB/BannerB.png'
import TextosB from '../../assets/LearnAndWinB/TextosB.png'
import BannerLearAndWinDosB from '../../assets/LearnAndWinB/Banner2.png'
import TextoAzulB from '../../assets/LearnAndWinB/TextoAzulB.png'
import BannerBmobile from '../../assets/LearnAndWinB/BannerBmobile.png'
import TextoAzulB2 from '../../assets/LearnAndWinB/TextoAzulB2.png'
import Banner2Mobile from '../../assets/LearnAndWinB/Banner2Mobile.png'

import { LP_LearAndWinB } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'
import FormsLeadsFL from '../../components/FormsLeads/FormsLeads_FL'

const LearnAndWinb = () => {
  // const dispatch = useDispatch();
  const mobileQuery = useSelector((state) => state.states.mobileQuery)

  return (
    <>
      <Header />
      <div className={`ContendorLearWinB-${mobileQuery}`}>
        <div className={`LearWinB-${mobileQuery}`}>
          <div>
            {/* Version movil */}
            <a href="#FormLearnmobile">{mobileQuery === 'mobile' ? <img src={BannerBmobile} /> : null} </a>

            {/* Version desktop*/}
            <a href="#FormLearn">{mobileQuery === 'desktop' ? <img src={BannerLearAndWinUno} /> : null}</a>
          </div>
        </div>
      </div>

      {/* Version desktop*/}
      {mobileQuery === 'desktop' ? (
        <section className={`FondoFormB-${mobileQuery}`}>
          <article>
            <img src={TextosB} />
            <div>
              <FormsLeadsFL
                id="learn_and_winb"
                campaign={'learn_and_winb'}
                estilos={LP_LearAndWinB}
                destination={true}
                boton={'SEND'}
                tittle="ENTER TODAY!"
                email={true}
                phone={true}
                city={false}
              />
            </div>
          </article>

          <div className={`TextoAzul-${mobileQuery}`}>
            <div className={`TextoAzulB-${mobileQuery}`}>
              <img src={BannerLearAndWinDosB} />
              <div>
                <img src={TextoAzulB} />
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* Version mobile*/}
      {mobileQuery === 'mobile' ? (
        <section className={`FondoFormB-${mobileQuery}`}>
          <article>
            <img src={TextosB} />
            <div id="FormLearnmobile">
              <FormsLeadsFL
                id="learn_and_winb"
                campaign={'learn_and_winb'}
                estilos={LP_LearAndWinB}
                destination={true}
                boton={'SEND'}
                tittle="ENTER TODAY!"
                email={true}
                phone={true}
                city={false}
              />
            </div>
          </article>

          <div className={`TextoAzul-${mobileQuery}`}>
            <div className={`TextoAzulB-${mobileQuery}`}>
              <img src={Banner2Mobile} />
              <div>
                <img src={TextoAzulB2} />
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <Footer color="blue" />
    </>
  )
}

export default LearnAndWinb

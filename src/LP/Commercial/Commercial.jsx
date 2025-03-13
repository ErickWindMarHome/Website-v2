import './Commercial.css'
// import "./Commercialmobile.css";
// Redux toolkit
import { useSelector } from 'react-redux'

// Importamos los estados de Redux
import FormsLeads from '../../components/FormsLeads/FormsLeads'
import { LP_CamEnrSolar } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'
// assets

import Pixel from '../../components/Pixel/Pixel'
//Layout
import Header from '../../layouts/General/Header/Header'
import Footer from '../../layouts/General/Footer/Footer'
import Barra from '../../layouts/General/Barra/Barra'
import FooterBar from '../../layouts/General/FooterBar/FooterBar'
import ModalPopUp from '../../components/ModalPopUp/ModalPopUp'

const Commercial = () => {
  const { mobileQuery } = useSelector((state) => state.states)
  return (
    <>
      <Pixel pixelID="1826134724345924" />
      <Header />
      <div className="espacio">
        <span id="CambiaSolar"></span>
      </div>
      <div className={`BannerCommercial-${mobileQuery}`} id="Commercial">
        <article>
          <div>
            <h1>
              {' '}
              <strong>Clientes</strong> <br />
              Corporativos
            </h1>
            <strong>
              <ModalPopUp></ModalPopUp>
            </strong>
          </div>
        </article>
      </div>

      <div className={`NuestroProceso-${mobileQuery}`}>
        <article>
          <h1>
            Este es nuestro <strong>proceso</strong>
          </h1>
          <p>Detalles del negocio</p>

          {mobileQuery === 'desktop' ? (
            <>
              <article>
                <div id="Consulta">
                  <img alt="" />
                </div>
                <div id="Survey">
                  <img alt="" />
                </div>
                <div id="Diseño">
                  <img alt="" />
                </div>
              </article>
              <section>
                <div id="Financiacion">
                  <img alt="" />
                </div>
                <div id="Instalacion">
                  <img alt="" />
                </div>
                <div id="Energizado">
                  <img alt="" />
                </div>
              </section>
            </>
          ) : null}

          {mobileQuery === 'mobile' ? (
            <>
              <div>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
              </div>
              <section>
                <img src={img3} alt="" />
                <img src={img4} alt="" />
              </section>
            </>
          ) : null}
        </article>
      </div>

      <FooterBar />
      <Footer color="blue" />
      <Barra caseLocation="cambiateenergiasolar" color="blue" />
    </>
  )
}

export default Commercial

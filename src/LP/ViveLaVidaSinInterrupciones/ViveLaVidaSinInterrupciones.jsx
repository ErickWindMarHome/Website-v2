import './ViveLaVidaSinInterrupciones.css'
import './ViveLaVidaSinInterrupciones_mobile.css'

// Redux toolkit
import { useSelector } from 'react-redux'

// Importamos los estados de Redux
import FormsLeads from '../../components/FormsLeads/FormsLeads'
import { LP_ViveSinInterrupciones } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'

// assets
import ViveForm from '../../assets/vivelavidasinrestricciones/titularcambiateaenergiasolarcarmenjovet.png'
import UnicoSunnova from '../../assets/vivelavidasinrestricciones/vivesinrestriccionescaribe.png'
import Carmen from '../../assets/vivelavidasinrestricciones/CarmenJovetFetureimagewebsite03.png'
import SunovaPlatinum from '../../assets/cambiate_a_energia_solar/Sunnova-Platinum.png'
import img1 from '../../assets/WidnmarIcono01.png'
import img2 from '../../assets/WidnmarIcono02.png'
import img3 from '../../assets/WidnmarIcono03.png'
import img4 from '../../assets/WidnmarIcono04.png'

import Pixel from '../../components/Pixel/Pixel'
//Layout
import Header from '../../layouts/General/Header/Header'
import Footer from '../../layouts/General/Footer/Footer'
import Barra from '../../layouts/General/Barra/Barra'

import FormsLeads_PR_RHF from '../../components/FormsLeads/FormsLeads_reactHookForm/Formsleads_PR_RHF'

const ViveLaVidaSinInterrupciones = () => {
  const mobileQuery = useSelector((state) => state.states.mobileQuery)
  return (
    <>
      <Pixel pixelID="1826134724345924" />
      <Header />
      <div className="espacio"></div>
      <div className={`ViveLaVidaSinInterrupciones-${mobileQuery}`} id="vive-sin-interrupciones">
        <article>
          <img src={ViveForm} alt="" />
          <FormsLeads_PR_RHF
            id="confia_en_los_expertos_carmen"
            campaign={'confia_en_los_expertos_carmen'}
            estilos={LP_ViveSinInterrupciones}
            boton={'Enviar'}
            tittle=""
            phone={true}
            email={false}
            city={true}
          />
        </article>
        <section>
          <img src={UnicoSunnova} alt="" />
          <article>
            <img src="https://windmar-website-cms.s3.amazonaws.com/Windmar1.0/LANDING+PAGE/invitacion-carmen-jovet-energia-solar.webp" alt="" />
          </article>
        </section>
      </div>

      <div className={`Banner_SunnC-${mobileQuery}`}>
        <article>
          <div>
            <img src={SunovaPlatinum} alt="" />
            <h2>La única compañía que ofrece financiamiento exclusivo con un banco de Puerto Rico, Oriental Bank.</h2>
          </div>
        </article>
      </div>

      <div className={`Banner_PQC-${mobileQuery}`}>
        <article>
          <h1>¿Por qué WindMar Home?</h1>

          {mobileQuery === 'desktop' ? (
            <div>
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
            </div>
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

      <div className={`Banner_Carmen-${mobileQuery}`}>
        <article>
          <h1>
            No dependas de una red eléctrica inestable. <br />
            Instalación, permisos, mantenimiento y garantía siempre incluidas.
          </h1>
          <img src={Carmen} alt="" />
        </article>
      </div>
      <Footer color="blue" />
      <Barra caseLocation="ViveLaVidaSinInterrupciones" color="blue" />
    </>
  )
}

export default ViveLaVidaSinInterrupciones

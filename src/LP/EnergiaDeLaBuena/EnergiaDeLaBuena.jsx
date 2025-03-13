import './EnergiaDeLaBuena.css'
import './EnergiaDeLaBuena_mobile.css'

// Redux toolkit
import { useSelector, useDispatch } from 'react-redux'

// Importamos los estados de Redux
import FormsLeads from '../../components/FormsLeads/FormsLeads'
import { LP_CamEnrBuena } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'

// assets
import EnergiaForm from '../../assets/cambiate_a_energia_solar/CambiateForm.png'
import tesla from '../../assets/cambiate_a_energia_solar/tesla.png'
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

const EnergiaDeLaBuena = () => {
  const { mobileQuery } = useSelector((state) => state.states)

  return (
    <>
      <Pixel pixelID="1826134724345924" />
      <Header />
      <div className="espacio"></div>
      <div className={`EnergiaDeLaBuena-${mobileQuery}`} id="Energia_Buena">
        <article>
          <img src={EnergiaForm} alt="" />

          <FormsLeads_PR_RHF
            id="cambiate_a_energia_de_la_buena"
            estilos={LP_CamEnrBuena}
            boton={'Enviar'}
            tittle=""
            phone={true}
            email={true}
            city={true}
            productos={true}
            campaign={'cambiate_a_energia_de_la_buena'}
          />
        </article>
      </div>

      <div className={`Banner_Sunn-${mobileQuery}`}>
        <article>
          <div>
            <img src={SunovaPlatinum} alt="" />
            <h2>La única compañía que ofrece financiamiento exclusivo con un banco de Puerto Rico, Oriental Bank.</h2>
          </div>
        </article>
      </div>

      <div className={`Banner_PQ-${mobileQuery}`}>
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

      <div className={`Banner_Az-${mobileQuery}`}>
        <article>
          <h1>No dependas de una red eléctrica inestable. Instalación, permisos, mantenimiento y garantía siempre incluidas.</h1>
          <img src={tesla} alt="" />
        </article>
      </div>
      <Footer color="blue" />
      <Barra caseLocation="energiadelabuena" color="blue" />
    </>
  )
}

export default EnergiaDeLaBuena

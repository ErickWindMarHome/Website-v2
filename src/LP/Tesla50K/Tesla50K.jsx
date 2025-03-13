// import validator from "validator";
import './Tesla50K.css'
import './Tesla50KMobible.css'
// Redux toolkit
import { useSelector } from 'react-redux'

//Layout
import Header from '../../layouts/General/Header/Header'
import Footer from '../../layouts/General/Footer/Footer'
import Barra from '../../layouts/General/Barra/Barra'
//imagenes
import TeslaBanner from '../../assets/Tesla50k/TeslaBanner.png'
import Instalacion30 from '../../assets/Tesla50k/Instalacion30dias.png'
import Financiamiento10 from '../../assets/Tesla50k/Financiamiento10-15.png'
import ContamosMas1K from '../../assets/Tesla50k/ContamosMas1K.png'
import ContamosMas2K from '../../assets/Tesla50k/ContamosMas2K.png'
import ContamosMas200 from '../../assets/Tesla50k/ContamosMas200.png'
import KHoares from '../../assets/Tesla50k/50KHogares.png'
import VeinteAños from '../../assets/Tesla50k/20Años.png'
import MasReferidaAzul from '../../assets/Tesla50k/MasReferidaAzul.png'
import Clippathgroup from '../../assets/Tesla50k/Clippathgroup.png'
import IconosTesla from '../../assets/Tesla50k/IconosTesla.png'
import BannerAzulIconoMobile from '../../assets/Tesla50k/bannerMobileIconos.png'
import { LP_Tesla50K } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'
import FormsLeads_PR_RHF from '../../components/FormsLeads/FormsLeads_reactHookForm/Formsleads_PR_RHF'
import { Helmet } from 'react-helmet'

const Tesla50K = () => {
  // const dispatch = useDispatch();
  const { mobileQuery } = useSelector((state) => state.states)

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Se parte de los más de 50,000 hogares que confiaron en WindMar Home y Tesla, adquiere un sistema solar con la batería Powerwall y lleguemos juntos a la meta."
        />
      </Helmet>
      <Header />
      <div className={`ContendorTesla50K-${mobileQuery}`}>
        <div className={`Tesla50K-${mobileQuery}`}>
          <div>
            <h1 className="titulo">ÚNETE A LOS RECONOCIDOS MUNDIALMENTE POR TESLA</h1>
            <p>
              Cimentamos nuestra posición como lider en la industria al ser reconocidos como la primera compañía en el mundo en instalar 50,000
              baterias Tesla Powerwall
            </p>
            <img src={TeslaBanner} />
          </div>

          <FormsLeads_PR_RHF
            id="tesla_50k"
            estilos={LP_Tesla50K}
            boton={'Enviar'}
            tittle="¡SOLICITA HOY!"
            phone={true}
            email={true}
            city={true}
            campaign={'tesla_50k'}
          />
        </div>
      </div>

      <div className={`TeslaIm-${mobileQuery}`}>{mobileQuery === 'mobile' ? <img src={TeslaBanner} /> : null}</div>

      <div className={`TeslaH1Gal-${mobileQuery}`}>
        {mobileQuery === 'mobile' ? (
          <article>
            <h1> OTRAS RAZONES PARA CONFIARLE TU SISTEMA DE ENERGÍA SOLAR A WINDMAR</h1>
            <div>
              <img src={Instalacion30} alt="" />
              <img src={Financiamiento10} alt="" />
            </div>
            <div>
              <img src={ContamosMas1K} alt="" />
              <img src={ContamosMas2K} alt="" />
            </div>
            <div>
              <img src={ContamosMas200} alt="" />
              <img src={KHoares} alt="" />
            </div>
            <div>
              <img src={VeinteAños} alt="" />
              <img src={MasReferidaAzul} alt="" />
            </div>
          </article>
        ) : null}
      </div>

      <section className={`GaleriaTesla-${mobileQuery}`}>
        <article>
          <h1>
            {' '}
            OTRAS RAZONES PARA CONFIARLE <br /> TU SISTEMA DE ENERGÍA SOLAR A WINDMAR
          </h1>
          <div>
            <img src={Instalacion30} alt="" />
            <img src={Financiamiento10} alt="" />
            <img src={ContamosMas1K} alt="" />
            <img src={ContamosMas2K} alt="" />
          </div>
          <section>
            <img src={ContamosMas200} alt="" />
            <img src={KHoares} alt="" />
            <img src={VeinteAños} alt="" />
            <img src={MasReferidaAzul} alt="" />
          </section>{' '}
        </article>
      </section>
      <section className={`Powerwall-${mobileQuery}`}>
        <article>
          <img src={Clippathgroup} />
          <div>
            <h1>TESLA POWERWALL ES LA BATERÍA #1 EN EL MERCADO</h1>
            <p>y la solución más inteligente para almacenar energía recolectada por paneles solares.</p>
          </div>
        </article>
      </section>

      <div className={`BannerAzulIconoMobile-${mobileQuery}`}>{mobileQuery === 'mobile' ? <img src={BannerAzulIconoMobile} /> : null}</div>
      <section className={`IconosTesla-${mobileQuery}`}>
        <article>
          <img src={IconosTesla} />
        </article>
      </section>

      <section className={`VamosCamino-${mobileQuery}`}>
        <article>
          <h1>
            TESLA nos reconoce como la única <br /> compañía en el mundo en instalar <br /> <strong>50 MIL</strong> baterías!
          </h1>
          <br />
          <h2>
            ¡APRENDE MÁS! <strong>787-395-7766</strong>
          </h2>
        </article>
      </section>
      <Footer color="blue" />
      <Barra caseLocation="incentivos" color="blue" />
    </>
  )
}

export default Tesla50K

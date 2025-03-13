import { Link } from 'react-router-dom'
import './Barra.css'
import { useSelector } from 'react-redux'
//import { setFormvisible } from "../../../features/states/statesSlice";

const Barra = (props) => {
  const mobileQuery = useSelector((state) => state.states.mobileQuery)
  //const locacion = useSelector((state) => state.states.locacion);
  //const formvisible = useSelector((state) => state.states.formvisible);

  //const dispatch = useDispatch();

  const { caseLocation, color, scrollToForm } = props

  const renderSwitchCase = () => {
    switch (caseLocation) {
      case 'getestimate':
        return (
          <article>
            <span>Get an instant ballpark solar estimate using satellites!&nbsp;&nbsp;</span>
            <a href="https://windmar-home.estimate.demand-iq.com/" target="_blank" rel="noreferrer">
              <button>GET ESTIMATE!</button>
            </a>
          </article>
        )
      case 'pescaito':
        return (
          <article>
            <span>DEJANOS PROTEJERTE</span>
            <a href="#pescaito_solar_top">
              <button>CLIC AQUÍ</button>
            </a>
          </article>
        )
      case 'anker':
        return (
          <article>
            <span>¡ADQUIERE TU CATÁLOGO AHORA¡</span>
            <a className="anker_home">
              <button onClick={scrollToForm}>CLIC AQUÍ</button>
            </a>
          </article>
        )
      case 'roofingpr':
        return (
          <article>
            <span>¡Cotiza ahora!</span>
            <a href="#cotiza">
              <button>CLIC AQUÍ</button>
            </a>
          </article>
        )
      case 'roofingfl':
        return (
          <article>
            <span>ELEVATE YOUR ROOFING EXPERIENCE!</span>
            <a href="#top">
              <button>BOOK NOW</button>
            </a>
          </article>
        )
      case 'cambiateenergiasolar':
        return (
          <article>
            <span>PARA UNA CONSULTA GRATIS</span>
            <a href="#form">
              <button>CONTÁCTANOS</button>
            </a>
          </article>
        )
      case 'energiadelabuena':
        return (
          <article>
            <span>PARA UNA CONSULTA GRATIS</span>
            <a href="#form">
              <button>CONTÁCTANOS</button>
            </a>
          </article>
        )
      case 'artequeilumina':
        return (
          <article>
            <span>PARA UNA CONSULTA GRATIS</span>
            <a href="#form">
              <button>CONTÁCTANOS</button>
            </a>
          </article>
        )
      case 'incentivos':
        return (
          <article>
            <span>PARA UNA CONSULTA GRATIS</span>
            <a href="#form">
              <button>CONTÁCTANOS</button>
            </a>
          </article>
        )
      case 'rafaelalgarin':
        return (
          <article>
            <span>PARA UNA CONSULTA GRATIS</span>
            <a href="#form">
              <button>CONTÁCTANOS</button>
            </a>
          </article>
        )
      case 'DavidSepulveda':
        return (
          <article>
            <span>PARA UNA CONSULTA GRATIS</span>
            <a href="#form">
              <button>CONTÁCTANOS</button>
            </a>
          </article>
        )
      case 'AlejandroRodriguez':
        return (
          <article>
            <span>PARA UNA CONSULTA GRATIS</span>
            <a href="#form">
              <button>CONTÁCTANOS</button>
            </a>
          </article>
        )
      case 'GaBa':
        return (
          <article>
            <span>PARA UNA CONSULTA GRATIS</span>
            <a href="#form">
              <button>CONTÁCTANOS</button>
            </a>
          </article>
        )
      case 'JuanP':
        return (
          <article>
            <span>PARA UNA CONSULTA GRATIS</span>
            <a href="#form">
              <button>CONTÁCTANOS</button>
            </a>
          </article>
        )
      case 'Referidos':
        return (
          <article>
            <span>PARA UNA CONSULTA GRATIS</span>
            <a href="#form">
              <button>CONTÁCTANOS</button>
            </a>
          </article>
        )
      case 'CarrersInstaller':
        return (
          <article>
            <span>PARA UNA CONSULTA GRATIS</span>
            <a href="#form">
              <button>CONTÁCTANOS</button>
            </a>
          </article>
        )
      case ' TecnicoDeInstalacion':
        return (
          <article>
            <span>PARA UNA CONSULTA GRATIS</span>
            <a href="#form">
              <button>CONTÁCTANOS</button>
            </a>
          </article>
        )
      case ' TecnicoRoofing':
        return (
          <article>
            <span>PARA UNA CONSULTA GRATIS</span>
            <a href="#form">
              <button>CONTÁCTANOS</button>
            </a>
          </article>
        )
      case ' ViveLaVidaSinInterrupciones':
        return (
          <article>
            <span>PARA UNA CONSULTA GRATIS</span>
            <a href="#form">
              <button>CONTÁCTANOS</button>
            </a>
          </article>
        )
      case 'ReferidosTecnicos':
        return (
          <article>
            <span>PARA UNA CONSULTA GRATIS</span>
            <a href="#form">
              <button>CONTÁCTANOS</button>
            </a>
          </article>
        )

      case 'solarfl':
        return (
          <article>
            <span>Get an instant ballpark solar estimate using satellites!</span>
            <a href="https://windmar-home.estimate.demand-iq.com/" target="_blank" rel="noreferrer">
              <button>GET ESTIMATE!</button>
            </a>
          </article>
        )
      case 'solarpr':
        return (
          <article>
            <span>PARA UNA CONSULTA GRATIS</span>
            <Link to="/pr/cambiate-a-energia-solar">
              <button>CONTÁCTANOS</button>
            </Link>
          </article>
        )
      default:
        return (
          <article>
            <a href="">
              <button></button>
            </a>
          </article>
        )
    }
  }

  return <div className={`Barra-${mobileQuery} ${color}`}>{renderSwitchCase()}</div>
}

export default Barra

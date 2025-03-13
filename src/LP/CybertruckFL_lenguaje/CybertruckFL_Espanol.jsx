import './CybertruckFLdesktop.css'
import './CybertruckFLmobile.css'
//Redux imports
import { useSelector, useDispatch } from 'react-redux'
//import images
import headerImg from '../../assets/cybertruckfl/header.png'
import cybertruckImg from '../../assets/cybertruckfl/backgr.png'
import tesla1 from '../../assets/cybertruckfl/tesla1.png'
import truck1 from '../../assets/cybertruckfl/truck1.png'
import truck2 from '../../assets/cybertruckfl/truck2.png'

import Header from '../../layouts/General/Header/Header'
import Footer from '../../layouts/General/Footer/Footer'
import Pixel from '../../components/Pixel/Pixel'

import { setLast_Name, setEmail, setPhone, setCity } from '../../features/states/formDataSlace'

// Librearias
import { Link } from 'react-router-dom'
import validator from 'validator'

import { getUTMs } from '../../features/getUTM/getUTM' //Funcion para obtener los utms
import { formDataUTM } from '../../features/formDataUTM/formDataUTM' //Funcion para agregar los utms al formData
import { SendAPI } from '../../features/Zoho/CRMAPI/CRMAPI' //Funcion para enviar la informacion a la API
import { LP_CybertruckFL } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'
import FormsLeadsFL_DN from '../../components/FormsLeadsFL_DN/FormsLeadsFL_DN'

const CybertruckFL = () => {
  const dispatch = useDispatch()
  const mobileQuery = useSelector((state) => state.states.mobileQuery)
  const locacion = useSelector((state) => state.states.locacion)

  const { Last_Name, Email, Phone, City } = useSelector((state) => state.formData)

  const { isNumeric, isEmail } = validator

  const validateForm = () => {
    console.log('Validando formulario')
    let ValidForm = true

    if (!isNumeric(Phone)) {
      ValidForm = false
      console.log('Phone No cumple con el formato de número de teléfono')
    }
    if (Phone.length < 10) {
      ValidForm = false
      console.log('Phone No cumple con el minimo de caracteres')
    }
    if (!isEmail(Email)) {
      ValidForm = false
      console.log('Email No cumple con el formato de email')
    }
    if (City.length < 2) {
      ValidForm = false
      console.log(City, ' ', City.length, ' City no se ha seleccionado')
    }

    return ValidForm
  }

  const FormReset = () => {
    dispatch(setLast_Name(''))
    dispatch(setPhone(''))
    dispatch(setEmail(''))
    dispatch(setCity(''))
  }

  const handlesubmition = (event) => {
    event.preventDefault()

    if (validateForm()) {
      const utms = getUTMs()

      const formData = formDataUTM(utms, event.target, locacion.toUpperCase())

      formData.append('Full_Name', Last_Name)

      console.log(formData)

      console.log('Enviando información en formato FormData')
      console.log(Object.fromEntries(formData))

      console.log('Enviando información en formato JSON')
      console.log(JSON.stringify(Object.fromEntries(formData)))

      SendAPI(formData, FormReset)
    } else {
      alert('Por favor, llena todos los campos del formulario correctamente')
    }
  }
  return (
    <>
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
                  <h1>¡COMIENZA TU TRANSICIÓN A ENERGÍA SOLAR!</h1>
                </>
              ) : (
                <>
                  <p>
                    CÁMBIATE A ENERGÍA SOLAR CON <br />
                    WINDMAR SOLAR + ROOFING Y GANA <br />
                    UNA{' '}
                    <strong>
                      {' '}
                      BATERÍA <br /> TESLA POWERWALL
                    </strong>
                  </p>
                  <section>
                    <hr />
                  </section>
                  <h1>
                    ¡COMIENZA TU <br /> TRANSICIÓN <br /> A ENERGÍA SOLAR!
                  </h1>
                </>
              )}
            </div>
            <div></div>
          </section>
          <section>
            <div>
              <div>
                <FormsLeadsFL_DN
                  id="FormCyberTruckFL"
                  estilos={LP_CybertruckFL}
                  tittle={false}
                  placeholder={true}
                  city={true}
                  email={false}
                  phone={true}
                />
              </div>
            </div>
            <div>
              {mobileQuery === 'desktop' ? (
                <>
                  <p>
                    CÁMBIATE A ENERGÍA SOLAR CON <br />
                    WINDMAR SOLAR + ROOFING Y GANA <br />
                    UNA{' '}
                    <strong>
                      {' '}
                      BATERÍA <br /> TESLA POWERWALL
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
            <Link to="/fl/cybertruck/rules">
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
            <Link to="/fl/cybertruck/rules">
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

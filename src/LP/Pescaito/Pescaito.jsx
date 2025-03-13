//CSS
import './PescaitoDesktop.css'
import './PescaitoMobile.css'

// Librearias
import validator from 'validator'

// Redux toolkit
import { useSelector, useDispatch } from 'react-redux'

// validaciones
const { isEmail, isNumeric } = validator

// Importamos los estados de Redux
import { setForm_Name, setFull_Name, setPhone, setEmail } from '../../features/states/formDataSlace'

// Components
import PescaitoCard from '../../components/PescaitoCard/PescaitoCard'

//videos
import aumentopago from '../../assets/pescaito/aumento-pago.mp4'
import vendermenos from '../../assets/pescaito/vender-menos.mp4'
import novatos from '../../assets/pescaito/novatos.mp4'
import incentivo from '../../assets/pescaito/incentivo.mp4'
import arrollao from '../../assets/pescaito/arrollao.mp4'

//Layout
import Header from '../../layouts/General/Header/Header'
import Footer from '../../layouts/General/Footer/Footer'
import Barra from '../../layouts/General/Barra/Barra'

// assets
import PescaitoDesktop from '../../assets/pescaito/pescaitosolar-desktop.png'
import PescaitoMobile from '../../assets/pescaito/pescaitosolar-mobile.png'

import { getUTMs } from '../../features/getUTM/getUTM'
import { formDataUTM } from '../../features/formDataUTM/formDataUTM'
import { SendAPI } from '../../features/Zoho/CRMAPI/CRMAPI'

// Validar formulario

const Pescaito = () => {
  const dispatch = useDispatch()

  const mobileQuery = useSelector((state) => state.states.mobileQuery)
  const locacion = useSelector((state) => state.states.locacion)

  const { Full_Name, Email, Phone } = useSelector((state) => state.formData)

  const validateForm = (form) => {
    dispatch(setForm_Name(form.name))
    if (Full_Name.length < 7) return false
    if (Phone.length < 10 && !isNumeric(Phone)) return false
    if (!isEmail(Email)) return false
    return true
  }

  const FormReset = () => {
    dispatch(setFull_Name(''))
    dispatch(setPhone(''))
    dispatch(setEmail(''))
  }

  const handlesubmition = (event) => {
    event.preventDefault()

    console.log(event.target)

    if (validateForm(event.target)) {
      console.log('AQUÍ SE TOMAN LOS UTMS')
      const utms = getUTMs()

      const formData = formDataUTM(utms, event.target, locacion.toUpperCase())

      formData.append('Last_Name', Full_Name)
      formData.append('Form_Name', event.target.name)

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

  document.title = 'Pescaito Solar'
  return (
    <>
      <Header />
      <div className={`Pescaito-${mobileQuery}`} id="pescaito_solar_top">
        <span> </span>
        <article className={`PescaitoAlerta1-${mobileQuery}`}>ALERTA CONTRA LOS ESQUEMAS DE ENERGÍA SOLAR</article>
        <article className={`PescaitoForm-${mobileQuery}`}>
          <div>
            <section>
              {mobileQuery === 'mobile' ? (
                <p>
                  CUÍDATE DE PESCAÍTO SOLAR Y ELIGE <br /> WINDMAR HOME
                </p>
              ) : (
                <p>
                  CUÍDATE DE PESCAÍTO SOLAR Y <br />
                  ELIGE <br />
                  WINDMAR HOME
                </p>
              )}

              <form onSubmit={handlesubmition} name="pescaito_solar" id="pescaito_solar">
                <label htmlFor="Full_Name">NOMBRE</label>
                <input
                  type="text"
                  id="Full_Name"
                  name="Full_Name"
                  value={Full_Name}
                  onChange={(event) => dispatch(setFull_Name(event.target.value))}
                />
                <label htmlFor="Phone">TELÉFONO</label>
                <input
                  type="text"
                  id="Phone"
                  name="Phone"
                  value={Phone}
                  onChange={(event) => {
                    if (event.target.value.length > 10) return
                    if (event.target.value.length === 0) {
                      dispatch(setPhone(''))
                      return
                    }
                    dispatch(setPhone(isNumeric(event.target.value) ? event.target.value : Phone))
                  }}
                />
                <label htmlFor="Email">CORREO ELECTRONICO</label>
                <input type="text" id="Email" name="Email" value={Email} onChange={(event) => dispatch(setEmail(event.target.value))} />
                <button type="submit">CLIC AHORA</button>
              </form>
            </section>
            <section>
              <picture>
                <img src={mobileQuery === 'mobile' ? PescaitoMobile : PescaitoDesktop} alt="" />
              </picture>
            </section>
          </div>
        </article>
        <article className={`PescaitoAlerta-${mobileQuery}`}>
          <div>
            <h1>ALERTA CONTRA PESCAÍTO SOLAR</h1>
            ¡Que no te cojan de pescao’! Hay muchas compañías solares que prometen mucho y no cumplen. Pero en WindMar Home, queremos ser
            transparentes con ustedes. Por eso te alertamos sobre los esquemas fraudulentos que se aprovechan de aquellos que buscan el cambio a
            energía solar; los cuales están mayormente dirigidos a personas mayores de edad.
          </div>
        </article>
        <article className={`PescaitoVideos-${mobileQuery}`}>
          <h1>ESQUEMAS FAVORITOS DE PESCAÍTO SOLAR</h1>
          <div>
            <PescaitoCard
              title="AUMENTARTE EL PAGO MENSUAL"
              description="Implica aumentos anuales en tu pago solar, lo que puede duplicar tu factura original de energía."
              videoURL={aumentopago}
              posterURL="/images/pescaito/Thumbnails_aumentarte-el-pago-@2x-100-2.jpg"
            />
            <PescaitoCard
              title="VENDERTE MENOS DE LO QUE NECESITAS"
              description="Te cotizan un sistema solar con menos capacidad de la que necesita tu hogar para hacerte creer que estás obteniendo un mejor precio. Esto no logrará satisfacer las necesidades energéticas de tu familia y no estarás satisfecho con el servicio."
              videoURL={vendermenos}
              posterURL="/images/pescaito/Thumbnails_aumentarte-el-pago-Thumbnails_venderte-menos-@2x-100-2.jpg"
            />
            <PescaitoCard
              title="AÑADIRSE AÑOS DE EXPERIENCIA"
              description="Pescaíto Solar engaña comunicando que tiene más años de experiencia de la que realmente posee."
              videoURL={novatos}
              posterURL="/images/pescaito/Thumbnails_añadirse-años-@2x-100-1.jpg"
            />
            <PescaitoCard
              title="INCENTIVO"
              description="Se inventan que su propuesta incluye un incentivo cuando no es verdad."
              videoURL={incentivo}
              posterURL="/images/pescaito/Thumbnails_incentivo-federal-@2x-100-2.jpg"
            />
            <PescaitoCard
              title="DEJARTE ARROLLAO’"
              description="Te dicen que ofrecen un servicio al cliente enfocado en ti. Pero a la hora de la verdad, cuando necesitas ayuda o mantenimiento de tu sistema fotovoltaico, nunca están disponibles."
              videoURL={arrollao}
              posterURL="/images/pescaito/Thumbnails_dejarte-arrollao-@2x-100-1.jpg"
            />
          </div>
        </article>
        <article className={`PescaitoConfia-${mobileQuery}`}>
          <div>
            <p>
              LA TRANSPARENCIA ES LA CLAVE CUANDO BUSCAS CAMBIARTE A ENERGÍA RENOVABLE. EVITA LOS FRAUDES Y LOS MALOS RATOS AL IRTE CON UNA COMPAÑÍA
              SOLAR DEDICADA A PROVEERTE LA MEJOR EXPERIENCIA DE TRANSICIÓN A ENERGÍA SOLAR.
            </p>
          </div>
        </article>
        <article className={`PescaitoAlerta2-${mobileQuery}`}>ALERTA CONTRA LOS ESQUEMAS DE ENERGÍA SOLAR</article>
      </div>
      <Footer color="red" />
      <Barra caseLocation="pescaito" color="red" />
    </>
  )
}

export default Pescaito

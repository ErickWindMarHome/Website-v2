import './Referidos.css'
import './Referidosmobile.css'

// Redux toolkit
import { useSelector, useDispatch } from 'react-redux'

// Importamos los estados de Redux
import { setLast_Name, setEmail, setReferido_Nombre, setReferido_Telefono, setCity } from '../../features/states/formDataSlace'

// Librerias
import validator from 'validator'

import { getUTMs } from '../../features/getUTM/getUTM' //Funcion para obtener los utms
import { formDataUTM } from '../../features/formDataUTM/formDataUTM' //Funcion para agregar los utms al formData
import { SendAPI } from '../../features/Zoho/CRMAPI/CRMAPI' //Funcion para enviar la informacion a la API

// assets
import GanaNForm from '../../assets/Referidos/gana-en-nuestro-programa.png'
import GanaNCintilla from '../../assets/Referidos/cintillos-10.png'
import AF from '../../assets/Referidos/AF-refiere-y-gana-03.png'

//Layout
import Pixel from '../../components/Pixel/Pixel'
import Header from '../../layouts/General/Header/Header'
import Footer from '../../layouts/General/Footer/Footer'
import Barra from '../../layouts/General/Barra/Barra'

const Referidos = () => {
  const dispatch = useDispatch()
  const mobileQuery = useSelector((state) => state.states.mobileQuery)
  const locacion = useSelector((state) => state.states.locacion)

  const { Last_Name, Email, Referido_Nombre, Referido_Telefono, City } = useSelector((state) => state.formData)

  const { isNumeric, isEmail } = validator

  const validateForm = () => {
    console.log('Validando formulario')
    let ValidForm = true

    if (Last_Name.length < 3) {
      ValidForm = false
      console.log('Name No cumple con el minimo de caracteres')
    }

    if (!isNumeric(Referido_Telefono)) {
      ValidForm = false
      console.log('Phone No cumple con el formato de número de teléfono')
    }
    if (Referido_Telefono.length < 10) {
      ValidForm = false
      console.log('Phone No cumple con el minimo de caracteres')
    }
    if (Referido_Nombre.length < 3) {
      ValidForm = false
      console.log('Referido_Nombre No cumple con el minimo de caracteres')
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
    dispatch(setEmail(''))
    dispatch(setCity(''))
    dispatch(setReferido_Nombre(''))
    dispatch(setReferido_Telefono(''))
  }

  const handlesubmition = (event) => {
    event.preventDefault()

    if (validateForm()) {
      const utms = getUTMs()

      const formData = formDataUTM(utms, event.target, locacion.toUpperCase())

      formData.append('Form_Name', event.target.name)
      formData.append('Full_Name', Last_Name)
      formData.set('Lead_Source', 'Referidos')

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
      <div className="espacio"></div>
      <div className={`Referidos-${mobileQuery}`} id="Referidos">
        <div className={`FormReferidos-${mobileQuery}`}>
          <article>
            <img src={GanaNForm} alt="" />

            <form id="form_de_referidos" action="" name="form_de_referidos" method="POST" onSubmit={handlesubmition}>
              <br />
              <h2>Cliente</h2>
              <br />
              <label>
                Tu nombre completo<span>*</span>
              </label>
              <br />
              <input
                type="text"
                id="Last_Name"
                name="Last Name"
                placeholder="Nombre completo"
                value={Last_Name}
                onChange={(e) => dispatch(setLast_Name(e.target.value))}
              />
              <br />

              <label>Tu email</label>
              <br />
              <input type="" id="Email" placeholder="Email" name="Email" value={Email} onChange={(e) => dispatch(setEmail(e.target.value))} />
              <br />

              <label>
                Nombre de Referido<span>*</span>
              </label>
              <br />
              <input
                type="text"
                id="Referido_Nombre"
                name="Referido_Nombre"
                placeholder="Nombre Referido"
                value={Referido_Nombre}
                onChange={(e) => dispatch(setReferido_Nombre(e.target.value))}
              />
              <br />

              <label>
                Teléfono de Referido<span>*</span>
              </label>
              <br />
              <input
                type="number"
                id="Referido_Telefono"
                name="Referido_Telefono"
                placeholder="Teléfono Referido"
                value={Referido_Telefono}
                onChange={(e) => dispatch(setReferido_Telefono(e.target.value))}
              />
              <br />

              <label>
                ¿Dónde reside el referido?<span>*</span>
              </label>
              <br />
              <select
                type="text"
                id="City"
                name="City"
                aria-label="Small select example"
                value={City}
                onChange={(e) => dispatch(setCity(e.target.value))}
              >
                <option value="-Seleccionar-">-Seleccionar-</option>
                <option value="Adjuntas">Adjuntas</option>
                <option value="Aguada">Aguada</option>
                <option value="Aguadilla">Aguadilla</option>
                <option value="Aguas Buenas">Aguas Buenas</option>
                <option value="Aibonito">Aibonito</option>
                <option value="Arecibo">Arecibo</option>
                <option value="Arroyo">Arroyo</option>
                <option value="Añasco">Añasco</option>
                <option value="Barceloneta">Barceloneta</option>
                <option value="Barranquitas">Barranquitas</option>
                <option value="Bayamón">Bayamón</option>
                <option value="Cabo Rojo">Cabo Rojo</option>
                <option value="Caguas">Caguas</option>
                <option value="Camuy">Camuy</option>
                <option value="Canóvanas">Canóvanas</option>
                <option value="Carolina">Carolina</option>
                <option value="Cataño">Cataño</option>
                <option value="Cayey">Cayey</option>
                <option value="Ceiba">Ceiba</option>
                <option value="Ciales">Ciales</option>
                <option value="Cidra">Cidra</option>
                <option value="Coamo">Coamo</option>
                <option value="Comerío">Comerío</option>
                <option value="Corozal">Corozal</option>
                <option value="Culebra">Culebra</option>
                <option value="Dorado">Dorado</option>
                <option value="Fajardo">Fajardo</option>
                <option value="Florida">Florida</option>
                <option value="Florida, USA">Florida, USA</option>
                <option value="Guayama">Guayama</option>
                <option value="Guayanilla">Guayanilla</option>
                <option value="Guaynabo">Guaynabo</option>
                <option value="Gurabo">Gurabo</option>
                <option value="Guánica">Guánica</option>
                <option value="Hatillo">Hatillo</option>
                <option value="Hormigueros">Hormigueros</option>
                <option value="Humacao">Humacao</option>
                <option value="Isabela">Isabela</option>
                <option value="Jayuya">Jayuya</option>
                <option value="Juana Díaz">Juana Díaz</option>
                <option value="Juncos">Juncos</option>
                <option value="Lajas">Lajas</option>
                <option value="Lares">Lares</option>
                <option value="Las Marías">Las Marías</option>
                <option value="Las Piedras">Las Piedras</option>
                <option value="Loiza">Loiza</option>
                <option value="Luquillo">Luquillo</option>
                <option value="Manatí">Manatí</option>
                <option value="Maricao">Maricao</option>
                <option value="Maunabo">Maunabo</option>
                <option value="Mayagüez">Mayagüez</option>
                <option value="Moca">Moca</option>
                <option value="Morovis">Morovis</option>
                <option value="Morovis">Naguabo</option>
                <option value="Naranjito">Naranjito</option>
                <option value="Orocovis">Orocovis</option>
                <option value="Patillas">Patillas</option>
                <option value="Peñuelas">Peñuelas</option>
                <option value="Ponce">Ponce</option>
                <option value="Quebradillas">Quebradillas</option>
                <option value="Rincón">Rincón</option>
                <option value="Rio Grande">Rio Grande</option>
                <option value="Sabana Grande">Sabana Grande</option>
                <option value="Salinas">Salinas</option>
                <option value="San Germán">San Germán</option>
                <option value="San Juan">San Juan</option>
                <option value="San Lorenzo">San Lorenzo</option>
                <option value="San Sebastián">San Sebastián</option>
                <option value="Santa Isabel">Santa Isabel</option>
                <option value="Toa Alta">Toa Alta</option>
                <option value="Toa Baja">Toa Baja</option>
                <option value="Trujillo Alto">Trujillo Alto</option>
                <option value="Utuado">Utuado</option>
                <option value="Vega Alta">Vega Alta</option>
                <option value="Vega Baja">Vega Baja</option>
                <option value="Vieques">Vieques</option>
                <option value="Villalba">Villalba</option>
                <option value="Yabucoa">Yabucoa</option>
                <option value="Yauco">Yauco</option>
              </select>
              <br />

              <button type="submit" id="formsubmit" value="Submit" title="Submit">
                Enviar
              </button>
              <br />
              <br />
            </form>
          </article>
          <div>
            <img src={GanaNCintilla} alt="" />
            <h2>Su familiar o amigo debe ser propietario en Puerto Rico.</h2>
          </div>
        </div>
      </div>

      <div className={`BannerGana-${mobileQuery}`}>
        <article className="Informacion">
          <img src={AF} alt="" />
          <h1>Mientras más familiares y amigos se unan a la familia de WindMar, más ganas.</h1>
        </article>
      </div>
      <Footer color="blue" />
      <Barra caseLocation="Referidos" color="blue" />
    </>
  )
}

export default Referidos

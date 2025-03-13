import './Incentivos.css'
import './Incentivos_mobile.css'

import { useState } from 'react'

// Redux toolkit
import { useSelector, useDispatch } from 'react-redux'

// Librerias
import validator from 'validator'

import { getUTMs } from '../../features/getUTM/getUTM'
import { formDataUTM } from '../../features/formDataUTM/formDataUTM'
import { SendAPI } from '../../features/Zoho/CRMAPI/CRMAPI'

// Importamos los estados de Redux
import {
  // CDBG states
  setCDBG_Name,
  setCDBG_Last_Name,
  setCDBG_Phone,
  setCDBG_Email,
  setCDBG_Sales_Rep,
  setSales_Rep_Notes,
  //setHousehold_members,
  // Normal Lead states
  setFirst_Name,
  setLast_Name,
  setEmail,
  setPhone,
  setCDBG_Numero_Cotizacion,
} from '../../features/states/formDataSlace'

import Pixel from '../../components/Pixel/Pixel'

//Layout
import Header from '../../layouts/General/Header/Header'
import Footer from '../../layouts/General/Footer/Footer'
import Barra from '../../layouts/General/Barra/Barra'

const Incentivos = () => {
  const dispatch = useDispatch()
  const mobileQuery = useSelector((state) => state.states.mobileQuery)
  const locacion = useSelector((state) => state.states.locacion)

  const {
    // CDBG states
    CDBG_Name,
    CDBG_Last_Name,
    CDBG_Email,
    CDBG_Phone,
    CDBG_Sales_Rep,
    // Normal Lead states
    First_Name,
    Last_Name,
    Phone,
    Email,
    Full_Name,
    Sales_Rep_Notes,
    CDBG_Numero_Cotizacion,
  } = useSelector((state) => state.formData)

  const { isNumeric, isEmail } = validator

  const validateForm = () => {
    console.log('Validando formulario')
    let ValidForm = true

    if (CDBG_Name.length < 3) {
      ValidForm = false
      console.log('First_Name No cumple con el mínimo de caracteres')
    }
    if (CDBG_Last_Name.length < 3) {
      ValidForm = false
      console.log('Last_Name No cumple con el mínimo de caracteres')
    }
    if (CDBG_Phone.length < 10 && !isNumeric(CDBG_Phone)) {
      ValidForm = false
      console.log('Phone No cumple con el mínimo de caracteres')
    }
    if (CDBG_Email.length > 0) {
      if (!isEmail(CDBG_Email)) {
        ValidForm = false
        console.log('Email No cumple con el formato de email')
      }
    }
    if (CDBG_Numero_Cotizacion.length > 0) {
      if (!isNumeric(CDBG_Numero_Cotizacion)) {
        ValidForm = false
        console.log('Numero de cotización no es un numero')
      }
    }

    return ValidForm
  }

  const FormReset = () => {
    dispatch(setCDBG_Name(''))
    dispatch(setCDBG_Last_Name(''))
    dispatch(setCDBG_Phone(''))
    dispatch(setCDBG_Email(''))
    dispatch(setCDBG_Sales_Rep(''))
    dispatch(setCDBG_Numero_Cotizacion(''))
    setActiveStep(0)
  }

  const [activeStep, setActiveStep] = useState(0)
  const [selFormulario, setSelFormulario] = useState('Si')

  const handlesubmition = (event) => {
    event.preventDefault()

    if (validateForm()) {
      const utms = getUTMs()

      console.log(event.target)

      const formData = formDataUTM(utms, event.target, locacion.toUpperCase())

      formData.append('First_Name', CDBG_Name)
      formData.append('Last_Name', CDBG_Last_Name)
      formData.append('Phone', CDBG_Phone)
      formData.append('Email', CDBG_Email)
      formData.append('Sales_Rep_Notes', Sales_Rep_Notes)
      formData.append('CDBG_Sales_Rep', CDBG_Sales_Rep)
      formData.append('Full_Name', CDBG_Name + ' ' + CDBG_Last_Name)
      formData.append('Lead_Type', '')
      formData.append('CDBG_Numero_Cotizacion', CDBG_Numero_Cotizacion)
      utms?.utm_source ? null : formData.set('Lead_Source', 'CDBG Website')

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

  const validateForm2 = () => {
    console.log('Validando formulario')
    let ValidForm = true

    if (First_Name.length < 3) {
      ValidForm = false
      console.log('First_Name No cumple con el minimo de caracteres')
    }
    if (Last_Name.length < 3) {
      ValidForm = false
      console.log('Last_Name No cumple con el minimo de caracteres')
    }
    if (Phone.length < 10 && !isNumeric(Phone)) {
      ValidForm = false
      console.log('Phone No cumple con el minimo de caracteres')
    }
    if (!isEmail(Email)) {
      ValidForm = false
      console.log('Email No cumple con el formato de email')
    }
    return ValidForm
  }

  // Formulario 2

  const FormReset2 = () => {
    dispatch(setFirst_Name(''))
    dispatch(setLast_Name(''))
    dispatch(setEmail(''))
    dispatch(setPhone(''))
  }

  const handlesubmition2 = (event) => {
    event.preventDefault()

    if (validateForm2(event.target)) {
      const utms = getUTMs()

      console.log(event.target)

      const formData = formDataUTM(utms, event.target, locacion.toUpperCase())

      formData.append('Full_Name', Full_Name ? Full_Name : First_Name + ' ' + Last_Name)

      formData.append('Lead_Type', '')

      console.log(formData)

      console.log('Enviando información en formato FormData')
      console.log(Object.fromEntries(formData))

      console.log('Enviando información en formato JSON')
      console.log(JSON.stringify(Object.fromEntries(formData)))

      SendAPI(formData, FormReset2)
    } else {
      alert('Por favor, llena todos los campos del formulario correctamente')
    }
  }
  return (
    <>
      <Pixel pixelID="1826134724345924" />
      <Header />
      <div className={`Contenedor_ProgramaFderal-${mobileQuery}`}>
        <div className={`ProgramaFderal-${mobileQuery}`}>
          <article>
            <h1>Somos la compañía #1 en incentivos Nueva Energía</h1>
            <h2>
              BATERIA Y PLACAS <span>¡GRATIS!</span>
            </h2>
            <div className={`Boton_soli-${mobileQuery}`}>
              {mobileQuery === 'mobile' ? (
                <a href="#form">
                  <button>Solicítalo ahora</button>
                </a>
              ) : null}
            </div>
            <p>
              {mobileQuery === 'desktop' ? <span id="form"></span> : null}
              Cubrirá el 100% hasta un máximo de $30,000 en costos de equipos e instalación.
            </p>

            <div>
              {mobileQuery === 'desktop' ? (
                <form id="incentivos" name="incentivos" onSubmit={handlesubmition}>
                  <h1>¡SOLICITA HOY!</h1>

                  {activeStep === 0 ? (
                    <>
                      <input
                        type="text"
                        name="First_Name"
                        id="First_Name"
                        placeholder="Nombre"
                        value={CDBG_Name}
                        onChange={(e) => dispatch(setCDBG_Name(e.target.value))}
                      />

                      <input
                        type="text"
                        name="Last_Name"
                        id="Last_Name"
                        placeholder="Apellido"
                        value={CDBG_Last_Name}
                        onChange={(e) => dispatch(setCDBG_Last_Name(e.target.value))}
                      />
                    </>
                  ) : null}

                  {activeStep === 1 ? (
                    <>
                      <input
                        type="text"
                        name="Email"
                        id="Email"
                        placeholder="Email (opcional"
                        value={CDBG_Email}
                        onChange={(e) => dispatch(setCDBG_Email(e.target.value))}
                      />

                      <input
                        type="number"
                        name="Phone"
                        id="CDBG_Phone"
                        placeholder="Teléfono"
                        value={CDBG_Phone}
                        onChange={(e) => {
                          dispatch(setCDBG_Phone(e.target.value))
                        }}
                      />
                    </>
                  ) : null}

                  {activeStep === 2 ? (
                    <>
                      <label htmlFor="ingresos">
                        Seleccione el nivel de ingresos de su hogar (basado en la cantidad de miembros de su hogar) que estén por debajo de los
                        niveles de ingresos máximos elegibles para esta ronda.
                      </label>
                      <select
                        id="ingresos"
                        name="Sales_Rep_Notes"
                        onChange={(e) => {
                          dispatch(setSales_Rep_Notes(e.target.value))
                        }}
                      >
                        <option value="Nivel de ingreso: 1 persona - $33,600">1 persona - $33,600</option>
                        <option value="Nivel de ingreso: 2 personas - $38,400">2 personas - $38,400</option>
                        <option value="Nivel de ingreso: 3 personas - $43,200">3 personas - $43,200</option>
                        <option value="Nivel de ingreso: 4 personas - $48,000">4 personas - $48,000</option>
                        <option value="Nivel de ingreso: 5 personas - $51,850">5 personas - $51,850</option>
                        <option value="Nivel de ingreso: 6 personas - $55,700">6 personas - $55,700</option>
                        <option value="Nivel de ingreso: 7 personas - $59,550">7 personas - $59,550</option>
                        <option value="Nivel de ingreso: 8 personas - $63,400">8 personas - $63,400</option>
                      </select>
                    </>
                  ) : null}

                  {activeStep === 3 ? (
                    <>
                      <label htmlFor="">¿Lo refirió un vendedor?</label>
                      <select
                        onChange={(e) => {
                          setSelFormulario(e.target.value)
                        }}
                        value={selFormulario}
                      >
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                      </select>
                    </>
                  ) : null}
                  {selFormulario === 'Si' ? (
                    activeStep === 3 ? (
                      <>
                        <input
                          type="text"
                          name="CDBG_Sales_Rep"
                          id="Sales_Rep"
                          placeholder="Nombre del vendedor"
                          value={CDBG_Sales_Rep}
                          onChange={(e) => dispatch(setCDBG_Sales_Rep(e.target.value))}
                        />

                        <input
                          type="text"
                          name="CDBG_Numero_Cotizacion"
                          id="Sales_Rep"
                          placeholder="Número de cotización"
                          value={CDBG_Numero_Cotizacion}
                          onChange={(e) => dispatch(setCDBG_Numero_Cotizacion(e.target.value))}
                        />
                      </>
                    ) : null
                  ) : activeStep === 3 ? (
                    <></>
                  ) : null}

                  <div>
                    {activeStep === 0 ? <button onClick={() => setActiveStep(1)}>Siguiente</button> : null}
                    {activeStep === 1 ? (
                      <>
                        <button onClick={() => setActiveStep(0)}>Anterior</button>
                        <button onClick={() => setActiveStep(2)}>Siguiente</button>
                      </>
                    ) : null}
                    {activeStep === 2 ? (
                      <>
                        <button onClick={() => setActiveStep(1)}>Anterior</button>
                        <button onClick={() => setActiveStep(3)}>Siguiente</button>
                      </>
                    ) : null}
                    {activeStep === 3 ? (
                      <>
                        <button onClick={() => setActiveStep(2)}>Anterior</button>
                        <button type="submit">Enviar</button>
                      </>
                    ) : null}
                  </div>
                </form>
              ) : null}
            </div>
          </article>
          <section>{mobileQuery === 'mobile' ? <span id="form"></span> : null}</section>
        </div>

        <div className={`FormMobile_ProgramaFderal-${mobileQuery}`}>
          {mobileQuery === 'mobile' ? (
            <form id="incentivos" name="incentivos" onSubmit={handlesubmition}>
              <h1>¡SOLICITA HOY!</h1>

              {activeStep === 0 ? (
                <>
                  <input
                    type="text"
                    name="First_Name"
                    id="First_Name"
                    placeholder="Nombre"
                    value={CDBG_Name}
                    onChange={(e) => dispatch(setCDBG_Name(e.target.value))}
                  />

                  <input
                    type="text"
                    name="Last_Name"
                    id="Last_Name"
                    placeholder="Apellido"
                    value={CDBG_Last_Name}
                    onChange={(e) => dispatch(setCDBG_Last_Name(e.target.value))}
                  />
                </>
              ) : null}

              {activeStep === 1 ? (
                <>
                  <input
                    type="text"
                    name="Email"
                    id="Email"
                    placeholder="Email (opcional"
                    value={CDBG_Email}
                    onChange={(e) => dispatch(setCDBG_Email(e.target.value))}
                  />

                  <input
                    type="number"
                    name="Phone"
                    id="CDBG_Phone"
                    placeholder="Teléfono"
                    value={CDBG_Phone}
                    onChange={(e) => {
                      dispatch(setCDBG_Phone(e.target.value))
                    }}
                  />
                </>
              ) : null}

              {activeStep === 2 ? (
                <>
                  <label htmlFor="ingresos">
                    Seleccione el nivel de ingresos de su hogar (basado en la cantidad de miembros de su hogar) que estén por debajo de los niveles de
                    ingresos máximos elegibles para esta ronda.
                  </label>
                  <select
                    id="ingresos"
                    name="Sales_Rep_Notes"
                    onChange={(e) => {
                      dispatch(setSales_Rep_Notes(e.target.value))
                    }}
                  >
                    <option value="Nivel de ingreso: 1 persona - $33,600">1 persona - $33,600</option>
                    <option value="Nivel de ingreso: 2 personas - $38,400">2 personas - $38,400</option>
                    <option value="Nivel de ingreso: 3 personas - $43,200">3 personas - $43,200</option>
                    <option value="Nivel de ingreso: 4 personas - $48,000">4 personas - $48,000</option>
                    <option value="Nivel de ingreso: 5 personas - $51,850">5 personas - $51,850</option>
                    <option value="Nivel de ingreso: 6 personas - $55,700">6 personas - $55,700</option>
                    <option value="Nivel de ingreso: 7 personas - $59,550">7 personas - $59,550</option>
                    <option value="Nivel de ingreso: 8 personas - $63,400">8 personas - $63,400</option>
                  </select>
                </>
              ) : null}

              {activeStep === 3 ? (
                <>
                  <label htmlFor="">¿Lo refirió un vendedor?</label>
                  <select
                    onChange={(e) => {
                      setSelFormulario(e.target.value)
                    }}
                    value={selFormulario}
                  >
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                  </select>
                </>
              ) : null}
              {selFormulario === 'Si' ? (
                activeStep === 3 ? (
                  <>
                    <input
                      type="text"
                      name="CDBG_Sales_Rep"
                      id="Sales_Rep"
                      placeholder="Nombre del vendedor"
                      value={CDBG_Sales_Rep}
                      onChange={(e) => dispatch(setCDBG_Sales_Rep(e.target.value))}
                    />

                    <input
                      type="text"
                      name="CDBG_Numero_Cotizacion"
                      id="Sales_Rep"
                      placeholder="Número de cotización"
                      value={CDBG_Numero_Cotizacion}
                      onChange={(e) => dispatch(setCDBG_Numero_Cotizacion(e.target.value))}
                    />
                  </>
                ) : null
              ) : activeStep === 3 ? (
                <></>
              ) : null}

              <div>
                {activeStep === 0 ? <button onClick={() => setActiveStep(1)}>Siguiente</button> : null}
                {activeStep === 1 ? (
                  <>
                    <button onClick={() => setActiveStep(0)}>Anterior</button>
                    <button onClick={() => setActiveStep(2)}>Siguiente</button>
                  </>
                ) : null}
                {activeStep === 2 ? (
                  <>
                    <button onClick={() => setActiveStep(1)}>Anterior</button>
                    <button onClick={() => setActiveStep(3)}>Siguiente</button>
                  </>
                ) : null}
                {activeStep === 3 ? (
                  <>
                    <button onClick={() => setActiveStep(2)}>Anterior</button>
                    <button type="submit">Enviar</button>
                  </>
                ) : null}
              </div>
            </form>
          ) : null}
        </div>

        <div className={`Banner_califi-${mobileQuery}`}>
          <article>
            <div>
              <h2>Para calificar debe:</h2>

              <ul>
                <li>
                  <p>Tener una cotización con un instalador registrado con el programa (REIC).</p>
                </li>
                <li>
                  <p>Ser dueño de la propiedad y al menos un residente de la vivienda tiene que ser ciudadano americano.</p>
                </li>
                <li>
                  <p>La vivienda debe ser unifamiliar.</p>
                </li>
                <li>
                  <p>El solicitante del hogar debe utilizar la propiedad como residencia principal.</p>
                </li>
                <li>
                  <p>El solicitante debe ser propietario o tener derechos de propiedad sobre la residencia para la cual solicita asistencia.</p>
                </li>
              </ul>
            </div>
          </article>
          {mobileQuery === 'desktop' ? (
            <div className={`Boton_soli-${mobileQuery}`}>
              <a href="#form">
                <button>Solicítalo ahora</button>
              </a>
            </div>
          ) : null}
        </div>
        <h1>
          El <span>límite de ingresos</span> varia por
          <span> composición familiar</span> y requiere que estén entre el siguiente rango de ingresos aprobados:
        </h1>
        <div className={`Tabla-${mobileQuery}`}>
          {mobileQuery === 'desktop' ? (
            <article>
              <table>
                <tbody>
                  <tr>
                    <th className="Table_Az">
                      <span>Composición</span> hogar
                    </th>
                    <th>1 persona</th>
                    <th>2 personas</th>
                    <th>3 personas</th>
                    <th>4 personas</th>
                    <th>5 personas</th>
                    <th>6 personas</th>
                    <th>7 personas</th>
                    <th>8 personas</th>
                  </tr>
                  <tr>
                    <td className="Table_Az">
                      <span>Límite de ingresos</span> del 80%
                    </td>
                    <td>$33,600</td>
                    <td>$38,400</td>
                    <td>$43,200</td>
                    <td>$48,000</td>
                    <td>$51,850</td>
                    <td>$55,700</td>
                    <td>$59,550</td>
                    <td>$63,400</td>
                  </tr>
                </tbody>
              </table>
            </article>
          ) : null}

          {mobileQuery === 'mobile' ? (
            <article>
              <table>
                <tbody>
                  <tr>
                    <th className="Table_Az">
                      <span>Composición</span> hogar
                    </th>
                    <th className="Table_Az">
                      <span>Límite de ingresos</span> del 80%
                    </th>
                  </tr>

                  <tr>
                    <td>1 persona</td>
                    <td>$33,600</td>
                  </tr>
                  <tr>
                    <td>2 personas</td>
                    <td>$38,400</td>
                  </tr>
                  <tr>
                    <td>3 personas</td>
                    <td>$43,200</td>
                  </tr>
                  <tr>
                    <td>4 personas</td>
                    <td>$48,000</td>
                  </tr>
                  <tr>
                    <td>5 personas</td>
                    <td>$51,850</td>
                  </tr>
                  <tr>
                    <td>6 personas</td>
                    <td>$55,700</td>
                  </tr>
                  <tr>
                    <td>7 personas</td>
                    <td>$59,550</td>
                  </tr>
                  <tr>
                    <td>8 personas</td>
                    <td>$63,400</td>
                  </tr>
                </tbody>
              </table>
            </article>
          ) : null}
        </div>

        <div className={`Banner_form-${mobileQuery}`}>
          <article>
            <h1>
              ¿No calificas, pero aún estás <span>interesado en un sistema</span>?
            </h1>
            <p>
              <span>¡No te preocupes!</span> Deja tus datos y uno de nuestros representantes te contactará pronto.
            </p>

            <form id="CDBG_Lead_Normal" action="" name="CDBG_Lead_Normal" method="POST" onSubmit={handlesubmition2}>
              <br />
              <div>
                <input
                  type="text"
                  name="First_Name"
                  placeholder="Nombre"
                  value={First_Name}
                  onChange={(e) => dispatch(setFirst_Name(e.target.value))}
                />
              </div>

              <br />
              <div>
                <input
                  type="text"
                  id="Last_Name"
                  name="Last_Name"
                  placeholder="Apellido"
                  value={Last_Name}
                  onChange={(e) => dispatch(setLast_Name(e.target.value))}
                />
              </div>
              <br />

              <div>
                <input
                  type="number"
                  id="Phone"
                  name="Phone"
                  placeholder="Teléfono"
                  value={Phone}
                  onChange={(e) => dispatch(setPhone(e.target.value))}
                />
              </div>
              <br />

              <div>
                <input
                  type=""
                  id="Email"
                  name="Email"
                  placeholder="Correo electrónico"
                  value={Email}
                  onChange={(e) => dispatch(setEmail(e.target.value))}
                />
              </div>
              <br />

              <button type="submit">Envía</button>
              <br />
            </form>
          </article>
        </div>

        <Footer color="blue" />
        <Barra caseLocation="incentivos" color="blue" />
      </div>
    </>
  )
}

export default Incentivos

import './CarrersInstaller.css'
import './CarrersInstallermobile.css'

import { useState } from 'react'

// Redux toolkit
import { useSelector, useDispatch } from 'react-redux'

// Importamos los estados de Redux
import { setLast_Name, setFirst_Name, setEmail, setPhone, setCity, setFile } from '../../features/states/formDataSlace'

// Librerias
import validator from 'validator'

import { getUTMs } from '../../features/getUTM/getUTM' //Funcion para obtener los utms
import { formDataUTM } from '../../features/formDataUTM/formDataUTM' //Funcion para agregar los utms al formData
import { SendAPI } from '../../features/Zoho/CRMAPI/CRMAPI' //Funcion para enviar la informacion a la API

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// assets
import Require from '../../assets/installer/galeriaPinstaller.png'
import imgUno from '../../assets/installer/image-10.png'
import imgDos from '../../assets/installer/image-9.png'
import imgTres from '../../assets/installer/image-8.png'
import imgCuatro from '../../assets/installer/image-7.png'
import imgCinco from '../../assets/installer/image-6.png'
import imgSeis from '../../assets/installer/image-5.png'

//Layout
import Pixel from '../../components/Pixel/Pixel'
import Header from '../../layouts/General/Header/Header'
import Footer from '../../layouts/General/Footer/Footer'
import Barra from '../../layouts/General/Barra/Barra'

const CarrersInstaller = () => {
  const dispatch = useDispatch()
  const mobileQuery = useSelector((state) => state.states.mobileQuery)
  const locacion = useSelector((state) => state.states.locacion)

  const { Last_Name, Email, First_Name, Phone, City, File } = useSelector((state) => state.formData)

  const { isNumeric, isEmail } = validator

  const validateForm = () => {
    console.log('Validando formulario')
    let ValidForm = true

    if (Last_Name.length < 3) {
      ValidForm = false
      console.log('Name No cumple con el minimo de caracteres')
    }

    if (!isNumeric(Phone)) {
      ValidForm = false
      console.log('Phone No cumple con el formato de número de teléfono')
    }
    if (Phone.length < 10) {
      ValidForm = false
      console.log('Phone No cumple con el minimo de caracteres')
    }
    if (First_Name.length < 3) {
      ValidForm = false
      console.log('First_Name No cumple con el minimo de caracteres')
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
    dispatch(setFirst_Name(''))
    dispatch(setPhone(''))
    dispatch(setFile(''))
  }

  const [activeStep, setActiveStep] = useState(0)

  const handlesubmition = (event) => {
    event.preventDefault()

    if (validateForm()) {
      const utms = getUTMs()

      const formData = formDataUTM(utms, event.target, locacion.toUpperCase())

      formData.append('Form_Name', event.target.name)
      formData.append('Full_Name', Last_Name)
      formData.append('First_Name', First_Name)
      formData.append('Email', Email)
      formData.append('Phone', Phone)
      formData.append('City', City)

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

  function SampleNextArrow(props) {
    const { onClick } = props
    return (
      <div className={`InstallerSl-${mobileQuery}`} onClick={onClick}>
        &gt;
      </div>
    )
  }

  function SamplePrevArrow(props) {
    const { onClick } = props
    return (
      <div className={`InstallerSli-${mobileQuery}`} onClick={onClick}>
        &lt;
      </div>
    )
  }
  const settings1 = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  return (
    <>
      <Pixel pixelID="1826134724345924" />
      <Header />
      <div className="espacio"></div>
      <div className={`CarrersInstaller-${mobileQuery}`} id="CarrersInstaller">
        {mobileQuery === 'desktop' ? (
          <div className={`FormCarrersInstaller-${mobileQuery}`}>
            <div>
              <h2>JOIN THE LEADING RENEWABLE ENERGY COMPANY</h2>
            </div>
            <article>
              <div>
                <form id="installer" name="installer" onSubmit={handlesubmition}>
                  <h1>INSTALLATION TECHNICIAN</h1>

                  {activeStep === 0 ? (
                    <>
                      <label>
                        Name <span>*</span>
                      </label>
                      <input
                        type="text"
                        name="First_Name"
                        id="First_Name"
                        value={First_Name}
                        onChange={(e) => dispatch(setFirst_Name(e.target.value))}
                      />
                      <label>
                        Last Name <span>*</span>
                      </label>
                      <input type="text" name="Last_Name" id="Last_Name" value={Last_Name} onChange={(e) => dispatch(setLast_Name(e.target.value))} />
                    </>
                  ) : null}

                  {activeStep === 1 ? (
                    <>
                      <label>
                        Email <span>*</span>
                      </label>
                      <input type="text" name="Email" id="Email" value={Email} onChange={(e) => dispatch(setEmail(e.target.value))} />
                      <label>
                        Phone <span>*</span>
                      </label>
                      <input
                        type="number"
                        name="Phone"
                        id="Phone"
                        value={Phone}
                        onChange={(e) => {
                          dispatch(setPhone(e.target.value))
                        }}
                      />
                    </>
                  ) : null}

                  {activeStep === 2 ? (
                    <>
                      <label>state</label>
                      <input
                        type="text"
                        name="City"
                        id="City"
                        value={City}
                        onChange={(e) => {
                          dispatch(setCity(e.target.value))
                        }}
                      />
                      <div className={`file-${mobileQuery}`}>
                        <label>Resumé (pdf, jpg, docx)</label>
                        <input
                          type="file"
                          name="File"
                          id="File"
                          value={File}
                          onChange={(e) => {
                            dispatch(setFile(e.target.value))
                          }}
                        />
                      </div>
                    </>
                  ) : null}

                  <div>
                    {activeStep === 0 ? <button onClick={() => setActiveStep(1)}>NEXT</button> : null}
                    {activeStep === 1 ? (
                      <>
                        <button onClick={() => setActiveStep(0)}>PREVIOUS</button>
                        <button onClick={() => setActiveStep(2)}>NEXT</button>
                      </>
                    ) : null}
                    {activeStep === 2 ? (
                      <>
                        <button onClick={() => setActiveStep(1)}>PREVIOUS</button>
                        <button type="submit">SUBMIT</button>
                      </>
                    ) : null}
                  </div>
                  <p>
                    By clicking submit, I agree to the Terms of Service and Privacy Policy and authorize WindMar Solar, their contractors and partners
                    to contact me with offers about solar product or service by telephone calls, artificial voice, and pre-recorded/text messages,
                    using an automated telephone technology, to the number I provided above, even if my number is a mobile number or is currently
                    listed on any state, federal or corporate Do Not Call list. I understand that my consent here is not a condition of purchase of
                    any goods or services. Message and data rates may apply.
                  </p>
                </form>
              </div>
              <section>{mobileQuery === 'mobile' ? <span id="installer"></span> : null}</section>
            </article>
          </div>
        ) : null}

        {mobileQuery === 'mobile' ? (
          <div className={`FormmobileCarrersInstaller-${mobileQuery}`}>
            <div>
              <h2>JOIN THE LEADING RENEWABLE ENERGY COMPANY</h2>
            </div>
            <article>
              <div>
                <form id="installer" name="installer" onSubmit={handlesubmition}>
                  <h1>INSTALLATION TECHNICIAN</h1>

                  {activeStep === 0 ? (
                    <>
                      <label>
                        Name <span>*</span>
                      </label>
                      <input
                        type="text"
                        name="First_Name"
                        id="First_Name"
                        value={First_Name}
                        onChange={(e) => dispatch(setFirst_Name(e.target.value))}
                      />
                      <label>
                        Last Name <span>*</span>
                      </label>
                      <input type="text" name="Last_Name" id="Last_Name" value={Last_Name} onChange={(e) => dispatch(setLast_Name(e.target.value))} />
                    </>
                  ) : null}

                  {activeStep === 1 ? (
                    <>
                      <label>
                        Email <span>*</span>
                      </label>
                      <input type="text" name="Email" id="Email" value={Email} onChange={(e) => dispatch(setEmail(e.target.value))} />
                      <label>
                        Phone <span>*</span>
                      </label>
                      <input
                        type="number"
                        name="Phone"
                        id="Phone"
                        value={Phone}
                        onChange={(e) => {
                          dispatch(setPhone(e.target.value))
                        }}
                      />
                    </>
                  ) : null}

                  {activeStep === 2 ? (
                    <>
                      <label>state</label>
                      <input
                        type="text"
                        name="City"
                        id="City"
                        value={City}
                        onChange={(e) => {
                          dispatch(setCity(e.target.value))
                        }}
                      />
                      <div className={`file-${mobileQuery}`}>
                        <label>Resumé (pdf, jpg, docx)</label>
                        <input
                          type="file"
                          name="File"
                          id="File"
                          value={File}
                          onChange={(e) => {
                            dispatch(setFile(e.target.value))
                          }}
                        />
                      </div>
                    </>
                  ) : null}

                  <div>
                    {activeStep === 0 ? <button onClick={() => setActiveStep(1)}>NEXT</button> : null}
                    {activeStep === 1 ? (
                      <>
                        <button onClick={() => setActiveStep(0)}>PREVIOUS</button>
                        <button onClick={() => setActiveStep(2)}>NEXT</button>
                      </>
                    ) : null}
                    {activeStep === 2 ? (
                      <>
                        <button onClick={() => setActiveStep(1)}>PREVIOUS</button>
                        <button type="submit">SUBMIT</button>
                      </>
                    ) : null}
                  </div>
                  <p>
                    By clicking submit, I agree to the Terms of Service and Privacy Policy and authorize WindMar Solar, their contractors and partners
                    to contact me with offers about solar product or service by telephone calls, artificial voice, and pre-recorded/text messages,
                    using an automated telephone technology, to the number I provided above, even if my number is a mobile number or is currently
                    listed on any state, federal or corporate Do Not Call list. I understand that my consent here is not a condition of purchase of
                    any goods or services. Message and data rates may apply.
                  </p>
                </form>
              </div>
            </article>
          </div>
        ) : null}
      </div>

      <div className={`BannerAmInstaller-${mobileQuery}`}>
        <article>
          <p>
            Discover the power of a rewarding career at WindMar Group, a trusted name in renewable energy for over two decades. Join our passionate
            team and be part of the solar revolution in Puerto Rico, the Caribbean, and Florida.
          </p>
        </article>
      </div>

      <div className={`Requirements-${mobileQuery}`}>
        <article>
          <div>
            <h1>Requirements:</h1>
            <ul>
              <li>Basic knowledge of electricity and construction</li>
              <li>Heavy machinery operation</li>
              <li>Solar experience preferred but not required</li>
            </ul>
          </div>
          <img src={Require} alt="" />
        </article>
      </div>
      <div className={`Benefits-${mobileQuery}`}>
        <div className={`BenefitsInstaller-${mobileQuery}`}>
          <article>
            <div>
              <h1>Benefits</h1>
            </div>
            <section>
              <div className={`Section1-${mobileQuery}`}>
                <div>
                  <img src={imgSeis} alt="" />
                  <p>Opportunity for growth and development</p>
                </div>
                <div>
                  <img src={imgCinco} alt="" />
                  <p>Ongoing training in the renewable energy industry</p>
                </div>
                <div>
                  <img src={imgCuatro} alt="" />
                  <p>Full time work</p>
                </div>
              </div>
              <div className={`Section2-${mobileQuery}`}>
                <div>
                  <img src={imgTres} alt="" />
                  <p>Weekly pay frequency</p>
                </div>
                <div>
                  <img src={imgDos} alt="" />
                  <p>Health insurance</p>
                </div>
                <div>
                  <img src={imgUno} alt="" />
                  <p>Accumulation of vacation and illness</p>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>

      <div className={`GaleriaInstaller-${mobileQuery}`}>
        <div className={`SliderInstaller-${mobileQuery}`}>
          <Slider {...settings1}>
            <div className="GaleriaInstaller1"></div>
            <div className="GaleriaInstaller2"></div>
            <div className="GaleriaInstaller3"></div>
            <div className="GaleriaInstaller4"></div>
          </Slider>
        </div>
      </div>
      <Footer color="blue" />
      <Barra caseLocation="CarrersInstaller" color="blue" />
    </>
  )
}

export default CarrersInstaller

import { CityFL, campaings, destinationLearnAndWind, translationsForm_DN } from '../../utils/data'
import { getUTMs } from '../../features/getUTM/getUTM'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import ModalPopUpCyberFL from '../ModalPopUpCyberFL/ModalPopUpCyberFL'
import ModalPopUpCyberFLproperty from '../ModalPopUpCyberFLproperty/ModalPopUpCyberFLproperty'
import ModalPopUpVacationFL from '../ModalPopUpVacationFL/ModalPopUpVacationFL'
import ModalPopUpVacationFLproperty from '../ModalPopUpVacationFLproperty/ModalPopUpVacationFLproperty'
import Loading from '../Loading/Loading'
import ThankYouPage_FL from '../ThankYouPage/ThakYouPage_FL'
import { postFormLeads } from '../../hooks/fetchDataApi'
export default function FormsLeadsFL_DN({ id, phone, email, city, tittle, estilos, boton, destination, placeholder, campaign }) {
  const { traffic } = useSelector((state) => state.states)
  const campaignList = campaings['fl']
  const utms = getUTMs(campaignList[campaign], traffic)
  const postFormLeadMutation = useMutation({
    mutationFn: (data) => postFormLeads(data, 'fl'),
    onSuccess: () => {},
    onError: (error) => {
      console.error('Error al enviar el formulario', error)
    },
  })

  const language =
    campaignList[campaign] === 'CybertruckFL' || campaignList[campaign] === 'LearnAndWinRoofing'
      ? 'en'
      : useSelector((state) => state.states.lenguaje)
  const initialValues = {
    Language_Preference: language === 'en' ? 'English' : 'Spanish',
  }
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch,
    register,
    trigger,
  } = useForm({ defaultValues: initialValues })

  const onSubmit = (data) => {
    const dataApi = { ...data, ...utms }
    postFormLeadMutation.mutate(dataApi)
    console.log(dataApi)
  }
  const [activeStep, setActiveStep] = useState(0)
  const [price, setPrice] = useState(1000)
  const [isDisabledFirst, setIsDisabledFirst] = useState(true)

  const [isModalCyberOpen, setIsModalCyberOpen] = useState(false)
  const [isModalCyberPropertyOpen, setIsModalCyberPropertyOpen] = useState(false)
  const [isModalVacationOpen, setIsModalVacationOpen] = useState(false)
  const [isModalVacationPropertyOpen, setIsModalVacationPropertyOpen] = useState(false)

  const handlePriceChange = (event) => {
    setPrice(event.target.value)
  }
  const handleSelectChange = (event) => {
    const isOwner = event.target.value === 'Yes' || event.target.value === 'Sí'
    if (campaignList[campaign] === 'CybertruckFL' && !isOwner) {
      setIsModalCyberOpen(true)
    } else if (campaignList[campaign] === 'LearnAndWinRoofing' && !isOwner) {
      setIsModalVacationOpen(true)
    } else {
      setIsModalCyberOpen(false)
      setIsModalVacationOpen(false)
    }
  }
  const handleSelectChange2 = (event) => {
    const isSingleFamilyHome = event.target.value === 'Single Family Home' || event.target.value === 'Casa de una sola familia'
    if (campaignList[campaign] === 'CybertruckFL' && !isSingleFamilyHome) {
      setIsModalCyberPropertyOpen(true)
      console.log('entro')
    } else if (campaignList[campaign] === 'LearnAndWinRoofing' && !isSingleFamilyHome) {
      setIsModalVacationPropertyOpen(true)
    } else {
      setIsModalCyberPropertyOpen(false)
      setIsModalVacationPropertyOpen(false)
    }
  }

  // Primero, define un objeto con las traducciones

  useEffect(() => {
    if (
      watch('First_Name')?.length > 0 &&
      watch('Last_Name')?.length > 0 &&
      errors.Last_Name?.message === undefined &&
      errors.First_Name?.message === undefined &&
      watch('Phone')?.length > 0 &&
      watch('Email')?.length > 0 &&
      errors.Phone?.message === undefined &&
      errors.Email?.message === undefined
    ) {
      setIsDisabledFirst(false)
    } else {
      setIsDisabledFirst(true)
    }
  }, [
    watch('First_Name'),
    watch('Last_Name'),
    errors.First_Name,
    errors.Last_Name,
    watch('Phone'),
    watch('Email'),
    errors.Phone,
    errors.Email,
    isDisabledFirst,
  ])
  return (
    <>
      <div className={estilos?.div ?? ''}>
        {postFormLeadMutation.isSuccess ? <ThankYouPage_FL /> : ''}
        <h1 className={estilos.tittle}>{tittle}</h1>
        {/*Modales */}
        {postFormLeadMutation.isPending ? <Loading /> : ''}
        {campaignList[campaign] === 'CybertruckFL' && isModalCyberOpen && <ModalPopUpCyberFL open={isModalCyberOpen} />}
        {/* Check*/}
        {campaignList[campaign] === 'CybertruckFL' && isModalCyberPropertyOpen && <ModalPopUpCyberFLproperty open={isModalCyberPropertyOpen} />}
        {/* Check*/}
        {campaignList[campaign] === 'LearnAndWinRoofing' && isModalVacationPropertyOpen && (
          <ModalPopUpVacationFLproperty open={isModalVacationPropertyOpen} />
        )}
        {/* Check*/}
        {campaignList[campaign] === 'LearnAndWinRoofing' && isModalVacationOpen && <ModalPopUpVacationFL open={isModalVacationOpen} />}
        {/* Check*/}
        {/*Fin Modales*/}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={estilos?.form}
          name="form"
          id={id ?? 'form'}
          acceptCharset="UTF-8"
          encType="multipart/form-data"
        >
          <div
            className={activeStep === 0 ? 'PasoUno' : 'PasoDos'}
            style={{
              display: activeStep === 1 ? 'none' : 'flex',
              flexDirection: 'column',
            }}
          >
            <>
              <div className="flex w-full gap-4">
                <div className="w-full">
                  {
                    <label className={estilos.label ?? 'hidden'}>
                      {translationsForm_DN[language].firstName}
                      <strong className={estilos.error ?? 'text-red-500'}>*</strong> :
                    </label>
                  }
                  <input
                    {...register('First_Name', {
                      required: 'Name required',
                      pattern: {
                        value: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]+$/,
                        message: 'Enter only letters and/or spaces.',
                      },
                    })}
                    onBlur={() => {
                      trigger('First_Name') // Validar el campo en cada cambio
                    }}
                    className={estilos?.inputText}
                    type="text"
                    name="First_Name"
                    placeholder={placeholder && translationsForm_DN[language].firstName}
                  />
                  {errors.First_Name && <p className="self-start text-sm text-red-500">{errors.First_Name.message}</p>}
                </div>
                <div className="w-full">
                  <label className={estilos.label ?? 'hidden'}>
                    {translationsForm_DN[language].lastName}
                    <strong className={estilos.error ?? 'text-red-500'}>*</strong> :
                  </label>
                  <input
                    {...register('Last_Name', {
                      required: 'Last name required',
                      pattern: {
                        value: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]+$/,
                        message: 'Enter only letters and/or spaces.',
                      },
                    })}
                    onBlur={() => {
                      trigger('Last_Name') // Validar el campo en cada cambio
                    }}
                    className={estilos?.inputText}
                    type="text"
                    name="Last_Name"
                    placeholder={placeholder && translationsForm_DN[language].lastName}
                  />
                  {errors.Last_Name && <p className="self-start text-sm text-red-500">{errors.Last_Name.message}</p>}
                </div>
              </div>

              {phone && (
                <div className="w-full">
                  <label className={estilos.label ?? 'hidden'}>
                    {translationsForm_DN[language].phone}
                    <strong className={estilos.error ?? 'text-red-500'}>*</strong> :
                  </label>
                  <input
                    {...register('Phone', {
                      required: 'Phone required',
                      pattern: {
                        value: /^[2-9][0-9]{9}$/,
                        message: 'Enter only numbers, cannot start with 1 or 0, must be 10 digits',
                      },
                    })}
                    type="text"
                    name="Phone"
                    id="international_Phone"
                    onBlur={() => {
                      trigger('Phone')
                    }}
                    className={estilos?.inputText}
                    placeholder={placeholder && translationsForm_DN[language].phone}
                  />
                  {errors.Phone && <p className="self-start text-sm text-red-500">{errors.Phone.message}</p>}
                </div>
              )}

              {email && (
                <div className="w-full">
                  <label className={estilos.label ?? 'hidden'}>
                    {translationsForm_DN[language].email}
                    <strong className={estilos.error ?? 'text-red-500'}>*</strong> :
                  </label>
                  <input
                    {...register('Email', {
                      required: 'Email required',
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                        message: 'Enter a valid email',
                      },
                    })}
                    onBlur={() => {
                      trigger('Email')
                    }}
                    className={estilos?.inputText}
                    type="text"
                    name="Email"
                    placeholder={placeholder && translationsForm_DN[language].email}
                  />
                  {errors.Email && <p className="self-start text-sm text-red-500">{errors.Email.message}</p>}
                </div>
              )}
              {city && (
                <div className="w-full">
                  <select
                    className={estilos?.select}
                    {...register('City')}
                    onBlur={() => {
                      trigger('City')
                    }}
                    name="City"
                  >
                    <option defaultValue={translationsForm_DN[language].city}>{translationsForm_DN[language].city}</option>
                    {CityFL.map((city, i) => {
                      return (
                        <option key={i} value={city}>
                          {city}
                        </option>
                      )
                    })}
                  </select>
                </div>
              )}

              {destination && (
                <div className="w-full">
                  <label className={estilos.label ?? 'hidden'}>
                    {translationsForm_DN[language].destination}
                    <strong className={estilos.error ?? 'text-red-500'}>*</strong> :
                  </label>
                  <select
                    className={estilos?.select}
                    onBlur={() => {
                      trigger('Destination')
                    }}
                    name="Destination"
                    {...register('Destination')}
                  >
                    <option value="Destino" defaultValue>
                      --
                    </option>
                    {destinationLearnAndWind.map((destination, i) => {
                      return (
                        <option key={i} value={destination}>
                          {destination}
                        </option>
                      )
                    })}
                  </select>
                </div>
              )}
            </>

            <div
              className={estilos.button}
              // className={estilos.button}
              onClick={() => (!isDisabledFirst ? setActiveStep(1) : alert('Complete the all data'))}
            >
              {translationsForm_DN[language].next}
            </div>
          </div>

          <div
            className={activeStep === 1 ? 'PasoDos' : 'PasoUno'}
            style={{
              display: activeStep === 0 ? 'none' : 'flex',
              flexDirection: 'column',
            }}
          >
            <>
              <div className="w-full">
                <br />
                <label className={estilos.label ?? 'hidden'}>{translationsForm_DN[language].ownHome}</label>
                <select name="Dropdown3" className={estilos?.select} {...register('If_the_Lead_the_homeowner')} onChange={handleSelectChange}>
                  <option value="Yes">{translationsForm_DN[language].yes}</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="w-full">
                <br />
                <label className={estilos.label ?? 'hidden'}>{translationsForm_DN[language].propertyType}</label>
                <select name="propertyType" className={estilos?.select} {...register('Lead_Notes')} onChange={handleSelectChange2}>
                  <option value="Single&#x20;Family&#x20;Home">{translationsForm_DN[language].single}</option>
                  <option value="Apartment">{translationsForm_DN[language].apartment}</option>
                </select>
              </div>
              <div className="w-full">
                <br />
                <label className={estilos.label ?? 'hidden'}>{translationsForm_DN[language].roofType}</label>
                <select name="Dropdown1" className={estilos?.select} {...register('Roof_Type1')}>
                  <option value="-Select-">--</option>
                  <option value={translationsForm_DN.en.shingle}>{translationsForm_DN[language].shingle}</option>
                  <option value={translationsForm_DN.en.flat}>{translationsForm_DN[language].flat}</option>
                  <option value={translationsForm_DN.en.concreteTile}>{translationsForm_DN[language].concreteTile}</option>
                  <option value={translationsForm_DN.en.metal}>{translationsForm_DN[language].metal}</option>
                  <option value={translationsForm_DN.en.clayTile}>{translationsForm_DN[language].clayTile}</option>
                  <option value={translationsForm_DN.en.other}>{translationsForm_DN[language].other}</option>
                </select>
              </div>

              <div className="w-full">
                <br />
                <label className={estilos.label ?? 'hidden'}>{translationsForm_DN[language].roofAge}</label>
                <select name="Dropdown2" className={estilos?.select} {...register('Roof_Age')}>
                  <option value="-Select-">--</option>
                  <option value="&lt;5">&lt;5</option>
                  <option value="&lt;10">&lt;10</option>
                  <option value="&lt;15">&lt;15</option>
                </select>
              </div>

              {campaignList[campaign] === 'CybertruckFL' && (
                <div className="w-full">
                  <br />
                  <label className={estilos.label ?? 'hidden'}>{translationsForm_DN[language].monthlyBill}</label>
                  <br />
                  <br />
                  <input
                    type="range"
                    min="75"
                    name="price"
                    max="1000"
                    onChange={handlePriceChange}
                    className="bg-white-100 h-4 w-full appearance-none rounded-xl"
                    id="myRange"
                    {...register('Monthly_Bill')}
                  />
                  <p className="font-semibold text-white">
                    <span>{watch('Monthly_Bill')}</span>
                  </p>
                </div>
              )}

              {campaignList[campaign] === 'LearnAndWinRoofing' && (
                <div className="w-full">
                  <br />
                  <label className={estilos.label ?? 'hidden'}>{translationsForm_DN[language].consultationType}</label>
                  <select name="Dropdown1" className={estilos?.select} {...register('Appointment_Type')}>
                    <option value="-None-">--</option>
                    <option value={translationsForm_DN.en.virtual}> {translationsForm_DN[language].virtual}</option>
                    <option value={translationsForm_DN.en.inperson}> {translationsForm_DN[language].inperson}</option>
                  </select>
                </div>
              )}
            </>

            <br />

            <div>
              {activeStep === 0 ? (
                <button className={estilos.button} onClick={() => setActiveStep(1)}>
                  {translationsForm_DN[language].next}
                </button>
              ) : null}
              {activeStep === 1 ? (
                <>
                  <button className={estilos.button} onClick={() => setActiveStep(0)}>
                    {translationsForm_DN[language].previous}
                  </button>
                </>
              ) : null}
              <button className={!isValid ? estilos.invalidButton : estilos.button} type="submit" disabled={!isValid}>
                {boton ?? translationsForm_DN[language].send}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

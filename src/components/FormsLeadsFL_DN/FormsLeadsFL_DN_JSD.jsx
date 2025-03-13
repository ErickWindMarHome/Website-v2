import { campaings, translationsForm, translationsForm_DN } from '../../utils/data'
import { getUTMs } from '../../features/getUTM/getUTM'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { FormProvider, useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import ModalPopUpCyberFL from '../ModalPopUpCyberFL/ModalPopUpCyberFL'
import ModalPopUpCyberFLproperty from '../ModalPopUpCyberFLproperty/ModalPopUpCyberFLproperty'
import Loading from '../Loading/Loading'
import ThankYouPage_FL from '../ThankYouPage/ThakYouPage_FL'
import { postFormLeads } from '../../hooks/fetchDataApi'
import axios from 'axios'
import ModalPopUpVacationFLproperty from '../ModalPopUpVacationFLproperty/ModalPopUpVacationFLproperty'
import ModalPopUpVacationFL from '../ModalPopUpVacationFL/ModalPopUpVacationFL'
import ModalVacationClayTile from '../ModalVacationClayTile/ModalVacationClayTile'
import ModalCyberTruckClayTile from '../ModalCyberTruckClayTile/ModalCyberTruckClayTile'
import ThankYouPage_PR from '../ThankYouPage/ThakYouPage_PR'

export default function FormsLeadsFL_DN_JSD({ id, estilos, boton, placeholder, campaign }) {
  const { traffic, lenguaje } = useSelector((state) => state.states)
  const campaignList = campaings['fl']
  const utms = getUTMs(campaignList[campaign], traffic)
  const postFormLeadMutation = useMutation({
    mutationFn: (data) => postFormLeads(data, 'fl'),
    onSuccess: () => {},
    onError: (error) => {
      console.error('Error al enviar el formulario', error)
    },
  })

  const language = useSelector((state) => state.states.lenguaje)

  const initialValues = {
    Language_Preference: language === 'en' ? 'English' : 'Spanish',
  }

  const metods = useForm({
    mode: 'onBlur',
  })

  const {
    handleSubmit,
    formState: { errors, isValid },
    watch,
    register,
    trigger,
    setValue,
  } = useForm({ defaultValues: initialValues })

  const onSubmit = (data) => {
    const dataApi = { ...data, ...utms }
    postFormLeadMutation.mutate(dataApi)
    console.debug(dataApi)
  }

  const [activeStep, setActiveStep] = useState(0)
  const [price, setPrice] = useState(1000)
  const [zipcode, setZipcode] = useState('')
  const [city1, setCity] = useState('')
  const [porcetanje, setPorcetanje] = useState(10)
  const [isModalCyberOpen, setIsModalCyberOpen] = useState(false)
  const [isModalCyberPropertyOpen, setIsModalCyberPropertyOpen] = useState(false)
  const [isModalVacationOpen, setIsModalVacationOpen] = useState(false)
  const [isModalVacationPropertyOpen, setIsModalVacationPropertyOpen] = useState(false)
  const [isModalVacationClayTile, setIsModalVacationClayTile] = useState(false)
  const [isModalCyberTruckClayTile, setIsModalCyberTruckClayTile] = useState(false)
  const [stepValid, setStepValid] = useState(false)
  const [initialRoof, setInitialRoof] = useState('No')

  const handlePriceChange = (event) => {
    setPrice(event.target.value)
  }

  const handleSelectChange = (event) => {
    if (campaignList[campaign] === 'CybertruckFL') {
      setIsModalCyberOpen(true)
    } else if (campaignList[campaign] === 'LearnAndWinRoofing') {
      setIsModalVacationOpen(true)
    } else {
      setIsModalCyberOpen(false)
      setIsModalVacationOpen(false)
    }
  }

  const handleSelectChange2 = () => {
    if (campaignList[campaign] === 'CybertruckFL') {
      setIsModalCyberTruckClayTile(true)
    } else if (campaignList[campaign] === 'LearnAndWinRoofing') {
      setIsModalVacationClayTile(true)
    } else {
      setIsModalCyberTruckClayTile(false)
      setIsModalVacationClayTile(false)
    }
  }

  const validateStep = () => {
    let isFormValid = true

    switch (activeStep) {
      case 1:
        {
          const monthlyBill = watch('Monthly_Bill')
          if (monthlyBill === '') {
            isFormValid = false
          }
        }
        break
      case 2:
        {
          if (city1 === '') {
            isFormValid = false
          }
        }
        break
      case 3:
        {
          const roofAge = watch('Roof_Age')
          if (roofAge === '--') {
            isFormValid = false
          }
        }
        break
      case 4:
        {
          const roofType = watch('Roof_Type1')
          if (!roofType) {
            isFormValid = false
          }
        }
        break
      case 5:
        {
          const firstName = watch('First_Name')
          if (!firstName) {
            isFormValid = false
          }
        }
        break
      case 6:
        {
          const lastName = watch('Last_Name')
          if (!lastName) {
            isFormValid = false
          } else isFormValid = true
        }
        break
      case 7:
        {
          const phone = watch('Phone')
          if (!phone) {
            isFormValid = false
          }
        }
        break
      case 8:
        {
          const email = watch('Email')
          if (!email) {
            isFormValid = false
          }
        }
        break
      case 9:
        {
          const appointmentType = watch('Appointment_Type')
          if (!appointmentType || appointmentType === '-Select-') {
            isFormValid = false
          }
        }
        break
      default:
        break
    }

    setStepValid(isFormValid)
  }

  useEffect(() => {
    validateStep()
  }, [activeStep, watch(), zipcode, city1])

  const handleNext = () => {
    validateStep()

    if (stepValid) {
      if (activeStep === 1 && campaignList[campaign] === 'LearnAndWinRoofing') {
        setActiveStep(2)
        setPorcetanje(30)
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
        setPorcetanje((prevProgress) => prevProgress + 10)
      }
    }
  }

  const handlePrev = () => {
    if (activeStep === 2 && campaignList[campaign] === 'LearnAndWinRoofing') {
      setActiveStep(0)
      setPorcetanje(10)
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep - 1)
      setPorcetanje((prevProgress) => prevProgress - 10)
    }
  }

  useEffect(() => {
    if (zipcode.length === 5) {
      axios
        .get(`https://www.usazipcodeapi.com/api/zip/${zipcode}`)
        .then((response) => {
          setCity(response.data.result.city)
          setValue('City', response.data.result.city)
        })
        .catch((error) => {
          console.error('Error fetching data: ', error)
          setCity('')
        })
    } else {
      setCity('')
    }
  }, [zipcode])

  return (
    <>
      <div className={estilos?.div ?? ''}>
        {postFormLeadMutation.isSuccess ? language === 'es' ? <ThankYouPage_PR /> : <ThankYouPage_FL /> : ''}
        {postFormLeadMutation.isPending && <Loading />}
        {campaignList[campaign] === 'CybertruckFL' && isModalCyberOpen && <ModalPopUpCyberFL open={isModalCyberOpen} />}
        {campaignList[campaign] === 'CybertruckFL' && isModalCyberPropertyOpen && <ModalPopUpCyberFLproperty open={isModalCyberPropertyOpen} />}
        {campaignList[campaign] === 'CybertruckFL' && isModalCyberTruckClayTile && <ModalCyberTruckClayTile open={isModalCyberTruckClayTile} />}
        {campaignList[campaign] === 'LearnAndWinRoofing' && isModalVacationPropertyOpen && (
          <ModalPopUpVacationFLproperty open={isModalVacationPropertyOpen} />
        )}
        {campaignList[campaign] === 'LearnAndWinRoofing' && isModalVacationClayTile && <ModalVacationClayTile open={isModalVacationClayTile} />}
        {campaignList[campaign] === 'LearnAndWinRoofing' && isModalVacationOpen && <ModalPopUpVacationFL open={isModalVacationOpen} />}
        <div className="w-full">
          <div className="mb-1 h-3 w-full">
            <div
              className={estilos.progressBar.bar}
              style={{
                width: `${Math.ceil(porcetanje > 100 ? 100 : porcetanje)}%`,
              }}
            >
              <span className={estilos.progressBar.text}>{Math.ceil(porcetanje > 100 ? 100 : porcetanje)}%</span>
            </div>
          </div>
          <div className={estilos.progressBar.bar2}>
            <div
              className="flex h-full items-center justify-end bg-[#0038A8]"
              style={{
                width: `${Math.ceil(porcetanje > 100 ? 100 : porcetanje)}%`,
              }}
            />
          </div>
          <div className={estilos.progressBar.bg_bar} />
        </div>
        <FormProvider {...metods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={estilos?.form}
            name="form"
            id={id ?? 'form'}
            acceptCharset="UTF-8"
            encType="multipart/form-data"
          >
            <div className={activeStep === 0 ? 'w-[90%]' : 'hidden'}>
              <div className="flex w-full flex-col items-center gap-4">
                <label className={estilos.label}>
                  {translationsForm_DN[language].ownHome}
                  <strong className={estilos.error ?? 'text-red-500'}>*</strong>
                </label>
                <div className="flex w-full flex-col items-center gap-3 text-white md:flex-row md:justify-between">
                  <div
                    onClick={() => {
                      setValue('If_the_Lead_the_homeowner', 'Yes')
                      validateStep()
                    }}
                    className={
                      campaignList[campaign] === 'CybertruckFL'
                        ? `border border-white ${
                            watch('If_the_Lead_the_homeowner') === 'Yes' ? 'bg-white text-black' : ''
                          } flex w-full gap-3 p-2 font-bold hover:bg-white hover:text-black md:w-2/5`
                        : `rounded-full border-2 border-[#FF9E18] text-[#FF9E18] ${
                            watch('If_the_Lead_the_homeowner') === 'Yes' ? 'border-none bg-[#0038A8] text-white' : 'bg-white'
                          } flex w-full items-center justify-items-stretch p-1 font-bold hover:text-[#0038A8] md:w-1/2`
                    }
                  >
                    {campaignList[campaign] === 'LearnAndWinRoofing' && (
                      <div
                        className={`h-4 w-4 ${
                          watch('If_the_Lead_the_homeowner') !== 'Yes' ? 'border-2 border-[#FF9E18]' : ''
                        } flex flex-shrink-0 items-center justify-center rounded-full bg-white`}
                      >
                        {watch('If_the_Lead_the_homeowner') === 'Yes' && <div className="absolute h-[9px] w-[9px] rounded-full bg-[#0038A8]" />}
                      </div>
                    )}
                    <input
                      type="radio"
                      name=""
                      className={campaignList[campaign] === 'LearnAndWinRoofing' ? 'hidden' : ''}
                      id=""
                      value="Yes"
                      {...register('If_the_Lead_the_homeowner')}
                    />
                    <span className={campaignList[campaign] === 'LearnAndWinRoofing' ? 'w-full text-center' : ''}>
                      {translationsForm_DN[language].yes}
                    </span>
                  </div>
                  <div
                    onClick={() => {
                      setValue('If_the_Lead_the_homeowner', 'No')
                      handleSelectChange()
                      validateStep()
                    }}
                    className={
                      campaignList[campaign] === 'CybertruckFL'
                        ? `border border-white ${
                            watch('If_the_Lead_the_homeowner') === 'No' ? 'bg-white text-black' : ''
                          } flex w-full gap-3 p-2 font-bold hover:bg-white hover:text-black md:w-2/5`
                        : `rounded-full border-2 border-[#FF9E18] text-[#FF9E18] ${
                            watch('If_the_Lead_the_homeowner') === 'No' ? 'border-none bg-[#0038A8] text-white' : 'bg-white'
                          } flex w-full items-center justify-items-stretch p-1 font-bold hover:text-[#0038A8] md:w-1/2`
                    }
                  >
                    {campaignList[campaign] === 'LearnAndWinRoofing' && (
                      <div
                        className={`h-4 w-4 ${
                          watch('If_the_Lead_the_homeowner') !== 'No' ? 'border-2 border-[#FF9E18]' : ''
                        } flex flex-shrink-0 items-center justify-center rounded-full bg-white`}
                      >
                        {watch('If_the_Lead_the_homeowner') === 'No' && <div className="absolute h-[9px] w-[9px] rounded-full bg-[#0038A8]" />}
                      </div>
                    )}
                    <input
                      type="radio"
                      className={campaignList[campaign] === 'LearnAndWinRoofing' ? 'hidden' : ''}
                      name=""
                      id=""
                      value="No"
                      {...register('If_the_Lead_the_homeowner')}
                    />
                    <span className={campaignList[campaign] === 'LearnAndWinRoofing' ? 'w-full text-center' : ''}>NO</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={activeStep === 1 ? 'w-[90%]' : 'hidden'}>
              <div className="flex w-full flex-col items-center">
                <label className={estilos.label ?? 'hidden'}>
                  {translationsForm_DN[language].monthlyBill}
                  <strong className={estilos.error ?? 'text-red-500'}>*</strong>
                </label>
                <div className="h-6 w-[84%]">
                  <div
                    className={`h-full ${
                      campaignList[campaign] === 'LearnAndWinRoofing' ? 'text-[#0038A8]' : 'text-white'
                    } flex items-center justify-end font-bold`}
                    style={{
                      width: `calc(${((watch('Monthly_Bill') - 75) / (1000 - 75)) * 100}% + 10px)`,
                    }}
                  >
                    <span> ${watch('Monthly_Bill')}</span>
                  </div>
                </div>
                <div className="flex w-full items-center justify-center gap-3">
                  <div className={campaignList[campaign] === 'LearnAndWinRoofing' ? 'text-[#0038A8]' : 'text-white'}>$75</div>
                  <input
                    type="range"
                    min="75"
                    name="price"
                    max="1000"
                    onChange={handlePriceChange}
                    className={estilos?.range}
                    id="myRange"
                    {...register('Monthly_Bill')}
                  />
                  <div className={campaignList[campaign] === 'LearnAndWinRoofing' ? 'text-[#0038A8]' : 'text-white'}>$1000</div>
                </div>
              </div>
            </div>
            <div className={activeStep === 2 ? 'w-[90%]' : 'hidden'}>
              <div className="flex w-full flex-col items-center">
                <label className={estilos.label ?? 'hidden'}>ZIP CODE</label>
                <p className={estilos.textCity}>{city1}</p>
                <input
                  type="text"
                  value={zipcode}
                  {...register('Zip_Code')}
                  onChange={(event) => {
                    setZipcode(event.target.value)
                    validateStep()
                  }}
                  className={estilos?.inputText}
                />
              </div>
            </div>
            <div className={activeStep === 3 ? 'w-[90%]' : 'hidden'}>
              <div className="flex w-full flex-col items-center">
                <label className={estilos.label ?? 'hidden'}>
                  {translationsForm_DN[language].roofAge}
                  <strong className={estilos.error ?? 'text-red-500'}>*</strong>
                </label>
                <select
                  name="Dropdown2"
                  className={estilos?.select}
                  {...register('Roof_Age')}
                  onBlur={() => {
                    trigger('Roof_Age')
                    validateStep()
                  }}
                >
                  <option value="--" className={estilos?.option}>
                    --
                  </option>
                  <option value="&lt;5" className={estilos?.option}>
                    {translationsForm_DN[language].lessMore} 5 {translationsForm_DN[language].year}
                  </option>
                  <option value="&lt;10" className={estilos?.option}>
                    {translationsForm_DN[language].lessMore} 10 {translationsForm_DN[language].year}
                  </option>
                  <option value="&lt;15" className={estilos?.option}>
                    {translationsForm_DN[language].lessMore} 15 {translationsForm_DN[language].year}
                  </option>
                </select>
              </div>
            </div>
            <div className={activeStep === 4 ? 'w-[90%]' : 'hidden'}>
              <div className="flex w-full flex-col items-center">
                <label className={estilos.label ?? 'hidden'}>
                  {translationsForm_DN[language].roofType}
                  <strong className={estilos.error ?? 'text-red-500'}>*</strong>
                </label>
                <span className={estilos.sublabel ?? 'hidden'}>
                  {translationsForm_DN[language].roofType2}
                  <strong className={estilos.error ?? 'text-red-500'}>*</strong>
                </span>
                <div className="flex w-full flex-col items-center gap-3 text-white md:flex-row md:justify-between">
                  <div
                    onClick={() => {
                      setValue('Roof_Type1', 'Yes')
                      setInitialRoof('Yes')
                      handleSelectChange2()
                      validateStep()
                    }}
                    className={
                      campaignList[campaign] === 'CybertruckFL'
                        ? `border border-white ${
                            watch('Roof_Type1') === 'Yes' ? 'bg-white text-black' : ''
                          } flex w-full gap-3 p-2 font-bold hover:bg-white hover:text-black md:w-2/5`
                        : `rounded-full border-2 border-[#FF9E18] text-[#FF9E18] ${
                            watch('Roof_Type1') === 'Yes' ? 'border-none bg-[#0038A8] text-white' : 'bg-white'
                          } flex w-full items-center justify-items-stretch p-1 font-bold hover:text-[#0038A8] md:w-1/2`
                    }
                  >
                    {campaignList[campaign] === 'LearnAndWinRoofing' && (
                      <div
                        className={`h-4 w-4 ${
                          watch('Roof_Type1') !== 'Yes' ? 'border-2 border-[#FF9E18]' : ''
                        } flex flex-shrink-0 items-center justify-center rounded-full bg-white`}
                      >
                        {watch('Roof_Type1') === 'Yes' && <div className="absolute h-[9px] w-[9px] rounded-full bg-[#0038A8]" />}
                      </div>
                    )}
                    <input
                      type="radio"
                      name=""
                      className={campaignList[campaign] === 'LearnAndWinRoofing' ? 'hidden' : ''}
                      id=""
                      value="Yes"
                      {...register('Roof_Type1')}
                    />
                    <span className={campaignList[campaign] === 'LearnAndWinRoofing' ? 'w-full text-center' : ''}>
                      {translationsForm_DN[language].yes}
                    </span>
                  </div>
                  <div
                    onClick={() => {
                      setValue('Roof_Type1', 'No')
                      setInitialRoof('No')
                      validateStep()
                    }}
                    className={
                      campaignList[campaign] === 'CybertruckFL'
                        ? `border border-white ${
                            watch('Roof_Type1') === 'No' ? 'bg-white text-black' : ''
                          } flex w-full gap-3 p-2 font-bold hover:bg-white hover:text-black md:w-2/5`
                        : `rounded-full border-2 border-[#FF9E18] text-[#FF9E18] ${
                            watch('Roof_Type1') === 'No' ? 'border-none bg-[#0038A8] text-white' : 'bg-white'
                          } flex w-full items-center justify-items-stretch p-1 font-bold hover:text-[#0038A8] md:w-1/2`
                    }
                  >
                    {campaignList[campaign] === 'LearnAndWinRoofing' && (
                      <div
                        className={`h-4 w-4 ${
                          watch('Roof_Type1') !== 'No' ? 'border-2 border-[#FF9E18]' : ''
                        } flex flex-shrink-0 items-center justify-center rounded-full bg-white`}
                      >
                        {watch('Roof_Type1') === 'No' && <div className="absolute h-[9px] w-[9px] rounded-full bg-[#0038A8]" />}
                      </div>
                    )}
                    <input
                      type="radio"
                      className={campaignList[campaign] === 'LearnAndWinRoofing' ? 'hidden' : ''}
                      name=""
                      id=""
                      value="No"
                      {...register('Roof_Type1')}
                    />
                    <span className={campaignList[campaign] === 'LearnAndWinRoofing' ? 'w-full text-center' : ''}>NO</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={activeStep === 5 ? 'w-[90%]' : 'hidden'}>
              <div className="flex w-full flex-col items-center">
                <label className={estilos.label ?? 'hidden'}>
                  {translationsForm_DN[language].firstName}
                  <strong className={estilos.error ?? 'text-red-500'}>*</strong>
                </label>
                <input
                  {...register('First_Name', {
                    required: 'Name required',
                    pattern: {
                      value: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]+$/,
                      message: 'Enter only letters and/or spaces.',
                    },
                  })}
                  onBlur={() => {
                    trigger('First_Name')
                    validateStep()
                  }}
                  className={estilos?.inputText}
                  type="text"
                  name="First_Name"
                  placeholder={placeholder && translationsForm_DN[language].firstName}
                />
                {errors.First_Name && <p className="self-start text-sm text-red-500">{errors.First_Name.message}</p>}
              </div>
            </div>
            <div className={activeStep === 6 ? 'w-[90%]' : 'hidden'}>
              <div className="flex w-full flex-col items-center">
                <label className={estilos.label ?? 'hidden'}>
                  {translationsForm_DN[language].lastName}
                  <strong className={estilos.error ?? 'text-red-500'}>*</strong>
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
                    trigger('Last_Name')
                    validateStep()
                  }}
                  className={estilos?.inputText}
                  type="text"
                  name="Last_Name"
                  placeholder={placeholder && translationsForm_DN[language].lastName}
                />
                {errors.Last_Name && <p className="self-start text-sm text-red-500">{errors.Last_Name.message}</p>}
              </div>
            </div>
            <div className={activeStep === 7 ? 'w-[90%]' : 'hidden'}>
              <div className="flex w-full flex-col items-center">
                <label className={estilos.label ?? 'hidden'}>
                  {translationsForm[lenguaje].phone}
                  <strong className={estilos.error ?? 'text-red-500'}>*</strong>
                </label>
                <input
                  {...register('Phone', {
                    required: 'Teléfono requerido',
                    pattern: {
                      value: /^[2-9][0-9]{9}$/,
                      message: 'Introduce solo números, no pueden empezar por 1 o 0, deben ser 10 dígitos',
                    },
                  })}
                  type="text"
                  name="Phone"
                  id="Phone"
                  onBlur={() => trigger('Phone')}
                  className={`${estilos?.inputText} ${errors.Phone ? 'border-red-500' : 'border-slate-500'}`}
                  placeholder={placeholder && 'Teléfono del Cliente que Refiere'}
                />
                {errors.Phone && <p className={estilos.error ?? 'self-start text-sm text-red-500'}>{errors.Phone.message}</p>}
              </div>
            </div>
            <div className={activeStep === 8 ? 'w-[90%]' : 'hidden'}>
              <div className="flex w-full flex-col items-center">
                <label className={estilos.label ?? 'hidden'}>
                  {translationsForm_DN[language].email}
                  <strong className={estilos.error ?? 'text-red-500'}>*</strong>
                </label>
                <input
                  {...register('Email', {
                    pattern: {
                      value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/i,
                      message: 'Enter a valid email',
                    },
                  })}
                  onBlur={() => {
                    trigger('Email')
                    validateStep()
                  }}
                  className={estilos?.inputText}
                  type="text"
                  name="Email"
                  placeholder={placeholder && translationsForm_DN[language].email}
                />
                {errors.Email && <p className="self-start text-sm text-red-500">{errors.Email.message}</p>}
              </div>
            </div>
            <div className={activeStep === 9 ? 'w-[90%]' : 'hidden'}>
              <div className="flex w-full flex-col items-center">
                <label className={estilos.label ?? 'hidden'}>
                  {translationsForm_DN[language].youavaliable}
                  <strong className={estilos.error ?? 'text-red-500'}>*</strong>
                </label>
                <select
                  name="Dropdown1"
                  className={estilos?.select}
                  {...register('Appointment_Type', { required: true })}
                  onBlur={() => {
                    trigger('Appointment_Type')
                    validateStep()
                  }}
                >
                  <option value="-Select-" className={estilos?.option}>
                    --
                  </option>
                  <option value={translationsForm_DN.en.virtual} className={estilos?.option}>
                    {translationsForm_DN[language].virtual}
                  </option>
                  <option value={translationsForm_DN.en.inperson} className={estilos?.option}>
                    {translationsForm_DN[language].inperson}
                  </option>
                </select>
              </div>
            </div>
            <div
              className={`flex w-[90%] ${
                activeStep === 0 ? (campaignList[campaign] === 'LearnAndWinRoofing' ? 'justify-center' : 'justify-end') : 'justify-between'
              } `}
            >
              {activeStep === 0 ? (
                <div
                  className={`${estilos.buttonNext0} ${!watch('If_the_Lead_the_homeowner') && 'cursor-not-allowed opacity-50'}`}
                  onClick={() => {
                    let isFormValid = true
                    const homeownerStatus = watch('If_the_Lead_the_homeowner')
                    if (!homeownerStatus) {
                      const errorMessage =
                        language === 'en' ? 'Please indicate whether you own the home.' : 'Por favor indique si es propietario de la vivienda.'
                      alert(errorMessage)
                      isFormValid = false
                    }
                    if (isFormValid === true) {
                      if (activeStep === 0 && campaignList[campaign] === 'LearnAndWinRoofing') {
                        setActiveStep(activeStep + 2)
                        setPorcetanje(porcetanje + 20)
                      } else {
                        setActiveStep(activeStep + 1)
                        setPorcetanje(porcetanje + 10)
                      }
                    }
                  }}
                  disabled={!watch('If_the_Lead_the_homeowner')} // Deshabilita el botón si el campo necesario no está completado
                >
                  {translationsForm_DN[language].next}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3.33301 8H12.6663"
                      stroke={campaignList[campaign] === 'LearnAndWinRoofing' ? '#0038A8' : 'black'}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 3.33337L12.6667 8.00004L8 12.6667"
                      stroke={campaignList[campaign] === 'LearnAndWinRoofing' ? '#0038A8' : 'black'}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              ) : (
                <>
                  <div className={estilos.buttonBack} onClick={handlePrev}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3.33301 8H12.6663"
                        stroke={campaignList[campaign] === 'LearnAndWinRoofing' ? '#0038A8' : 'white'}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.66699 12.3334L1.00033 7.66671L5.66699 3.00004"
                        stroke={campaignList[campaign] === 'LearnAndWinRoofing' ? '#0038A8' : 'white'}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {translationsForm_DN[language].previous}
                  </div>
                  {activeStep !== 9 ? (
                    <div className={`${estilos.buttonNext} ${!stepValid && 'cursor-not-allowed opacity-50'}`} onClick={handleNext}>
                      {translationsForm_DN[language].next}
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M3.33301 8H12.6663"
                          stroke={campaignList[campaign] === 'LearnAndWinRoofing' ? 'white' : 'black'}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 3.33337L12.6667 8.00004L8 12.6667"
                          stroke={campaignList[campaign] === 'LearnAndWinRoofing' ? 'white' : 'black'}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  ) : (
                    <button className={!isValid ? estilos.invalidButton : estilos.button} type="submit" disabled={!isValid}>
                      {boton ?? translationsForm_DN[language].send}
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M3.33301 8H12.6663"
                          stroke={campaignList[campaign] === 'LearnAndWinRoofing' ? 'white' : 'black'}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 3.33337L12.6667 8.00004L8 12.6667"
                          stroke={campaignList[campaign] === 'LearnAndWinRoofing' ? 'white' : 'black'}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  )}
                </>
              )}
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  )
}

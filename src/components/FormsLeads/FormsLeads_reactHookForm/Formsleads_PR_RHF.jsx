import { useMutation } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { MunicipiosPR, campaings, productsPR, translationsForm } from '../../../utils/data'
import { postFormLeads } from '../../../hooks/fetchDataApi'
import { getUTMs } from '../../../features/getUTM/getUTM'
import { FormProvider, useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import Loading from '../../Loading/Loading'
import ThankYouPage_PR from '../../ThankYouPage/ThakYouPage_PR'
import { Link } from 'react-router-dom'
import PhoneInput from '../../Inputs/PhoneInput_Normal'

export default function FormsLeads_PR_RHF({
  id,
  phone,
  email,
  city,
  tittle,
  products,
  product,
  estilos,
  boton,
  campaign,
  placeholder,
  sales_Rep_Phone,
  sales_id,
}) {
  const { locacion, traffic, lenguaje } = useSelector((state) => state.states)
  const [selectedProducts, setSelectedProducts] = useState([])
  const campaignList = campaings['pr']
  const utms = getUTMs(campaignList[campaign], traffic)
  const [validedPhone, setValidedPhone] = useState(false)

  const postFormLeadMutation = useMutation({
    mutationFn: (data) => postFormLeads(data, locacion),
    onSuccess: () => {
      reset(initialValues)
    },
    onError: (error) => {
      console.error('Error al enviar el formulario', error)
    },
  })

  const initialValues = {
    Products: product ?? [],
  }

  const metods = useForm({
    mode: 'onBlur',
  })

  const {
    handleSubmit,
    formState: { errors, isValid },
    reset,
    register,
    trigger,
    setValue,
    setError,
    clearErrors,
  } = useForm({
    mode: 'onBlur',
    defaultValues: initialValues,
  })
  const onSubmit = (data) => {
    let dataApi

    sales_id
      ? (dataApi = { ...data, ...utms, Phone: validedPhone, Form_Id: id, Sales_Rep: sales_id })
      : (dataApi = { ...data, ...utms, Phone: validedPhone, Form_Id: id })

    delete dataApi.Tyt
    console.log(dataApi)

    postFormLeadMutation.mutate(dataApi)
  }
  
  useEffect(() => {
    if (validedPhone === false) {
      setError('Phone', {
        type: 'manual',
        message: 'El número de teléfono no es válido. Debe comenzar con un dígito entre 2 y 9.',
      })
    } else {
      clearErrors('Phone')
    }
  }, [validedPhone])

  const handleProductSelect = (e) => {
    const product = e.target.value
    if (product !== 'NONE' && !selectedProducts.includes(product)) {
      const newSelectedProducts = [...selectedProducts, product]
      setSelectedProducts(newSelectedProducts)
      setValue('Products', newSelectedProducts) // Asegúrate de actualizar el valor en el formulario
    }
  }

  const handleProductDelete = (product) => {
    const newSelectedProducts = selectedProducts.filter((p) => p !== product)
    setSelectedProducts(newSelectedProducts)
    setValue('Products', newSelectedProducts) // Actualizar el valor en el formulario tras eliminar
  }
  const handleButtonClick = async (e) => {
    const result = await trigger() // activar validación manualmente
    if (!result) {
      e.preventDefault() // prevenir el envío del formulario si no es válido
    }
  }

  return (
    <>
      {postFormLeadMutation.isPending ? <Loading /> : ''}
      {postFormLeadMutation.isSuccess ? <ThankYouPage_PR /> : ''}
      <div className={estilos?.div ?? ''}>
        <h1 className={estilos?.tittle}>{tittle}</h1>
        <FormProvider {...metods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={estilos?.form}
            name={id ?? 'form'}
            id={id ?? 'form'}
            acceptCharset="UTF-8"
            encType="multipart/form-data"
          >
            <div className={estilos.divNA ?? 'w-full justify-between'}>
              <div className="flex w-full flex-col items-center justify-center">
                {
                  <label className={estilos.label ?? 'hidden'}>
                    {translationsForm[lenguaje].firstName}
                    <strong className={estilos.error ?? 'text-red-500'}>*</strong> :
                  </label>
                }
                <input
                  {...register('First_Name', {
                    required: translationsForm[lenguaje].reqName,
                    pattern: {
                      value: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]+$/,
                      message: translationsForm[lenguaje].errorName,
                    },
                  })}
                  onBlur={() => {
                    trigger('First_Name') // Validar el campo en cada cambio
                  }}
                  className={estilos?.inputText}
                  type="text"
                  name="First_Name"
                  placeholder={placeholder && translationsForm[lenguaje].firstName}
                />
                {errors.First_Name && <p className={estilos.error ?? 'self-start text-sm text-red-500'}>{errors.First_Name.message}</p>}
              </div>
              <div className="flex w-full flex-col items-center justify-center">
                <label className={estilos.label ?? 'hidden'}>
                  {translationsForm[lenguaje].lastName}
                  <strong className={estilos.error ?? 'text-red-500'}>*</strong> :
                </label>
                <input
                  {...register('Last_Name', {
                    required: translationsForm[lenguaje].reqLastname,
                    pattern: {
                      value: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]+$/,
                      message: translationsForm[lenguaje].errorName,
                    },
                  })}
                  onBlur={() => {
                    trigger('Last_Name') // Validar el campo en cada cambio
                  }}
                  className={estilos?.inputText}
                  type="text"
                  name="Last_Name"
                  placeholder={placeholder && translationsForm[lenguaje].lastName}
                />
                {errors.Last_Name && <p className={estilos.error ?? 'self-start text-sm text-red-500'}>{errors.Last_Name.message}</p>}
              </div>
            </div>

            <div className={estilos?.divDos ?? ''}>
              {phone && (
                <>
                  {' '}
                  <div className="flex w-full flex-col items-center justify-center">
                    <label className={estilos.label ?? 'hidden'}>
                      {translationsForm[lenguaje].phone}
                      <strong className={estilos.error ?? 'text-red-500'}>*</strong> :
                    </label>
                    <PhoneInput
                      className={estilos?.inputText}
                      errorRequired={translationsForm[lenguaje].reqPhone}
                      errorPattern={translationsForm[lenguaje].errorPhone}
                      phoneValided={setValidedPhone}
                    />
                  </div>
                </>
              )}
              {sales_Rep_Phone && (
                <div className="flex w-full flex-col items-center justify-center">
                  <label className={estilos.label ?? 'hidden'}>
                    {translationsForm[lenguaje].sales_Rep_Phone}
                    <strong className={estilos.error ?? 'text-red-500'}>*</strong> :
                  </label>
                  <input
                    {...register('Sales_Rep_Phone', {
                      required: translationsForm[lenguaje].reqSales_Rep_Phone,
                      pattern: {
                        value: /^[2-9]\d{9}$/,
                        message: translationsForm[lenguaje].errorSales_Rep_Phone,
                      },
                    })}
                    type="text"
                    onBlur={() => {
                      trigger('Sales_Rep_Phone')
                    }}
                    className={estilos?.inputText}
                    placeholder={placeholder && translationsForm[lenguaje].sales_Rep_Phone}
                  />

                  {errors.Sales_Rep_Phone && <p className={estilos.error ?? 'self-start text-sm text-red-500'}>{errors.Sales_Rep_Phone.message}</p>}
                </div>
              )}
              {email && (
                <div className="flex w-full flex-col items-center justify-center">
                  <label className={estilos.label ?? 'hidden'}>
                    {translationsForm[lenguaje].email}
                    <strong className={estilos.error ?? 'text-red-500'}>*</strong> :
                  </label>
                  <input
                    {...register('Email', {
                      required: translationsForm[lenguaje].reqEmail,
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                        message: translationsForm[lenguaje].errorEmail,
                      },
                    })}
                    onBlur={() => {
                      trigger('Email')
                    }}
                    className={estilos?.inputText}
                    type="text"
                    name="Email"
                    placeholder={placeholder && translationsForm[lenguaje].email}
                  />
                  {errors.Email && <p className={estilos.error ?? 'self-start text-sm text-red-500'}>{errors.Email.message}</p>}
                </div>
              )}
            </div>
            {city && (
              <div className="flex w-full flex-col items-center justify-center">
                <label className={estilos.label ?? 'hidden'}>
                  {translationsForm[lenguaje].city}
                  <strong className={estilos.error ?? 'text-red-500'}>*</strong> :
                </label>
                <select
                  className={estilos?.select}
                  {...register('City')}
                  onBlur={() => {
                    trigger('City')
                  }}
                  name="City"
                >
                  <option defaultValue={translationsForm[lenguaje].city}>{translationsForm[lenguaje].city}</option>
                  {MunicipiosPR.map((city, i) => {
                    return (
                      <option key={i} value={city}>
                        {city}
                      </option>
                    )
                  })}
                </select>
              </div>
            )}
            {products && (
              <div className="flex w-full flex-col">
                <label className={estilos.label ?? 'hidden'} htmlFor="">
                  {translationsForm[lenguaje].products}
                </label>
                <select className={estilos.select} name="Products" onChange={handleProductSelect}>
                  <option value="NONE">{translationsForm[lenguaje].products}</option>
                  {productsPR.map((product, index) => {
                    return (
                      <option key={index} value={product}>
                        {product}
                      </option>
                    )
                  })}
                </select>
              </div>
            )}
            {selectedProducts.length > 0 && <p className="text-white">{translationsForm[lenguaje].seletedProducts}</p>}
            <div className={estilos?.divElementos ? estilos?.divElementos : 'flex w-full flex-wrap gap-3 px-7 text-white'}>
              {selectedProducts.map((product, index) => (
                <div key={index}>
                  {product}{' '}
                  <button className="font-bold text-red-500" onClick={() => handleProductDelete(product)}>
                    ⮾
                  </button>
                </div>
              ))}
            </div>
            {/* <div className={estilos?.DivTres ?? ''}>
              <div className="relative mr-4">
                <input
                  type="radio"
                  name="user"
                  id="TyT"
                  className="peer hidden"
                  {...register('Tyt', {
                    required: 'Debe aceptar la política de privacidad',
                  })}
                  checked={true}
                />
                <label htmlFor="TyT" className="flex h-6 w-6 cursor-pointer items-center rounded-full border transition peer-checked:border-none" />
                <div className="absolute bottom-0 right-0 top-0 my-auto flex h-6 w-6 scale-0 rounded-full transition delay-100 peer-checked:scale-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="mx-auto my-auto w-5 text-white"
                    width="20"
                    height="20"
                    viewBox="0 0 30 29"
                  >
                    <path
                      d="M15.2831 28.89C23.1974 28.89 29.6131 22.4742 29.6131 14.56C29.6131 6.64576 23.1974 0.230042 15.2831 0.230042C7.36889 0.230042 0.953125 6.64576 0.953125 14.56C0.953125 22.4742 7.36889 28.89 15.2831 28.89Z"
                      fill="#EDEDEE"
                    />
                    <path
                      d="M15.2834 21.32C19.0169 21.32 22.0434 18.2934 22.0434 14.56C22.0434 10.8266 19.0169 7.80005 15.2834 7.80005C11.55 7.80005 8.52344 10.8266 8.52344 14.56C8.52344 18.2934 11.55 21.32 15.2834 21.32Z"
                      fill={estilos?.fill ?? '#FF9E18'}
                    />
                  </svg>
                </div>
              </div>
              {/* <span className={estilos?.p ?? ''}>
                He leído y acepto{' '}
                <Link to="/pr/politica-de-privacidad" target="_blank" rel="noopener noreferrer" className={estilos?.strong ?? ''}>
                  la política de privacidad.
                </Link>
                <span className={estilos?.span ?? ''}>
                  para Better Solar Savings para enviar mensajes pregrabados de marketing y llamadas/textos automáticamente a mi número de teléfono
                  anterior, inslcuso si está en alguna lista de no llamar. El consentimiento no es una condición de compra. Puede darse de baja en
                  cualquier momento (ver términos y condiciones). Se pueden aplicar tarifas de mensajes/datos.
                </span>
              </span> 
            </div> */}
            <div className={estilos?.DivCuatro ?? ''}>
              {' '}
              <span className={estilos?.pp ?? ''}>
                {!estilos.terminosCondiciones ? (
                  <Link
                    to="/pr/politica-de-privacidad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center"
                  >
                    Al dar clic en enviar aceptas el <strong>tratamiento de datos</strong>
                  </Link>
                ) : (
                  <div className="mx-auto w-[95%]">
                    <h1 className="text-xs font-medium text-[#888888] xl:text-lg">
                      Al dar click a enviar acepto recibir mensajes de mercadeo y a los{' '}
                      <Link to="/pr/politica-de-privacidad" target="_blank" rel="noopener noreferrer" className="underline">
                        términos y condiciones.
                      </Link>
                    </h1>
                  </div>
                )}
              </span>
            </div>
            {errors.Tyt && <p className={estilos.error ?? 'self-start text-sm text-red-500'}>{errors.Tyt.message}</p>}
            <button
              className={!isValid ? estilos.invalidButton : estilos.button}
              type="submit"
              // disabled={!isValid}
              onClick={handleButtonClick}
            >
              {boton ?? 'Enviar'}
            </button>
          </form>
        </FormProvider>
      </div>
    </>
  )
}

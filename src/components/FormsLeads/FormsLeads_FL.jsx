import { CityFL, campaings, destinationLearnAndWind, productsFL, translationsForm } from '../../utils/data'
import { getUTMs } from '../../features/getUTM/getUTM'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { FormProvider, useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import Loading from '../Loading/Loading'
import ThankYouPage_FL from '../ThankYouPage/ThakYouPage_FL'
import { postFormLeads } from '../../hooks/fetchDataApi'

export default function FormsLeadsFL({
  id,
  phone,
  email,
  city,
  tittle,
  estilos,
  boton,
  destination,
  placeholder,
  product,
  products,
  campaign,
  AddUtm,
}) {
  const { traffic, lenguaje } = useSelector((state) => state.states)
  const [selectedProducts, setSelectedProducts] = useState([])
  const campaignList = campaings['fl']
  const utms = getUTMs(campaignList[campaign], traffic)
  const postFormLeadMutation = useMutation({
    mutationFn: (data) => postFormLeads(data, 'fl'),
    onSuccess: () => {},
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
    register,
    trigger,
    setValue,
  } = useForm({
    defaultValues: initialValues,
  })

  const onSubmit = (data) => {
    const dataApi = { ...data, ...utms, Lead_Gen_Event: AddUtm || null }
    postFormLeadMutation.mutate(dataApi)
    console.log(dataApi)
  }
  const handleProductSelect = (e) => {
    const product = e.target.value
    if (product !== 'NONE' && !selectedProducts.includes(product)) {
      const newSelectedProducts = [...selectedProducts, product]
      setSelectedProducts(newSelectedProducts)
      setValue('Products', newSelectedProducts)
    }
  }

  const handleProductDelete = (product) => {
    const newSelectedProducts = selectedProducts.filter((p) => p !== product)
    setSelectedProducts(newSelectedProducts)
    setValue('Products', newSelectedProducts)
  }

  return (
    <>
      <div className={estilos?.div ?? ''}>
        <h1 className={estilos.tittle}>{tittle}</h1>
        {/*Modales */}
        {postFormLeadMutation.isSuccess ? <ThankYouPage_FL /> : ''}
        {postFormLeadMutation.isPending ? <Loading /> : ''}
        {/*Fin Modales*/}
        <FormProvider {...metods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={estilos?.form}
            name={id ?? 'form'}
            id={id ?? 'form'}
            acceptCharset="UTF-8"
            encType="multipart/form-data"
          >
            <div className="flex w-full gap-4">
              <div className="w-full">
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
                    trigger('First_Name')
                  }}
                  className={estilos?.inputText}
                  type="text"
                  name="First_Name"
                  placeholder={placeholder && translationsForm[lenguaje].firstName}
                />
                {errors.First_Name && <p className="self-start text-sm text-red-500">{errors.First_Name.message}</p>}
              </div>
              <div className="w-full">
                <label className={estilos.label ?? 'hidden'}>
                  {translationsForm[lenguaje].lastName}
                  <strong className={estilos.error ?? 'text-red-500'}>*</strong> :
                </label>
                <input
                  {...register('Last_Name', {
                    required: translationsForm[lenguaje].reqLastname,
                    pattern: {
                      value: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]+$/,
                      message: translationsForm[lenguaje].errorLastname,
                    },
                  })}
                  onBlur={() => {
                    trigger('Last_Name')
                  }}
                  className={estilos?.inputText}
                  type="text"
                  name="Last_Name"
                  placeholder={placeholder && translationsForm[lenguaje].lastName}
                />
                {errors.Last_Name && <p className="self-start text-sm text-red-500">{errors.Last_Name.message}</p>}
              </div>
            </div>

            {phone && (
              <div className="flex w-full flex-col items-center justify-center">
                <label className={estilos.label ?? 'hidden'}>
                  {translationsForm[lenguaje].Phone}
                  <strong className={estilos.error ?? 'text-red-500'}>*</strong> :
                </label>
                <input
                  {...register('Phone', {
                    required: translationsForm[lenguaje].reqPhone,
                    pattern: {
                      value: /^[2-9]\d{9}$/,
                      message: translationsForm[lenguaje].errorPhone,
                    },
                  })}
                  type="text"
                  onBlur={() => {
                    trigger('Phone')
                  }}
                  className={estilos?.inputText}
                  placeholder={placeholder && translationsForm[lenguaje].Phone}
                />

                {errors.Phone && <p className={estilos.error ?? 'self-start text-sm text-red-500'}>{errors.Phone.message}</p>}
              </div>
            )}

            {email && (
              <div className="w-full">
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
                  <option defaultValue={translationsForm[lenguaje].city}>{translationsForm[lenguaje].city}</option>
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
                  {translationsForm[lenguaje].destination}
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
            {products && (
              <div className="flex w-full flex-col">
                <label className={estilos.label ?? 'hidden'} htmlFor="">
                  {translationsForm[lenguaje].products}
                </label>
                <select className={estilos.select} name="Products" onChange={handleProductSelect}>
                  <option value="NONE">{translationsForm[lenguaje].products}</option>
                  {productsFL.map((product, index) => {
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
            <div className="flex w-full flex-wrap gap-3 px-7 text-white">
              {selectedProducts.map((product, index) => (
                <div className="text-white" key={index}>
                  {product}{' '}
                  <button className="font-bold text-red-500" onClick={() => handleProductDelete(product)}>
                    ⮾
                  </button>
                </div>
              ))}
            </div>
            <div className="relative flex w-full items-center justify-center">
              <button className={!isValid ? estilos.invalidButton : estilos.button} type="submit" disabled={!isValid}>
                {boton ?? 'Enviar'}
              </button>
              <div className="absolute right-4 top-0 -rotate-[15deg]">
                <lord-icon src="https://cdn.lordicon.com/ffdixjiv.json" trigger="loop" style={{ width: '80px', height: '80px' }}></lord-icon>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  )
}

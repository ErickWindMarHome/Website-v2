import { useMutation } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { MunicipiosPR, campaings, productsPR, translationsForm } from '../../../utils/data'
import { postFormLeads } from '../../../hooks/fetchDataApi'
import { getUTMs } from '../../../features/getUTM/getUTM'
import { FormProvider, useForm } from 'react-hook-form'
import Loading from '../../Loading/Loading'
import ThankYouPage_PR from '../../ThankYouPage/ThakYouPage_PR'
import PhoneInput from '../../Inputs/PhoneInput_Normal'
import { useEffect, useState } from 'react'

export default function FormsLeads_PR_RHF_BSN({
  id,
  phone,
  email,
  city,
  tittle,
  products,
  florida,
  estilos,
  boton,
  destination,
  placeholder,
  campaign,
  text,
}) {
  const { locacion, traffic, lenguaje } = useSelector((state) => state.states)
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
    First_Name: '',
    Last_Name: '',
    Phone: '',
    Email: '',
    City: '',
    Products: [],
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
    setError,
    clearErrors,
  } = useForm({
    defaultValues: initialValues,
  })
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
  const onSubmit = (data) => {
    const dataApi = { ...data, ...utms }
    postFormLeadMutation.mutate(dataApi)
    console.log('status', postFormLeadMutation.status)
    console.log('Data a enviar')
    console.log(dataApi)
  }

  return (
    <>
      <div className={estilos?.div ?? ''}>
        <h1 className={estilos?.tittle}>{tittle}</h1>
        {postFormLeadMutation.isPending ? <Loading /> : ''}
        {postFormLeadMutation.isSuccess ? <ThankYouPage_PR /> : ''}
        <FormProvider {...metods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={estilos?.form}
            name="baloncesto_nacional"
            id={id ?? 'baloncesto_nacional'}
            acceptCharset="UTF-8"
            encType="multipart/form-data"
          >
            <section className={estilos.section}>
              <div className="flex w-full flex-col">
                <label className={estilos.label ?? 'hidden'}>
                  Nombre
                  <strong className={estilos.error ?? 'text-red-500'}>*</strong> :
                </label>
                <input
                  {...register('First_Name', {
                    required: 'Nombre requerido',
                    pattern: {
                      value: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]+$/,
                      message: 'Ingrese solo letras y/o espacios.',
                    },
                  })}
                  onBlur={() => {
                    trigger('First_Name') // Validar el campo en cada cambio
                  }}
                  className={estilos.inputText}
                  type="text"
                  name="First_Name"
                  placeholder={placeholder && 'First Name'}
                />
                {errors.First_Name && <p className={estilos.error ?? 'text-red-500'}>{errors.First_Name.message}</p>}
              </div>
              <div className="flex w-full flex-col">
                <label className={estilos.label ?? 'hidden'}>
                  Apellido
                  <strong className={estilos.error ?? 'text-red-500'}>*</strong> :
                </label>
                <input
                  {...register('Last_Name', {
                    required: 'Apellido requerido',
                    pattern: {
                      value: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]+$/,
                      message: 'Ingrese solo letras y/o espacios.',
                    },
                  })}
                  onBlur={() => {
                    trigger('Last_Name') // Validar el campo en cada cambio
                  }}
                  className={estilos.inputText}
                  type="text"
                  name="Last_Name"
                  placeholder={placeholder && 'Apellido'}
                />
                {errors.Last_Name && <p className={estilos.error ?? 'text-red-500'}>{errors.Last_Name.message}</p>}
              </div>
            </section>

            <section className={estilos.section}>
              {phone && (
                <PhoneInput
                  className={estilos?.inputText}
                  errorRequired={translationsForm[lenguaje].reqPhone}
                  errorPattern={translationsForm[lenguaje].errorPhone}
                  phoneValided={setValidedPhone}
                />
              )}

              {email && (
                <div className="flex w-full flex-col">
                  <label className={estilos.label ?? 'hidden'}>
                    {' '}
                    Email <strong className={estilos.error ?? 'text-red-500'}>*</strong> :
                  </label>
                  <input
                    {...register('Email', {
                      required: 'Email requerido',
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                        message: 'Ingrese un email valido',
                      },
                    })}
                    onBlur={() => {
                      trigger('Email')
                    }}
                    className={estilos.inputText}
                    type="text"
                    name="Email"
                    placeholder={placeholder && 'Email'}
                  />
                  {errors.Email && <p className={estilos.error ?? 'text-red-500'}>{errors.Email.message}</p>}
                </div>
              )}
            </section>

            <section className={estilos.section}>
              {city && (
                <div className="flex w-full flex-col">
                  <label className={estilos.label ?? 'hidden'} htmlFor="">
                    Municipio :
                  </label>
                  <select
                    onBlur={() => {
                      trigger('City')
                    }}
                    className={estilos.select}
                    name="City"
                    {...register('City', {
                      required: 'Municipio requerido',
                    })}
                  >
                    <option value="Ciudad" defaultValue>
                      Ciudad
                    </option>
                    {MunicipiosPR.map((municipio, index) => {
                      return (
                        <option key={index} value={municipio}>
                          {municipio}
                        </option>
                      )
                    })}
                  </select>
                </div>
              )}
              {products && (
                <div className="flex w-full flex-col">
                  <label className={estilos.label ?? 'hidden'} htmlFor="">
                    Productos :
                  </label>
                  <select
                    onBlur={() => {
                      trigger('Products')
                    }}
                    className={estilos.select}
                    name="Products"
                    {...register('Products')}
                  >
                    <option value="-">--</option>
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
            </section>

            <button className={!isValid ? estilos.invalidButton : estilos.button} type="submit" disabled={!isValid}>
              {boton ?? 'Enviar'}
            </button>
          </form>
        </FormProvider>
      </div>
    </>
  )
}

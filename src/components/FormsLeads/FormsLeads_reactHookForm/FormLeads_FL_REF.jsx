import { useMutation } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { campaings, translationsForm } from '../../../utils/data'
import { postFormRefered } from '../../../hooks/fetchDataApi'
import { getUTMs } from '../../../features/getUTM/getUTM'
import { useFieldArray, useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import Loading from '../../Loading/Loading'
import ThankYouPage_PR from '../../ThankYouPage/ThakYouPage_PR'

export default function FormsLeads_FL_REF({ id, estilos, boton, campaign, placeholder }) {
  const { locacion, traffic, lenguaje } = useSelector((state) => state.states)

  const [selectedProducts, setSelectedProducts] = useState([])
  const campaignList = campaings['fl']
  const utms = getUTMs(campaignList[campaign], traffic)
  const postFormLeadMutation = useMutation({
    mutationFn: (data) => postFormRefered(data, locacion),
    onSuccess: () => {
      reset(initialValues)
      setCurrentIndex(0)
    },
    onError: (error) => {
      console.error('Error al enviar el formulario', error)
    },
  })
  const initialValues = {
    Leads: [{ First_Name: '', Last_Name: '', Phone: '' }],
  }
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    register,
    trigger,
    setValue,
  } = useForm({
    mode: 'onBlur',
    defaultValues: initialValues,
  })
  const { fields, append, remove, insert } = useFieldArray({
    control,
    name: 'Leads',
  })
  const onSubmit = (data) => {
    const dataApi = { ...data, ...utms }
    postFormLeadMutation.mutate(dataApi)
    console.log(dataApi)
  }
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

  const [currentIndex, setCurrentIndex] = useState(0)

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }
  useEffect(() => {
    if (currentIndex >= fields.length) {
      setCurrentIndex(fields.length - 1)
    }
  }, [fields])
  return (
    <>
      <div className={estilos?.div ?? ''}>
        {postFormLeadMutation.isPending ? <Loading /> : ''}
        {postFormLeadMutation.isSuccess ? <ThankYouPage_PR /> : ''}
        <form onSubmit={handleSubmit(onSubmit)} className={estilos?.form} name={id ?? 'form'} id={id ?? 'form'} acceptCharset="UTF-8">
          <div className={estilos.divNA}>
            <div className="w-full">
              <label className={estilos.label ?? 'hidden'}>
                {translationsForm[lenguaje].firstName}
                <strong className={estilos.error ?? 'text-red-500'}>*</strong> :
              </label>
              <input
                {...register('Deal_Name', {
                  required: 'Nombre requerido',
                  pattern: {
                    value: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]+$/,
                    message: 'Enter only letters and/or spaces.',
                  },
                })}
                onBlur={() => {
                  trigger('Deal_Name') // Validar el campo en cada cambio
                }}
                className={`${estilos?.inputText} ${errors.Deal_Name ? 'border-red-500' : 'border-slate-500'} `}
                type="text"
                name="Deal_Name"
                placeholder={placeholder && 'Nombre del Cliente que Refiere'}
              />
              {errors.Deal_Name && <p className={estilos.error ?? 'self-start text-sm text-red-500'}>{errors.Deal_Name.message}</p>}
            </div>
          </div>

          <div className={estilos?.divDos ?? ''}>
            <div className="w-full">
              <label className={estilos.label ?? 'hidden'}>
                {translationsForm[lenguaje].phone}
                <strong className={estilos.error ?? 'text-red-500'}>*</strong> :
              </label>
              <input
                {...register('Deal_Phone', {
                  required: 'Telefono requerido',
                  pattern: {
                    value: /^[2-9][0-9]{9}$/,
                    message: 'Introduzca sólo números, no pueden empezar por 1 o 0, deben ser 10 dígitos',
                  },
                })}
                type="text"
                name="Deal_Phone"
                id="Deal_Phone"
                onBlur={() => {
                  trigger('Deal_Phone')
                }}
                className={`${estilos?.inputText} ${errors.Deal_Phone ? 'border-red-500' : 'border-slate-500'} `}
                placeholder={placeholder && 'Telefono del Cliente que Refiere'}
              />
              {errors.Deal_Phone && <p className={estilos.error ?? 'self-start text-sm text-red-500'}>{errors.Deal_Phone.message}</p>}
            </div>
          </div>
          <div className="rounded-2xl p-3">
            <h4 className="font-bold text-[#F89B24]">Incluye aquí tus referidos</h4>
            {fields.length > 0 && currentIndex >= 0 && (
              <div className="flex items-center">
                <div key={fields[currentIndex].id} className="flex-1 p-2 text-center text-2xl font-bold">
                  <div className="flex flex-col md:flex-row md:gap-5">
                    <input
                      {...register(`Leads.${currentIndex}.First_Name`, {
                        required: 'Nombre requerido',
                        pattern: {
                          value: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]+$/,
                          message: 'Enter only letters and/or spaces.',
                        },
                      })}
                      onBlur={() => {
                        trigger(`Leads.${currentIndex}.First_Name`) // Validar el campo en cada cambio
                      }}
                      className={`${estilos?.inputText2} ${errors?.Leads && errors.Leads[0]?.First_Name ? 'border-red-500' : 'border-slate-500'} `}
                      placeholder={placeholder && `Nombre del Referido ${currentIndex + 1}`}
                    />
                    <input
                      {...register(`Leads.${currentIndex}.Last_Name`, {
                        required: 'Apellido requerido',
                      })}
                      className={`${estilos?.inputText2} ${errors?.Leads && errors.Leads[0]?.Last_Name ? 'border-red-500' : 'border-slate-500'} `}
                      placeholder={placeholder && `Apellido del Referido ${currentIndex + 1}`}
                    />
                  </div>
                  <input
                    {...register(`Leads.${currentIndex}.Phone`, {
                      required: 'telefono requerido',
                      pattern: {
                        value: /^[2-9][0-9]{9}$/,
                        message: 'Enter only numbers, cannot start with 1 or 0, must be 10 digits',
                      },
                    })}
                    type="number"
                    className={`${estilos?.inputText} ${errors?.Leads && errors.Leads[0]?.Phone ? 'border-red-500' : 'border-slate-500'} `}
                    placeholder={placeholder && `Telefono del Referido ${currentIndex + 1}`}
                    onBlur={() => {
                      trigger(`Leads.${currentIndex}.Phone`)
                    }}
                  />
                </div>
              </div>
            )}

            <div className="flex justify-evenly p-2">
              {fields.map((_, index) => (
                <div key={index} className="relative flex space-x-2">
                  <button
                    onClick={() => goToSlide(index)}
                    type="button"
                    className={`flex h-6 w-6 cursor-pointer select-none items-center justify-center rounded-full ${
                      currentIndex === index ? 'bg-[#1D429B] text-white' : 'bg-[#F89B24] text-white'
                    }`}
                  >
                    {index + 1}
                    {fields.length != 1 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          remove(index)
                        }}
                        className="absolute right-[-16px] top-[-8px] flex h-4 w-4 cursor-pointer select-none items-center justify-center rounded-full text-sm text-white"
                      >
                        <span className="">❌</span>
                      </button>
                    )}
                  </button>
                </div>
              ))}

              {fields.length < 5 && (
                <button
                  type="button"
                  onClick={() =>
                    insert(2, {
                      First_Name: '',
                      Last_Name: '',
                    })
                  }
                  className="cursor-pointer font-bold text-[#1D429B]"
                >
                  Agregar +
                </button>
              )}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button className={!isValid ? estilos.invalidButton : estilos.button} type="submit" disabled={!isValid}>
              {boton ?? 'Enviar'}
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

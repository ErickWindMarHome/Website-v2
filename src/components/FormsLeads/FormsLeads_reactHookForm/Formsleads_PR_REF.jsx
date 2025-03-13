import { useMutation } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { campaings, translationsForm } from '../../../utils/data'
import { postFormRefered } from '../../../hooks/fetchDataApi'
import { getUTMs } from '../../../features/getUTM/getUTM'
import { useFieldArray, useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import Loading from '../../Loading/Loading'
import ThankYouPage_PR from '../../ThankYouPage/ThakYouPage_PR'

export default function FormsLeads_PR_REF({ id, estilos, boton, campaign, placeholder }) {
  const { locacion, traffic, lenguaje } = useSelector((state) => state.states)

  const campaignList = campaings['pr']
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
    getValues,
  } = useForm({
    mode: 'onBlur',
    defaultValues: initialValues,
  })

  const { fields, append } = useFieldArray({
    control,
    name: 'Leads',
  })

  const [currentIndex, setCurrentIndex] = useState(0)

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (currentIndex >= fields.length) {
      setCurrentIndex(fields.length - 1)
    }
  }, [currentIndex, fields])

  const onSubmit = (data) => {
    const hasEmptyFields = data.Leads.some((lead) => !lead.First_Name || !lead.Last_Name || !lead.Phone)
    if (hasEmptyFields) return

    const dataApi = { ...data, ...utms }
    postFormLeadMutation.mutate(dataApi)
    console.log(dataApi)
  }

  const addReferrer = () => {
    const currentLead = getValues(`Leads.${currentIndex}`)

    const currentErrors = {}
    if (!currentLead.First_Name) {
      currentErrors.First_Name = 'Nombre requerido'
    }
    if (!currentLead.Last_Name) {
      currentErrors.Last_Name = 'Apellido requerido'
    }
    if (!currentLead.Phone) {
      currentErrors.Phone = 'Teléfono requerido'
    }

    if (Object.keys(currentErrors).length > 0) {
      if (currentErrors.First_Name) {
        trigger(`Leads.${currentIndex}.First_Name`)
      }
      if (currentErrors.Last_Name) {
        trigger(`Leads.${currentIndex}.Last_Name`)
      }
      if (currentErrors.Phone) {
        trigger(`Leads.${currentIndex}.Phone`)
      }
      return
    }

    append({ First_Name: '', Last_Name: '', Phone: '' })
    setCurrentIndex(fields.length)
  }

  const hasErrors = fields.some((_, index) => {
    const lead = getValues(`Leads.${index}`)
    return !lead.First_Name || !lead.Last_Name || !lead.Phone
  })

  return (
    <div className={estilos?.div ?? ''}>
      {postFormLeadMutation.isPending && <Loading />}
      {postFormLeadMutation.isSuccess && <ThankYouPage_PR />}
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
                  message: 'Introduce solo letras y/o espacios.',
                },
              })}
              onBlur={() => trigger('Deal_Name')}
              className={`${estilos?.inputText} ${errors.Deal_Name ? 'border-red-500' : 'border-slate-500'}`}
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
              {translationsForm[lenguaje].email}
              <strong className={estilos.error ?? 'text-red-500'}>*</strong> :
            </label>
            <input
              {...register('Deal_Email', {
                required: 'Correo requerido',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                  message: 'Introduce un correo electrónico válido',
                },
              })}
              type="email"
              name="Deal_Email"
              id="Deal_Email"
              onBlur={() => trigger('Deal_Email')}
              className={`${estilos?.inputText} ${errors.Deal_Email ? 'border-red-500' : 'border-slate-500'}`}
              placeholder={placeholder && 'Correo del Cliente que Refiere'}
            />
            {errors.Deal_Email && <p className={estilos.error ?? 'self-start text-sm text-red-500'}>{errors.Deal_Email.message}</p>}
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
                required: 'Teléfono requerido',
                pattern: {
                  value: /^[2-9][0-9]{9}$/,
                  message: 'Introduce solo números, no pueden empezar por 1 o 0, deben ser 10 dígitos',
                },
              })}
              type="text"
              name="Deal_Phone"
              id="Deal_Phone"
              onBlur={() => trigger('Deal_Phone')}
              className={`${estilos?.inputText} ${errors.Deal_Phone ? 'border-red-500' : 'border-slate-500'}`}
              placeholder={placeholder && 'Teléfono del Cliente que Refiere'}
            />
            {errors.Deal_Phone && <p className={estilos.error ?? 'self-start text-sm text-red-500'}>{errors.Deal_Phone.message}</p>}
          </div>
        </div>
        {/* Referidos */}
        <div className="rounded-2xl bg-white p-3">
          <h4 className="font-bold text-[#F89B24]">Incluye aquí tus 5 referidos</h4>
          {fields.length > 0 && currentIndex >= 0 && currentIndex < fields.length && (
            <div className="flex items-center">
              <div key={fields[currentIndex]?.id} className="flex-1 p-2 text-center text-2xl font-bold">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-2">
                  <input
                    {...register(`Leads.${currentIndex}.First_Name`, {
                      required: 'Nombre requerido',
                      pattern: {
                        value: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]+$/,
                        message: 'Introduce solo letras y/o espacios.',
                      },
                    })}
                    onBlur={() => trigger(`Leads.${currentIndex}.First_Name`)}
                    className={`${estilos?.inputText2} ${errors?.Leads && errors.Leads[currentIndex]?.First_Name ? 'border-red-500' : 'border-slate-500'}`}
                    placeholder={placeholder && `Nombre del Referido ${currentIndex + 1}`}
                  />
                  <input
                    {...register(`Leads.${currentIndex}.Last_Name`, {
                      required: 'Apellido requerido',
                    })}
                    className={`${estilos?.inputText2} ${errors?.Leads && errors.Leads[currentIndex]?.Last_Name ? 'border-red-500' : 'border-slate-500'}`}
                    placeholder={placeholder && `Apellido del Referido ${currentIndex + 1}`}
                  />
                  <input
                    {...register(`Leads.${currentIndex}.Phone`, {
                      required: 'Teléfono requerido',
                      pattern: {
                        value: /^[2-9][0-9]{9}$/,
                        message: 'Introduce solo números, no pueden empezar por 1 o 0, deben ser 10 dígitos',
                      },
                    })}
                    type="number"
                    className={`${estilos?.inputText} ${errors?.Leads && errors.Leads[currentIndex]?.Phone ? 'border-red-500' : 'border-slate-500'}`}
                    placeholder={placeholder && `Teléfono del Referido ${currentIndex + 1}`}
                    onBlur={() => trigger(`Leads.${currentIndex}.Phone`)}
                  />
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col">
            <div className="flex justify-evenly p-2">
              {fields.map((_, index) => (
                <div key={index} className="relative flex space-x-2">
                  <button
                    onClick={() => goToSlide(index)}
                    type="button"
                    className={`flex h-6 w-6 cursor-pointer select-none items-center justify-center rounded-full ${
                      currentIndex === index ? 'bg-[#F89B24] text-white' : 'bg-[#1D429B] text-white'
                    }`}
                  >
                    {index + 1}
                  </button>
                </div>
              ))}
              {fields.length < 5 && (
                <button
                  type="button"
                  onClick={addReferrer}
                  className={`cursor-pointer rounded-full border-2 border-[#F89B24] px-4 py-2 font-bold text-[#1D429B] ${hasErrors ? 'cursor-not-allowed opacity-50' : ''}`}
                  disabled={hasErrors}
                >
                  Agregar +
                </button>
              )}
            </div>
            {fields.length < 5 && (
              <span className="mt-4 w-full text-center text-sm italic">
                💠 Da clic en &quot;Agregar&quot; para añadir más referidos, puedes agregar hasta 5.
              </span>
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
  )
}

import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useFieldArray, useForm } from 'react-hook-form'
import { getUTMs } from '../../../features/getUTM/getUTM'
import { campaings, translationsForm } from '../../../utils/data'
import { postFormRefered, postValidationNumber } from '../../../hooks/fetchDataApi'
import Loading from '../../Loading/Loading'

export default function FormsLeads_PR_REF_Raincoat({ id, estilos, boton, campaign, placeholder, modalSuccess = () => {} }) {
  const { locacion, traffic, lenguaje } = useSelector((state) => state.states)
  const campaignList = campaings['pr']
  const utms = getUTMs(campaignList[campaign], traffic)

  const postFormLeadMutation = useMutation({
    mutationFn: (data) => postFormRefered(data, locacion),
    onSuccess: () => {
      reset(initialValues)
      setCurrentIndex(0)
      modalSuccess(true)
    },
    onError: (error) => {
      console.error('Error al enviar el formulario', error)
    },
  })

  const postValidationNumberMutation = useMutation({
    mutationFn: (phoneNumber_) => postValidationNumber([phoneNumber_]),
    onSuccess: () => {
      console.log('Número de teléfono validado')
    },
    onError: (error) => {
      console.error('Error al validar el número de teléfono', error)
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
  } = useForm({
    mode: 'onBlur',
    defaultValues: initialValues,
  })

  const { fields } = useFieldArray({
    control,
    name: 'Leads',
  })

  const [currentIndex, setCurrentIndex] = useState(0)
  const [validatedNumbers, setValidatedNumbers] = useState(new Set())

  useEffect(() => {
    if (currentIndex >= fields.length) {
      setCurrentIndex(fields.length - 1)
    }
  }, [currentIndex, fields])

  const hasDuplicatePhoneNumbers = (leads) => {
    const phoneNumbers = leads.map((lead) => lead.Phone).filter((phone) => phone !== '')
    const uniquePhoneNumbers = new Set(phoneNumbers)
    return phoneNumbers.length !== uniquePhoneNumbers.size
  }

  const validatePhoneNumbers = async (leads) => {
    const validationPromises = leads.map(async (lead, index) => {
      const { Phone } = lead
      if (Phone.length === 10 && !validatedNumbers.has(Phone)) {
        try {
          const result = await postValidationNumberMutation.mutateAsync(Phone)
          const contactability = result?.data?.results[0]?.Phone_Contactability
          if (contactability === 'Inválida') {
            return `El número del referido ${index + 1} es inválido.`
          }
          setValidatedNumbers((prev) => new Set(prev).add(Phone))
        } catch {
          return 'Error al validar el número. Inténtalo de nuevo.'
        }
      }
      return null
    })

    const validationResults = await Promise.all(validationPromises)
    return validationResults.filter((result) => result)
  }

  const onSubmit = async (data) => {
    const filteredLeads = data.Leads.filter((lead) => lead.First_Name || lead.Last_Name || lead.Phone)
    if (filteredLeads.length === 0) {
      alert('Debes incluir al menos un referido válido.')
      return
    }

    const hasDuplicates = hasDuplicatePhoneNumbers(filteredLeads)
    if (hasDuplicates) {
      alert('Los números de teléfono no pueden repetirse.')
      return
    }

    const phoneValidationErrors = await validatePhoneNumbers(filteredLeads)
    if (phoneValidationErrors.length > 0) {
      alert(phoneValidationErrors.join('\n'))
      return
    }

    // Actualizar el objeto para la API
    const dataApi = { ...data, Leads: filteredLeads, ...utms }
    postFormLeadMutation.mutate(dataApi)
    console.log(dataApi)
  }

  return (
    <div className={estilos?.div ?? ''}>
      {postFormLeadMutation.isPending && <Loading />}
      <form onSubmit={handleSubmit(onSubmit)} className={estilos?.form} name={id ?? 'form'} id={id ?? 'form'} acceptCharset="UTF-8">
        <div className={estilos.divNA}>
          <div className="w-full">
            <p className="my-2 text-left text-lg font-bold text-[#F89B24]">Tus datos</p>
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
              className={`${estilos?.inputText} ${errors.Deal_Name && 'border-red-500'}`}
              type="text"
              name="Deal_Name"
              placeholder="Tu Nombre"
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
              className={`${estilos?.inputText} ${errors.Deal_Email && 'border-red-500'}`}
              placeholder="Tu Correo Electrónico"
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
              className={`${estilos?.inputText} ${errors.Deal_Phone && 'border-red-500'}`}
              placeholder="Tu Teléfono"
            />
            {errors.Deal_Phone && <p className={estilos.error ?? 'self-start text-sm text-red-500'}>{errors.Deal_Phone.message}</p>}
          </div>
        </div>
        {/* Referidos */}
        <div className="border-t-2 border-dotted bg-white">
          {[0, 1, 2, 3, 4].map((index) => {
            const isRequired = campaign === 'ReferidosNew' ? index === 0 : true
            return (
              <div
                key={index}
                className="flex items-center border-b-2 border-dotted border-slate-300 p-2 py-5 focus-within:bg-gradient-to-b focus-within:from-orange-50 focus-within:to-transparent"
              >
                <div className="flex-1 text-center text-2xl font-bold">
                  <p className="text-left text-lg text-[#F89B24]">Incluye aquí tu {index + 1} referido</p>
                  <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-2">
                    <div>
                      {errors?.Leads && errors.Leads[index]?.First_Name && (
                        <p className={estilos.error ?? 'self-start text-center text-sm text-red-500'}>{errors.Leads[index].First_Name.message}</p>
                      )}
                      <input
                        {...register(`Leads.${index}.First_Name`, {
                          required: isRequired,
                          pattern: {
                            value: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]+$/,
                            message: 'Introduce solo letras y/o espacios.',
                          },
                        })}
                        onBlur={() => trigger(`Leads.${index}.First_Name`)}
                        className={`${estilos?.inputText2} ${errors?.Leads && errors.Leads[index]?.First_Name && 'border-red-500'}`}
                        placeholder={placeholder && `Nombre del Referido ${index + 1}`}
                      />
                    </div>
                    <div>
                      {errors?.Leads && errors.Leads[index]?.Last_Name && (
                        <p className={estilos.error ?? 'self-start text-sm text-red-500'}>{errors.Leads[index].Last_Name.message}</p>
                      )}
                      <input
                        {...register(`Leads.${index}.Last_Name`, {
                          required: isRequired,
                        })}
                        className={`${estilos?.inputText2} ${errors?.Leads && errors.Leads[index]?.Last_Name && 'border-red-500'}`}
                        placeholder={placeholder && `Apellido del Referido ${index + 1}`}
                      />
                    </div>
                    <div className="lg:col-span-2">
                      {errors?.Leads && errors.Leads[index]?.Phone && (
                        <p className={estilos.error ?? 'self-start text-sm text-red-500'}>{errors.Leads[index].Phone.message}</p>
                      )}
                      <input
                        {...register(`Leads.${index}.Phone`, {
                          required: isRequired,
                          pattern: {
                            value: /^[2-9][0-9]{9}$/,
                            message: 'Introduce solo números, no pueden empezar por 1 o 0, deben ser 10 dígitos',
                          },
                        })}
                        type="text"
                        className={`${estilos?.inputText} ${errors?.Leads && errors.Leads[index]?.Phone && 'border-red-500'}`}
                        placeholder={placeholder && `Teléfono del Referido ${index + 1}`}
                        onBlur={() => trigger(`Leads.${index}.Phone`)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
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

import { useMutation } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { campaings, translationsForm } from '../../utils/data'
import { postFormReferedTecnicos } from '../../hooks/fetchDataApi'
import { getUTMs } from '../../features/getUTM/getUTM'
import { useFieldArray, useForm } from 'react-hook-form'
import { useState } from 'react'
import Loading from '../Loading/Loading'
import ThankYouPage_PR from '../ThankYouPage/ThakYouPage_PR'
import { MunicipiosPR } from '../../utils/data'

export default function FormTecnicos({ id, estilos, boton, campaign, placeholder }) {
  const { locacion, traffic, lenguaje } = useSelector((state) => state.states)

  const campaignList = campaings['pr']
  const utms = getUTMs(campaignList[campaign], 'Employee Referrall(Email)')
  const postFormLeadMutation = useMutation({
    mutationFn: (data) => postFormReferedTecnicos(data, locacion),
    onSuccess: () => {
      reset(initialValues)
      setCurrentIndex(0)
    },
    onError: (error) => {
      let userErrorMessage = 'Ocurrió un error inesperado.'
      alert(userErrorMessage)
      console.error('Error al enviar el formulario', error)
    },
  })

  // Función para extraer el índice del lead del mensaje de error

  const initialValues = {
    Installers: [{ First_Name: '', Last_Name: '', Phone: '', Email: '', Rol: '', City: '' }],
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
    name: 'Installers',
  })
  const onSubmit = (data) => {
    const hasEmptyFields = data.Installers.some((lead) => !lead.First_Name || !lead.Last_Name || !lead.Phone)

    if (hasEmptyFields) {
      alert('Revisa tu referido cuidadosamente, algunos campos están vacíos.')
      return
    }
    const dataApi = { ...data, ...utms }
    console.log(dataApi)

    postFormLeadMutation.mutate(dataApi)
    console.log(dataApi)
  }

  const [currentIndex, setCurrentIndex] = useState(0)

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
                {...register('Installer_First_Name', {
                  required: 'Nombre requerido',
                  pattern: {
                    value: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]+$/,
                    message: 'Enter only letters and/or spaces.',
                  },
                })}
                onBlur={() => {
                  trigger('Installer_First_Name') // Validar el campo en cada cambio
                }}
                className={`${estilos?.inputText} ${errors.Installer_First_Name ? 'border-red-500' : 'border-slate-500'} `}
                type="text"
                name="Installer_First_Name"
                placeholder={placeholder && 'Tu Nombre'}
              />
              {errors.Installer_First_Name && (
                <p className={estilos.error ?? 'self-start text-sm text-red-500'}>{errors.Installer_First_Name.message}</p>
              )}
            </div>
            <div className="w-full">
              <label className={estilos.label ?? 'hidden'}>
                {translationsForm[lenguaje].firstName}
                <strong className={estilos.error ?? 'text-red-500'}>*</strong> :
              </label>
              <input
                {...register('Installer_Last_Name', {
                  required: 'Nombre requerido',
                  pattern: {
                    value: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]+$/,
                    message: 'Enter only letters and/or spaces.',
                  },
                })}
                onBlur={() => {
                  trigger('Installer_Last_Name') // Validar el campo en cada cambio
                }}
                className={`${estilos?.inputText} ${errors.Installer_Last_Name ? 'border-red-500' : 'border-slate-500'} `}
                type="text"
                name="Installer_Last_Name"
                placeholder={placeholder && 'Tu Apellido'}
              />
              {errors.Installer_Last_Name && (
                <p className={estilos.error ?? 'self-start text-sm text-red-500'}>{errors.Installer_Last_Name.message}</p>
              )}
            </div>
          </div>
          <div className={estilos?.divDos ?? ''}>
            <div className="w-full">
              <label className={estilos.label ?? 'hidden'}>
                {translationsForm[lenguaje].phone}
                <strong className={estilos.error ?? 'text-red-500'}>*</strong> :
              </label>
              <input
                {...register('Installer_Email', {
                  required: 'Correo requerido',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                    message: 'Introduzca un correo electronico valido',
                  },
                })}
                type="email"
                name="Installer_Email"
                id="Installer_Email"
                onBlur={() => {
                  trigger('Installer_Email')
                }}
                className={`${estilos?.inputText} ${errors.Installer_Email ? 'border-red-500' : 'border-slate-500'} `}
                placeholder={placeholder && 'Tu Correo Electrónico'}
              />
              {errors.Installer_Email && <p className={estilos.error ?? 'self-start text-sm text-red-500'}>{errors.Installer_Email.message}</p>}
            </div>
          </div>
          <div className="rounded-2xl bg-white p-3">
            <h4 className="font-bold text-[#F89B24]">Incluye aquí tu referido</h4>

            <div className="flex items-center">
              <div
                key={fields[currentIndex]?.id} // Asegúrate de que fields[currentIndex] esté definido
                className="flex-1 p-2 text-center text-2xl font-bold"
              >
                <div className="flex flex-col md:flex-row md:gap-5">
                  <input
                    {...register(`Installers.${currentIndex}.First_Name`, {
                      required: 'Nombre requerido',
                      pattern: {
                        value: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]+$/,
                        message: 'Enter only letters and/or spaces.',
                      },
                    })}
                    onBlur={() => {
                      trigger(`Installers.${currentIndex}.First_Name`) // Validar el campo en cada cambio
                    }}
                    className={`${estilos?.inputText2} ${
                      errors?.Installers && errors.Installers[currentIndex]?.First_Name ? 'border-red-500' : 'border-slate-500'
                    }`}
                    placeholder={placeholder && `Nombre del Referido`}
                  />
                  <input
                    {...register(`Installers.${currentIndex}.Last_Name`, {
                      required: 'Apellido requerido',
                    })}
                    className={`${estilos?.inputText2} ${
                      errors?.Installers && errors.Installers[currentIndex]?.Last_Name ? 'border-red-500' : 'border-slate-500'
                    }`}
                    placeholder={placeholder && `Apellido del Referido`}
                  />
                </div>
                <input
                  {...register(`Installers.${currentIndex}.Phone`, {
                    required: 'telefono requerido',
                    pattern: {
                      value: /^[2-9][0-9]{9}$/,
                      message: 'Enter only numbers, cannot start with 1 or 0, must be 10 digits',
                    },
                  })}
                  type="number"
                  className={`${estilos?.inputText} ${errors?.Installers && errors.Installers[currentIndex]?.Phone ? 'border-red-500' : 'border-slate-500'}`}
                  placeholder={placeholder && `Telefono del Referido`}
                  onBlur={() => {
                    trigger(`Installers.${currentIndex}.Phone`)
                  }}
                />
                <input
                  {...register(`Installers.${currentIndex}.Email`, {
                    required: 'Email requerido',
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                      message: 'Introduzca un correo electronico valido',
                    },
                  })}
                  type="email"
                  className={`${estilos?.inputText} ${errors?.Installers && errors.Installers[currentIndex]?.Phone ? 'border-red-500' : 'border-slate-500'}`}
                  placeholder={placeholder && `Email del Referido`}
                  onBlur={() => {
                    trigger(`Installers.${currentIndex}.Email`)
                  }}
                />

                <select
                  {...register(`Installers.${currentIndex}.Rol`, {
                    required: 'Rol requerido',
                  })}
                  className={`${estilos?.select} ${errors?.Installers && errors.Installers[currentIndex]?.Rol ? 'border-red-500' : 'border-slate-500'}`}
                >
                  <option
                    className={`${estilos?.option} ${errors?.Installers && errors.Installers[currentIndex]?.Rol ? 'border-red-500' : 'border-slate-500'}`}
                    value=""
                  >
                    Seleccionar rol
                  </option>
                  <option
                    className={`${estilos?.option} ${errors?.Installers && errors.Installers[currentIndex]?.Rol ? 'border-red-500' : 'border-slate-500'}`}
                    value="Técnico de instalación"
                  >
                    Técnico de instalación
                  </option>
                  <option
                    className={`${estilos?.option} ${errors?.Installers && errors.Installers[currentIndex]?.Rol ? 'border-red-500' : 'border-slate-500'}`}
                    value="Técnico de Roofing"
                  >
                    Técnico de roofing
                  </option>
                </select>
                {errors?.Installers && errors.Installers[currentIndex]?.Rol && (
                  <p className={estilos.error}>{errors.Installers[currentIndex].Rol.message}</p>
                )}

                <select
                  {...register(`Installers.${currentIndex}.City`, {
                    required: 'Ciudad requerida',
                  })}
                  className={`${estilos?.select} ${errors?.Installers && errors.Installers[currentIndex]?.City ? 'border-red-500' : 'border-slate-500'}`}
                >
                  <option
                    className={`${estilos?.option} ${errors?.Installers && errors.Installers[currentIndex]?.Rol ? 'border-red-500' : 'border-slate-500'}`}
                    value=""
                  >
                    Seleccionar ciudad
                  </option>
                  {MunicipiosPR.map((municipio, index) => (
                    <option key={index} value={municipio}>
                      {municipio}
                    </option>
                  ))}
                </select>
                {errors?.Installers && errors.Installers[currentIndex]?.City && (
                  <p className={estilos.error}>{errors.Installers[currentIndex].City.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className={estilos.divBo}>
            <button className={!isValid ? estilos.invalidButton : estilos.button} type="submit" disabled={!isValid}>
              {boton ?? 'Enviar'}
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

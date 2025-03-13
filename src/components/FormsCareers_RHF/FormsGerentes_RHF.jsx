import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import Loading from '../Loading/Loading'
import ThankYouPage_PR from '../ThankYouPage/ThakYouPage_PR'
import { campaings, MunicipiosPR } from '../../utils/data'
import { getUTMs } from '../../features/getUTM/getUTM'
import { postFormRecruitment } from '../../hooks/fetchDataApi'
import { Link } from 'react-router-dom'
export default function FormsGerentes_RHF({ id, campaign, recruitment, estilos, boton }) {
  const { traffic } = useSelector((state) => state.states)
  const campaignList = campaings['pr']
  const utms = getUTMs(campaignList[campaign], traffic)
  const postFormLeadMutation = useMutation({
    mutationFn: (data) => postFormRecruitment(data, recruitment),
    onSuccess: () => {
      reset(InitialValuesGerentes)
    },
    onError: (error) => {
      console.error('error al enviar el formulario', error)
    },
  })

  const InitialValuesGerentes = {
    Source: 'Website',
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
    defaultValues: InitialValuesGerentes,
  })
  const onSubmit = (data) => {
    const { UTM_Source, UTM_Campaign, UTM_Medium, UTM_Term, UTM_Content } = utms
    postFormLeadMutation.mutate({ ...data, UTM_Source, UTM_Campaign, UTM_Medium, UTM_Term, UTM_Content })
  }
  const [isChecked, setIsChecked] = useState(true)

  return (
    <>
      {' '}
      <div className={estilos?.div ?? ''}>
        {postFormLeadMutation.isPending ? <Loading /> : ''}
        {postFormLeadMutation.isSuccess ? <ThankYouPage_PR /> : ''}

        <form onSubmit={handleSubmit(onSubmit)} name="form" method="POST" acceptCharset="UTF-8" className={estilos?.form}>
          <div className={estilos?.divDos ?? ''}>
            <label className={estilos.label ?? 'hidden'}>
              {' '}
              Nombre
              <strong className="text-red-500">*</strong>
            </label>
            <input
              {...register('First_Name', {
                required: 'Nombre requerido',
                pattern: {
                  value: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]+$/,
                  message: 'Introduzca solo letras y/o espacios.',
                },
              })}
              onBlur={() => {
                trigger('First_Name') // Validar el campo en cada cambio
              }}
              className={estilos.inputText}
              type="text"
              maxLength="255"
              placeholder="Nombre"
            />
            {errors.First_Name && <p className="self-start text-sm text-red-500">{errors.First_Name.message}</p>}
            <label className={estilos.label ?? 'hidden'}>
              Apellido
              <strong className="text-red-500">*</strong>
            </label>

            <input
              {...register('Last_Name', {
                required: 'Apellido requerido',
                pattern: {
                  value: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]+$/,
                  message: 'Introduzca solo letras y/o espacios.',
                },
              })}
              onBlur={() => {
                trigger('Last_Name') // Validar el campo en cada cambio
              }}
              className={estilos.inputText}
              type="text"
              maxLength="255"
              name="Last_Name"
              placeholder="Apellido"
            />
            {errors.Last_Name && <p className="self-start text-sm text-red-500">{errors.Last_Name.message}</p>}
            {/* <!--Email--> */}
            <label className={estilos.label ?? 'hidden'}>
              Email
              <strong className="text-red-500">*</strong>
            </label>
          </div>

          <div className={estilos?.divDos ?? ''}>
            <input
              {...register('Email', {
                required: 'Email requerido',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Introduzca un correo electrónico válido.',
                },
              })}
              onBlur={() => {
                trigger('Email') // Validar el campo en cada cambio
              }}
              className={estilos.inputText}
              type="email"
              maxLength="255"
              name="Email"
              placeholder="Email"
            />
            {errors.Email && <p className="self-start text-sm text-red-500">{errors.Email.message}</p>}

            <label className={estilos.label ?? 'hidden'}>
              Teléfono
              <strong className="text-red-500">*</strong>
            </label>
            <input
              {...register('Phone', {
                required: 'Teléfono requerido',
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: 'Introduzca un número de teléfono válido.',
                },
              })}
              onBlur={() => {
                trigger('Phone') // Validar el campo en cada cambio
              }}
              className={estilos.inputText}
              type="number"
              name="Phone"
              id="international_PhoneNumber_countrycode"
              placeholder="Teléfono"
            />
            {errors.PhoneNumber_countrycode && <p className="self-start text-sm text-red-500">{errors.PhoneNumber_countrycode.message}</p>}
          </div>
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
            <option defaultValue>Municipio</option>
            {MunicipiosPR.map((municipio, index) => {
              return (
                <option key={index} value={municipio}>
                  {municipio}
                </option>
              )
            })}
          </select>

          <div className={estilos?.DivTres ?? 'hidden'}>
            <span className={'lg:no- mr-2 flex h-4 w-4 items-center justify-center rounded-full border border-none lg:h-[30px] lg:w-[30px]'}>
              <svg width="20" height="20" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.2831 28.89C23.1974 28.89 29.6131 22.4742 29.6131 14.56C29.6131 6.64576 23.1974 0.230042 15.2831 0.230042C7.36889 0.230042 0.953125 6.64576 0.953125 14.56C0.953125 22.4742 7.36889 28.89 15.2831 28.89Z"
                  fill="#EDEDEE"
                />
                <path
                  d="M15.2834 21.32C19.0169 21.32 22.0434 18.2934 22.0434 14.56C22.0434 10.8266 19.0169 7.80005 15.2834 7.80005C11.55 7.80005 8.52344 10.8266 8.52344 14.56C8.52344 18.2934 11.55 21.32 15.2834 21.32Z"
                  fill="#0038A8"
                />
              </svg>
            </span>
            <p className={estilos?.p ?? ''}>
              He leído y acepto <strong className={estilos?.strong ?? ''}>la política de privacidad. </strong>
              <span className={estilos?.span ?? ''}>
                para Better Solar Savings para enviar mensajes pregrabados de marketing y llamadas/textos automáticamente a mi número de teléfono
                anterior, inslcuso si está en alguna lista de no llamar. El consentimiento no es una condición de compra. Puede darse de baja en
                cualquier momento (ver términos y condiciones). Se pueden aplicar tarifas de mensajes/datos.
              </span>
            </p>
          </div>

          <div className={estilos?.DivCuatro ?? ''}>
            {' '}
            <span className={estilos?.pp ?? ''}>
              <Link to="/pr/politica-de-privacidad" target="_blank" rel="noopener noreferrer">
                Al dar clic en enviar aceptas el{' '}
                <strong>
                  {' '}
                  <br className="md:hidden" />
                  tratamiento de datos
                </strong>
              </Link>
            </span>
          </div>
          <button className={!isValid ? estilos.invalidButton : estilos.button} type="submit" disabled={!isValid}>
            {boton ?? 'Enviar'}
          </button>
        </form>
      </div>
    </>
  )
}

import { useSelector } from 'react-redux'
import { getUTMs } from '../../../features/getUTM/getUTM'
import { campaings } from '../../../utils/data'
import { useMutation } from '@tanstack/react-query'
import { postFormRefered } from '../../../hooks/fetchDataApi'
import { useForm } from 'react-hook-form'
import ThankYouPage_PR from '../../ThankYouPage/ThakYouPage_PR'
import Loading from '../../Loading/Loading'

function FormLeads_PR_RHF_Cybertruck({ setError = () => {} }) {
  const { traffic, locacion } = useSelector((state) => state.states)

  const utms = getUTMs(campaings['pr']['Firma_y_pisalo_cyber_x2'], traffic)

  const postFormLeadMutation = useMutation({
    mutationFn: (data) => postFormRefered(data, locacion),
    onSuccess: () => {},
    onError: (error) => {
      console.error('Error al enviar el formulario', error)
    },
  })

  const onSubmit = (data) => {
    const cleanedLeads = data.Leads.filter((lead) => lead.First_Name && lead.Last_Name && lead.Phone)
    if (cleanedLeads.length < 5) {
      console.error('Debe completar los 5 referidos.')
      return
    }

    const dataApi = { ...data, Leads: cleanedLeads, ...utms }
    delete dataApi.Tyt
    postFormLeadMutation.mutate(dataApi)
  }

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  })

  if (Object.keys(errors).length > 0 || (errors.Leads && errors.Leads.some((leadError) => Object.keys(leadError).length > 0))) {
    const totalErrors = Object.keys(errors).length + (errors.Leads ? errors.Leads.reduce((acc, lead) => acc + Object.keys(lead).length, 0) : 0)
    setError(totalErrors - 1)
  }

  const ReferredSection = ({ current = 1 }) => {
    return (
      <>
        <h1 className="py-4 font-medium text-white lg:text-2xl">Incluye aquí tu referido #{current} </h1>
        <div className="w-full">
          <input
            {...register(`Leads.${current}.First_Name`, {
              required: 'Este campo es requerido.',
              pattern: {
                value: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]+$/,
                message: 'Patrón no válido. Solo se permiten letras y espacios.',
              },
            })}
            type="text"
            placeholder={`Nombre del referido ${current}`}
            className={`w-full rounded-lg border px-5 py-1 text-black outline-none focus:border focus:border-gray-400 lg:text-lg ${errors.Leads?.[current]?.First_Name ? 'border-red-500' : 'border-white'}`}
          />
          {errors.Leads?.[current]?.First_Name && <p className="self-start text-sm text-red-500">{errors.Leads?.[current]?.First_Name?.message}</p>}
        </div>
        <div className="w-full">
          <input
            {...register(`Leads.${current}.Last_Name`, {
              required: 'Este campo es requerido.',
              pattern: {
                value: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]+$/,
                message: 'Patrón no válido. Solo se permiten letras y espacios.',
              },
            })}
            type="text"
            placeholder={`Apellido del referido ${current}`}
            className={`w-full rounded-lg border px-5 py-1 text-black outline-none focus:border focus:border-gray-400 lg:text-lg ${errors.Leads?.[current]?.Last_Name ? 'border-red-500' : 'border-white'}`}
          />
          {errors.Leads?.[current]?.Last_Name && <p className="self-start text-sm text-red-500">{errors.Leads?.[current]?.Last_Name?.message}</p>}
        </div>
        <div className="w-full">
          <input
            {...register(`Leads.${current}.Phone`, {
              required: 'Este campo es requerido.',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Número de teléfono no válido. Debe contener 10 dígitos.',
              },
            })}
            type="text"
            maxLength={10}
            placeholder={`Teléfono del referido ${current}`}
            className={`w-full rounded-lg border px-5 py-1 text-black outline-none focus:border focus:border-gray-400 lg:text-lg ${errors.Leads?.[current]?.Phone ? 'border-red-500' : 'border-white'}`}
          />
          {errors.Leads?.[current]?.Phone && <p className="self-start text-sm text-red-500">{errors.Leads?.[current]?.Phone?.message}</p>}
        </div>
      </>
    )
  }

  return (
    <>
      {postFormLeadMutation.isPending && <Loading />}
      {postFormLeadMutation.isSuccess && <ThankYouPage_PR />}
      <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit(onSubmit)} id="Firma_y_pisalo_cyber_x2">
        {/* Refiere */}
        <div className="flex w-full flex-col items-center justify-center gap-2 from-[#000000] to-[#0c0c0c33] lg:bg-gradient-to-t lg:p-8">
          <div className="w-full">
            <input
              {...register('Deal_Name', {
                required: 'Este campo es requerido.',
                pattern: {
                  value: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]+$/,
                  message: 'Valor no válido. Solo se permiten letras y espacios.',
                },
              })}
              type="text"
              placeholder="Tu Nombre"
              className={`w-full rounded-lg border px-5 py-1 text-black outline-none focus:border focus:border-gray-400 lg:text-lg ${errors.Deal_Name ? 'border-red-500' : 'border-white'}`}
            />
            {errors.Deal_Name && <p className="self-start text-sm text-red-500">{errors.Deal_Name.message}</p>}
          </div>
          <div className="w-full">
            <input
              {...register('Deal_Email', {
                required: 'Este campo es requerido.',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Correo electrónico no válido.',
                },
              })}
              type="email"
              placeholder="Tu Correo Electrónico"
              className={`w-full rounded-lg border px-5 py-1 text-black outline-none focus:border focus:border-gray-400 lg:text-lg ${errors.Deal_Email ? 'border-red-500' : 'border-white'}`}
            />
            {errors.Deal_Email && <p className="self-start text-sm text-red-500">{errors.Deal_Email.message}</p>}
          </div>
          <div className="w-full">
            <input
              {...register('Deal_Phone', {
                required: 'Este campo es requerido.',
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: 'Número de teléfono no válido. Debe contener 10 dígitos.',
                },
              })}
              type="tel"
              placeholder="Tu Teléfono"
              className={`w-full rounded-lg border px-5 py-1 text-black outline-none focus:border focus:border-gray-400 lg:text-lg ${errors.Deal_Phone ? 'border-red-500' : 'border-white'}`}
            />
            {errors.Deal_Phone && <p className="self-start text-sm text-red-500">{errors.Deal_Phone.message}</p>}
          </div>
        </div>

        {/* Referidos */}
        <div className="flex w-full flex-col items-center justify-center gap-2 from-[#000000] to-[#0c0c0c33] lg:bg-gradient-to-t lg:px-8">
          {[1, 2, 3, 4, 5].map((ref, index) => (
            <ReferredSection current={ref} key={index} />
          ))}
        </div>

        <div className="relative mt-[10px] flex w-full justify-center">
          <img
            src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/CybertruckPr-X2/LogoCybertruck.webp"
            alt="Logo Cybertruck; Tesla Auto"
            className="absolute -top-10 w-[60%] opacity-15 lg:opacity-5"
          />
          <div className="absolute left-0 top-0 h-full w-full" />
          <button type="submit" className="sticky z-10 cursor-pointer rounded-lg border border-white bg-white/20 px-5 py-2 text-lg text-white">
            Enviar
          </button>
        </div>
      </form>
    </>
  )
}

export default FormLeads_PR_RHF_Cybertruck

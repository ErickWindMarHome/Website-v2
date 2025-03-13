import { useSelector } from 'react-redux'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import Loading from '../Loading/Loading'
import ThankYouPage_PR from '../ThankYouPage/ThakYouPage_PR'
import { campaings } from '../../utils/data'
import { getUTMs } from '../../features/getUTM/getUTM'
import { postFormRecruitment } from '../../hooks/fetchDataApi'

export default function FormsCarreers_RHF({ Rol, id, campaign, recruitment }) {
  const { traffic } = useSelector((state) => state.states)
  const campaignList = campaings['pr']
  const utms = getUTMs(campaignList[campaign], traffic)
  const postFormLeadMutation = useMutation({
    mutationFn: (data) => postFormRecruitment(data, recruitment),
    onSuccess: () => {
      reset(initialValuesInstaller)
    },
    onError: (error) => {
      console.error('error al enviar el formulario', error)
    },
  })

  const initialValuesInstaller = {
    Rol: Rol,
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
    defaultValues: initialValuesInstaller,
  })
  const onSubmit = (data) => {
    const { UTM_Source, UTM_Campaign, UTM_Medium, UTM_Term, UTM_Content } = utms
    postFormLeadMutation.mutate({ ...data, UTM_Source, UTM_Campaign, UTM_Medium, UTM_Term, UTM_Content })
  }

  return (
    <>
      <div>
        <div className="relative ml-[10%] flex w-[80%] flex-col items-center justify-center p-[3%]">
          <div className="absolute inset-0 bg-[#001d65] opacity-[80%]"></div>
          <img
            className="relative w-[90%]"
            src="https://windmar-website-cms.s3.amazonaws.com/Components/FormsCareers_RHF/Banner.webp"
            alt="¡energiza tu carrera hoy!"
          />
          {postFormLeadMutation.isPending ? <Loading /> : ''}
          {postFormLeadMutation.isSuccess ? <ThankYouPage_PR /> : ''}
          <form onSubmit={handleSubmit(onSubmit)} name="form" id={id} method="POST" className="relative w-[100%]">
            <div className="flex w-[100%] pt-[10%]">
              <div className="mr-[5%] w-[50%]">
                <label className="text-white">
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
                  type="text"
                  maxLength="255"
                  placeholder="Nombre"
                  className="h-10 w-full"
                />
                {errors.First_Name && <p className="self-start text-sm text-red-500">{errors.First_Name.message}</p>}
              </div>
              <div className="mr-[5%] w-[50%]">
                <label className="text-white">
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
                  type="text"
                  maxLength="255"
                  name="Last_Name"
                  placeholder="Apellido"
                  className="h-10 w-full"
                />
                {errors.Last_Name && <p className="self-start text-sm text-red-500">{errors.Last_Name.message}</p>}
              </div>
            </div>
            {/* <!--Email--> */}
            <div className="w-[100%] pt-[5%]">
              <label className="text-white">
                Email
                <strong className="text-red-500">*</strong>
              </label>
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
                type="email"
                maxLength="255"
                name="Email"
                placeholder="Email"
                className="h-10 w-[95%]"
              />
              {errors.Email && <p className="self-start text-sm text-red-500">{errors.Email.message}</p>}
            </div>

            <div className="w-[100%] pt-[5%]">
              <label className="text-white">
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
                type="number"
                name="Phone"
                id="international_PhoneNumber_countrycode"
                placeholder="Teléfono"
                className="h-10 w-[95%]"
              />
              {errors.PhoneNumber_countrycode && <p className="self-start text-sm text-red-500">{errors.PhoneNumber_countrycode.message}</p>}
            </div>
            <div className="mb-[5%] w-[100%] pt-[5%]">
              <button
                className={
                  !isValid
                    ? 'bg-black p-[2%] text-[20px] font-bold text-white opacity-50'
                    : 'w-[50%] bg-[#ff9e18] p-[2%] text-[20px] font-bold text-white'
                }
                type="submit"
                disabled={!isValid}
              >
                Enviar
              </button>
            </div>
          </form>

          <div className="mb-[5%] w-[100%] pt-[5%]">
            <p className="relative text-[12px] text-white">
              <strong className="text-semibold text-white">By clicking submit</strong>, I agree to the{' '}
              <a href="https://wp.windmar.com/privacy-policy/">Terms of Service and Privacy Policy</a> and authorize WindMar Solar, their contractors
              and partners to contact me with offers about solar product or service by telephone calls, artificial voice, and pre- recorded/text
              messages, using an automated telephone technology, to the number I provided above, even if my number is a mobile number or is currently
              listed on any state, federal or corporate Do Not Call list. I understand that my consent here is not a condition of purchase of any
              goods or services. Message and data rates may apply.{' '}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

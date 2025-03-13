import { useMutation } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { MunicipiosPR, campaings } from '../../../utils/data'
import { postFormLeads } from '../../../hooks/fetchDataApi'
import { getUTMs } from '../../../features/getUTM/getUTM'
import { FormProvider, useForm, useFormContext } from 'react-hook-form'
import { useEffect, useState } from 'react'
import Loading from '../../Loading/Loading'
import ThankYouPage_PR from '../../ThankYouPage/ThakYouPage_PR'
import PhoneInput from '../../Inputs/PhoneInput_Step'

export default function FormLeads_PR_roofing({ campaign }) {
  const { locacion, traffic } = useSelector((state) => state.states)
  const campaignList = campaings['pr']
  const utms = getUTMs(campaignList[campaign], traffic)

  const initialValues = {
    First_Name: '',
    Last_Name: '',
    Phone: '',
    Email: '',
    City: null,
    Products: ['Roofing'],
  }
  const [ValidedPhone, setValidedPhone] = useState(false)

  const methods = useForm({ mode: 'onBlur', defaultValues: initialValues })
  const {
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = methods

  const postFormLeadMutation = useMutation({
    mutationFn: (data) => postFormLeads(data, locacion),
    onSuccess: () => reset(initialValues),
    onError: (error) => console.error('Error al enviar el formulario', error),
  })

  const [activeStep, setActiveStep] = useState(0)
  const [isDisabledFirst, setIsDisabledFirst] = useState(true)
  const [isDisabledSecond, setIsDisabledSecond] = useState(true)

  useEffect(() => {
    const validateStep = () => {
      setIsDisabledFirst(!(watch('First_Name') && watch('Last_Name') && !errors.First_Name && !errors.Last_Name))
      setIsDisabledSecond(!(watch('Phone') && watch('Email') && !errors.Phone && !errors.Email && !isDisabledFirst))
    }
    validateStep()
  }, [watch, errors, isDisabledFirst])

  const handleNextStep = (step) => {
    if (step === 1 && isDisabledFirst) {
      alert('Complete el campo Nombre y Apellido correctamente')
    } else if (step === 2 && isDisabledSecond) {
      alert('Complete el campo Teléfono y Email correctamente')
    } else if (step === 2 && !ValidedPhone) {
      alert('Número de teléfono no válido')
    } else {
      setActiveStep(step)
    }
  }

  const onSubmit = (data) => postFormLeadMutation.mutate({ ...data, ...utms })

  return (
    <div className="box-border flex w-full flex-col items-center justify-center bg-white p-5">
      {activeStep > 0 && (
        <div className="cursor-pointer self-start text-2xl" onClick={() => setActiveStep(activeStep - 1)}>
          🡸
        </div>
      )}
      <p className="mb-4 text-center text-sm font-semibold leading-snug text-[#1e429b] sm:text-base lg:text-xl">
        Completa el formulario y <br />
        agenda tu cotización gratis ya.
      </p>
      {postFormLeadMutation.isPending && <Loading />}
      {postFormLeadMutation.isSuccess && <ThankYouPage_PR />}

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col items-center" name="form" id="roofing_pr">
          {activeStep === 0 && <StepOne handleNextStep={handleNextStep} />}
          {activeStep === 1 && <StepTwo handleNextStep={handleNextStep} setValidedPhone={setValidedPhone} />}
          {activeStep === 2 && <StepThree isValid={isValid} />}
        </form>
      </FormProvider>
    </div>
  )
}

function StepOne({ handleNextStep }) {
  return (
    <div className="w-full">
      <FormInput
        label="Nombre"
        name="First_Name"
        validation={{
          required: 'Nombre requerido',
          pattern: {
            value: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]+$/,
            message: 'Ingrese solo letras y/o espacios.',
          },
        }}
      />
      <FormInput
        label="Apellido"
        name="Last_Name"
        validation={{
          required: 'Apellido requerido',
          pattern: {
            value: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]+$/,
            message: 'Ingrese solo letras y/o espacios.',
          },
        }}
      />
      <StepButton label="Siguiente" onClick={() => handleNextStep(1)} />
    </div>
  )
}

function StepTwo({ handleNextStep, setValidedPhone }) {
  return (
    <div className="w-full">
      <label className="my-2 self-start text-base font-normal text-[#1e429b]">
        Numero <strong>*</strong>
      </label>
      <PhoneInput
        className="mb-2 box-border h-10 w-full rounded-sm border border-gray-300 px-3 py-1 text-base placeholder:text-white"
        errorRequired="Numero de telefono requerido"
        errorPattern="Ingrese solo números, no puede empezar por 1 o 0, deben ser 10 dígitos"
        phoneValided={setValidedPhone}
      />
      <FormInput
        label="Email"
        name="Email"
        validation={{
          required: 'Email requerido',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
            message: 'Ingrese un email valido',
          },
        }}
      />
      <StepButton label="Siguiente" onClick={() => handleNextStep(2)} />
    </div>
  )
}

function StepThree({ isValid }) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div className="w-full">
      <label className="my-2 self-start text-base font-normal text-[#1e429b]">Municipio :</label>
      <select
        className="mb-2 box-border h-10 w-full rounded-sm border border-gray-300 px-3 py-1 text-base"
        name="City"
        {...register('City', {
          required: 'Seleccione un municipio',
        })}
      >
        <option hidden>Ciudad</option>
        {MunicipiosPR.map((municipio, index) => (
          <option key={index} value={municipio}>
            {municipio}
          </option>
        ))}
      </select>
      {errors.City && <p className="self-start text-sm text-red-500">{errors.City.message}</p>}

      <button
        className={`mb-2 box-border h-10 w-full cursor-pointer border-none ${isValid ? 'bg-[#1e429b]' : 'bg-[#1e419b6c]'} px-3 py-1 text-lg font-semibold text-white`}
        type="submit"
        disabled={!isValid}
      >
        Enviar
      </button>
    </div>
  )
}

function FormInput({ label, name, validation }) {
  const {
    register,
    trigger,
    formState: { errors },
  } = useFormContext()

  return (
    <div className="flex flex-col gap-2">
      <label className="self-start text-base font-normal text-[#1e429b]">
        {label} <strong>*</strong>
      </label>
      <input
        {...register(name, validation)}
        onBlur={() => trigger(name)}
        className="mb-2 box-border h-10 w-full rounded-sm border border-gray-300 px-3 py-1 text-base"
        type="text"
      />
      {errors[name] && <ErrorMessage message={errors[name].message} />}
    </div>
  )
}

function StepButton({ label, onClick }) {
  return (
    <div className="mb-2 box-border h-10 w-full cursor-pointer border-none bg-[#1e429b] px-3 py-1 text-lg font-semibold text-white" onClick={onClick}>
      {label}
    </div>
  )
}

function ErrorMessage({ message }) {
  return <p className="self-start text-sm text-red-500">{message}</p>
}

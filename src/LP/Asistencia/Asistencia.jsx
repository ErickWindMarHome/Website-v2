import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { getSalesRecruitments, postSalesRecruitment, putSalesRecruitment } from '../../hooks/fetchDataApi'

import ThankYouPage_PR from '../../components/ThankYouPage/ThakYouPage_PR'
import SearchConsultansts from '../../components/Inputs/SearchConsultansts'

function Asistencia() {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'onTouched', // Change to onTouched for better UX
    reValidateMode: 'onSubmit', // Only revalidate on submit
  })

  const [info, setInfo] = useState(null)
  const [step, setStep] = useState(1)

  const Event = new URLSearchParams(location.search).get('event')

  const getSalesRecruitment = useMutation({
    mutationFn: (data) => getSalesRecruitments(data),
    onSuccess: (response) => {
      console.debug('response', response)
      setStep(2)
      setInfo(response.data.data[0])
    },
    onError: (error) => {
      console.error('error al enviar el formulario', error)
      setStep(4)
    },
  })

  const PostSalesRecruitment = useMutation({
    mutationFn: (data) => postSalesRecruitment(data),
    onSuccess: (response) => {
      console.debug('response', response)
    },
    onError: (error) => {
      console.error('error al enviar el formulario', error)
    },
  })

  const PutSalesRecruitment = useMutation({
    mutationFn: (data) => putSalesRecruitment(info.id, data),
    onSuccess: (response) => {
      console.debug('response', response)
    },
    onError: (error) => {
      console.error('error al enviar el formulario', error)
    },
  })

  const SearchPhone = handleSubmit((data) => {
    const queryData = `Num_Telefono_Format=${data.Phone}`
    getSalesRecruitment.mutate(queryData)
  })

  const PutData = handleSubmit((data) => {
    delete data.Phone
    const queryData = {
      ...data,
      [Event]: new Date().toISOString().split('T')[0],
    }

    PutSalesRecruitment.mutate(queryData)
  })

  const FormData = handleSubmit((data) => {
    const queryData = {
      ...data,
      [Event]: new Date().toISOString().split('T')[0],
    }
    PostSalesRecruitment.mutate(queryData)
  })

  function PhoneNumber() {
    return (
      <form onSubmit={SearchPhone} className="flex w-full flex-col gap-8">
        <h1 className="text-center text-2xl font-semibold text-[#1D429B] lg:text-3xl">
          Ingresa tu <br /> <span className="text-3xl font-bold text-[#FF9E18] lg:text-4xl">número de teléfono</span>
        </h1>
        <div>
          <input
            {...register('Phone', {
              required: 'El telefono requerido',
              pattern: {
                value: /^[2-9]\d{9}$/,
                message: 'Ingrese solo números, no puede comenzar con 1 o 0, debe tener 10 dígitos',
              },
            })}
            type="text"
            name="Phone"
            id="Phone"
            placeholder="Numero de telefono"
            className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-900 [appearance:textfield] focus:border-blue-600 focus:outline-none focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          {errors.Phone && <p className="self-start text-sm text-red-500">{errors.Phone.message}</p>}
        </div>
        <button
          type="submit"
          disabled={getSalesRecruitment.isPending}
          className="w-full rounded-xl border border-[#1D429B] py-2 transition-all hover:bg-[#1D429B] hover:text-white disabled:bg-[#1D429B] disabled:text-white disabled:opacity-70"
        >
          Buscar
        </button>
      </form>
    )
  }

  function AreYou() {
    return (
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-balance text-center text-xl font-semibold text-[#1D429B] lg:text-3xl">
          ¿Eres <span className="text-2xl font-bold text-[#FF9E18] lg:text-4xl">{info?.Name}</span>?
        </h1>
        <div className="flex w-full justify-center gap-4">
          <button
            type="button"
            onClick={() => setStep(4)}
            className="w-full max-w-[180px] rounded-xl border-2 border-red-500 py-2 font-medium transition-all hover:bg-red-500 hover:text-white"
          >
            No
          </button>
          <button
            type="button"
            onClick={() => {
              if (Event === 'Asistio_al_Reclutamento') {
                setStep(3)
              } else {
                PutData()
              }
            }}
            className="w-full max-w-[180px] rounded-xl border-2 border-green-500 py-2 font-medium transition-all hover:bg-green-500 hover:text-white disabled:bg-green-500 disabled:text-white disabled:opacity-70"
          >
            Si
          </button>
        </div>
      </div>
    )
  }
  function Mention() {
    return (
      <form onSubmit={PutData} className="flex flex-col items-center gap-10">
        <div>
          <h1 className="text-balance text-center text-xl font-semibold text-[#1D429B] lg:text-3xl">
            ¿Quieres hacer una <span className="text-2xl font-bold text-[#FF9E18] lg:text-4xl">mención</span>?
          </h1>
          <div className="w-full max-w-[450px]">
            <SearchConsultansts dataST={handleDataST} placeholder="Mención" />
          </div>
        </div>

        <div className="flex w-full justify-center gap-4">
          <button
            type="submit"
            className="w-full max-w-[180px] rounded-xl border-2 border-red-500 py-2 font-medium transition-all hover:bg-red-500 hover:text-white"
          >
            No
          </button>
          <button
            type="submit"
            disabled={putSalesRecruitment.isPending}
            className="w-full max-w-[180px] rounded-xl border-2 border-green-500 py-2 font-medium transition-all hover:bg-green-500 hover:text-white disabled:bg-green-500 disabled:text-white disabled:opacity-70"
          >
            Si
          </button>
        </div>
      </form>
    )
  }

  const handleDataST = useCallback(
    (value) => {
      if (value.Id) {
        setValue('Mentor', value.Id)
        setValue('Menci_n', true)
      }
    },
    [setValue],
  )

  function Form() {
    return (
      <form onSubmit={FormData} className="flex w-full flex-col gap-8">
        <h1 className="text-center text-2xl font-semibold text-[#1D429B] lg:text-3xl">
          Déjanos tus datos <br /> y asegura tu <span className="font-bold text-[#FF9E18] lg:text-4xl">asistencia</span>
        </h1>
        <div className="flex flex-col gap-3">
          <div>
            <label htmlFor="First_Name">Nombre</label>
            <input
              {...register('First_Name', {
                required: 'El nombre requerido',
                pattern: {
                  value: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]+$/,
                  message: 'Ingrese solo letras y/o espacios.',
                },
              })}
              type="text"
              name="First_Name"
              id="First_Name"
              placeholder="Nombre"
              className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-900 [appearance:textfield] focus:border-blue-600 focus:outline-none focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
            {errors.First_Name && <p className="self-start text-sm text-red-500">{errors.First_Name.message}</p>}
          </div>
          <div>
            <label htmlFor="Last_Name">Apellidos</label>
            <input
              {...register('Last_Name', {
                required: 'El apellido requerido',
                pattern: {
                  value: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]+$/,
                  message: 'Ingrese solo letras y/o espacios.',
                },
              })}
              type="text"
              name="Last_Name"
              id="Last_Name"
              placeholder="Apellidos"
              className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-900 [appearance:textfield] focus:border-blue-600 focus:outline-none focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
            {errors.Last_Name && <p className="self-start text-sm text-red-500">{errors.Last_Name.message}</p>}
          </div>
          <div>
            <label htmlFor="Email">Correo</label>
            <input
              {...register('Email', {
                required: 'El correo requerido',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                  message: 'Ingrese solo letras y/o espacios.',
                },
              })}
              type="text"
              name="Email"
              id="Email"
              placeholder="Correo electronico"
              className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-900 [appearance:textfield] focus:border-blue-600 focus:outline-none focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
            {errors.Email && <p className="self-start text-sm text-red-500">{errors.Email.message}</p>}
          </div>
          <div>
            <label htmlFor="Phone">Numero Telefonico</label>
            <input
              {...register('Phone', {
                required: 'El telefono requerido',
                pattern: {
                  value: /^[2-9]\d{9}$/,
                  message: 'Ingrese solo números, no puede comenzar con 1 o 0, debe tener 10 dígitos',
                },
              })}
              type="text"
              name="Phone"
              id="Phone"
              placeholder="Numero de telefono"
              className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-900 [appearance:textfield] focus:border-blue-600 focus:outline-none focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
            {errors.Phone && <p className="self-start text-sm text-red-500">{errors.Phone.message}</p>}
          </div>
          {Event === 'Asistio_al_Reclutamento' && (
            <div>
              <label htmlFor="Consultores">Mención</label>
              <SearchConsultansts dataST={handleDataST} placeholder="Mención" />
            </div>
          )}
        </div>
        <div>
          <button
            disabled={postSalesRecruitment.isPending}
            className="w-full rounded-xl border border-[#1D429B] py-2 transition-all hover:bg-[#1D429B] hover:text-white disabled:bg-[#1D429B] disabled:text-white disabled:opacity-70"
          >
            Enviar
          </button>
        </div>
      </form>
    )
  }

  const RenderStep = () => {
    switch (step) {
      case 1:
        return <PhoneNumber />
      case 2:
        return <AreYou />
      case 3:
        return <Mention />
      case 4:
        return <Form />
      default:
        return <></>
    }
  }

  return (
    <>
      {PostSalesRecruitment.isSuccess || PutSalesRecruitment.isSuccess ? <ThankYouPage_PR /> : ''}
      <div className="relative flex h-full w-full">
        <div className="relative mb-8 h-[100vh] w-full object-cover object-bottom lg:mb-0 lg:flex lg:h-[100vh] lg:w-[50%] lg:items-center lg:justify-center">
          <img
            src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/ReferidosEmpleados/background.webp"
            alt=""
            className="absolute top-0 h-[50%] w-full object-cover object-bottom lg:h-full lg:rounded-r-[50px]"
          />
          <div className="absolute flex h-full w-full flex-col items-center text-balance pt-8 text-center text-white lg:h-fit">
            <h1 className="px-8 pt-2 text-3xl font-bold md:text-5xl">
              ¡<span className="text-[#FF9E18]">Confirma tu asistencia</span>!
            </h1>
          </div>
        </div>
        <div className="absolute bottom-0 flex h-[70%] min-h-fit w-full flex-col items-center justify-start gap-8 rounded-t-[50px] bg-white px-8 py-8 lg:static lg:h-full lg:w-[50%] lg:justify-center lg:rounded-none">
          <div className="w-full max-w-[600px]">
            <RenderStep />
          </div>
        </div>
      </div>
    </>
  )
}

export default Asistencia

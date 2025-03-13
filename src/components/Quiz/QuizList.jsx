import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useMutation } from '@tanstack/react-query'
import { translationsForm } from '../../utils/data'
import { FormProvider, useForm, useFormContext } from 'react-hook-form'

import { getUTMs } from '../../features/getUTM/getUTM'
import { postFormLeads } from '../../hooks/fetchDataApi'
import { HiOutlineInformationCircle } from 'react-icons/hi'

import CustomRange from './Components/Slider'
import Loading from '../../components/Loading/Loading'
import ThankYouPage_PR from '../../components/ThankYouPage/ThakYouPage_PR'

function Owner({ next, goTo }) {
  const { setValue } = useFormContext()

  return (
    <section className="my-4 flex w-full max-w-[800px] flex-col items-center justify-center gap-4 lg:w-[90%]">
      <h1 className="text-center text-2xl font-semibold lg:text-4xl">¿Eres dueño de casa?</h1>
      <div className="flex w-[80%] flex-col gap-2 md:flex-row">
        <button
          type="button"
          className="w-full rounded-full border border-[#1D429B] py-2 hover:bg-[#1D429B] hover:text-white"
          onClick={() => {
            next()
            setValue('Owner', 'Si')
            setValue('Form_Id', 'form_quiz_solar')
          }}
        >
          Sí, soy dueño
        </button>
        <button
          type="button"
          className="w-full rounded-full border border-[#1D429B] py-2 hover:bg-[#1D429B] hover:text-white"
          onClick={() => {
            goTo(3)
            setValue('Owner', 'No')
            setValue('Form_Id', 'QuizNoAnker')
          }}
        >
          No soy dueño
        </button>
      </div>
      <div className="flex w-[90%] items-center justify-center gap-2 text-sm italic text-[#6D6E71]">
        <HiOutlineInformationCircle className="text-[60px] md:text-4xl" />
        <p>Por favor, selecciona la opción que corresponda para continuar: Haz clic en &apos;Sí&apos; o &apos;No&apos;.</p>
      </div>
    </section>
  )
}

function HomeType({ next }) {
  const { setValue } = useFormContext()

  return (
    <section className="my-4 flex w-full max-w-[800px] flex-col items-center justify-center gap-4 lg:w-[90%]">
      <h1 className="text-center text-2xl font-semibold lg:text-4xl">¿Qué tipo de hogar tienes?</h1>
      <div className="flex w-[80%] flex-col items-center justify-center gap-2">
        <div className="flex w-full flex-col items-center gap-2 md:flex-row md:gap-4">
          <button
            type="button"
            className="w-full rounded-full border border-[#1D429B] py-2 hover:bg-[#1D429B] hover:text-white"
            onClick={() => {
              next()
              setValue('HomeType', 'Casa')
            }}
          >
            Casa
          </button>
          <button
            type="button"
            className="w-full rounded-full border border-[#1D429B] py-2 hover:bg-[#1D429B] hover:text-white"
            onClick={() => {
              next()
              setValue('HomeType', 'Apartamento')
            }}
          >
            Apartamento
          </button>
        </div>
        <button
          type="button"
          className="w-full rounded-full border border-[#1D429B] py-2 hover:bg-[#1D429B] hover:text-white md:max-w-[300px]"
          onClick={() => {
            next()
            setValue('HomeType', 'Otro')
          }}
        >
          Otro
        </button>
      </div>
      <div className="flex w-[90%] items-center justify-center gap-2 text-sm italic text-[#6D6E71]">
        <HiOutlineInformationCircle className="text-[60px] md:text-4xl" />
        <p>
          Por favor, selecciona la opción que corresponda para continuar: Haz clic en &apos;Casa&apos;, &apos;Apartamento&apos; u &apos;Otro&apos;.
        </p>
      </div>
    </section>
  )
}

function EnergyBill({ next }) {
  return (
    <section className="my-4 flex w-full max-w-[800px] flex-col items-center justify-center gap-4 lg:w-[90%]">
      <h1 className="text-center text-2xl font-semibold lg:text-4xl">¿Cuánto pagas de luz al mes?</h1>
      <div className="my-2 flex h-[120px] w-[80%] flex-col justify-between gap-4">
        <CustomRange max={500} thumb={'https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Quiz/flash-outline.svg'} color="#FF9E18" />
        <button type="button" className="w-full rounded-full border border-[#1D429B] py-2 hover:bg-[#1D429B] hover:text-white" onClick={next}>
          Aplicar
        </button>
      </div>
      <div className="flex w-[90%] items-center justify-center gap-2 text-sm italic text-[#6D6E71]">
        <HiOutlineInformationCircle className="text-[60px] md:text-4xl" />
        <p>Por favor, selecciona un valor ajustando la barra deslizante.</p>
      </div>
    </section>
  )
}

function Form({ toSubmit }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useFormContext()

  const { lenguaje } = useSelector((state) => state.states)

  const onSubmit = (data) => {
    const LeadNotes = `¿Eres dueño de casa?: ${watch('Owner')}, Tipo de hogar: ${watch('HomeType')}, ¿Cuánto pagas de luz al mes?: ${watch('price')}`
    const utms = getUTMs('QuizLeads')

    let products = ['Anker']
    if (watch('Owner') === 'Si' && watch('HomeType') === 'Casa' && watch('price') >= 100) {
      products = ['Placas', 'Tesla Powerwall']
    }

    toSubmit.mutate({
      First_Name: data.First_Name,
      Last_Name: data.Last_Name,
      Phone: data.Phone,
      Products: products,
      Lead_Notes: LeadNotes,
      Form_Id: data.Form_Id,
      ...utms,
    })
  }

  return (
    <section className="my-4 flex w-full max-w-[800px] flex-col items-center justify-center gap-4 lg:w-[90%]">
      <div className="flex w-[90%] flex-col gap-4 lg:gap-8">
        <h1 className="text-center text-2xl font-semibold lg:text-4xl">Tenemos la solución que buscas, según tus necesidades energéticas.</h1>
        <h2 className="text-center lg:text-xl">Déjanos tus datos y uno de nuestros consultores energéticos se comunicará contigo.</h2>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        id={watch('Form_Id')}
        className="flex w-full max-w-[800px] flex-col items-center justify-center gap-4 lg:w-[90%]"
      >
        <div className="flex w-[80%] flex-col gap-2">
          <input
            type="text"
            className="rounded-lg border border-[#6D6E71] px-4 py-1.5 text-black outline-none"
            placeholder="Nombre(s)*"
            {...register('First_Name', {
              required: translationsForm[lenguaje].reqName,
              pattern: {
                value: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]+$/,
                message: translationsForm[lenguaje].errorName,
              },
            })}
          />
          {errors.First_Name && <p className="text-sm text-red-500">{errors.First_Name.message}</p>}
          <input
            type="text"
            className="rounded-lg border border-[#6D6E71] px-4 py-1.5 text-black outline-none"
            placeholder="Apellido(s)*"
            {...register('Last_Name', {
              required: translationsForm[lenguaje].reqLastname,
              pattern: {
                value: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]+$/,
                message: translationsForm[lenguaje].errorLastname,
              },
            })}
          />
          {errors.Last_Name && <p className="text-sm text-red-500">{errors.Last_Name.message}</p>}
          <input
            type="email"
            className="rounded-lg border border-[#6D6E71] px-4 py-1.5 text-black outline-none"
            placeholder="Correo electrónico*"
            {...register('Email', {
              required: translationsForm[lenguaje].reqEmail,
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: translationsForm[lenguaje].errorEmail,
              },
            })}
          />
          {errors.Email && <p className="text-sm text-red-500">{errors.Email.message}</p>}
          <input
            type="text"
            className="rounded-lg border border-[#6D6E71] px-4 py-1.5 text-black outline-none"
            placeholder="Número de teléfono*"
            {...register('Phone', {
              required: translationsForm[lenguaje].reqPhone,
              pattern: {
                value: /^[2-9][0-9]{9}$/,
                message: translationsForm[lenguaje].errorPhone,
              },
            })}
          />
          {errors.Phone && <p className="text-sm text-red-500">{errors.Phone.message}</p>}
          <button type="submit" className="mt-8 w-full rounded-full border border-[#1D429B] py-2 hover:bg-[#1D429B] hover:text-white">
            Enviar
          </button>
        </div>
      </form>
      <div className="flex w-[90%] items-center justify-center gap-2 text-sm italic text-[#6D6E71]">
        <HiOutlineInformationCircle className="text-[60px] md:text-4xl" />
        <p>Por favor, completa el formulario con tú información.</p>
      </div>
    </section>
  )
}

function QuizList() {
  const [step, setstep] = useState(1)

  const methods = useForm({ mode: 'onBlur' })

  const postFormLeadMutation = useMutation({
    mutationFn: (data) => {
      return postFormLeads(data, 'pr')
    },
    onSuccess: () => {},
    onError: (error) => {
      console.error('Error al enviar el formulario', error)
    },
  })

  const RenderStep = ({ next, goTo }) => {
    switch (step) {
      case 1:
        return <Owner next={next} goTo={goTo} />
      case 2:
        return <HomeType next={next} />
      case 3:
        return <EnergyBill next={next} />
      case 4:
        return <Form toSubmit={postFormLeadMutation} />
      default:
        return <></>
    }
  }

  const handleNextStep = () => {
    if (step === 4) {
      return
    }
    setstep(step + 1)
  }

  const goTo = (step) => {
    setstep(step)
  }

  const handleBackStep = () => {
    if (step === 1) {
      return
    }
    setstep(step - 1)
  }

  return (
    <>
      {postFormLeadMutation.isPending && <Loading />}
      {postFormLeadMutation.isSuccess && <ThankYouPage_PR />}
      <FormProvider {...methods}>
        <div className="flex h-full min-h-screen w-full flex-col md:flex-row">
          <div className="flex h-full min-h-[350px] w-full flex-col items-center justify-around gap-4 bg-[url('https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Quiz/Calle+PR.webp')] bg-cover bg-bottom bg-no-repeat object-scale-down p-4 md:relative md:h-screen md:w-[55%] md:justify-center">
            <div className="hidden w-[90%] max-w-[450px] flex-col items-center justify-center gap-8 rounded-xl border-2 border-[#38383833]/20 bg-white/30 px-8 py-10 text-white backdrop-blur-sm md:flex md:items-start">
              <h2 className="text-center text-xl md:text-start lg:text-2xl">
                Protege tu hogar con <br />
                <strong>Windmar Home</strong>
              </h2>
              <p className="text-center text-xl font-semibold md:text-start lg:text-2xl">
                {/*    Llámanos o d */}Déjanos tus datos y nos pondremos en contacto contigo.
              </p>
              {/* <button className="rounded-full bg-[#FF9E18] px-7 py-1.5 text-2xl font-semibold">787-395-7766</button> */}
            </div>
            <img
              src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Quiz/LogoWH.svg"
              alt="Logo Windmar Home + Energia de la buena; Energia de la buena; WindmarHome"
              className="bottom-5 w-[50%] max-w-[269px] md:absolute"
            />
            <div className="w-[90%] max-w-[450px] flex-col items-center justify-center gap-8 rounded-xl border-2 border-[#38383833]/20 bg-white/30 p-4 text-white backdrop-blur-sm md:hidden md:items-start">
              {/* <h1 className="mb-4 text-center text-4xl font-semibold md:text-start">¡Llámanos!</h1> */}
              <p className="text-center text-xl font-semibold md:text-start lg:text-2xl">
                {/*    Llámanos o d */}Déjanos tus datos y nos pondremos en contacto contigo.
              </p>
              {/* <button className="flex w-full items-center justify-center gap-2 rounded-full bg-[#FF9E18] px-7 py-2 text-2xl font-semibold">
                <lord-icon
                  src="https://cdn.lordicon.com/xrdkdttl.json"
                  trigger="loop"
                  delay="5000"
                  stroke="bold"
                  colors="primary:#ffffff,secondary:#ffffff"
                  style={{ width: '40px', height: '40px' }}
                ></lord-icon>
                <span>787-395-7766</span>
              </button> */}
            </div>
          </div>
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 pb-8 text-[#1D429B]">
            <div className="mr-auto flex h-[56px] items-center px-8 lg:px-12">
              {step > 1 && (
                <div
                  onClick={() => {
                    if (step === 3 && methods.watch('Owner') === 'No') {
                      goTo(1)
                    } else {
                      handleBackStep()
                    }
                  }}
                  className="flex cursor-pointer items-center gap-2 text-[#6D6E71]"
                >
                  <lord-icon src="https://cdn.lordicon.com/wnpygzgy.json" stroke="bold" style={{ width: '22px', height: '22px' }}></lord-icon>
                  <span>Volver</span>
                </div>
              )}
            </div>
            <div className="flex w-[80%] max-w-[900px] flex-col items-center justify-center gap-4">
              <h1 className={`text-center text-2xl md:text-4xl ${step === 4 && 'hidden'} ${step === 1 && 'hidden md:block'}`}>
                Da el primer paso hacia la tranquilidad energética con <span className="font-semibold text-[#FF9E18]">Windmar Home</span>
              </h1>
              <h1 className={`${step !== 1 && 'hidden'} text-center text-2xl md:hidden md:text-4xl`}>
                {/* O */} Completa el quiz y <br /> da el primer paso.
              </h1>
              <div className="flex w-full justify-center gap-4">
                <div className="flex cursor-pointer flex-col items-center gap-2">
                  <div className="h-[55px] w-[55px] md:h-[64px] md:w-[64px]">
                    <lord-icon
                      src={step >= 2 ? 'https://cdn.lordicon.com/qgtkfluv.json' : 'https://cdn.lordicon.com/whvtbbby.json'}
                      trigger={step >= 1 ? 'loop' : 'hover'}
                      delay="5000"
                      stroke="bold"
                      colors={step >= 1 ? 'primary:#1d429b,secondary:#f89b23' : 'primary:#d8d8d8,secondary:#d8d8d8'}
                      style={{ width: '100%', height: '100%' }}
                    ></lord-icon>
                  </div>
                  <span className={`text-sm font-bold uppercase ${step >= 1 ? 'text-[#1d429b]' : 'text-[#d8d8d8]'} `}>Paso 1</span>
                </div>
                <hr className={`mt-8 w-full max-w-[80px] rounded-full border-[1px] ${step >= 2 ? 'border-[#0038A8]' : 'border-[#d8d8d8]'} `} />
                {methods.watch('Owner') !== 'No' && (
                  <>
                    <div className="flex flex-col items-center gap-2">
                      <div className="h-[55px] w-[55px] md:h-[64px] md:w-[64px]">
                        <lord-icon
                          src={step >= 3 ? 'https://cdn.lordicon.com/qgtkfluv.json' : 'https://cdn.lordicon.com/jeuxydnh.json'}
                          trigger={step >= 2 ? 'loop' : 'hover'}
                          delay="5000"
                          stroke="bold"
                          colors={step >= 2 ? 'primary:#1d429b,secondary:#f89b23' : 'primary:#d8d8d8,secondary:#d8d8d8'}
                          style={{ width: '100%', height: '100%' }}
                        ></lord-icon>
                      </div>
                      <span className={`text-sm font-bold uppercase ${step >= 2 ? 'text-[#1d429b]' : 'text-[#d8d8d8]'} `}>Paso 2</span>
                    </div>
                    <hr className={`mt-8 w-full max-w-[80px] rounded-full border-[1px] ${step >= 3 ? 'border-[#0038A8]' : 'border-[#d8d8d8]'} `} />
                  </>
                )}

                <div className="flex flex-col items-center gap-2">
                  <div className="h-[55px] w-[55px] md:h-[64px] md:w-[64px]">
                    <lord-icon
                      src={step >= 4 ? 'https://cdn.lordicon.com/qgtkfluv.json' : 'https://cdn.lordicon.com/zywwafpn.json'}
                      trigger={step >= 3 ? 'loop' : 'hover'}
                      delay="5000"
                      stroke="bold"
                      colors={step >= 3 ? 'primary:#1d429b,secondary:#f89b23' : 'primary:#d8d8d8,secondary:#d8d8d8'}
                      style={{ width: '100%', height: '100%' }}
                    ></lord-icon>
                  </div>
                  <span className={`text-sm font-bold uppercase ${step >= 3 ? 'text-[#1d429b]' : 'text-[#d8d8d8]'} `}>
                    Paso {methods.watch('Owner') !== 'Si' ? 2 : 3}
                  </span>
                </div>
                <hr className={`mt-8 w-full max-w-[80px] rounded-full border-[1px] ${step === 4 ? 'border-[#0038A8]' : 'border-[#d8d8d8]'} `} />
                <div className="flex flex-col items-center gap-2">
                  <div className="h-[55px] w-[55px] md:h-[64px] md:w-[64px]">
                    <lord-icon
                      src={postFormLeadMutation.isSuccess ? 'https://cdn.lordicon.com/qgtkfluv.json' : 'https://cdn.lordicon.com/heqlbljj.json'}
                      trigger={step === 4 ? 'loop' : 'hover'}
                      delay="5000"
                      stroke="bold"
                      colors={step === 4 ? 'primary:#1d429b,secondary:#f89b23' : 'primary:#d8d8d8,secondary:#d8d8d8'}
                      style={{ width: '100%', height: '100%' }}
                    ></lord-icon>
                  </div>
                  <span className={`text-sm font-bold uppercase ${step === 4 ? 'text-[#1d429b]' : 'text-[#d8d8d8]'} `}>
                    Paso {methods.watch('Owner') !== 'Si' ? 3 : 4}
                  </span>
                </div>
              </div>
            </div>
            <RenderStep next={handleNextStep} goTo={goTo} />
          </div>
        </div>
      </FormProvider>
    </>
  )
}

export default QuizList

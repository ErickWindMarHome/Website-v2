import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { useMutation } from '@tanstack/react-query'
import { getAdministrativeByEmail, getInstallersTeamByPhone, getSalesTeamsByPhone, postFormLeads, postFormRecruitment } from '../../hooks/fetchDataApi'
import Loading from '../../components/Loading/Loading'
import SearchConsultansts from '../../components/Inputs/SearchConsultansts'

export default function ReferidosEmpleados() {
  const [formState, setFormState] = useState(0)
  const [rol, setRol] = useState('')
  const lordIconRef = useRef(null)
  const [module, setModule] = useState('')
  const [Mentor, setMentor] = useState()

  const CardsData = [
    {
      price: '500',
      description: 'por referir a un representante de ventas y que este realice su primera venta.',
    },
    {
      price: '250',
      description: 'por referir a un técnico de instalación luego de cumplir 30 días trabajando en la compañía.',
    },
    {
      price: '250',
      description: 'por referir a un administrativo  luego de cumplir 30 días trabajando en la compañía.',
    },
    {
      price: '250',
      description: 'por referir a un cliente y que éste realice su primera compra.',
      subDescription: '*No aplica para vendedores*',
    },
  ]
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onBlur' })

  const [dataRefiere, setDataRefiere] = useState()

  const getSalesTeams = useMutation({
    mutationFn: (data) => getSalesTeamsByPhone(data),
    onSuccess: (response) => {
      console.log('Respuesta:', response)
      setDataRefiere(response.data.data[0])
    },
    onError: (error) => {
      console.error('error al enviar el formulario', error)
    },
  })

  const getInstallersTeam = useMutation({
    mutationFn: (data) => getInstallersTeamByPhone(data),
    onSuccess: (response) => {
      console.log('Respuesta:', response)
      setDataRefiere(response.data.data[0])
    },
    onError: (error) => {
      console.error('error al enviar el formulario', error)
    },
  })

  const postRecluitment = useMutation({
    mutationFn: (data) => postFormRecruitment(data, module),
    onSuccess: (response) => {
      console.log('Respuesta:', response)
    },
    onError: (error) => {
      console.error('error al enviar el formulario', error)
    },
  })
  const postLead = useMutation({
    mutationFn: (data) => postFormLeads(data, 'PR'),
    onSuccess: (response) => {
      console.log('Respuesta:', response)
    },
    onError: (error) => {
      console.error('error al enviar el formulario', error)
    },
  })
  

  const getAdministrative = useMutation({
    mutationFn: (data) => getAdministrativeByEmail(data),
    onSuccess: (response) => {
      console.log('Respuesta:', response)
      setDataRefiere(response.data.data[0])
    },
    onError: (error) => {
      console.error('error al enviar el formulario', error)
    },
  })

  const incrementValue = () => {
    setFormState((prev) => prev + 1)
  }

  const handleSelect = (value) => {
    setRol(value)
    incrementValue()
  }

  const handleOnSubmitOne = handleSubmit(async (data) => {
    switch (rol) {
      case 'Sales Team':
        try {
          const response = await getSalesTeams.mutateAsync(data.phone)

          console.log('Respuesta exitosa:', response)
          incrementValue()
        } catch (error) {
          console.error('Error al enviar el formulario:', error)
        }
        break
      case 'Installers Team':
        try {
          const response = await getInstallersTeam.mutateAsync(data.phone)
          console.log('Respuesta exitosa:', response)
          incrementValue()
        } catch (error) {
          console.error('Error al enviar el formulario:', error)
        }
        break
      case 'Administrative':
        try {
          const response = await getAdministrative.mutateAsync(data.email)
          console.log('Respuesta exitosa:', response)
          incrementValue()
        } catch (error) {
          console.error('Error al enviar el formulario:', error)
        }
        break
    }
  })

  const handleOnSubmitTwo = handleSubmit(async (data) => {
    var Body = {
      First_Name: data.nombre,
      Last_Name: data.apellido,
      Phone: data.telefono,
      Referrer_Data: {
        Staff: rol,
        id: dataRefiere.id,
      },
    }
    switch (data.vacante) {
      case 'vendedor':
        try {
          setModule('sales')
          Body = {
            ...Body,
            Source: 'Employee Referrals',
            Mentor: Mentor?.Id,
          }
          setMentor()
          const response = await postRecluitment.mutateAsync(Body)
          console.log('Respuesta exitosa:', response)
          incrementValue()
        } catch (error) {
          console.error('Error al enviar el formulario:', error)
        }
        break
      case 'cliente':
        try {
          Body = {
            ...Body,
            Referido_Nombre: dataRefiere.Name,
            Referido_Email: dataRefiere.Email,
            Referido_Telefono: dataRefiere.Tel_fono,
            Source: 'Employee Referrals',
          }
          const response = await postLead.mutateAsync(Body)
          console.log('Respuesta exitosa:', response)
          incrementValue()
        } catch (error) {
          console.error('Error al enviar el formulario:', error)
        }
        break
      case 'tecnico':
        try {
          setModule('installers')
          Body = {
            ...Body,
            Source: 'Employee Referrals',
          }
          const response = await postRecluitment.mutateAsync(Body)
          console.log('Respuesta exitosa:', response)
          incrementValue()
        } catch (error) {
          console.error('Error al enviar el formulario:', error)
        }
        break
      case 'empledoAdministrativo':
        try {
          setModule('admin')
          const response = await postRecluitment.mutateAsync(Body)
          console.log('Respuesta exitosa:', response)
          incrementValue()
        } catch (error) {
          console.error('Error al enviar el formulario:', error)
        }
        break
    }
  })

  useEffect(() => {
    if (!document.querySelector('script[src="https://cdn.lordicon.com/lordicon.js"]')) {
      const script = document.createElement('script')
      script.src = 'https://cdn.lordicon.com/lordicon.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  const imageVariants = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      x: 50,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  }

  const renderContent = () => {
    switch (formState) {
      case 0:
        return (
          <>
            <div className="hidden xl:block">
              <h1 className="mx-auto mt-5 text-center text-4xl font-semibold text-[#1D429B] xl:w-[60%] 2xl:w-[40%]">
                ¡Ganas hasta <span className="text-[#F89B24]">$500</span> por referido!
              </h1>
              <div className="mx-auto mt-5 grid grid-cols-4 gap-3 xl:w-[95%] 2xl:w-[90%]">
                {CardsData.map((item, index) => (
                  <div key={index} className="mx-auto w-full rounded-xl text-center shadow-2xl">
                    <h1 className="rounded-t-xl bg-[#F89B24] p-2 text-2xl font-semibold text-white">${item.price}</h1>
                    <p className="p-2 text-center text-sm font-medium text-[#1D429B] 2xl:text-base">{item.description}</p>
                    {item.subDescription && <p className="p-2 text-center text-sm font-medium text-[#1D429B] 2xl:text-sm">{item.subDescription}</p>}
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center text-2xl font-semibold xl:mt-10 xl:text-4xl 2xl:mt-20">
              <h1 className="mx-auto w-[90%] text-[#1D429B] xl:w-[74%]">
                Dinos cuál es tu rol dentro de <span className="text-[#F89B24]">Windmar Home.</span>
              </h1>
              <div className="mt-10 flex flex-col gap-5 text-lg text-[#1D429B] xl:mt-5 [&>button]:mx-auto [&>button]:w-[90%] [&>button]:rounded-full [&>button]:border-2 [&>button]:border-[#1D429B] [&>button]:py-2 xl:[&>button]:w-[35%]">
                <button
                  className="cursor-pointer transition-all duration-300 hover:bg-[#1D429B] hover:text-[20px] hover:font-[750] hover:text-white"
                  onClick={() => {
                    handleSelect('Sales Team')
                  }}
                >
                  Consultor
                </button>
                <button
                  className="cursor-pointer transition-all duration-300 hover:bg-[#1D429B] hover:text-[20px] hover:font-[750] hover:text-white"
                  onClick={() => {
                    handleSelect('Installers Team')
                  }}
                >
                  Instalador
                </button>
                <button
                  className="cursor-pointer transition-all duration-300 hover:bg-[#1D429B] hover:text-[20px] hover:font-[750] hover:text-white"
                  onClick={() => {
                    handleSelect('Administrative')
                  }}
                >
                  Administrativo
                </button>
              </div>
            </div>
          </>
        )

      case 1:
        return (
          <div className="flex h-[80%] flex-col items-center justify-center">
            <form onSubmit={handleOnSubmitOne}>
              <h1 className="mx-auto mt-5 text-center text-4xl font-semibold text-[#1D429B] xl:w-[60%] 2xl:w-[55%]">
                Necesitamos verificar <span className="text-[#F89B24]">tu información.</span>
              </h1>
              <div className="relative mx-auto mt-5 w-[90%] md:w-[70%] xl:mt-10 xl:w-[60%]">
                {rol !== 'Administrative' ? (
                  <>
                    <input
                      {...register('phone', {
                        required: { value: true, message: 'Este campo es requerido.' },
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: 'Número de teléfono no válido. Debe contener 10 dígitos.',
                        },
                      })}
                      type="number"
                      className="peer block w-full cursor-pointer rounded-xl border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-900 [appearance:textfield] focus:border-blue-600 focus:outline-none focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                      required
                    />
                    {errors.phone && <p className="self-start text-sm text-red-500">{errors.phone.message}</p>}
                    <label
                      htmlFor=""
                      className="absolute left-3 top-2.5 z-10 origin-[0] -translate-y-0.5 scale-75 transform text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-valid:-translate-y-6 peer-valid:scale-75 peer-valid:bg-white peer-valid:px-1 peer-valid:font-medium peer-valid:text-[#1D429B] peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:bg-white peer-focus:px-1 peer-focus:font-medium peer-focus:text-[#1D429B]"
                    >
                      Teléfono
                    </label>
                    <div className="absolute right-0 top-2.5 z-10 origin-[0] -translate-y-3.5 scale-75 transform cursor-pointer text-gray-500 duration-300 peer-placeholder-shown:scale-100">
                      <lord-icon
                        ref={lordIconRef}
                        src="https://cdn.lordicon.com/dnphlhar.json"
                        trigger="in"
                        delay="300"
                        stroke="bold"
                        state="in-reveal"
                        colors="primary:#6d6e71,secondary:#6d6e71"
                        style={{ width: '50px', height: '50px' }}
                      ></lord-icon>
                    </div>
                  </>
                ) : (
                  <>
                    <input
                      {...register('email', {
                        required: { value: true, message: 'Este campo es requerido.' },
                        pattern: {
                          value: /^[a-zA-Z0-9._%+-]+@(windmar|windmarhome)\.com$/,
                          message: 'Correo electrónico no válido.',
                        },
                      })}
                      type="text"
                      className="peer block w-full cursor-pointer rounded-xl border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-900 [appearance:textfield] focus:border-blue-600 focus:outline-none focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                      required
                    />
                    {errors.email && <p className="self-start text-sm text-red-500">{errors.email.message}</p>}
                    <label
                      htmlFor="email"
                      className="absolute left-3 top-2.5 z-10 origin-[0] -translate-y-0.5 scale-75 transform text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-valid:-translate-y-6 peer-valid:scale-75 peer-valid:bg-white peer-valid:px-1 peer-valid:font-medium peer-valid:text-[#1D429B] peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:bg-white peer-focus:px-1 peer-focus:font-medium peer-focus:text-[#1D429B]"
                    >
                      Email
                    </label>
                    <div className="absolute right-0 top-2.5 z-10 origin-[0] -translate-y-3.5 scale-75 transform cursor-pointer text-gray-500 duration-300 peer-placeholder-shown:scale-100">
                      <lord-icon
                        ref={lordIconRef}
                        src="https://cdn.lordicon.com/vpbspaec.json"
                        trigger="in"
                        delay="300"
                        stroke="bold"
                        state="in-reveal"
                        colors="primary:#6d6e71,secondary:#6d6e71"
                        style={{ width: '50px', height: '50px' }}
                      ></lord-icon>
                    </div>
                  </>
                )}
                <div className="mt-10 flex flex-col gap-5 text-lg font-semibold text-[#1D429B] xl:mt-5 [&>button]:mx-auto [&>button]:w-full [&>button]:rounded-full [&>button]:border-2 [&>button]:border-[#1D429B] [&>button]:py-2">
                  <button className="cursor-pointer transition-all duration-300 hover:bg-[#1D429B] hover:text-[20px] hover:font-[750] hover:text-white">
                    Enviar
                  </button>
                </div>
              </div>
            </form>
            {(getSalesTeams.isError || getAdministrative.isError || getInstallersTeam.isError) && (
              <p className="mt-2 text-center text-lg text-red-500 xl:text-xl"> No se encuentra </p>
            )}
          </div>
        )
      case 2:
        return (
          <div className="mx-auto mt-5 flex h-[80%] w-[90%] flex-col justify-center md:w-[70%] xl:mt-10 xl:w-[60%]">
            <div className="my-10 text-center">
              <h1 className="text-4xl font-semibold text-[#1D429B]">Entonces...</h1>
              <h1 className="text-4xl font-semibold text-[#F89B24]">¿Eres tú?</h1>
            </div>
            {rol !== 'Administrative' ? (
              <div className="relative">
                <input
                  type="number"
                  className="peer block w-full cursor-pointer rounded-xl border border-[#1D429B] bg-transparent px-4 py-2.5 text-sm font-semibold text-[#1D429B] [appearance:textfield] focus:border-[#1D429B] focus:outline-none focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  value={dataRefiere.Phone_Number || dataRefiere.Phone}
                  readOnly
                />
                <div className="absolute right-0 top-2.5 z-10 origin-[0] -translate-y-3.5 scale-75 transform cursor-pointer text-gray-500 duration-300 peer-placeholder-shown:scale-100">
                  <lord-icon
                    ref={lordIconRef}
                    src="https://cdn.lordicon.com/dnphlhar.json"
                    trigger="in"
                    delay="300"
                    stroke="bold"
                    state="in-reveal"
                    colors="primary:#1D429B,secondary:#1D429B"
                    style={{ width: '40px', height: '50px' }}
                  ></lord-icon>
                </div>
              </div>
            ) : (
              <div className="relative">
                <input
                  type="text"
                  className="peer block w-full cursor-pointer rounded-xl border border-[#1D429B] bg-transparent px-4 py-2.5 text-sm font-semibold text-[#1D429B] [appearance:textfield] focus:border-[#1D429B] focus:outline-none focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  value={dataRefiere.Email}
                  readOnly
                />
                <div className="absolute right-0 top-2.5 z-10 origin-[0] -translate-y-3.5 scale-75 transform cursor-pointer text-gray-500 duration-300 peer-placeholder-shown:scale-100">
                  <lord-icon
                    ref={lordIconRef}
                    src="https://cdn.lordicon.com/ozlkyfxg.json"
                    trigger="in"
                    delay="300"
                    stroke="bold"
                    state="in-reveal"
                    colors="primary:#1D429B,secondary:#1D429B"
                    style={{ width: '40px', height: '50px' }}
                  ></lord-icon>
                </div>
              </div>
            )}
            <div className="relative mt-5">
              <input
                type="text"
                className="peer block w-full cursor-pointer appearance-none rounded-xl border border-[#1D429B] bg-transparent px-4 py-2.5 text-sm font-semibold text-[#1D429B] focus:outline-none focus:ring-0"
                value={dataRefiere.Name}
                readOnly
              />
              <div className="absolute right-0 top-2.5 z-10 origin-[0] -translate-y-3.5 scale-75 transform cursor-pointer text-gray-500 duration-300 peer-placeholder-shown:scale-100">
                <lord-icon
                  src="https://cdn.lordicon.com/kdduutaw.json"
                  trigger="in"
                  delay="300"
                  stroke="bold"
                  state="in-reveal"
                  colors="primary:#1d429b,secondary:#1d429b"
                  style={{ width: '40px', height: '50px' }}
                ></lord-icon>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-5 text-lg font-semibold text-[#1D429B] xl:mt-5 [&>button]:mx-auto [&>button]:w-full [&>button]:rounded-full [&>button]:border-2 [&>button]:py-2">
              <button
                className="cursor-pointer border-[#1D429B] transition-all duration-300 hover:bg-[#1D429B] hover:text-[20px] hover:font-[750] hover:text-white"
                onClick={() => incrementValue()}
              >
                Sí, soy yo
              </button>

              <button
                className="cursor-pointer border-[#D64040] text-[#D64040] transition-all duration-300 hover:bg-[#D64040] hover:text-[20px] hover:font-[750] hover:text-white"
                onClick={() => setFormState(0)}
              >
                No, soy yo
              </button>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="mx-auto mt-5 flex h-[75%] w-[90%] flex-col justify-center md:w-[70%] xl:mt-10 xl:w-[60%]">
            <div className="my-10 text-center">
              <h1 className="text-4xl font-semibold text-[#1D429B]">!Refiere hoy y</h1>
              <h1 className="text-4xl font-semibold text-[#F89B24]">empieza a ganar!</h1>
            </div>
            <form onSubmit={handleOnSubmitTwo}>
              <div className="flex flex-col gap-2">
                <select
                  {...register('vacante', {
                    required: { value: true, message: 'Este campo es requerido.' },
                  })}
                  defaultValue="default"
                  className="w-full cursor-pointer rounded-xl border border-[#6D6E71] bg-transparent px-4 py-2.5 text-sm font-semibold text-[#6D6E71] focus:border-[#1D429B] focus:outline-none focus:ring-0"
                >
                  <option value="default" disabled>
                    Seleccionar vacante
                  </option>
                  <option value="vendedor">Vendedor</option>
                  {rol !== 'Sales Team' && <option value="cliente">Cliente</option>}
                  <option value="tecnico">Técnico de campo</option>
                  <option value="empledoAdministrativo">Empleado administrativo</option>
                </select>
                {errors.vacante && <p className="self-start text-sm text-red-500">{errors.vacante.message}</p>}
                <input
                  {...register('nombre', {
                    required: { value: true, message: 'Este campo es requerido.' },
                  })}
                  type="text"
                  className="w-full cursor-pointer rounded-xl border border-[#6D6E71] bg-transparent px-4 py-2.5 text-sm font-semibold text-[#6D6E71] focus:border-[#1D429B] focus:outline-none focus:ring-0"
                  placeholder="Nombre referido"
                  required
                />
                {errors.nombre && <p className="self-start text-sm text-red-500">{errors.nombre.message}</p>}
                <input
                  {...register('apellido', {
                    required: { value: true, message: 'Este campo es requerido.' },
                  })}
                  type="text"
                  className="w-full cursor-pointer rounded-xl border border-[#6D6E71] bg-transparent px-4 py-2.5 text-sm font-semibold text-[#6D6E71] focus:border-[#1D429B] focus:outline-none focus:ring-0"
                  placeholder="Apellido referido"
                  required
                />
                {errors.apellido && <p className="self-start text-sm text-red-500">{errors.apellido.message}</p>}
                <input
                  {...register('telefono', {
                    required: { value: true, message: 'Este campo es requerido.' },
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: 'Número de teléfono no válido. Debe contener 10 dígitos.',
                    },
                  })}
                  type="number"
                  className="w-full cursor-pointer rounded-xl border border-[#6D6E71] bg-transparent px-4 py-2.5 text-sm font-semibold text-[#6D6E71] [appearance:textfield] focus:border-[#1D429B] focus:outline-none focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  placeholder="Teléfono referido"
                  required
                />
                {errors.telefono && <p className="self-start text-sm text-red-500">{errors.telefono.message}</p>}
                {watch('vacante') === 'vendedor' && (
                  <div>
                    <SearchConsultansts dataST={setMentor} />
                  </div>
                )}
              </div>

              <div className="mt-10 flex flex-col gap-5 text-lg font-semibold text-[#1D429B] xl:mt-5 [&>button]:mx-auto [&>button]:w-full [&>button]:rounded-full [&>button]:border-2 [&>button]:py-2">
                <button className="cursor-pointer border-[#1D429B] transition-all duration-300 hover:bg-[#1D429B] hover:text-[20px] hover:font-[750] hover:text-white">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        )
      case 4:
        return (
          <div className="mx-auto mt-5 flex h-[70%] w-[90%] flex-col justify-center md:w-[70%] xl:mt-10 xl:w-[60%]">
            <h1 className="mx-auto mt-5 w-[70%] text-center text-4xl font-semibold text-[#1D429B] xl:w-[60%] 2xl:w-[55%]">
              ¡Tu referido se ha enviado <span className="text-center text-[#F89B24]">exitosamente!</span>
            </h1>

            <div className="mt-10 flex flex-col gap-5 text-lg font-semibold text-[#1D429B] xl:mt-5 [&>button]:mx-auto [&>button]:w-full [&>button]:rounded-full [&>button]:border-2 [&>button]:py-2">
              <button
                className="cursor-pointer border-[#1D429B] transition-all duration-300 hover:bg-[#1D429B] hover:text-[20px] hover:font-[750] hover:text-white"
                onClick={() => setFormState(0)}
              >
                Referir a alguien más
              </button>
            </div>
          </div>
        )
    }
  }
  return (
    <>
      {getSalesTeams.isPending ? <Loading /> : ''}
      <div className="relative mx-auto w-screen xl:grid xl:h-screen xl:grid-cols-2">
        <div className="relative w-full items-center xl:flex xl:h-full">
          <motion.div
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative my-auto h-[650px] bg-[url('https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/ReferidosEmpleados/background.webp')] bg-cover bg-center xl:h-[96%] xl:w-[96%] xl:rounded-r-[40px] 2xl:h-[90%] 2xl:w-[90%] 2xl:rounded-r-[50px]"
          >
            <div className="inset-0 mx-auto flex w-[80%] items-center justify-between pt-5">
              <motion.img
                key={formState}
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-32 xl:absolute xl:left-20 xl:top-10 xl:w-44"
                src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/ReferidosEmpleados/Logo.svg"
                alt="logo windmar"
              />
              {formState >= 3 ? (
                <div>
                  <div className="hidden xl:block">
                    <motion.img
                      key={formState}
                      variants={imageVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className={`absolute left-0 ${formState === 3 ? 'top-[22%] w-[600px]' : 'top-[23%] w-[550px]'}`}
                      src={
                        formState === 3
                          ? `https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/ReferidosEmpleados/Refiere+y+gana2.webp`
                          : `https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/ReferidosEmpleados/Refiere+y+gana.webp`
                      }
                      alt="refiere y gana"
                    />
                    <motion.div
                      variants={imageVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className={`absolute top-[54%] xl:left-20 ${formState === 4 && 'hidden'}`}
                    >
                      <h1 className="text-2xl font-semibold text-white xl:w-[50%]">
                        Sé parte del crecimiento de la <span className="text-center text-[#F89B24]">compañía solar #1 en Puerto Rico. </span>
                      </h1>
                      <h1 className="mt-5 text-2xl text-white xl:w-[55%]">
                        Refiere {rol !== 'Sales Team' && 'clientes y'} personas interesadas en trabajar con nosotros.
                      </h1>
                    </motion.div>
                  </div>
                  <motion.img
                    key={formState}
                    variants={imageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className={`"h-16 2xl:w-48" w-32 xl:absolute xl:bottom-7 xl:left-16 2xl:right-[15%] ${formState === 3 ? 'xl:w-44 2xl:h-20' : 'xl:w-52 2xl:h-28'}`}
                    src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/ReferidosEmpleados/Energia-de-la-buena.webp"
                    alt="logo energia de la buena"
                  />
                </div>
              ) : (
                <div>
                  <motion.img
                    key={formState}
                    variants={imageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="h-16 w-32 xl:absolute xl:bottom-7 xl:right-16 xl:w-44 2xl:right-[15%] 2xl:h-20 2xl:w-48"
                    src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/ReferidosEmpleados/Energia-de-la-buena.webp"
                    alt="logo energia de la buena"
                  />
                </div>
              )}
            </div>
            {formState !== 3 ? (
              <div className="absolute bottom-12 xl:hidden">
                <motion.img
                  key={formState}
                  variants={imageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="mx-auto w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%]"
                  src={`${formState != 4 ? 'https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/ReferidosEmpleados/hombre+incio+mobile.webp' : 'https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/ReferidosEmpleados/Chica+Ok+mobile.webp'}`}
                  alt="hombre mobile"
                />
              </div>
            ) : (
              <motion.div
                key={formState}
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="pt-[15%] text-center text-white xl:hidden"
              >
                <h1 className="mx-auto w-[60%] text-xl font-bold md:w-[45%] md:text-2xl">
                  Sé parte del crecimiento de la <span className="text-[#F89B24]">compañía solar #1 en Puerto Rico.</span>
                </h1>
                <p className="mx-auto mt-10 w-[65%] text-xl font-medium md:w-[48%] md:text-2xl">
                  Refiere {rol !== 'Sales Team' && 'clientes y'} personas interesadas en trabajar con nosotros.
                </p>
              </motion.div>
            )}
          </motion.div>
          {formState >= 3 ? (
            <motion.img
              key={formState}
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className={`absolute bottom-0 right-0 hidden xl:block ${formState === 3 ? 'xl:w-[50%]' : 'xl:w-[60%]'}`}
              src={
                formState === 3
                  ? `https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/ReferidosEmpleados/Hombre+saltando.webp`
                  : `https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/ReferidosEmpleados/Chica+Ok.webp`
              }
              alt="hombre"
            />
          ) : (
            <motion.img
              key={formState}
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute bottom-0 hidden xl:block xl:w-[75%] 2xl:w-[65%]"
              src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/ReferidosEmpleados/hombre+inicio.webp"
              alt="hombre"
            />
          )}
        </div>
        <div className="-translate-y-12 rounded-t-[50px] bg-white pt-8 xl:translate-y-0 xl:pt-20 2xl:translate-y-0">{renderContent()}</div>
      </div>
    </>
  )
}

import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { GrClose } from 'react-icons/gr'
import { useParams } from 'react-router-dom'
import { updatePrecualificación } from '../../../hooks/fetchDataApi'
import ModalEnvio from '../../../pages/FormCRM/ModalEnvio'
import SearchConsultansts from '../../Inputs/SearchConsultansts'

export default function FormLeads_PR_CRM() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onBlur' })

  const { id } = useParams()
  const owner = new URLSearchParams(location.search).get('owner') || ''

  const [elementos, setElementos] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [handleOther, setHandleOther] = useState(false)
  const [error, setError] = useState(null)
  const [errorAddElement, setErrorAddElement] = useState(null)
  const [Modal, setModal] = useState(false)
  const [dataSalesTeamSelected, setDataSalesTeamSelected] = useState({})

  const addNotes = useMutation({
    mutationFn: (data) => updatePrecualificación(id, data),
    onSettled: (data, error) => {
      if (data) {
        console.log('response', data?.data?.zohoResponse)
      } else {
        console.error('Error al enviar el formulario', error)
        setError(error?.message || 'Error desconocido')
      }
      setModal(true)
    },
  })

  const handleProductSelect = (e) => {
    const elemento = e.target.value
    if (elemento === 'otros') {
      setInputValue('')
      setHandleOther(true)
      return
    }
    setHandleOther(false)
    if (!elementos.includes(elemento)) {
      setElementos([...elementos, elemento])
    }
  }

  const handleProductSelectInput = () => {
    setErrorAddElement('')
    if (inputValue.trim() !== '' && !elementos.includes(inputValue)) {
      setElementos([...elementos, inputValue])
      setInputValue('')
    }
  }

  const eliminarElemento = (index) => {
    setElementos(elementos.filter((elemento, i) => i !== index))
  }

  const handleOnSubmitPlacas = handleSubmit(async (data) => {
    const Lead_Notes = `Cita coordinada: ${data.Cita_Coordinada ? data.Cita_Coordinada : 'No hay cita coordinada'}\nPRODUCTO: ${data.producto}\nTecho es en Concreto: ${data?.Techo_en_Concreto}\nLey de quiebra en los últimos 7 años: ${data?.Ley_de_Quiebra_Ultimos_7_A_os}\nEs usted el dueño de la vivienda según el registro de la propiedad: ${data?.Due_o_de_Vivienda_Segun_Registro_de_Propiedad}, ${data?.propietario}\nEmpírica mayor a 650 puntos: ${data?.Empirica_Mayor_a_650_Puntos}\nNúmero alterno: ${data.Numero_Alterno ? data.Numero_Alterno : 'No hay numero alterno'}\nÚltimo tratamiento dado: ${data.Ultimo_Tratamiento_Dado ? data.Ultimo_Tratamiento_Dado : 'No tiene fecha'}\n¿Has tenido contacto con alguno de nuestros consultores?: ${data?.Contacto_consultores}, ${dataSalesTeamSelected?.Name}\nPrecualificación realizada por: ${owner}`

    Object.keys(data).forEach((key) => {
      if (data[key] === 'Si') data[key] = true
      if (data[key] === 'No') data[key] = false
      if (data[key] === '' && data[key].length === 0) {
        delete data[key]
      }
    })

    delete data.pin
    delete data.producto
    delete data.Cita_Coordinada
    delete data.Elementos_en_el_Techo
    delete data.Contacto_consultores
    delete data.propietario
    data = {
      ...data,
      Lead_Notes,
      ...(watch('Contacto_consultores') === 'Si' && { Sales_Rep: dataSalesTeamSelected?.Id }),
    }
    console.log(data)
    addNotes.mutate(data)
  })

  const handleOnSubmitRoofing = handleSubmit(async (data) => {
    const Lead_Notes = `CITA COORDINADA: ${data.Cita_Coordinada ? data.Cita_Coordinada : 'No hay cita coordinada'}\nPRODUCTO: ${data.producto}\nTecho es en Concreto: ${data?.Techo_en_Concreto}\nLey de quiebra en los últimos 7 años: ${data?.Ley_de_Quiebra_Ultimos_7_A_os}\nEs usted el dueño de la vivienda según el registro de la propiedad: ${data?.Due_o_de_Vivienda_Segun_Registro_de_Propiedad}, ${data?.propietario}\nEmpírica mayor a 650 puntos: ${data?.Empirica_Mayor_a_650_Puntos}\nNúmero alterno: ${data.Numero_Alterno ? data.Numero_Alterno : 'No hay numero alterno'}\nTecho es transitable: ${data?.Techo_Transitable}\nÚltimo tratamiento dado: ${data.Ultimo_Tratamiento_Dado ? data.Ultimo_Tratamiento_Dado : 'No tiene fecha'}\nPIN DE UBICACIÓN: ${data.Pin_de_Ubicacion ? data.Pin_de_Ubicacion : 'No hay pin de ubicacion'}\nElementos en el techo: ${data.Elementos_en_el_Techo === 'Si' ? elementos : 'No hay elementos en el techo'}\n¿Has tenido contacto con alguno de nuestros consultores?: ${data?.Contacto_consultores}, ${dataSalesTeamSelected.Name}\nPrecualificación realizada por: ${owner}`
    if (!inputValue) {
      data = {
        ...data,
        Lead_Notes,
        ...(watch('Contacto_consultores') === 'Si' && { Sales_Rep: dataSalesTeamSelected?.Id }),
      }

      Object.keys(data).forEach((key) => {
        if (data[key] === 'Si') data[key] = true
        if (data[key] === 'No') data[key] = false

        if (data[key] === '' || (Array.isArray(data[key]) && data[key].length === 0)) {
          delete data[key]
        }
      })

      delete data.pin
      delete data.producto
      delete data.Cita_Coordinada
      delete data.Contacto_consultores
      delete data.propietario
      if(!data.Elementos_en_el_Techo){
        delete data.Elementos_en_el_Techo
      }else {
        data.Elementos_en_el_Techo = elementos
      }

      console.log(data)
      addNotes.mutate(data)
    } else {
      setErrorAddElement('Agrega el elemento en el techo antes de enviar el formulario')
      console.log('Añade el elemento en el techo antes de enviar el formulario')
    }
  })

  const handleOnSubmitAnker = handleSubmit(async (data) => {
    const Lead_Notes = `\nPRODUCTO: ${data.producto}\nLey de quiebra en los últimos 7 años: ${data?.Ley_de_Quiebra_Ultimos_7_A_os}\nEs usted el dueño de la vivienda según el registro de la propiedad: ${data?.Due_o_de_Vivienda_Segun_Registro_de_Propiedad}, ${data?.propietario}\nEmpírica mayor a 650 puntos: ${data?.Empirica_Mayor_a_650_Puntos}\nNúmero alterno: ${data.Numero_Alterno ? data.Numero_Alterno : 'No hay numero alterno'}\n¿Has tenido contacto con alguno de nuestros consultores?: ${data?.Contacto_consultores}, ${dataSalesTeamSelected.Name && dataSalesTeamSelected.Name}\nPrecualificación realizada por: ${owner}`

    data = {
      ...data,
      Lead_Notes,
      ...(watch('Contacto_consultores') === 'Si' && { Sales_Rep: dataSalesTeamSelected?.Id }),
    }

    Object.keys(data).forEach((key) => {
      if (data[key] === 'Si') data[key] = true
      if (data[key] === 'No') data[key] = false

      if (data[key] === '' || !data[key] || (Array.isArray(data[key]) && data[key].length === 0)) {
        if (
          key !== 'Ley_de_Quiebra_Ultimos_7_A_os' &&
          key !== 'Due_o_de_Vivienda_Segun_Registro_de_Propiedad' &&
          key !== 'Empirica_Mayor_a_650_Puntos'
        ) {
          delete data[key]
        }
      }
    })
    delete data.producto
    delete data.Contacto_consultores
    delete data.Cita_Coordinada
    delete data.propietario
    delete data.Elementos_en_el_Techo
    console.log(data)
    addNotes.mutate(data)
  })

  useEffect(() => {
    if (watch('Elementos_en_el_Techo') === 'No') {
      setElementos([])
      setInputValue('')
      setErrorAddElement(null)
    }
  }, [watch('Elementos_en_el_Techo')])

  const valiteTime = () => {
    const now = new Date();
    // Ajustar el tiempo para que no haya desfase por la zona horaria
    const offset = now.getTimezoneOffset() * 60000 // Convertir minutos a milisegundos
    const localISOTime = new Date(now - offset).toISOString().slice(0, 16)
    return localISOTime
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-blue-50 to-blue-100 font-semibold">
      {Modal && <ModalEnvio error={error} setModal={setModal} Id={id} module={'Leads'} />}
      <div className="mx-auto my-8 flex w-[90%] flex-col items-center justify-center rounded-2xl bg-white p-4 shadow-lg md:w-[80%] md:p-10 xl:w-[60%]">
        <div className="text-center">
          <h1 className="text-3xl text-blue-800 md:text-4xl">!Crea la precualificación</h1>
          <h1 className="text-3xl text-orange-500 md:text-4xl">de un Lead!</h1>
        </div>
        <form
          onSubmit={
            watch('producto') === 'sistemaPlacas' ? handleOnSubmitPlacas : watch('producto') === 'Anker' ? handleOnSubmitAnker : handleOnSubmitRoofing
          }
          className="mt-5 w-full"
        >
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-4">
              <label htmlFor="producto" className="">
                Seleccione el producto:
              </label>
              <select
                id="producto"
                {...register('producto', {
                  required: { value: true, message: 'Este campo es requerido.' },
                  validate: (value) => value !== 'Seleccionar producto' || 'Este campo es requerido.',
                })}
                className="w-full cursor-pointer rounded-xl border border-blue-300 bg-white px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-0"
              >
                <option selected disabled>
                  Seleccionar producto
                </option>
                <option value="roofing">ROOFING</option>
                <option value="sistemaPlacas">SISTEMA DE PLACAS</option>
                <option value="Roofing-SistemaPlacas">ROOFING Y SISTEMA DE PLACAS</option>
                <option value="Anker">ANKER</option>
              </select>
              {errors.producto && <p className="self-start text-sm text-red-500">{errors.producto.message}</p>}
            </div>
            <div className="flex flex-col gap-4 rounded-2xl border-2 border-blue-200 bg-blue-50 p-4">
              <div>
                <label htmlFor="phone" className="">
                  Número alterno:
                </label>
                <input
                  id="phone"
                  {...register('Numero_Alterno', {
                    pattern: {
                      value: /^\d{10}$/,
                      message: 'El número debe tener 10 dígitos',
                    },
                  })}
                  type="number"
                  placeholder="Número alterno"
                  className="peer block w-full cursor-pointer rounded-xl border border-blue-300 bg-white px-4 py-2.5 text-sm [appearance:textfield] focus:border-blue-500 focus:outline-none focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
              </div>
              {errors.Numero_Alterno && <p className="self-start text-sm text-red-500">{errors.Numero_Alterno.message}</p>}
              {watch('producto') !== 'Anker' && (
                <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
                  {watch('producto') !== 'sistemaPlacas' && (
                    <div className="w-full">
                      <label htmlFor="date" className="">
                        Último tratamiento dado:
                      </label>
                      <input
                        id="date"
                        {...register('Ultimo_Tratamiento_Dado', {
                          max: { value: new Date().toISOString().split('T')[0], message: 'La fecha no puede ser menor a la actual' },
                        })}
                        max={new Date().toISOString().split('T')[0]}
                        type="date"
                        placeholder="Último tratamiento dado"
                        className="peer block w-full cursor-pointer rounded-xl border border-blue-300 bg-white px-4 py-2.5 text-sm [appearance:textfield] focus:border-blue-500 focus:outline-none focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                      />
                      {errors.Ultimo_Tratamiento_Dado && <p className="self-start text-sm text-red-500">{errors.Ultimo_Tratamiento_Dado.message}</p>}
                    </div>
                  )}
                  <div className="w-full">
                    <label htmlFor="date" className="">
                      Cita coordinada:
                    </label>
                    <input
                      id="date"
                      {...register('Cita_Coordinada', {
                        validate: (value) => {
                          const selectedDate = new Date(value)
                          const currentDate = new Date()
                          // Comparar fecha y hora
                          return selectedDate >= currentDate || 'La fecha y hora no pueden ser menores a la actual'
                        },
                      })}
                      min={valiteTime()}
                      type="datetime-local"
                      placeholder="Cita coordinada"
                      className="peer block w-full cursor-pointer rounded-xl border border-blue-300 bg-white px-4 py-2.5 text-sm [appearance:textfield] focus:border-blue-500 focus:outline-none focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    />
                    {errors.Cita_Coordinada && <p className="self-start text-sm text-red-500">{errors.Cita_Coordinada.message}</p>}
                  </div>
                </div>
              )}
            </div>

            <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-4">
              <div className="mt-3 flex justify-between gap-5">
                <label htmlFor="ley" className="w-[80%]">
                  Ley de quiebra en los últimos 7 años:
                </label>
                <div className="flex items-center gap-2">
                  <span>Sí</span>
                  <input type="radio" value={'Si'} name="ley" {...register('Ley_de_Quiebra_Ultimos_7_A_os')} />
                  <span>No</span>
                  <input type="radio" value={'No'} defaultChecked name="ley" {...register('Ley_de_Quiebra_Ultimos_7_A_os')} />
                </div>
              </div>
              <div className="mt-3 flex justify-between gap-5">
                <label htmlFor="puntos" className="w-[80%]">
                  Empírica mayor a 650 puntos:
                </label>
                <div className="flex items-center gap-2">
                  <span>Sí</span>
                  <input type="radio" value={'Si'} name="puntos" {...register('Empirica_Mayor_a_650_Puntos')} />
                  <span>No</span>
                  <input type="radio" value={'No'} defaultChecked name="puntos" {...register('Empirica_Mayor_a_650_Puntos')} />
                </div>
              </div>
              <div>
                <div className="mt-3 flex justify-between gap-5">
                  <label htmlFor="consultores" className="w-[80%]">
                    ¿Has tenido contacto con alguno de nuestros consultores?
                  </label>
                  <div className="flex items-center gap-2">
                    <span>Sí</span>
                    <input type="radio" value={'Si'} name="consultores" {...register('Contacto_consultores')} />
                    <span>No</span>
                    <input type="radio" value={'No'} defaultChecked name="consultores" {...register('Contacto_consultores')} />
                  </div>
                </div>
                {watch('Contacto_consultores') === 'Si' && <SearchConsultansts dataST={setDataSalesTeamSelected} />}
              </div>
              <div className="mt-3 flex justify-between gap-5">
                <label htmlFor="propietario" className="w-[80%]">
                  Es usted el dueño de la vivienda según el registro de la propiedad:
                </label>
                <div className="flex items-center gap-2">
                  <span>Sí</span>
                  <input type="radio" value={'Si'} name="propietario" {...register('Due_o_de_Vivienda_Segun_Registro_de_Propiedad')} />
                  <span>No</span>
                  <input type="radio" value={'No'} defaultChecked name="propietario" {...register('Due_o_de_Vivienda_Segun_Registro_de_Propiedad')} />
                </div>
              </div>
              <div className="mt-2">
                <input
                  {...register('propietario')}
                  type="text"
                  className="peer mt-2 block w-full cursor-pointer rounded-xl border border-blue-300 bg-white px-4 py-2.5 text-sm [appearance:textfield] focus:border-blue-500 focus:outline-none focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  placeholder="Descripción propietario"
                />
              </div>
            </div>

            {watch('producto') !== 'Anker' && (
              <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-4">
                <div className="mt-3 flex justify-between gap-5">
                  <label htmlFor="techo" className="w-[80%]">
                    Techo es en Concreto
                  </label>
                  <div className="flex items-center gap-2">
                    <span>Sí</span>
                    <input type="radio" value={'Si'} name="techo" {...register('Techo_en_Concreto')} />
                    <span>No</span>
                    <input type="radio" value={'No'} defaultChecked name="techo" {...register('Techo_en_Concreto')} />
                  </div>
                </div>
                {watch('producto') !== 'sistemaPlacas' && watch('producto') !== 'Anker' && (
                  <div>
                    <div className="mt-3 flex justify-between gap-5">
                      <label htmlFor="puntos" className="w-[80%]">
                        El techo es transitable
                      </label>
                      <div className="flex items-center gap-2">
                        <span>Sí</span>
                        <input type="radio" value={'Si'} name="techoInestable" {...register('Techo_Transitable')} />
                        <span>No</span>
                        <input type="radio" value={'No'} defaultChecked name="techoInestable" {...register('Techo_Transitable')} />
                      </div>
                    </div>
                    <div className="mt-3 flex justify-between gap-5">
                      <label htmlFor="elementoTecho" className="">
                        Elementos en el techo
                      </label>
                      <div className="flex items-center gap-2">
                        <span>Sí</span>
                        <input type="radio" value={'Si'} name="elementoTecho" {...register('Elementos_en_el_Techo')} />
                        <span>No</span>
                        <input type="radio" value={'No'} defaultChecked name="elementoTecho" {...register('Elementos_en_el_Techo')} />
                      </div>
                    </div>
                    <div className="flex h-full flex-col">
                      <ul className="flex flex-wrap items-center gap-3 overflow-auto">
                        {elementos.map((elemento, index) => (
                          <li key={index} className="text- my-2 flex items-center gap-3 rounded-xl border border-black bg-white px-4 py-2">
                            {elemento}
                            <div onClick={() => eliminarElemento(index)}>
                              <GrClose className="cursor-pointer" />
                            </div>
                          </li>
                        ))}
                      </ul>
                      {watch('Elementos_en_el_Techo') === 'Si' && (
                        <select
                          id="producto"
                          onChange={handleProductSelect}
                          className="my-2 w-full cursor-pointer rounded-xl border border-blue-300 bg-white px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-0"
                        >
                          <option selected disabled>
                            Selecionar elemento
                          </option>
                          <option value="Sisterna">Sisterna</option>
                          <option value="Calentador">Calentador</option>
                          <option value="otros">Otros</option>
                        </select>
                      )}
                    </div>
                    {handleOther && watch('Elementos_en_el_Techo') === 'Si' && (
                      <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
                        <input
                          type="text"
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          placeholder="Escribe los elementos en el techo"
                          className="peer mb-3 flex-grow cursor-pointer rounded-xl border border-blue-300 bg-white px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-0"
                        />
                        <button
                          type="button"
                          onClick={handleProductSelectInput}
                          className={`mb-3 rounded-xl bg-blue-500 px-4 py-2 text-white ${errorAddElement ? 'border-4 border-red-500' : 'border border-blue-300'}`}
                        >
                          Agregar
                        </button>
                      </div>
                    )}
                    {errorAddElement && <p className="mb-3 ml-1 self-start text-red-500">{errorAddElement}</p>}
                    <div className="mt-3 flex justify-between gap-5">
                      <label htmlFor="elementoTecho" className="">
                        PIN DE UBICACIÓN
                      </label>
                      <div className="flex items-center gap-2">
                        <span>Sí</span>
                        <input type="radio" value={'Si'} name="pin" {...register('pin')} />
                        <span>No</span>
                        <input type="radio" value={'No'} defaultChecked name="pin" {...register('pin')} />
                      </div>
                    </div>
                    {watch('pin') === 'Si' && (
                      <input
                        id="pin"
                        {...register('Pin_de_Ubicacion')}
                        type="url"
                        className="peer mt-2 block w-full cursor-pointer rounded-xl border border-blue-300 bg-white px-4 py-2.5 text-sm [appearance:textfield] focus:border-blue-500 focus:outline-none focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                        placeholder="PIN DE UBICACIÓN"
                      />
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="mt-10 flex flex-col gap-5 text-lg xl:mt-5 [&>button]:mx-auto [&>button]:w-full [&>button]:rounded-full [&>button]:border-2 [&>button]:py-2">
            <button className="cursor-pointer border-blue-500 bg-blue-500 text-white transition-all duration-300 hover:bg-blue-600 hover:text-[20px] hover:font-[750]">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

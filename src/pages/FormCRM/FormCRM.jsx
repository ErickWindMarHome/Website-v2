import { useEffect, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useLocation, useParams } from 'react-router-dom'
import { postFormSalesTeam } from '../../hooks/fetchDataApi'
import ModalEnvio from './ModalEnvio'

function FormCRM() {
  const { id } = useParams()
  const location = useLocation()
  const Owner = new URLSearchParams(location.search).get('Owner')

  const [SalesTeamId, setSalesTeamId] = useState(null)
  const [Modal, setModal] = useState(false)
  const [Error, setError] = useState(null)

  const postFormSalesTeamMutation = useMutation({
    mutationFn: (data) => postFormSalesTeam(data),
    onSettled: (data, error) => {
      if (data) {
        console.log('response', data?.data?.zohoResponse?.salesTeam?.details?.id)
        setSalesTeamId(data.data.zohoResponse.salesTeam.details.id)
      } else {
        handlePostError(error)
      }
      setModal(true)
    },
  })

  const handlePostError = (error) => {
    console.log('Error al enviar el formulario', error)
    setError(error?.message || 'Error desconocido')
  }

  useEffect(() => {
    if (Owner !== null) {
      postFormSalesTeamMutation.mutate({ Recruitment_Id: id, Owner })
      console.log('Datos enviados:', { Recruitment_Id: id, Owner })
    }
  }, [Owner, id])

  if (Owner === null) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <p>Por favor, agrega un Owner en la URL</p>
      </div>
    )
  }

  return (
    <>
      {Modal && <ModalEnvio error={Error} setModal={setModal} Id={SalesTeamId} module={'CustomModule33'}/>}
      <div className="flex h-screen w-screen items-center justify-center">
        <p>Enviando datos...</p>
      </div>
    </>
  )
}

export default FormCRM

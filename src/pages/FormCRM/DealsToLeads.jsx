import { useMutation } from '@tanstack/react-query'
import { useLocation, useParams } from 'react-router-dom'
import { postDealtoLead } from '../../hooks/fetchDataApi'
import { useEffect, useState } from 'react'

import ModalEnvioDeal from './ModalEnvioDeal'
export default function DealsToLeads() {
  const { id } = useParams()
  const [dealId, setDealId] = useState(null)
  const [Modal, setModal] = useState(false)
  const [Error, setError] = useState(null)
  const location = useLocation()
  const Owner = new URLSearchParams(location.search).get('Owner')

  const getDealMutation = useMutation({
    mutationFn: (data) => postDealtoLead(data),
    onSettled: (data, error) => {
      if (data) {
        setDealId(data?.data?.zohoResponse?.details?.id)
      } else {
        console.error(error)
        handleGetError(error)
      }
      setModal(true)
    },
  })

  const handleGetError = (error) => {
    console.error('Error al enviar el formulario', error)
    setError(error?.message || 'Error desconocido')
  }

  useEffect(() => {
    if (Owner !== null) {
      getDealMutation.mutate(`Id=${id}&Owner=${Owner}`)
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
      {' '}
      {Modal && <ModalEnvioDeal error={Error} setModal={setModal} DealId={dealId} />}
      <div className="flex h-screen w-screen items-center justify-center">
        <p>Enviando datos...</p>
      </div>
    </>
  )
}

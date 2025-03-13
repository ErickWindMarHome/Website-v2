import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Deplaymaker = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.location.href = '/pr/cambiate-a-energia-solar?utm_source=Influencers&utm_campaign=deplaymaker'
  }, [navigate])

  return null
}

export default Deplaymaker

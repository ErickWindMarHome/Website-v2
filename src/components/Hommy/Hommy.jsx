import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Hommy = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.location.href =
      'https://teams.microsoft.com/l/app/f6405520-7907-4464-8f6e-9889e2fb7d8f?templateInstanceId=342a3e29-3c1f-4075-97df-65addfcb70e6&environment=Default-657cda0d-a035-4c3f-a228-3d6362dad07d'
  }, [navigate])

  return null
}

export default Hommy

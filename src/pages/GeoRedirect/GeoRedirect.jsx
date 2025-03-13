import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setLocacion } from '../../features/states/statesSlice'

const GeoRedirect = () => {
  const navegate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    if (window.location.pathname === '' || window.location.pathname === '/') {
      const data = async () => {
        await fetch('/api')
          .then((response) => response.text())
          .then((data) => {
            if (data === 'United States') {
              navegate('/fl')
              dispatch(setLocacion('fl'))
            } else {
              navegate('/pr')
              dispatch(setLocacion('pr'))
            }

            //if (data === "Colombia") navegate("/fl");
          })
          .catch(() => {
            navegate('/pr')
            dispatch(setLocacion('pr'))
          })
      }
      data()
    }
  }, [navegate])

  return <div>Redirecting...</div>
}

export default GeoRedirect

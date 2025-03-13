import './None.css'

import { useEffect } from 'react'
import { setLocacion } from '../../features/states/statesSlice'
import { useDispatch, useSelector } from 'react-redux'

import FooterBar from '../../layouts/General/FooterBar/FooterBar'
import Barra from '../../layouts/General/Barra/Barra'

import Header from '../../layouts/General/Header/Header'
import { Link } from 'react-router-dom'

const None = () => {
  const mobileQuery = useSelector((state) => state.states.mobileQuery)

  const dispatch = useDispatch()
  let locacion = ''

  if (window.location.pathname.length > 2) {
    locacion = window.location.pathname.substring(1, 3)
  }

  console.log('La locacion es:', locacion, 'y el mobileQuery es:', mobileQuery)

  useEffect(() => {
    if (locacion === 'fl') {
      dispatch(setLocacion('fl'))
      document.title = 'Windmar Solar'
    } else {
      dispatch(setLocacion('pr'))
      document.title = 'Windmar Home'
    }
  }, [locacion, dispatch])

  return locacion === 'fl' ? (
    <>
      <Header />
      <Barra caseLocation="getestimate" color="blue" />
      <div className="None">
        <Link to={'/fl'}>
          <img src="https://scms.windmar.com/uploads/1_bc5147e57c.png" />
        </Link>
      </div>
    </>
  ) : (
    <>
      <Header />

      <div className="None">
        <Link to={'/pr'}>
          <img src="https://scms.windmar.com/uploads/1_bc5147e57c.png" />
        </Link>
      </div>

      {window.location.pathname === '/pr/como-funciona' ? <FooterBar /> : null}
    </>
  )
}

export default None

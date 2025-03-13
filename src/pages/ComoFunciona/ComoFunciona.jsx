import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import Header from '../../layouts/General/Header/Header'
import Lema from '../../layouts/Home/Lema/Lema'

function ComoFunciona() {
  const locacion = useSelector((state) => state.states.locacion)
  useEffect(() => {
    if (locacion === 'fl') {
      document.title = 'Windmar Solar'
    } else {
      document.title = 'Windmar Home'
    }
  }, [locacion])

  return locacion === 'fl' ? (
    <>
      <Header />
      <div className="base"></div>
      <Lema rute={'comofunciona'} />
    </>
  ) : (
    <>
      <Header />
      <div className="base"></div>
      <Lema rute={'comofunciona'} />
    </>
  )
}

export default ComoFunciona

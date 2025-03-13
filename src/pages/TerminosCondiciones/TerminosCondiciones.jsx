import React from 'react'
import { useSelector } from 'react-redux'
import TerminosCondiciones_EN from './TerminosCondiciones_EN'
import TerminosCondiciones_ES from './TerminosCondiciones_ES'
export default function TerminosCondiciones() {
  const { lenguaje, locacion } = useSelector((state) => state.states)
  if (lenguaje === 'en') {
    return <TerminosCondiciones_EN locacion={locacion} />
  } else {
    return <TerminosCondiciones_ES locacion={locacion} />
  }
}

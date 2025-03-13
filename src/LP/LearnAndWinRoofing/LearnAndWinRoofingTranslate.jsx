import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LearnAndWinRoofingEspañol from './LearnAndWinRoofingEspañol'
import LearnAndWinRoofing from './LearnAndWinRoofing'
import { setlenguaje } from '../../features/states/statesSlice'
import useTitle from '../../hooks/useTitle'

export default function LearnAndWinRoofingTranslate() {
  useTitle('Vacation roofing promotion - WindMar')
  const lenguaje = useSelector((state) => state.states.lenguaje)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setlenguaje('en'))
  }, [])
  return lenguaje === 'es' ? <LearnAndWinRoofingEspañol /> : <LearnAndWinRoofing />
}

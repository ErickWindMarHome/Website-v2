import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setlenguaje } from '../../features/states/statesSlice'
import useTitle from '../../hooks/useTitle'
import RoofQuotingCalculatorES from './RoofQuotingCalculatorES'
import RoofQuotingCalculator from './RoofQuotingCalculator'

export default function RoofingTranslate() {
  useTitle('Roofing - WindMar')
  const lenguaje = useSelector((state) => state.states.lenguaje)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setlenguaje('en'))
  }, [])
  return lenguaje === 'es' ? <RoofQuotingCalculatorES /> : <RoofQuotingCalculator />
}

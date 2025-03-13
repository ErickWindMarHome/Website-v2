import CybertruckFL_JSD_EN from './CybertruckFL_JSD_EN'
import CybertruckFL_JSD_ES from './CybertruckFL_JSD_ES'
import { useSelector } from 'react-redux'
import useTitle from '../../../hooks/useTitle'

const CyberTranslate_JSD = () => {
  useTitle('Cybertruck promotion - WindMar')
  const lenguaje = useSelector((state) => state.states.lenguaje)
  return <>{lenguaje === 'en' ? <CybertruckFL_JSD_EN /> : <CybertruckFL_JSD_ES />}</>
}

export default CyberTranslate_JSD

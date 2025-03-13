import { getUTMs } from '../../features/getUTM/getUTM'
import CambiateNew from './CambiateNew'
import CambiateNewTel from './CambiateNewTel'

export default function SwichCambiate() {
  const utms = getUTMs()
  if (utms.UTM_Source === 'Direct' || utms.UTM_Source === 'Organic'||utms.UTM_Source === undefined) {
    return <CambiateNewTel />
  }else{
    return <CambiateNew />
  }
}

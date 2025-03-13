import './Energizalo.css'
import { useSelector } from 'react-redux'

const Energizalo = () => {
  const mobileQuery = useSelector((state) => state.states.mobileQuery)

  return (
    <div className={`Energizalo-${mobileQuery}`}>
      <div>
        <p>Nunca sufras de interrupciones en tu apartamento</p>
        <h1>¡energízalo con Anker hoy!</h1>
      </div>
    </div>
  )
}

export default Energizalo

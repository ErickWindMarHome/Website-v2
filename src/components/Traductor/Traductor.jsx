import { useSelector, useDispatch } from 'react-redux'
import { setlenguaje } from '../../features/states/statesSlice'

const Traductor = ({ className }) => {
  const dispatch = useDispatch()
  const lenguaje = useSelector((state) => state.states.lenguaje)

  return (
    <div className={`box-border ${className}`}>
      <div className="w-24 px-2 lg:w-full lg:p-0">
        <select
          aria-label="Traducir"
          value={lenguaje}
          onChange={(event) => dispatch(setlenguaje(event.target.value))}
          className="mb-2 h-[40px] w-full rounded-lg border border-[#1e429b] bg-white px-2 text-sm font-semibold text-[#1e429b] focus:outline-none focus:ring-2"
        >
          <option value="es">ESP</option>
          <option value="en">ENG</option>
        </select>
      </div>
    </div>
  )
}

export default Traductor

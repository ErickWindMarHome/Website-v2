import { useState } from 'react'
import { MenuRoutes } from '../../../Routes/MenuRutes'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function MenuPromociones() {
  const [isOpen, setIsOpen] = useState(false)
  const ruta = window.location.pathname
  const locacion = useSelector((state) => state.states.locacion)
  const fl = MenuRoutes.fl
  const pr = MenuRoutes.pr

  return locacion === 'fl' ? (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded border-none px-2 py-1 text-xl font-medium text-[#1e429b] transition duration-200 hover:bg-[#1e429b] hover:text-white lg:text-sm"
      >
        PROMOTIONS
      </button>
      {isOpen && (
        <div className="z-10 flex flex-col gap-1.5 rounded-lg bg-white p-2 lg:absolute">
          <Link
            className={`${ruta === fl.CYBERTRUCK.rute ? 'bg-[#1e429b] text-white' : 'text-[#1e429b]'} rounded border-none px-2 py-1 text-left text-xl font-medium transition duration-200 hover:bg-[#1e429b] hover:text-white lg:text-sm`}
            to={fl.CYBERTRUCK.rute}
          >
            {fl.CYBERTRUCK.name}
          </Link>
          <Link
            className={`${ruta === fl.VACATION_ROOFING.rute ? 'bg-[#1e429b] text-white' : 'text-[#1e429b]'} rounded border-none px-2 py-1 text-left text-xl font-medium transition duration-200 hover:bg-[#1e429b] hover:text-white lg:text-sm`}
            to={fl.VACATION_ROOFING.rute}
          >
            {fl.VACATION_ROOFING.name}
          </Link>
        </div>
      )}
    </div>
  ) : (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded border-none px-2 py-1 text-xl font-medium text-[#1e429b] transition duration-200 hover:bg-[#1e429b] hover:text-white lg:text-sm"
      >
        PROMOCIONES
      </button>
      {isOpen && (
        <div className="z-10 flex flex-col gap-1.5 rounded-lg bg-white p-2 lg:absolute">
          <Link
            className={`${ruta === pr.CYBERTRUCK.rute ? 'bg-[#1e429b] text-white' : 'text-[#1e429b]'} rounded border-none px-2 py-1 text-left text-xl font-medium transition duration-200 hover:bg-[#1e429b] hover:text-white lg:text-sm`}
            to={pr.CYBERTRUCK.rute}
          >
            {pr.CYBERTRUCK.name}
          </Link>
          <Link
            className={`${ruta === pr.ROAD_TO_50K.rute ? 'bg-[#1e429b] text-white' : 'text-[#1e429b]'} rounded border-none px-2 py-1 text-left text-xl font-medium transition duration-200 hover:bg-[#1e429b] hover:text-white lg:text-sm`}
            to={pr.ROAD_TO_50K.rute}
          >
            {pr.ROAD_TO_50K.name}
          </Link>
        </div>
      )}
    </div>
  )
}

export default MenuPromociones

import { useState } from 'react'
import { MenuRoutes } from '../../../Routes/MenuRutes'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function MenuReferidos() {
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
        REFERRALS
      </button>
      {isOpen && (
        <div className="z-10 flex flex-col gap-1.5 rounded-lg bg-white p-2 text-xl lg:absolute lg:text-sm">
          <Link
            className={`${
              ruta === fl.REFERRALS.rute ? 'bg-[#1e429b] text-white' : 'text-[#1e429b]'
            } rounded border-none px-2 py-1 text-left text-xl font-medium no-underline transition duration-200 hover:bg-[#1e429b] hover:text-white lg:text-sm`}
            to={fl.REFERRALS.rute}
          >
            {fl.REFERRALS.name}
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
        REFERIDOS
      </button>
      {isOpen && (
        <div className="z-10 flex flex-col gap-1.5 rounded-lg bg-white p-2 text-xl lg:absolute lg:text-sm">
          <Link
            className={`${
              ruta === pr.INSTALERS.rute ? 'bg-[#1e429b] text-white' : 'text-[#1e429b]'
            } rounded border-none px-2 py-1 text-left text-xl font-medium no-underline transition duration-200 hover:bg-[#1e429b] hover:text-white lg:text-sm`}
            to={pr.INSTALERS.rute}
          >
            {pr.INSTALERS.name}
          </Link>
          <Link
            className={`${
              ruta === pr.CLIENTS.rute ? 'bg-[#1e429b] text-white' : 'text-[#1e429b]'
            } rounded border-none px-2 py-1 text-left text-xl font-medium no-underline transition duration-200 hover:bg-[#1e429b] hover:text-white lg:text-sm`}
            to={pr.CLIENTS.rute}
          >
            {pr.CLIENTS.name}
          </Link>
        </div>
      )}
    </div>
  )
}

export default MenuReferidos

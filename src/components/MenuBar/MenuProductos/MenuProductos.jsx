import { useState } from 'react'
import { MenuRoutes } from '../../../Routes/MenuRutes'
import { useSelector } from 'react-redux'

function MenuProductos() {
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
        PRODUCTS
      </button>
      {isOpen && (
        <div className="z-10 flex flex-col gap-1.5 rounded-lg bg-white p-2 lg:absolute">
          <a
            className={`${
              ruta === fl.SOLAR.rute ? 'bg-[#1e429b] text-white' : 'text-[#1e429b]'
            } rounded px-2 py-1 text-left text-xl font-medium no-underline transition duration-200 hover:bg-[#1e429b] hover:text-white lg:text-sm`}
            href={fl.SOLAR.rute}
          >
            {fl.SOLAR.name}
          </a>
          <a
            className={`${
              ruta === fl.ROOFING.rute ? 'bg-[#1e429b] text-white' : 'text-[#1e429b]'
            } rounded px-2 py-1 text-left text-xl font-medium no-underline transition duration-200 hover:bg-[#1e429b] hover:text-white lg:text-sm`}
            href={fl.ROOFING.rute}
          >
            {fl.ROOFING.name}
          </a>
        </div>
      )}
    </div>
  ) : (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded border-none px-2 py-1 text-xl font-medium text-[#1e429b] transition duration-200 hover:bg-[#1e429b] hover:text-white lg:text-sm"
      >
        PRODUCTOS
      </button>
      {isOpen && (
        <div className="z-10 flex flex-col gap-1.5 rounded-lg bg-white p-2 lg:absolute">
          <a
            className={`${
              ruta === pr.SOLAR.rute ? 'bg-[#1e429b] text-white' : 'text-[#1e429b]'
            } rounded px-2 py-1 text-left text-xl font-medium no-underline transition duration-200 hover:bg-[#1e429b] hover:text-white lg:text-sm`}
            href={pr.SOLAR.rute}
          >
            {pr.SOLAR.name}
          </a>
          <a
            className={`${
              ruta === pr.ANKER.rute ? 'bg-[#1e429b] text-white' : 'text-[#1e429b]'
            } rounded px-2 py-1 text-left text-xl font-medium no-underline transition duration-200 hover:bg-[#1e429b] hover:text-white lg:text-sm`}
            href={pr.ANKER.rute}
          >
            {pr.ANKER.name}
          </a>
          <a
            className={`${
              ruta === pr.ROOFING.rute ? 'bg-[#1e429b] text-white' : 'text-[#1e429b]'
            } lg:texl-lg rounded px-2 py-1 text-left text-xl font-medium no-underline transition duration-200 hover:bg-[#1e429b] hover:text-white lg:text-sm`}
            href={pr.ROOFING.rute}
          >
            {pr.ROOFING.name}
          </a>
        </div>
      )}
    </div>
  )
}

export default MenuProductos

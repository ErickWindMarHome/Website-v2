import { Link } from 'react-router-dom'
import { IoMenu, IoCloseSharp } from 'react-icons/io5'
import { useSelector, useDispatch } from 'react-redux'
import { setMenu } from '../../features/states/statesSlice'
import { MenuRoutes } from '../../Routes/MenuRutes'
import Traductor from '../Traductor/Traductor'
import MenuProductos from './MenuProductos/MenuProductos'
import MenuPromociones from './MenuPromociones/MenuPromociones'
import MenuReferidos from './MenuReferidos/MenuReferidos'

const MenuBar = () => {
  const menu = useSelector((state) => state.states.menu)
  const locacion = useSelector((state) => state.states.locacion)
  const dispatch = useDispatch()
  const ruta = window.location.pathname

  const routes = locacion === 'fl' ? MenuRoutes.fl : MenuRoutes.pr

  const toggleMenu = () => {
    dispatch(setMenu(!menu))
  }

  const renderLink = (route) => (
    <li>
      <Link
        className={`h-9 rounded px-2 py-1 text-left text-xl font-medium no-underline transition duration-200 hover:bg-[#1e429b] hover:text-white lg:text-sm ${ruta === route.rute ? 'text-[#f89b24]' : 'text-[#1e429b]'}`}
        to={route.rute}
      >
        {route.name}
      </Link>
    </li>
  )

  return (
    <div className="w-full bg-white p-4 lg:static lg:w-auto lg:bg-transparent lg:p-2">
      <div onClick={toggleMenu} className="cursor-pointer lg:hidden">
        {!menu ? <IoMenu className="text-4xl" /> : <IoCloseSharp className="text-4xl" />}
      </div>
      {menu && (
        <ul className={`absolute left-0 top-16 flex w-full flex-col gap-2 bg-white p-4 lg:static lg:flex-row lg:items-center lg:bg-transparent`}>
          {renderLink(routes.HOME)}
          <li>
            <MenuProductos />
          </li>
          <li>
            <MenuPromociones />
          </li>
          {renderLink(routes.CARRERS)}
          {renderLink(routes.BLOG)}
          <li>
            <MenuReferidos />
          </li>
          <li className="lg:hidden">
            <Link
              onClick={() => dispatch(setMenu(false))}
              to={locacion === 'fl' ? '/pr' : '/fl'}
              className="h-9 rounded px-2 py-1 text-left text-xl font-medium text-[#1e429b] no-underline transition duration-200 hover:bg-[#1e429b] hover:text-white"
            >
              {locacion === 'fl' ? 'PUERTO RICO' : 'FLORIDA - USA'}
            </Link>
          </li>
          <Traductor className="lg:hidden" />
        </ul>
      )}
    </div>
  )
}

export default MenuBar

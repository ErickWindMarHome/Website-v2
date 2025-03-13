import { useDispatch } from 'react-redux'
import Logo from '../../../components/Logo/Logo'
import MenuBar from '../../../components/MenuBar/MenuBar'
import ConsultaBar from '../../../components/ConsultaBar/ConsultaBar'
import { setScroll } from '../../../features/states/statesSlice'
import { useEffect } from 'react'
import Redes from '../../../components/Redes/Redes'
import Banderas from '../../../components/Banderas/Banderas'
import Traductor from '../../../components/Traductor/Traductor'

const Header = () => {
  const dispatch = useDispatch()

  const ScrollHeader = () => {
    const scrollY = Math.floor(window.scrollY / 10)
    const sizeScroll = scrollY < 100 ? scrollY : 100
    dispatch(setScroll(100 - sizeScroll))
  }

  useEffect(() => {
    ScrollHeader()
    window.addEventListener('scroll', ScrollHeader)

    return () => {
      window.removeEventListener('scroll', ScrollHeader)
    }
  }, [])

  return (
    <header className="fixed left-0 z-50 box-border flex w-full items-center justify-center bg-white p-2.5">
      <Redes className="hidden xl:flex" />
      <Logo />
      <MenuBar />
      <ConsultaBar />
      <Banderas className="hidden lg:block" />
      <Traductor className="hidden lg:block" />
    </header>
  )
}

export default Header

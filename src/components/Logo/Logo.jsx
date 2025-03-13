import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'

const Logo = () => {
  const locacion = useSelector((state) => state.states.locacion)
  const scroll = useSelector((state) => state.states.scroll)
  const ScrollConvertion = scroll / 100
  const MinConvetion = 0.8
  const transformScroll = ScrollConvertion > MinConvetion ? ScrollConvertion : MinConvetion

  const logoImage =
    locacion === 'fl'
      ? 'https://windmar-website-cms.s3.amazonaws.com/Components/Logo/Logo-FL.webp'
      : 'https://windmar-website-cms.s3.amazonaws.com/Components/Logo/Logo-PR.webp'
  const altText = locacion === 'fl' ? 'Windmar Solar' : 'Windmar Home'

  return (
    <div className={`absolute z-50 flex items-center justify-center lg:static`}>
      <Link to={locacion === 'fl' ? '/fl' : '/pr'} onClick={() => window.scrollTo(0, 0)}>
        <motion.img
          src={logoImage}
          alt={altText}
          initial={{ scale: 1 }}
          animate={{ scale: transformScroll }}
          transition={{ duration: 0.3 }}
          className={`z-50 h-[calc(60px+0.5vw)] object-scale-down drop-shadow-lg filter ${locacion === 'fl' ? 'w-auto' : 'w-[20vw] max-w-[100px]'}`}
        />
      </Link>
    </div>
  )
}

export default Logo

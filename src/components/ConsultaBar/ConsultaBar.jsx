import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { FiPhone } from 'react-icons/fi'

const ConsultaBar = () => {
  const scroll = useSelector((state) => state.states.scroll)
  const locacion = useSelector((state) => state.states.locacion)
  const ScrollConvertion = scroll / 100
  const transformScroll = ScrollConvertion > 0.8 ? ScrollConvertion : 0.8

  const phoneNumber = locacion === 'fl' ? '407-308-0099' : '787-395-7766'
  const telLink = locacion === 'fl' ? 'tel:4073080099' : 'tel:7873957766'

  return (
    <motion.div
      className="absolute right-6 mx-2.5 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#1e429b] p-4 text-center font-semibold transition-transform duration-300 hover:bg-[#f89b24] lg:static lg:h-auto lg:w-auto xl:rounded-2xl"
      style={{
        transform: `scale(${transformScroll})`,
      }}
    >
      <a aria-label={locacion === 'fl' ? 'Phone' : 'Teléfono'} href={telLink} className="flex items-center text-sm text-white">
        <motion.div whileHover={{ rotate: [0, 30, 0], transition: { duration: 0.5, loop: Infinity } }}>
          <FiPhone className="h-6 w-6 xl:mr-2" />
        </motion.div>
        <span className="hidden xl:block">{phoneNumber}</span>
      </a>
    </motion.div>
  )
}

export default ConsultaBar

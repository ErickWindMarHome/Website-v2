import { FaRegHandPointer } from 'react-icons/fa6'
import { FaArrowRight } from 'react-icons/fa'
import { FaArrowLeft } from 'react-icons/fa'
import { motion } from 'framer-motion'

function Animacion() {
  return (
    <div className="fixed z-20 flex h-screen w-screen items-center justify-center gap-12 bg-white/95 text-[100px]">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: [0, -30, 0, 0] }}
        transition={{
          duration: 1.5,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 1,
          repeatDelay: 1,
        }}
      >
        <FaArrowLeft />
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: [0, -30, 30, 0], rotate: [0, -60, 60, 0] }}
        transition={{
          duration: 1.5,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 1,
          repeatDelay: 1,
        }}
      >
        <FaRegHandPointer />
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: [0, 0, 30, 0] }}
        transition={{
          duration: 1.5,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 1,
          repeatDelay: 1,
        }}
      >
        <FaArrowRight />
      </motion.div>
    </div>
  )
}

export default Animacion

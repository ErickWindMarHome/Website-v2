import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaArrowLeft } from 'react-icons/fa'

const FlipCard = ({ icon, title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className="flex items-center justify-center">
      <motion.div className="h-[241px] w-[231px] overflow-hidden rounded-[30px]" style={{ perspective: 1000 }}>
        <motion.div
          className={`relative h-full w-full`}
          style={{
            transformStyle: 'preserve-3d',
          }}
          animate={{
            rotateY: isFlipped ? 180 : 0,
          }}
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
          }}
        >
          {/* Front Side */}
          <div
            className='absolute inset-0 flex h-full flex-col items-center justify-center rounded-[30px] bg-[url("https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/General/IPHONE15PRO.WEBP/FONDO_ICONOS_PROPOSITO.webp")] bg-cover bg-no-repeat'
            style={{
              backfaceVisibility: 'hidden',
            }}
          >
            <div className="flex h-[50%] flex-col items-center justify-center">
              <img src={icon} alt="" />
            </div>
            <div className="flex h-[50%] flex-col items-center justify-center text-slate-50">
              <p className="text-2xl font-semibold">{title}</p>
              <button className="rounded-full bg-white px-6 py-1 font-bold text-[#0038A8]" onClick={handleFlip}>
                Ver más
              </button>
            </div>
          </div>

          {/* Back Side */}
          <div
            className="absolute inset-0 flex h-full flex-col items-center justify-center rounded-[30px] bg-[#E9F0FF]"
            style={{
              transform: 'rotateY(180deg)',
              backfaceVisibility: 'hidden',
            }}
          >
            <div className="relative flex h-full w-full items-center justify-center">
              <FaArrowLeft className="absolute left-4 top-6 text-2xl text-[#0038A8]" onClick={handleFlip} />
              <div className="flex flex-col justify-between text-center">
                <h1 className="text-xl font-bold text-[#0038A8]">{title}</h1>
                <p className="m-0 text-balance px-3 text-xs" dangerouslySetInnerHTML={{ __html: description }}></p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default FlipCard

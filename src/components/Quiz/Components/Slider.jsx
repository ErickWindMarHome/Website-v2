import { useState } from 'react'
import { motion } from 'framer-motion'
import { useFormContext } from 'react-hook-form'

const CustomRange = ({ min = 0, max = 100, step = 1, thumb, color = '#000000' }) => {
  const { setValue } = useFormContext()

  const [valueRange, setValueRange] = useState((max - min) / 2)

  const handleChange = (e) => {
    setValue('price', e.target.value)
    setValueRange(e.target.value)
  }

  return (
    <div className="relative flex w-full flex-col items-center text-[#818181]">
      <span className="absolute -bottom-8 left-0">${min}</span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={valueRange}
        onChange={handleChange}
        className="absolute -bottom-1 z-10 w-full cursor-pointer opacity-0"
      />
      <div className="relative mt-6 h-2 w-full rounded-full bg-gray-300">
        <motion.div
          className={`absolute h-2 rounded-full bg-[${color}]`}
          style={{
            width: `${((valueRange - min) / (max - min)) * 100}%`,
          }}
        />
        <motion.div
          className="absolute -top-7 w-[50px] text-center font-bold text-[#818181]"
          style={{
            left: `${((valueRange - min) / (max - min)) * 100}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          $ {valueRange}
        </motion.div>
        <motion.div
          className={`absolute h-10 w-10 bg-contain bg-no-repeat bg-[url('${thumb}')] drop-shadow-lg filter`}
          style={{
            backgroundImage: `url('${thumb}')`,
            left: `${((valueRange - min) / (max - min)) * 100}%`,
            transform: 'translate(-50%, -45%)',
          }}
        />
      </div>
      <span className="absolute -bottom-8 right-0">+${max}</span>
    </div>
  )
}

export default CustomRange

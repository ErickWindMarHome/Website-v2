import { useState } from 'react'
import ModalRoofle from './ModalRoofle'

export default function ButtonRoofle() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <div
        onClick={handleOpenModal}
        className="fixed -right-[82px] top-[46%] z-50 flex h-[45px] w-[200px] -rotate-90 cursor-pointer items-center justify-center rounded-t-xl bg-[#e7891e] md:-right-[82px] md:h-[45px]"
      >
        <div className="relative flex w-full items-center justify-center">
          {/* SVG derecho */}
          <svg className="absolute -top-[11px] left-[96%]" fill="none" xmlns="http://www.w3.org/2000/svg" width="69" height="43">
            <path d="M0 0v43h68.4a38 38 0 0 1-32.71-18.66l-3.36-5.68A38 38 0 0 0 0 0Z" fill="#e7891e" fillRule="evenodd" clipRule="evenodd" />
          </svg>
          {/* Texto del botón */}
          <span className="text-sm font-bold tracking-wide text-white sm:text-base">Instant Roof Quote</span>
          {/* SVG izquierdo */}
          <svg className="absolute -left-[30%] -top-[11px]" xmlns="http://www.w3.org/2000/svg" width="69" height="43" fill="none">
            <path d="M68.4 0v43H0a38 38 0 0 0 32.7-18.66l3.37-5.68A38 38 0 0 1 68.4 0Z" fill="#e7891e" fillRule="evenodd" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      {/* Modal */}
      <ModalRoofle handleClose={handleCloseModal} isOpen={isModalOpen} />
    </>
  )
}

import { useEffect, useRef } from 'react'

export default function ModalRoofle({ handleClose, isOpen }) {
  const scriptContainerRef = useRef(null)

  useEffect(() => {
    if (scriptContainerRef.current) {
      const script = document.createElement('script')
      script.src = 'https://app.roofle.com/roof-quote-pro-embedded-widget.js?id=CQXpUOQiuHZq8EdvszI7f'
      script.async = true
      scriptContainerRef.current.appendChild(script)
    }
  }, [])

  return (
    <>
      <div
        onClick={handleClose}
        className={`${isOpen ? 'visible' : 'hidden'} fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50`}
      >
        <div className="relative h-[90%] w-[90%] rounded-lg bg-white p-8 lg:w-[50%]">
          <div ref={scriptContainerRef} className="mt-14 max-h-[90%] overflow-y-auto"></div>
          <button className="absolute right-5 top-0 mt-4 rounded-full bg-[#F6921E] px-4 py-2 text-white" onClick={handleClose}>
            Cerrar
          </button>
        </div>
      </div>
    </>
  )
}

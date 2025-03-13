import React, { useEffect, useRef } from 'react'

const Carousel = () => {
  const carouselRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const firstItem = carouselRef.current.firstElementChild
        carouselRef.current.appendChild(firstItem)
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative hidden w-full flex-col items-center justify-center overflow-hidden md:flex">
      <div ref={carouselRef} className="flex w-[80%] items-center justify-center transition-transform duration-700 ease-in-out">
        {/* Solar Card */}
        <div className="relative flex w-[40%] flex-shrink-0 flex-col items-center justify-start px-4">
          <div className="relative top-20 z-10 my-8 h-0 w-[80%] text-white">
            <h1 className="text-left text-6xl font-bold">Solar</h1>
            <p className="text-left text-sm">
              <strong className="text-[#FF9E18]">Energía solar</strong> para tu <strong className="text-[#FF9E18]">hogar</strong> o{' '}
              <strong className="text-[#FF9E18]">negocio</strong>. Ahorra, disfruta de <strong className="text-[#FF9E18]">energía gratuita</strong> y{' '}
              <strong className="text-[#FF9E18]">despídete</strong> de los <strong className="text-[#FF9E18]">apagones</strong>. Incrementa el valor
              de tu propiedad con energía de respaldo 24/7. <strong className="text-[#FF9E18]">¡Energía limpia, ahorro seguro!</strong>
            </p>
          </div>
          <img
            className="w-full rounded-lg object-scale-down"
            src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Hermanos-Rivera/solar-desktop.webp"
            alt="Solar"
          />
        </div>

        {/* Roofing Card */}
        <div className="relative flex w-[40%] flex-shrink-0 flex-col items-center justify-start px-4">
          <div className="relative top-20 z-10 my-8 h-0 w-[80%] text-white">
            <h1 className="text-left text-6xl font-bold">Roofing</h1>
            <p className="text-left text-sm">
              Nuestro
              <strong className="text-[#FF9E18]"> sellado de techo </strong> ofrece <strong className="text-[#FF9E18]">protección duradera</strong> y{' '}
              <strong className="text-[#FF9E18]">eficiente</strong> para tu hogar, con <strong className="text-[#FF9E18]">materiales</strong> de{' '}
              <strong className="text-[#FF9E18]">alta calidad</strong> y <strong className="text-[#FF9E18]">tecnología avanzada</strong>. Mejora el
              aislamiento, incrementa el valor de tu propiedad y asegura la máxima resistencia frente a cualquier clima.
            </p>
          </div>
          <img
            className="w-full rounded-lg object-cover"
            src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Hermanos-Rivera/roofing-desktop.webp"
            alt="Roofing"
          />
        </div>

        {/* Anker Card */}
        <div className="relative flex w-[40%] flex-shrink-0 flex-col items-center justify-start px-4">
          <div className="relative top-20 z-10 my-8 h-0 w-[80%] text-white">
            <h1 className="text-left text-6xl font-bold">Anker</h1>
            <p className="text-left text-sm">
              Las baterías Anker brindan <strong className="text-[#FF9E18]">energía confiable</strong> en{' '}
              <strong className="text-[#FF9E18]">cualquier momento</strong> o y <strong className="text-[#FF9E18]">lugar</strong>, con{' '}
              <strong className="text-[#FF9E18]">carga rápida</strong> y <strong className="text-[#FF9E18]">alta capacidad</strong>. Perfectas para
              mantener tus dispositivos siempre listos y contar con <strong className="text-[#FF9E18]">respaldo</strong> en el{' '}
              <strong className="text-[#FF9E18]">hogar</strong> o al <strong className="text-[#FF9E18]">aire libre</strong>
            </p>
          </div>
          <img
            className="w-full rounded-lg object-cover"
            src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Hermanos-Rivera/Anker-desktop.webp"
            alt="Anker"
          />
        </div>
      </div>
    </div>
  )
}

export default Carousel

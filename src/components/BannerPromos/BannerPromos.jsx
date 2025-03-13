import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function BannerPromos() {
  const [number, setNumber] = useState(1)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    // Cambiar el número y activar la animación cada 3 segundos
    const interval = setInterval(() => {
      setAnimate(true) // Activar la animación
      setTimeout(() => {
        setNumber((prevNumber) => (prevNumber === 1 ? 2 : 1))
        setAnimate(false) // Desactivar la animación después del cambio
      }, 500) // Duración de la animación
    }, 5000)

    return () => clearInterval(interval) // Limpiar el intervalo al desmontar
  }, [])

  return (
    <div className="w-full bg-[#5588d6]">
      <Link to="cambiate-a-energia-solar?utm_source=Direct&utm_medium=bannerHome&utm_campaign=sanValentin">
        <picture>
          {/* Imagen para dispositivos móviles */}
          <source media="(max-width: 768px)" srcSet={`https://windmar-website-cms.s3.us-east-1.amazonaws.com/Banners/Banner-mobile-01.gif`} />
          {/* Imagen para dispositivos de escritorio */}
          <img
            src={`https://windmar-website-cms.s3.us-east-1.amazonaws.com/Banners/Banner-web-${number}.webp`}
            alt={`Black Friday ${number}`}
            className={`h-auto w-full transition-opacity duration-500 ${animate ? 'opacity-0' : 'opacity-100'}`}
          />
        </picture>
      </Link>
    </div>
  )
}

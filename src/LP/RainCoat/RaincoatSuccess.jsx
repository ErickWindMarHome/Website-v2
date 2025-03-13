import { FaCheck, FaRegTimesCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function RaincoatSuccess() {
  const navigate = useNavigate()

  const close = () => {
    navigate('/')
  }

  return (
    <div className='fixed inset-0 z-10 flex h-screen w-full flex-col items-center justify-center bg-[url("https://windmar-website-cms.s3.amazonaws.com/LPs/Windmar_Raincoat/Img_Raincoat_Windmar_Mobile.webp")] bg-cover bg-no-repeat lg:bg-[url("https://windmar-website-cms.s3.amazonaws.com/LPs/Windmar_Raincoat/BgRaincoat_Desktop.webp")]'>
      <img
        src="https://windmar-website-cms.s3.amazonaws.com/LPs/Windmar_Raincoat/Raincoat_Windmar_Logo.webp"
        className="absolute left-1/2 top-0 -translate-x-1/2 transform"
        alt="logo windmar x raincoat"
      />
      <div className="relative mx-auto flex w-[90%] max-w-[800px] flex-col items-center justify-center gap-8 rounded-2xl bg-white p-8 text-center text-[#333333] lg:max-w-[600px]">
        <FaRegTimesCircle className="absolute right-4 top-4 cursor-pointer text-4xl text-red-500" onClick={close} />
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#c7e6c8]">
          <FaCheck className="text-4xl text-[#4db051]" />
        </div>
        <h1 className="text-4xl font-medium">
          <strong>Gracias</strong> por referir!
        </h1>
        <p>
          Tu apoyo es fundamental para ayudarnos a impulsar el uso de energía solar y un futuro más limpio. Hemos recibido la información del referido
          que nos enviaste y nuestro equipo se pondrá en contacto con ellos muy pronto.
        </p>
        <img src="https://windmar-website-cms.s3.amazonaws.com/NavBar/LogoWindmar.svg" alt="logo windmar" />
      </div>
    </div>
  )
}

export default RaincoatSuccess

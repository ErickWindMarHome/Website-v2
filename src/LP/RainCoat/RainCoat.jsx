import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { LPRainCoat } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'
import useTitle from '../../hooks/useTitle'
import Pixel from '../../components/Pixel/Pixel'
import RaincoatSuccess from './RaincoatSuccess'
import FormsLeads_PR_REF_Raincoat from '../../components/FormsLeads/FormsLeads_reactHookForm/Formsleads_PR_REF_Raincoat'

const RainCoat = () => {
  useTitle('Windmar - RainCoat')
  const { client } = useParams()
  const [Success, setSuccess] = useState(false)

  const clientesVIP = {
    regular: {
      Titulo:
        '<strong>Refiere</strong> a 5 personas para ganar hasta <strong>$1,250</strong> y una póliza contra huracanes de hasta <strong>$2,000</strong>, <strong>¡gratis!</strong>',
      Parrafo:
        'Cada vez que pase un huracán en Puerto Rico <strong>recibirás</strong> la cantidad directo en tu cuenta. Deja tus datos y <strong>descubre cómo puedes asegurar tu hogar</strong> y empezar a ganar dinero con <strong>WindMar Home.</strong>',
    },
    vip: {
      Titulo:
        'Como Cliente VIP,<strong> refiere</strong> a 5 personas para ganar hasta <strong>$1,250</strong> y una póliza contra huracanes de hasta <strong>$2,000</strong>,<strong> ¡gratis!</strong>',
      Parrafo:
        'Cada vez que pase un huracán en Puerto Rico <strong>recibirás</strong> la cantidad directo en tu cuenta. Deja tus datos y <strong>descubre cómo puedes asegurar tu hogar</strong> y empezar a ganar dinero con <strong>WindMar Home.</strong>',
    },
    vipplus: {
      Titulo:
        'Como Cliente VIP+, <strong>refiere</strong> a 5 personas para ganar hasta <strong>$2,500</strong> y una póliza contra huracanes de hasta <strong>$2,000</strong>, <strong>¡gratis!</strong>',
      Parrafo:
        'Cada vez que pase un huracán en Puerto Rico <strong>recibirás</strong> la cantidad directo en tu cuenta. Deja tus datos y <strong>descubre cómo puedes asegurar tu hogar</strong> y empezar a ganar dinero con <strong>WindMar Home.</strong>',
    },
  }

  const { Titulo, Parrafo } = clientesVIP[client] || clientesVIP.regular

  return (
    <>
      <Pixel pixelID="1826134724345924" />
      {Success && <RaincoatSuccess setModal={setSuccess} />}
      <div className="relative w-full">
        <div className='relative h-[320px] w-full bg-[url("https://windmar-website-cms.s3.amazonaws.com/LPs/Windmar_Raincoat/Img_Raincoat_Windmar_Mobile.webp")] bg-cover bg-center bg-no-repeat text-white lg:h-[55vh] lg:bg-[url("https://windmar-website-cms.s3.amazonaws.com/LPs/Windmar_Raincoat/Img_Raincoat_Windmar_Desktop.webp")]'>
          <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black to-transparent md:via-transparent"></div>
          <div className="sticky flex flex-col items-center justify-center">
            <img
              src="https://windmar-website-cms.s3.amazonaws.com/LPs/Windmar_Raincoat/Raincoat_Windmar_Logo.webp"
              alt=""
              className="w-[250px] lg:absolute lg:left-auto lg:right-12 lg:top-0 lg:w-auto"
            />
            <div className="mx-auto flex h-full w-[80%] flex-col items-center gap-3 text-center lg:hidden">
              <h1 className="text-2xl font-bold">¡Refiere y gana!</h1>
              <p dangerouslySetInnerHTML={{ __html: Parrafo }} />
            </div>
          </div>
        </div>
        <div className="left-0 right-0 top-40 mx-auto flex max-w-[1000px] flex-col items-center justify-center gap-4 rounded-xl bg-white p-8 lg:absolute lg:w-[80%]">
          <div className="hidden text-center lg:block">
            <h1 className="text-4xl font-bold text-[#F89B24]">¡Refiere y gana!</h1>
            <h2 className="mx-auto my-2 text-xl lg:w-[80%]" dangerouslySetInnerHTML={{ __html: Titulo }} />
          </div>
          <div className="w-[90%]">
            <p className="hidden lg:block" dangerouslySetInnerHTML={{ __html: Parrafo }} />
            <FormsLeads_PR_REF_Raincoat
              id="RainCoat"
              campaign={'RainCoat'}
              estilos={LPRainCoat}
              boton={'Enviar'}
              placeholder={true}
              modalSuccess={setSuccess}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default RainCoat

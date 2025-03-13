import { useDispatch } from 'react-redux'
import { setlenguaje } from '../../features/states/statesSlice'
import { LpSolarStyles } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'

import useTitle from '../../hooks/useTitle'
import FormsLeadsFL from '../../components/FormsLeads/FormsLeads_FL'

function LpRoofing() {
  useTitle('Windmar - Roofing')

  const dispatch = useDispatch()
  dispatch(setlenguaje('es'))

  return (
    <div className="relative flex h-full w-full">
      <div className="relative mb-8 h-[100vh] w-full object-cover object-bottom lg:mb-0 lg:flex lg:h-[100vh] lg:w-[50%] lg:items-center lg:justify-center">
        <img
          src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/LpRoofing/Banner.webp"
          alt=""
          className="absolute top-0 h-[50%] w-full object-cover object-center lg:h-full"
        />
        <div className="absolute flex h-full w-full flex-col items-center text-balance pt-8 text-center text-white lg:h-fit">
          <h1 className="pt-8 text-4xl font-bold lg:text-5xl">
            Tu techo, tu
            <br />
            <span className="text-[#F6921E]"> primera defensa</span>
          </h1>
          <p className="text-lg lg:text-2xl">
            Seguridad, calidad y garantía <br /> en cada instalación.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 flex h-[70%] min-h-fit w-full flex-col items-center justify-center gap-8 rounded-t-[50px] bg-white px-2 py-8 lg:static lg:h-full lg:w-[50%] lg:rounded-none">
        <img
          src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/LpRoofing/Logo_FL.svg"
          alt=""
          className="max-w-[96px] lg:max-w-[200px]"
        />
        <div className="w-full">
          <h1 className="text-balance text-center text-2xl font-medium text-[#1D429B] lg:text-3xl">
            ¡Agenda tu <br /> consulta <span className="font-bold text-[#F89B24]">gratuita!</span>
          </h1>
          <div className="mx-auto w-full max-w-[600px]">
            <FormsLeadsFL
              id="LpRoofing_fl"
              campaign={'LpRoofing_fl'}
              estilos={LpSolarStyles}
              tittle=""
              phone={true}
              email={true}
              placeholder={true}
              AddUtm="Booth Afterhours"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LpRoofing

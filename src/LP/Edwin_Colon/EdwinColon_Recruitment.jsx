import Pixel from '../../components/Pixel/Pixel'

import FormsLeads_PR_RHF from '../../components/FormsLeads/FormsLeads_reactHookForm/Formsleads_PR_RHF'

import { LD_LP_EdwinColon } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'

function EdwinColon_Recruitment() {
  return (
    <>
      <Pixel pixelID="1826134724345924" />
      <div className="w-full max-w-[1550px]">
        <div className="relative flex items-center justify-center">
          <img src="https://windmar-website-cms.s3.amazonaws.com/LPs/EdwinColon/Background-reclutamiento.webp" alt="" className="hidden md:block" />
          <img
            src="https://windmar-website-cms.s3.amazonaws.com/LPs/EdwinColon/background_reclutamiento_mobile.webp"
            alt=""
            className="mt-20 md:hidden"
          />
          <div>
            <div className="absolute left-10 top-8 md:left-44 md:top-20">
              <img src="https://windmar-website-cms.s3.amazonaws.com/LPs/EdwinColon/LogoWH.webp" alt="Logo" className="hidden w-32 md:block" />
              <h1 className="w-[90%] text-2xl text-[#1D429B] md:w-full md:text-4xl">
                Energía Renovable, <br /> <span className="font-bold">Compromiso Constante</span>
              </h1>
              <img src="https://windmar-website-cms.s3.amazonaws.com/LPs/EdwinColon/LogoWhWhite.webp" alt="Logo" className="mt-12 w-32 md:hidden" />
            </div>

            <div className="absolute bottom-4 left-10 px-2 md:bottom-20 md:left-44 md:top-[320px]">
              <div className="">
                <h3 className="w-[85%] text-white md:w-[40%]">
                  Descubre <span className="font-bold text-[#F89B24]">nuevas oportunidades</span> con nosotros
                </h3>
                <p className="mt-3 hidden w-[40%] font-bold text-white md:block">
                  Regístrate ahora <span className="font-light text-white/85">y explora las emocionantes posibilidades de</span> crecimiento
                  profesional en nuestra empresa líder en energía solar.
                </p>
              </div>
              <div className="hidden w-96 md:block">
                <FormsLeads_PR_RHF
                  id="LD_EdwinColon"
                  campaign={'LD_EdwinColon'}
                  recruitment={'sales'}
                  estilos={LD_LP_EdwinColon}
                  boton={'Enviar'}
                  tittle={false}
                  email={true}
                  text={true}
                  phone={true}
                  placeholder={true}
                />
              </div>
            </div>
          </div>
        </div>
        <p className="mx-8 mt-3 text-ellipsis text-center font-bold text-black md:hidden">
          Regístrate ahora <span className="font-light text-black/85">y explora las emocionantes posibilidades de</span> crecimiento profesional en
          nuestra empresa líder en energía solar.
        </p>
        <div className="mx-auto w-full md:hidden">
          <FormsLeads_PR_RHF
            id="EdwinColon"
            campaign={'EdwinColon'}
            recruitment={'sales'}
            estilos={LD_LP_EdwinColon}
            boton={'Enviar'}
            tittle={false}
            email={true}
            text={true}
            phone={true}
            placeholder={true}
          />
        </div>
      </div>
    </>
  )
}

export default EdwinColon_Recruitment

import Pixel from '../../components/Pixel/Pixel'

import FormsLeads_PR_RHF from '../../components/FormsLeads/FormsLeads_reactHookForm/Formsleads_PR_RHF'
import SliderEdwin from './components/SliderEdwin'

import { LD_LP_EdwinColon } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'

function EdwinColon_Leads() {
  return (
    <>
      <Pixel pixelID="1826134724345924" />
      <div className="w-full max-w-[1550px]">
        <div className="ml-44 mt-10 hidden md:block">
          <img src="https://windmar-website-cms.s3.amazonaws.com/LPs/EdwinColon/LogoWH.webp" alt="Logo" />
        </div>
        <div className="relative flex items-center justify-center">
          <img src="https://windmar-website-cms.s3.amazonaws.com/LPs/EdwinColon/Background_leads_edwin.webp" alt="" className="hidden md:block" />
          <img
            src="https://windmar-website-cms.s3.amazonaws.com/LPs/EdwinColon/background_leads_edwin_mobile.webp"
            alt=""
            className="mt-12 md:hidden"
          />
          <div>
            <div className="absolute left-10 top-8 md:left-44">
              <h1 className="m-0 text-2xl text-[#1D429B] md:text-4xl">Transforma tu hogar</h1>
              <h1 className="text-2xl font-bold text-[#1D429B] md:text-4xl">con energía solar</h1>
            </div>

            <div className="absolute left-8 top-[120px] px-2 md:bottom-12 md:left-44 md:top-auto">
              <div className="mt-10">
                <h3 className="w-[55%] text-white">
                  Descúbrelo con <span className="font-bold text-[#F89B24]">WindMar Home</span>
                </h3>
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
            <div className="absolute bottom-6 left-8 md:hidden">
              <img src="https://windmar-website-cms.s3.amazonaws.com/LPs/EdwinColon/LogoWhWhite.webp" alt="Logo" />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 w-full md:hidden">
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
        <div className="h-auto w-full pb-12 md:hidden">
          <SliderEdwin />
        </div>
        <div className="relative mb-10 mt-10 hidden justify-center gap-3 md:flex">
          <div className="h-[420px] w-[300px]">
            <img src="https://windmar-website-cms.s3.amazonaws.com/LPs/EdwinColon/solar_leads_edwin.webp" alt="solar" />
            <div className="absolute bottom-16 ml-8 text-white">
              <h1 className="border-b-2 pb-2 text-2xl font-bold">Solar</h1>
              <p className="h-[71px] w-[235px] text-balance text-sm text-white/80">
                Con nuestro Sistema Solar fotovoltaico tendrás todo el poder del sol energizando tu hogar las 24 horas del día. Mejorarás tu calidad
                de vida y cuidarás tu bolsillo.
              </p>
            </div>
          </div>
          <div className="h-[420px] w-[300px]">
            <img src="https://windmar-website-cms.s3.amazonaws.com/LPs/EdwinColon/roofing_leads_edwin.webp" alt="roofing" />
            <div className="absolute bottom-16 ml-8 text-white">
              <h1 className="border-b-2 pb-2 text-2xl font-bold">Roofing</h1>
              <p className="h-[71px] w-[235px] text-balance text-sm text-white/80">
                El sellado de techo te ayudará a proteger la estructura de tu hogar impidiendo que el aire, el humo, el agua, el polvo y los gases
                dañen el interior y exterior de tu propiedad.
              </p>
            </div>
          </div>
          <div className="h-[420px] w-[300px]">
            <img src="https://windmar-website-cms.s3.amazonaws.com/LPs/EdwinColon/anker_leads_edwin.webp" alt="bateria-Anker" />
            <div className="absolute bottom-16 ml-8 text-white">
              <h1 className="border-b-2 pb-2 text-2xl font-bold">Batería Anker</h1>
              <p className="h-[71px] w-[235px] text-balance text-sm text-white/80">
                Siente la comodidad de la batería portátil Anker con Windmar Home, garantizando que tus dispositivos estén conectados en cualquier
                lugar donde te encuentres.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EdwinColon_Leads

import useTitle from '../../hooks/useTitle'
import Pixel from '../../components/Pixel/Pixel'
import FormsLeads_PR_RHF from '../../components/FormsLeads/FormsLeads_reactHookForm/Formsleads_PR_RHF'
import { LP_LD_KarinaBobe } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'
import useValidSchedule from '../../hooks/useValidSchedule'
import ButtonTel from '../../components/ButtonTel/ButtonTel'

const LD_KarinaBobe = () => {
  useTitle('Team Asesoría de la buena leads - WindMar')
  const isValidSchedule = useValidSchedule()

  return (
    <>
      <Pixel pixelID="1826134724345924" />
      <div
        className="relative flex w-full flex-col items-center justify-center"
        style={{
          background:
            'rgba(255, 255, 255, 0.5) url(https://windmar-website-cms.s3.amazonaws.com/LPs/Asesoria-de-la-buena/Fondo-solar-white-15.webp) no-repeat center center / cover',
        }}
      >
        <div className="mt-8 flex flex-row items-center justify-around gap-6">
          <img src="https://windmar-website-cms.s3.amazonaws.com/NavBar/LogoWindmar.svg" className="w-48 lg:w-52" />
          <div className="h-[50%] w-1 rounded-xl bg-[#d3d3d3]"></div>
          <img
            src="https://windmar-website-cms.s3.amazonaws.com/LPs/Asesoria-de-la-buena/Logo-Asesoria-Grey-17.webp"
            className="w-48 lg:w-52 lg:pt-[4%]"
          />
        </div>
        <div className="flex w-full flex-col justify-between lg:flex-row lg:pr-12">
          <img
            src="https://windmar-website-cms.s3.amazonaws.com/LPs/Asesoria-de-la-buena/Imagen-Equipo-Karina.webp"
            alt=""
            className="relative object-scale-down lg:w-[48%]"
          />
          <div className="flex flex-col items-center justify-center lg:w-[40%]">
            <div className="mt-5 flex w-full flex-col items-center justify-center gap-2 px-2 text-center">
              {isValidSchedule && (
                <>
                  <h1 className="text-4xl font-bold text-[#1D429B]">¡Llama ahora!</h1>
                  <ButtonTel number={'787-719-7054'} />
                  <div className="my-4 h-[1.4px] w-[80%] bg-slate-300"></div>
                </>
              )}
              <h1 className="text-4xl font-bold text-[#1D429B]">{isValidSchedule ? 'O r' : 'R'}egístrate ahora</h1>
              <p className="w-[90%] text-sm font-semibold text-[#606060] md:text-balance">
                y descubre cómo la <span className="font-bold text-[#1D429B]">energía solar</span> puede brindarte
                <span className="font-bold text-[#1D429B]"> independencia energértica y estabilidad económica</span>
              </p>
            </div>
            <div className="w-full md:w-[90%]">
              <FormsLeads_PR_RHF
                id="LD_KarinaBobe"
                campaign={'LD_KarinaBobe'}
                recruitment={'sales'}
                estilos={LP_LD_KarinaBobe}
                boton={'Enviar'}
                tittle={false}
                phone={true}
                email={true}
                city={true}
                text={false}
                placeholder={true}
              />
            </div>
          </div>
        </div>
        <div className="my-6 mt-8 grid w-3/4 items-center py-12 lg:grid-cols-3">
          <div className="mx-auto text-center">
            <img src="https://windmar-website-cms.s3.amazonaws.com/LPs/Asesoria-de-la-buena/solar-12.webp" alt="" className="mx-auto w-60" />
            <h2 className="text-[#062887]">Solar</h2>
            <p className="mx-auto w-[80%] text-sm text-[#6B6B6B]">Tendrás todo el poder del sol energizando tu hogar las 24 horas del día.</p>
          </div>
          <div className="mx-auto text-center">
            <img src="https://windmar-website-cms.s3.amazonaws.com/LPs/Asesoria-de-la-buena/roofing-11.webp" alt="" className="mx-auto w-60" />
            <h2 className="text-[#062887]">Roofing</h2>
            <p className="mx-auto w-[80%] text-sm text-[#6B6B6B]">Protege tu techo y a tu familia de humedad y las grietas.</p>
          </div>
          <div className="mx-auto text-center md:col-span-2 lg:col-span-1">
            <img src="https://windmar-website-cms.s3.amazonaws.com/LPs/Asesoria-de-la-buena/anker-13.webp" alt="" className="mx-auto w-60" />
            <h2 className="text-[#062887]">Baterías Portátiles</h2>
            <p className="mx-auto w-[80%] text-sm text-[#6B6B6B]">Energiza tu apartamento y mantente conectado a donde vayas.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LD_KarinaBobe

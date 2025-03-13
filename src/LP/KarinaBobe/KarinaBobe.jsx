import Pixel from '../../components/Pixel/Pixel'
import FormsGerentes_RHF from '../../components/FormsCareers_RHF/FormsGerentes_RHF'
import { LP_KarinaBobe } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'
import useTitle from '../../hooks/useTitle'

const KarinaBobe = () => {
  useTitle('Team Asesoría de la buena careers - WindMar')

  return (
    <>
      <Pixel pixelID="1826134724345924" />
      <div className="w-full">
        <img
          src="https://windmar-website-cms.s3.amazonaws.com/LPs/LP+Bobe+Solar+Expert/Banner+Desktop-05.webp"
          className="hidden w-full md:block"
          alt="Asesoría de la buena"
        />

        <img
          src="https://windmar-website-cms.s3.amazonaws.com/LPs/LP+Bobe+Solar+Expert/Banner+mobile-06.webp"
          className="block w-full md:hidden"
          alt="Asesoría de la buena"
        />

        <div
          className="flex w-full flex-col items-center justify-center md:flex-row md:gap-5"
          style={{
            background:
              'rgba(255, 255, 255, 0.5) url(https://windmar-website-cms.s3.amazonaws.com/LPs/Asesoria-de-la-buena/Fondo-solar-white-15.webp) no-repeat center center / cover',
          }}
        >
          <div className="relative flex items-center justify-center bg-[url(https://windmar-website-cms.s3.amazonaws.com/LPs/Asesoria-de-la-buena/Fondo-Reclutamiento-07.webp)] bg-cover bg-center bg-no-repeat px-7 py-3 md:w-[35%] md:flex-col md:bg-none">
            <div className="absolute inset-0 z-10 bg-blue-900 opacity-65 md:hidden"></div>
            <img src="https://windmar-website-cms.s3.amazonaws.com/LPs/Asesoria-de-la-buena/Icon-1.webp" alt="" className="z-20 h-36 w-36" />
            <h1 className="z-20 text-pretty text-lg leading-5 text-slate-50 md:text-center md:text-3xl md:leading-normal md:text-[#1D429B]">
              Únete a una <br /> <strong>revolución energética </strong>y conviértete en un agente de cambio.
            </h1>
          </div>
          <div className="my-4 w-[90%] md:w-[35%]">
            <FormsGerentes_RHF
              id="KarinaBobe"
              campaign={'KarinaBobe'}
              recruitment={'sales'}
              estilos={LP_KarinaBobe}
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
        <div className="flex w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat md:flex-row md:justify-center md:bg-[url(https://windmar-website-cms.s3.amazonaws.com/LPs/Asesoria-de-la-buena/fondo+LP+karina-07.webp)]">
          <div className="relative flex h-full items-center justify-center bg-[url(https://windmar-website-cms.s3.amazonaws.com/LPs/Asesoria-de-la-buena/Fondo-Reclutamiento-07.webp)] bg-cover bg-center bg-no-repeat p-7 md:w-[50%] md:bg-none md:px-7">
            <div className="absolute inset-0 z-10 bg-blue-900 opacity-65 md:bg-white/0"></div>
            <img src="https://windmar-website-cms.s3.amazonaws.com/LPs/Asesoria-de-la-buena/Icon-2.webp" alt="" className="z-20 w-28" />
            <h1 className="z-20 text-lg leading-5 text-white md:w-72 md:text-balance">
              En <strong>Windmar Home,</strong> <br /> no solo vendemos productos, <strong>¡Creamos un futuro mejor!</strong>
            </h1>
          </div>

          <div className="h-full bg-white/80 px-12 py-3 md:w-[50%] md:bg-white/0 md:p-7">
            <h2 className="mx-auto text-center text-sm text-[#1D429B] md:text-lg md:text-slate-50">Juntos, hacemos la diferencia:</h2>
            <div className="justify-s relative flex items-center md:mx-auto md:w-[60%]">
              <img
                src="https://windmar-website-cms.s3.amazonaws.com/LPs/Asesoria-de-la-buena/Icon-3.webp"
                alt=""
                className="w-24 translate-x-6 rounded-full bg-[#F89B24] p-1"
              />
              <h1 className="w-[250px] rounded-r-full bg-white py-1.5 pl-8 text-xl text-[#F89B24] md:text-balance md:text-lg">
                <strong>Energía Renovable</strong> para <strong>Puerto Rico</strong>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default KarinaBobe

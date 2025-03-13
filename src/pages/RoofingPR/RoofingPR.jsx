import Header from '../../layouts/General/Header/Header'
import FormLeads_PR_roofing from '../../components/FormsLeads/FormsLeads_reactHookForm/FormLeads_PR_roofing'

import { FaArrowRight } from 'react-icons/fa'
import Pixel from '../../components/Pixel/Pixel'

function RoofingPR() {
  return (
    <>
      <Header />
      <Pixel pixelID="366142822415105" />
      <div className="relative flex min-h-[800px] w-screen items-center justify-center bg-[url('https://windmar-website-cms.s3.amazonaws.com/Pages/RoofingPR/BgRoofing.webp')] bg-cover bg-no-repeat lg:h-[87vh] lg:min-h-[750px] lg:justify-start">
        <div className="flex flex-col items-center justify-center gap-4 p-4 lg:left-32 lg:ml-8 lg:w-[450px]">
          <h1 className="text-balance text-center text-2xl font-medium text-[#1e429b] lg:text-4xl">
            ¡TECHOS SELLADOS <strong>CLIENTES FELICES!</strong>
          </h1>
          <FormLeads_PR_roofing campaign={'roofing_pr'} />
        </div>
      </div>
      <div className="w-full bg-[#6d6e71]">
        <h2 className="mx-auto w-[70%] py-3 text-center font-bold text-white lg:p-8 lg:text-2xl">
          Energiza tu hogar y/o negocio con energía solar, olvida las preocupaciones de los apagones, mejora tu calidad de vida y cuida tu bolsillo
          con Windmar Home
        </h2>
      </div>
      <div className="w-full">
        <div className="mx-auto flex w-[80%] flex-col items-center justify-center gap-8 p-8 lg:flex-row">
          <img src="https://windmar-website-cms.s3.amazonaws.com/Pages/RoofingPR/Roofing.webp" alt="" />
          <div>
            <h1 className="text-4xl">WindMar</h1>
            <h2 className="text-6xl font-bold text-[#a6c3e6]">ROOFING</h2>
            <p className="text-xl">
              Trabajamos arduamente en ofrecerte un sellado de techo de calidad.
              <strong> Tenemos más de 20 años conociendo los techos de Puerto Rico</strong>, por eso incluimos roofing en nuestros servicios, sellamos
              tu techo para evitarte disgustos como goteras, grietas, hongos y más.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#f5f4f4]">
        <div className="mx-auto flex w-[90%] flex-col items-center justify-center gap-4 p-8 lg:flex-row">
          <img src="https://windmar-website-cms.s3.amazonaws.com/Pages/RoofingPR/Antes.webp" alt="" className="w-[45%] min-w-[300px]" />
          <FaArrowRight className="rotate-90 text-4xl text-black lg:rotate-0" />
          <img src="https://windmar-website-cms.s3.amazonaws.com/Pages/RoofingPR/Despues.webp" alt="" className="w-[45%] min-w-[300px]" />
        </div>
      </div>
      <section className="flex flex-col items-center justify-center p-8 text-[#777777] xl:w-[90%]">
        <div className="grid grid-cols-1 gap-4 lg:w-[85%] xl:grid-cols-2">
          <h1 className="text-center text-2xl font-bold xl:col-span-2">Este es el plan para dejar tu techo a otro nivel:</h1>
          <div className="flex flex-1 flex-col justify-start gap-4 rounded-xl border-2 border-black p-4 lg:h-[250px] lg:flex-row">
            <img
              src="https://windmar-website-cms.s3.amazonaws.com/Pages/RoofingPR/Limpieza.webp"
              alt=""
              className="mx-auto w-[30%] min-w-[200px] max-w-[300px] object-scale-down"
            />
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold uppercase text-[#1e429b]">Limpieza</h1>
              <p className="text-lg">
                Limpieza profunda a máquina de presión para llegar lo más cerca al techo original. Se remueve la membrana u otros materiales de
                sellado previos.
              </p>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-start gap-4 rounded-xl border-2 border-black p-4 lg:h-[250px] lg:flex-row">
            <img
              src="https://windmar-website-cms.s3.amazonaws.com/Pages/RoofingPR/Correccion.webp"
              alt=""
              className="mx-auto w-[30%] min-w-[200px] max-w-[300px] object-scale-down"
            />
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold uppercase text-[#1e429b]">CORRECCIÓN</h1>
              <p className="text-lg">Arreglo de todas las grietas y/o fisuras y la reparación de áreas con profundo deterioro.</p>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-start gap-4 rounded-xl border-2 border-black p-4 lg:h-[250px] lg:flex-row">
            <img
              src="https://windmar-website-cms.s3.amazonaws.com/Pages/RoofingPR/Primer.webp"
              alt=""
              className="mx-auto w-[30%] min-w-[200px] max-w-[300px] object-scale-down"
            />
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold uppercase text-[#1e429b]">PRIMER</h1>
              <p className="text-lg">
                Etapa opcional; dependiendo de la porosidad del cemento o si ya existieron tratamientos previos para cubrir micro-grietas.
              </p>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-start gap-4 rounded-xl border-2 border-black p-4 lg:h-[250px] lg:flex-row">
            <img
              src="https://windmar-website-cms.s3.amazonaws.com/Pages/RoofingPR/Sellado.webp"
              alt=""
              className="mx-auto w-[30%] min-w-[200px] max-w-[300px] object-scale-down"
            />
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold uppercase text-[#1e429b]">SELLADO</h1>
              <p className="lg:text-lg">
                Proceso con <strong>100% silicona</strong> trabajado en una sola mano. Debe quedar una capa con cierto espesor para que el inspector
                de fábrica pueda emitir un certificado de <strong>garantía limitada de por vida</strong> en el material.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default RoofingPR

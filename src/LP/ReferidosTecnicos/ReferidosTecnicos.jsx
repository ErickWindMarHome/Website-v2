import FormTecnicos from '../../components/FormTecnicos/FormTecnicos'
import useTitle from '../../hooks/useTitle'
import Header from '../../layouts/General/Header/Header'
import { ReferidosNewForm } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'

function Referidos_Tecnicos() {
  useTitle('Referidos técnicos - WindMar')
  return (
    <>
      <Header />
      <div className="flex w-full flex-col items-center justify-center">
        <div className="mt-[100px] flex w-full flex-col items-center justify-center md:flex-row">
          <section className="flex w-full flex-col items-center justify-center rounded-[15px] bg-none md:flex-row md:bg-[#e9ecef]">
            <section className="flex w-full flex-col items-center justify-center">
              <img
                src="https://windmar-website-cms.s3.amazonaws.com/LPs/Referidos-Tecnicos/referidos-tecnicos-instalacion-1.webp"
                alt=""
                className="w-[90%] lg:w-auto"
              />
            </section>
            <div className="flex w-full flex-col items-center justify-center">
              <section className="border-3 flex w-[90%] flex-col items-center justify-center border-[#0038A8] p-2 md:w-[80%]">
                <h1 className="text-center text-lg font-bold text-[#FF9E18] md:text-4xl">
                  GANA POR CADA REFERIDO DE TÉCNICO
                  <p className="text-center text-lg text-[#0038A8] md:text-xl">DE INSTALACIÓN QUE CUMPLA 30 DÍAS DENTRO DE LA COMPAÑÍA</p>
                </h1>
              </section>
              <h2 className="my-[10px] w-[90%] text-center text-xs text-[#0038A8] md:text-xl">
                Gana $250 por cada técnico referido que trabaje en WindMar Home
              </h2>
              <FormTecnicos
                id="form_de_tecnicos_referidos"
                campaign={'ReferidosNew'}
                estilos={ReferidosNewForm}
                tittle=" Déjanos tus datos, nuestro equipo de expertos está listo para servirte."
                phone={true}
                email={true}
                placeholder={true}
              />
            </div>
          </section>
        </div>
        <div className="relative flex justify-center">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black to-transparent md:via-transparent"></div>
          <img
            src="https://windmar-website-cms.s3.amazonaws.com/LPs/Referidos-Tecnicos/referidos-tecnicos-instalacion-2.webp"
            alt=""
            className="w-full object-cover"
          />
        </div>
        <h2 className="mx-auto w-[70%] p-8 text-center text-2xl font-bold text-[#1e429b]">DISFRUTA DE ENERGÍA GRATIS EN TU HOGAR</h2>
      </div>
    </>
  )
}

export default Referidos_Tecnicos

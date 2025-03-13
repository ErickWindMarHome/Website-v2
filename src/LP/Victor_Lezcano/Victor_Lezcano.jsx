import React from 'react'
import FormsLeads_PR_RHF from '../../components/FormsLeads/FormsLeads_reactHookForm/Formsleads_PR_RHF'
import { LP_Victor_Lezcano } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'
import useTitle from '../../hooks/useTitle'
function Victor_Lezcano() {
  useTitle('Team Victor Lezcano - Windmar')
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center">
        <div className="flex h-auto w-full flex-col items-center justify-start bg-[url('https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/JorgeSerrano/Fondo+Panel+solar-02.webp')] bg-cover bg-no-repeat">
          <img
            className="mt-8 w-[30%] flex-col items-center justify-center md:mb-8 md:w-[10%]"
            src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/JorgeSerrano/Logo+wh-04.webp"
            alt=""
          />
          <section className="flex w-[80%] flex-col items-center justify-center md:flex-row">
            <div className="mt-10 hidden w-[80%] flex-col items-end justify-end md:mt-0 md:block md:w-full">
              <img src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/VictorLezcano/victor-Fondo.webp" alt="" />
            </div>

            <div className="w-full md:w-[90%]">
              <h1 className="my-4 w-full text-center text-[20px] text-white md:text-[25px]">
                Únete a <strong>WindMar Home</strong> en tu transición a <strong>energía solar</strong> y <strong>protege</strong> tu hogar 
                con nuestros servicios de <strong>roofing</strong>, mientras te olvidas de la inestabilidad de la{' '}
                <strong>red eléctrica tradicional</strong>.
              </h1>

              <FormsLeads_PR_RHF
                id="Team-Victor-Lezcano-Leads"
                campaign={'VictorLezcano'}
                recruitment={'sales'}
                estilos={LP_Victor_Lezcano}
                boton={'Enviar'}
                tittle={true}
                phone={true}
                email={true}
                municipio={false}
                text={true}
                placeholder={true}
              />
            </div>
          </section>
        </div>
        <section className="mt-10 w-[80%] md:hidden">
          <img src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/VictorLezcano/victor-Fondo.webp" alt="" />
        </section>

        <section className="flex h-[150px] w-full flex-col items-center justify-center bg-[url('https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/JorgeSerrano/banner+de+personas+mosaico-03.webp')] bg-cover bg-no-repeat md:h-[220px]">
          <p className="w-full text-center text-[16px] text-white md:text-[40px]">
            <strong>¡Alcanza</strong> el <strong>éxito</strong> con <strong>WindMar Home!</strong>
          </p>
        </section>
      </div>
    </>
  )
}

export default Victor_Lezcano

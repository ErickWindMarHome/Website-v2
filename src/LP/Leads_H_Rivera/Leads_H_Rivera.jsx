import React from 'react'
import FormsLeads_PR_RHF from '../../components/FormsLeads/FormsLeads_reactHookForm/Formsleads_PR_RHF'
import { HermanosRivera_LP } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'
import Carousel from './components/Carousel'
import useTitle from '../../hooks/useTitle'
function Leads_H_Rivera() {
  useTitle('Team Hermanos Rivera leads - WindMar')
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center">
        <section className="flex h-[950px] w-full flex-col items-center justify-start bg-[url('https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Hermanos-Rivera/fondo-mobile-con-bordes-02.webp')] bg-cover bg-top bg-no-repeat md:relative md:h-[900px] md:w-[98%] md:flex-row md:rounded-2xl md:bg-[url('https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Hermanos-Rivera/DesktopFondo.webp')] md:bg-cover">
          <div className="flex w-full flex-col items-center justify-center">
            {' '}
            <div className="ml-8 mt-20 flex w-[80%] flex-col items-center justify-center">
              <h1 className="w-full text-left text-[35px] text-white md:text-[50px]">
                ¿Por qué <br /> <strong>WindMar Home?</strong>
              </h1>
              <p className="w-full text-[16px] text-white md:text-[20px]">
                Descúbrelo con <strong className="text-[#FF9E18]">WindMar Home</strong>
              </p>
            </div>
            <FormsLeads_PR_RHF
              id="Team-Hermanos-Rivera-leads"
              campaign="Team-Hermanos-Rivera-leads"
              recruitment="sales"
              estilos={HermanosRivera_LP}
              boton="Enviar"
              tittle={false}
              phone={true}
              sales_Rep_Phone={false}
              email={true}
              city={false}
              text={false}
              placeholder={true}
            />
          </div>
          <div className="hidden h-full w-full flex-col items-center justify-center px-8 md:flex">
            <div className="absolute -bottom-2 right-0 flex flex-col items-center justify-end rounded-tl-[34px] bg-white px-20 py-8">
              <button className="hidden w-[400px] rounded-full bg-gradient-to-r from-[#0C1020] to-[#203162] p-2 p-4 text-[20px] text-white md:block">
                ¡<strong>Agenda</strong> tu cita hoy!
              </button>
            </div>
          </div>
        </section>

        <section className="flex w-full flex-col items-center justify-center">
          <button className="w-[80%] rounded-full bg-gradient-to-r from-[#0C1020] to-[#203162] p-2 text-[20px] text-white md:hidden">
            ¡<strong>Agenda</strong> tu cita hoy!
          </button>
          <p className="mt-8 w-[80%] text-center text-[15px] md:text-[20px]">
            Con más de <strong>20 años de experiencia</strong> iluminando hogares y empresas en <strong>Puerto Rico,</strong> y ahora también en{' '}
            <strong>Florida</strong>, somos líderes en <strong>soluciones de energía renovable.</strong> Nuestro equipo de profesionales altamente
            capacitados asegura un servicio excepcional en sistemas de placas solares y otras alternativas de energía limpia.{' '}
            <strong>¡Confía en los expertos </strong>y haz parte de la familia <strong>Windmar Home!</strong>
          </p>
        </section>
        <section>
          <Carousel />
        </section>
        <section className="flex w-full flex-col items-center justify-center md:hidden">
          <div className="flex w-full flex-col items-center justify-center">
            <div className="relative top-12 z-10 my-8 h-0 w-[60%] text-white">
              <h1 className="w-full text-left text-[30px] font-bold">Solar</h1>
              <p className="w-full text-left text-[14px]">
                <strong className="text-[#FF9E18]">Energía solar</strong> para tu <strong className="text-[#FF9E18]">hogar</strong> o{' '}
                <strong className="text-[#FF9E18]">negocio</strong>. Ahorra, disfruta de <strong className="text-[#FF9E18]">energía gratuita</strong>{' '}
                y <strong className="text-[#FF9E18]">despídete</strong> de los <strong className="text-[#FF9E18]">apagones</strong>. Incrementa el
                valor de tu propiedad con energía de respaldo 24/7. <strong className="text-[#FF9E18]">¡Energía limpia, ahorro seguro!</strong>
              </p>
            </div>
            <img className="w-[80%]" src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Hermanos-Rivera/Solar.webp" alt="" />
          </div>
          <div className="flex w-full flex-col items-center justify-center">
            <div className="relative top-16 z-10 my-8 h-0 w-[60%] text-white">
              <h1 className="w-full text-left text-[30px] font-bold">Roofing</h1>
              <p className="w-full text-left text-[14px]">
                Nuestro
                <strong className="text-[#FF9E18]"> sellado de techo </strong> ofrece <strong className="text-[#FF9E18]">protección duradera</strong>{' '}
                y <strong className="text-[#FF9E18]">eficiente</strong> para tu hogar, con <strong className="text-[#FF9E18]">materiales</strong> de
                <strong className="text-[#FF9E18]"> alta calidad</strong> y <strong className="text-[#FF9E18]">tecnología avanzada</strong>. Mejora el
                aislamiento, incrementa el valor de tu propiedad y asegura la máxima resistencia frente a cualquier clima.
              </p>
            </div>
            <img className="w-[80%]" src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Hermanos-Rivera/Roofing.webp" alt="" />
          </div>
          <div className="flex w-full flex-col items-center justify-center">
            <div className="relative top-10 z-10 my-8 h-0 w-[60%] text-white">
              <h1 className="w-full text-left text-[30px] font-bold">Anker</h1>
              <p className="w-full text-left text-[14px]">
                Las baterías Anker brindan <strong className="text-[#FF9E18]">energía confiable</strong> en{' '}
                <strong className="text-[#FF9E18]">cualquier momento</strong> o y <strong className="text-[#FF9E18]">lugar</strong>, con{' '}
                <strong className="text-[#FF9E18]">carga rápida</strong> y <strong className="text-[#FF9E18]">alta capacidad</strong>. Perfectas para
                mantener tus dispositivos siempre listos y contar con <strong className="text-[#FF9E18]">respaldo</strong> en el
                <strong className="text-[#FF9E18]"> hogar</strong> o al <strong className="text-[#FF9E18]">aire libre</strong>
              </p>
            </div>
            <img className="w-[80%]" src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Hermanos-Rivera/Anker.webp" alt="" />
          </div>
        </section>
      </div>
      <section className="my-8 flex w-full items-center justify-center">
        <img className="w-[30%] md:w-[15%]" src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/Components/Logo/Logo-PR.webp" alt="" />
      </section>
    </div>
  )
}

export default Leads_H_Rivera

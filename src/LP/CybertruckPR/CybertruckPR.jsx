import { LP_CybertruckPR } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'
import FormsLeads_PR_RHF from '../../components/FormsLeads/FormsLeads_reactHookForm/Formsleads_PR_RHF'
import Header from '../../layouts/General/Header/Header'
import useTitle from '../../hooks/useTitle'

function CybertruckPR() {
  useTitle('Promoción Cybertruck - WindMar')
  return (
    <>
      <Header />
      <div className="mt-8 flex h-auto w-full flex-col items-center justify-between bg-[url(https://windmar-website-cms.s3.amazonaws.com/LPs/CybertruckX2/background+cybertruck-mobile01.webp)] bg-cover bg-local bg-no-repeat md:bg-[url(https://windmar-website-cms.s3.amazonaws.com/LPs/CybertruckX2/background+cybertruck-desktop.webp)]">
        <img
          className="mt-[8vh] w-[80%] md:w-[40%]"
          src="https://windmar-website-cms.s3.amazonaws.com/LPs/CybertruckX2/firmaloypisalox2.webp"
          alt=""
        />
        <div className="mt-[50vh] w-full md:mt-0 md:items-start md:justify-start" />

        <section className="flex w-full flex-col items-center justify-center md:mt-[4vh] md:flex-row">
          <div className="flex flex-col items-center justify-center text-center md:w-full md:px-10">
            <p className="text-[24px] text-white md:w-[65%] md:text-left md:text-[26px]">
              ¡Pudieras ganar la <br className="hidden md:flex" /> <strong>Tesla Cybertruck</strong>
              <br className="hidden md:flex" /> de tus sueños!
            </p>
            <p className="w-[65%] text-[14px] text-white md:text-left md:text-[15px]">Sigue las instrucciones y regístrate para ganar.</p>

            <FormsLeads_PR_RHF
              id="CyberTruckGiveaway"
              campaign="CyberTruckGiveaway"
              estilos={LP_CybertruckPR}
              tittle={false}
              placeholder={true}
              city={true}
              email={true}
              phone={true}
            />

            <section className="mt-[4vh] hidden w-[68%] text-left text-[25px] font-bold text-white md:flex md:flex-col">
              GANE ENERGÍA POTENTE EN CASA O FUERA DE ELLA
              <p className="hidden w-full text-left text-[14px] font-[400] text-white md:flex">
                Por cada compra e instalación de una Tesla Powerwall, recibirás la oportunidad de participar en nuestro sorteo de un año y ganar el
                esperado Tesla Cybertruck
              </p>
            </section>
          </div>
          <section className="relative bottom-0 hidden h-screen w-full items-end justify-center md:flex">
            <img
              src="https://windmar-website-cms.s3.amazonaws.com/LPs/CybertruckX2/Regalando2Cybertruck.webp"
              alt=""
              className="hidden flex-col items-start justify-start md:flex"
            />
          </section>
        </section>

        <section className="mt-[10vh] hidden w-[50%] flex-col items-center justify-center md:flex">
          <h1 className="text-[25px] font-bold text-white">PARA PARTICIPAR</h1>
          <ul className="mb-[4vh] w-[90%] text-justify text-[14px] text-white">
            <li className="my-2 flex items-start">
              <img className="mx-2 md:w-[5%]" src="https://windmar-website-cms.s3.amazonaws.com/LPs/CybertruckX2/checkBullet-10.webp" alt="" />
              Ser mayor de 18 años de edad.
            </li>
            <li className="my-2 flex items-start">
              <img className="mx-2 md:w-[5%]" src="https://windmar-website-cms.s3.amazonaws.com/LPs/CybertruckX2/checkBullet-10.webp" alt="" />
              Obtener un sistema solar firmando contrato con WindMar Home.
            </li>
            <li className="my-2 flex items-start">
              <img className="mx-2 md:w-[5%]" src="https://windmar-website-cms.s3.amazonaws.com/LPs/CybertruckX2/checkBullet-10.webp" alt="" />
              Mantener tu contrato vigente durante el cierre del periodo de participación. Todo contrato vigente al finalizar el periodo de
              participación, cuenta con la oportunidad de ganar.
            </li>
          </ul>

          <h1 className="mb-[2vh] w-full text-center text-[23px] font-[400] text-white">¡Se escogerán dos ganadores en el sorteo!</h1>
          <h2 className="text-center text-[25px] font-bold text-white">
            {' '}
            1er y 2do Premio <br /> <span className="text-[35px]">Cybertruck</span>
          </h2>
          <a
            className="flex w-full items-center justify-center no-underline"
            href="https://scms.windmar.com/uploads/REGLAS_SORTEO_CYBERTRUCK_1_60d68389bb.pdf"
          >
            <button className="mb-[4vh] mt-[4vh] h-12 w-[80%] border-2 border-white px-6 text-white">REGLAS DEL SORTEO</button>
          </a>
        </section>
      </div>

      <div className="flex h-auto w-full flex-col items-center justify-between bg-[url(https://windmar-website-cms.s3.amazonaws.com/LPs/CybertruckX2/background+cybertruck-mobile.webp)] bg-cover bg-no-repeat md:bg-[url(https://windmar-website-cms.s3.amazonaws.com/LPs/CybertruckX2/background+cybertruck-desktop02.webp)]">
        <img
          src="https://windmar-website-cms.s3.amazonaws.com/LPs/CybertruckX2/Regalando2Cybertruck.webp"
          alt=""
          className="flex flex-col items-start justify-start md:hidden"
        />
        <img className="mt-[4vh] hidden md:block" src="https://windmar-website-cms.s3.amazonaws.com/LPs/CybertruckX2/logoCybertruck.webp" alt="" />
        <div className="mt-[50vh] w-full md:mt-[50vh]" />
        <section className="hidden flex-col items-center justify-center md:flex">
          <a
            className="mb-[4vh] mt-[4vh] w-[30%] border-2 border-slate-50 p-2 px-6 text-center text-white"
            href="https://scms.windmar.com/uploads/REGLAS_SORTEO_CYBERTRUCK_1_60d68389bb.pdf"
          >
            REGLAS DEL SORTEO
          </a>
          <h1 className="mt-[4VH] w-full text-center text-[25px] font-bold text-white">POTENCIA Y GANA CON WINDMAR HOME</h1>
          <p className="mt-[4VH] w-[80%] text-center text-[10px] text-white">
            Comienza el domingo, 1 de septiembre de 2024 a la 12:01 AM (AST) y finaliza el domingo, 31 de agosto de 2025 a las 11:59PM (AST) (“Periodo
            de Participación”). El ganador será seleccionado y notificado el día lunes, 15 de septiembre de 2025 en o antes de las 5:00PM (AST). Solo
            se van a contar los participantes cuyas cuentas estén activas el 31 de agosto de 2025. Nada que comprar para participar. Sorteo auspiciado
            por WindMar Home.
          </p>
        </section>

        <section className="flex w-full flex-col items-center justify-center md:hidden">
          <h1 className="text-[25px] font-bold text-white">PARA PARTICIPAR</h1>
          <ul className="mb-[4vh] w-[98%] p-4 text-justify text-[14px] text-white">
            <li className="my-2 flex items-start">
              <img className="mx-2 w-[6%]" src="https://windmar-website-cms.s3.amazonaws.com/LPs/CybertruckX2/checkBullet-10.webp" alt="" />
              Ser mayor de 18 años de edad.
            </li>
            <li className="my-2 flex items-start">
              <img className="mx-2 w-[6%]" src="https://windmar-website-cms.s3.amazonaws.com/LPs/CybertruckX2/checkBullet-10.webp" alt="" />
              Obtener un sistema solar firmando contrato con WindMar Home.
            </li>
            <li className="my-2 flex items-start">
              <img className="mx-2 w-[6%]" src="https://windmar-website-cms.s3.amazonaws.com/LPs/CybertruckX2/checkBullet-10.webp" alt="" />
              Mantener tu contrato vigente durante el cierre del periodo de participación. Todo contrato vigente al finalizar el periodo de
              participación, cuenta con la oportunidad de ganar.
            </li>
          </ul>

          <h1 className="mb-[2vh] w-[70%] text-center text-[23px] font-[400] text-white">¡Se escogerán dos ganadores en el sorteo!</h1>
          <h2 className="text-center text-[25px] font-bold text-white">
            {' '}
            1er y 2do Premio <br /> <span className="text-[35px]">Cybertruck</span>
          </h2>
          <a
            className="flex w-full items-center justify-center no-underline"
            href="https://scms.windmar.com/uploads/REGLAS_SORTEO_CYBERTRUCK_1_60d68389bb.pdf"
          >
            <button className="my-4 border-2 border-white p-4 text-white">REGLAS DEL SORTEO</button>
          </a>
          <p className="w-[80%] text-center text-[9px] text-white">
            Solo los mayores de 18 años pueden participar. El sorteo comienza el sábado, 1 de julio de 2023 a las 12:01 a.m. y finaliza el domingo, 30
            de junio de 2024 a las 11:59 p.m. Los ganadores se estarán anunciando en julio de 2024. Solo se van a contar los participantes cuyas
            cuentas estén activas el 30 de mayo de 2024. Nada que comprar para participar. Sorteo auspiciado por WindMar Home.
          </p>
        </section>
      </div>
    </>
  )
}
export default CybertruckPR

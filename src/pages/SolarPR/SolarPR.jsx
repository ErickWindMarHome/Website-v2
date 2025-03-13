import Footer from '../../layouts/General/Footer/Footer'
import Header from '../../layouts/General/Header/Header'
import Pixel from '../../components/Pixel/Pixel'
import useTitle from '../../hooks/useTitle'
import { Link } from 'react-router-dom'

function SolarPR() {
  useTitle('El mejor sistema de energía solar - WindMar')
  return (
    <>
      <Pixel pixelID="1826134724345924" />
      <Header />
      <div className="relative flex h-[87vh] w-screen justify-center">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black to-transparent md:via-transparent"></div>
        <img src="https://windmar-website-cms.s3.amazonaws.com/Windmar1.0/PR/sistema-paneles-solares.webp" alt="" className="w-full object-cover" />
        <h1 className="absolute bottom-10 left-10 w-[70%] text-balance text-2xl font-bold text-white lg:text-7xl">
          DISFRUTA DE ENERGÍA GRATIS EN TU HOGAR
        </h1>
      </div>
      <div>
        <h2 className="mx-auto w-[90%] py-3 pb-0 text-center text-2xl font-bold text-[#1e429b] lg:w-[70%] lg:p-8">
          Energiza tu hogar y/o negocio con energía solar, olvida las preocupaciones de los apagones, mejora tu calidad de vida y cuida tu bolsillo
          con Windmar Home
        </h2>

        {/* Beneficios */}

        <div className="mx-auto flex w-[90%] max-w-[1600px] flex-col items-center justify-around gap-4 lg:flex-row-reverse">
          <img src="https://windmar-website-cms.s3.amazonaws.com/Pages/Solar/Beneficios.webp" alt="" className="lg:w-[50%]" />
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="flex flex-col items-start justify-center gap-2">
              <h1 className="text-center text-xl font-bold uppercase text-[#1e429b] lg:text-left lg:text-4xl">
                Accede a todos los beneficios que la energía solar tiene para ti
              </h1>
            </div>
            <div className="w-[90%] text-left">
              <ul className="flex flex-col gap-2 px-4">
                <li className="list-decimal marker:font-bold marker:text-[#f89b24]">
                  <p>Suple las necesidades energéticas de tu hogar y/o negocio con energía solar.</p>
                </li>
                <li className="list-decimal marker:font-bold marker:text-[#f89b24]">
                  <p>Disfruta de energía gratis.</p>
                </li>
                <li className="list-decimal marker:font-bold marker:text-[#f89b24]">
                  <p>Ahorra y cuida tu bolsillo.</p>
                </li>
                <li className="list-decimal marker:font-bold marker:text-[#f89b24]">
                  <p>Deja de preocuparte por los apagones.</p>
                </li>
                <li className="list-decimal marker:font-bold marker:text-[#f89b24]">
                  <p>Incrementa el valor de tu propiedad.</p>
                </li>
                <li className="list-decimal marker:font-bold marker:text-[#f89b24]">
                  <p>Energía de reserva 24/7.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Como Funciona */}

      <div className="mx-auto flex w-[90%] max-w-[1600px] flex-col items-center justify-around gap-4 lg:flex-row">
        <img src="https://windmar-website-cms.s3.amazonaws.com/Pages/Solar/RedElectrica.webp" alt="" className="lg:w-[50%]" />
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-4xl font-bold text-[#1e429b]">
              ¿CÓMO <span>FUNCIONA</span>?
            </h1>
            <h2 className="text-xl font-bold text-[#1e429b]">ENERGÍA RENOVABLE</h2>
          </div>
          <div className="w-[90%] text-left">
            <ul className="flex flex-col gap-2 px-4">
              <li className="list-decimal marker:font-bold marker:text-[#f89b24]">
                <p>
                  <strong className="font-bold text-[#1e429b]">Paneles solares </strong>
                  El panel fotovoltáico recibe energía del sol en sus placas solares y la convierte a corriente continua (DC).
                </p>
              </li>
              <li className="list-decimal marker:font-bold marker:text-[#f89b24]">
                <p>
                  <strong className="font-bold text-[#1e429b]">Microinversores </strong>
                  Instalados debajo de cada panel solar, el inversor convierte la corriente continua (DC) a la corriente alterna (AC) que utiliza tu
                  hogar.
                </p>
              </li>
              <li className="list-decimal marker:font-bold marker:text-[#f89b24]">
                <p>
                  <strong className="font-bold text-[#1e429b]">Batería (Opcional) </strong>
                  Integramos baterías Tesla Powerwall que almacenan la energía solar producida en exceso durante el día. Podrás utilizar esa energía
                  de noche o durante un apagón. También ofrecemos alternativas que permiten operar tu sistema solar con baterías sin estar
                  interconectados a la AEE.
                </p>
              </li>
              <li className="list-decimal marker:font-bold marker:text-[#f89b24]">
                <p>
                  <strong className="font-bold text-[#1e429b]">Contador inteligente (Opcional) </strong>Instalado por la AEE bajo el Programa de
                  Medición Neta, este contador lee el flujo de electricidad en ambas direcciones. La energía solar producida en exceso durante el día
                  se acredita con la AEE para usarla por la noche o en el futuro.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tesla PowerWall */}

      <div className="flex w-full flex-col items-center justify-center gap-8 pt-8 lg:h-[80%] lg:flex-row">
        <div className="relative">
          <img src="https://windmar-website-cms.s3.amazonaws.com/Pages/Solar/Powerwall.webp" alt="" className="w-full lg:h-full" />
          <div className="absolute inset-0 h-[13%] w-full bg-gradient-to-b from-[#FFFFFF] to-transparent md:via-transparent"></div>
          <div className="absolute bottom-0 h-[30%] w-full bg-gradient-to-t from-[#FFFFFF] to-transparent md:via-transparent"></div>
        </div>
        <div className="left-20 flex w-[90%] flex-col items-center justify-center gap-8 lg:absolute lg:w-[50%]">
          <div className="flex flex-col items-center justify-center gap-2 lg:items-start">
            <h1 className="text-center text-4xl font-bold text-[#1e429b] lg:text-left">TESLA POWERWALL</h1>
            <p className="text-pretty text-center text-sm font-semibold text-[#1e429b] lg:w-[80%] lg:text-left lg:text-base">
              TESLA POWERWALL ES LA BATERÍA #1 EN EL MERCADO. <br /> ES LA SOLUCIÓN INTELIGENTE PARA ALMACENAR LA ENERGÍA RECOLECTADA POR TUS PANELES
              SOLARES. MANTIENE TUS DISPOSITIVOS CONECTADOS Y LAS LUCES ENCENDIDAS EN TODO MOMENTO PARA EVITAR DEJARTE A OSCURAS DURANTE UN APAGÓN.
            </p>
          </div>
          <div className="text-left lg:w-[90%]">
            <ul className="flex flex-col gap-2 px-4">
              <li className="list-disc marker:font-bold marker:text-[#f89b24]">
                <p>Energía en reserva 24/7.</p>
              </li>
              <li className="list-disc marker:font-bold marker:text-[#f89b24]">
                <p>Ideal para que los apagones no te afecten.</p>
              </li>
              <li className="list-disc marker:font-bold marker:text-[#f89b24]">
                <p>Totalmente silenciosa.</p>
              </li>
              <li className="list-disc marker:font-bold marker:text-[#f89b24]">
                <p>Monitoreo en vivo con Tesla App.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Monitoreo */}

      <div className="mx-auto flex w-[90%] max-w-[1600px] flex-col items-center justify-around gap-4 py-8 lg:flex-row">
        <img src="https://windmar-website-cms.s3.amazonaws.com/Pages/Solar/Monitoreo.webp" alt="" className="w-[50%] lg:w-[20%]" />
        <div className="flex flex-col items-center justify-center gap-8 lg:w-[50%] lg:items-end">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-4xl font-bold text-[#1e429b]">MONITOREO</h1>
            <div className="h-1 w-full bg-[#1e429b]"></div>
          </div>
          <div className="w-full text-center lg:w-[90%] lg:text-right">
            <p>
              Todos nuestros sistemas solares se pueden monitorear a través de internet. Puedes ver la producción solar, el consumo y la carga de la
              batería Tesla Powerwall en cualquier momento.
            </p>
          </div>
        </div>
      </div>

      {/* Facturas */}

      <div className="mx-auto flex w-[90%] max-w-[1600px] flex-col items-center justify-around gap-4 pb-8 lg:flex-row-reverse">
        <img src="https://windmar-website-cms.s3.amazonaws.com/Pages/Solar/Facturas.webp" alt="" className="w-[90%] lg:w-[50%]" />
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex flex-col items-start justify-center gap-2">
            <h1 className="text-center text-4xl font-bold uppercase text-[#1e429b]">COMPARA FACTURAS</h1>
            <h2 className="text-center font-bold text-[#1e429b] lg:text-left lg:text-xl">
              ASÍ DE SORPRENDENTE PODRÍA LUCIR TU FACTURA CUANDO TIENES UN SISTEMA SOLAR DE WINDMAR HOME.
            </h2>
          </div>
          <div className="w-[90%] text-left">
            <ul className="flex flex-col gap-2 px-4">
              <li className="list-decimal marker:font-bold marker:text-[#f89b24]">
                <p>Suple las necesidades energéticas de tu hogar y/o negocio con energía solar.</p>
              </li>
              <li className="list-decimal marker:font-bold marker:text-[#f89b24]">
                <p>Disfruta de energía gratis.</p>
              </li>
              <li className="list-decimal marker:font-bold marker:text-[#f89b24]">
                <p>Ahorra y cuida tu bolsillo.</p>
              </li>
              <li className="list-decimal marker:font-bold marker:text-[#f89b24]">
                <p>Deja de preocuparte por los apagones.</p>
              </li>
              <li className="list-decimal marker:font-bold marker:text-[#f89b24]">
                <p>Incrementa el valor de tu propiedad.</p>
              </li>
              <li className="list-decimal marker:font-bold marker:text-[#f89b24]">
                <p>Energía de reserva 24/7.</p>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <Link to="/pr/cambiate-a-energia-solar" className="rounded-full bg-[#1e429b] px-4 py-3 font-bold text-white">
              ESTUDIO DE CONSUMO GRATIS AQUÍ
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default SolarPR

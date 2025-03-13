import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Estadisticas = () => {
  const locacion = useSelector((state) => state.states.locacion)

  return (
    <div className="box-border flex w-full w-screen flex-col items-center justify-center border-b border-[#234992] px-[8vw] py-20">
      {locacion === 'fl' ? (
        <p className="m-2.5 w-[85%] text-center text-[25px] font-bold uppercase text-[#234992] md:w-full">
          WE ARE THE largest solar{' '}
          <span className="relative inline-block">
            <span className="absolute inset-0 h-[3vh] bg-[#ed8936]" style={{ top: '50%', transform: 'translateY(-50%)' }} />
            <span className="z-8 relative"> energy company</span>
          </span>
          <br />
          in the Caribbean, offering services to all market segments.
        </p>
      ) : (
        <p className="m-2.5 w-[85%] text-center text-[25px] font-bold uppercase text-[#234992] md:w-full">
          SOMOS LA EMPRESA DE{' '}
          <span className="relative inline-block">
            <span className="absolute inset-0 h-[3vh] bg-[#ed8936]" style={{ top: '50%', transform: 'translateY(-50%)' }} />
            <span className="z-8 relative">ENERGÍA SOLAR</span>
          </span>
          <br />
          MÁS GRANDE DEL CARIBE, ofreciendo servicios a todos los segmentos del mercado.
        </p>
      )}
      {locacion === 'fl' ? (
        <div className="flex flex-wrap items-center justify-center gap-[3vw]">
          <article className="flex flex-wrap justify-center gap-[6vw]">
            <div className="flex w-full flex-col items-center justify-center text-justify text-[0.95em] text-[#234992] md:w-[300px] md:text-left">
              <Link
                className="flex flex-col items-center justify-center text-justify text-[0.95em] text-[#234992] md:text-left md:text-[0.95em]"
                to="/fl/how-it-works/"
              >
                <img
                  className="w-[70%] border-b-2 border-[#234992] md:w-full md:border-none"
                  src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Estadisticas/logo-residential.webp"
                  alt=""
                />
              </Link>
              <strong className="w-full text-center text-[1.3em] text-[#234992] md:text-justify">RESIDENTIAL</strong>
              <br />
              With our Solar Photovoltaic System you will have all the power of the sun energizing your home 24 hours a day. Improve your quality of
              life and take care of your pocket with renewable energy.
            </div>
            <div className="flex w-full flex-col items-center justify-center text-justify text-[0.95em] text-[#234992] md:w-[300px] md:text-left">
              <Link
                className="flex flex-col items-center justify-center text-justify text-[0.95em] text-[#234992] md:text-left md:text-[0.95em]"
                to="/fl/roofing/"
              >
                <img
                  className="w-[70%] border-b-2 border-[#234992] md:w-full md:border-none"
                  src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Estadisticas/logo-roofing.webp"
                  alt=""
                />
              </Link>
              <strong className="w-full text-center text-[1.3em] text-[#234992] md:text-justify">ROOFING</strong>
              <br />
              Roof sealing will help you protect and repair the structure of your home by preventing air, smoke, water, dust and gases from damaging
              the interior and exterior of your property.
            </div>
          </article>
        </div>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-[3vw]">
          <article className="flex flex-wrap justify-center gap-[6vw]">
            <div className="flex w-full flex-col items-center justify-center text-justify text-[0.95em] text-[#234992] md:w-[300px] md:text-left">
              <Link
                className="flex flex-col items-center justify-center text-justify text-[0.95em] text-[#234992] md:text-left md:text-[0.95em]"
                to="/pr/como-funciona/"
              >
                <img
                  className="w-[70%] border-b-2 border-[#234992] md:w-full md:border-none"
                  src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Estadisticas/logo-residential.webp"
                  alt=""
                />
              </Link>
              <strong className="w-full text-center text-[1.3em] text-[#234992] md:text-justify">RESIDENCIAL</strong>
              <br />
              Con nuestro Sistema Solar fotovoltaico tendrás todo el poder del sol energizando tu hogar las 24 horas del día. Mejora tu calidad de
              vida y cuida tu bolsillo con energía renovable
            </div>
            <div className="flex w-full flex-col items-center justify-center text-justify text-[0.95em] text-[#234992] md:w-[300px] md:text-left">
              <Link
                className="flex flex-col items-center justify-center text-justify text-[0.95em] text-[#234992] md:text-[0.95em]"
                to="/pr/como-funciona/"
              >
                <img
                  className="w-[70%] border-b-2 border-[#234992] md:w-full md:border-none"
                  src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Estadisticas/logo-commercial.webp"
                  alt=""
                />
              </Link>
              <strong className="text-[1.3em] text-[#234992] md:text-justify">COMERCIAL</strong>
              <br />
              Brindamos el servicio de instalación de paneles solares a empresas en Puerto Rico que deseen controlar su costo de energía mientras su
              presupuesto crece para invertir en sus objetivos.
            </div>
          </article>

          <article className="flex flex-wrap justify-center gap-[6vw]">
            <div className="flex w-full flex-col items-center justify-center text-justify text-[0.95em] text-[#234992] md:w-[300px] md:text-left">
              <Link
                className="flex flex-col items-center justify-center text-justify text-[0.95em] text-[#234992] md:text-[0.95em]"
                to="/pr/roofing/"
              >
                <img
                  className="w-[70%] border-b-2 border-[#234992] md:w-full md:border-none"
                  src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Estadisticas/logo-roofing.webp"
                  alt=""
                />
              </Link>
              <strong className="text-[1.3em] text-[#234992] md:text-justify">ROOFING</strong>
              <br />
              El sellado de techo te ayudará a proteger y reparar la estructura de tu hogar impidiendo que el aire, el humo, el agua, el polvo y los
              gases dañen el interior y exterior de tu propiedad.
            </div>
            <div className="flex w-full flex-col items-center justify-center text-justify text-[0.95em] text-[#234992] md:w-[300px] md:text-left">
              <Link
                className="flex flex-col items-center justify-center text-justify text-[0.95em] text-[#234992] md:text-[0.95em]"
                to="/pr/anker-pr/"
              >
                <img
                  className="w-[70%] border-b-2 border-[#234992] md:w-full md:border-none"
                  src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Estadisticas/logo-anker.webp"
                  alt=""
                />
              </Link>
              <strong className="text-[1.3em] text-[#234992] md:text-justify">BATERIAS ANKER</strong>
              <br />
              Siente la comodidad de las baterías solares portátiles Anker con Windmar Home, garantizando que tus dispositivos estén conectados donde
              te encuentres.
            </div>
          </article>
        </div>
      )}
    </div>
  )
}

export default Estadisticas

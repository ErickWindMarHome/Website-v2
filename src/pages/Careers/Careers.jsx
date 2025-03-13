import Header from '../../layouts/General/Header/Header'
import Footer from '../../layouts/General/Footer/Footer'
import Pixel from '../../components/Pixel/Pixel'
import useTitle from '../../hooks/useTitle'
import { Link } from 'react-router-dom'

function Careers() {
  useTitle('Nuestro equipo de trabajo - WindMar')

  return (
    <>
      <meta
        name="description"
        content="Con Windmar Home podrás energizar tu carrera a través de atractivas comisiones, oportunidades de crecimiento, bonificaciones e incentivos."
      />
      <Pixel pixelID="1826134724345924" />
      <Header />
      <div className="relative mb-8 flex h-screen max-h-[90vh] w-screen items-center justify-center">
        <img
          src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/Pages/CarrerasPR/Header.webp"
          alt=""
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 h-full w-full bg-[#27282AA8] bg-gradient-to-t"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="relative flex w-[85%] flex-col items-center justify-center gap-8 rounded-xl border-2 border-white bg-white/30 p-8 backdrop-blur-md lg:bg-gray-50/10 lg:p-10">
            <img
              src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/Pages/CarrerasPR/LogoWindmar.webp"
              alt="Logo Windmar"
              className="w-[70%] lg:max-w-[200px]"
            />
            <h1 className="text-lg font-bold lg:text-3xl">
              HAZ A PUERTO RICO BRILLAR <br /> <span className="text-xl lg:text-5xl">DA EL PRIMER PASO</span>
            </h1>
            <p className="text-sm lg:text-base">
              La compañía líder de energía renovable te invita a convertirte en Consultor Energético o WindMar Technician.{' '}
              <br className="hidden lg:block" /> Energiza tu carrera con comisiones e incentivos.
            </p>
            <button className="lg: absolute -bottom-8 w-[90%] max-w-[500px] bg-[#FF9E29] py-3 font-bold lg:static lg:w-full">UNIRME AHORA</button>
          </div>
        </div>
      </div>
      <div className="grid max-w-[1600px] grid-cols-1 gap-6 p-8 lg:grid-cols-2">
        <iframe
          width="1280"
          height="720"
          src="https://www.youtube.com/embed/dbMg8obyzlU"
          title="Crecimiento sin límites - Víctor Lescano"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="order-1 aspect-video h-[200px] w-full rounded-xl border-0 outline-none lg:h-[400px]"
        ></iframe>
        <iframe
          width="1280"
          height="720"
          src="https://www.youtube.com/embed/aMHtli2BEKc"
          title="De Clienta Satisfecha a Modelo a Seguir - Crystal Del Mar"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="order-2 aspect-video h-[200px] w-full rounded-xl border-0 outline-none lg:h-[400px]"
        ></iframe>
        <iframe
          width="1280"
          height="720"
          src="https://www.youtube.com/embed/228LuDVfub8"
          title="Seguridad, compromiso y calidad - Xavier Musa Matos"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="order-3 aspect-video h-[200px] w-full rounded-xl border-0 outline-none lg:h-[400px]"
        ></iframe>
        <div className="relative order-4 h-[200px] rounded-xl lg:h-[400px]">
          <img src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/Pages/CarrerasPR/Team.webp" alt="" className="h-full w-full rounded-xl" />
          <div className="absolute inset-0 flex h-full w-full items-center justify-center rounded-xl text-white backdrop-blur-lg">
            <h1 className="text-balance text-center text-3xl font-bold lg:text-5xl">
              FORMA PARTE <br />
              DEL <span className="text-[#FF9E29]">EQUIPO #1</span>
            </h1>
          </div>
        </div>
      </div>
      <h1 className="mb-4 py-8 text-center text-4xl font-bold text-[#1e429b]">
        OPORTUNIDADES <span className="text-[#FF9E29]">DISPONIBLES</span>
      </h1>
      <div className="mx-auto w-full p-8">
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
          <div className="relative mb-8 flex w-full max-w-[500px] flex-col items-center justify-center gap-4 lg:mb-auto">
            <img
              src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/Pages/CarrerasPR/Energy.webp"
              alt="Consultor Energetico"
              className="rounded-lg"
            />
            <div className="absolute -top-8 w-[60%] rounded-xl border border-[#1C4299] bg-white py-4 text-center">
              <h1 className="font-bold text-[#1C4299]">CONSULTOR ENERGÉTICO</h1>
            </div>
            <Link to="/pr/fuerza-de-ventas/" className="w-full bg-[#FF9E29] py-4 text-center font-bold text-white">
              UNIRME AHORA
            </Link>
          </div>
          <div className="relative mb-8 flex w-full max-w-[500px] flex-col items-center justify-center gap-4 lg:mb-auto">
            <img
              src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/Pages/CarrerasPR/Installation.webp"
              alt="Tecnico de instalacion"
              className="rounded-lg"
            />
            <div className="absolute -top-8 w-[60%] rounded-xl border border-[#1C4299] bg-white py-4 text-center">
              <h1 className="font-bold text-[#1C4299]">TÉCNICO DE INSTALACIÓN</h1>
            </div>
            <Link to="/pr/tecnico-de-instalacion/" className="w-full bg-[#FF9E29] py-4 text-center font-bold text-white">
              UNIRME AHORA
            </Link>
          </div>
          <div className="relative mb-8 flex w-full max-w-[500px] flex-col items-center justify-center gap-4 lg:mb-auto">
            <img
              src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/Pages/CarrerasPR/Roofing.webp"
              alt="Tecnico de roofing"
              className="rounded-lg"
            />
            <div className="absolute -top-8 w-[60%] rounded-xl border border-[#1C4299] bg-white py-4 text-center">
              <h1 className="font-bold text-[#1C4299]">TÉCNICO DE ROOFING</h1>
            </div>
            <Link to="/pr/tecnico-de-roofing/" className="w-full bg-[#FF9E29] py-4 text-center font-bold text-white">
              UNIRME AHORA
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Careers

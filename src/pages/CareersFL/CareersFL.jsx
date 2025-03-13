import Header from '../../layouts/General/Header/Header'
import Footer from '../../layouts/General/Footer/Footer'
import Pixel from '../../components/Pixel/Pixel'
import useTitle from '../../hooks/useTitle'
import { Link } from 'react-router-dom'

function CareersFL() {
  useTitle('Nuestro equipo de trabajo - WindMar')

  return (
    <>
      <meta
        name="description"
        content="Con Windmar Home podrás energizar tu carrera a través de atractivas comisiones, oportunidades de crecimiento, bonificaciones e incentivos."
      />
      <Pixel pixelID="1826134724345924" />
      <Header />
      <div className="relative mb-8 flex min-h-[87vh] w-screen items-center justify-center bg-[url('https://windmar-website-cms.s3.amazonaws.com/Windmar1.0/FL/work-team-windmar-solar.webp')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-[#ffffff] to-transparent md:via-transparent"></div>
        <div className="sticky flex flex-col items-center justify-center p-8">
          <h1 className="text-balance border-4 border-white p-6 text-center text-4xl font-bold uppercase text-white lg:p-10 lg:text-6xl">
            Your future at <span className="text-[#f89b24]">Windmar</span>
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 p-4 text-center text-2xl font-bold">
        <h2 className="w-[70%] text-[#1e429b]">
          Grow professionally in the solar industry with Windmar Solar + Roofing a trusted name in renewable energy for over two decades, be part of
          the solar revolution in Puerto Rico, the Caribbean, and Florida. ¡Join the winning team today!
        </h2>
      </div>
      <div className='flex h-[300px] w-full flex-col items-center justify-center bg-[url("https://windmar-website-cms.s3.amazonaws.com/Pages/CarrerasPR/BgCard.webp")] bg-cover bg-center bg-no-repeat p-8'>
        <h1 className="text-balance border-4 border-white p-10 text-center text-xl font-bold uppercase text-white lg:text-6xl">
          BE PART OF THE #1 <br />
          <span className="text-[#f89b24]">SOLAR COMPANY</span>
        </h1>
      </div>
      <div className="mx-auto w-full p-8">
        <h1 className="pb-8 text-center text-4xl font-bold uppercase text-[#1e429b]">Available Opportunities</h1>
        <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
          <div className="flex flex-col items-center justify-center gap-4">
            <img
              src="https://windmar-website-cms.s3.amazonaws.com/Pages/CarrerasFL/Installation-Tecnical.webp"
              alt=""
              className="w-[90%] max-w-[550px]"
            />
            <Link
              to="https://windmarsolaracademy.com/jointoday"
              className="rounded-xl border-2 border-[#1e429b] bg-[#1e429b] px-8 py-3 font-bold text-white"
            >
              Join The team!
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <img src="https://windmar-website-cms.s3.amazonaws.com/Pages/CarrerasFL/Sales-Force.webp" alt="" className="w-[90%] max-w-[550px]" />
            <Link
              to="https://windmarsolaracademy.com/jointoday"
              className="rounded-xl border-2 border-[#1e429b] bg-[#1e429b] px-8 py-3 font-bold text-white"
            >
              Join The team!
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CareersFL

import { Swiper, SwiperSlide } from 'swiper/react'
// import "swiper/css";
// import "swiper/css/navigation";
import { Navigation } from 'swiper/modules'
import { useEffect, useState } from 'react'

const AlexSlider = ({ handleSlideChange }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden md:hidden md:w-[80%]">
      <Swiper
        loop={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        spaceBetween={20}
        grabCursor={true}
        modules={[Navigation]}
        className="w-full"
        onSlideChange={(swiper) => {
          const newIndex = swiper.realIndex
          setActiveIndex(newIndex)
          handleSlideChange(newIndex)
        }}
        navigation={{
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        }}
        speed={600}
      >
        <SwiperSlide
          className={`flex h-[400px] w-[80%] max-w-[300px] items-center justify-center ${
            activeIndex === 0 ? 'scale-100 opacity-100' : 'scale-50 opacity-50'
          }`}
        >
          <div className="flex h-full w-full flex-col items-center justify-center rounded-[50px] bg-white p-4 text-center shadow-md">
            <img
              src="https://windmar-website-cms.s3.amazonaws.com/LPs/AlexPares/LEADGEN_ALEX/iPhone+15+Pro/ArteLEADGENDise%E0%B8%84o+Alex+Pares_IMAGEN_Card_Solar-19.webp"
              alt="Slide 2"
              className="mb-[5vh] h-auto w-full object-cover"
            />
            <p className="text-[20px] font-[700] text-black md:text-[40px]">Solar</p>
            <p className="w-[80%] text-[12px] text-black md:text-[25px]">
              Con nuestro Sistema Solar fotovoltaico tendrás todo el poder del sol <strong>energizando tu hogar las 24 horas del día.</strong>
            </p>
            <p className="w-[70%] text-[12px] font-[700] text-black md:text-[25px]">Mejorarás tu calidad de vida y cuidarás tu bolsillo.</p>
            <a href="#LD_AlexPares" className="flex gap-4 bg-[#0038A8] px-[5%] py-[1%] text-[10px] font-[600] text-white no-underline md:text-[25px]">
              ÚNETE AL EQUIPO HOY{' '}
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={`flex h-[400px] w-[80%] max-w-[300px] items-center justify-center ${
            activeIndex === 1 ? 'scale-100 opacity-100' : 'scale-50 opacity-50'
          }`}
        >
          <div className="flex h-full w-full flex-col items-center justify-center rounded-[50px] bg-white p-4 text-center shadow-md">
            <img
              src="https://windmar-website-cms.s3.amazonaws.com/LPs/AlexPares/LEADGEN_ALEX/iPhone+15+Pro/ArteLEADGENDise%E0%B8%84o+Alex+Pares_IMAGEN_Card_Anker-20.webp"
              alt="Slide 3"
              className="mb-[5vh] h-auto w-full object-cover"
            />
            <p className="text-[20px] text-black md:text-[40px]">
              Baterías <br /> <strong>Anker</strong>
            </p>
            <p className="w-[90%] text-[12px] text-black md:text-[25px]">
              Siente la comodidad de la batería portátil Anker con Windmar Home,
              <strong> garantizando que tus dispositivos estén conectados en cualquier lugar donde te encuentres.</strong>
            </p>

            <a href="#LD_AlexPares" className="flex gap-4 bg-[#0038A8] px-[5%] py-[1%] text-[10px] font-[600] text-white no-underline md:text-[25px]">
              ÚNETE AL EQUIPO HOY{' '}
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={`flex h-[400px] w-[80%] max-w-[300px] items-center justify-center ${
            activeIndex === 2 ? 'scale-100 opacity-100' : 'scale-50 opacity-50'
          }`}
        >
          <div className="flex h-full w-full flex-col items-center justify-center rounded-[50px] bg-white p-4 text-center shadow-md">
            <img
              src="https://windmar-website-cms.s3.amazonaws.com/LPs/AlexPares/LEADGEN_ALEX/iPhone+15+Pro/ArteLEADGENDise%E0%B8%84o+Alex+Pares_IMAGEN_Card_Roofing-21.webp"
              alt="Slide 1"
              className="mb-[5vh] h-auto w-full object-cover"
            />
            <p className="text-[20px] font-[700] text-black md:text-[40px]">Roofing</p>
            <p className="w-[70%] text-[12px] text-black md:text-[25px]">
              El sellado de techo te <strong> ayudará a proteger la estructura de tu hogar impidiendo que el aire, </strong>
              el humo, el agua, el polvo y los gases dañen el interior y exterior de tu propiedad.
            </p>
            <a href="#LD_AlexPares" className="flex gap-4 bg-[#0038A8] px-[5%] py-[1%] text-[10px] font-[600] text-white no-underline md:text-[25px]">
              ÚNETE AL EQUIPO HOY{' '}
            </a>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Flechas de navegación */}
      <div className="absolute top-1/2 z-10 flex w-[70%] -translate-y-1/2 transform justify-between px-4">
        <div className="swiper-prev flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-2 border-[#0038A8] bg-white shadow-[4px_4px_6px_0px_rgba(71,85,105,0.5)]">
          <svg className="h-4 w-4 rotate-180 text-[#0038A8]" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.910156 11.4173L6.18376 6.14367L0.910156 0.870117" stroke="#0038A8" strokeMiterlimit="10" strokeLinecap="round" />
          </svg>
        </div>

        <div className="swiper-next flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-2 border-[#0038A8] bg-white shadow-[4px_4px_6px_0px_rgba(71,85,105,0.5)]">
          <svg className="h-4 w-4 text-[#0038A8]" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.910156 11.4173L6.18376 6.14367L0.910156 0.870117" stroke="#0038A8" strokeMiterlimit="10" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default AlexSlider

import { useRef } from 'react'
import { FaCheck } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import 'swiper/css'

export default function MySlider() {
  const swiperRef = useRef(null)
  const goToNext = () => {
    console.log('next')

    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext() // Navega siempre al primer slide sin importar el loop
    }
  }
  const goToPrev = () => {
    console.log('prev')

    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev() // Navega siempre al primer slide sin importar el loop
    }
  }

  return (
    <Swiper ref={swiperRef} spaceBetween={500} className="mySwiper h-[20%] overflow-visible">
      <div className="h-[80%] w-full">
        <SwiperSlide>
          <div className="relative flex flex-col items-center justify-center p-6 md:flex-row md:gap-12">
            <div className="relative w-full -translate-y-20 md:w-[47%]">
              <div className="flex items-center justify-center gap-2">
                <button className="bg-red cursor-pointer" onClick={goToPrev}>
                  <IoIosArrowBack className="text-4xl text-[#FF9E18]" />
                </button>
                <div className="relative">
                  <img
                    src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/General/MACBOOK+AIR.WEBP/IMAGEN_DONACIONES-07.webp"
                    alt=""
                    className="w-full rounded-3xl"
                  />
                  <div className="absolute inset-0 h-full w-full rounded-3xl bg-gradient-to-t from-slate-700 via-transparent to-transparent"></div>
                  <div className="absolute bottom-10 flex w-full items-center justify-center">
                    <h1 className="text-center text-white">
                      Programa de <strong>Donaciones</strong>
                    </h1>
                  </div>
                </div>
                <button className="bg-red cursor-pointer" onClick={goToNext}>
                  <IoIosArrowForward className="text-4xl text-[#FF9E18]" />
                </button>
              </div>
            </div>
            <div className="flex -translate-y-12 list-inside list-disc flex-col justify-center gap-4 p-6 text-base marker:text-[#0038A8] md:w-[45%] md:translate-x-0 md:gap-9 md:text-2xl">
              <li>
                Evaluamos cientos de casos <strong>para donar sistemas solares a pacientes que dependen de equipo médico</strong> para sobrevivir.
              </li>
              <li>
                Cada instalación sirve como templo <strong>para dar gracias, educar y ofrecer Energía de la Buena</strong> a los más necesitados.
              </li>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex flex-col items-center justify-center p-6 md:flex-row md:gap-12">
            <div className="relative w-full -translate-y-20 md:w-[47%]">
              <div className="flex items-center justify-center gap-2">
                <button className="bg-red cursor-pointer" onClick={goToPrev}>
                  <IoIosArrowBack className="text-4xl text-[#FF9E18]" />
                </button>
                <div className="relative">
                  <img
                    src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/General/MACBOOK+AIR.WEBP/208_Landing+Page+Fundaci%E0%B8%82n+Windmar+arte_IMAGEN_PROGRAMAS_EDUCATIVOS-08.webp"
                    alt=""
                    className="w-full rounded-3xl"
                  />
                  <div className="absolute inset-0 h-full w-full rounded-3xl bg-gradient-to-t from-slate-700 via-transparent to-transparent"></div>
                  <div className="absolute bottom-10 flex w-full items-center justify-center">
                    <h1 className="text-center text-white">
                      Programas <br />
                      <strong>educativos</strong>
                    </h1>
                  </div>
                </div>
                <button className="bg-red cursor-pointer" onClick={goToNext}>
                  <IoIosArrowForward className="text-4xl text-[#FF9E18]" />
                </button>
              </div>
            </div>
            <div className="flex -translate-y-12 list-inside list-disc flex-col justify-center gap-4 p-2 text-xl marker:text-[#0038A8] md:w-[45%] md:translate-x-0">
              <li className="mx-auto w-[80%] md:w-full">Programa interactivo Rayitos de Luz</li>
              <div className="grid grid-cols-2 grid-rows-2 gap-2 rounded-lg bg-[#E5EDFF] px-2 py-3 text-[#0038A8] md:px-4">
                <div className="flex items-center gap-2 text-sm md:text-xl">
                  <FaCheck />
                  <span className="font-bold">Nivel Elemental</span>
                </div>
                <div className="flex items-center gap-2 text-sm md:text-xl">
                  <FaCheck />
                  <span className="font-bold">Nivel Superior</span>
                </div>
                <div className="flex items-center gap-2 text-sm md:text-xl">
                  <FaCheck />
                  <span className="font-bold">Nivel Elemental</span>
                </div>
                <div className="flex items-center gap-2 text-sm md:text-xl">
                  <FaCheck />
                  <span className="font-bold">Educación Especial</span>
                </div>
              </div>
              <li className="mx-auto w-[80%] md:w-full">Programa Educativo en colaboración con GFR</li>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex flex-col items-center justify-center p-6 md:flex-row md:gap-12">
            <div className="relative w-full -translate-y-20 md:w-[47%]">
              <div className="flex items-center justify-center gap-2">
                <button className="bg-red cursor-pointer" onClick={goToPrev}>
                  <IoIosArrowBack className="text-4xl text-[#FF9E18]" />
                </button>
                <div className="relative">
                  <img
                    src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/General/MACBOOK+AIR.WEBP/IMAGEN_ALIANZAS-09.webp"
                    alt=""
                    className="w-full rounded-3xl"
                  />
                  <div className="absolute inset-0 h-full w-full rounded-3xl bg-gradient-to-t from-slate-700 via-transparent to-transparent"></div>
                  <div className="absolute bottom-10 flex w-full items-center justify-center">
                    <h1 className="text-center text-white">
                      <strong>Alianzas</strong>
                    </h1>
                  </div>
                </div>
                <button className="bg-red cursor-pointer" onClick={goToNext}>
                  <IoIosArrowForward className="text-4xl text-[#FF9E18]" />
                </button>
              </div>
            </div>
            <div className="flex -translate-y-12 list-inside list-disc flex-col justify-center gap-2 p-6 text-2xl marker:text-[#0038A8] md:w-[45%] md:translate-x-0">
              <div className="flex items-center gap-4 text-sm text-[#0038A8] md:text-base">
                <FaCheck />
                <span className="font-medium">GFR Media</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-[#0038A8] md:text-base">
                <FaCheck />
                <span className="font-medium">MCS</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-[#0038A8] md:text-base">
                <FaCheck />
                <span className="font-medium">Empowered by Light</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-[#0038A8] md:text-base">
                <FaCheck />
                <span className="font-medium">MDA</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-[#0038A8] md:text-base">
                <FaCheck />
                <span className="font-medium">CAP</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-[#0038A8] md:text-base">
                <FaCheck />
                <span className="font-medium">Fly High Bella</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-[#0038A8] md:text-base">
                <FaCheck />
                <span className="font-medium">Mano Amiga</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-[#0038A8] md:text-base">
                <FaCheck />
                <span className="font-medium">Fundación el Gran Yo Soy (Fegrysoy)</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex flex-col items-center justify-center p-6 md:flex-row md:gap-12">
            <div className="relative w-full -translate-y-20 md:w-[47%]">
              <div className="flex items-center justify-center gap-2">
                <button className="bg-red cursor-pointer" onClick={goToPrev}>
                  <IoIosArrowBack className="text-4xl text-[#FF9E18]" />
                </button>
                <div className="relative">
                  <img
                    src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/General/MACBOOK+AIR.WEBP/IMAGEN_INICIATIVA_VERDE-10.webp"
                    alt=""
                    className="w-full rounded-3xl"
                  />
                  <div className="absolute inset-0 h-full w-full rounded-3xl bg-gradient-to-t from-slate-700 via-transparent to-transparent"></div>
                  <div className="absolute bottom-10 flex w-full items-center justify-center">
                    <h1 className="text-center text-white">
                      Iniciativa <br />
                      <strong>Verde</strong>
                    </h1>
                  </div>
                </div>
                <button className="bg-red cursor-pointer" onClick={goToNext}>
                  <IoIosArrowForward className="text-4xl text-[#FF9E18]" />
                </button>
              </div>
            </div>
            <div className="flex -translate-y-12 list-inside list-disc flex-col justify-center gap-9 p-6 text-xl marker:text-[#0038A8] md:w-[45%] md:translate-x-0 md:text-2xl">
              <li>Se evalúan casos para ayudar de diferentes maneras:</li>
              <div className="ml-4 flex flex-col gap-4">
                <div className="flex items-center gap-4 text-base text-[#0038A8] md:text-xl">
                  <FaCheck />
                  <span className="font-medium text-slate-700">Limpiar casas que sufrieron incendios.</span>
                </div>
                <div className="flex items-center gap-4 text-base text-[#0038A8] md:text-xl">
                  <FaCheck />
                  <span className="font-medium text-slate-700">Limpiar playas.</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  )
}

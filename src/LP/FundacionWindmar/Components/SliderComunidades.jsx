import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/swiper-bundle.css' // Asegúrate de importar los estilos de Swiper
import { MdArrowForwardIos } from 'react-icons/md'
import { Link } from 'react-router-dom'

function SliderComunidades() {
  return (
    <div className="flex w-full items-center justify-center">
      <Swiper
        className="mb-12 h-full w-full"
        modules={[Pagination]}
        slidesPerView={1.3} // Permite ver parcialmente los slides vecinos
        spaceBetween={20}
        centeredSlides={true} // Centra el slide activo
        pagination={{ clickable: true }} // Activa la paginación con puntos
        loop={true} // Activa el loop para que los slides se repitan infinitamente
        initialSlide={2} // Inicia en la segunda imagen
      >
        <SwiperSlide>
          <div className="group relative md:w-[90%]">
            <img
              src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/General/IPHONE15PRO.WEBP/IMAGEN_ENERGIA_QUE_SALVA-33.webp"
              alt=""
              className="w-full object-cover transition-opacity duration-500 ease-in-out md:hidden"
            />
            <img
              src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/General/MACBOOK+AIR.WEBP/IMAGEN_ENERGIA_QUE_SALVA-04.webp"
              alt="Energía que salva"
              className="hidden w-full object-cover transition-opacity duration-500 ease-in-out md:block"
            />
            <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black to-transparent md:via-transparent"></div>
            <div className="absolute bottom-10 right-0 flex w-full flex-col-reverse items-center justify-center text-white md:bottom-4 md:flex-row md:justify-between md:gap-5 md:px-10 md:py-9">
              <div className="w-[90%] border-t-2 pt-3 text-xs transition-opacity duration-500 ease-in-out md:w-[60%] md:text-base md:opacity-0 group-hover:md:opacity-100">
                <p className="text-balance text-center md:hidden">
                  <strong>Contribuimos</strong> a la mejora de la calidad de vida de pacientes que requieran dispositivos médicos que deban estar
                  energizados continuamente, instalando sistemas solares completos en sus hogares.
                </p>
                <p className="hidden text-pretty text-left md:block">
                  <strong>Contribuimos</strong> a la mejora de la calidad de vida de pacientes que requieran dispositivos médicos que deban estar
                  energizados continuamente, instalando sistemas solares completos en sus hogares.
                </p>
                <Link
                  to="energia-que-salva-wh"
                  className="m-0 mx-auto flex w-48 items-center justify-between gap-3 rounded-full bg-[#FF9E18] px-6 py-1 text-slate-50 no-underline md:hidden"
                >
                  <span className="m-0">Conoce más aquí</span>
                  <span className="translate-y-[-1px] text-xl">
                    <MdArrowForwardIos />
                  </span>
                </Link>
                <Link
                  to="energia-que-salva-wh"
                  className="m-0 hidden w-56 items-center justify-between gap-3 rounded-full bg-[#FF9E18] px-6 py-1 text-slate-50 no-underline md:flex"
                >
                  <span className="m-0">Conoce más aquí</span>
                  <span className="translate-y-[-1px] text-xl">
                    <MdArrowForwardIos />
                  </span>
                </Link>
              </div>
              <h1 className="text-center font-bold md:text-6xl">
                Energía <br />
                <span className="text-[#FF9E18]">que salva</span>
              </h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="group relative md:w-[90%]">
            <img
              src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/General/IPHONE15PRO.WEBP/IMAGEN_RAYITOS_dE_LUZ.webp"
              alt=""
              className="h-full w-full object-cover transition-opacity duration-500 ease-in-out md:hidden"
            />
            <img
              src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/General/MACBOOK+AIR.WEBP/IMAGEN_+RAYITOS_DE_LUZ.webp"
              alt="Rayitos de luz"
              className="hidden w-full object-cover transition-opacity duration-500 ease-in-out md:block"
            />
            <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black to-transparent md:via-transparent"></div>
            <div className="absolute bottom-10 right-0 flex w-full flex-col-reverse items-center justify-center text-white md:bottom-4 md:flex-row md:justify-between md:gap-5 md:px-10 md:py-9">
              <div className="w-[90%] border-t-2 pt-3 text-xs transition-opacity duration-500 ease-in-out md:w-[65%] md:text-base md:opacity-0 group-hover:md:opacity-100">
                <p className="text-balance text-center md:hidden">
                  <strong>Impactamos</strong> la vida de nuestros niños, llevando luz a sus aulas de clase y enseñándoles sobre el valor de la energía
                  solar.
                </p>
                <p className="hidden text-pretty text-left md:block">
                  <strong>Impactamos</strong> la vida de nuestros niños, llevando luz a sus aulas de clase y enseñándoles sobre el valor de la energía
                  solar.
                </p>
                <Link
                  to="educacion-de-la-buena"
                  className="m-0 mx-auto flex w-48 items-center justify-between gap-3 rounded-full bg-[#FF9E18] px-6 py-1 text-slate-50 no-underline md:hidden"
                >
                  <span className="m-0">Conoce más aquí</span>
                  <span className="translate-y-[-1px] text-xl">
                    <MdArrowForwardIos />
                  </span>
                </Link>
                <Link
                  to="educacion-de-la-buena"
                  className="m-0 hidden w-56 items-center justify-between gap-3 rounded-full bg-[#FF9E18] px-6 py-1 text-slate-50 no-underline md:flex"
                >
                  <span className="m-0">Conoce más aquí</span>
                  <span className="translate-y-[-1px] text-xl">
                    <MdArrowForwardIos />
                  </span>
                </Link>
              </div>
              <h1 className="text-center font-bold md:text-6xl">
                Educación <br />
                <span className="text-[#FF9E18] md:text-5xl">de la buena</span>
              </h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="group relative md:w-[90%]">
            <img
              src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/General/IPHONE15PRO.WEBP/IMAGEN_ADULTO_MAYOR.webp"
              alt=""
              className="h-full w-full object-cover transition-opacity duration-500 ease-in-out md:hidden"
            />
            <img
              src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/General/MACBOOK+AIR.WEBP/IMAGEN_ADULTO_AYOR.webp"
              alt="Adulto mayor"
              className="hidden w-full object-cover transition-opacity duration-500 ease-in-out md:block"
            />
            <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black to-transparent md:via-transparent"></div>
            <div className="absolute bottom-10 right-0 flex w-full flex-col-reverse items-center justify-center text-white md:bottom-4 md:flex-row md:justify-between md:gap-5 md:px-10 md:py-9">
              <div className="w-[90%] border-t-2 pt-3 text-xs transition-opacity duration-500 ease-in-out md:w-[65%] md:text-base md:opacity-0 group-hover:md:opacity-100">
                <p className="text-balance text-center md:hidden">
                  <strong>Cuidamos</strong> al adulto mayor, guiándolo en su camino hacia la energía solar, evitando que caiga en fraudes que afecten
                  su bolsillo y su tranquilidad.
                </p>
                <p className="hidden text-pretty text-left md:block">
                  <strong>Cuidamos</strong> al adulto mayor, guiándolo en su camino hacia la energía solar, evitando que caiga en fraudes que afecten
                  su bolsillo y su tranquilidad.
                </p>
                <Link
                  to="adulto-mayor-wh"
                  className="m-0 mx-auto flex w-48 items-center justify-between gap-3 rounded-full bg-[#FF9E18] px-6 py-1 text-slate-50 no-underline md:hidden"
                >
                  <span className="m-0">Conoce más aquí</span>
                  <span className="translate-y-[-1px] text-xl">
                    <MdArrowForwardIos />
                  </span>
                </Link>
                <Link
                  to="adulto-mayor-wh"
                  className="m-0 hidden w-56 items-center justify-between gap-3 rounded-full bg-[#FF9E18] px-6 py-1 text-slate-50 no-underline md:flex"
                >
                  <span className="m-0">Conoce más aquí</span>
                  <span className="translate-y-[-1px] text-xl">
                    <MdArrowForwardIos />
                  </span>
                </Link>
              </div>
              <h1 className="text-center font-bold md:text-5xl">
                Programa educativo <br />
                <span className="text-[#FF9E18]">para mayores</span>
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SliderComunidades

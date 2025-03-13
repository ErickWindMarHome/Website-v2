import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

function SliderTips() {
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
    <div className="mx-auto flex w-[87%] items-center justify-center">
      <Swiper ref={swiperRef} spaceBetween={20} centeredSlides={true} className="mb-12 h-full w-full">
        <SwiperSlide>
          <div className="relative">
            <div className="flex w-full flex-col-reverse items-center justify-center overflow-hidden rounded-[3rem] border">
              <h1 className="m-0 translate-y-10 text-[160px] font-bold text-[#FF9E18]">01</h1>
              <div className="flex h-full translate-y-8 flex-col justify-center px-4 pt-4">
                <div className="mb-4 flex -translate-y-6 items-end">
                  <img
                    src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/AdultoMayor/MACBOOK/208_+ARTELandingPage+Adulto+Mayor_ICONO_01-07.webp"
                    alt=""
                    className="ml-auto w-12"
                  />
                </div>
                <p className="m-0 mx-auto w-[90%] text-center text-base">
                  Asegúrate de leer los términos y condiciones de tu contrato solar, <strong>especialmente la letra pequeña.</strong>
                </p>
              </div>
              <button className="bg-red absolute left-2 cursor-pointer" onClick={goToPrev}>
                <IoIosArrowBack className="text-4xl text-[#0038A8]" />
              </button>
              <button className="bg-red absolute right-2 cursor-pointer" onClick={goToNext}>
                <IoIosArrowForward className="text-4xl text-[#0038A8]" />
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="flex w-full flex-col-reverse items-center justify-center overflow-hidden rounded-[3rem] border">
              <h1 className="m-0 translate-y-10 text-[160px] font-bold text-[#FF9E18]">02</h1>
              <div className="flex h-full translate-y-8 flex-col justify-center px-4 pt-4">
                <div className="mb-4 flex -translate-y-6 items-end">
                  <img
                    src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/AdultoMayor/MACBOOK/208_+ARTELandingPage+Adulto+Mayor_ICONO_02-08.webp"
                    alt=""
                    className="ml-auto w-12"
                  />
                </div>
                <p className="m-0 mx-auto w-[90%] text-center text-base">
                  Pídele a un familiar o persona de confianza que te acompañen durante la visita del consultor,{' '}
                  <strong>cuatro ojos ven más que dos.</strong>
                </p>
              </div>
              <button className="bg-red absolute left-2 cursor-pointer" onClick={goToPrev}>
                <IoIosArrowBack className="text-4xl text-[#0038A8]" />
              </button>
              <button className="bg-red absolute right-2 cursor-pointer" onClick={goToNext}>
                <IoIosArrowForward className="text-4xl text-[#0038A8]" />
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="flex w-full flex-col-reverse items-center justify-center overflow-hidden rounded-[3rem] border">
              <h1 className="m-0 translate-y-10 text-[160px] font-bold text-[#FF9E18]">03</h1>
              <div className="flex h-full translate-y-8 flex-col justify-center px-4 pt-4">
                <div className="mb-4 flex -translate-y-6 items-end">
                  <img
                    src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/AdultoMayor/MACBOOK/208_+ARTELandingPage+Adulto+Mayor_ICONO_03-09.webp"
                    alt=""
                    className="ml-auto w-12"
                  />
                </div>
                <p className="m-0 mx-auto w-[90%] text-center text-base">
                  No se hace mantenimiento de sistema solar sin costo, además <strong>antes agendamos esta clase de visitas.</strong>
                </p>
              </div>
              <button className="bg-red absolute left-2 cursor-pointer" onClick={goToPrev}>
                <IoIosArrowBack className="text-4xl text-[#0038A8]" />
              </button>
              <button className="bg-red absolute right-2 cursor-pointer" onClick={goToNext}>
                <IoIosArrowForward className="text-4xl text-[#0038A8]" />
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="flex w-full flex-col-reverse items-center justify-center overflow-hidden rounded-[3rem] border">
              <h1 className="m-0 translate-y-10 text-[160px] font-bold text-[#FF9E18]">04</h1>
              <div className="flex h-full translate-y-8 flex-col justify-center px-4 pt-4">
                <div className="mb-4 flex -translate-y-6 items-end">
                  <img
                    src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/AdultoMayor/MACBOOK/208_+ARTELandingPage+Adulto+Mayor_ICONO_04-10.webp"
                    alt=""
                    className="ml-auto w-12"
                  />
                </div>
                <p className="m-0 mx-auto w-[90%] text-center text-base">
                  Todos los beneficios hablados con el consultor (beneficios, precios, tiempos) deben estar en el contrato,
                  <strong> lo que no está escrito no tiene valides.</strong>
                </p>
              </div>
              <button className="bg-red absolute left-2 cursor-pointer" onClick={goToPrev}>
                <IoIosArrowBack className="text-4xl text-[#0038A8]" />
              </button>
              <button className="bg-red absolute right-2 cursor-pointer" onClick={goToNext}>
                <IoIosArrowForward className="text-4xl text-[#0038A8]" />
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative bg-[url("https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/AdultoMayor/IPHONE/208_+ARTELandingPage+Adulto+Mayor_IMAGEN_BACKGROUND_05-22.webp")] bg-right-top bg-no-repeat'>
            <div className="flex w-full flex-col-reverse items-center justify-center overflow-hidden rounded-[3rem] border">
              <h1 className="m-0 translate-y-14 text-[200px] font-bold text-[#0038A8]">05</h1>
              <div className="flex h-full translate-y-16 flex-col justify-center px-4 pt-4 text-[#0038A8]">
                <p className="m-0 text-pretty text-center text-xs">Únete a la familia</p>
                <span className="my-2.5 text-center text-3xl font-bold">WindMar Home</span>
                <p className="mx-auto w-[85%] text-center text-xs">
                  para tu seguridad y tranquilidad,{' '}
                  <span className="font-semibold text-[#FF9E18]">siempre estaremos para darte una asesoría profesional.</span>
                </p>
              </div>
              <button className="bg-red absolute left-2 cursor-pointer" onClick={goToPrev}>
                <IoIosArrowBack className="text-4xl text-[#0038A8]" />
              </button>
              <button className="bg-red absolute right-2 cursor-pointer" onClick={goToNext}>
                <IoIosArrowForward className="text-4xl text-[#0038A8]" />
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SliderTips

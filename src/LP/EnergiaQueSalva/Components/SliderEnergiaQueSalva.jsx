import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

function SliderEnergiaQueSalva() {
  const swiperRef = useRef(null)
  const goToNext = () => {
    console.log('next')

    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext()
    }
  }
  const goToPrev = () => {
    console.log('prev')

    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev()
    }
  }
  return (
    <div className="relative mx-auto flex items-center justify-center">
      <Swiper ref={swiperRef} spaceBetween={60} className="mb-12 h-full" slidesPerView={1.3} centeredSlides={true} loop={true} initialSlide={1}>
        <SwiperSlide>
          <div className="group relative mx-auto flex items-center justify-center">
            <img
              src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/EneergiaQueSalva/IPHONE/208_+ARTELandingPage+energia+que+salva_IMAGEN_1_GALERIA.webp"
              alt=""
              className="w-full object-cover md:hidden"
            />
            <img
              src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/EneergiaQueSalva/MACBOOK/208_+ARTELandingPage+energia+que+salva_IMAGEN_GALERIA.webp"
              alt="Energía que salva"
              className="hidden w-full object-cover md:block"
            />
            <div>
              <img
                src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/EneergiaQueSalva/MACBOOK/208_+ARTELandingPage+energia+que+salva_BOTO%CC%81N_IZQUIERDA.webp"
                alt=""
                className="absolute left-2 w-12"
                onClick={goToPrev}
              />
              <img
                src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/EneergiaQueSalva/MACBOOK/208_+ARTELandingPage+energia+que+salva_BOTO%CC%81N_DERECHA.webp"
                alt=""
                className="absolute right-2 w-12"
                onClick={goToNext}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group relative mx-auto flex items-center justify-center">
            <img
              src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/EneergiaQueSalva/IPHONE/208_+ARTELandingPage+energia+que+salva_IMAGEN_2_GALERIA-14.webp"
              alt=""
              className="w-full object-cover md:hidden"
            />
            <img
              src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/EneergiaQueSalva/MACBOOK/208_+ARTELandingPage+energia+que+salva_IMAGEN_2_GALERIA-05.webp"
              alt="Energía que salva"
              className="hidden w-full object-cover md:block"
            />
            <div>
              <img
                src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/EneergiaQueSalva/MACBOOK/208_+ARTELandingPage+energia+que+salva_BOTO%CC%81N_IZQUIERDA.webp"
                alt=""
                className="absolute left-2 w-12"
                onClick={goToPrev}
              />
              <img
                src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/EneergiaQueSalva/MACBOOK/208_+ARTELandingPage+energia+que+salva_BOTO%CC%81N_DERECHA.webp"
                alt=""
                className="absolute right-2 w-12"
                onClick={goToNext}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group relative mx-auto flex items-center justify-center">
            <img
              src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/EneergiaQueSalva/IPHONE/208_+ARTELandingPage+energia+que+salva_IMAGEN_3_GALERIA-16.webp"
              alt=""
              className="w-full object-cover md:hidden"
            />
            <img
              src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/EneergiaQueSalva/MACBOOK/208_+ARTELandingPage+energia+que+salva_IMAGEN_3_GALERIA-06.webp"
              alt="Energía que salva"
              className="hidden w-full object-cover md:block"
            />
            <div>
              <img
                src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/EneergiaQueSalva/MACBOOK/208_+ARTELandingPage+energia+que+salva_BOTO%CC%81N_IZQUIERDA.webp"
                alt=""
                className="absolute left-2 w-12"
                onClick={goToPrev}
              />
              <img
                src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/EneergiaQueSalva/MACBOOK/208_+ARTELandingPage+energia+que+salva_BOTO%CC%81N_DERECHA.webp"
                alt=""
                className="absolute right-2 w-12"
                onClick={goToNext}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group relative mx-auto flex items-center justify-center">
            <img
              src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/EneergiaQueSalva/IPHONE/208_+ARTELandingPage+energia+que+salva_IMAGEN_4_GALERIA.webp"
              alt=""
              className="w-full object-cover md:hidden"
            />
            <img
              src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/EneergiaQueSalva/MACBOOK/208_+ARTELandingPage+energia+que+salva_IMAGEN_4_GALERIA-07.webp"
              alt="Energía que salva"
              className="hidden w-full object-cover md:block"
            />
            <div>
              <img
                src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/EneergiaQueSalva/MACBOOK/208_+ARTELandingPage+energia+que+salva_BOTO%CC%81N_IZQUIERDA.webp"
                alt=""
                className="absolute left-2 w-12"
                onClick={goToPrev}
              />
              <img
                src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/EneergiaQueSalva/MACBOOK/208_+ARTELandingPage+energia+que+salva_BOTO%CC%81N_DERECHA.webp"
                alt=""
                className="absolute right-2 w-12"
                onClick={goToNext}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group relative mx-auto flex items-center justify-center">
            <img
              src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/EneergiaQueSalva/IPHONE/208_+ARTELandingPage+energia+que+salva_IMAGEN_5_GALERIA.webp"
              alt=""
              className="w-full object-cover md:hidden"
            />
            <img
              src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/EneergiaQueSalva/MACBOOK/208_+ARTELandingPage+energia+que+salva_IMAGEN_5_GALERIA-08.webp"
              alt="Energía que salva"
              className="hidden w-full object-cover md:block"
            />
            <div>
              <img
                src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/EneergiaQueSalva/MACBOOK/208_+ARTELandingPage+energia+que+salva_BOTO%CC%81N_IZQUIERDA.webp"
                alt=""
                className="absolute left-2 w-12"
                onClick={goToPrev}
              />
              <img
                src="https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/EneergiaQueSalva/MACBOOK/208_+ARTELandingPage+energia+que+salva_BOTO%CC%81N_DERECHA.webp"
                alt=""
                className="absolute right-2 w-12"
                onClick={goToNext}
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SliderEnergiaQueSalva

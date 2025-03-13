import React from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css' // Asegúrate de importar el CSS de Swiper

function SliderTags() {
  return (
    <div className="my-8 flex w-full justify-center">
      <Swiper
        loop={true}
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={30}
        modules={[Autoplay]}
        breakpoints={{
          760: {
            slidesPerView: 3,
            centeredSlides: false,
            pagination: false,
            navigation: false,
          },
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="flex justify-center border-r-2 border-[#0038A8] last:border-r-0">
          <h1 className="w-full text-center font-bold text-[#0038A8]">Te cuida</h1>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center border-r-2 border-[#0038A8] last:border-r-0">
          <h1 className="w-full text-center font-bold text-[#0038A8]">Te protege</h1>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center border-r-2 border-[#0038A8] last:border-r-0">
          <h1 className="w-full text-center font-bold text-[#0038A8]">Es transparente</h1>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center border-r-2 border-[#0038A8] last:border-r-0">
          <h1 className="w-full text-center font-bold text-[#0038A8]">No engaña</h1>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SliderTags

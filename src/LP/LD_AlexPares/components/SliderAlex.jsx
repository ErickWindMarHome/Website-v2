import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FaArrowUp, FaArrowDown, FaArrowRight, FaArrowLeft } from 'react-icons/fa'

import 'swiper/swiper-bundle.css'

const SliderAlex = ({ slides, Index }) => {
  const swiperRef = useRef(null)

  const goToNext = () => {
    if (swiperRef.current) {
      const { slides, activeIndex } = swiperRef.current.swiper
      const nextIndex = (activeIndex + 1) % slides.length
      swiperRef.current.swiper.slideTo(nextIndex)
    }
  }

  const goToPrev = () => {
    if (swiperRef.current) {
      const { slides, activeIndex } = swiperRef.current.swiper
      const prevIndex = (activeIndex - 1 + slides.length) % slides.length
      swiperRef.current.swiper.slideTo(prevIndex)
    }
  }

  return (
    <Swiper
      ref={swiperRef}
      centeredSlides={true}
      className="h-fit w-full lg:h-full lg:max-w-none"
      loop={true}
      initialSlide={2}
      onSlideChange={(swiper) => {
        const newIndex = swiper.realIndex
        Index(newIndex)
      }}
      breakpoints={{
        640: {
          spaceBetween: 20,
          slidesPerView: 1,
        },
        768: {
          spaceBetween: 20,
          slidesPerView: 1.9,
        },
        1024: {
          slidesPerView: 2.5,
          spaceBetween: 40,
          direction: 'vertical',
        },
      }}
      style={{ position: 'static' }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} style={{ display: 'flex', justifyItems: 'center', alignItems: 'center' }}>
          <div
            className={`mx-auto flex h-[452px] max-w-[310px] flex-col items-center justify-center gap-4 rounded-[50px] border bg-white p-4 py-6 text-center lg:h-fit lg:max-w-none lg:flex-row lg:rounded-r-none lg:py-3 lg:pl-3 lg:pr-6 ${swiperRef.current?.swiper.realIndex === index ? 'opacity-100' : 'opacity-50'}`}
          >
            <img src={slide.img} alt={slide.title} className="rounded-[39px]" />
            <div className="flex flex-col lg:text-left">
              <h1 className="text-3xl font-bold">{slide.title}</h1>
              <p className="lg:mr-12">{slide.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="absolute bottom-0 right-0 top-0 z-20 flex w-full flex-row items-center justify-between gap-2 lg:right-5 lg:w-auto lg:flex-col lg:justify-center">
        <div onClick={() => goToPrev()} className="cursor-pointer rounded-full border-2 border-[#0038A8] bg-white p-2">
          <FaArrowUp className="hidden text-[#0038A8] lg:block" />
          <FaArrowLeft className="text-[#0038A8] lg:hidden" />
        </div>
        <div onClick={() => goToNext()} className="cursor-pointer rounded-full border-2 border-[#0038A8] bg-white p-2">
          <FaArrowDown className="hidden text-[#0038A8] lg:block" />
          <FaArrowRight className="text-[#0038A8] lg:hidden" />
        </div>
      </div>
    </Swiper>
  )
}

export default SliderAlex

import React, { useEffect, useState } from 'react'

const Carousel = () => {
  const slides = [
    {
      imgSrc: 'https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Showroom/Productos-07.webp',
      text: 'Conocer todo sobre nuestro proceso de <strong>sellado de techos</strong> (roofing) con Gardner.',
    },
    {
      imgSrc: 'https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Showroom/Productos-06.webp',
      text: 'Diseñar tu <strong>sistema</strong> de <strong>placas</strong> a la medida de las necesidades de tu <strong>hogar.</strong>',
    },
    {
      imgSrc: 'https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Showroom/Productos-05.webp',
      text: 'Recibir información sobre las mejores <strong>baterías portátiles.</strong>',
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [transitioning, setTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true)
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
      setTimeout(() => {
        setTransitioning(false)
      }, 500)
    }, 3500)

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="my-10 flex w-full flex-col items-center justify-center px-10 md:hidden">
      <div className="flex w-full flex-col items-center justify-center rounded-[30px]">
        <div
          className={`flex w-[90%] transition-transform duration-500 ease-in-out`}
          style={{
            transform: `translateX(-${(currentSlide + 0) * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`flex w-full flex-shrink-0 flex-col items-center justify-center rounded-[30px] border-8 border-white bg-[#E4E4E4]`}
            >
              <img className="w-full" src={slide.imgSrc} alt="" />
              <p className="w-[90%] px-[10%] py-[30px] text-center text-[#70706F]" dangerouslySetInnerHTML={{ __html: slide.text }}></p>
            </div>
          ))}
          <div className={`flex w-full flex-shrink-0 flex-col items-center justify-center rounded-[30px] border-8 border-white bg-[#E4E4E4]`}>
            <img className="w-full" src={slides[0].imgSrc} alt="" />
            <p className="w-[90%] px-[10%] py-[30px] text-center text-[#70706F]" dangerouslySetInnerHTML={{ __html: slides[0].text }}></p>
          </div>
        </div>
      </div>

      <div className="mt-4 flex space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full ${index === currentSlide ? 'bg-[#FF9E18] shadow-md shadow-gray-400' : 'bg-[#D9D9D9] shadow-inner'}`}
          ></span>
        ))}
      </div>
    </section>
  )
}

export default Carousel

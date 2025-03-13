import { useState, useRef, useEffect } from 'react'

import { useSelector } from 'react-redux'

const ImageCarousel = ({ images, title }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [intervalTime, setIntervalTime] = useState(5000)
  const carouselRef = useRef(null)

  const locacion = useSelector((state) => state.states.locacion)

  const handlePrevClick = () => {
    setIntervalTime(intervalTime + 1)
    setCurrentImage((currentImage - 1 + images.length) % images.length)
  }

  const handleNextClick = () => {
    setIntervalTime(intervalTime + 1)
    setCurrentImage((currentImage + 1) % images.length)
  }

  const handleScroll = () => {
    const carousel = carouselRef.current
    const scrollLeft = carousel.scrollLeft
    const clientWidth = carousel.clientWidth
    const scrollWidth = carousel.scrollWidth
    const maxScrollLeft = scrollWidth - clientWidth
    setIntervalTime(intervalTime + 1)
    if (scrollLeft === maxScrollLeft) {
      setCurrentImage(0)
    } else {
      const imageWidth = scrollWidth / images.length
      const imageIndex = Math.floor((scrollLeft + imageWidth / 2) / imageWidth)
      setCurrentImage(imageIndex)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick()
    }, intervalTime)
    return () => clearInterval(interval)
  }, [intervalTime])

  return (
    <div className="mx-auto mt-[5vw] box-border flex w-[80%] flex-col items-center justify-center p-0" onScroll={handleScroll} ref={carouselRef}>
      {locacion === 'fl' ? (
        <h1 className="m-0 box-border w-[94%] p-0 text-left text-[3em] text-[#234992]">OUR PROJECTS</h1>
      ) : (
        <h1 className="m-0 box-border w-[94%] p-0 text-left text-[#234992] md:text-[3em]">NUESTROS PROYECTOS</h1>
      )}
      <h2 className="m-0 w-[94%] border-t border-[#234992] p-0 text-left text-[20px] font-medium text-[#234992] md:text-[1.5em]">{title}</h2>
      <div className="flex w-full justify-center">
        <article className="relative box-border flex w-full flex-col items-center overflow-hidden">
          {images.map((image, index) => (
            <img
              className="-z-10 box-border flex w-full justify-center p-[1vw]"
              key={index}
              src={image}
              alt=""
              style={{ display: index === currentImage ? 'block' : 'none' }}
            />
          ))}
          <div className="mb-[5vh] flex w-[90%] items-center justify-center">
            <button
              className="prev h-[40px] w-[40px] cursor-pointer rounded-[5px] border-none bg-[#ed8936] bg-none text-[2em] text-white outline-none transition-colors duration-500 hover:bg-opacity-80"
              onClick={handlePrevClick}
            >
              &lt;
            </button>

            <div className="flex w-full justify-center">
              {images.map((image, index) => (
                <span
                  key={index}
                  className={`${index === currentImage ? 'dotActive' : 'dotNoActive'} mx-[0.3em] cursor-pointer text-[1em]`}
                  onClick={() => setCurrentImage(index)}
                >
                  ●
                </span>
              ))}
            </div>
            <button
              className="next h-[40px] w-[40px] cursor-pointer rounded-[5px] border-none bg-[#ed8936] bg-none text-[2em] text-white outline-none transition-colors duration-500 hover:bg-opacity-80"
              onClick={handleNextClick}
            >
              &gt;
            </button>
          </div>
        </article>
        <div className="hidden h-[80vh] max-h-[700px] w-[30%] flex-col md:flex md:overflow-x-hidden md:overflow-y-scroll">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className={`${index === currentImage ? 'active' : ''} my-[0.5vw] w-full cursor-pointer`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageCarousel

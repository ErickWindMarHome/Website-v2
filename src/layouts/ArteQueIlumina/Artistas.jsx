import { useRef, useState } from 'react'

import Footer from '../General/Footer/Footer'
import Header from '../General/Header/Header'
import { GrPrevious, GrNext } from 'react-icons/gr'
import { ArteQueIluminaData } from '../../utils/data'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import { useNavigate, useParams } from 'react-router-dom'

export default function Artistas() {
  const slug = useParams().slug
  const index = ArteQueIluminaData.arte2024.findIndex((item) => item.slug === slug)
  const swiperRef = useRef(null)
  const ArtistData = ArteQueIluminaData.arte2024[index]

  const redirect = () => {
    window.location.href = 'https://youtube.com/playlist?list=PLe_GRwQSmVsBo4mYZBKQJ3EP2kDTocXj1&si=TtOZ-vMalOldGjmY'
  }

  const goToNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext()
    }
  }
  const goToPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev()
    }
  }

  if (index < 0) {
    return null
  }

  return (
    <>
      <Header />
      <div>
        <div
          className="relative h-[500px] w-full bg-cover bg-center lg:h-[500px] 2xl:h-[700px]"
          style={{ backgroundImage: `url(${ArtistData.banner})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/40 to-transparent"></div>
          <div className="absolute flex h-full flex-col justify-end p-7">
            <h1 className="text-3xl font-bold text-white lg:text-5xl 2xl:text-7xl uppercase">{ArtistData.title}</h1>
            <p className="text-xl font-bold text-[#F5991F] lg:text-2xl 2xl:text-3xl uppercase">PUEBLO: {ArtistData.town}</p>
          </div>
        </div>
        <section>
          <div className="mt-10 flex flex-col items-center justify-center gap-y-10 lg:mx-auto lg:my-10 lg:grid lg:w-[90%] lg:grid-cols-2 lg:place-items-center">
            <div className="flex w-[90%] flex-col items-start justify-center gap-y-5">
              <h1 className="flex flex-col text-4xl font-bold text-[#1E429B] lg:text-5xl 2xl:text-6xl">
                {ArtistData.content.artist} <span className="text-[#F5991F]">{ArtistData.content.lastName}</span>
              </h1>
              <p>{ArtistData.content.bioArtist}</p>             
              <p>{ArtistData.content.description}</p>
            </div>
            <video className="mx-auto w-[90%]" controls src={ArtistData.content.video} />
          </div>
        </section>
        <section className="bg-[#1E429B]">
          <section>
            <div className="mt-10 py-5">
              <div className="relative mx-auto w-full max-w-[90vw] px-1">
                <Swiper slidesPerView={1} loop={true} centeredSlides={true} className="mx-auto w-[90%]" ref={swiperRef}>
                  {ArtistData.content.slide.map((item, index) => (
                    <SwiperSlide key={index}>
                      <img src={item} alt="" className="h-[470px] w-full rounded-lg object-cover md:h-80 lg:h-[500px] 2xl:h-[700px]" />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="hidden md:block">
                  <Swiper
                    modules={[Navigation]}
                    loop={true}
                    slidesPerView={4}
                    spaceBetween={10}
                    className="mx-auto mt-5 w-[90%]"
                    navigation={{ nextEl: '.button-next', prevEl: '.button-prev' }}
                  >
                    {ArtistData.content.slide.map((item, index) => (
                      <SwiperSlide key={index}>
                        <img src={item} alt="" className="w-full rounded-lg object-cover md:h-[120px] lg:h-[200px]" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <button
                  onClick={goToPrev}
                  className="button-prev absolute left-[7%] top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 transform items-center justify-center text-5xl font-extrabold text-white md:top-[40%]"
                >
                  <GrPrevious />
                </button>
                <button
                  onClick={goToNext}
                  className="button-next absolute right-[7%] top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 transform items-center justify-center text-5xl font-extrabold text-white md:top-[40%]"
                >
                  <GrNext />
                </button>
              </div>
            </div>
          </section>
        </section>
        <section className="mb-20 mt-10">
          <h1 className="mx-auto w-[65%] text-center text-3xl font-bold text-[#1E429B]">¡VISITA LOS MURALES HOY!</h1>
          <iframe className="mx-auto mt-5 h-[350px] w-[90%] lg:h-[550px]" src={ArtistData.content.map} allowFullScreen loading="lazy"></iframe>
        </section>
        <section>
          <div className='h-[500px] w-full bg-[url("https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/ArteQueIlumina/Puerto-Rico-Arte-que-ilumina.webp")] bg-cover bg-center lg:h-[600px]'>
            <div className="mx-auto flex h-full w-[80%] flex-col items-center justify-center gap-y-5 text-xl font-bold text-white lg:w-[50%] lg:text-2xl">
              <img
                className="w-[80%] lg:w-[50%]"
                src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/ArteQueIlumina/ARTEQUEILUMINA+1.webp"
                alt="logo-arteQueIlumina"
              />
              <h1 className="text-center">DESCUBRE LOS DEMÁS ARTISTAS QUE FORMAN EL COLECTIVO DE ARTE QUE ILUMINA</h1>
              <button className="w-full bg-[#F5991F] py-3 lg:w-[50%]" onClick={redirect}>
                CONÓCELOS AQUÍ
              </button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}

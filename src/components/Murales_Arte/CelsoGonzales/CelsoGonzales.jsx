import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
//Layout
import Header from '../../../layouts/General/Header/Header'
import Footer from '../../../layouts/General/Footer/Footer'

const CelsoGonzales = () => {
  const images = [
    'https://windmar-website-cms.s3.amazonaws.com/LPs/ArteQueIlumina/A1_00050+2.webp',
    'https://windmar-website-cms.s3.amazonaws.com/LPs/ArteQueIlumina/A1_00145+2.webp',
    'https://windmar-website-cms.s3.amazonaws.com/LPs/ArteQueIlumina/S3_04500.webp',
    'https://windmar-website-cms.s3.amazonaws.com/LPs/ArteQueIlumina/S3_04519.webp',
    'https://windmar-website-cms.s3.amazonaws.com/LPs/ArteQueIlumina/S3_05319.webp',
  ]
  return (
    <>
      <Header />
      <div className="flex w-full flex-col items-center justify-center">
        <div className="mt-[15vh] flex w-full flex-col items-center justify-center" id="">
          <article className="flex w-[80%] flex-col items-center justify-center">
            <h1 className="w-full text-left text-[30px] font-bold text-[#1e429b] md:text-center md:text-[72px]">CELSO GONZÁLEZ</h1>
            <section className="flex w-full flex-col justify-center md:w-[55%]">
              <div className="border-3 mt-[2vh] w-[30%] border-[#f89b24] md:w-[40%]"></div>
              <span className="w-full text-left text-[15px] font-[500] text-[#989999] md:text-[30px]">LOÍZA</span>
            </section>

            <iframe
              className="mt-[5vh] h-[30vh] w-full md:h-[70vh] md:w-[90%]"
              src="https://windmar-website-cms.s3.amazonaws.com/LPs/ArteQueIlumina/06+Video+Loiza+-+Reveal+30+-+SQ.mp4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <p className="mt-[4vh] w-full text-justify text-[15px] text-[#929394] md:w-[60%] md:text-[22px]">
              Celso González Quiñones es un artista puertorriqueño del mosaico reconocido en todo el mundo por sus increíbles murales de técnica mixta
              y sus proyectos comunitarios. Ha trabajado en más de 40 proyectos monumentales de arte público por toda la isla. A través de sus obras
              de arte, celebra de dónde viene, adónde ha ido y adónde va. Todos los proyectos de Celso tienen una importancia comunitaria
              significativa.
              <br />
              <br /> Su mural ubicado en Loíza está inspirado en la luz de la inocencia representada en la niñez, la cual irradia felicidad y energía.
              El artista coloca un vejigante para representar a la cultura puertorriqueña y a su vez homenajea la herencia africana que Loíza le ha
              regalado a Puerto Rico.
            </p>
          </article>
        </div>
        <section className="flex w-[80%] flex-col items-center justify-center md:w-[90%]">
          <div className="mx-[2vh] w-full">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              navigation
              pagination={{ clickable: true }}
              className="my-10"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt={`Slide ${index}`} className="h-[50vh] w-full object-cover md:h-[100vh]" />
                </SwiperSlide>
              ))}
            </Swiper>
            <style jsx>{`
              .swiper-button-next,
              .swiper-button-prev {
                color: white;
              }
            `}</style>
          </div>
        </section>
      </div>

      <div className="flex w-full flex-col items-center justify-center">
        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="text-[30px] font-bold text-[#1e429b] md:text-[50px]">¡VISITA EL MURAL HOY!</h1>
          <div className="w-[30%] border-2 border-[#f89b24]"></div>
          <iframe
            className="my-[5vh] h-[50vh] w-[80%] md:w-[60%]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.1032526884474!2d-65.88042182302203!3d18.433620482643047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c03621671dec03f%3A0xcebe9cfff818ec3c!2sEstadio%20Miguel%20Fuentes%20Pinet%2C%20PR-187%2C%20Lo%C3%ADza%2C%2000772%2C%20Puerto%20Rico!5e0!3m2!1ses-419!2sco!4v1706717037358!5m2!1ses-419!2sco"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <h2 className="w-[80%] text-center text-[20px] font-bold text-[#1e429b] md:text-[24px] md:font-semibold">
            Descubre los demás artistas que forman el colectivo de Arte que Ilumina.
          </h2>
          <a className="my-[5vh] rounded-[10px] bg-[#ff9e18] p-3 text-[15px] font-bold text-slate-50" href="https://windmar.com/pr/arte-que-ilumina/">
            <button>CONÓCELOS AQUÍ</button>
          </a>
        </div>
      </div>
      <Footer color="blue" />
    </>
  )
}

export default CelsoGonzales

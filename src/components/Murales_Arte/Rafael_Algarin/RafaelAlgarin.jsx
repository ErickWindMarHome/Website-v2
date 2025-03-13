import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

//Layout
import Header from '../../../layouts/General/Header/Header'
import Footer from '../../../layouts/General/Footer/Footer'

const RafaelAlagarin = () => {
  const videoRafa = 'https://windmar-website-cms.s3.amazonaws.com/Components/MuralesArte/RafaelAlgarin/Video.mp4'
  const hombre = 'https://windmar-website-cms.s3.amazonaws.com/Components/MuralesArte/RafaelAlgarin/Hombre.webp'
  const mural = 'https://windmar-website-cms.s3.amazonaws.com/Components/MuralesArte/RafaelAlgarin/Mural.webp'
  const playa = 'https://windmar-website-cms.s3.amazonaws.com/Components/MuralesArte/RafaelAlgarin/Playa.webp'
  const playaM = 'https://windmar-website-cms.s3.amazonaws.com/Components/MuralesArte/RafaelAlgarin/CasaFrontal.webp'

  const images = [hombre, mural, playa, playaM]

  return (
    <>
      <Header />
      <div className="flex w-full flex-col items-center justify-center">
        <div className="mt-[15vh] flex w-full flex-col items-center justify-center" id="">
          <article className="flex w-[80%] flex-col items-center justify-center">
            <h1 className="w-full text-left text-[30px] font-bold text-[#1e429b] md:text-center md:text-[72px]">
              RAFAEL ALGARÍN <br />
            </h1>
            <section className="flex w-full flex-col justify-center md:w-[55%]">
              <div className="border-3 mt-[2vh] w-[30%] border-[#f89b24] md:w-[40%]"></div>
              <span className="w-full text-left text-[15px] font-[500] text-[#989999] md:text-[30px]">ISABELA</span>
            </section>

            <video loop autoPlay controls>
              <source src={videoRafa} type="video/mp4"></source>
            </video>
            <p className="mt-[4vh] w-full text-justify text-[15px] text-[#929394] md:w-[60%] md:text-[22px]">
              El muralista y artista gráfico Rafael Algarín, basado en Santurce, lleva el arte abstracto figurativo a nuevos niveles. Su educación en
              la Escuela Central de Artes Visuales y su especialización en gráfica de la Escuela de Artes Plásticas han influenciado profundamente su
              enfoque. Algarín tiene una habilidad única para canalizar y representar energías a través de sus líneas, conectando a la audiencia con
              la esencia de cada individuo u objeto que retrata.
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.7697691934754!2d-67.07440752300653!3d18.494084982594313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c0295f487711657%3A0x74bc5837d954a152!2sCarretera%20466%2C%20Jobos%2C%20Isabela%2000662%2C%20Puerto%20Rico!5e0!3m2!1ses-419!2sco!4v1706560295414!5m2!1ses-419!2sco"
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

export default RafaelAlagarin

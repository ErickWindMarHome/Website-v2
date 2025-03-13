import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

//Layout
import Header from '../../../layouts/General/Header/Header'
import Footer from '../../../layouts/General/Footer/Footer'

const AlejandroRodriguez = () => {
  const hompintor = 'https://windmar-website-cms.s3.amazonaws.com/Components/MuralesArte/AlejandroRodriguez/Hombre.webp'
  const niñoarte = 'https://windmar-website-cms.s3.amazonaws.com/Components/MuralesArte/AlejandroRodriguez/Mural.webp'
  const niñop = 'https://windmar-website-cms.s3.amazonaws.com/Components/MuralesArte/AlejandroRodriguez/Mural-Abajo.webp'
  const videoAlejo = 'https://windmar-website-cms.s3.amazonaws.com/Components/MuralesArte/AlejandroRodriguez/Video.mp4'
  const pintor = 'https://windmar-website-cms.s3.amazonaws.com/Components/MuralesArte/AlejandroRodriguez/Mural-Frontal.webp'
  const vista = 'https://windmar-website-cms.s3.amazonaws.com/Windmar1.0/LANDING+PAGE/vista-mural-ponce-pr.webp'
  const panoramica = 'https://windmar-website-cms.s3.amazonaws.com/Windmar1.0/LANDING+PAGE/panoramica-mural-ponce-pr.webp'
  const pinturas = 'https://windmar-website-cms.s3.amazonaws.com/Windmar1.0/LANDING+PAGE/pinturas-mural-puerto-rico.webp'
  const retrato = 'https://windmar-website-cms.s3.amazonaws.com/Windmar1.0/LANDING+PAGE/retrato-nino-obra-de-arte-ponce.webp'

  const images = [hompintor, niñoarte, niñop, vista, panoramica, pintor, pinturas, retrato]

  return (
    <>
      <Header />
      <div className="flex w-full flex-col items-center justify-center">
        <div className="mt-[15vh] flex w-full flex-col items-center justify-center" id="">
          <article className="flex w-[80%] flex-col items-center justify-center">
            <h1 className="w-full text-left text-[30px] font-bold text-[#1e429b] md:text-center md:text-[72px]">
              ALEJANDRO RODRÍGUEZ <br />
            </h1>
            <section className="flex w-full flex-col justify-center md:w-[55%]">
              <div className="border-3 mt-[2vh] w-[30%] border-[#f89b24] md:w-[40%]"></div>
              <span className="w-full text-left text-[15px] font-[500] text-[#989999] md:text-[30px]">PONCE</span>
            </section>
            <video loop autoPlay controls>
              <source src={videoAlejo} type="video/mp4"></source>
            </video>
            <p className="mt-[4vh] w-full text-justify text-[15px] text-[#929394] md:w-[60%] md:text-[22px]">
              Este prolífico artista plástico y diseñador gráfico ha dejado una importante huella en el arte urbano de la Isla. Sus piezas giran en
              torno a temas vinculados a la cultura puertorriqueña, la identidad del boricua y las realidades sociales que enfrenta esta tierra. Estas
              han sido expuestas a nivel local e internacional. Su mural es una representación visual de “energía de la buena” y la cultura de Ponce.
              El niño toca el pandero que es un instrumento distintivo de la plena, un ritmo musical autóctono del pueblo. Al tocar plena se emite una
              energía sonora alegre y al ir golpeando la membrana del pandero se emite una energía térmica. El niño es su hijo y representa a toda la
              niñez puertorriqueña
            </p>
          </article>
        </div>
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

      <div className="flex w-full flex-col items-center justify-center">
        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="text-[30px] font-bold text-[#1e429b] md:text-[50px]">¡VISITA EL MURAL HOY!</h1>
          <div className="w-[30%] border-2 border-[#f89b24]"></div>
          <iframe
            className="my-[5vh] h-[50vh] w-[80%] md:w-[60%]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.2904877381984!2d-66.61488412302778!3d18.011717582985884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c1cd588d0f04d75%3A0x15c60bc134f85ad6!2s63%20C.%20Cristina%2C%20Ponce%2C%2000730%2C%20Puerto%20Rico!5e0!3m2!1ses-419!2sco!4v1706647418373!5m2!1ses-419!2sco"
            loading="lazy"
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

export default AlejandroRodriguez

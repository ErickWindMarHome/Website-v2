import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

//Layout
import Header from '../../../layouts/General/Header/Header'
import Footer from '../../../layouts/General/Footer/Footer'

const JuanP = () => {
  const MuralJuan = 'https://windmar-website-cms.s3.amazonaws.com/Components/MuralesArte/JuanPueblo/MuralJuan.webp'
  const artista = 'https://windmar-website-cms.s3.amazonaws.com/Windmar1.0/LANDING+PAGE/artista-pintando-mural-hatillo.webp'
  const naturaleza = 'https://windmar-website-cms.s3.amazonaws.com/Windmar1.0/LANDING+PAGE/mural-naturaleza-y-aves-juan-del-pueblo.webp'
  const panoramica = 'https://windmar-website-cms.s3.amazonaws.com/Windmar1.0/LANDING+PAGE/panoramica-mural-hatillo-pr.webp'
  const pinturas = 'https://windmar-website-cms.s3.amazonaws.com/Windmar1.0/LANDING+PAGE/pinturas-obra-hatillo-puerto-rico.webp'
  const obra = 'https://windmar-website-cms.s3.amazonaws.com/Windmar1.0/LANDING+PAGE/tablet-obra-hatillo-pr.webp'

  const images = [MuralJuan, artista, naturaleza, obra, panoramica, pinturas]

  return (
    <>
      <Header />
      <div className="flex w-full flex-col items-center justify-center">
        <div className="mt-[15vh] flex w-full flex-col items-center justify-center" id="">
          <article className="flex w-[80%] flex-col items-center justify-center">
            <h1 className="w-full text-left text-[30px] font-bold text-[#1e429b] md:text-center md:text-[72px]">
              JUAN DEL PUEBLO <br />
            </h1>
            <section className="flex w-full flex-col justify-center md:w-[55%]">
              <div className="border-3 mt-[2vh] w-[30%] border-[#f89b24] md:w-[40%]"></div>
              <span className="w-full text-left text-[15px] font-[500] text-[#989999] md:text-[30px]">HATILLO</span>
            </section>

            <iframe
              src="https://www.youtube.com/embed/nh3aCsyJs9A?si=q9pEssgCXNSXJY3E"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="border-none"
            ></iframe>
            <p className="mt-[4vh] w-full text-justify text-[15px] text-[#929394] md:w-[60%] md:text-[22px]">
              Juan del Pueblo es un proyecto artístico nacido en 2015 con la intención de transmitir ideas y simbología a través de murales de gran
              formato. Las piezas quieren sensibilizar a las personas que entran en contacto con ellas para sacarlas de las distracciones que se
              presentan en la sociedad. Su mayor inspiración es la naturaleza, ya que ella dicta el camino para la humanidad.
              <br />
              <br /> La pieza representa la energía del sol, la cual nutre nuestro instinto natural de crear y dar vida. El creador propone que
              conectándonos con la naturaleza podremos lograr el balance para vivir a plenitud. Las aves simbolizan el pasado, presente y futuro
              uniéndose para tener un solo pensamiento común.
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60551.430558870576!2d-66.81714477421362!3d18.462611549091918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c02e7a817d40899%3A0x19b6188e4ef6ef90!2s2%20Carr%20Puerto%20Rico%202%2C%20Hatillo%2C%20Arecibo%2000659%2C%20Puerto%20Rico!5e0!3m2!1ses-419!2sco!4v1706715640322!5m2!1ses-419!2sco"
            allowfullscreen=""
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

export default JuanP

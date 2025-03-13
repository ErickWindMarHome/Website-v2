import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
//Layout
import Header from '../../../layouts/General/Header/Header'
import Footer from '../../../layouts/General/Footer/Footer'

const DavidSepulveda = () => {
  const Hombre = 'https://windmar-website-cms.s3.amazonaws.com/Components/MuralesArte/DavidSepulveda/Hombre.webp'
  const mural = 'https://windmar-website-cms.s3.amazonaws.com/Components/MuralesArte/DavidSepulveda/Mural.webp'
  const playa = 'https://windmar-website-cms.s3.amazonaws.com/Components/MuralesArte/DavidSepulveda/Playa.webp'
  const playaM = 'https://windmar-website-cms.s3.amazonaws.com/Components/MuralesArte/DavidSepulveda/CasaFrontal.webp'
  const videoDavid = 'https://windmar-website-cms.s3.amazonaws.com/Components/MuralesArte/DavidSepulveda/Video.mp4'

  const images = [Hombre, mural, playa, playaM]

  return (
    <>
      <Header />
      <div className="flex w-full flex-col items-center justify-center">
        <div className="mt-[15vh] flex w-full flex-col items-center justify-center" id="">
          <article className="flex w-[80%] flex-col items-center justify-center">
            <h1 className="w-full text-left text-[30px] font-bold text-[#1e429b] md:text-center md:text-[72px]">
              DAVID &quot;DON RIMX&quot; SEPÚLVEDA
              <br />
            </h1>
            <section className="flex w-full flex-col justify-center md:w-[55%]">
              <div className="border-3 mt-[2vh] w-[30%] border-[#f89b24] md:w-[40%]"></div>
              <span className="w-full text-left text-[15px] font-[500] text-[#989999] md:text-[30px]">FAJARDO</span>
            </section>
            <video loop autoPlay controls>
              <source src={videoDavid} type="video/mp4"></source>
            </video>
            <p className="mt-[4vh] w-full text-justify text-[15px] text-[#929394] md:w-[60%] md:text-[22px]">
              La versatilidad artística de Don Rimx abarca desde técnicas clásicas hasta el graffiti, los murales imponentes y el arte del tatuaje
              contemporáneo. Su obra, que refleja su fascinación por el ambiente urbano, incorpora meticulosas líneas, maderas, ladrillos y paletas de
              colores vibrantes para evocar la unión del hombre con su ciudad.
              <br />
              <br />
              <span>
                “El Mural está inspirado en el pueblo de Fajardo. Un tributo a la cultura, los colores y la energía que recoge este pueblo al Este de
                Puerto Rico, el cual es conocido como la ciudad del Sol Naciente.
                <br />
                <br />
                La pieza recoge nuestra diversidad racial, energía playera y costera. Entre los elementos presentes tenemos al icónico Faro de las
                Cabezas de San Juan.”
              </span>
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
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7573.900848981314!2d-65.653631!3d18.349546!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c049777ac618889%3A0xbe59df0f49456b70!2sAv.%20el%20Conquistador%2C%20Fajardo%2C%2000738%2C%20Puerto%20Rico!5e0!3m2!1ses!2sus!4v1706629592691!5m2!1ses!2sus"
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

export default DavidSepulveda

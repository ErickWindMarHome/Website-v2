import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
//Layout
import Header from '../../../layouts/General/Header/Header'
import Footer from '../../../layouts/General/Footer/Footer'

const GaBa = () => {
  const pinceles = 'https://windmar-website-cms.s3.amazonaws.com/Windmar1.0/LANDING+PAGE/mural-dos-pinceles-gabriela-patricia-urrutia.webp'
  const artistas = 'https://windmar-website-cms.s3.amazonaws.com/Windmar1.0/LANDING+PAGE/artistas-pintando-mural-aguadilla.webp'
  const vista = 'https://windmar-website-cms.s3.amazonaws.com/Windmar1.0/LANDING+PAGE/vista-mural-aguadilla-pr.webp'
  const tablet = 'https://windmar-website-cms.s3.amazonaws.com/Windmar1.0/LANDING+PAGE/tablet-obra-aguadilla-pr.webp'

  const images = [pinceles, artistas, vista, tablet]

  return (
    <>
      <Header />
      <div className="flex w-full flex-col items-center justify-center">
        <div className="mt-[15vh] flex w-full flex-col items-center justify-center" id="">
          <article className="flex w-[80%] flex-col items-center justify-center">
            <h1 className="w-full text-left text-[30px] font-bold text-[#1e429b] md:text-center md:text-[72px]">
              GABRIELA Y PATRICIA URRUTIA <br />
            </h1>
            <section className="flex w-full flex-col justify-center md:w-[55%]">
              <div className="border-3 mt-[2vh] w-[30%] border-[#f89b24] md:w-[40%]"></div>
              <span className="w-full text-left text-[15px] font-[500] text-[#989999] md:text-[30px]">AGUADILLA</span>
            </section>

            <iframe
              src="https://www.youtube.com/embed/m4ZDjuFt2P0?si=B1lydWbkACLcW6CK"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="border-none"
            ></iframe>
            <p className="mt-[4vh] w-full text-justify text-[15px] text-[#929394] md:w-[60%] md:text-[22px]">
              “Dos Pinceles” es un colectivo artístico conformado por las innovadoras hermanas gemelas Gabriela y Patricia Urrutia. Ambas poseen una
              especialización en Bellas Artes y han realizado trabajos con acrílico en lienzos, impresiones y murales a lo largo de su descubrimiento
              de la expresión artística. <br />
              <br />
              El mural plasma un estilo orgánico inspirado en el sol, los bellos atardeceres y las impresionantes playas de Aguadilla. Las artistas
              quieren representar esa energía única que brinda armonía, calidez y vida. Emplean colores brillantes como el azul, naranja, amarillo y
              turquesa para transmitir ese calor. El diseño es fino, minimalista y moderno.
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.9205356483985!2d-67.12410382302204!3d18.44191678263646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c02bc4bc8c5e0cd%3A0x3b1c72a3c8dfb5e1!2sCoffee%20Masters!5e0!3m2!1ses-419!2sco!4v1706713596838!5m2!1ses-419!2sco"
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

export default GaBa

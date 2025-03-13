import React from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import FlipCard from './FlipCard'
import 'swiper/css'

function SliderProposito({ className }) {
  return (
    <div className={`flex w-full items-center justify-center ${className}`}>
      <Swiper
        className="mb-12 h-full w-full"
        modules={[Pagination, Navigation]}
        slidesPerView={1} // Permite ver parcialmente los slides vecinos
        spaceBetween={0}
        navigation={true}
        centeredSlides={true} // Centra el slide activo
        pagination={{ clickable: true }} // Activa la paginación con puntos
        loop={true} // Activa el loop para que los slides se repitan infinitamente
        initialSlide={2} // Inicia en la segunda imagen
        breakpoints={{
          760: {
            slidesPerView: 3,
            centeredSlides: false,
            pagination: false,
            navigation: false,
          },
        }}
      >
        <SwiperSlide>
          <FlipCard
            title={'IMPACTAR'}
            icon={'https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/General/MACBOOK+AIR.WEBP/ICONO_IMPACTAR-12.webp'}
            description={
              'A la comunidad puertorriqueña ofreciendo herramientas que le permitan reconocer a la energía solar como un recurso inagotable de energía sostenible. <br /><strong>Al compartir la misma visión, inspiramos a otros a lograr nuestra misión.</strong>'
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <FlipCard
            title={'DONAR'}
            icon={'https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/General/MACBOOK+AIR.WEBP/ICONO_DONAR-13.webp'}
            description={
              'Sistemas solares para <strong>mejorar la calidad de vida de pacientes que sufren de apagones constantes</strong> y dependen de equipo médico para sobrevivir.'
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <FlipCard
            title={'CONTRIBUIR'}
            icon={'https://windmar-website-cms.s3.amazonaws.com/LPs/FundacionWindmar/General/MACBOOK+AIR.WEBP/ICONO_CONTRIBUIR-14.webp'}
            description={
              '<strong>En lograr la meta de 100% energía renovable para el 2050</strong> y continuar contribuyendo en el desarrollo energético de Puerto Rico.'
            }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SliderProposito

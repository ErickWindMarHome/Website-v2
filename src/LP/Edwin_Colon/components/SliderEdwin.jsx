import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'

function SliderEdwin() {
  return (
    <div className="flex w-full items-center justify-center">
      <Swiper className="pb-5" modules={[Pagination]} slidesPerView={1.3} spaceBetween={10} centeredSlides={true} pagination={{ clickable: true }}>
        <SwiperSlide>
          <div className="mx-auto h-[420px] w-[300px]">
            <img src="https://windmar-website-cms.s3.amazonaws.com/LPs/EdwinColon/solar_leads_edwin.webp" alt="solar" />
            <div className="absolute bottom-16 ml-8 text-white">
              <h1 className="border-b-2 pb-2 text-2xl font-bold">Solar</h1>
              <p className="h-[71px] w-[235px] text-balance text-sm text-white/80">
                Con nuestro Sistema Solar fotovoltaico tendrás todo el poder del sol energizando tu hogar las 24 horas del día. Mejorarás tu calidad
                de vida y cuidarás tu bolsillo.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mx-auto h-[420px] w-[300px]">
            <img src="https://windmar-website-cms.s3.amazonaws.com/LPs/EdwinColon/roofing_leads_edwin.webp" alt="roofing" />
            <div className="absolute bottom-16 ml-8 text-white">
              <h1 className="border-b-2 pb-2 text-2xl font-bold">Roofing</h1>
              <p className="h-[71px] w-[235px] text-balance text-sm text-white/80">
                El sellado de techo te ayudará a proteger la estructura de tu hogar impidiendo que el aire, el humo, el agua, el polvo y los gases
                dañen el interior y exterior de tu propiedad.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mx-auto h-[420px] w-[300px]">
            <img src="https://windmar-website-cms.s3.amazonaws.com/LPs/EdwinColon/anker_leads_edwin.webp" alt="bateria-Anker" />
            <div className="absolute bottom-16 ml-8 text-white">
              <h1 className="border-b-2 pb-2 text-2xl font-bold">Batería Anker</h1>
              <p className="h-[71px] w-[235px] text-balance text-sm text-white/80">
                Siente la comodidad de la batería portátil Anker con Windmar Home, garantizando que tus dispositivos estén conectados en cualquier
                lugar donde te encuentres.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SliderEdwin

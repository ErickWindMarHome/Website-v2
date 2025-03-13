import Header from '../../layouts/General/Header/Header'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { GrPrevious, GrNext } from 'react-icons/gr'
import 'swiper/css'
import 'swiper/css/navigation'
import { useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import useTitle from '../../hooks/useTitle'
import ModalRoofle from '../../components/modalRoofle/ModalRoofle'

export default function RoofQuotingCalculator() {
  const swiperRef = useRef(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const goToNext = () => {
    console.log('next')

    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext()
    }
  }
  const goToPrev = () => {
    console.log('prev')

    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev()
    }
  }

  useTitle('Protect your home with our Roofing equipment - WindMar')

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Forget cracked shingles, water leaks and protect your home by  roof sealing with Windmar Solar + Roofing! fill out your information below for a free estimate."
        />
      </Helmet>
      <Header />
      <div className="mx-auto max-w-[90%]">
        <section className="relative mx-auto mt-24 text-white">
          <img
            className="inset-0 h-full w-full lg:hidden"
            src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/banner+mobile-55.webp"
            alt=""
          />
          <img
            className="inset-0 hidden h-full w-full lg:block"
            src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/Banner+desktop-41-41-41-41.webp"
            alt=""
          />
          <div className="absolute inset-0">
            <div className="flex h-full w-full flex-col justify-between lg:justify-center lg:p-8">
              <div className="m-5 mt-auto flex h-full flex-col justify-around lg:items-center lg:justify-between">
                <div className="w-[70%] text-white drop-shadow-md lg:mx-auto lg:w-[55%] lg:text-center lg:text-[#494949] lg:drop-shadow-none">
                  <h1 className="text-3xl font-bold lg:mx-auto lg:w-[80%] lg:text-5xl xl:w-full xl:text-7xl">Storm-Proof Your Roof</h1>
                  <p className="text-md mt-5 font-semibold lg:mx-auto lg:mb-10 lg:text-2xl">Transform your home with just one click!</p>
                </div>
                <button onClick={handleOpenModal} className="mt-6 w-[75%] rounded-full bg-[#F6921E] py-2 lg:w-[50%] lg:py-3 xl:w-[35%]">
                  <span className="text-sm font-bold lg:text-2xl">Receive an instant quote</span>
                </button>
              </div>
            </div>
            <div className="absolute bottom-10 right-4 hidden lg:block">
              <img
                className="h-[524px] w-[438px] lg:h-[424px] lg:w-[338px]"
                src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/pantera_desktop-43.webp"
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="mt-10 text-[#6D6E71]">
          <div className="flex flex-col items-center justify-center">
            <h1 className="w-[70%] text-center text-[25px] font-extrabold xl:text-4xl">All the Security Your Roof Needs</h1>
            <p className="mt-4 text-xl lg:text-3xl">Explore Our Options</p>
          </div>
          <div className="items-center justify-center lg:mx-auto lg:flex lg:w-[80%]">
            <img
              className="mx-auto mt-10 w-[80%] lg:w-[50%]"
              src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/Techo_casa.webp"
              alt=""
            />
            <div className="mx-auto mt-10 grid w-[90%] grid-cols-4 place-items-end lg:grid-cols-2">
              <img
                className="mx-auto w-[70%] lg:ml-[50%] lg:w-[40%]"
                src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/Owens_logo.webp"
                alt=""
              />
              <img
                className="mx-auto w-[70%] lg:mr-[50%] lg:w-[40%]"
                src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/Certified_installer_logo.webp"
                alt=""
              />
              <img
                className="col-span-2 mb-[5px] lg:mx-auto lg:mb-20 lg:w-[80%]"
                src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/Total_protect.webp"
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="mx-auto mt-10">
          <div className="flex h-[100px] w-full flex-col items-center justify-center rounded-3xl bg-[url('https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/Secciones_mobile.webp')] bg-cover bg-no-repeat lg:bg-[url('https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/Secciones_desktop.webp')]">
            <h1 className="text-center text-2xl font-bold text-white lg:text-3xl">Explore Our Options</h1>
          </div>
          <div className="relative mt-10 w-full px-1">
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 0.0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={2500}
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 3,
                  initialSlide: 2,
                },
                1024: {
                  slidesPerView: 5,
                  initialSlide: 3,
                },
              }}
              centeredSlides={true}
            >
              <SwiperSlide>
                <div className="flex h-full w-full flex-col items-center justify-center text-center">
                  <img
                    className="w-10 md:h-24 md:w-32"
                    src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/SureStart_PLUS.webp"
                    alt=""
                  />
                  <p className="mt-2 text-xs md:text-base lg:w-[68%]">Preferred Solar PROtect™ Warrantyt PLUS</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex h-full w-full flex-col items-center justify-center text-center">
                  <img
                    className="w-10 md:h-24 md:w-24"
                    src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/Colores_TruDefinition.webp"
                    alt=""
                  />
                  <p className="mt-2 text-xs md:text-base lg:w-[68%]">TruDefinition Colors</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex h-full w-full flex-col items-center justify-center text-center">
                  <img
                    className="w-10 md:h-24 md:w-24"
                    src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/Garantia_de-10_a%C3%B1os_a_prueba_de_filtraciones.webp"
                    alt=""
                  />
                  <div className="lg:w-[68%]">
                    <p className="mt-2 text-xs md:text-base">10-Year Leak Proof Warranty</p>
                    <p className="mt-1 rounded-lg bg-[#6D6E71] py-1 text-[9px] text-white md:mx-auto md:px-3 md:py-2 md:text-base">
                      50-Year Manufacturer Warranty
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex h-full w-full flex-col items-center justify-center text-center">
                  <img
                    className="w-10 md:h-24 md:w-24"
                    src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/Incremento_de_valor.webp"
                    alt=""
                  />
                  <p className="mt-2 text-xs md:text-base lg:w-[68%]">More Value</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex h-full w-full flex-col items-center justify-center text-center">
                  <img
                    className="w-10 md:h-24 md:w-24"
                    src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/Proteccion_total_del_sistema.webp"
                    alt=""
                  />
                  <p className="mt-2 text-xs md:text-base lg:w-[68%]">Total System Protection</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex h-full w-full flex-col items-center justify-center text-center">
                  <img
                    className="w-10 md:h-24 md:w-24"
                    src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/Clasificacion_de_impacto_UL_2218_Clase_3.webp"
                    alt=""
                  />
                  <p className="mt-2 text-xs md:text-base lg:w-[68%]">UL 2218 Class 3 Impact Rated</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex h-full w-full flex-col items-center justify-center text-center">
                  <img
                    className="w-10 md:h-24 md:w-24"
                    src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/25_a%C3%B1os_de_StreakGuard.webp"
                    alt=""
                  />
                  <p className="mt-2 text-xs md:text-base lg:w-[68%]">25 Years StreakGuard</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex h-full w-full flex-col items-center justify-center text-center">
                  <img
                    className="w-10 md:h-24 md:w-24"
                    src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/Resiste_vientos_de_hasta_130_MPH.webp"
                    alt=""
                  />
                  <p className="mt-2 text-xs md:text-base lg:w-[68%]">Withstands 130 MPH</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex h-full w-full flex-col items-center justify-center text-center">
                  <img
                    className="w-10 md:h-24 md:w-24"
                    src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/Certificado_Solar_ProtecionInstaller.webp"
                    alt=""
                  />
                  <p className="mt-2 text-xs md:text-base lg:w-[68%]">Solar PROtect™ Certified</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section>
          <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:justify-center lg:gap-10">
            <div className="-translate-y-6 lg:-translate-y-5">
              <img
                className="mx-auto w-[250px] translate-y-[70px]"
                src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/Roof_protect.webp"
                alt=""
              />
              <div className="mx-auto w-[90%] max-w-[500px] rounded-3xl bg-[#F7F7F7] p-4 pt-20 text-[#6D6E71] lg:h-[530px] lg:w-full">
                <h1 className="text-center text-[40px] font-bold">Roof Protect</h1>
                <ul className="mx-auto w-[90%] list-disc marker:text-xl marker:text-[#CFCFCF] [&>li]:mt-4">
                  <li>50 year limited warranty for as long as you own your home.</li>
                  <li>25-years StreakGuard warranty</li>
                  <li>15 years, 130 mph wind warranty</li>
                  <li>
                    <h1>15 TruDefinition color options</h1>
                    <p>See colors on the &quot;Product Page&quot;</p>
                  </li>
                  <li>10 Year Workmanship warranty</li>
                </ul>
              </div>
            </div>

            <div className="-translate-y-10 lg:-translate-y-5">
              <img
                className="mx-auto w-[250px] translate-y-[70px] lg:h-[249px] lg:w-[200px]"
                src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/Solar_protect.webp"
                alt=""
              />
              <div className="mx-auto w-[90%] max-w-[500px] rounded-3xl bg-[#F7F7F7] p-4 pt-20 text-[#6D6E71] lg:h-[530px] lg:w-full">
                <h1 className="text-center text-[40px] font-bold">Solar Protect</h1>
                <ul className="mx-auto w-[90%] list-disc marker:text-xl marker:text-[#CFCFCF] [&>li]:mt-4">
                  <li>Includes $10K allowance for Removal & Reinstallation of your PV system for the life of the extended warranty.</li>
                  <li>50 year limited warranty for as long as you own your home.</li>
                  <li>25-years StreakGuard warranty</li>
                  <li>15-years, 130 mph wind warranty</li>
                  <li>
                    <h1>15 TruDefinition color options</h1>
                    <p>See colors on the &quot;Product Page&quot;</p>
                  </li>
                  <li>10 Year Workmanship warranty</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto">
          <div className="flex h-[100px] w-full flex-col items-center justify-center rounded-3xl bg-[url('https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/Secciones_mobile.webp')] bg-cover bg-no-repeat lg:bg-[url('https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/Secciones_desktop.webp')]">
            <h1 className="text-center text-2xl font-bold text-white lg:text-3xl">Benefits You Won’t Find Anywhere Else</h1>
          </div>
          <div className="mx-auto w-[95%] text-white lg:grid lg:grid-cols-2 lg:grid-rows-3">
            <div className="mt-2">
              <div className="w-fit translate-x-7 translate-y-2 rounded-xl border border-[#898989] bg-[#CFCFCF] px-2 xl:translate-x-28">
                <h1 className="text-sm text-[#6D6E71] xl:text-base">Comprehensive Expertise:</h1>
              </div>
              <div className="flex items-center justify-between gap-2 rounded-full bg-[#6a6b6d] px-4 py-3 lg:mx-auto lg:h-[80%] lg:w-[90%] xl:w-[80%]">
                <img className="w-9" src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/Experiencia_integral.webp" alt="" />
                <h1 className="grow text-xs xl:text-lg">One-stop shop for roofing and solar installations.</h1>
              </div>
            </div>
            <div className="mt-2">
              <div className="w-fit translate-x-7 translate-y-2 rounded-xl border border-[#898989] bg-[#CFCFCF] px-2 xl:translate-x-28">
                <h1 className="text-sm text-[#6D6E71] xl:text-base">Streamlined Process:</h1>
              </div>
              <div className="flex items-center justify-between gap-2 rounded-full bg-[#6a6b6d] px-4 py-3 lg:mx-auto lg:h-[80%] lg:w-[90%] xl:w-[80%]">
                <img className="w-9" src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/proceso_eficiente.webp" alt="" />
                <h1 className="grow text-xs xl:text-lg">Avoid the hassle of coordinating with separate contractors</h1>
              </div>
            </div>
            <div className="mt-2">
              <div className="w-fit translate-x-7 translate-y-2 rounded-xl border border-[#898989] bg-[#CFCFCF] px-2 xl:translate-x-28">
                <h1 className="text-sm text-[#6D6E71] xl:text-base">Simplified Warranty:</h1>
              </div>
              <div className="flex items-center justify-between gap-2 rounded-full bg-[#6a6b6d] px-4 py-3 lg:mx-auto lg:h-[80%] lg:w-[90%] xl:w-[80%]">
                <img className="w-9" src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/garantia_simplificada.webp" alt="" />
                <h1 className="grow text-xs xl:text-lg">Single point of contact for both roofing and solar warranties.</h1>
              </div>
            </div>

            <div className="mt-2">
              <div className="w-fit translate-x-7 translate-y-2 rounded-xl border border-[#898989] bg-[#CFCFCF] px-2 xl:translate-x-28">
                <h1 className="text-sm text-[#6D6E71] xl:text-base">Guaranteed Workmanship:</h1>
              </div>
              <div className="flex items-center justify-between gap-2 rounded-full bg-[#6a6b6d] px-4 py-3 lg:mx-auto lg:h-[80%] lg:w-[90%] xl:w-[80%]">
                <img className="w-9" src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/Trabajo_garantizado.webp" alt="" />
                <h1 className="grow text-xs xl:text-lg">We take pride in our craftsmanship and we stand behind the quality of our work.</h1>
              </div>
            </div>
            <div className="mt-2">
              <div className="w-fit translate-x-7 translate-y-2 rounded-xl border border-[#898989] bg-[#CFCFCF] px-2 xl:translate-x-28">
                <h1 className="text-sm text-[#6D6E71] xl:text-base">Enhanced Property Value:</h1>
              </div>
              <div className="flex items-center justify-between gap-2 rounded-full bg-[#6a6b6d] px-4 py-3 lg:mx-auto lg:h-[80%] lg:w-[90%] xl:w-[80%]">
                <img className="w-9" src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/vakor_aumentado.webp" alt="" />
                <h1 className="grow text-xs xl:text-lg">
                  Investing in a roof and solar energy system from our company can increase the value of your property.
                </h1>
              </div>
            </div>
            <div className="mt-2">
              <div className="w-fit translate-x-7 translate-y-2 rounded-xl border border-[#807f7f] bg-[#CFCFCF] px-2 xl:translate-x-28">
                <h1 className="text-sm text-[#6D6E71] xl:text-base">Sunnova Finance:</h1>
              </div>
              <div className="flex items-center justify-between gap-2 rounded-full bg-[#6a6b6d] px-4 py-3 lg:mx-auto lg:h-[80%] lg:w-[90%] xl:w-[80%]">
                <img className="w-9" src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/financiamiento.webp" alt="" />
                <h1 className="grow text-xs xl:text-lg">Your budget is safe with us. Finance your roof starting at $99/mo.</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="lg:justify-betwee mt-10 lg:mx-auto lg:flex lg:w-[80%] lg:items-center">
          <h1 className="text-center text-3xl font-bold text-[#6D6E71] lg:pl-20 lg:text-justify">Color Options</h1>
          <div className="relative mt-10 w-full lg:mx-auto lg:w-[85%] xl:w-[95%]">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={3}
              spaceBetween={10}
              initialSlide={2}
              centeredSlides={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={2500}
              loop={true}
              className="mx-auto w-[86%] lg:w-[70%]"
            >
              <SwiperSlide>
                <div className="flex flex-col items-center justify-center text-center">
                  <img
                    className="h-[80px] w-[140px] md:h-[110px] md:w-[200px] md:max-w-[90%] lg:h-[110px] lg:w-[200px] 2xl:h-[170px] 2xl:w-[300px] 2xl:max-w-[90%]"
                    src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/Amber.webp"
                    alt="color Amber"
                  />
                  <p className="mt-2 text-sm text-[#6D6E71] lg:text-base">Amber</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center justify-center text-center">
                  <img
                    className="h-[80px] w-[140px] md:h-[110px] md:max-h-[90%] md:w-[200px] md:max-w-[90%] lg:h-[110px] lg:w-[200px] 2xl:h-[170px] 2xl:w-[300px] 2xl:max-w-[90%]"
                    src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/Brownwood.webp"
                    alt="color Brownwood"
                  />
                  <p className="mt-2 text-sm text-[#6D6E71] lg:text-base">Brownwood</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center justify-center text-center">
                  <img
                    className="h-[80px] w-[140px] md:h-[110px] md:w-[200px] md:max-w-[90%] lg:h-[110px] lg:w-[200px] 2xl:h-[170px] 2xl:w-[300px] 2xl:max-w-[90%]"
                    src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/Desert_rose.webp"
                    alt="color Desert Rose"
                  />
                  <p className="mt-2 text-sm text-[#6D6E71] lg:text-base">Desert Rose</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center justify-center text-center">
                  <img
                    className="h-[80px] w-[140px] md:h-[110px] md:w-[200px] md:max-w-[90%] lg:h-[110px] lg:w-[200px] 2xl:h-[170px] 2xl:w-[300px] 2xl:max-w-[90%]"
                    src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/State_gray.webp"
                    alt="color State Gray"
                  />
                  <p className="mt-2 text-sm text-[#6D6E71] lg:text-base">State Gray</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center justify-center text-center">
                  <img
                    className="h-[80px] w-[140px] md:h-[110px] md:w-[200px] md:max-w-[90%] lg:h-[110px] lg:w-[200px] 2xl:h-[170px] 2xl:w-[300px] 2xl:max-w-[90%]"
                    src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/Antique_silver.webp"
                    alt="color Antique Silver"
                  />
                  <p className="mt-2 text-sm text-[#6D6E71] lg:text-base">Antique Silver</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center justify-center text-center">
                  <img
                    className="h-[80px] w-[140px] md:h-[110px] md:w-[200px] md:max-w-[90%] lg:h-[110px] lg:w-[200px] 2xl:h-[170px] 2xl:w-[300px] 2xl:max-w-[90%]"
                    src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/Chateau_Green.webp"
                    alt="color Chateau Green"
                  />
                  <p className="mt-2 text-sm text-[#6D6E71] lg:text-base">Chateau Green</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center justify-center text-center">
                  <img
                    className="h-[80px] w-[140px] md:h-[110px] md:w-[200px] md:max-w-[90%] lg:h-[110px] lg:w-[200px] 2xl:h-[170px] 2xl:w-[300px] 2xl:max-w-[90%]"
                    src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/Driftwood.webp"
                    alt="color Driftwood"
                  />
                  <p className="mt-2 text-sm text-[#6D6E71] lg:text-base">Driftwood</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center justify-center text-center">
                  <img
                    className="h-[80px] w-[140px] md:h-[110px] md:w-[200px] md:max-w-[90%] lg:h-[110px] lg:w-[200px] 2xl:h-[170px] 2xl:w-[300px] 2xl:max-w-[90%]"
                    src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/Harbor_blue.webp"
                    alt="color Harbor Blue"
                  />
                  <p className="mt-2 text-sm text-[#6D6E71] lg:text-base">Harbor Blue</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center justify-center text-center">
                  <img
                    className="h-[80px] w-[140px] md:h-[110px] md:w-[200px] md:max-w-[90%] lg:h-[110px] lg:w-[200px] 2xl:h-[170px] 2xl:w-[300px] 2xl:max-w-[90%]"
                    src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/Midnight_plum.webp"
                    alt="color Midnight Plum"
                  />
                  <p className="mt-2 text-sm text-[#6D6E71] lg:text-base">Midnight Plum</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center justify-center text-center">
                  <img
                    className="h-[80px] w-[140px] md:h-[110px] md:w-[200px] md:max-w-[90%] lg:h-[110px] lg:w-[200px] 2xl:h-[170px] 2xl:w-[300px] 2xl:max-w-[90%]"
                    src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/Quarry.webp"
                    alt="color Quarry Gray"
                  />
                  <p className="mt-2 text-sm text-[#6D6E71] lg:text-base">Quarry Gray</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center justify-center text-center">
                  <img
                    className="h-[80px] w-[140px] md:h-[110px] md:w-[200px] md:max-w-[90%] lg:h-[110px] lg:w-[200px] 2xl:h-[170px] 2xl:w-[300px] 2xl:max-w-[90%]"
                    src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/Teak.webp"
                    alt="color Teak"
                  />
                  <p className="mt-2 text-sm text-[#6D6E71] lg:text-base">Teak</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center justify-center text-center">
                  <img
                    className="h-[80px] w-[140px] md:h-[110px] md:w-[200px] md:max-w-[90%] lg:h-[110px] lg:w-[200px] 2xl:h-[170px] 2xl:w-[300px] 2xl:max-w-[90%]"
                    src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/Wiliamsburg_gray.webp"
                    alt="color Williamsburg Gray"
                  />
                  <p className="mt-2 text-sm text-[#6D6E71] lg:text-base">Williamsburg Gray</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center justify-center text-center">
                  <img
                    className="h-[80px] w-[140px] md:h-[110px] md:w-[200px] md:max-w-[90%] lg:h-[110px] lg:w-[200px] 2xl:h-[170px] 2xl:w-[300px] 2xl:max-w-[90%]"
                    src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/Onyx_black.webp"
                    alt="color Onyx Black"
                  />
                  <p className="mt-2 text-sm text-[#6D6E71] lg:text-base">Onyx Black</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center justify-center text-center">
                  <img
                    className="h-[80px] w-[140px] md:h-[110px] md:w-[200px] md:max-w-[90%] lg:h-[110px] lg:w-[200px] 2xl:h-[170px] 2xl:w-[300px] 2xl:max-w-[90%]"
                    src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/Shasta_white.webp"
                    alt="color Shasta White"
                  />
                  <p className="mt-2 text-sm text-[#6D6E71] lg:text-base">Shasta White</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center justify-center text-center">
                  <img
                    className="h-[80px] w-[140px] md:h-[110px] md:w-[200px] md:max-w-[90%] lg:h-[110px] lg:w-[200px] 2xl:h-[170px] 2xl:w-[300px] 2xl:max-w-[90%]"
                    src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/Terra_cota.webp"
                    alt="color Terra Cotta"
                  />
                  <p className="mt-2 text-sm text-[#6D6E71] lg:text-base">Terra Cotta</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section className="mt-10">
          <div className="mx-auto flex h-[83px] w-[376px] max-w-[90%] flex-col items-center justify-center rounded-full bg-[url('https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/Proyectos.webp')] bg-cover bg-no-repeat">
            <h1 className="text-center text-2xl font-bold text-white lg:text-3xl">Projects</h1>
          </div>
          <div className="relative mt-10 w-full px-1">
            <Swiper
              modules={[Navigation]}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  navigation: {
                    nextEl: '.button-next',
                    prevEl: '.button-prev',
                    clickable: true,
                  },
                },
                1024: {
                  slidesPerView: 3,
                  initialSlide: 1,
                  allowTouchMove: false,
                },
              }}
              spaceBetween={1}
              centeredSlides={true}
              className="mx-auto w-[90%]"
            >
              <SwiperSlide>
                <div className="mx-auto flex h-[183px] w-[292px] max-w-[90%] justify-center rounded-3xl bg-[url('https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/Antes.webp')] bg-cover 2xl:h-[283px] 2xl:w-[492px]">
                  <h1 className="mt-8 text-xl font-semibold text-white xl:text-2xl 2xl:text-3xl">Before</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mx-auto flex h-[183px] w-[292px] max-w-[90%] justify-center rounded-3xl bg-[url('https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/Durante.webp')] bg-cover 2xl:h-[283px] 2xl:w-[492px]">
                  <h1 className="mt-8 text-xl font-semibold text-white xl:text-2xl 2xl:text-3xl">During</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mx-auto flex h-[183px] w-[292px] max-w-[90%] justify-center rounded-3xl bg-[url('https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoofQuote/Despues.webp')] bg-cover 2xl:h-[283px] 2xl:w-[492px]">
                  <h1 className="mt-8 text-xl font-semibold text-white xl:text-2xl 2xl:text-3xl">After</h1>
                </div>
              </SwiperSlide>
            </Swiper>
            <button
              onClick={goToPrev}
              className="button-prev absolute -left-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 transform items-center justify-center text-5xl text-[#6D6E71] lg:hidden"
            >
              <GrPrevious />
            </button>
            <button
              onClick={goToNext}
              className="button-next absolute -right-1.5 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 transform items-center justify-center text-5xl text-[#6D6E71] lg:hidden"
            >
              <GrNext />
            </button>
          </div>
        </section>
        <hr className="mx-auto my-16 w-[95%] rounded-full border-2 bg-[#CFCFCF]" />
        <section className="flex w-full flex-col items-center justify-center rounded-3xl bg-[#F7F7F7] p-4 text-[#6D6E71]">
          <h1 className="pt-6 text-center text-2xl font-bold lg:text-start xl:text-3xl">Manufacturer Warranty Details</h1>
          <div className="mt-4 flex w-full flex-col justify-center gap-10 p-4 lg:flex-row lg:p-10">
            <div className="lg:w-[50%]">
              <h2 className="text-center text-2xl font-bold lg:text-start xl:text-xl">Solar Protect includes Solar Protect Preferred Protection.</h2>
              <ul className="mx-auto w-[90%] list-disc text-sm marker:text-xl marker:text-[#CFCFCF] lg:text-lg [&>li>span]:font-bold [&>li]:mt-4">
                <li>
                  Includes <span>$10K</span> allowance for Removal & Reinstallation of your PV system for the life of the extended warranty.
                </li>
                <li>
                  Overall Warranty Length - <span>Lifetime</span>
                </li>
                <li>
                  Products Included - <span>Shingles & all Owens Corning components</span>
                </li>
                <li>
                  TRU PROtection® Period - <span>First 50 years</span>
                </li>
                <li>
                  Materials Only Coverage - <span>After 50 years</span>
                </li>
                <li>
                  Blow off Coverage - <span>First 15 years</span>
                </li>
                <li>
                  StreakGuard® Algae Resistance - <span>First 25 years</span>
                </li>
                <li>
                  Coverage Period - <span>First 10 years</span>
                </li>
                <li>
                  Workmanship Coverage Period By Owens - <span>10 Years</span>
                </li>
              </ul>
            </div>
            <hr className="hidden h-[500px] w-[3px] bg-[#C3C3C3] lg:block" />
            <div className="lg:w-[50%]">
              <h2 className="text-center text-2xl font-bold lg:text-start xl:text-xl">Roof Protects includes System Protection Limited Warranty.</h2>
              <ul className="mx-auto w-[90%] list-disc text-sm marker:text-xl marker:text-[#CFCFCF] lg:text-lg [&>li>span]:font-bold [&>li]:mt-4">
                <li>
                  Overall Warranty Length - <span>Lifetime</span>
                </li>
                <li>
                  Products Included - <span>Shingles & all Owens Corning components</span>
                </li>
                <li>
                  TRU PROtection® Period - <span>First 50 years</span>
                </li>
                <li>
                  Materials Only Coverage - <span>After 50 years</span>
                </li>
                <li>
                  Blow off Coverage - <span>First 15 years</span>
                </li>
                <li>
                  StreakGuard® Algae Resistance - <span>First 25 years</span>
                </li>
                <li>
                  Coverage Period - <span>None</span>
                </li>
                <li>
                  Workmanship Coverage Period By Owens - <span>None</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <ModalRoofle handleClose={handleCloseModal} isOpen={isModalOpen} />
        </section>
      </div>
    </>
  )
}

import React, { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Autoplay } from 'swiper/modules'
import FormsLeads_FL from '../../components/FormsLeads/FormsLeads_FL'
import { ReferidosFL } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'

const Referidos_FL = () => {
  const [inputs, setInputs] = useState([{ id: 1, value: '' }])
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef(null)

  const addInput = () => {
    if (inputs.length < 5) {
      setInputs([...inputs, { id: inputs.length + 1, value: '' }])
    }
  }

  const handleInputChange = (index, newValue) => {
    const newInputs = inputs.map((input, i) => (i === index ? { ...input, value: newValue } : input))
    setInputs(newInputs)
  }

  const removeInput = (index) => {
    setInputs(inputs.filter((_, i) => i !== index))
  }

  const handleButtonClick = (index) => {
    setActiveIndex(index)
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index)
    }
  }
  const [images, setImages] = useState([])
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  useEffect(() => {
    const updateImages = () => {
      if (window.innerWidth < 768) {
        // Imágenes para mobile
        setImages([
          {
            url: 'https://windmar-website-cms.s3.amazonaws.com/LPs/ReferralsFL/IPHONE/REFER_FAMILY-28.webp',
          },
          {
            url: 'https://windmar-website-cms.s3.amazonaws.com/LPs/ReferralsFL/IPHONE/REFER_BARBER-32.webp',
          },
          {
            url: 'https://windmar-website-cms.s3.amazonaws.com/LPs/ReferralsFL/IPHONE/REFER_FRIENDS-30.webp',
          },
          {
            url: 'https://windmar-website-cms.s3.amazonaws.com/LPs/ReferralsFL/IPHONE/REFER_NEIGHBORS-31.webp',
          },
          {
            url: 'https://windmar-website-cms.s3.amazonaws.com/LPs/ReferralsFL/IPHONE/REFER_RELATIVES-29.webp',
          },
        ])
      } else {
        // Imágenes para desktop
        setImages([
          {
            url: 'https://windmar-website-cms.s3.amazonaws.com/LPs/ReferralsFL/MACBOOK+AIR/REFER_FAMILY-44.webp',
          },
          {
            url: 'https://windmar-website-cms.s3.amazonaws.com/LPs/ReferralsFL/MACBOOK+AIR/REFER_BARBER-48.webp',
          },
          {
            url: 'https://windmar-website-cms.s3.amazonaws.com/LPs/ReferralsFL/MACBOOK+AIR/REFER_FRIENDS-46.webp',
          },
          {
            url: 'https://windmar-website-cms.s3.amazonaws.com/LPs/ReferralsFL/MACBOOK+AIR/REFER_NEIGHBORS-47.webp',
          },
          {
            url: 'https://windmar-website-cms.s3.amazonaws.com/LPs/ReferralsFL/MACBOOK+AIR/REFER_RELATIVES-45.webp',
          },
        ])
      }
    }

    updateImages()

    window.addEventListener('resize', updateImages)

    return () => {
      window.removeEventListener('resize', updateImages)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <>
      <div
        className="h-auto w-full bg-cover bg-center md:flex md:items-center md:justify-center"
        style={{
          backgroundImage: `url('https://windmar-website-cms.s3.amazonaws.com/LPs/ReferralsFL/IPHONE/IMAGEN_Background_BANNER_PRINCIPAL.webp')`,
        }}
      >
        <div className="h-[50vh] w-full md:flex md:w-[50%] md:items-center md:justify-center">
          {images.length > 0 && (
            <>
              <div className="relative h-auto w-full md:w-[80%]">
                <img className="h-auto w-full object-cover object-center" src={images[activeImageIndex].url} alt={`Imagen ${activeImageIndex + 1}`} />
              </div>
            </>
          )}
        </div>

        <Swiper
          loop={true}
          ref={swiperRef}
          spaceBetween={50}
          slidesPerView={1}
          className="flex h-auto w-full items-center justify-center md:w-[50%]"
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          keyboard={{ enabled: true }}
          grabCursor={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
        >
          {inputs.map((input, index) => (
            <SwiperSlide key={input.id} className="flex items-center justify-center">
              <div className="flex w-full max-w-lg flex-col items-center justify-center md:my-[5vh]">
                <h2 className="text-[9px] text-[#FF9E18] md:text-[12px]">WINDMAR HOME</h2>
                <h1 className="text-center text-[16px] font-bold text-[#FF9E18] md:text-[22px]">REFERRAL PROGRAM</h1>
                <FormsLeads_FL
                  id="form_de_referidos_FL"
                  campaign={'ReferidosFL'}
                  estilos={ReferidosFL}
                  tittle=" Déjanos tus datos, nuestro equipo de expertos está listo para servirte."
                  phone={true}
                  email={true}
                  placeholder={true}
                  products={true}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="my-4 flex w-full flex-col items-center justify-center">
        <p className="text-[14px] text-black md:text-[32px]">
          <strong>Earn "$500" for each referral</strong> <br />
          who goes solar with WindMar
        </p>
        <div className="relative mt-[8vh] hidden md:flex md:w-full md:items-center md:justify-center md:bg-[url('https://windmar-website-cms.s3.amazonaws.com/LPs/ReferralsFL/MACBOOK+AIR/IMAGEN_background_REFERRALS-39.webp')] md:bg-cover md:bg-center md:bg-no-repeat">
          <section className="flex h-auto w-[25%] flex-col items-center justify-center">
            <div className="my-[4vh] flex h-[60px] w-[60px] items-center justify-center rounded-full border-[2px] border-[#0038A8]">
              <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gradient-to-r from-[#24378C] via-[#1F2E78] to-[#192059]">
                <p className="m-2 text-[24px] font-bold text-white">1.</p>
              </div>
            </div>
            <p className="text-center text-[22px] text-[#0038A8]">
              <strong>Earn $500 for each </strong>
              <br />
              referral that goes <br /> solar with WindMar
            </p>
          </section>
          <div className="mx-4 h-full border-r-2 border-[#0038A8]"></div>
          <section className="flex h-auto w-[25%] flex-col items-center justify-center">
            <div className="my-[4vh] flex h-[60px] w-[60px] items-center justify-center rounded-full border-[2px] border-[#0038A8]">
              <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gradient-to-r from-[#24378C] via-[#1F2E78] to-[#192059]">
                <p className="m-2 text-[24px] font-bold text-white">2.</p>
              </div>
            </div>
            <p className="text-center text-[22px] text-[#0038A8]">
              Receive your
              <strong>
                {' '}
                $500 <br /> Visa Gift Card{' '}
              </strong>
              in <br /> the email
            </p>
          </section>
          <div className="mx-4 h-full border-r-2 border-[#0038A8]"></div>
          <section className="flex h-auto w-[25%] flex-col items-center justify-center">
            <div className="my-[4vh] flex h-[60px] w-[60px] items-center justify-center rounded-full border-[2px] border-[#0038A8]">
              <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gradient-to-r from-[#24378C] via-[#1F2E78] to-[#192059]">
                <p className="m-2 text-[24px] font-bold text-white">3.</p>
              </div>
            </div>
            <p className="text-center text-[22px] text-[#0038A8]">
              Cover your initial solar <br /> payments{' '}
              <strong>
                with your <br /> referral bonuses!
              </strong>
            </p>
          </section>
        </div>
        <section className="md:bg[url-('https://windmar-website-cms.s3.amazonaws.com/LPs/ReferralsFL/MACBOOK+AIR/IMAGEN_background_REFERRALS-39.webp')] relative flex h-auto w-full items-center justify-center bg-[url('https://windmar-website-cms.s3.amazonaws.com/LPs/ReferralsFL/IPHONE/IMAGEN_background_REFERRALS-27.webp')] bg-cover bg-center bg-no-repeat py-[5vh] md:hidden md:py-[20vh]">
          <Swiper
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: '.swiper-next',
              prevEl: '.swiper-prev',
            }}
            modules={[Navigation]}
            className="relative flex w-[75%] items-center justify-center"
          >
            <SwiperSlide>
              <div className="relative mx-4 my-10 flex h-[105px] w-[250px] flex-col items-center justify-center rounded-[15px] bg-[#b9ccf3]">
                <div className="absolute -top-[35px] flex h-[60px] w-[60px] items-center justify-center rounded-full border-[2px] border-[#0038A8]">
                  <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gradient-to-r from-[#24378C] via-[#1F2E78] to-[#192059]">
                    <p className="m-2 text-[24px] font-bold text-white">1.</p>
                  </div>
                </div>
                <p className="mt-[35px] p-4 text-center text-[12px] text-[#0038A8]">
                  <strong>Earn $500 for each referral</strong> that goes solar with WindMar
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative mx-4 my-10 flex h-[105px] w-[250px] flex-col items-center justify-center rounded-[15px] bg-[#b9ccf3]">
                <div className="absolute -top-[35px] flex h-[60px] w-[60px] items-center justify-center rounded-full border-[2px] border-[#0038A8]">
                  <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gradient-to-r from-[#24378C] via-[#1F2E78] to-[#192059]">
                    <p className="m-2 text-[24px] font-bold text-white">2.</p>
                  </div>
                </div>
                <p className="mt-[35px] p-4 text-center text-[12px] text-[#0038A8]">
                  Receive your <strong>$500 visa Gift Card</strong> in the email
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative mx-4 my-10 flex h-[105px] w-[250px] flex-col items-center justify-center rounded-[15px] bg-[#b9ccf3]">
                <div className="absolute -top-[35px] flex h-[60px] w-[60px] items-center justify-center rounded-full border-[2px] border-[#0038A8]">
                  <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gradient-to-r from-[#24378C] via-[#1F2E78] to-[#192059]">
                    <p className="m-2 text-[24px] font-bold text-white">3.</p>
                  </div>
                </div>
                <p className="mt-[35px] p-4 text-center text-[12px] text-[#0038A8]">
                  Cover your initial solar payments <strong>with your referral bonuses!</strong>
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
          <button className="swiper-next absolute right-[5vh] top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 transform items-center justify-center rounded-full">
            <svg className="h-6 w-6" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.41931 15.2701L9.03931 8.65015L2.0293 1.64014"
                className="stroke-miterlimit-[10] stroke-linecap-round stroke-[#FF9E18] stroke-[2]"
              />
            </svg>
          </button>
          <button className="swiper-prev absolute left-[5vh] top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 transform items-center justify-center rounded-full">
            <svg className="h-6 w-6" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.07996 1.64014L2.45996 8.26013L9.46996 15.2701"
                className="stroke-miterlimit-10 stroke-linecap-round stroke-[#FF9E18] stroke-[2]"
              />
            </svg>
          </button>
        </section>
      </div>

      <div className="flex w-full flex-col items-center justify-center">
        <p className="text-[14px] font-bold md:hidden">Help us Change Lives</p>
        <iframe
          className="my-4 h-[200px] w-[350px] rounded-[15px] md:h-[600px] md:w-[1050px]"
          src="https://www.youtube.com/embed/4tCGNdaHMac"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <section className="flex w-[80%] justify-center">
          <p className="whitespace-nowrap text-[9px] italic text-[#868686] md:text-[32px]">Energy security is priceless</p>
          <div className="ml-2 mt-2 flex-1 border-t border-[#868686]"></div>
        </section>
      </div>

      <div className="flex w-full flex-col items-center justify-center">
        <div className="relative h-64 w-full sm:h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.0410901769647!2d-81.4376135247428!3d28.451450182344003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77f07340778a3%3A0x672fbb5ef0dc957d!2s6753%20Kingspointe%20Pkwy%2C%20Orlando%2C%20FL%2032819%2C%20USA!5e0!3m2!1sen!2sin!4v1693413736897!5m2!1sen!2sin"
            className="h-[600px] w-[450px] border-0 md:h-screen md:w-full"
            allowFullScreen=""
            loading="lazy"
            title="Google Map Location"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <section className="absolute inset-x-[20%] inset-y-[50%] flex h-[15vh] w-[60%] flex-col items-center justify-center rounded-[15px] bg-white p-4 md:inset-[30%] md:h-[30vh] md:w-[40%]">
            <h1 className="text-[10px] font-bold text-[#FF9E18] md:text-[22px]">OFFICE ADRESS</h1>
            <section className="flex flex-row items-start justify-start md:mt-4">
              <div className="flex-row items-center justify-center text-center text-[#0038A8]">
                <h1 className="text-[9px] font-bold md:text-[22px]">Orlando Office</h1>
                <p className="text-[9px] md:text-[18px]">
                  6753 Kingspointe <br /> Pkwy Ste. 111,
                  <br /> Orlando, FL 32819
                </p>
              </div>
              <div className="border-1 mx-[2vh] h-[8vh] border-r-[#0038A8] md:h-[15vh]"></div>
              <div className="flex-row items-center justify-center text-center text-[#0038A8]">
                <h1 className="text-[9px] font-bold md:text-[22px]">Office Number</h1>
                <p className="text-[10px] font-bold md:text-[18px]">(321)3342579</p>
              </div>
            </section>
          </section>
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          spaceBetween={30}
          direction="horizontal"
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          className="mySwiper absolute top-[20vh] flex w-full items-center justify-center md:top-[30vh]"
          breakpoints={{
            // Desktop
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            // Mobile
            640: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <div className="relative ml-[40px] flex h-auto w-[80%] flex-col items-center justify-center overflow-hidden rounded-[40px] bg-white shadow-lg">
              <div className="flex items-center justify-center">
                <img
                  src="https://windmar-website-cms.s3.amazonaws.com/LPs/ReferralsFL/IPHONE/KISSIMMEE_mapa-33.webp"
                  alt="Kissimmee"
                  className="w-full rounded-[20px] object-cover px-3 pb-20 pt-3"
                />
              </div>
              <div className="absolute bottom-0 flex flex-col items-center justify-center">
                <img
                  src="https://windmar-website-cms.s3.amazonaws.com/LPs/ReferralsFL/IPHONE/ICONO_mapa.webp"
                  alt="Location Icon"
                  className="h-14 w-10"
                />
                <p className="mt-2 text-[20px] font-bold text-[#0038A8]">KISSIMMEE, FL</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative ml-[40px] flex h-auto w-[80%] flex-col items-center justify-center overflow-hidden rounded-[40px] bg-white shadow-lg">
              <div className="flex items-center justify-center">
                <img
                  src="https://windmar-website-cms.s3.amazonaws.com/LPs/ReferralsFL/IPHONE/MIAMI_mapa-34.webp"
                  alt="Miami"
                  className="w-full rounded-[20px] object-cover px-3 pb-20 pt-3"
                />
              </div>
              <div className="absolute bottom-0 flex flex-col items-center justify-center">
                <img
                  src="https://windmar-website-cms.s3.amazonaws.com/LPs/ReferralsFL/IPHONE/ICONO_mapa.webp"
                  alt="Location Icon"
                  className="h-14 w-10"
                />
                <p className="mt-2 text-[20px] font-bold text-[#0038A8]">MIAMI, FL</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative ml-[40px] flex h-auto w-[80%] flex-col items-center justify-center overflow-hidden rounded-[40px] bg-white shadow-lg">
              <div className="flex items-center justify-center">
                <img
                  src="https://windmar-website-cms.s3.amazonaws.com/LPs/ReferralsFL/IPHONE/PORT_ST_LUCIE_mapa-35.webp"
                  alt="Port St. Lucie"
                  className="w-full rounded-[20px] object-cover px-3 pb-20 pt-3"
                />
              </div>
              <div className="absolute bottom-0 flex flex-col items-center justify-center">
                <img
                  src="https://windmar-website-cms.s3.amazonaws.com/LPs/ReferralsFL/IPHONE/ICONO_mapa.webp"
                  alt="Location Icon"
                  className="h-14 w-10"
                />
                <p className="mt-2 text-[20px] font-bold text-[#0038A8]">PORT ST LUCIE, FL</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mb-[25vh] md:mb-[35vh]"></div>
    </>
  )
}

export default Referidos_FL

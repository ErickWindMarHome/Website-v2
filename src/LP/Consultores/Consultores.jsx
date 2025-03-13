import ButtonTel from '../../components/ButtonTel/ButtonTel'
import { promociones, testimoniales } from '../../utils/ConsultoresData/ConsultoresData'
import { SiWhatsapp } from 'react-icons/si'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { FaCircleCheck, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa6'
import { IoStar } from 'react-icons/io5'
import { FaQuoteLeft } from 'react-icons/fa'
import { IoMenu, IoCloseSharp } from 'react-icons/io5'
import { IoCallOutline } from 'react-icons/io5'
import { FiArrowDownRight } from 'react-icons/fi'
import { useEffect, useRef, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { getSalesTeamsById } from '../../hooks/fetchDataApi'
import { useParams } from 'react-router-dom'
import FormsLeads_PR_RHF from '../../components/FormsLeads/FormsLeads_reactHookForm/Formsleads_PR_RHF'
import { LP_Consultores } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './consultores.css'

function Consultores() {
  const [menu, setMenu] = useState(false)
  const [dataSales, setDataSales] = useState()
  const [activeLink, setActiveLink] = useState('inicio') // Estado para el ítem activo
  const { id } = useParams()

  // Referencias a las secciones
  const inicioRef = useRef(null)
  const sobreWindmarRef = useRef(null)
  const porQueWindmarRef = useRef(null)
  const promocionesRef = useRef(null)
  const testimonialesRef = useRef(null)
  const contactanosRef = useRef(null)

  const getSalesTeams = useMutation({
    mutationFn: (data) => getSalesTeamsById(data),
    onSuccess: (response) => {
      console.log('Respuesta:', response)
      if (response.data.Sales_Role === 'Trainee') {
        response.data.Sales_Role = 'Consultor'
      }
      console.log('data tratada', response.data)
      setDataSales(response.data)
    },
    onError: (error) => {
      console.error('error al enviar el formulario', error)
    },
  })

  const toggleMenu = () => {
    setMenu(!menu)
  }

  useEffect(() => {
    const peticion = async () => {
      try {
        const response = await getSalesTeams.mutateAsync(id)
        console.log('Respuesta exitosa:', response)
      } catch (error) {
        console.error('Error al enviar el formulario:', error)
      }
    }
    peticion()
  }, [])

  // Configuración del Intersection Observer
  useEffect(() => {
    const sections = [
      { id: 'inicio', ref: inicioRef },
      { id: 'sobre-windmar', ref: sobreWindmarRef },
      { id: 'por-que-windmar', ref: porQueWindmarRef },
      { id: 'promociones', ref: promocionesRef },
      { id: 'testimoniales', ref: testimonialesRef },
      { id: 'contactanos', ref: contactanosRef },
    ]

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Ajusta este valor según sea necesario
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id) // Actualiza el ítem activo
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current)
      }
    })

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current)
        }
      })
    }
  }, [])

  const handleSmoothScroll = (e) => {
    e.preventDefault()
    const targetId = e.currentTarget.getAttribute('href').slice(1)
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      const header = document.querySelector('header')
      const headerHeight = header ? header.offsetHeight : 0
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })

      setActiveLink(targetId)
    }
  }

  const FormatName = () => {
    const name = dataSales?.First_Name
    const lastName = dataSales?.Last_Name

    if (lastName) {
      return `${name?.split(' ', 1)} ${lastName?.split(' ', 1)}`
    } else {
      return name
    }
  }

  const FormatNumber = () => {
    const number = dataSales?.Phone_Number
    const part1 = number?.slice(0, 3)
    const part2 = number?.slice(3, 6)
    const part3 = number?.slice(6, 10)

    if (part1 && part2 && part3 && !dataSales?.Inactive) {
      return `(${part1}) ${part2}-${part3}`
    }
    return '(787) 123-4567'
  }

  const Form = () => (
    <FormsLeads_PR_RHF
      id={`Consultor-${id}-${dataSales?.First_Name} ${dataSales?.Last_Name}`}
      campaign={`LP-Consultor-${id}-${dataSales?.First_Name} ${dataSales?.Last_Name}`}
      estilos={LP_Consultores}
      phone={true}
      email={true}
      placeholder={true}
      products={true}
      sales_id={id}
    />
  )

  return (
    <>
      <div className="fixed z-50 w-screen bg-[#f2f5fa]">
        <header className="mx-auto w-full p-4 lg:w-[86%]">
          <div className="lg:hidden">
            <div className="flex w-full items-center justify-between">
              <div onClick={toggleMenu} className="cursor-pointer">
                {!menu ? <IoMenu className="text-4xl" /> : <IoCloseSharp className="text-4xl" />}
              </div>
              <img
                className="w-[20vw] max-w-[100px] flex-1 flex-grow"
                src="https://windmar-website-cms.s3.amazonaws.com/Components/Logo/Logo-PR.webp"
                alt="Logo windmar"
              />
              <a href={`tel:${FormatNumber()}`}>
                <IoCallOutline className="rounded-full bg-[#0038A8] p-2 text-5xl text-white" />
              </a>
            </div>
            {menu && (
              <ul className="mt-4 flex flex-col gap-5 py-5 pb-10 [&>li]:cursor-pointer">
                <li>
                  <a href="#inicio" onClick={handleSmoothScroll} className={activeLink === 'inicio' ? 'text-[#FF9E18]' : ''}>
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#sobre-windmar" onClick={handleSmoothScroll} className={activeLink === 'sobre-windmar' ? 'text-[#FF9E18]' : ''}>
                    Sobre Windmar
                  </a>
                </li>
                <li>
                  <a href="#por-que-windmar" onClick={handleSmoothScroll} className={activeLink === 'por-que-windmar' ? 'text-[#FF9E18]' : ''}>
                    ¿Por que Windmar?
                  </a>
                </li>
                <li>
                  <a href="#promociones" onClick={handleSmoothScroll} className={activeLink === 'promociones' ? 'text-[#FF9E18]' : ''}>
                    Promociones
                  </a>
                </li>
                <li>
                  <a href="#testimoniales" onClick={handleSmoothScroll} className={activeLink === 'testimoniales' ? 'text-[#FF9E18]' : ''}>
                    Testimoniales
                  </a>
                </li>
                <li>
                  <a href="#contactanos" onClick={handleSmoothScroll} className={activeLink === 'contactanos' ? 'text-[#FF9E18]' : ''}>
                    Contáctanos
                  </a>
                </li>
              </ul>
            )}
          </div>
          <div className="hidden w-full items-center justify-between gap-3 lg:flex">
            <img
              className="w-[20vw] max-w-[125px] 2xl:max-w-[150px]"
              src="https://windmar-website-cms.s3.amazonaws.com/Components/Logo/Logo-PR.webp"
              alt="Logo windmar"
            />
            <ul className="mt-1 flex flex-grow justify-center gap-3 text-center lg:text-sm xl:text-base 2xl:gap-8 2xl:text-lg [&>li]:cursor-pointer">
              <li>
                <a href="#inicio" onClick={handleSmoothScroll} className={activeLink === 'inicio' ? 'text-[#FF9E18]' : ''}>
                  Inicio
                </a>
              </li>
              <li>
                <a href="#sobre-windmar" onClick={handleSmoothScroll} className={activeLink === 'sobre-windmar' ? 'text-[#FF9E18]' : ''}>
                  Sobre Windmar
                </a>
              </li>
              <li>
                <a href="#por-que-windmar" onClick={handleSmoothScroll} className={activeLink === 'por-que-windmar' ? 'text-[#FF9E18]' : ''}>
                  ¿Por que Windmar?
                </a>
              </li>
              <li>
                <a href="#promociones" onClick={handleSmoothScroll} className={activeLink === 'promociones' ? 'text-[#FF9E18]' : ''}>
                  Promociones
                </a>
              </li>
              <li>
                <a href="#testimoniales" onClick={handleSmoothScroll} className={activeLink === 'testimoniales' ? 'text-[#FF9E18]' : ''}>
                  Testimoniales
                </a>
              </li>
              <li>
                <a href="#contactanos" onClick={handleSmoothScroll} className={activeLink === 'contactanos' ? 'text-[#FF9E18]' : ''}>
                  Contáctanos
                </a>
              </li>
            </ul>
            <ButtonTel
              number={FormatNumber()}
              className={
                'flex w-fit items-center justify-center gap-5 rounded-full bg-[#0038A8] px-5 py-3 text-sm font-bold text-white xl:text-base 2xl:text-xl'
              }
            />
          </div>
        </header>
      </div>
      <section id="inicio" ref={inicioRef} className="relative mt-16 scroll-mt-[100px] bg-[#f2f5fa] lg:mt-0 lg:h-screen xl:mt-28 2xl:mt-10">
        <img
          className="rotate-animation-sol absolute -right-[320px] hidden opacity-50 lg:top-[5%] lg:block lg:w-[47%] xl:w-[50%] 2xl:top-[15%] 2xl:w-[35%]"
          src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Consultores/Sol.svg"
          alt="sol"
        />
        <div className="mx-auto grid grid-cols-1 py-6 lg:h-full lg:w-[90%] lg:grid-cols-2 lg:place-items-center">
          <div>
            <section className="mt-5">
              <div className="gap mx-auto w-[90%]">
                <h1 className="flex flex-col text-3xl font-semibold text-[#0038A8] lg:text-5xl">
                  ¿Estás listo <strong className="text-[#FF9E18]">para el cambio?</strong>
                </h1>
                <h1 className="mt-3 text-3xl font-bold text-[#0038A8] xl:mt-5 xl:text-5xl">
                  {FormatName() || dataSales?.Name} <span className="font-semibold text-[#FF9E18]"> - {dataSales?.Sales_Role} de Windmar Home</span>
                </h1>

                <p className="my-6 xl:text-lg">
                  Soy <strong>{FormatName()?.split(' ', 1) || dataSales?.Name?.split(' ', 1)}</strong>, tu consultor energético. Me apasiona proveer
                  soluciones completas para hogares en Puerto Rico. Personalmente he apoyado a transformar a más de <strong>25</strong> hogares
                  energizados y protegidos.
                </p>
              </div>
              <div className="mx-auto my-3 flex w-[95%] flex-col gap-5 lg:flex-row">
                <ButtonTel
                  number={FormatNumber()}
                  className={
                    'flex w-full items-center justify-center gap-5 rounded-full bg-[#0038A8] px-10 py-3 text-xl font-bold text-white lg:px-4 lg:text-lg'
                  }
                />
                <a
                  href={`https://wa.me/+1${dataSales?.Inactive ? '7871234567' : dataSales?.Phone_Number}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-3 rounded-full border border-[#FF9E18] bg-white px-6 py-2.5 text-xl text-[#FF9E18] lg:px-4 lg:text-sm"
                >
                  <SiWhatsapp className="lg:text-3xl" /> Escríbeme por WhatsApp
                </a>
              </div>
            </section>
            <section className="my-9 bg-white py-8 shadow-2xl lg:w-[110%] lg:-translate-x-16 lg:rounded-r-3xl 2xl:-translate-x-28">
              <div className="mx-auto grid w-[90%] grid-cols-3 place-items-center gap-2 lg:mx-0 lg:ml-auto lg:mr-5 lg:w-[90%] lg:gap-4">
                <div className="flex h-full flex-col justify-center text-center lg:gap-2">
                  <h1 className="text-2xl font-bold text-[#ff9e18] sm:text-3xl md:text-6xl lg:text-4xl">60,000+</h1>
                  <p className="text-xs text-[#B6B6B6] sm:text-base md:text-lg lg:text-lg">Instalaciones Solares Completadas</p>
                </div>
                <div className="flex h-full flex-col items-center border-x border-[#B6B6B6] px-2 text-center lg:gap-2">
                  <h1 className="text-2xl font-bold text-[#ff9e18] sm:text-5xl md:text-6xl lg:text-4xl">25+</h1>
                  <p className="text-xs text-[#B6B6B6] sm:text-base md:text-lg lg:text-lg">Años Energizando a Puerto Rico</p>
                </div>
                <div className="flex h-full flex-col text-center lg:gap-2">
                  <h1 className="text-2xl font-bold text-[#ff9e18] sm:text-5xl md:text-6xl lg:text-4xl">24/7</h1>
                  <p className="text-xs text-[#B6B6B6] sm:text-base md:text-lg lg:text-lg">Servicio Siempre Disponible</p>
                </div>
              </div>
            </section>
          </div>
          <section className="relative mx-auto my-10 w-[90%] rounded-3xl bg-white px-2 py-4 shadow-xl lg:my-auto">
            <img
              className="rotate-animation absolute -top-16 right-0 w-32 lg:hidden"
              src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Consultores/Flecha.svg"
              alt="flecha"
            />
            <div className="mt-5 text-center lg:mx-auto lg:w-[90%]">
              <h1 className="text-2xl font-bold text-[#1D429B] xl:text-4xl">Cotiza hoy</h1>
              <p className="mt-5 xl:text-lg">Completa este breve formulario para recibir más información y una consulta gratuita.</p>
            </div>
            <div className="mx-auto w-[95%]">{Form()}</div>
          </section>
        </div>
      </section>
      <section className="relative lg:py-20" id="sobre-windmar" ref={sobreWindmarRef}>
        <img
          className="rotate-animation absolute right-0 hidden lg:-top-24 lg:block lg:w-52 xl:-top-28 xl:w-60"
          src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Consultores/Flecha.svg"
          alt="flecha"
        />
        <div className="mx-auto mt-10 w-[90%] text-center lg:my-20">
          <h1 className="mx-auto text-3xl text-[#0038A8] lg:w-[60%] lg:text-5xl xl:w-[70%]">
            Soluciones <strong>completas</strong> para tu hogar.
          </h1>
          <p className="mb-10 mt-5 lg:mx-auto lg:w-[70%] lg:text-base xl:text-lg">
            Desde energía solar hasta baterías y protección para tu techo, en WindMar Home tenemos todo lo que necesitas para vivir con más
            tranquilidad y menos gastos. Descubre cómo cada servicio puede hacer tu hogar más eficiente y resiliente.
          </p>
        </div>
        <div className="grid grid-cols-1 place-items-center gap-5 lg:mx-auto lg:w-[90%] lg:grid-cols-3 xl:w-[80%] 2xl:w-[67%]">
          <div className="group relative h-[310px] w-[340px] overflow-hidden rounded-3xl bg-[url('https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Consultores/Sellado+Card_2LP_Consultores.webp')] bg-cover bg-center lg:h-[280px] lg:w-[300px] xl:h-[320px] xl:w-[330px] 2xl:h-[330px] 2xl:w-[340px]">
            <div className="absolute inset-0 group-hover:bg-gradient-to-t group-hover:from-black group-hover:to-transparent"></div>
            <FiArrowDownRight className="absolute right-2 top-2 rounded-full bg-[#FF9E18] text-5xl text-white transition-transform duration-300 group-hover:-rotate-90" />
            <div className="absolute inset-0 ml-5 flex h-full translate-y-[270px] flex-col items-start pb-3 text-2xl font-bold text-white transition-all duration-300 group-hover:translate-y-44 lg:translate-y-[240px] lg:group-hover:translate-y-36 xl:translate-y-[280px] xl:group-hover:translate-y-44 2xl:translate-y-[290px] 2xl:group-hover:translate-y-48">
              <h1>Sellado de Techo</h1>
              <p className="mt-2 w-[95%] text-sm font-normal">
                Protege tu hogar con un sellado de techo en silicón 100% de alta calidad. Un proceso completo que repara, impermeabiliza y extiende la
                vida útil de tu techo.
              </p>
            </div>
          </div>
          <div className="group relative h-[310px] w-[340px] overflow-hidden rounded-3xl bg-[url('https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Consultores/Energi%E2%95%A0%C3%BCa+card_1LP_Consultores.webp')] bg-cover bg-center lg:h-[280px] lg:w-[300px] lg:translate-y-20 xl:h-[320px] xl:w-[330px] 2xl:h-[330px] 2xl:w-[340px]">
            <div className="absolute inset-0 group-hover:bg-gradient-to-t group-hover:from-black group-hover:to-transparent"></div>
            <FiArrowDownRight className="absolute right-2 top-2 rounded-full bg-[#FF9E18] text-5xl text-white transition-transform duration-300 group-hover:-rotate-90" />
            <div className="absolute inset-0 ml-5 flex h-full translate-y-[235px] flex-col items-start pb-3 text-2xl font-bold text-white transition-all duration-300 group-hover:translate-y-32 lg:translate-y-[205px] lg:group-hover:translate-y-28 xl:translate-y-[280px] xl:group-hover:translate-y-40 2xl:translate-y-[260px] 2xl:group-hover:translate-y-40">
              <h1>Energía Solar & Baterías Tesla</h1>
              <p className="mt-2 w-[95%] text-sm font-normal">
                Reduce tu factura y gana independencia energética con tu propio sistema solar personalizado y la nueva batería Tesla Powerwall 3.
              </p>
            </div>
          </div>
          <div className="group relative h-[310px] w-[340px] overflow-hidden rounded-3xl bg-[url('https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Consultores/Bateri%E2%95%A0%C3%BCas+card_1LP_Consultores.webp')] bg-cover bg-center lg:h-[280px] lg:w-[300px] xl:h-[320px] xl:w-[330px] 2xl:h-[330px] 2xl:w-[340px]">
            <div className="absolute inset-0 group-hover:bg-gradient-to-t group-hover:from-black group-hover:to-transparent"></div>
            <FiArrowDownRight className="absolute right-2 top-2 rounded-full bg-[#FF9E18] text-5xl text-white transition-transform duration-300 group-hover:-rotate-90" />
            <div className="absolute inset-0 ml-5 flex h-full translate-y-[240px] flex-col items-start pb-3 text-2xl font-bold text-white transition-all duration-300 group-hover:translate-y-36 lg:translate-y-[210px] lg:group-hover:translate-y-28 xl:translate-y-[245px] xl:group-hover:translate-y-36 2xl:translate-y-[255px] 2xl:group-hover:translate-y-40">
              <h1>Baterías para Apartamentos</h1>
              <p className="mt-2 w-[95%] text-sm font-normal">
                Energiza tu apartamento y dispositivos con las baterías Anker, manteniendo tu hogar y enseres conectados.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto my-20 max-w-[100%] overflow-hidden">
        <div className="animate-infinite-scroll flex gap-56 whitespace-nowrap">
          <img src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Consultores/Logos.svg" alt="logos" className="inline-block w-full" />
          <img src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Consultores/Logos.svg" alt="logos" className="inline-block w-full" />
        </div>
      </section>

      <section
        id="por-que-windmar"
        ref={porQueWindmarRef}
        className='my-10 w-full bg-[url("https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Consultores/Banner+Web_3LP_Consultores.webp")] bg-cover bg-center lg:py-10'
      >
        <div className="my-20 place-items-center text-white lg:mx-auto lg:grid lg:w-[95%] lg:grid-cols-2 lg:gap-5 xl:w-[85%]">
          <div className="mx-auto w-[90%] overflow-hidden rounded-3xl lg:h-[300px] lg:w-[450px] xl:h-[350px] xl:w-[500px] 2xl:h-[420px] 2xl:w-[90%]">
            <video
              className="h-full w-full object-cover"
              src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Consultores/WH_Guiness_50K_BateriasTesla.mp4"
              controls
            ></video>
          </div>
          <div className="mx-auto mt-10 w-[90%] lg:mt-0">
            <h1 className="text-2xl font-semibold lg:text-3xl">
              ¿Por qué escoger a <strong>Windmar Home?</strong>
            </h1>
            <p className="mt-3 lg:text-base">
              Somos la empresa solar líder en Puerto Rico, brindando calidad, confianza y servicio excepcional en cada instalación.
            </p>
            <div className="mt-5 flex flex-col gap-5">
              <div className="flex items-center justify-between gap-3">
                <FaCircleCheck className="size-7 min-w-7 text-[#FF9E18] lg:size-6" />
                <h1 className="flex-grow">Récord Guinness por instalar 50,000 baterías Tesla.</h1>
              </div>
              <div className="flex items-center justify-between gap-3">
                <FaCircleCheck className="size-7 min-w-7 text-[#FF9E18] lg:size-6" />
                <h1 className="flex-grow">Servicio 24/7 para brindarte apoyo cuando más lo necesitas.</h1>
              </div>
              <div className="flex items-center justify-between gap-3">
                <FaCircleCheck className="size-7 min-w-7 text-[#FF9E18] lg:size-6" />
                <h1 className="flex-grow">Más de 300 brigadas certificadas listas para tu instalación y mantenimiento.</h1>
              </div>
            </div>
            <div className="mt-3 gap-2 lg:mt-3 lg:flex">
              <a
                href="#contactanos"
                className="mt-3 flex w-full items-center justify-center rounded-full border border-[#FF9E18] bg-transparent px-6 py-2.5 text-center text-xl font-bold text-white transition duration-300 ease-in-out hover:bg-[#0037AB] hover:border-[#0037AB] lg:mt-2 lg:rounded-xl lg:text-base"
                onClick={handleSmoothScroll}
              >
                Conoce Más
              </a>
              <a
                href="https://app.smartsheet.com/b/form/770cbf1259ad472b8908e85b0b07236a"
                target="_blank"
                className="mt-3 flex w-full items-center justify-center gap-3 rounded-full bg-[#FF9E18] px-6 py-2.5 text-center text-xl font-bold text-white transition duration-300 ease-in-out hover:bg-[#0037AB] lg:mt-2 lg:rounded-xl lg:text-lg"
                rel="noreferrer"
              >
                Windmar Open House
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="promociones" ref={promocionesRef} className="mx-auto w-[90%] py-10 lg:pt-20">
        <h1 className="text-3xl font-bold text-[#0038A8] lg:text-5xl">Promociones</h1>
        <div className="lg:flex lg:justify-between">
          <p className="mt-2 lg:mt-10 lg:w-[55%] lg:text-base xl:text-lg">
            Ofertas que brillan como el sol: ahorra más, paga menos y disfruta de energía de la buena. ¡Aprovecha antes de que se acaben!{' '}
          </p>
          <a
            href="#contactanos"
            onClick={handleSmoothScroll}
            className="mt-5 flex w-full items-center justify-center gap-3 rounded-full border bg-[#0037AB] px-6 py-2.5 text-center text-xl font-bold text-white transition duration-300 ease-in-out hover:bg-[#FF9E18] lg:my-auto lg:w-[20%] lg:rounded-lg"
          >
            Conoce Más
          </a>
        </div>
        <div className="mb-5 mt-10 lg:mx-auto">
          <Swiper
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
            spaceBetween={35}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
                initialSlide: 0,
              },
              1024: {
                slidesPerView: 2.5,
                initialSlide: 0,
              },
            }}
          >
            {promociones.map((promo, index) => (
              <SwiperSlide key={index} className="max-w-[700px]">
                <img className="mx-auto mb-10 w-full rounded-3xl" src={promo} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section id="testimoniales" ref={testimonialesRef} className="flex w-full items-center justify-center bg-[#ECECEC] lg:h-screen">
        <div className="mx-auto w-[90%]">
          <h1 className="mt-10 text-3xl font-bold text-[#0038A8] lg:mt-0 lg:text-5xl">Testimoniales</h1>
          <div className="lg:flex lg:justify-between">
            <p className="mt-2 lg:mt-5 lg:w-[55%] lg:text-base xl:text-lg">
              Clientes felices, menos facturas y energía de la buena todos los días. Descubre cómo mejoraron su hogar con energía solar, sellado de
              techo, ¡y más!
            </p>
            <a
              href="#contactanos"
              onClick={handleSmoothScroll}
              className="mt-5 flex w-full items-center justify-center gap-3 rounded-full border bg-[#0037AB] px-6 py-2.5 text-center text-xl font-bold text-white transition duration-300 ease-in-out hover:bg-[#FF9E18] lg:my-auto lg:w-[20%] lg:rounded-lg"
              rel="noreferrer"
            >
              Conoce Más
            </a>
          </div>
          <div className="mb-5 mt-7">
            <Swiper
              modules={[Pagination]}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                1024: {
                  slidesPerView: 2,
                  initialSlide: 0,
                },
                1280: {
                  slidesPerView: 2.7,
                  initialSlide: 0,
                  pagination: false,
                },
                1536: {
                  slidesPerView: 3,
                  initialSlide: 0,
                  pagination: false,
                },
              }}
              spaceBetween={20}
            >
              {testimoniales.map((testimonio, index) => (
                <SwiperSlide className="mx-auto mb-10 lg:max-w-[400px] 2xl:max-w-[520px]" key={index}>
                  <div className="h-[420px] w-full rounded-3xl bg-white p-5 sm:mx-auto sm:w-[70%] md:h-[490px] lg:h-[500px] lg:w-[100%] xl:py-10 2xl:h-[580px]">
                    <div className="mx-auto h-[200px] w-[100%] overflow-hidden rounded-3xl md:h-[250px] lg:h-[250px] 2xl:h-[300px]">
                      <video className="h-full w-full object-cover" src={testimonio.video} controls title="WH_Guiness_50K_BateriasTesla.mp4" />
                    </div>

                    <div className="mt-5 flex items-center">
                      <div className="flex flex-grow flex-col gap-1">
                        <h1 className="text-xl font-bold text-[#0038A8] md:text-3xl lg:text-2xl 2xl:text-3xl">{testimonio.nombre}</h1>
                        <p className="text-sm text-[#8F8F8F] md:text-lg lg:text-base 2xl:text-lg">{testimonio.lugar}</p>
                      </div>
                      <div className="flex text-xl text-[#FF9E18] 2xl:text-2xl">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-center gap-5">
                      <FaQuoteLeft className="h-fit max-w-[100px] text-6xl text-[#FF9E18] lg:text-[30px]" />
                      <p
                        className="w-[90%] text-sm text-[#8F8F8F] md:text-base 2xl:text-xl"
                        dangerouslySetInnerHTML={{ __html: testimonio.testimonio }}
                      ></p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      <section
        id="contactanos"
        ref={contactanosRef}
        className="mx-auto my-10 w-[90%] lg:my-0 lg:grid lg:w-[93%] lg:grid-cols-2 lg:place-items-center lg:gap-5 lg:py-28 2xl:gap-20"
      >
        <div className="lg:w-[95%] xl:w-[85%]">
          <div>
            <h1 className="text-2xl font-bold text-[#0038A8] lg:text-4xl xl:text-5xl">Contáctanos</h1>
            <p className="lg:mt-3 xl:text-xl">
              Siempre disponibles para ti. Recibe el mejor servicio y asesoría experta cuando más lo necesites. ¡Contáctanos hoy!
            </p>
          </div>
          <div className="mt-5 lg:mt-10">
            <h1 className="text-3xl font-bold text-[#FF9E18] xl:text-4xl 2xl:text-5xl">{FormatName() || dataSales?.Name}</h1>
            <p className="text-xl font-semibold xl:text-2xl">{dataSales?.Sales_Role} de Windmar Home</p>
          </div>
          <div className="lg:hidden">{Form()}</div>
          <div className="flex flex-col gap-3">
            <div className="mt-5 flex flex-col items-center gap-2 lg:flex-row lg:gap-3 xl:gap-5">
              <ButtonTel
                className="flex w-full items-center justify-center gap-3 rounded-full border border-[#8F8F8F] bg-white px-2 py-2.5 text-xl text-[#8F8F8F] lg:w-fit lg:py-2 lg:text-lg xl:w-[60%] 2xl:w-fit 2xl:px-12"
                number={FormatNumber()}
              />

              <a
                className="flex w-full items-center justify-center gap-3 rounded-full border border-[#8F8F8F] bg-white px-6 py-2.5 text-[#8F8F8F] lg:w-fit lg:px-5 lg:py-[10px] lg:text-sm xl:px-12 xl:py-[3px] 2xl:py-2.5"
                href={`https://wa.me/+1${dataSales?.Inactive ? '7871234567' : dataSales?.Phone_Number}`}
                target="_blank"
                rel="noreferrer"
              >
                <SiWhatsapp className="text-2xl" />
                Escríbeme por WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="hidden max-w-[85%] lg:block xl:w-[75%]">{Form()}</div>
      </section>
      <footer className="w-full bg-[#0037a5] pt-10 text-white">
        <div className="mx-auto lg:grid lg:w-[95%] lg:grid-cols-3">
          <div className="mx-auto flex flex-col items-center lg:w-[70%] lg:items-start lg:justify-center lg:pl-8">
            <img
              className="w-[40%] md:w-[20%] lg:w-[40%]"
              src="https://windmar-website-cms.s3.amazonaws.com/Layouts/General/Footer/logo_pr-blanco.webp"
              alt="logo windmar"
            />
            <h1 className="w-[90%] text-center lg:text-start">
              Somos la compañía local más grande y con más experiencia en la industria de energía renovable.
            </h1>
            <div className="mx-auto my-5 grid w-[70%] grid-cols-4 place-items-center gap-5 text-3xl lg:mx-0 lg:place-items-start xl:text-4xl">
              <a href="https://www.instagram.com/windmarhome/?hl=en" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/windmarhome" target="_blank" rel="noreferrer">
                <FaFacebook />
              </a>
              <a href="https://www.linkedin.com/company/windmar-home/" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://www.youtube.com/channel/UCvYI6OJNFiS5JxQNVxNLQVA/about" target="_blank" rel="noreferrer">
                <FaYoutube />
              </a>
            </div>
          </div>
          <div className="mx-auto mt-5 grid w-[90%] grid-cols-2">
            <div>
              <h1 className="font-bold">NAVEGACIÓN</h1>
              <ul className="mt-2 flex flex-col [&>li]:cursor-pointer [&>li]:text-sm">
                <li>
                  <a href="#inicio" onClick={handleSmoothScroll}>
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#sobre-windmar" onClick={handleSmoothScroll}>
                    Sobre Windmar
                  </a>
                </li>
                <li>
                  <a href="#por-que-windmar" onClick={handleSmoothScroll}>
                    ¿Por que Windmar?
                  </a>
                </li>
                <li>
                  <a href="#promociones" onClick={handleSmoothScroll}>
                    Promociones
                  </a>
                </li>
                <li>
                  <a href="#testimoniales" onClick={handleSmoothScroll}>
                    Testimoniales
                  </a>
                </li>
                <li>
                  <a href="#contactanos" onClick={handleSmoothScroll}>
                    Contáctanos
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold">OFICINAS</h1>
              <ul className="mt-4 flex flex-col gap-2 [&>li]:flex [&>li]:cursor-pointer [&>li]:gap-1 [&>li]:text-nowrap [&>li]:text-sm">
                <li>
                  <p>Roosevelt |</p>
                  <a href="https://maps.app.goo.gl/3DAqjhTvQLecPK84A" className="underline" target="_blank" rel="noreferrer">
                    Direcciones
                  </a>
                </li>
                <li>
                  <p>Hatillo |</p>
                  <a href="https://maps.app.goo.gl/JFA9FwaikJzc2XZR9" className="underline" target="_blank" rel="noreferrer">
                    Direcciones
                  </a>
                </li>
                <li>
                  <p>Mayagüez |</p>
                  <a href="https://maps.app.goo.gl/UMUgKGyHeHtscPm46" className="underline" target="_blank" rel="noreferrer">
                    Direcciones
                  </a>
                </li>
                <li>
                  <p>Sabana Seca |</p>
                  <a href="https://maps.app.goo.gl/VJYPRjBsd7ZgZLBm9" className="underline" target="_blank" rel="noreferrer">
                    Direcciones
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto mt-5 w-[90%] lg:pr-8">
            <h1 className="font-bold">PROMOCIONES Y NOTICIAS</h1>
            <p className="mt-3">Recibe ofertas exclusivas y tips de energía de la buena. ¡Suscríbete hoy!</p>
            <div className="mb-10 mt-3">
              <input
                type="email"
                placeholder="Correo Electrónico"
                className="peer block w-full cursor-pointer rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-bold text-[#8D8D8D] [appearance:textfield] focus:outline-none focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
              <a
                href="#contactanos"
                onClick={handleSmoothScroll}
                className="mt-3 flex w-full items-center justify-center gap-3 rounded-full bg-[#FF9E18] px-6 py-2.5 text-center text-2xl font-bold text-white lg:mt-2 lg:rounded-xl lg:text-lg"
              >
                Suscríbeme
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-[#00236A] py-5 lg:col-span-3 lg:flex-row lg:gap-2">
          <h1>Windmar Home © 2025. Derechos Reservados.</h1>
          <a href="/pr/politica-de-privacidad" className="hidden underline lg:block">
            Política de Privacidad
          </a>
          <a href="/pr/politica-de-privacidad" className="block underline lg:hidden">
            (Política de Privacidad).
          </a>
        </div>
      </footer>
    </>
  )
}

export default Consultores

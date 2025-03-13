import { useQuery } from '@tanstack/react-query'
import { useEffect, useRef, useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { getBaterias } from '../../hooks/fetchDataApi'
import useTitle from '../../hooks/useTitle'
import FormsLeads_PR_RHF from '../../components/FormsLeads/FormsLeads_reactHookForm/Formsleads_PR_RHF'
import { LP_CMBA } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'
import CarrouselCMBA from '../../components/CarrouselCMBA/CarrouselCMBA'
import Header from '../../layouts/General/Header/Header'
import Footer from '../../layouts/General/Footer/Footer'

function RoadTo50K() {
  useTitle('Promoción Road to 50K - WindMar')
  const counterRef = useRef(null)
  const [counter, setCounter] = useState(0)
  const { data: baterias } = useQuery({
    queryKey: ['baterias'],
    queryFn: getBaterias,
  })

  useEffect(() => {
    const bateriasActual = baterias?.data?.totalBatteries
    const checkScroll = () => {
      if (!counterRef.current) return

      const rect = counterRef.current.getBoundingClientRect()
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        const intervalId = setInterval(() => {
          setCounter((prevCounter) => {
            if (prevCounter < bateriasActual) {
              return prevCounter + 72
            } else {
              clearInterval(intervalId)
              return prevCounter
            }
          })
        }, 0.1)
      }
    }

    window.addEventListener('scroll', checkScroll)
    return () => window.removeEventListener('scroll', checkScroll)
  }, [baterias])

  const handleSmoothScroll = (e) => {
    e.preventDefault()
    const targetId = e.currentTarget.getAttribute('href').slice(1) // Obtiene el id del target (sin el #)
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', // Animación suave
        block: 'start', // Posiciona la sección al inicio de la ventana
      })
    }
  }

  return (
    <>
      <Header />
      <div className="flex w-full flex-col items-center justify-center">
        <section className="mt-20 flex h-[900px] w-full flex-col items-center justify-start bg-[url('https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoadTo50K/Banner_PW3_Mobile.webp')] bg-cover md:h-screen md:items-center md:bg-[url('https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoadTo50K/Banner_PW3.webp')] md:bg-center">
          <div className="mt-20 flex h-full w-[80%] flex-col md:mt-0 md:items-start md:justify-center">
            <h1 className="flex flex-col text-center text-[30px] leading-tight text-white md:text-left md:text-5xl">
              SE PARTE DE LA
              <strong className="flex flex-col text-[40px] font-bold md:text-[50px]">
                REVOLUCIÓN <span className="text-[#FF9E18]">ENERGÉTICA </span>
              </strong>
              EN PUERTO RICO
            </h1>
            <a
              href="#baterias"
              onClick={handleSmoothScroll}
              className="mt-14 hidden items-center justify-center bg-[#FF9E18] p-2 text-[20px] font-bold text-white md:flex md:w-[60%] md:text-3xl 2xl:w-[40%]"
            >
              COTIZA GRATIS AQUÍ
              <MdKeyboardArrowRight />
            </a>
          </div>
          <a
            href="#baterias"
            onClick={handleSmoothScroll}
            className="absolute -bottom-32 my-8 flex w-[80%] cursor-pointer items-center justify-center border-2 border-white bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.5)] to-transparent p-2 text-[20px] font-bold text-white md:hidden md:w-[50%] md:text-[30px]"
          >
            COTIZA GRATIS AQUÍ
            <MdKeyboardArrowRight />
          </a>
        </section>

        <section className="mt-20 flex w-full items-center justify-center">
          <h1 className="leading-14 w-full text-center text-[20px] text-[#21274E] md:text-[40px]">
            <strong>Vive 100% conectado y energizado</strong> <br /> con la batería Tesla y Windmar Home{' '}
            <img
              className="hidden w-full md:block"
              src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoadTo50K/PW3_BG_12.webp"
              alt=""
            />
            <div className="mt-10 flex h-screen w-full items-end justify-end bg-[url('https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoadTo50K/PW3_BG_Mobile2.webp')] bg-cover bg-center bg-no-repeat md:hidden">
              <div className="my-4 w-full">
                <CarrouselCMBA />
              </div>
            </div>
          </h1>
        </section>

        <section className="mt-10 flex w-full items-center justify-center md:my-20">
          <div className="flex w-[90%] flex-col items-center justify-center text-center font-sans text-[#21274E] md:w-[80%]">
            <p className="text-[24px] md:text-[40px]">
              Se parte de los <br />
              <strong className="w-[80%] text-center font-sans text-[36px] font-bold text-[#21274E] md:text-[50px]">
                de 60,000 hogares <br />
              </strong>
              que confiaron en WindMar y Tesla, adquiere <br className="hidden md:block" /> un sistema solar con batería y{' '}
              <br className="block md:hidden" />
              <strong>
                lleguemos <br className="hidden md:block" /> juntos a la meta.
              </strong>
            </p>
          </div>
        </section>

        <section id="baterias" className="my-20 flex h-screen w-full items-center justify-center md:mb-[25%] md:mt-20">
          <div className="flex h-screen w-[80%] flex-col items-center justify-center bg-[url('https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/RoadTo50K/BG-counter.svg')] bg-contain bg-top bg-no-repeat md:w-full">
            <p ref={counterRef} className="relative top-0 w-[80%] text-center font-sans text-[70px] font-bold text-white md:top-40 md:text-[128px]">
              {counter}
            </p>
            <p className="relative top-0 w-full text-center font-sans text-[19px] font-bold text-white md:top-40 md:text-[40px]">
              BATERÍAS INSTALADAS
            </p>

            <div className="relative top-20 flex w-[85%] flex-col items-center justify-center md:top-60 md:w-[40%] xl:w-[35%]">
              <FormsLeads_PR_RHF
                id="tesla_50k"
                campaign={'tesla_50k'}
                estilos={LP_CMBA}
                boton={'Enviar'}
                tittle={'¡Solicita hoy!'}
                phone={true}
                email={true}
                city={true}
                placeholder={true}
                option={true}
              />{' '}
            </div>
          </div>
        </section>
      </div>
      <Footer color="blue" />
    </>
  )
}

export default RoadTo50K

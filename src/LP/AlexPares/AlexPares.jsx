import { useState, useEffect } from 'react'
import BotonCotiza from '../../assets/AlexPares/Group_8.svg'
import { LP_AlexPares } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'
import Pixel from '../../components/Pixel/Pixel'
import FormsGerentes_RHF from '../../components/FormsCareers_RHF/FormsGerentes_RHF'
import useTitle from '../../hooks/useTitle'
const AlexPares = () => {
  useTitle('Team Energía de la buena careers - WindMar')
  // const dispatch = useDispatch();
  const [setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <>
      <Pixel pixelID="1826134724345924" />
      <div className="flex w-full flex-col items-center justify-center">
        <div className="relative box-border flex w-full flex-col items-center justify-center bg-no-repeat">
          <img
            src="https://windmar-website-cms.s3.amazonaws.com/LPs/AlexPares/Recruiting_Alex/Recruiting_iPhone+15+Pro/Dise%E0%B8%84o+Alex+Pares_IMAGEN_Fondo_banner.webp"
            className="block h-[90vh] w-full object-cover md:hidden"
          />

          <img
            src="https://windmar-website-cms.s3.amazonaws.com/LPs/AlexPares/Recruiting_Alex/Recruiting_MACBOOK+AIR/Dise%E0%B8%84o+Alex+Pares_IMAGEN_Fondo_banner_desktop.webp"
            className="hidden h-[90vh] w-full object-cover md:block"
          />
          <div className="absolute inset-0 flex translate-y-[-28%] flex-col items-center justify-center md:translate-x-[-9%] lg:translate-y-[-1%]">
            <div className="font-monserrat w-[50%] text-center text-[24px] font-[400] leading-tight text-white md:flex md:w-[70%] md:flex-col md:items-center md:justify-center md:text-[31px]">
              <p className="md:text-left">
                Construye un <strong className="text-[46px] italic md:text-[50px]">futuro</strong>
                <br />
                <strong className="text-[24px] font-[600] italic md:text-[60px]">más brillante</strong>
              </p>
              <a href="#AlexPares" className="md:[70%] ml-[18vh] w-full md:ml-0 md:flex md:flex-col md:items-center md:justify-center">
                <img src={BotonCotiza} className="w-full cursor-pointer md:w-[40%]" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-[10%] flex flex-col items-center md:mt-[5%]">
          <p className="w-[80%] text-center text-[16px] text-black md:w-[60%] md:text-[24px]">
            Energía que une a Puerto Rico, <strong>compromiso que perdura.</strong>
          </p>
        </div>
        <div className="flex h-[60vh] w-full flex-col items-center bg-[url('https://windmar-website-cms.s3.amazonaws.com/LPs/AlexPares/Recruiting_Alex/Recruiting_iPhone+15+Pro/Dise%E0%B8%84o+Alex+Pares_IMAGEN_Fondo_form.webp')] bg-cover bg-center bg-no-repeat md:h-[50vh] md:bg-[url('https://windmar-website-cms.s3.amazonaws.com/LPs/AlexPares/Recruiting_Alex/Recruiting_MACBOOK+AIR/Dise%E0%B8%84o+Alex+Pares_IMAGEN_Fondo_Form.webp')]">
          <div className="flex flex-col items-center justify-center text-center md:ml-[17vh] md:flex md:w-full md:flex-row-reverse md:pb-0 md:pt-[20vh]">
            <p className="mt-[5%] text-[10px] text-black md:hidden md:text-[20px]">WINDMAR HOME</p>
            <h1 className="mb-[5%] text-[18px] font-bold text-black md:hidden">CONTÁCTANOS</h1>

            <section className="md:items-left md:justify-left w-[70%] md:flex md:w-[70%] md:flex-row md:justify-center">
              <section className="justify-left items-left flex flex-col">
                <div className="hidden w-[65%] text-[12px] text-[#0038A8] md:block md:w-full md:text-left md:text-[14px]">
                  <p className="w-[90%]">
                    <strong className="mt-[5%] w-full font-bold text-[#0038A8]">Regístrate ahora</strong> y sé parte de nuestra misión de llevar{' '}
                    <strong>estabilidad energética a todo Puerto Rico a través de WindMar Home.</strong>
                  </p>
                </div>
                <FormsGerentes_RHF
                  id="AlexPares"
                  campaign={'AlexPares'}
                  recruitment={'sales'}
                  estilos={LP_AlexPares}
                  boton={'Enviar'}
                  tittle={false}
                  phone={true}
                  email={true}
                  city={true}
                  text={false}
                  placeholder={true}
                />
              </section>
              <img
                src="https://windmar-website-cms.s3.amazonaws.com/LPs/AlexPares/Recruiting_Alex/Recruiting_MACBOOK+AIR/Dise%E0%B8%84o+Alex+Pares_IMAGEN_Form-12.webp"
                className="hidden w-full md:block"
              />
            </section>
            <div className="mt-[5%] flex w-full flex-col items-center justify-center text-[12px] text-[#0038A8] md:hidden md:w-[70%] md:text-[30px]">
              <p className="w-[70%]">
                <strong className="mt-[5%] text-[12px] font-bold text-[#0038A8] md:w-full md:text-[30px]">Regístrate ahora</strong> y sé parte de
                nuestra misión de llevar <strong>estabilidad energética a todo Puerto Rico a través de WindMar Home.</strong>
              </p>
            </div>
            <img
              className="mt-[5%] w-full md:hidden"
              src="https://windmar-website-cms.s3.amazonaws.com/LPs/AlexPares/Recruiting_Alex/Recruiting_iPhone+15+Pro/Dise%E0%B8%84o+Alex+Pares_IMAGEN_Form-08.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default AlexPares

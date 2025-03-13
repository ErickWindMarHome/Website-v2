import Pixel from '../../components/Pixel/Pixel'
import Header from '../../layouts/General/Header/Header'
import FormsLeads_PR_RHF from '../../components/FormsLeads/FormsLeads_reactHookForm/Formsleads_PR_RHF'
import { LP_CambiateNew } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'
import { GrNext } from 'react-icons/gr'
import { getUTMs } from '../../features/getUTM/getUTM'
import { campaings } from '../../utils/data'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

export default function CambiateNew() {
  const [utm, setUtm] = useState('')
  const { traffic } = useSelector((state) => state.states)
  const campaignList = campaings['pr']
  const utms = getUTMs(campaignList['cambiate_a_energia_de_la_buena'], traffic)
  useEffect(() => {
    setUtm(utms.UTM_Source)
  }, [])
  return (
    <>
      <Pixel pixelID="1826134724345924" />
      {utm !== 'google' && utm !== 'facebook' && <Header />}
      <div
        className={`font-montserrat flex h-screen w-full flex-col items-center overflow-y-scroll overscroll-auto bg-[url('https://windmar-website-cms.s3.amazonaws.com/LPs/CambiateEnergiaSolar/Mobile/NEWS/IPHONE14_15PRO/334_Arte++LP+Cambiate+a+energia+solar+FIGMA+-+claro_IMAGEN_FONDO-19.webp')] bg-cover bg-center bg-no-repeat md:bg-[url('https://windmar-website-cms.s3.amazonaws.com/LPs/CambiateEnergiaSolar/Mobile/NEWS+IMG+WEBP/MACBOOK+AIR/334_Arte++LP+Cambiate+a+energia+solar+FIGMA+-+claro_IMAGEN_FONDO-23.webp')] ${utm !== 'google' && utm !== 'facebook' ? 'mt-[13vh] md:mt-[8vh]' : ''}`}
      >
        <div id="cambiateEnergiaBuena" className="flex w-full flex-col items-center justify-center gap-0 text-white md:gap-12">
          <div className="mt-4 flex flex-col md:mt-[10vh] lg:flex-row">
            <div className="flex w-full flex-col items-center">
              <div className="flex flex-col items-center justify-center md:flex-row md:gap-3">
                <h1 className="flex flex-col text-center text-[18px] font-extrabold text-[#0038A8] md:text-[25px]">
                  60,000 HOGARES <span>YA CUENTAN CON</span>
                </h1>
                <img
                  className="w-48 md:w-72"
                  src="https://windmar-website-cms.s3.amazonaws.com/LPs/CambiateEnergiaSolar/Desktop/NEWS/MACBOOK+AIR/334_Arte++LP+Cambiate+a+energia+solar+FIGMA+-+claro_IMAGEN_ENERGIA_DE_LA_BUENA_1-50.webp"
                  alt="Energia de la Buena"
                />
              </div>
              <div className="w-[80%] md:my-6 md:border-b-2 md:border-t-2 md:border-white">
                <p className="m-0 my-2 pt-2 text-center text-[13px] font-medium text-black md:py-4 md:text-[19px]">
                  Únete a WindMar Home en tu transición a energía solar y olvídate de la inestabilidad de la red eléctrica tradicional
                </p>
              </div>
            </div>

            <div className="w-full">
              <FormsLeads_PR_RHF
                id="cambiate_a_energia_de_la_buena"
                campaign="cambiate_a_energia_de_la_buena"
                recruitment="sales"
                estilos={LP_CambiateNew}
                boton="Enviar"
                tittle={false}
                phone={true}
                email={true}
                city={false}
                text={false}
                placeholder={true}
              />
            </div>
          </div>
        </div>
        <section className="mx-auto mt-20 grid w-[90%] grid-cols-1 lg:mt-10 lg:grid-cols-2 2xl:w-[70%]">
          <div className="flex flex-col items-center justify-center lg:order-2 lg:mt-12">
            <h1 className="text-center text-3xl">
              La <strong>única compañía</strong> que ofrece <strong>financiamiento exclusivo</strong> con un banco de Puerto Rico,{' '}
              <strong>Oriental Bank.</strong>
            </h1>
            <img
              className="w-48 md:w-60"
              src="https://windmar-website-cms.s3.amazonaws.com/LPs/CambiateEnergiaSolar/Desktop/NEWS/MACBOOK+AIR/334_Arte++LP+Cambiate+a+energia+solar+FIGMA+-+claro_LOGO_SUNNOVA_2-24.webp"
              alt="Logo Sunnova"
            />
          </div>
          <img
            className="mx-auto w-[60%] lg:order-1"
            src="https://windmar-website-cms.s3.amazonaws.com/LPs/CambiateEnergiaSolar/Desktop/NEWS/MACBOOK+AIR/334_Arte++LP+Cambiate+a+energia+solar+FIGMA+-+claro_IMAGEN_SUNNOVA_2-23.webp"
            alt=""
          />
        </section>

        <div className="flex w-full flex-col items-center justify-center">
          <div className="flex w-full flex-col items-center justify-center md:mt-[8vh] md:w-[80%] md:flex-row">
            <iframe
              className="mt-10 h-[25vh] w-[90%] md:relative md:z-30 md:h-[55vh] md:w-full"
              src="https://www.youtube.com/embed/YWCZHbJsFRk"
              title="Por qué Windmar"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="mt-[4vh] flex w-full flex-col items-center md:mt-[10vh] md:w-[60%] md:items-start">
              <section className="flex w-[80%] md:w-full md:flex-col">
                <div
                  className="flex w-full px-[2vh] text-white md:mb-4 md:h-[10vh] md:items-center md:justify-center md:bg-[url('https://windmar-website-cms.s3.amazonaws.com/LPs/CambiateEnergiaSolar/FONDO_AZUL_WHY_WINDMAR_.WEBP/FONDO_AZUL_WHY_WINDMAR/334_Arte++LP+Cambiate+a+energia+solar+FIGMA+-+claro_IMAGEN_FONDO_DESKTOP1.webp')] md:px-[14vh]"
                  style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <section className="flex h-[12vh] w-full flex-row items-center text-center text-white">
                    <section className="w-[50%]">
                      <img
                        className="hidden md:block md:w-[50%]"
                        src="https://windmar-website-cms.s3.amazonaws.com/LPs/CambiateEnergiaSolar/Mobile/NEWS+IMG+WEBP/MACBOOK+AIR/334_Arte++LP+Cambiate+a+energia+solar+FIGMA+-+claro_ICONO_A%C3%91O_ESTABLECIDO.webp"
                        alt=""
                      />
                      <img
                        className="w-[80%] md:hidden"
                        src="https://windmar-website-cms.s3.amazonaws.com/LPs/CambiateEnergiaSolar/WHYWINDMAROPCION2/claro_ICONO_A%C3%91O_ESTABLECIDO.webp"
                        alt=""
                      />
                    </section>
                    <section className="mt-[2vh] flex w-[50%] flex-col items-center justify-center md:w-[80%]">
                      <p className="text-[8px] font-bold text-[#0038A8] md:text-[10px] md:text-white">
                        <strong className="text-[26px] font-bold leading-7 text-[#0038A8] md:text-[28px] md:text-[#FF9E18]">2002</strong>
                        <br />
                        AÑO ESTABLECIDO
                      </p>
                    </section>
                  </section>
                </div>

                <div
                  className="flex w-full pl-[5vh] text-white md:mb-4 md:h-[10vh] md:items-center md:justify-center md:bg-[url('https://windmar-website-cms.s3.amazonaws.com/LPs/CambiateEnergiaSolar/FONDO_AZUL_WHY_WINDMAR_.WEBP/FONDO_AZUL_WHY_WINDMAR/334_Arte++LP+Cambiate+a+energia+solar+FIGMA+-+claro_IMAGEN_FONDO_DESKTOP2.webp')] md:px-[14vh]"
                  style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <section className="flex h-[12vh] w-full flex-row items-center text-center text-white">
                    <section className="w-[50%]">
                      <img
                        className="hidden md:block md:w-[50%]"
                        src="https://windmar-website-cms.s3.amazonaws.com/LPs/CambiateEnergiaSolar/Mobile/NEWS+IMG+WEBP/MACBOOK+AIR/334_Arte++LP+Cambiate+a+energia+solar+FIGMA+-+claro_ICONO_HOGARES.webp"
                        alt=""
                      />
                      <img
                        className="w-[80%] md:hidden"
                        src="https://windmar-website-cms.s3.amazonaws.com/LPs/CambiateEnergiaSolar/WHYWINDMAROPCION2/claro_ICONO_HOGARES.webp"
                        alt=""
                      />
                    </section>
                    <section className="mt-[2vh] flex w-[50%] flex-col items-center justify-center md:w-[80%]">
                      <p className="text-[8px] font-bold text-[#0038A8] md:text-[10px] md:text-white">
                        <strong className="flex items-center justify-center text-center text-[26px] font-bold leading-6 text-[#0038A8] md:text-[28px] md:text-[#FF9E18]">
                          <span className="text-[20px]">+</span>60K
                        </strong>
                        HOGARES <br /> ENERGIZADOS
                      </p>
                    </section>
                  </section>
                </div>
              </section>

              <section className="flex w-[80%] md:w-full md:flex-col">
                <div
                  className="flex w-full px-[2vh] text-white md:mb-4 md:h-[10vh] md:items-center md:justify-center md:bg-[url('https://windmar-website-cms.s3.amazonaws.com/LPs/CambiateEnergiaSolar/FONDO_AZUL_WHY_WINDMAR_.WEBP/FONDO_AZUL_WHY_WINDMAR/334_Arte++LP+Cambiate+a+energia+solar+FIGMA+-+claro_IMAGEN_FONDO_DESKTOP3.webp')] md:px-[14vh]"
                  style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <section className="my-2 flex w-full flex-row items-center text-center text-white">
                    <section className="w-[50%]">
                      <img
                        className="hidden md:block md:w-[60%]"
                        src="https://windmar-website-cms.s3.amazonaws.com/LPs/CambiateEnergiaSolar/Mobile/NEWS+IMG+WEBP/MACBOOK+AIR/334_Arte++LP+Cambiate+a+energia+solar+FIGMA+-+claro_ICONO_EMPLEADOS.webp"
                        alt=""
                      />
                      <img
                        className="w-[80%] md:hidden"
                        src="https://windmar-website-cms.s3.amazonaws.com/LPs/CambiateEnergiaSolar/WHYWINDMAROPCION2/claro_ICONO_EMPLEADOS.webp"
                        alt=""
                      />
                    </section>
                    <section className="mt-[2vh] flex w-[50%] flex-col items-center justify-center md:w-[80%]">
                      <p className="text-[8px] font-bold text-[#0038A8] md:text-[10px] md:text-white">
                        <strong className="flex items-center text-[26px] font-bold leading-7 text-[#0038A8] md:text-[28px] md:text-[#FF9E18]">
                          <span className="text-[20px]">+</span>2,000
                        </strong>
                        EMPLEADOS
                      </p>
                    </section>
                  </section>
                </div>
                <div
                  className="flex w-full pl-[5vh] text-white md:mb-4 md:h-[10vh] md:items-center md:justify-center md:bg-[url('https://windmar-website-cms.s3.amazonaws.com/LPs/CambiateEnergiaSolar/FONDO_AZUL_WHY_WINDMAR_.WEBP/FONDO_AZUL_WHY_WINDMAR/334_Arte++LP+Cambiate+a+energia+solar+FIGMA+-+claro_IMAGEN_FONDO_DESKTOP4.webp')] md:px-[14vh]"
                  style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <section className="my-2 flex w-full flex-row items-center text-center text-white">
                    <section className="w-[50%]">
                      <img
                        className="hidden md:block md:w-[35%]"
                        src="https://windmar-website-cms.s3.amazonaws.com/LPs/CambiateEnergiaSolar/Mobile/NEWS+IMG+WEBP/MACBOOK+AIR/334_Arte++LP+Cambiate+a+energia+solar+FIGMA+-+claro_ICONO_TESLA.webp"
                        alt=""
                      />
                      <img
                        className="w-[80%] md:hidden"
                        src="https://windmar-website-cms.s3.amazonaws.com/LPs/CambiateEnergiaSolar/WHYWINDMAROPCION2/claro_ICONO_TESLA.webp"
                        alt=""
                      />
                    </section>
                    <section className="mt-[2vh] flex w-[50%] flex-col items-center md:w-[80%]">
                      <p className="text-center text-[8px] font-bold text-[#0038A8] md:text-white">
                        <strong className="flex items-center justify-center text-[26px] font-bold leading-6 text-[#0038A8] md:text-[28px] md:text-[#FF9E18]">
                          <span className="text-[20px]">+</span>50K
                        </strong>
                        TESLA POWERWALLS <br /> INSTALADAS
                      </p>
                    </section>
                  </section>
                </div>
              </section>
            </div>
          </div>
        </div>
        <section>
          <div className="mx-auto w-full place-items-center lg:grid lg:grid-cols-2 lg:place-items-end lg:gap-10">
            <div className="mb-3 rounded-xl px-5 py-8 text-center text-xl text-[#0038A8] lg:order-2 lg:bg-white/70">
              <h1 className="">
                No dependas de una <strong>red eléctrica inestable.</strong>
              </h1>
              <div className="mx-auto my-7 grid grid-cols-2 place-items-center text-center lg:mx-0 lg:flex lg:w-full lg:gap-5">
                <div>
                  <img
                    className="mx-auto w-20"
                    src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/CambiateEnergiaSolar/nuevos+ajustes/334_Arte++LP+Cambiate+a+energia+solar+FIGMA+-+claro_ICONO_INSTALACION-60.webp"
                    alt="icono instalación"
                  />
                  <h1 className="text-lg font-bold">Instalación</h1>
                </div>
                <div>
                  <img
                    className="mx-auto w-20"
                    src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/CambiateEnergiaSolar/nuevos+ajustes/334_Arte++LP+Cambiate+a+energia+solar+FIGMA+-+claro_ICONO_PERMISOS-61.webp"
                    alt=""
                  />
                  <h1 className="text-lg font-bold">Permisos</h1>
                </div>
                <div>
                  <img
                    className="mx-auto w-20"
                    src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/CambiateEnergiaSolar/nuevos+ajustes/334_Arte++LP+Cambiate+a+energia+solar+FIGMA+-+claro_ICONO_MANTENIMIENTO-62.webp"
                    alt=""
                  />
                  <h1 className="text-lg font-bold">Mantenimiento</h1>
                </div>
                <div>
                  <img
                    className="mx-auto w-20"
                    src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/CambiateEnergiaSolar/nuevos+ajustes/334_Arte++LP+Cambiate+a+energia+solar+FIGMA+-+claro_ICONO_GARANTIA-63.webp"
                    alt="icono garantía"
                  />
                  <h1 className="text-lg font-bold">Garantía</h1>
                </div>
              </div>
              <h1 className="hidden text-4xl font-bold text-[#FF9E18] lg:block">Siempre incluidas.</h1>
              <a
                className="mx-auto mt-10 flex items-center justify-between gap-2 bg-[#EF8023] px-4 py-2 text-lg font-bold text-white"
                href="#cambiateEnergiaBuena"
              >
                <h1 className="flex-1">CÁMBIATE AHORA</h1> <GrNext size={20} />
              </a>
            </div>
            <div className="lg:order-1">
              <img
                src="https://windmar-website-cms.s3.amazonaws.com/LPs/CambiateEnergiaSolar/Desktop/NEWS/MACBOOK+AIR/334_Arte++LP+Cambiate+a+energia+solar+FIGMA+-+claro_IMAGEN_QUE_INCLUYE_4-25.webp"
                alt="Instalador, Instalando un panel solar"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

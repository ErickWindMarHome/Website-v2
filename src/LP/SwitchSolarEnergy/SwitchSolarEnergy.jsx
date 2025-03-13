import Pixel from '../../components/Pixel/Pixel'
import Header from '../../layouts/General/Header/Header'
import FormsLeadsFL from '../../components/FormsLeads/FormsLeads_FL'
import { LP_CambiateNewFL } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'
import useTitle from '../../hooks/useTitle'

function SwitchSolarEnergy() {
  useTitle('Switch to solar energy - Windmar')
  return (
    <>
      <Pixel pixelID="1826134724345924" />
      <Header />
      <div className="font-montserrat mt-[13vh] flex h-screen w-full flex-col items-center overflow-y-scroll overscroll-auto bg-[url('https://windmar-website-cms.s3.amazonaws.com/LPs/CambiateEnergiaSolar/Mobile/NEWS/IPHONE14_15PRO/334_Arte++LP+Cambiate+a+energia+solar+FIGMA+-+claro_IMAGEN_FONDO-19.webp')] bg-cover bg-center bg-no-repeat md:mt-[8vh] md:bg-[url('https://windmar-website-cms.s3.amazonaws.com/LPs/CambiateEnergiaSolar/Mobile/NEWS+IMG+WEBP/MACBOOK+AIR/334_Arte++LP+Cambiate+a+energia+solar+FIGMA+-+claro_IMAGEN_FONDO-23.webp')]">
        {/* Banner and Form */}
        <div id="cambiateEnergiaBuena" className="flex w-full flex-col items-center justify-center gap-0 text-white md:gap-12">
          <div className="mt-4 flex flex-col md:mt-[10vh] md:flex-row">
            <div className="flex w-full flex-col items-center">
              <div className="flex flex-col items-center justify-center md:flex-row md:gap-3">
                <h1 className="flex flex-col text-center text-[18px] font-extrabold text-[#0038A8] md:text-[25px]">
                  50,000 HOMES <span>ALREADY HAVE</span>
                </h1>
                <img
                  className="w-48 md:w-72"
                  src="https://windmar-website-cms.s3.amazonaws.com/LPs/SwitchSolarEnergy/Positive-Energy.webp"
                  alt="Good Energy"
                />
              </div>
              <div className="w-[80%] md:my-6 md:border-b-2 md:border-t-2 md:border-white">
                <p className="m-0 my-2 pt-2 text-center text-[13px] font-medium text-black md:py-4 md:text-[19px]">
                  Join Windmar Home in your transition to solar energy and forget about the instability of the traditional power grid
                </p>
              </div>
            </div>
            <div className="w-full">
              <FormsLeadsFL
                id="switchSolarEnergy"
                campaign="switchSolarEnergy"
                recruitment="sales"
                estilos={LP_CambiateNewFL}
                boton="SUBMIT"
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
        {/* Iframe Youtube */}
        <div className="flex w-full flex-col items-center justify-center">
          <div className="flex w-full flex-col items-center justify-center md:mt-[8vh] md:w-[80%] md:flex-row">
            <iframe
              className="mt-10 h-[25vh] w-[90%] md:relative md:z-30 md:h-[55vh] md:w-full"
              src="https://www.youtube.com/embed/YWCZHbJsFRk"
              title="Why Windmar"
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
                        ESTABLISHED YEAR
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
                          <span className="text-[20px]">+</span>50K
                        </strong>
                        HOMES <br /> ENERGIZED
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
                        EMPLOYEES
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
                          <span className="text-[20px]">+</span>40K
                        </strong>
                        TESLA POWERWALLS <br /> INSTALLED
                      </p>
                    </section>
                  </section>
                </div>
              </section>
            </div>
          </div>
        </div>
        {/* Dont miss */}
        <div className="flex h-screen w-full flex-col items-center">
          <div className="flex h-screen w-full flex-col-reverse items-center justify-center md:flex-row">
            <div className="flex w-full flex-col items-center md:relative md:z-30 md:w-[50%] md:p-4">
              <img
                className="w-0 md:w-[90%]"
                src="https://windmar-website-cms.s3.amazonaws.com/LPs/CambiateEnergiaSolar/Desktop/NEWS/MACBOOK+AIR/334_Arte++LP+Cambiate+a+energia+solar+FIGMA+-+claro_IMAGEN_QUE_INCLUYE_4-25.webp"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center md:items-center md:justify-center">
              <div className="mb-[2vh] md:mb-[2%] md:flex md:h-full md:w-[100%] md:flex-col md:items-center md:justify-center md:p-2">
                <section className="text-center text-[19px] text-[#0038A8] md:w-full md:text-[21px]">
                  Don&apos;t miss out on a
                  <strong>
                    <br /> stable electrical grid.
                  </strong>
                </section>
              </div>

              <div className="flex h-full w-[100%] md:items-center md:px-2">
                <section className="flex w-[100%] flex-col items-center justify-center text-center text-[#0038A8]">
                  <img
                    className="md:w-[50%]"
                    src="https://windmar-website-cms.s3.amazonaws.com/LPs/CambiateEnergiaSolar/Mobile/NEWS+IMG+WEBP/MACBOOK+AIR/334_Arte++LP+Cambiate+a+energia+solar+FIGMA+-+claro_ICONO_INSTALACION-45.webp"
                    alt="Installation Icon"
                  />
                  <p className="text-[12px] font-bold md:text-[15px]">Installation</p>
                </section>
                <section className="flex w-[100%] flex-col items-center justify-center text-center text-[#0038A8] md:text-[32px]">
                  <img
                    className="md:w-[50%]"
                    src="https://windmar-website-cms.s3.amazonaws.com/LPs/CambiateEnergiaSolar/Mobile/NEWS+IMG+WEBP/MACBOOK+AIR/334_Arte++LP+Cambiate+a+energia+solar+FIGMA+-+claro_ICONO_PERMISOS-46.webp"
                    alt="Permissions Icon"
                  />
                  <p className="text-[12px] font-bold md:text-[15px]">Permits</p>
                </section>
              </div>
              <div className="flex h-full w-[100%] items-center justify-center md:mb-[2%] md:px-2">
                <section className="flex w-[100%] flex-col items-center justify-center text-center text-[#0038A8]">
                  <img
                    className="md:w-[50%]"
                    src="https://windmar-website-cms.s3.amazonaws.com/LPs/CambiateEnergiaSolar/Mobile/NEWS+IMG+WEBP/MACBOOK+AIR/334_Arte++LP+Cambiate+a+energia+solar+FIGMA+-+claro_ICONO_MANTENIMIENTO-47.webp"
                    alt="Maintenance Icon"
                  />
                  <p className="text-[12px] font-bold md:text-[15px]">Maintenance</p>
                </section>
                <section className="flex w-[100%] flex-col items-center justify-center text-[#0038A8] md:text-center">
                  <img
                    className="md:w-[50%]"
                    src="https://windmar-website-cms.s3.amazonaws.com/LPs/CambiateEnergiaSolar/Mobile/NEWS+IMG+WEBP/MACBOOK+AIR/334_Arte++LP+Cambiate+a+energia+solar+FIGMA+-+claro_ICONO_GARANTIA-48.webp"
                    alt="Warranty Icon"
                  />
                  <p className="text-[12px] font-bold md:text-[15px]">Warranty</p>
                </section>
              </div>
              <h1 className="text-[23px] font-bold italic text-[#FF9E18] md:text-[28px]">always included.</h1>
              <div className="flex w-[80%] flex-col items-center justify-center md:mt-[5%] md:w-[80%]">
                <a
                  href="#cambiateEnergiaBuena"
                  className="flex h-10 w-72 items-center justify-center gap-4 rounded-[10px] bg-[#0038A8] text-[19px] font-bold text-white no-underline"
                >
                  SWITCH NOW
                  <svg width="17" height="17" viewBox="0 0 17 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1.65039 1.48926L16.3272 16.1558L1.68097 30.8021"
                      stroke="white"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SwitchSolarEnergy

import Header from '../../layouts/General/Header/Header'
import Footer from '../../layouts/General/Footer/Footer'
import Barra from '../../layouts/General/Barra/Barra'
import CarrouselFundationAnker from '../../components/CarrouselFundationAnker/CarrouselFundationAnker'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import CarrouselFundationAnkerNeveras from '../../components/CarrouselFundationAnker/CarrouselFundationAnkerNeveras'
import FormsLeads_PR_RHF from '../../components/FormsLeads/FormsLeads_reactHookForm/Formsleads_PR_RHF'
import { LP_FundacionAnker } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'
const FundacionAnker = () => {
  const { mobileQuery } = useSelector((state) => state.states)
  const BgContenedorDesktop = 'https://scms.windmar.com/uploads/Group_49_555db79474.svg'
  const BgContenedorMobile = 'https://scms.windmar.com/uploads/Group_42_23bc2af99c.svg'
  const NeveraPortatil = 'https://scms.windmar.com/uploads/Group_32_06127d5dc9.svg'
  const EasyTow = 'https://scms.windmar.com/uploads/Group_31_3682c7de2f.svg'
  const Hielo = 'https://scms.windmar.com/uploads/Group_6_c64c4026df.svg'
  const Sistema = 'https://scms.windmar.com/uploads/Group_5_fefa030c81.svg'
  const Refrigera = 'https://scms.windmar.com/uploads/Group_4_b01ed182c5.svg'
  const Control = 'https://scms.windmar.com/uploads/Group_3_bdd5e28fe2.svg'
  const Gif = 'https://scms.windmar.com/uploads/Giflogos_2_ccade50f69.gif'
  const sliderUno = 'https://scms.windmar.com/uploads/Group_38_ae269b480d.svg'
  const EnergiAcompaña = 'https://scms.windmar.com/uploads/Group_35_e927c39178.svg'
  const LogoFundation = 'https://scms.windmar.com/uploads/Group_36_b41f9895f7.png'
  const SolFundation = 'https://scms.windmar.com/uploads/Group_41_ce0ccfeed0.svg'
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [backgroundImage, setBackgroundImage] = useState(windowWidth <= 640 ? BgContenedorMobile : BgContenedorDesktop)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      setBackgroundImage(window.innerWidth <= 640 ? BgContenedorMobile : BgContenedorDesktop)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <>
      <Header />

      <div className="box-border flex w-[100%] flex-col items-center justify-center bg-cover bg-top bg-no-repeat pt-[10%] lg:w-[100%] lg:pt-[5%]">
        {' '}
        <div className="flex w-full flex-col items-center justify-center lg:w-full">
          <a href="#fundacion_anker">
            {mobileQuery === 'desktop' ? <img src={BgContenedorDesktop} className="mt-[1%] w-[100%] lg:w-[100%]" /> : null}
            {mobileQuery === 'mobile' ? <img src={BgContenedorMobile} className="mt-[1%] w-[100%] lg:w-[100%]" /> : null}
          </a>

          <div className="relative bottom-[8%]">{mobileQuery === 'mobile' ? <CarrouselFundationAnkerNeveras /> : null}</div>
        </div>
        {mobileQuery === 'mobile' ? (
          <>
            <div className="relative bottom-[5%] mt-[1%] flex w-[100%] text-[13px] lg:mt-[1%] lg:flex lg:w-[100%] lg:text-center lg:text-[18px]">
              <img src={Gif} className="w-[100%] py-[5%]" />
            </div>

            <div className="relative bottom-[5%] flex w-[100%] flex-col items-center justify-center text-center text-[13px] lg:w-[100%] lg:text-[25px]">
              <p>
                <strong>
                  ¡Elige la nevera Anker que te mantendrá <br /> fresco en un día de calor sin necesidad de
                </strong>
                <br /> electricidad ni compras de hielo!
              </p>
            </div>

            <div className="relative bottom-[5%]">
              <a href="#fundacion_anker">
                {/* prueba slider */}
                <CarrouselFundationAnker />
              </a>
              {/* prueba slider */}
            </div>

            <div className="relative bottom-[5%]">
              <img src={EnergiAcompaña} className="w-[100%] py-[10%] lg:w-[100%] lg:py-[5%] xl:w-[100%] 2xl:w-[100%]" />
            </div>
            <div className="relative bottom-[2%] mb-[8%] flex w-[80%] flex-col items-center justify-center text-center text-[13px] font-normal text-[#0038A8] lg:w-[100%] lg:text-[25px]">
              <p>Conoce sobre nuestra</p>
              <img src={LogoFundation} className="mb-[3%] w-[80%] lg:w-[35%]" />
              <p>
                y sus programas educativos, proyectos, <br /> donaciones y colaboraciones para proteger <br />{' '}
                <strong>a nuestro Planeta y sus habitantes.</strong>
              </p>

              <FormsLeads_PR_RHF
                id="fundacion_anker"
                estilos={LP_FundacionAnker}
                destination={false}
                campaign="FundacionAnker"
                boton={'Enviar'}
                tittle={'¡Solicita hoy!'}
                products={false}
                email={true}
                phone={true}
                city={true}
                placeholder={true}
              />
            </div>
            <div className="flex w-[100%] flex-col items-center justify-center text-[13px] font-normal text-[#0038A8] lg:w-[100%] lg:text-center lg:text-[25px]">
              <img src={SolFundation} className="w-[80%] lg:w-[50%]" />
            </div>
          </>
        ) : null}
        {mobileQuery === 'desktop' ? (
          <>
            <div className="mt-[1%] flex w-[100%] text-[13px] lg:mt-[1%] lg:flex lg:w-[100%] lg:text-center lg:text-[18px]">
              <img src={Gif} className="w-[100%] py-[5%]" />
            </div>

            <div className="flex w-[100%] flex-col items-center justify-center text-center text-[13px] lg:w-[100%] lg:text-[25px]">
              <p>
                <strong>
                  ¡Elige la nevera Anker que te mantendrá <br /> fresco en un día de calor sin necesidad de
                </strong>
                <br /> electricidad ni compras de hielo!
              </p>
            </div>
            <a href="#fundacion_anker">
              <div className=" ">
                {/* prueba slider */}
                <CarrouselFundationAnker />
                {/* prueba slider */}
              </div>
            </a>
            <div>
              <img src={EnergiAcompaña} className="w-[100%] py-[10%] lg:w-[100%] lg:py-[5%] xl:w-[100%] 2xl:w-[100%]" />
            </div>
            <div className="mb-[8%] flex w-[80%] flex-col items-center justify-center text-center text-[13px] font-normal text-[#0038A8] lg:w-[100%] lg:text-[25px]">
              <p>Conoce sobre nuestra</p>
              <img src={LogoFundation} className="mb-[3%] w-[80%] lg:w-[35%]" />
              <p>
                y sus programas educativos, proyectos, <br /> donaciones y colaboraciones para proteger <br />{' '}
                <strong>a nuestro Planeta y sus habitantes.</strong>
              </p>

              <FormsLeads_PR_RHF
                id="fundacion_anker"
                estilos={LP_FundacionAnker}
                destination={false}
                campaign="FundacionAnker"
                boton={'Enviar'}
                tittle={'¡Solicita hoy!'}
                products={false}
                email={true}
                phone={true}
                city={true}
                placeholder={true}
              />
            </div>
            <div className="flex w-[100%] flex-col items-center justify-center text-[13px] font-normal text-[#0038A8] lg:w-[100%] lg:text-center lg:text-[25px]">
              <img src={SolFundation} className="w-[80%] lg:w-[50%]" />
            </div>
          </>
        ) : null}
      </div>
      <Footer color="blue" />
      <Barra caseLocation="incentivos" color="blue" />
    </>
  )
}

export default FundacionAnker

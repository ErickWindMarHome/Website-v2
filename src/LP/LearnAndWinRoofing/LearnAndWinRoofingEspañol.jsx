import './LearnAndWinRoofing.css'
import './LearnAndWinRoofingMobile.css'
// Redux toolkit
import { useSelector } from 'react-redux'

import { useState, useRef } from 'react'
//Layout
import Header from '../../layouts/General/Header/Header'
import Footer from '../../layouts/General/Footer/Footer'
import Slider from 'react-slick'

//imagenes
import BannerLearAndWinUno from '../../assets/LearnAndWinRoofingEspañol/Group_44.png'
import BannerLearAndWinDos from '../../assets/LearnAndWinRoofingEspañol/Group_45.png'
import BannerLearAndWinUnoMobile from '../../assets/LearnAndWinRoofingEspañol/Group_54.png'

//slider uno mobile
import pasoUnoUno from '../../assets/LearnAndWinRoofingEspañol/Group_46.png'
import pasoDosUno from '../../assets/LearnAndWinRoofingEspañol/Group_47.png'
import pasoTresUno from '../../assets/LearnAndWinRoofingEspañol/Group_48.png'
import pasoCuatroUno from '../../assets/LearnAndWinRoofingEspañol/Group_49.png'
import pasoUnoDos from '../../assets/LearnAndWinRoofingEspañol/Group_50.png'
import pasoDosDos from '../../assets/LearnAndWinRoofingEspañol/Group_51.png'
import pasoTresDos from '../../assets/LearnAndWinRoofingEspañol/Group_53.png'
import pasoCuatroDos from '../../assets/LearnAndWinRoofingEspañol/Group_52.png'

import { LP_LearnAndWinRoofing, LP_LearnAndWinRoofing_JSD } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'
import FormsLeadsFL_DN from '../../components/FormsLeadsFL_DN/FormsLeadsFL_DN'
import FormsLeadsFL_DN_JSD from '../../components/FormsLeadsFL_DN/FormsLeadsFL_DN_JSD'
import ButtonRoofle from '../../components/modalRoofle/ButtonRoofle'

const LearnAndWinRoofingEspañol = () => {
  // const dispatch = useDispatch();
  const mobileQuery = useSelector((state) => state.states.mobileQuery)
  const [slide1, setSlide1] = useState(0)
  function SampleNextArrow(props) {
    const { onClick } = props
    return <div className={`LearSlRoofing-${mobileQuery}`} onClick={onClick}></div>
  }

  function SamplePrevArrow(props) {
    const { onClick } = props
    return <div className={`LearSliRoofing-${mobileQuery}`} onClick={onClick}></div>
  }
  const [slideIndex, setSlideIndex] = useState(0)
  const [updateCount, setUpdateCount] = useState(0)
  let sliderRef = useRef(null)
  const settings1 = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current) => {
      sliderRef.slickGoTo(current + 1)
    },
  }

  const settings2 = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: 'linear',
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: () => setUpdateCount(updateCount + 1),
    beforeChange: (current, next) => setSlideIndex(next),
  }

  return (
    <>
      <Header />
      <div className={`ContendorLearWinRoofing-${mobileQuery}`}>
        <div className={`LearWinRoofing-${mobileQuery}`}>
          <div>
            {/* Version movil*/}
            {mobileQuery === 'mobile' ? (
              <div className="h-screen bg-vacationMobible bg-cover bg-center bg-no-repeat p-4">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex flex-col items-center gap-4">
                    <h1 className="flex flex-col items-center justify-center">
                      <span className="text-white">DISFRUTA DE</span>
                      <span className="font-bold text-[#FF9E18]">VACACIONES DE</span>
                      <span className="text-[45px] font-bold text-[#FF9E18]">1,000</span>
                      <span className="text-[35px] font-bold text-[#FF9E18]">DOLARES</span>
                    </h1>
                    <p className="flex flex-col items-center justify-center text-2xl text-white">
                      <span className="">¿Tu Techo está </span>
                      <span className="">preparado para la </span>
                      <span className="text-2xl font-bold">temporada de huracanes?</span>
                    </p>
                  </div>
                  <FormsLeadsFL_DN_JSD
                    id="learn_and_win_roofing"
                    estilos={LP_LearnAndWinRoofing_JSD}
                    destination={true}
                    campaign="LearnAndWinRoofing"
                    boton={'SEND'}
                    tittle={'Enter today!'}
                    products={false}
                    email={true}
                    phone={true}
                    city={false}
                  />
                </div>
              </div>
            ) : null}{' '}
            {/* Version desktop*/}
            {mobileQuery === 'desktop' ? (
              <div className="flex h-screen items-center justify-end bg-vacation1 bg-cover bg-center bg-no-repeat">
                <div className="mt-10 flex h-screen w-[60%] flex-col items-stretch px-24">
                  <h1 className="mt-2 flex items-center justify-center gap-2 md:flex-col 2xl:flex-row">
                    <span className="text-[31px] text-white">DISFRUTA DE</span>
                    <span className="text-[32px] font-bold text-[#FF9E18]">VACACIONES DE</span>
                    <span className="flex items-end gap-3">
                      <span className="text-[50px] font-bold text-[#FF9E18]">$1,000</span>
                      <span className="mb-1 text-[32px] font-bold text-[#FF9E18]">DÓLARES</span>
                    </span>
                  </h1>

                  <div className="flex flex-col items-center justify-center p-3">
                    <p className="mt-4 flex flex-col text-white">
                      <span className="text-[26.71px]">¿Tu techo está preparado para la </span>
                      <span className="text-[30px] font-bold">temporada de huracanes?</span>
                    </p>
                    <FormsLeadsFL_DN_JSD
                      id="learn_and_win_roofing"
                      estilos={LP_LearnAndWinRoofing_JSD}
                      destination={true}
                      campaign="LearnAndWinRoofing"
                      boton={'SEND'}
                      tittle={'Enter today!'}
                      products={false}
                      email={true}
                      phone={true}
                      city={false}
                    />
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {/* Version desktop*/}
        {mobileQuery === 'desktop' ? (
          <h1>
            No pierdas la oportunidad de <br /> <strong>darte un capricho a ti y a tu techo.</strong>
          </h1>
        ) : null}

        {/* Version movile*/}
        {mobileQuery === 'mobile' ? (
          <>
            <h1>
              No pierdas la oportunidad <br /> de darte un <strong>capricho a ti y tu techo</strong>
            </h1>
          </>
        ) : null}
      </div>

      {/* Version movil*/}
      {mobileQuery === 'mobile' ? (
        <section className={`FondoFormRoofing-${mobileQuery}`}>
          <div className={`SliderLearRoofing-${mobileQuery}`}>
            <div className={`SliderUnoLearRoofing-${mobileQuery}`}>
              <Slider {...settings1}>
                {/* <div className="BannerLearAndWinDosMobile1"></div> */}
                {/* <div className="pasoUnoMobile1"></div> */}
                <div className="pasoDosMobile1"></div>
                <div className="pasoTresMobile1"></div>
                <div className="pasoCuatroMobile1"></div>
                <div className="pasoCincoMobile1"></div>
              </Slider>
              <Slider
                ref={(slider) => {
                  sliderRef = slider
                }}
                {...settings2}
              >
                <div className="BannerLearAndWinDosMobile2"></div>
                <div className="pasoUnoMobile2"></div>
                <div className="pasoDosMobile2"></div>
                <div className="pasoTresMobile2"></div>
                <div className="pasoCuatroMobile2"></div>
                <div className="pasoCincoMobile2"></div>
              </Slider>
            </div>
          </div>
        </section>
      ) : null}

      {/* Version Movil*/}
      {mobileQuery === 'mobile' ? (
        <section className="text-center">
          <div>
            <h1>
              <strong>
                Elige entre <br /> los mejores destinos:
              </strong>
            </h1>
          </div>
        </section>
      ) : null}

      {/* Version desktop*/}
      {mobileQuery === 'desktop' ? (
        <section className="w-full">
          <article className="">
            <div id="FormLearn" className="flex h-72 w-full justify-center">
              {slide1 === 0 ? (
                <img src={pasoUnoDos} alt="" onClick={() => setSlide1(0)} className="h-72" />
              ) : (
                <img src={pasoUnoUno} alt="" onClick={() => setSlide1(0)} className="h-72" />
              )}
              {slide1 === 1 ? (
                <img src={pasoDosDos} alt="" onClick={() => setSlide1(1)} className="h-72" />
              ) : (
                <img src={pasoDosUno} alt="" onClick={() => setSlide1(1)} className="h-72" />
              )}
              {slide1 === 2 ? (
                <img src={pasoTresDos} alt="" onClick={() => setSlide1(2)} className="h-72" />
              ) : (
                <img src={pasoTresUno} alt="" onClick={() => setSlide1(2)} className="h-72" />
              )}
              {slide1 === 3 ? (
                <img src={pasoCuatroDos} alt="" onClick={() => setSlide1(3)} className="h-72" />
              ) : (
                <img src={pasoCuatroUno} alt="" onClick={() => setSlide1(3)} className="h-72" />
              )}
            </div>{' '}
          </article>
        </section>
      ) : null}

      {/* Version desktop*/}
      {mobileQuery === 'desktop' ? (
        <section className={`FondoForm-${mobileQuery}`}>
          <div className={`SliderLear-${mobileQuery}`}>
            <div className={`SliderUnoLear-${mobileQuery}`}>
              <Slider {...settings1}>
                <div className="LasVegas1"></div>
                <div className="Atlanta1"></div>
                <div className="CanCun1"></div>
                <div className="PuntaCana1"></div>
                <div className="Nashville1"></div>
              </Slider>

              <Slider
                ref={(slider) => {
                  sliderRef = slider
                }}
                {...settings2}
              >
                <div className="LasVegas2"></div>
                <div className="Atlanta2"></div>
                <div className="CanCun2"></div>
                <div className="PuntaCana2"></div>
                <div className="Nashville2"></div>
              </Slider>
            </div>
          </div>
        </section>
      ) : null}

      {/* Version movil*/}

      {mobileQuery === 'mobile' ? (
        <section className={`FondoForm-${mobileQuery}`}>
          <div className={`SliderLear-${mobileQuery}`}>
            <div className={`SliderUnoLear-${mobileQuery}`}>
              <Slider {...settings1}>
                <div className="LasVegasMobile"></div>
                <div className="AtlantaMobile"></div>
                <div className="CanCunMobile"></div>
                <div className="PuntaCanaMobile"></div>
                <div className="NashvilleMobile"></div>
              </Slider>

              <Slider
                ref={(slider) => {
                  sliderRef = slider
                }}
                {...settings2}
              >
                <div className="LasVegasMobile2"></div>
                <div className="AtlantaMobile2"></div>
                <div className="CanCunMobile2"></div>
                <div className="PuntaCanaMobile2"></div>
                <div className="NashvilleMobile2"></div>
              </Slider>
            </div>
          </div>
        </section>
      ) : null}
      <ButtonRoofle />
      <Footer color="blue" />
    </>
  )
}

export default LearnAndWinRoofingEspañol

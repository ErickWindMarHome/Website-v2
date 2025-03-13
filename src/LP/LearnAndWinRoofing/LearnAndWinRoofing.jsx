import './LearnAndWinRoofing.css'
import './LearnAndWinRoofingMobile.css'
// Redux toolkit
import { useSelector } from 'react-redux'
import { useState, useRef } from 'react'
//Layout
import Header from '../../layouts/General/Header/Header'
import Footer from '../../layouts/General/Footer/Footer'
import Slider from 'react-slick'
//slider uno mobile
import pasoUnoUno from '../../assets/LearnAndWinRoofing/Group_30.png'
import pasoDosUno from '../../assets/LearnAndWinRoofing/Group_32.png'
import pasoTresUno from '../../assets/LearnAndWinRoofing/Group_34.png'
import pasoCuatroUno from '../../assets/LearnAndWinRoofing/Group_36.png'
import pasoUnoDos from '../../assets/LearnAndWinRoofing/Group_31.png'
import pasoDosDos from '../../assets/LearnAndWinRoofing/Group_33.png'
import pasoTresDos from '../../assets/LearnAndWinRoofing/Group_35.png'
import pasoCuatroDos from '../../assets/LearnAndWinRoofing/Group_37.png'

import { LP_LearnAndWinRoofing, LP_LearnAndWinRoofing_JSD } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'
import FormsLeadsFL_DN_JSD from '../../components/FormsLeadsFL_DN/FormsLeadsFL_DN_JSD'
import { Helmet } from 'react-helmet'
import ButtonRoofle from '../../components/modalRoofle/ButtonRoofle'
const LearnAndWinRoofing = () => {
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
      <Helmet>
        <meta
          name="description"
          content="Enjoy a $1,000 vacation just learning. Reduce your stress and meet your dream destinations while you save money. Don´t miss this once in a lifetime opportunity."
        />
      </Helmet>
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
                      <span className="text-white">ENJOY A</span>
                      <span className="text-[65.55px] font-bold text-[#FF9E18]">$1,000</span>
                      <span className="text-center text-[40.66px] font-bold text-[#FF9E18]">VACATION JUST LEARNING</span>
                    </h1>
                    <p className="flex flex-col items-center justify-center text-2xl text-white">
                      <span className="">Is your roof </span>
                      <span className="">prepared for the </span>
                      <span className="text-3xl font-bold">hurricane season?</span>
                    </p>
                  </div>
                  <FormsLeadsFL_DN_JSD
                    id="learn_and_win_roofing"
                    estilos={LP_LearnAndWinRoofing_JSD}
                    destination={true}
                    campaign="LearnAndWinRoofing"
                    boton={'SEND'}
                  />
                </div>
              </div>
            ) : null}{' '}
            {/* Version desktop*/}
            {mobileQuery === 'desktop' ? (
              <div className="flex h-screen items-center justify-end bg-vacation1 bg-cover bg-center bg-no-repeat">
                <div className="mt-10 flex h-screen w-[60%] flex-col items-stretch px-24">
                  <h1 className="mt-2 flex items-center justify-center gap-2 md:flex-col 2xl:flex-row">
                    <span className="text-[42px] text-white">ENJOY A</span>
                    <span className="flex items-center gap-3">
                      <span className="text-[73.12px] font-bold text-[#FF9E18]">$1,000</span>
                      <span className="mb-2 text-[43.46px] font-bold text-[#FF9E18]">VACATION JUST LEARNING</span>
                    </span>
                  </h1>

                  <div className="">
                    <p className="mt-3 flex flex-col items-center text-white">
                      <span className="text-[26.71px]">Is your roof prepared for the </span>
                      <span className="text-[45px] font-bold">hurricane season?</span>
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
        <p className="px-6 text-center md:font-semibold">
          <strong>Reduce your stress</strong> and meet your dream destinations while you save money.
        </p>

        {/* Version desktop*/}
        {mobileQuery === 'desktop' ? (
          <>
            <h1>
              Don´t miss this once in a lifetime <strong>opportunity</strong>.
            </h1>
          </>
        ) : null}

        {/* Version movile*/}
        {mobileQuery === 'mobile' ? (
          <>
            <h1>
              Don´t miss this once in a lifetime <strong>opportunity</strong>.
            </h1>
          </>
        ) : null}
      </div>

      {/* Version desktop*/}

      {/* Version movil*/}
      {mobileQuery === 'mobile' ? (
        <section className={`FondoFormRoofing-${mobileQuery}`}>
          <div className={`SliderLearRoofing-${mobileQuery}`}>
            <div className={`SliderUnoLearRoofing-${mobileQuery}`}>
              <Slider {...settings1}>
                <div className="pasoUnoMobile"></div>
                <div className="pasoDosMobile"></div>
                <div className="pasoTresMobile"></div>
                <div className="pasoCuatroMobile"></div>
                <div className="pasoCincoMobile"></div>
              </Slider>
              <Slider
                ref={(slider) => {
                  sliderRef = slider
                }}
                {...settings2}
              >
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
        <section className={`TextoLearRoofing-${mobileQuery}`}>
          <div>
            <h1>
              <strong>
                Choose between <br /> our top destinations:
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

export default LearnAndWinRoofing

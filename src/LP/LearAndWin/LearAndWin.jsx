import './LearAndWin.css'
import './LearAndWinMobile.css'
// Redux toolkit
import { useSelector } from 'react-redux'

import { useState, useRef } from 'react'
//Layout
import Header from '../../layouts/General/Header/Header'
import Footer from '../../layouts/General/Footer/Footer'
import Slider from 'react-slick'
//imagenes
import BannerLearAndWinUno from '../../assets/LearAndWin/BannerLearAndWinUno.png'
import BannerLearAndWinDos from '../../assets/LearAndWin/BannerLearAndWinDos.png'
import BannerLearAndWinUnoMobile from '../../assets/LearAndWin/BannerUnoMobile.png'
// Slider uno desktop
import ImgUno from '../../assets/LearAndWin/ImgUno.png'
import ImgDos from '../../assets/LearAndWin/ImgDos.png'
import ImgTres from '../../assets/LearAndWin/ImgTres.png'
import ImgCuatro from '../../assets/LearAndWin/ImgCuatro.png'
import ImgCinco from '../../assets/LearAndWin/ImgCinco.png'

//slider uno mobile
import pasoUnoUno from '../../assets/LearAndWin/PasoUnoUno.png'
import pasoDosUno from '../../assets/LearAndWin/PasoDosUno.png'
import pasoTresUno from '../../assets/LearAndWin/PasoTresUno.png'
import pasoCuatroUno from '../../assets/LearAndWin/PasoCuatroUno.png'
import pasoCincoUno from '../../assets/LearAndWin/PasoCincoUno.png'
import pasoUnoDos from '../../assets/LearAndWin/PasoUnoDos.png'
import pasoDosDos from '../../assets/LearAndWin/PasoDosDos.png'
import pasoTresDos from '../../assets/LearAndWin/PasoTresDos.png'
import pasoCuatroDos from '../../assets/LearAndWin/PasoCuatroDos.png'
import pasoCincoDos from '../../assets/LearAndWin/PasoCincoDos.png'

import { LP_LearAndWinK } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'
import FormsLeadsFL from '../../components/FormsLeads/FormsLeads_FL'

const LearnAndWin = () => {
  // const dispatch = useDispatch();
  const mobileQuery = useSelector((state) => state.states.mobileQuery)
  const [slide1, setSlide1] = useState(0)
  function SampleNextArrow(props) {
    const { onClick } = props
    return (
      <div className={`LearSl-${mobileQuery}`} onClick={onClick}>
        &gt;
      </div>
    )
  }

  function SamplePrevArrow(props) {
    const { onClick } = props
    return (
      <div className={`LearSli-${mobileQuery}`} onClick={onClick}>
        &lt;
      </div>
    )
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
      <div className={`ContendorLearWin-${mobileQuery}`}>
        <div className={`LearWin-${mobileQuery}`}>
          <div>
            {/* Version movil*/}
            <a href="#FormLearnmobile">{mobileQuery === 'mobile' ? <img src={BannerLearAndWinUnoMobile} /> : null} </a>

            {/* Version desktop*/}
            <a href="#FormLearn">{mobileQuery === 'desktop' ? <img src={BannerLearAndWinUno} /> : null}</a>
          </div>
        </div>
        <h1>
          Don't miss this once in a <br /> lifetime opportunity
        </h1>
        <h2>Learn while you enjoy and save money</h2>
      </div>

      {/* Version desktop*/}
      {mobileQuery === 'desktop' ? (
        <div className={`BannerDosLearWin-${mobileQuery}`}>
          <img src={BannerLearAndWinDos} />
        </div>
      ) : null}

      {/* Version movil*/}
      {mobileQuery === 'mobile' ? (
        <section className={`FondoForm-${mobileQuery}`}>
          <div className={`SliderLear-${mobileQuery}`}>
            <div className={`SliderUnoLear-${mobileQuery}`}>
              <Slider {...settings1}>
                <div className="BannerLearAndWinDosMobile"></div>
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
        <section className={`TextoLear-${mobileQuery}`}>
          <div>
            <h1>
              Choose between <br /> our top destinations:
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
              {slide1 === 4 ? (
                <img src={pasoCincoDos} alt="" onClick={() => setSlide1(4)} className="h-72" />
              ) : (
                <img src={pasoCincoUno} alt="" onClick={() => setSlide1(4)} className="h-72" />
              )}
            </div>{' '}
          </article>
        </section>
      ) : null}

      {/* Version desktop*/}
      {mobileQuery === 'desktop' ? (
        <section className={`FondoForm-${mobileQuery}`}>
          <article>
            <div>
              <FormsLeadsFL
                id="learn_and_win"
                campaign={'learn_and_win'}
                estilos={LP_LearAndWinK}
                destination={true}
                boton={'Send'}
                tittle="Sign up"
                products={true}
                email={true}
                phone={true}
                city={false}
              />
            </div>
          </article>

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

          <article>
            <div id="FormLearnmobile">
              <FormsLeadsFL
                id="learn_and_win"
                campaign={'learn_and_win'}
                estilos={LP_LearAndWinK}
                destination={true}
                boton={'Send'}
                tittle="Sign up"
                email={true}
                Products={true}
                phone={true}
                city={false}
              />
            </div>
          </article>
        </section>
      ) : null}

      <Footer color="blue" />
    </>
  )
}

export default LearnAndWin

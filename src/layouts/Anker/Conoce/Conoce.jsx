import './ConoceDesktop.css'
import './ConoceMobile.css'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// Import Images
import Anker767 from '../../../assets/anker/ANKER_767.png'
import Anker760 from '../../../assets/anker/ANKER_760.webp'
import Anker757 from '../../../assets/anker/ANKER_757.png'
import Anker531 from '../../../assets/anker/ANKER_531.png'
import AnkerPS400 from '../../../assets/anker/ANKER_PS400.png'
import EverFrost30 from '../../../assets/anker/EVERFROST_COOLER_30.png'
import EverFrost40 from '../../../assets/anker/EVERFROST_COOLER_40.png'
import EverFrost50 from '../../../assets/anker/EVERFROST_COOLER_50.png'

// Import Redux
import { useSelector } from 'react-redux'

function SampleNextArrow(props) {
  const { onClick } = props
  return (
    <div className={'RightButton'} onClick={onClick}>
      &gt;
    </div>
  )
}

function SamplePrevArrow(props) {
  const { onClick } = props
  return (
    <div className={'LeftButton'} onClick={onClick}>
      &lt;
    </div>
  )
}

const Conoce = () => {
  const mobileQuery = useSelector((state) => state.states.mobileQuery)
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    //autoplay: true,
    speed: 500,
    //autoplaySpeed: 5000,
    cssEase: 'linear',
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <div className={`Conoce-${mobileQuery}`}>
      <div>
        <h1>¡Conoce a la familia Anker!</h1>
      </div>
      <article>
        <Slider {...settings}>
          <div className={`card-${mobileQuery}`}>
            <section>
              <article>
                <h2>Anker 767</h2>
              </article>
              <picture>
                <img src={Anker767} alt="" />
              </picture>
              <div>
                <strong>Portátil con mango y ruedas</strong>
                <p>Generador Portátil de Energía 2048 Wh | 2400W</p>
                <p>Expandible a 4096Wh</p>
              </div>
              {/* <label>
                <button>Conoce más</button>
              </label> */}
            </section>
          </div>
          <div className={`card-${mobileQuery}`}>
            <section>
              <article>
                <h2>Anker 760</h2>
              </article>
              <picture>
                <img src={Anker760} alt="" />
              </picture>
              <div>
                <strong>Duplica la capacidad </strong>
                <strong>de tu batería portátil</strong>
                <p>
                  Utilice la batería de expansión 760 (2048 Wh) con Anker PowerHouse 767 (2048 Wh) y aumente la capacidad de la batería a 4096 Wh.
                </p>
              </div>
              {/* <label>
                <button>Conoce más</button>
              </label> */}
            </section>
          </div>
          <div className={`card-${mobileQuery}`}>
            <section>
              <article>
                <h2>Anker 757</h2>
              </article>
              <picture>
                <img src={Anker757} alt="" />
              </picture>
              <div>
                <strong>3,000 Ciclos de Batería</strong>
                <p>
                  Recarga un <strong>80% en 1 hora</strong>
                </p>
                <p>Duradero y resistente a caídas</p>
                <p>Generador Portátil de Energía 1229 Wh | 1500W</p>
              </div>
              {/* <label>
                <button>Conoce más</button>
              </label> */}
            </section>
          </div>
          <div className={`card-${mobileQuery}`}>
            <section>
              <article>
                <h2>Anker 531</h2>
              </article>
              <picture>
                <img src={Anker531} alt="" />
              </picture>
              <div>
                <strong>Panel Solar (200W)</strong>
                <p>Compatible solamente con Anker PowerHouse 767</p>
              </div>
              {/* <label>
                <button>Conoce más</button>
              </label> */}
            </section>
          </div>
          <div className={`card-${mobileQuery}`}>
            <section>
              <article>
                <h2>Anker Solix PS400</h2>
              </article>
              <picture>
                <img src={AnkerPS400} alt="" />
              </picture>
              <div>
                <strong>Panel Solar (400W)</strong>
                <p>Compatible solamente con Anker PowerHouse 767</p>
              </div>
              {/* <label>
                <button>Conoce más</button>
              </label> */}
            </section>
          </div>
          <div className={`card-${mobileQuery}`}>
            <section>
              <article>
                <h2>EverFrost</h2>
                <p>Powered Cooler 30</p>
              </article>
              <picture>
                <img src={EverFrost30} alt="" />
              </picture>
              <div>
                <strong>Diseño EasyTow™</strong>
                <p>Sistema eficiente</p>
                <p>Control con App Inteligente</p>
                <span>Capacidad de 33 L | 42 Horas de Batería</span>
              </div>
              {/* <label>
                <button>Conoce más</button>
              </label> */}
            </section>
          </div>
          <div className={`card-${mobileQuery}`}>
            <section>
              <article>
                <h2>EverFrost</h2>
                <p>Powered Cooler 40</p>
              </article>
              <picture>
                <img src={EverFrost40} alt="" />
              </picture>
              <div>
                <strong>100W Entrada Solar</strong>
                <p>(Una de las cuatro formas que carga)</p>
                <p>Refrigera a -4°F a 68°F (-20°C a 20°C)</p>
                <span>Capacidad de 43 L | 35 Horas de Batería</span>
              </div>
              {/* <label>
                <button>Conoce más</button>
              </label> */}
            </section>
          </div>
          <div className={`card-${mobileQuery}`}>
            <section>
              <article>
                <h2>EverFrost DualZone</h2>
                <p>Powered Cooler 50</p>
              </article>
              <picture>
                <img src={EverFrost50} alt="" />
              </picture>
              <div>
                <strong>Nevera Portátil con Batería 299Wh</strong>
                <p>0% Uso de Hielo, 100% Almacenaje</p>
                <span>Capacidad de 53L | 27 Horas de Batería</span>
              </div>
              {/* <label>
                <button>Conoce más</button>
              </label> */}
            </section>
          </div>
        </Slider>
      </article>
    </div>
  )
}

export default Conoce

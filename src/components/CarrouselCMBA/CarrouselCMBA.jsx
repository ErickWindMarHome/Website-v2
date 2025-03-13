// Redux toolkit
import { useSelector, useDispatch } from 'react-redux'

//Layout
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const CarrouselFundationAnker = () => {
  // const dispatch = useDispatch();
  const mobileQuery = useSelector((state) => state.states.mobileQuery)

  {
    /* Version movil*/
  }

  function SampleNextArrow(props) {
    const { onClick } = props
    return (
      <div
        className="absolute left-[72%] top-[40%] z-20 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-[1px] border-none bg-none font-[sofia] text-[35px] font-medium text-white"
        onClick={onClick}
      >
        &gt;
      </div>
    )
  }

  function SamplePrevArrow(props) {
    const { onClick } = props
    return (
      <div
        className="absolute right-[68%] top-[40%] z-20 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-[1px] border-none bg-none font-[sofia] text-[35px] font-medium text-white"
        onClick={onClick}
      >
        &lt;
      </div>
    )
  }
  const settings1 = {
    dots: false,
    infinite: true,
    slidesToShow: mobileQuery ? 2.3 : 2.5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <>
      <div className="flex w-screen flex-col items-center justify-center">
        <div className="h-1/5 w-[100%] cursor-[grab]">
          {/* Version movil*/}
          {mobileQuery === 'mobile' ? (
            <Slider {...settings1}>
              <img src="https://scms.windmar.com/uploads/Tesla_arte_SI_1_9637b9b632.svg" />
              <img src="https://scms.windmar.com/uploads/Tesla_arte_SI_2_1dff044386.svg" />
              <img src="https://scms.windmar.com/uploads/Tesla_arte_SI_3_65b7af13c4.svg" />
              <img src="https://scms.windmar.com/uploads/Tesla_arte_SI_4_aaeae29857.svg" />
              <img src="https://scms.windmar.com/uploads/Tesla_arte_SI_5_0d5c35daa3.svg" />
              <img src="https://scms.windmar.com/uploads/Tesla_arte_SI_6_7ff422f911.svg" />
              <img src="https://scms.windmar.com/uploads/Tesla_arte_SI_7_d5910df6ec.svg" />
              <img src="https://scms.windmar.com/uploads/Tesla_arte_SI_8_f682581d63.svg" />
            </Slider>
          ) : null}
        </div>
      </div>
    </>
  )
}

export default CarrouselFundationAnker

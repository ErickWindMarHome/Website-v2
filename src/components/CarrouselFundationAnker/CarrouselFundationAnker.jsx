import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const CarrouselFundationAnker = () => {
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
  }

  function SampleNextArrow(props) {
    const { onClick } = props
    return (
      <div
        className="absolute left-[79%] top-[40%] z-20 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-[1px] border-[#00a6e0] bg-white font-[sofia] text-[30px] font-medium text-[#00a6e0]"
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
        className="absolute right-[80%] top-[40%] z-20 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-[1px] border-[#00a6e0] bg-white font-[sofia] text-[30px] font-medium text-[#00a6e0]"
        onClick={onClick}
      >
        &lt;
      </div>
    )
  }

  return (
    <>
      <div className="flex w-screen flex-col items-center justify-center">
        <div className="h-1/5 w-[60%] cursor-[grab]">
          <div className="md:hidden">
            <Slider {...settings1}>
              <img src="https://scms.windmar.com/uploads/219_Landing_Page_Fundacion_WH_ANKER_arte_anker_mobile_11_1d3056faad.svg" />
              <img src="https://scms.windmar.com/uploads/219_Landing_Page_Fundacion_WH_ANKER_arte_anker_mobile_12_cf4cd63807.svg" />
              <img src="https://scms.windmar.com/uploads/219_Landing_Page_Fundacion_WH_ANKER_arte_anker_mobile_13_8e35436719.svg" />
            </Slider>
          </div>
          <div className="hidden md:block">
            <Slider {...settings1}>
              <img src="https://scms.windmar.com/uploads/Group_38_fc528c9c6f.svg" />
              <img src="https://scms.windmar.com/uploads/Group_40_a59ca8c758.svg" />
              <img src="https://scms.windmar.com/uploads/Group_39_036722fa36.svg" />
            </Slider>
          </div>
        </div>
      </div>
    </>
  )
}

export default CarrouselFundationAnker

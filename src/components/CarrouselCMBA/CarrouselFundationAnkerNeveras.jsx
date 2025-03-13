// Redux toolkit
import { useSelector, useDispatch } from 'react-redux'

//Layout
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const CarrouselFundationAnkerNeveras = () => {
  const mobileQuery = useSelector((state) => state.states.mobileQuery)

  function SampleNextArrow(props) {
    const { onClick } = props
    return (
      <div
        className="absolute left-[72%] top-[45%] z-20 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border border-[#00a6e0] bg-white font-[sofia] text-[20px] font-medium text-[#00a6e0]"
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
        className="absolute right-[65%] top-[46%] z-20 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border border-[#00a6e0] bg-white font-[sofia] text-[20px] font-medium text-[#00a6e0]"
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
        <div className="w-[100%] cursor-[grab]">
          <Slider {...settings1}>
            <div className="ml-[2%]">
              <img src="https://scms.windmar.com/uploads/Group_43_874debcff9.png" />
            </div>

            <div className="ml-[2%]">
              <img src="https://scms.windmar.com/uploads/Group_44_17a592ff79.png" />
            </div>

            <div className="ml-[2%]">
              <img src="https://scms.windmar.com/uploads/Group_45_ba96d23842.png" />
            </div>
            <div className="ml-[2%]">
              <img src="https://scms.windmar.com/uploads/Group_46_46575e7dd1.png" />
            </div>
            <div className="ml-[2%]">
              <img src="https://scms.windmar.com/uploads/Group_47_0feda5a46a.png" />
            </div>
            <div className="ml-[2%]">
              <img src="https://scms.windmar.com/uploads/Group_48_7d01f42478.png" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  )
}

export default CarrouselFundationAnkerNeveras

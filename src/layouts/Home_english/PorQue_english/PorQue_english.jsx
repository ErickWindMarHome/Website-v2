import { useSelector } from 'react-redux'
import img1 from '../../../assets/WidnmarIcono01.png'
import img2 from '../../../assets/WidnmarIcono02.png'
import img3 from '../../../assets/WidnmarIcono03.png'
import img4 from '../../../assets/WidnmarIcono04.png'
import img5 from '../../../assets/WidnmarIcono05.png'
import img6 from '../../../assets/WidnmarIcono06.png'
import img7 from '../../../assets/WidnmarIcono07.png'
import img8 from '../../../assets/WidnmarIcono08.png'

const PorQue_english = () => {
  const mobileQuery = useSelector((state) => state.states.mobileQuery)
  const locacion = useSelector((state) => state.states.locacion)

  return locacion === 'pr' ? (
    <>
      <div className="box-border flex w-full items-center justify-center bg-[#e5e5eb] p-[50px] text-[#234992]" id="conocenos">
        <article className="mb-[40px] box-border flex w-full flex-col items-center justify-center text-[3rem] font-bold">
          <div className="flex items-center justify-center">
            <div className="mb-[5vh] w-full text-center text-[30px] md:text-[50px]">WHY WINDMAR HOME?</div>
          </div>
          <article className="flex h-full w-full flex-col items-center justify-center md:h-full md:w-[80%] md:flex-row">
            <img
              className="W-[20%] mr-[20px] md:w-[30%]"
              src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/PorQue/WidnmarIcono05.webp"
              alt=""
            />
            <img
              className="W-[20%] mr-[20px] md:w-[30%]"
              src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/PorQue/WidnmarIcono06.webp"
              alt=""
            />
            <img
              className="W-[20%] mr-[20px] md:w-[30%]"
              src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/PorQue/WidnmarIcono07.webp"
              alt=""
            />
            <img
              className="W-[20%] mr-[20px] md:w-[30%]"
              src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/PorQue/WidnmarIcono08.webp"
              alt=""
            />
          </article>
          <p className="box-border pt-[40px] text-justify text-[1.15rem] font-normal" id="Description">
            We have over 20 years of experience energizing as many homes as business in Puerto Rico and recently in Florida, by renewable energy. Our
            team of highly trained professionals guarantees you the best service of photovoltaic solar systems and other alternatives of solar energy.{' '}
            <br />
            <strong>¡TRUST THE EXPERTS, JOIN WINDMAR HOME!</strong>
          </p>
        </article>
      </div>
    </>
  ) : (
    <>
      <div className="box-border flex w-full items-center justify-center bg-[#e5e5eb] p-[100px] text-[#234992]" id="conocenos">
        <article className="mb-[40px] box-border flex w-full flex-col items-center justify-center text-[3rem] font-bold">
          <div className="flex items-center justify-center">
            <div className="text-center">WHY WINDMAR SOLAR + ROOFING?</div>
          </div>
          <article className="flex h-full w-full flex-col items-center justify-center md:h-full md:w-[80%] md:flex-row">
            <img
              className="W-[20%] mr-[20px] md:w-[30%]"
              src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/PorQue/WidnmarIcono05.webp"
              alt=""
            />
            <img
              className="W-[20%] mr-[20px] md:w-[30%]"
              src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/PorQue/WidnmarIcono06.webp"
              alt=""
            />
            <img
              className="W-[20%] mr-[20px] md:w-[30%]"
              src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/PorQue/WidnmarIcono07.webp"
              alt=""
            />
            <img
              className="W-[20%] mr-[20px] md:w-[30%]"
              src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/PorQue/WidnmarIcono08.webp"
              alt=""
            />
          </article>
          <p className="box-border pt-[40px] text-justify text-[1.15rem] font-normal" id="Description">
            We have more than 20 years of experience energizing both homes and businesses in Puerto Rico and more recently in Florida, through
            renewable energy. Our team of highly trained professionals guarantees the best service in solar photovoltaic systems and other solar
            energy alternatives. Trust on the experts, join to Windmar Solar + Roofing!
          </p>
        </article>
      </div>
    </>
  )
}

export default PorQue_english

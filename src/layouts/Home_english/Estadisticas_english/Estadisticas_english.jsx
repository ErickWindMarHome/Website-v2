import { useSelector } from 'react-redux'
import cimg5 from '../../../assets/svg/logo-tesla.webp'
import { Link } from 'react-router-dom'

const Estadisticas_english = () => {
  const mobileQuery = useSelector((state) => state.states.mobileQuery)
  const locacion = useSelector((state) => state.states.locacion)
  console.log('La locacion es:', locacion, ' en Estadisticas', locacion === 'fl' ? 'fl' : 'pr')
  return (
    <div className="box-border flex w-full w-screen flex-col items-center justify-center border-b border-[#234992] px-[8vw] py-20">
      {locacion === 'fl' ? (
        <p className="m-2.5 w-[85%] text-center text-[25px] font-bold uppercase text-[#234992] md:w-full">
          WE’RE THE{' '}
          <span className="relative inline-block">
            <span className="absolute inset-0 h-[3vh] bg-[#ed8936]" style={{ top: '50%', transform: 'translateY(-50%)' }} />
            <span className="relative z-10">FASTEST GROWING COMPANY</span>
          </span>
          <br />
          THAT SERVICES ALL SEGMENTS OF THE SOLAR ENERGY MARKET
        </p>
      ) : (
        <p className="m-2.5 w-[85%] text-center text-[25px] font-bold uppercase text-[#234992] md:w-full">
          WE ARE THE BIGGEST AND #1
          <span className="relative inline-block">
            <span className="absolute inset-0 h-[3vh] bg-[#ed8936]" style={{ top: '50%', transform: 'translateY(-50%)' }} />
            <span className="relative z-10"> SOLAR ENERGY COMPANY OF THE CARIBBEAN,</span>
          </span>
          <br />
          PROVIDING SERVICES TO ALL MARKET SEGMENTS.
        </p>
      )}
      {locacion === 'fl' ? (
        <div className="flex flex-wrap items-center justify-center gap-[3vw]">
          <article className="flex flex-wrap justify-center gap-[6vw]">
            <div className="flex w-full flex-col items-center justify-center text-justify text-[0.95em] text-[#234992] md:w-[300px] md:text-left">
              <Link
                className="flex flex-col items-center justify-center text-justify text-[0.95em] text-[#234992] md:text-left md:text-[0.95em]"
                to="/fl/how-it-works/"
              >
                <img
                  className="w-[70%] border-b-2 border-[#234992] md:w-full md:border-none"
                  src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Estadisticas/logo-residential.webp"
                  alt=""
                />
              </Link>
              <strong className="w-full text-center text-[1.3em] text-[#234992] md:text-justify">RESIDENTIAL</strong>
              <br />
              With our Solar Photovoltaic System you will have all the power of the sun energizing your home 24 hours a day. You will improve your
              quality of life and take care of your pocket.
            </div>
            <div className="flex w-full flex-col items-center justify-center text-justify text-[0.95em] text-[#234992] md:w-[300px] md:text-left">
              <Link to="/fl/roofing/">
                <img
                  className="w-[70%] border-b-2 border-[#234992] md:w-full md:border-none"
                  src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Estadisticas/logo-roofing.webp"
                  alt=""
                />
              </Link>
              <strong className="w-full text-center text-[1.3em] text-[#234992] md:text-justify">ROOFING</strong>
              <br />
              Roof sealing will help protect the structure of your home against pollution produced by smoke, rain, dust and gases that cause damages
              both inside and outside of your property.
            </div>
            <div className="flex w-full flex-col items-center justify-center text-justify text-[0.95em] text-[#234992] md:w-[300px] md:text-left">
              <Link
                className="flex flex-col items-center justify-center text-justify text-[0.95em] text-[#234992] md:text-left md:text-[0.95em]"
                to="/fl/how-it-works/"
              >
                <img className="w-[70%] border-b-2 border-[#234992] md:w-full md:border-none" src={cimg5} alt="" />
              </Link>
              <strong className="w-full text-center text-[1.3em] text-[#234992] md:text-justify">TESLA BATTERY</strong>
              <br />
              Discover Tesla&apos;s innovative Powerwall energy storage solution designed to bring energy independence and stability to your home.
            </div>
          </article>
        </div>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-[3vw]">
          <article className="flex flex-wrap justify-center gap-[6vw]">
            <div className="flex w-full flex-col items-center justify-center text-justify text-[0.95em] text-[#234992] md:w-[300px] md:text-left">
              <Link className="w-[70%] border-b-2 border-[#234992] md:w-full md:border-none" to="/pr/como-funciona/">
                <img
                  className="w-[70%] border-b-2 border-[#234992] md:w-full md:border-none"
                  src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Estadisticas/logo-residential.webp"
                  alt=""
                />
              </Link>
              <strong className="w-full text-center text-[1.3em] text-[#234992] md:text-justify">RESIDENTIAL</strong>
              <br />
              With our photovoltaic solar system, you will have all the power of the sun energizing your home the 24 hours of the day. You will
              improve your quality of life and will take care of your money.
            </div>
            <div className="flex w-full flex-col items-center justify-center text-justify text-[0.95em] text-[#234992] md:w-[300px] md:text-left">
              <Link className="w-[70%] border-b-2 border-[#234992] md:w-full md:border-none" to="/pr/como-funciona/">
                <img
                  className="w-[70%] border-b-2 border-[#234992] md:w-full md:border-none"
                  src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Estadisticas/logo-commercial.webp"
                  alt=""
                />
              </Link>
              <strong className="w-full text-center text-[1.3em] text-[#234992] md:text-justify">COMMERCIAL</strong>
              <br />
              We provide solar panels installation services to companies that wish to control their energy cost while increasing their budget for
              investment in their projects.
            </div>
          </article>

          <article className="flex flex-wrap justify-center gap-[6vw]">
            <div className="flex w-full flex-col items-center justify-center text-justify text-[0.95em] text-[#234992] md:w-[300px] md:text-left">
              <Link className="w-[70%] border-b-2 border-[#234992] md:w-full md:border-none" to="/pr/roofing/">
                <img
                  className="w-[70%] border-b-2 border-[#234992] md:w-full md:border-none"
                  src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Estadisticas/logo-roofing.webp"
                  alt=""
                />
              </Link>
              <strong className="w-full text-center text-[1.3em] text-[#234992] md:text-justify">ROOFING</strong>
              <br />
              Roofing will help you to protect your home structure, preventing air, smoke, water, dust and gases to damage the interior and exterior
              of your propriety.
            </div>
            <div className="flex w-full flex-col items-center justify-center text-justify text-[0.95em] text-[#234992] md:w-[300px] md:text-left">
              <Link className="w-[70%] border-b-2 border-[#234992] md:w-full md:border-none" to="/pr/anker-pr/">
                <img
                  className="w-[70%] border-b-2 border-[#234992] md:w-full md:border-none"
                  src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Estadisticas/logo-anker.webp"
                  alt=""
                />
              </Link>
              <strong className="w-full text-center text-[1.3em] text-[#234992] md:text-justify">ANKER BATTERIES</strong>
              <br />
              Feel the comfort of the transportable Anker Battery with Windmar Home, guarantying that your devices to be connected in any place
              wherever you are.
            </div>
          </article>
        </div>
      )}
    </div>
  )
}

export default Estadisticas_english

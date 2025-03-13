import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

//Logo

const Footer = () => {
  const locacion = useSelector((state) => state.states.locacion)
  return locacion === 'pr' ? (
    <footer className="flex w-full flex-col items-center justify-start bg-[#1e429b]">
      <section className="flex w-[80%] flex-col items-center justify-start font-semibold text-white md:flex-row">
        <span className="mx-[4vh] mt-2 flex w-full flex-col items-center justify-around">
          <section className="flex w-full items-center justify-center">
            <img
              className="w-[40%] md:w-[20%]"
              src="https://windmar-website-cms.s3.amazonaws.com/Layouts/General/Footer/logo_pr-blanco.webp"
              alt=""
            />
            <section className="ml-6 flex w-[40%] flex-col items-center justify-center rounded-[10px] border border-white bg-[#1e429b] px-2 py-2 text-[15px] font-normal transition-all duration-100 ease-in-out hover:bg-white md:hidden">
              <Link className="w-full text-center text-[#ffffff] no-underline hover:text-black" to="/pr/politica-de-privacidad" target="_blank">
                Privacy Policy
              </Link>
            </section>
          </section>

          <section className="w-full">
            <h5 className="text-[12px] font-[400] md:text-[15px]">
              Establecido en el 2002, WindMar Home es la compañía local más grande y con más experiencia en la industria de energía renovable.
            </h5>

            <h5 className="text-[12px] font-[400] md:text-[15px]">
              <strong> Dirección: </strong> 1255 Avenida F.D. Roosevelt, San Juan, 00920, Puerto Rico.
            </h5>
            <h5 className="text-[12px] font-[400] md:text-[15px]">
              <strong>Teléfonos: </strong>787-641-2331 / 787-395-7766.
            </h5>
            <h5 className="text-[12px] font-[400] md:text-[15px]">
              <strong>Email:</strong> Info@windmarhome.com
            </h5>
          </section>
        </span>
        <section className="mx-[6vh] hidden w-[30%] items-start justify-center rounded-[10px] border border-white bg-[#1e429b] py-2.5 text-[1.3rem] font-normal transition-all duration-100 ease-in-out hover:bg-white md:flex">
          <Link
            className="font-midium w-full text-center text-[#ffffff] no-underline hover:text-black"
            to="/pr/politica-de-privacidad"
            target="_blank"
          >
            Privacy Policy
          </Link>
        </section>
      </section>
      <section className="mb-[10vh] w-full text-center text-white">
        <h3 className="text-[15px] md:text-[20px]">© 2024</h3>
        <div>&nbsp;</div>
      </section>
    </footer>
  ) : (
    <footer className="flex w-full flex-col items-center justify-start bg-[#1e429b]">
      <section className="flex w-[80%] flex-col items-center justify-start font-semibold text-white md:flex-row">
        <span className="mx-[4vh] mt-2 flex w-full flex-col items-center justify-around">
          <section className="flex w-full items-center justify-center">
            <img
              className="w-[40%] md:w-[20%]"
              src="https://windmar-website-cms.s3.amazonaws.com/Layouts/General/Footer/logo_fl-blanco.webp"
              alt=""
            />
            <section className="ml-6 flex w-[40%] flex-col items-center justify-center rounded-[10px] border border-white bg-[#1e429b] px-2 py-2 text-[15px] font-normal transition-all duration-100 ease-in-out hover:bg-white md:hidden">
              <Link className="w-full text-center text-[#ffffff] no-underline hover:text-black" to="/fl/privacy-policy" target="_blank">
                Privacy Policy
              </Link>
            </section>
          </section>

          <section className="w-full">
            <h5 className="text-[12px] font-[400] md:text-[15px]">
              Since 2002, WindMar Group has been a leading solar installer in the Caribbean, and more recently Florida. Currently supplying over 58
              megawatts of power from the Sun.
            </h5>
            <h5 className="text-[12px] font-[400] md:text-[15px]">
              <strong>Address: </strong>6753 Kingspointe Pkwy STE 107, Orlando, FL 32819, Estados Unidos.
            </h5>
            <h5 className="text-[12px] font-[400] md:text-[15px]">
              {' '}
              <strong>Phone:</strong> 407-308-0099.
            </h5>
            <h5 className="text-[12px] font-[400] md:text-[15px]">
              {' '}
              <strong>Email:</strong> Info@windmarhome.com
            </h5>
          </section>
        </span>
        <section className="mx-[6vh] hidden w-[30%] items-start justify-center rounded-[10px] border border-white bg-[#1e429b] py-2.5 text-[1.3rem] font-normal transition-all duration-100 ease-in-out hover:bg-white md:flex">
          <Link className="font-midium w-full text-center text-[#ffffff] no-underline hover:text-black" to="/fl/privacy-policy" target="_blank">
            Privacy Policy
          </Link>
        </section>
      </section>
      <section className="mb-[10vh] w-full text-center text-white">
        <h3 className="text-[15px] md:text-[20px]">© 2024</h3>
        <div>&nbsp;</div>
      </section>
    </footer>
  )
}

export default Footer

import Footer from '../../layouts/General/Footer/Footer'
import Header from '../../layouts/General/Header/Header'
import Pixel from '../../components/Pixel/Pixel'
import useTitle from '../../hooks/useTitle'
import { Link } from 'react-router-dom'

function SolarFL() {
  useTitle('The best solar energy system - WindMar')
  return (
    <>
      <Pixel pixelID="1826134724345924" />
      <Header />
      <div className="relative flex h-[87vh] w-screen justify-center">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black to-transparent md:via-transparent"></div>
        <img src="https://windmar-website-cms.s3.amazonaws.com/Windmar1.0/PR/sistema-paneles-solares.webp" alt="" className="w-full object-cover" />
        <h1 className="absolute bottom-10 left-10 w-[70%] text-balance text-2xl font-bold text-white lg:text-7xl">ENJOY CLEAN, RENEWABLE ENERGY</h1>
      </div>
      <div>
        <h2 className="mx-auto w-[90%] py-3 pb-0 text-center text-2xl font-bold text-[#1e429b] lg:w-[70%] lg:p-8">
          Get solar energy with windmar solar + roofing, save and reduce the cost of your energy bill and enjoy all the advantages of having a quality
          solar photovoltaic system along with the Tesla Powerwall 3 battery with state-of-the-art technology energizing your home.
        </h2>

        {/* Beneficios */}

        <div className="mx-auto flex w-[90%] max-w-[1600px] flex-col items-center justify-around gap-4 lg:flex-row-reverse">
          <img src="https://windmar-website-cms.s3.amazonaws.com/Pages/Solar/Beneficios.webp" alt="" className="lg:w-[50%]" />
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="flex flex-col items-start justify-center gap-2">
              <h1 className="text-center text-xl font-bold uppercase text-[#1e429b] lg:text-left lg:text-4xl">
                Access all the benefits that solar energy has for you
              </h1>
            </div>
            <div className="w-[90%] text-left">
              <ul className="flex flex-col gap-2 px-4">
                <li className="list-decimal marker:font-bold marker:text-[#f89b24]">
                  <p>Supply the energy needs of your home and/or business with solar energy.</p>
                </li>
                <li className="list-decimal marker:font-bold marker:text-[#f89b24]">
                  <p>Enjoy free energy.</p>
                </li>
                <li className="list-decimal marker:font-bold marker:text-[#f89b24]">
                  <p>Save and take care of your pocket.</p>
                </li>
                <li className="list-decimal marker:font-bold marker:text-[#f89b24]">
                  <p>Stop worrying about blackouts.</p>
                </li>
                <li className="list-decimal marker:font-bold marker:text-[#f89b24]">
                  <p>Increase the value of your property.</p>
                </li>
                <li className="list-decimal marker:font-bold marker:text-[#f89b24]">
                  <p>24/7 backup power.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Como Funciona */}

      <div className="flex w-full flex-col items-center justify-center gap-8 pt-8 lg:h-[80%] lg:flex-row">
        <div className="relative">
          <img src="https://windmar-website-cms.s3.amazonaws.com/Pages/Solar/Powerwall.webp" alt="" className="w-full lg:h-full" />
          <div className="absolute inset-0 h-[13%] w-full bg-gradient-to-b from-[#FFFFFF] to-transparent md:via-transparent"></div>
          <div className="absolute bottom-0 h-[30%] w-full bg-gradient-to-t from-[#FFFFFF] to-transparent md:via-transparent"></div>
        </div>
        <div className="left-12 flex w-[90%] flex-col items-center justify-center gap-8 lg:absolute lg:w-[50%]">
          <div className="flex flex-col items-center justify-center gap-2 lg:items-start">
            <h1 className="text-center text-4xl font-bold text-[#1e429b] lg:text-left">TESLA POWERWALL</h1>
          </div>
          <div className="text-left lg:w-[85%]">
            <ul className="flex flex-col gap-2 px-4">
              <li className="list-decimal marker:font-bold marker:text-[#f89b24]">
                <p>
                  <span className="font-bold text-[#1e429b]">Solar Panels</span> The photovoltaic panel receives energy from the sun and converts it
                  into direct current (DC).
                </p>
              </li>
              <li className="list-decimal marker:font-bold marker:text-[#f89b24]">
                <p>
                  <span className="font-bold text-[#1e429b]">Micro Inverters</span> Installed under each solar panel, the inverter converts direct
                  current (DC) to alternating current (AC) that your home uses.
                </p>
              </li>
              <li className="list-decimal marker:font-bold marker:text-[#f89b24]">
                <p>
                  <span className="font-bold text-[#1e429b]">Battery (Optional)</span> We integrate batteries that store the solar energy produced in
                  excess during the day. You can use that energy at night or during a power outage. We also offer alternatives that allow you to
                  operate your solar system with batteries without being interconnected to a power supplier.
                </p>
              </li>
              <li className="list-decimal marker:font-bold marker:text-[#f89b24]">
                <p>
                  <span className="font-bold text-[#1e429b]">Smart Meter</span> Installed under the Net Metering Program, this meter reads the flow of
                  electricity in both directions. Solar energy produced in excess during the day is credited to the electric company for use at night
                  or in the future.
                </p>
              </li>
              <li className="list-decimal marker:font-bold marker:text-[#f89b24]">
                <p>
                  <span className="font-bold text-[#1e429b]">Monitoring</span> All of our solar systems can be monitored via the internet. You can see
                  solar production, consumption, and battery charge at any time.
                </p>
              </li>
            </ul>
          </div>
          <Link to="/fl/switch-solar-energy" className="rounded-full bg-[#1e429b] px-4 py-3 font-bold text-white">
            FREE SAVINGS REPORT
          </Link>
        </div>
      </div>

      {/* Facturas */}

      <div className="mx-auto flex w-[90%] max-w-[1600px] flex-col items-center justify-around gap-4 pb-8 lg:flex-row-reverse">
        <img src="https://windmar-website-cms.s3.amazonaws.com/Pages/Solar/Facturas.webp" alt="" className="w-[90%] lg:w-[50%]" />
        <div className="flex flex-col items-center justify-center gap-8 lg:items-start">
          <div className="flex flex-col items-start justify-center gap-2 lg:justify-start">
            <h1 className="text-center text-4xl font-bold uppercase text-[#1e429b]">COMPARE BILLS</h1>
            <h2 className="text-center font-bold text-[#f89b24] lg:text-left lg:text-xl">TAKE CONTROL OF YOUR ENERGY EXPENDITURE</h2>
          </div>
          <div className="w-[90%] text-left">
            <p>
              When you switch to our WindMar Solar system, you establish a fixed cost of electricity to avoid surprises in your electricity bill. It
              is the smart way to save in the short and long term, and reduce expenses in your home or business. It is an investment in the future
              that will generate benefits for you for many years to come.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default SolarFL

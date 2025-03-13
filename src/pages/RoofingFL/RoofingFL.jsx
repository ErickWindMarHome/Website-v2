import './RoofingFLdesktop.css'
import './RoofingFLmobile.css'
// Import images
import WindmarSolarRoofing from '../../assets/roofing-fl/WindmarSolarRoofing.png'
import shutterstock2 from '../../assets/roofing-fl/shutterstock2.jpg'
import shutterstock3 from '../../assets/roofing-fl/shutterstock3.jpg'
import shutterstock4 from '../../assets/roofing-fl/shutterstock4.jpg'
import revsLPRevisado from '../../assets/roofing-fl/revsLPRevisado.png'
import check from '../../assets/svg/check.svg'
import table1 from '../../assets/roofing-fl/table1.png'
import roofingfeat1 from '../../assets/roofing-fl/roofingfeat1.png'
import roofingfeat2 from '../../assets/roofing-fl/roofingfeat2.png'
import roofingfeat3 from '../../assets/roofing-fl/roofingfeat3.png'
import roofingfeat4 from '../../assets/roofing-fl/roofingfeat4.png'
import roofingfeat5 from '../../assets/roofing-fl/roofingfeat5.png'
import roofingfeat6 from '../../assets/roofing-fl/roofingfeat6.png'
import roofingfeat7 from '../../assets/roofing-fl/roofingfeat7.png'
import roofingfeat8 from '../../assets/roofing-fl/roofingfeat8.png'
import roofingfeat9 from '../../assets/roofing-fl/roofingfeat9.png'

import Pixel from '../../components/Pixel/Pixel'
import Header from '../../layouts/General/Header/Header'
import Barra from '../../layouts/General/Barra/Barra'

//Import Redux
import { useSelector, useDispatch } from 'react-redux'

//Import react hooks

// Librearias
import validator from 'validator'

import { getUTMs } from '../../features/getUTM/getUTM'
import { formDataUTM } from '../../features/formDataUTM/formDataUTM'
import { SendAPI } from '../../features/Zoho/CRMAPI/CRMAPI'

// Importamos los estados de Redux
import {
  setFirst_Name,
  setLast_Name,
  setPhone,
  setEmail,
  setCity,
  setStreet,
  setZip_Code,
  setLanguage_Preference,
} from '../../features/states/formDataSlace'
import useTitle from '../../hooks/useTitle'
import { Helmet } from 'react-helmet'
import FormsLeadsFL from '../../components/FormsLeads/FormsLeads_FL'
import { LP_RoofingFL } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'

const RoofingFL = () => {
  useTitle('Protect your home with our Roofing equipment - WindMar')

  const { mobileQuery } = useSelector((state) => state.states)

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Forget cracked shingles, water leaks and protect your home by  roof sealing with Windmar Solar + Roofing! fill out your information below for a free estimate."
        />
      </Helmet>
      <Header />
      <div className={`RoofingFL-${mobileQuery}`}>
        <main>
          {mobileQuery === 'desktop' ? (
            <header>
              <img src={WindmarSolarRoofing} alt="" />
            </header>
          ) : null}

          <h3 id="top">RAIN OR SHINE</h3>
          <h1>
            WINDMAR ROOFING <br />
            DOES THE JOB.
          </h1>
          <div>
            <section>
              <h5>REROOF WITH WINDMAR</h5>
              <h3>ROOFING TODAY</h3>
              <p>
                Forget cracked shingles, water leaks and protect your home by roof sealing with Windmar Solar + Roofing! fill out your information
                below for a free estimate.
              </p>
            </section>
            <FormsLeadsFL
              id="roofing_fl"
              campaign={'roofing_fl'}
              estilos={LP_RoofingFL}
              phone={true}
              email={true}
              placeholder={true}
              product={['Roofing']}
              city={true}
              // products={true}
            />
          </div>
        </main>
        <main>
          <h2>TOP RESULTS FOR</h2>
          <section>
            <img src={shutterstock2} alt="" />
          </section>
          <section>
            <h1>ANY ROOF!</h1>
          </section>
          <div>
            <img src={shutterstock3} alt="" />
            <img src={shutterstock4} alt="" />
          </div>
        </main>
        <main>
          <div>
            <h3>We are dedicated to providing the best roofing experience for you and your home.</h3>
            <h2>LISTEN TO WHAT SATISFIED CUSTOMERS HAVE TO SAY!</h2>
            <hr />
          </div>
          <article>
            <section>
              <p>“WindMar Roofing exceeded our expectations in every way..”</p>
              <strong>– EMILY T.</strong>
              <p>Miami, FL</p>
            </section>
            <section>
              <p>“We had a fantastic experience with WindMar Roofing. The result is impressive.”</p>
              <strong>– DAVID AND MARIA S.</strong>
              <p>Orlando, FL</p>
            </section>
            <section>
              <p>“If you want top-notch roofing services in Florida, WindMar Roofing is the name to trust.”</p>
              <strong>– ROBERT AND LINDA M.</strong>
              <p>Tampa, FL</p>
            </section>
          </article>
        </main>
        <main>
          <div>
            <h3>WARRANTIES THAT</h3>
            <h1>GUARANTEE</h1>
            <h2>PEACE OF MIND</h2>
            <p>
              Together with CertainTeed, we provide the best of the best. CertainTeed warrants that its shingles will be free from manufacturing
              defects, and provides the extra assurance of SureStart™ protection.
            </p>
          </div>
          <img src={revsLPRevisado} alt="" />
          <section>
            <article>
              <h1>LANDMARK</h1>
              <ul>
                <li>
                  <img src={check} alt="" />
                  <p>Lifetime, limited transferable warranty</p>
                </li>
                <li>
                  <img src={check} alt="" />
                  <p>10-year manufacturer defect warranty</p>
                </li>
                <li>
                  <img src={check} alt="" />
                  <p>10-years StreakFighter warranty</p>
                </li>
                <li>
                  <img src={check} alt="" />
                  <p>15 years, 110 mph wind warranty</p>
                </li>
                <li>
                  <img src={check} alt="" />
                  <p>14 color options</p>
                </li>
              </ul>
            </article>
            <section>
              <h1>LANDMARK PRO</h1>
              <div>
                <div>
                  <ul>
                    <li>
                      <img src={check} alt="" />
                      <strong>4-Star Protection</strong>
                    </li>
                  </ul>
                  <p>The extra mesure of protection when a credentialed company installs an integrity Roof System.</p>
                  <br />
                  <img src={table1} alt="" />
                </div>
                <article>
                  <ul>
                    <li>
                      <img src={check} alt="" />
                      Lifetime, limited transferable warranty
                    </li>
                    <li>
                      <img src={check} alt="" />
                      10-years extended to 50 manufacturer warranty against defects
                    </li>
                    <li>
                      <img src={check} alt="" />
                      15-years StreakFighter warranty
                    </li>
                    <li>
                      <img src={check} alt="" />
                      17 Max Def color options
                    </li>
                  </ul>
                </article>
              </div>
            </section>
          </section>
        </main>
        <main>
          <div>
            <section>
              <h1>BENEFITS</h1>
              <h4>YOU WON’T FIND ANYWHERE ELSE</h4>
              <hr />
              <img
                src={'https://windmar-website-cms.s3.amazonaws.com/Windmar1.0/FL/windmar-roofing-benefits.webp'}
                alt="CertainTeed high-quality roofing products in Florida"
              />
            </section>
            <section>
              <ul>
                <li>
                  <strong>Comprehensive Expertise:</strong>
                  <br />
                  One-stop shop for roofing and solar installations.
                </li>
                <li>
                  <strong>Streamlined Process:</strong>
                  <br />
                  Avoid the hassle of coordinating with separate contractors.
                </li>
                <li>
                  <strong>Simplified Warranty:</strong>
                  <br />
                  Single point of contact for both roofing and solar warranties.
                </li>
                <li>
                  <strong>Guaranteed Workmanship:</strong>
                  <br />
                  We take pride in our craftsmanship and we stand behind the quality of our work.
                </li>
                <li>
                  <strong>Enhanced Property Value:</strong>
                  <br />
                  Investing in a roof and solar energy system from our company can increase the value of your property.
                </li>
                <li>
                  <strong>Sunnova Finance:</strong>
                  <br />
                  Your budget is safe with us. Finance your roof starting at $99/mo.
                </li>
                <li>
                  <strong>Certified ShingleMaster by CertainTeed</strong>
                </li>
              </ul>
            </section>
          </div>
        </main>
        <main>
          <h2>TOP-PERFORMING</h2>
          <h1>FEATURES</h1>
          <hr />
          {mobileQuery === 'desktop' ? (
            <p>
              Together with CertainTeed, we provide the best of the best.
              <strong> CertainTeed</strong> warrants that its shingles will be free from manufacturing defects, and provides the extra assurance of
              <strong> SureStart™</strong> protection.
            </p>
          ) : null}
          <div>
            <div>
              <img src={roofingfeat1} alt="" />
              <p>SureStart PLUS</p>
              <p>4-STAR Warranty</p>
            </div>
            <div>
              <img src={roofingfeat2} alt="" />
              <p>Max Def</p>
              <p>Colors</p>
            </div>
            <div>
              <img src={roofingfeat3} alt="" />
              <p>10 year leak-proof</p>
              <p>warranty</p>
            </div>
            <div>
              <img src={roofingfeat4} alt="" />
              <p>More value</p>
            </div>
            <div>
              <img src={roofingfeat5} alt="" />
              <p>Integrity Roof</p>
              <p>System</p>
            </div>
            <div>
              <img src={roofingfeat6} alt="" />
              <p>UL 2218 Class 3</p>
              <p>Impact Rated</p>
            </div>
            <div>
              <img src={roofingfeat7} alt="" />
              <p>15 year Streak</p>
              <p>Fighter</p>
            </div>
            <div>
              <img src={roofingfeat8} alt="" />
              <p>Withstands</p>
              <p>110MPH</p>
            </div>
            <div>
              <img src={roofingfeat9} alt="" />
              <p>CertainTeed</p>
              <p>Credentialed Contractor</p>
            </div>
          </div>
        </main>
        <main>
          <article>
            <div>
              <div>
                <h1>OUR ROOFING PROCESS</h1>
                <h3>STEP-BY-STEP</h3>
                <span>
                  <hr />
                </span>
              </div>
              <div>
                <ol>
                  <li> Remove existing shingles down to the deck. </li>
                  <li> Re-nail any loose wood. </li>
                  <li>Install water shield water-proof underlayment in valleys.</li>
                  <li>Install synthetic water-resistant underlayment in all the roof.</li>
                  <li> Install Certainteed SwiftStart Starter Shingles. </li>
                  <li>Install Certainteed Landmark Lifetime Dimensional Shingles.</li>
                  <li>Install CertainTeed Shadow Ridge Hip and Ridge Shingles.</li>
                  <li> Install new roof vents and pipe flashings.</li>
                  <li> Remove and replace drip edges. </li>
                  <li> Clean up all debris. </li>
                  <li>Provide a 10 year workmanship warranty and CERTAINTEED SURESTART WARRANTY.</li>
                </ol>
              </div>
            </div>
          </article>
        </main>
        <main>
          <p>
            After years energizing Florida homes with renewable solar energy we identified the necessity to provide hassle-free roofing services and
            become a complete solution for our clients. Let Windmar Roofing give you peace of mind.
          </p>
        </main>
        <main>
          <div>
            <img
              src={'https://windmar-website-cms.s3.amazonaws.com/Windmar1.0/FL/certification-certain-teed-windmar.webp'}
              alt="Roofing installation in Florida with CertainTeed"
            />
          </div>
          <div>
            <h1>THE BEST TECHNOLOGY</h1>
            <h3>FOR A JOB WELL DONE!</h3>
            <hr />
            <p>
              We use CertainTeed Products to have the right balance between beauty and performance and to protect your home from the elements. The
              Landmark® series is the right choice if you looking for strength, durability, and style:
            </p>
            <ul>
              <li> Two-piece laminated fiberglass-based construction</li>
              <li>Classic shades and dimensional appearance of natural wood or slat</li>
              <li> Dual-layer durability</li>
              <li> Industry-best lifetime limited warranty</li>
              <li> 10 or 15 year StreakFighter® algae-resistance warranty</li>
            </ul>
          </div>
        </main>
        <main>
          <div>
            <h1>
              DON’T HESITATE, HAVE <br />
              PEACE OF MIND UNDER ONE ROOF.
            </h1>
          </div>
        </main>
        <main></main>
      </div>
      <Barra caseLocation="roofingfl" color="blue" />
    </>
  )
}

export default RoofingFL

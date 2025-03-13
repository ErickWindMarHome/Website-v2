import React from 'react'
import Pixel from '../../components/Pixel/Pixel'
import Header from '../../layouts/General/Header/Header'
import FooterBar from '../../layouts/General/FooterBar/FooterBar'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function PrivacyPolicy_EN({ locacion }) {
  return (
    <>
      <Pixel pixelID="727322852553482" />
      <Header />
      <div className="mt-15 max-w-4xl p-10">
        <h1 className="mb-4 text-3xl font-bold">Privacy Policy</h1>
        <div className="space-y-6 text-gray-800">
          <p>
            This Privacy Policy applies to all visitors and users of the windmar.com website (“the Site”). It describes the type of information we
            collect, how we use that information, and the choices you have regarding your personal data. By accessing our site, you are accepting the
            practices described in this Privacy Policy, as well as the{' '}
            <Link to={locacion === 'fl' ? '/fl/terms-and-conditions' : '/pr/terminos-y-condiciones'}>Terms and Conditions</Link> Terms and Conditions
            of use.
          </p>
          <p>
            This Site serves as a platform for people interested in solar energy to learn about our services and potentially interact with us to
            explore solar solutions for their homes or businesses. As part of our commitment to providing exceptional service and fostering a
            transparent relationship with our visitors and customers, we have developed this Privacy Policy to inform you about the collection, use
            and protection of your personal information.
          </p>
          <p>
            We understand the importance of privacy and are dedicated to safeguarding the personal information you entrust to us. This Privacy Policy
            describes our practices for handling your information responsibly, including how we collect information, why we collect it, and how we use
            it to enhance your experience and provide you with valuable services.
          </p>
          <p>
            By using our Site, you acknowledge that you have read, understood, accepted this Privacy Policy and confirmed your consent to the
            processing of data under the Telephone Consumer Protection Act (TCPA) in the United States and Puerto Rico. If you have any questions or
            concerns about our practices or your personal information, please do not hesitate to contact us. Your privacy is important to us and we
            are committed to responding to any inquiries or comments promptly.
          </p>

          <div>
            <h2 className="text-2xl font-semibold">1. Personal Information We Collect</h2>
            <p>
              When you visit the Site, we automatically collect certain information about your device, including information about your web browser,
              IP address, time zone and some of the cookies that are set on your device. In addition, as you browse the Site, we collect information
              about the individual web pages or products you view, which websites or search terms referred you to the Site, and information about how
              you interact with the Site. We refer to this automatically collected information as “Device Information”.
            </p>
            <p>We collect Device Information using the following technologies:</p>
            <ul className="list-inside list-disc">
              <li>
                “Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more
                information about cookies and how to disable them, visit{' '}
                <a href="http://www.allaboutcookies.org" className="text-blue-600 hover:underline">
                  http://www.allaboutcookies.org
                </a>
                .
              </li>
              <li>
                “Log files” track actions that occur on the Site and collect data including your IP address, browser type, Internet service provider,
                referring/exit pages, and date/time stamps.
              </li>
              <li>“Web beacons”, ‘tags’ and ‘pixels’ are electronic files that are used to record information about how you navigate the Site.</li>
            </ul>
            <p>
              In addition, when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including
              your name, billing address, shipping address, payment information (including credit card numbers), e-mail address and telephone number.
              We refer to this information as “Order Information”.
            </p>
            <p>When we refer to “Personal Information” in this Privacy Policy, we mean both device information and order information.</p>
            <p>
              WINDMAR HOME, in an effort and commitment to protect the interests of its consumers and prospective customers is committed to providing
              interested customers with: (1) details about the Personal Information that is collected, used and disclosed; and, (2) the customer is
              granted the ability to request deletion of their Personal Information, subject to certain exceptions, which include but are not limited
              to: (a) completing a transaction for which the personal information was collected, providing good service, or performing contracts
              between WINDMAR HOME and the customer, (b) detecting security incidents, protecting against malicious or deceptive, fraudulent or
              illegal activities, (c) complying with a legal obligation, among others.
            </p>
            <p>
              Likewise, it is specified that our website is not directed to minors. We do not knowingly collect personal information from children
              under the age of eighteen (18). If we discover that we have collected personal information from a child under the age of eighteen (18),
              we will delete that information as soon as possible.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">2. How do we use your personal information?</h2>
            <p>
              We use the Ordering Information we collect generally to fulfill any orders placed through the Site (including processing your payment
              information, arranging for shipment, and providing you with invoices and/or order confirmations). In addition, we use this order
              information to: Communicate with you; Screen our orders for potential risks or fraud; When in line with preferences you have shared with
              us, provide you with information or advertising related to our products or services.
            </p>
            <p>
              We use the device information we collect to help us detect potential risks and fraud (in particular, your IP address) and, more
              generally, to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the
              Site and to evaluate the success of our marketing and advertising campaigns).
            </p>
            <p>
              WINDMAR HOME specifically clarifies that it has no say in the decision of individuals to register to receive further information. Each
              user freely and voluntarily determines and proceeds to provide information for WINDMAR HOME to communicate with information about its
              products, services and/or promotional offers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">3. Sharing Your Personal Information</h2>
            <p>
              WINDMAR HOME may share your personal information with trusted third parties to help us provide and improve our services. This includes
              service providers such as payment processors, shipping companies and marketing agencies. These third parties are contractually obligated
              to use your information only for the purposes specified by WINDMAR HOME and to maintain the confidentiality and security of your data.
            </p>
            <p>
              In addition, we use Google Analytics to obtain information about how users interact with our Site. Google Analytics collects anonymous
              data about Site traffic and user behavior, which helps us optimize our Site and tailor our services to better meet your needs. You can
              learn more about how Google uses your personal information by visiting its Privacy Policy.
            </p>
            <p>
              Finally, we may disclose your personal information if required to do so by law or in response to valid legal requests, such as subpoenas
              or court orders. We may also share information to protect our rights, property or safety, or the rights, property or safety of others.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">4. Behavioral Advertising</h2>
            <p>
              As described above, we use your personal information to provide you with targeted advertisements or marketing communications that we
              believe may be of interest to you. For more information on how targeted advertising works, you can visit the Network Advertising
              Initiative (“NAI”) educational page at{' '}
              <a href="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work" className="text-blue-600 hover:underline">
                http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work
              </a>
              .
            </p>
            <p>You may opt out of receiving targeted advertising:</p>
            <ul className="list-inside list-disc">
              <li>
                <a href="https://www.facebook.com/settings/?tab=ads" className="text-blue-600 hover:underline">
                  FACEBOOK
                </a>
              </li>
              <li>
                <a href="https://www.google.com/settings/ads/anonymous" className="text-blue-600 hover:underline">
                  GOOGLE
                </a>
              </li>
              <li>
                <a href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads" className="text-blue-600 hover:underline">
                  BING
                </a>
              </li>
            </ul>
            <p>
              In addition, you may opt out of receiving some of these services by visiting the Digital Advertising Alliance's opt-out portal at:{' '}
              <a href="http://optout.aboutads.info/" className="text-blue-600 hover:underline">
                http://optout.aboutads.info/
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">5. Do Not Follow</h2>
            <p>Please note that we do not change our Site's data collection and use practices when we see a Do Not Track signal from your browser.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">6. International Users</h2>
            <p>
              WINDMAR HOME's main offices are located in Puerto Rico, therefore, by accessing our Site, you consent to the collection, processing and
              storage of your personal information in the United States, where we are also located, as described in this Privacy Policy. Please note
              that laws governing data protection and privacy may differ between countries or regions, including the United States and your country of
              residence.
            </p>
            <p>
              If you access our Site from outside the United States, please note that your personal information may be transferred to, processed and
              stored in the United States or other countries where our service providers are located. By using our Site, you acknowledge that your
              information may be subject to the laws of these jurisdictions, which may not provide the same level of protection as the laws of your
              country.
            </p>
            <p>
              We take appropriate steps to ensure that your personal information is treated securely and in accordance with this Privacy Policy,
              regardless of where it is processed or stored. This includes implementing data protection safeguards and using contractual agreements
              with our service providers to uphold the principles of privacy and data security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">7. Data Retention</h2>
            <p>
              When you provide us with information or place an order through the Site, we will retain your order information for our records unless
              and until you ask us to delete this information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">8. Changes</h2>
            <p>
              We may update this privacy policy from time to time to reflect, for example, changes in our practices or for other operational, legal or
              regulatory reasons.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">9. Contact us at</h2>
            <p>
              For more information about our privacy practices, if you would like to file a complaint, request or provide corresponding information to
              WINDMAR HOME please contact us via e-mail at{' '}
              <a href="mailto:customerservice@windmarhome.com" className="text-blue-600 hover:underline">
                customerservice@windmarhome.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <FooterBar />
    </>
  )
}

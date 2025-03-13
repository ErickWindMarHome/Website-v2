import React from 'react'
import Pixel from '../../components/Pixel/Pixel'
import Header from '../../layouts/General/Header/Header'
import FooterBar from '../../layouts/General/FooterBar/FooterBar'
import { Link } from 'react-router-dom'

export default function TerminosCondiciones_EN({ locacion }) {
  return (
    <>
      <Pixel pixelID="727322852553482" />
      <Header />
      <div className="mx-auto max-w-4xl p-10">
        <h1 className="mb-4 text-3xl font-bold">Terms & Conditions</h1>
        <div className="space-y-6 text-gray-800">
          <section>
            <h2 className="text-2xl font-semibold">1. Acceptance of Terms and Conditions</h2>
            <p>
              Welcome to the windmar.com website (onwards "the Site"). By using our Site, you acknowledge that you have read, understood and agree to
              these Terms and Conditions of Use (hereafter "Terms and Conditions").
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">2. Modifications to the Terms and Conditions</h2>
            <p>
              We reserve the right to modify these Terms and Conditions at any time without notice. Modifications will be effective immediately upon
              posting on the Site. Your continued use of the Site following the posting of any changes constitutes your acceptance of such changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">3. Use of the Site</h2>
            <div className="space-y-4 pl-4">
              <h3 className="text-xl font-medium">3.1. Eligibility</h3>
              <p>To use the Site, the user must be at the age of majority or have the authorization of a legal guardian.</p>

              <h3 className="text-xl font-medium">3.2. User conduct</h3>
              <p>
                You agree to use the Site only for personal use and in a manner that does not infringe the rights of others or restrict or inhibit
                their use and enjoyment of the Site. Prohibited actions include, but are not limited to:
              </p>
              <ul className="list-inside list-disc">
                <li>Posting offensive, defamatory, or illegal content.</li>
                <li>Using the Site to send spam or unsolicited communications.</li>
                <li>Attempting to gain unauthorized access to computer systems or networks connected to the Site.</li>
                <li>Transmit computer viruses or other malicious code.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">4. Intellectual Property - Copyright</h2>
            <p>
              All content on the Site, including but not limited to text, graphics, logos, icons, images, audio, video, URLs, metadata, software and
              other material on the Site is the property of WINDMAR HOME or its licensors and is protected by intellectual property laws.
              Reproduction, distribution, modification, creation of derivative works and/or derivative works, or exploitation in any manner of the
              content, whether by analog or digital means, including but not limited to use on artificial intelligence platforms, without the express
              prior written consent of WINDMAR HOME or its licensors, through WINDMAR HOME, is expressly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">5. User Participation</h2>
            <div className="space-y-4 pl-4">
              <h3 className="text-xl font-medium">5.1. Contests and Events</h3>
              <p>
                Any contests, events or sweepstakes conducted by WINDMAR HOME are subject to their own Terms and Conditions, which will be promptly
                posted and/or made available to WINDMAR HOME's participants and clientele. WINDMAR HOME expressly disclaims any liability for any
                damages of any kind related to participation in events organized by WINDMAR HOME and assumes no responsibility for events conducted by
                third parties offering products or services on behalf of WINDMAR HOME. Participation in events conducted and/or promoted by WINDMAR
                HOME is at the sole discretion and discretion of the participant and is done so freely and voluntarily. The guidelines on user
                participation are:
              </p>
              <ul className="list-inside list-disc">
                <li>
                  Participating users must be 18 years of age or older; minors under 18 must provide express written authorization from their parent
                  or legal guardian.
                </li>
                <li>
                  Participating users must fully comply with all requirements expressed in the Terms and Conditions of each contest, event or
                  sweepstakes held.
                </li>
                <li>WINDMAR HOME reserves the right to disqualify anyone that does not comply with these rules or that it deems inappropriate.</li>
                <li>
                  By entering our contests, events or sweepstakes, you grant WINDMAR HOME a non-exclusive, worldwide, royalty-free, transferable
                  license to use, reproduce, distribute, prepare derivative works of, and display your entry in any media and for any purpose related
                  to the event or contest, subject to your acceptance of the{' '}
                  <Link to={locacion === 'fl' ? '/fl/privacy-policy' : '/pr/politica-de-privacidad'}>Privacy Policy</Link> .
                </li>
              </ul>

              <h3 className="text-xl font-medium">5.2. Participation areas</h3>
              <p>
                The User, who certifies and guarantees to be at the age of majority, is responsible for his/her participation in forums, chats,
                comments, and other areas of the Site and its associated digital channels. The opinions and behaviors of users are the sole
                responsibility of those who issue them, and WINDMAR HOME is not responsible for the consequences of such conduct, nor do they
                necessarily represent the thoughts and opinions of WINDMAR HOME. Users should follow the recommendations of the Site for proper
                coexistence.
              </p>
              <p>
                WINDMAR HOME reserves the right to design, modify or eliminate the areas of participation and to determine the number of participants
                allowed in each. Similarly, WINDMAR HOME may take corrective measures, including the removal of comments, suspension or expulsion of
                users who violate the rules of conduct. WINDMAR HOME will not tolerate behavior that is offensive, defamatory, discriminatory,
                illegal, violates the rights of third parties and/or any comments that in any way affect the proper functioning of the Spaces and/or
                the user community.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">6. Links to Third - Party Sites</h2>
            <p>
              The Site may contain links to third party Web sites. These links are provided for your convenience only and do not imply any endorsement
              of or responsibility for the content of such sites. Your access and use of Third-Party Sites is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">7. Limitation of Liability</h2>
            <p>
              The Site and its contents are provided on an “as is” and “as available” basis. WINDMAR HOME makes no warranties of any kind, either
              express or implied, about the operation of the Site or the information, content, materials or products included on the Site. To the
              fullest extent permitted by law, WINDMAR HOME shall not be liable for any damages arising from the use of the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">8. Indemnification</h2>
            <p>
              You agree to indemnify WINDMAR HOME, its directors, employees, agents and affiliates from any claim, demand, loss, liability, expense or
              damage, including reasonable attorneys' fees, arising out of your improper use of the Site or your violation of these Terms and
              Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">9. Governing Law and Jurisdiction</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the Commonwealth of Puerto Rico and the
              United States, both state and federal, as applicable. Any dispute arising in connection with these Terms and Conditions shall be
              submitted to the exclusive jurisdiction of the Court of First Instance of Puerto Rico, San Juan division, or the appropriate federal or
              state court in the United States, as applicable. In the event of a conflict, the relevant legal provisions shall apply to determine the
              applicable jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">10. Privacy</h2>
            <p>
              Use of the Site is also subject to our{' '}
              <Link to={locacion === 'fl' ? '/fl/privacy-policy' : '/pr/politica-de-privacidad'}>Privacy Policy</Link> , which is incorporated into
              these Terms and Conditions by reference. We encourage you to review our{' '}
              <Link to={locacion === 'fl' ? '/fl/privacy-policy' : '/pr/politica-de-privacidad'}>Privacy Policy</Link> to understand our information
              collection, use and disclosure practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">11. Contact</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us by e-mail at{' '}
              <a href="mailto:customerservice@windmarhome.com" className="text-blue-500">
                customerservice@windmarhome.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
      <FooterBar />
    </>
  )
}

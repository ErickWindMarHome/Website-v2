// src/components/PrivacyPolicy.js
import React from 'react'
import Pixel from '../../components/Pixel/Pixel'
import Header from '../../layouts/General/Header/Header'
import FooterBar from '../../layouts/General/FooterBar/FooterBar'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivacyPolicy_ES = ({ locacion }) => {
  return (
    <>
      <Pixel pixelID="727322852553482" />
      <Header />

      <div className="container mt-10 p-16">
        <h1 className="mb-4 text-3xl font-bold">Política de Privacidad</h1>
        <p className="mb-4">
          Esta Política de Privacidad se aplica a todos los visitantes y usuarios del sitio web windmar.com (en adelante, "el Sitio"). Describe el
          tipo de información que recopilamos, cómo usamos esa información y las opciones que tiene con respecto a sus datos personales. Al acceder a
          nuestro sitio, usted acepta las prácticas descritas en esta Política de Privacidad, así como también los{' '}
          <Link to={locacion === 'fl' ? '/fl/terms-and-conditions' : '/pr/terminos-y-condiciones'}>Términos y Condiciones</Link> de uso.
        </p>
        <p className="mb-4">
          Este Sitio sirve como plataforma para que las personas interesadas en la energía solar conozcan nuestros servicios y potencialmente
          interactúen con nosotros para explorar soluciones solares para sus hogares o negocios. Como parte de nuestro compromiso de brindar un
          servicio excepcional y fomentar una relación transparente con nuestros visitantes y clientes, hemos desarrollado esta Política de Privacidad
          para informarle sobre la recopilación, el uso y la protección de su información personal.
        </p>
        <h2 className="mb-4 text-2xl font-semibold">1. Información personal que recopilamos</h2>
        <p className="mb-4">
          Cuando visita el Sitio, recopilamos automáticamente cierta información sobre su dispositivo, incluida información sobre su navegador web,
          dirección IP, zona horaria y algunas de las cookies que están instaladas en su dispositivo. Además, mientras navega por el Sitio,
          recopilamos información sobre las páginas web o productos individuales que ve, qué sitios web o términos de búsqueda lo remitieron al Sitio
          e información sobre cómo interactúa con el Sitio. Nos referimos a esta información recopilada automáticamente como "Información del
          dispositivo".
        </p>
        <p className="mb-4">Recopilamos información del dispositivo utilizando las siguientes tecnologías:</p>
        <ul className="ml-6 list-disc">
          <li>
            Las "cookies" son archivos de datos que se colocan en su dispositivo o computadora y, a menudo, incluyen un identificador único anónimo.
            Para obtener más información sobre las cookies y cómo desactivarlas, visite http://www.allaboutcookies.org.
          </li>
          <li>
            Los "archivos de registro" rastrean las acciones que ocurren en el Sitio y recopilan datos que incluyen su dirección IP, tipo de
            navegador, proveedor de servicios de Internet, páginas de referencia/salida y marcas de fecha/hora.
          </li>
          <li>
            Las “balizas web”, las “etiquetas” y los “píxeles” son archivos electrónicos que se utilizan para registrar información sobre cómo navega
            por el Sitio.
          </li>
        </ul>

        <p className="mb-4">
          Además, cuando realiza una compra o intenta realizar una compra a través del Sitio, recopilamos cierta información suya, incluido su nombre,
          dirección de facturación, dirección de envío, información de pago (incluidos números de tarjetas de crédito), dirección de correo
          electrónico y número de teléfono. Nos referimos a esta información como "Información del pedido".
        </p>
        <p className="mb-4">
          Cuando hablamos de “Información personal” en esta Política de privacidad, nos referimos tanto a información del dispositivo como a
          información del pedido.
        </p>
        <h2 className="mb-4 text-2xl font-semibold">2. ¿Cómo usamos su información personal?</h2>
        <p className="mb-4">
          Usamos la Información de pedido que recopilamos generalmente para cumplir con cualquier pedido realizado a través del Sitio (incluido el
          procesamiento de su información de pago, la organización del envío y el suministro de facturas y/o confirmaciones de pedido). Además,
          utilizamos esta información de pedido para:{' '}
        </p>
        <ul className="ml-6 list-disc">
          <li>Comunicarse con usted;</li>
          <li>Examinar nuestros pedidos para detectar riesgos potenciales o fraude;</li>
          <li>
            Cuando esté en línea con las preferencias que ha compartido con nosotros, proporcionarle información o publicidad relacionada con nuestros
            productos o servicios.
          </li>
        </ul>

        <p className="mb-4">
          Usamos la información del dispositivo que recopilamos para ayudarnos a detectar posibles riesgos y fraudes (en particular, su dirección IP)
          y, de manera más general, para mejorar y optimizar nuestro Sitio (por ejemplo, generando análisis sobre cómo nuestros clientes navegan e
          interactúan con el Sitio y para evaluar el éxito de nuestras campañas de marketing y publicidad).
        </p>
        <p className="mb-4">
          WINDMAR HOME específicamente aclara que no tiene potestad en la decisión de las personas de registrarse para recibir más información. Cada
          usuario es quien, de manera libre y voluntaria, determina y procede a proveer información para que WINDMAR HOME se comunique con información
          sobre sus productos, servicios y/u ofertas promocionales.
        </p>
        <h2 className="mb-4 text-2xl font-semibold">3. Compartir su información personal</h2>
        <p className="mb-4">
          WINDMAR HOME tiene la potestad para compartir su información personal con terceros de confianza para ayudarnos a proporcionar y mejorar
          nuestros servicios. Esto incluye proveedores de servicios como procesadores de pagos, compañías de envío y agencias de marketing. Estos
          terceros están obligados contractualmente a utilizar su información únicamente para los fines especificados por WINDMAR HOME y a mantener la
          confidencialidad y seguridad de sus datos.
        </p>
        <p className="mb-4">
          Además, utilizamos Google Analytics para obtener información sobre cómo los usuarios interactúan con nuestro Sitio. Google Analytics
          recopila datos anónimos sobre el tráfico del Sitio y el comportamiento del usuario, lo que nos ayuda a optimizar nuestro Sitio y adaptar
          nuestros servicios para satisfacer mejor sus necesidades. Puede obtener más información sobre cómo Google utiliza su información personal
          visitando su Política de privacidad.
        </p>
        <p className="mb-4">
          Finalmente, podemos divulgar su información personal si lo exige la ley o en respuesta a solicitudes legales válidas, como citaciones u
          órdenes judiciales. También podemos compartir información para proteger nuestros derechos, propiedad o seguridad, o los derechos, propiedad
          o seguridad de otros.
        </p>
        <h2 className="mb-4 text-2xl font-semibold">4. Publicidad conductual</h2>
        <p className="mb-4">
          Como se describió anteriormente, utilizamos su información personal para brindarle anuncios específicos o comunicaciones de marketing que
          creemos que pueden ser de su interés. Para obtener más información sobre cómo funciona la publicidad dirigida, puede visitar la página
          educativa de Network Advertising Initiative ("NAI") en http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.
        </p>
        <p className="mb-4">Puede optar por no recibir publicidad dirigida: </p>
        <ul className="ml-6 list-disc">
          <li>FACEBOOK: https://www.facebook.com/settings/?tab=ads</li>
          <li>GOOGLE: https://www.google.com/settings/ads/anonymous</li>
          <li>BING: https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads</li>
        </ul>

        <p className="mb-4">
          Además, puede optar por no recibir algunos de estos servicios visitando el portal de exclusión voluntaria de Digital Advertising Alliance
          en: http://optout.aboutads.info/.
        </p>
        <h2 className="mb-4 text-2xl font-semibold">5. No seguir</h2>
        <p className="mb-4">
          Tenga en cuenta que no modificamos las prácticas de uso y recopilación de datos de nuestro Sitio cuando vemos una señal de No rastrear desde
          su navegador.
        </p>
        <h2 className="mb-4 text-2xl font-semibold">6. Usuarios internacionales</h2>
        <p className="mb-4">
          Las oficinas principales de WINDMAR HOME están situadas en Puerto Rico, por tanto, al acceder a nuestro Sitio, usted acepta la recopilación,
          el procesamiento y el almacenamiento de su información personal en Estados Unidos, donde también estamos ubicados, como se describe en esta
          Política de Privacidad. Tenga en cuenta que las leyes que rigen la protección de datos y la privacidad pueden diferir entre países o
          regiones, incluidos los Estados Unidos y su país de residencia.
        </p>
        <p className="mb-4">
          Si accede a nuestro Sitio desde fuera de los Estados Unidos, tenga en cuenta que su información personal puede transferirse, procesarse y
          almacenarse en los Estados Unidos u otros países donde se encuentran nuestros proveedores de servicios. Al utilizar nuestro Sitio, usted
          reconoce que su información puede estar sujeta a las leyes de estas jurisdicciones, que pueden no proporcionar el mismo nivel de protección
          que las leyes de su país.
        </p>
        <p className="mb-4">
          Tomamos las medidas adecuadas para garantizar que su información personal se trate de forma segura y de acuerdo con esta Política de
          Privacidad, independientemente de dónde se procese o almacene. Esto incluye implementar salvaguardias de protección de datos y utilizar
          acuerdos contractuales con nuestros proveedores de servicios para defender los principios de privacidad y seguridad de los datos.
        </p>
        <h2 className="mb-4 text-2xl font-semibold">7. Retención de datos</h2>
        <p className="mb-4">
          Cuando nos proporciona la información o realiza un pedido a través del Sitio, mantendremos la información de su pedido para nuestros
          registros a menos y hasta que nos solicite que eliminemos esta información.
        </p>
        <h2 className="mb-4 text-2xl font-semibold">8. Cambios</h2>
        <p className="mb-4">
          Podemos actualizar esta política de privacidad de vez en cuando para reflejar, por ejemplo, cambios en nuestras prácticas o por otras
          razones operativas, legales o regulatorias.
        </p>
        <h2 className="mb-4 text-2xl font-semibold">9. Contáctenos</h2>
        <p className="mb-4">
          Para obtener más información sobre nuestras prácticas de privacidad, si desea presentar una queja, solicitar o proveer información
          correspondiente a WINDMAR HOME por favor, contáctenos a través del correo electrónico
          <a href="mailto:customerservice@windmarhome.com" className="text-blue-500">
            customerservice@windmarhome.com
          </a>
          .
        </p>
      </div>
      <FooterBar />
    </>
  )
}

export default PrivacyPolicy_ES

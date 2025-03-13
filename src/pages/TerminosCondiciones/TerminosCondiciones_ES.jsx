import React from 'react'
import Pixel from '../../components/Pixel/Pixel'
import Header from '../../layouts/General/Header/Header'
import FooterBar from '../../layouts/General/FooterBar/FooterBar'
import { Link } from 'react-router-dom'

const TerminosCondiciones_ES = ({ locacion }) => {
  return (
    <>
      <Pixel pixelID="727322852553482" />
      <Header />
      <div className="container mx-auto p-10">
        <h1 className="mb-4 text-3xl font-bold">Términos y Condiciones</h1>

        <h2 className="mb-4 text-2xl font-semibold">1. Aceptación de los Términos y Condiciones</h2>
        <p className="mb-4">
          Bienvenido al sitio web windmar.com (en adelante, "el Sitio"). Al utilizar nuestro Sitio, usted reconoce que ha leído, comprendido y
          aceptado estos Términos y Condiciones de Uso (en adelante, "Términos y Condiciones").
        </p>

        <h2 className="mb-4 text-2xl font-semibold">2. Modificaciones de los Términos y Condiciones</h2>
        <p className="mb-4">
          Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento y sin previo aviso. Las modificaciones serán
          efectivas inmediatamente después de su publicación en el Sitio. Su uso continuado del Sitio después de la publicación de cualquier cambio
          constituye su aceptación de dichos cambios.
        </p>

        <h2 className="mb-4 text-2xl font-semibold">3. Uso del Sitio</h2>
        <h3 className="mb-2 text-xl font-semibold">3.1. Elegibilidad</h3>
        <p className="mb-4">Para utilizar el Sitio, el usuario debe tener al menos 18 años o contar con la autorización de un tutor legal.</p>
        <h3 className="mb-2 text-xl font-semibold">3.2. Conducta del usuario</h3>
        <p className="mb-4">
          Usted se compromete a utilizar el Sitio únicamente para uso personal y de manera que no infrinja los derechos de terceros ni restrinja o
          inhiba su uso y disfrute del Sitio. Las acciones prohibidas incluyen, pero no se limitan a:{' '}
        </p>
        <ul className="ml-6 list-disc">
          <li>Publicar contenido ofensivo, difamatorio, o ilegal.</li>
          <li>Utilizar el Sitio para enviar spam o comunicaciones no solicitadas.</li>
          <li>Intentar obtener acceso no autorizado a sistemas informáticos o redes conectadas al Sitio.</li>
          <li>Transmitir virus informáticos u otros códigos maliciosos.</li>
        </ul>

        <h2 className="mb-4 text-2xl font-semibold">4. Propiedad intelectual - Copyright</h2>
        <p className="mb-4">
          Todo el contenido del Sitio, incluyendo, pero no limitado a textos, gráficos, logotipos, íconos, imágenes, audio, video, URL, metadatos,
          software y otro material que esté en el Sitio, es propiedad de WINDMAR HOME o sus licenciantes y está protegido por las leyes de propiedad
          intelectual. Queda expresamente prohibida la reproducción, distribución, modificación, creación de trabajos y/o derivados, o explotación de
          cualquier manera del contenido, ya sea por medios analógicos o digitales, incluyendo, pero sin limitarse a la utilización en plataformas de
          inteligencia artificial, sin el consentimiento previo expreso escrito de WINDMAR HOME o sus licenciantes, a través de WINDMAR HOME.
        </p>

        <h2 className="mb-4 text-2xl font-semibold">5. Participación del usuario</h2>
        <h3 className="mb-2 text-xl font-semibold">5.1. Concursos y eventos</h3>
        <p className="mb-4">
          Los concursos, eventos o sorteos que realice WINDMAR HOME están sujetos a sus propios Términos y Condiciones, los cuales serán oportunamente
          publicados y/o hechos accesibles a los participantes y la clientela de WINDMAR HOME. WINDMAR HOME expresamente aclara que no se
          responsabiliza por cualquier tipo de daños relacionados a la participación en eventos organizados por WINDMAR HOME, además de no asumir la
          responsabilidad eventos realizados por terceros ofreciendo productos o servicios en nombre de WINDMAR HOME. La participación de los eventos
          realizados y/o promovidos por WINDMAR HOME son a la entera decisión y discreción del participante, y lo hace de manera libre y voluntaria.
          Los lineamientos sobre la participación del usuario son:
        </p>
        <ul className="ml-6 list-disc">
          <li>
            Los usuarios participantes deben ser mayores de 18 años, los menores de 18 años deberán proveer la autorización expresa por escrito de su
            padre, madre o tutor legal.
          </li>
          <li>
            Los usuarios participantes deben cumplir a cabalidad todos los requisitos expresados en los Términos y Condiciones de cada concurso,
            evento o sorteo realizado.
          </li>
          <li>
            WINDMAR HOME se reserva el derecho de descalificar cualquier participación que no cumpla con estas reglas o que considere inapropiada.
          </li>
          <li>
            Al participar en nuestros concursos, eventos o sorteos, usted concede a WINDMAR HOME una licencia no exclusiva, internacional, libre de
            regalías y transferible para utilizar, reproducir, distribuir, preparar trabajos derivados y mostrar su participación en cualquier medio y
            para cualquier propósito relacionado con el evento o concurso, teniendo en cuenta su aceptación de{' '}
            <Link to={locacion === 'fl' ? '/fl/privacy-policy' : '/pr/politica-de-privacidad'}>Política de Privacidad.</Link>{' '}
          </li>
        </ul>

        <h3 className="mb-2 text-xl font-semibold">5.2. Espacios de participación</h3>
        <p className="mb-4">
          El Usuario, quien certifica y garantiza tener 18 años o más, es responsable de su participación en foros, chats, comentarios, y otros
          espacios del Sitio y sus canales digitales asociados. Las opiniones y comportamientos de los usuarios son responsabilidad exclusiva de
          quienes las emiten, y WINDMAR HOME no se hace responsable de las consecuencias de dichas conductas, ni representan necesariamente el
          pensamiento ni la opinión de WINDMAR HOME. Los usuarios deben seguir las recomendaciones del Sitio para una convivencia adecuada. WINDMAR
          HOME se reserva el derecho de diseñar, modificar o eliminar los espacios de participación y determinar la cantidad de participantes
          admitidos en cada uno. De igual manera, WINDMAR HOME podrá tomar medidas correctivas, incluyendo la eliminación de comentarios, la
          suspensión o expulsión de usuarios que incumplan las normas de conducta. WINDMAR HOME no tolerará comportamientos ofensivos, difamatorios,
          discriminatorios, ilegales, que violen los derechos de terceros y/o cualquier comentario que de alguna manera afecte el buen funcionamiento
          de los Espacios y/o a la comunidad de usuarios.
        </p>

        <h2 className="mb-4 text-2xl font-semibold">6. Enlaces a Sitios de terceros</h2>
        <p className="mb-4">
          El Sitio puede contener enlaces a Sitios web de terceros. Estos enlaces se proporcionan únicamente para su conveniencia y no implican
          aprobación ni responsabilidad alguna por el contenido de dichos Sitios. El acceso y uso de Sitios de terceros es bajo su propio riesgo.
        </p>

        <h2 className="mb-4 text-2xl font-semibold">7. Limitación de responsabilidad</h2>
        <p className="mb-4">
          El Sitio y su contenido se proporcionan "tal cual" y "según disponibilidad". WINDMAR HOME no ofrece garantías de ningún tipo, ya sean
          expresas o implícitas, sobre el funcionamiento del Sitio o la información, contenido, materiales o productos incluidos en el mismo. En la
          máxima medida permitida por la ley, WINDMAR HOME no será responsable de ningún daño que surja del uso del Sitio.
        </p>

        <h2 className="mb-4 text-2xl font-semibold">8. Indemnización</h2>
        <p className="mb-4">
          Usted se compromete a indemnizar a WINDMAR HOME, sus directores, empleados, agentes y afiliados de cualquier reclamación, demanda, pérdida,
          responsabilidad, gasto o daño, incluidos los honorarios razonables de abogados, que surjan de su uso inadecuado del Sitio o su violación de
          estos Términos y Condiciones.
        </p>

        <h2 className="mb-4 text-2xl font-semibold">9. Ley aplicable y jurisdicción</h2>
        <p className="mb-4">
          Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes del Estado Libre Asociado de Puerto Rico y de los Estados
          Unidos, tanto estatales como federales, según sea aplicables. Cualquier disputa que surja en relación con estos Términos y Condiciones se
          someterá a la jurisdicción exclusiva del Tribunal de Primera Instancia de Puerto Rico, sala de San Juan, o del tribunal federal o estatal
          correspondiente en los Estados Unidos, según corresponda. En caso de conflicto, se aplicarán las disposiciones legales pertinentes para
          determinar la jurisdicción aplicable.
        </p>

        <h2 className="mb-4 text-2xl font-semibold">10. Privacidad</h2>
        <p className="mb-4">
          El uso del Sitio también está sujeto a nuestra{' '}
          <Link to={locacion === 'fl' ? '/fl/privacy-policy' : '/pr/politica-de-privacidad'}>Política de Privacidad</Link> , la cual se incorpora a
          estos Términos y Condiciones por referencia. Le recomendamos revisar nuestra{' '}
          <Link to={locacion === 'fl' ? '/fl/privacy-policy' : '/pr/politica-de-privacidad'}>Política de Privacidad.</Link> para comprender nuestras
          prácticas de recolección, uso y divulgación de información.
        </p>

        <h2 className="mb-4 text-2xl font-semibold">11. Contacto</h2>
        <p className="mb-4">
          Si tiene alguna pregunta sobre estos Términos y Condiciones, por favor, contáctenos a través del correo electrónico{' '}
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

export default TerminosCondiciones_ES

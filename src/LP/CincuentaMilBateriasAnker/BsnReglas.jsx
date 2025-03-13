import Pixel from '../../components/Pixel/Pixel'
import Header from '../../layouts/General/Header/Header'
import BgContenedorMobile from '../../assets/BSN/Bg_ContenedorMobile.png'
import BgContenedorDesktop from '../../assets/BSN/Bg_Contenedor.png'
import Footer from '../../layouts/General/Footer/Footer'
import { Link } from 'react-router-dom'

const BsnReglas = () => {
  const LogoContenedor = 'https://scms.windmar.com/uploads/Logos_BSN_5831a7b318.svg'
  return (
    <>
      <Pixel pixelID="1826134724345924" />
      <Header />
      <div
        className="box-border flex w-full flex-col items-center justify-center bg-cover bg-top bg-no-repeat pt-[10%] font-rocGrotesk lg:pt-[10%]"
        style={{
          backgroundImage: window.innerWidth <= 640 ? `url(${BgContenedorMobile})` : `url(${BgContenedorDesktop})`,
        }}
      >
        {' '}
        <img src={LogoContenedor} className="mt-[10%] w-[70%] py-[10%] lg:mt-[1%] lg:w-[30%] lg:py-[5%]" />{' '}
        <div className="w-[100%] flex-col items-center justify-center p-[8%] lg:w-[70%] lg:flex-col lg:items-center lg:justify-center lg:p-[1%] lg:pb-[5%] lg:text-[15px]">
          <h1 className="mb-[10%] ml-[10%] w-[70%] text-center font-sans text-[25px] text-white lg:mb-[8%] lg:ml-[0%] lg:w-full lg:text-center lg:font-sans lg:text-[35px] lg:text-white">
            REGLAS DEL CONCURSO BSN
          </h1>
          <p className="text-rigth lg:text-rigth w-full font-sans text-[15px] text-white lg:w-full lg:font-sans lg:text-[15px] lg:text-white">
            <strong>1. DURACIÓN:</strong> <br />
            DURACIÓN: El concurso BSN – “BSN Contest” comienza el 1 de abril de 2024 a las 12:01 AM (AST) y finaliza el 1 de septiembre de 2024 a las
            11:59 PM (AST) (“Período de Participación”). Los ganadores serán seleccionados y notificados el jueves, 5 de septiembre de 2024 en o antes
            de las 5:00 PM (AST) vía correo electrónico. <br />
            <br />
            <strong>2. ELEGIBILIDAD:</strong>
            <br />
            Serán elegibles para participar en este concurso toda persona natural, mayor de 18 años, residente legal de Puerto Rico. No podrán
            participar empleados, familiares hasta el cuarto grado de consanguinidad y segundo de afinidad, así como personas que convivan o tengan
            relaciones de pareja con empleados de WindMar Home o sus subsidiarias, afiliadas o agencias relacionadas con la organización del concurso.
            Se excluye la participación de cualquier persona que haya ganado algún premio en promociones de WindMar Home dentro de los últimos seis
            meses. <br />
            <br />
            <strong> 3. PREMIO:</strong> <br />
            <strong>- Premios Mensuales (5 ganadores por mes):</strong> Cada ganador mensual recibirá 4 taquillas para juegos y una tarjeta de regalo
            Visa de WindMar Home valorada en $50. Para ser elegibles para recibir los premios mensuales, los ganadores deben agendar una cita con
            WindMar Home. La cita es una oportunidad para conocer los servicios y productos de WindMar Home, pero no implica ninguna obligación de
            compra o compromiso financiero por parte del ganador. <br />
            <br />
            <strong>- Gran Premio (1er Ganador):</strong> 4 taquillas VIP para el primer o segundo juego de la final, sujeto a disponibilidad. En caso
            de no disponibilidad, se otorgará un valor equivalente en efectivo. En caso de no disponibilidad de las taquillas, se otorgará un valor
            equivalente en efectivo. Para ser elegibles para recibir el Gran Premio, el ganador debe primero agendar una cita con WindMar Home. La
            cita es una oportunidad para conocer los servicios y productos de WindMar Home, pero no implica ninguna obligación de compra o compromiso
            financiero por parte del ganador. <br />
            <br />
            <strong>- Segundo Gran Premio: </strong> Una fiesta VIP de visualización en ECO’s Sports para hasta 25 personas (incluye al ganador) con
            $500 para consumir en bebidas y alimentos. No incluye estacionamiento. <br />
            <br />
            <strong>4. PARTICIPACIÓN:</strong> <br />
            <strong>- Con Compra:</strong> Los clientes de WindMar Home que adquieran productos específicos o servicios durante el Período de
            Participación automáticamente recibirán participaciones en el sorteo. <br />
            <br />
            <strong>- Sin Compra:</strong> Los interesados pueden participar sin necesidad de comprar, enviando una carta con sus datos personales a
            la dirección de WindMar Home, detallando por qué desean ganar el premio. <br />
            <br />
            <strong>5. SELECCIÓN DEL GANADOR:</strong> <br /> Los ganadores serán seleccionados de forma aleatoria de todas las participaciones
            elegibles recibidas. La selección se realizará utilizando un sistema de selección al azar electrónico en presencia de un notario para
            garantizar la transparencia del proceso. <br />
            <br />
            <strong> 6. NOTIFICACIÓN Y RECLAMACIÓN DEL PREMIO:</strong> <br /> Los ganadores serán notificados vía correo electrónico y deberán
            aceptar el premio dentro de las 48 horas posteriores a la notificación. De no aceptarse en este plazo, el premio se otorgará a un ganador
            alternativo. <br />
            <br />
            <strong>7. RESTRICCIONES DEL PREMIO:</strong> <br />
            Límite de un (1) premio por persona o hogar. Los premios no son transferibles y no podrán ser canjeados por efectivo. <br />
            <br />
            <strong>8. RESTRICCIONES GENERALES:</strong> <br />
            El concurso está sujeto a todas las leyes federales, estatales y municipales aplicables. La participación en el concurso implica la
            aceptación de estas reglas. <br />
            <br />
            <strong>9. AUTORIZACIÓN Y PUBLICIDAD:</strong> <br />
            Al aceptar el premio, los ganadores autorizan el uso de su nombre e imagen para fines promocionales sin compensación adicional. <br />
            <br />
            <strong> 10. PROMOCIÓN Y PUBLICIDAD:</strong>
            <br />
            El concurso BSN se promocionará mediante códigos QR dirigiendo a los participantes al sitio web del concurso para una información
            detallada, clara y no engañosa sobre participación, premios, elegibilidad y demás aspectos relevantes. El sitio web y nuestras redes
            sociales servirán como canales principales para actualizaciones y comunicaciones del concurso, promoviendo una participación informada y
            segura. <br />
            <br />
            <strong>11. PROMOTOR/AUSPICIADOR:</strong>
            <br />
            Este sorteo auspiciado por WindMar PV Energy, Inc. con dirección en Calle Los Filtros, Guaynabo, 00969, Puerto Rico. <br />
            <br />
            <strong>12. ADMINISTRADOR:</strong>
            <br />
            Este sorteo es administrado por Jump Start Digital, LLC con oficina principal en 1605 Ave. Ponce de León Suite 211 San Juan, Puerto Rico
            00912. <br />
            <br />
            <strong>13. CLÁUSULA DE MODIFICACIÓN O CANCELACIÓN DEL SORTEO:</strong> <br />
            Si, por cualquier razón, el Sorteo no puede llevarse a cabo según lo planeado debido a manipulación, intervención no autorizada, fraude,
            fallas técnicas o cualquier otra causa que, en la opinión exclusiva del Auspiciador y Administrador, corrompa o afecte la administración,
            seguridad, imparcialidad, integridad o conducta apropiada de este Sorteo, el Auspiciador se reserva el derecho, sujeto al cumplimiento de
            las leyes y los reglamentos aplicables, de cancelar, terminar, modificar o suspender el Sorteo. En caso de cancelación, se seleccionará al
            azar un ganador del Gran Premio y del Segundo Premio de todas las participaciones elegibles recibidas hasta la fecha de terminación, de
            conformidad con las reglas establecidas. <br />
            <br />
            <strong>14. CLÁUSULA DE RESOLUCIÓN DE DISPUTAS:</strong> <br />
            - Cualquier intento por parte de una persona de dañar deliberadamente el funcionamiento legítimo del sorteo o de socavar el proceso justo
            y transparente puede constituir una violación de las leyes penales y civiles. <br />
            - En caso de tal intento, el Auspiciador se reserva el derecho de buscar compensación y daños de dicha persona en la medida máxima
            permitida por la ley, incluyendo el proceso penal. La falta del Auspiciador en hacer cumplir cualquier término de estas reglas no
            constituirá una renuncia a estas disposiciones.
            <br /> <br />
            <strong>15. PREGUNTAS Y RECLAMACIONES:</strong> <br />
            En caso de preguntas sobre el sorteo, pueden comunicarse con Jump Start Digital, LLC al correo electrónico a info@jumpstartdig.com.
          </p>
          <div className="flex w-full items-center justify-center">
            <Link to="/pr/bsn" className="border-1 p-[3%] text-[13px] text-white no-underline lg:p-[1%] lg:text-[15px]">
              ATRÁS
            </Link>
          </div>
        </div>
      </div>
      <Footer color="blue" />
    </>
  )
}

export default BsnReglas

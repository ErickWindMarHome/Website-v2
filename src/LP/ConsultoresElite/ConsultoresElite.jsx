import useTitle from '../../hooks/useTitle'
import FormsLeads_PR_RHF from '../../components/FormsLeads/FormsLeads_reactHookForm/Formsleads_PR_RHF'
import { Consultores_Elite } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'
const ConsultoresElite = () => {
  useTitle('Consultores Elite - WindMar')
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center md:items-start">
        <img
          className="my-8 w-[50%] md:ml-20 md:w-[15%]"
          src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/Components/Logo/Logo-PR.webp"
          alt=""
        />
      </div>
      {/* mobile */}
      <section className="flex-center mb-[80px] w-full items-center justify-center">
        <div className="flex w-full flex-col items-center justify-center md:hidden md:pl-20">
          <h1 className="my-8 w-full text-center text-[40px] leading-tight text-[#224694]">
            <strong className="text-[#FF9E18]">Recibe</strong> lo que <strong>mereces</strong>
          </h1>
          <p className="w-[80%] text-center text-[13px] font-[500] text-[#224694]">
            Energía limpia, ahorros reales y respaldo de <strong>Windmar Home</strong>, los líderes solares en <strong>Puerto Rico.</strong>
          </p>
         
         <FormsLeads_PR_RHF
            id="Team-Consultores-Elite"
            campaign={'ConsultoresElite'}
            estilos={Consultores_Elite}
            boton={'Enviar'}
            phone={true}
            email={true}
            placeholder={true}
          />
         
          <p className="w-[80%] text-center text-[13px] text-[#224694]">
            El sistema eléctrico de Puerto Rico ya no da abasto, pero la energía solar sí. Comienza a recibir todos los beneficios de tener energía
            solar en tu hogar con Windmar Home.
          </p>
        </div>
      </section>
      <section className="flex h-[400px] w-[90%] flex-col items-center justify-center rounded-2xl bg-[url('https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Dilan/Fondo_Banner.webp')] bg-cover bg-center bg-no-repeat md:hidden">
        <a
          href="tel:7874891283"
          className="relative top-[150px] z-30 my-6 block w-[80%] rounded-full bg-white px-8 py-2 text-center font-[600] text-[#224694]"
        >
          ¡Llámanos 787 489 1283!
        </a>
        <div className="relative top-[155px] z-20 flex h-0 w-full items-end justify-end">
          <img className="h-[468px] w-[297px]" src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Dilan/Foto_Dylan.webp" alt="" />
        </div>
      </section>
      {/* desktop */}
      <section className="hidden h-[400px] w-[90%] flex-col items-center justify-center rounded-2xl bg-[url('https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Dilan/Fondo_Banner.webp')] bg-cover bg-center bg-no-repeat md:flex md:h-[607px] md:flex-row">
        <div className="w-full md:pl-20">
          <h1 className="my-5 text-[64px] text-white leading-none">
            <strong className="text-[#FF9E18]">Recibe</strong> lo que <strong>mereces</strong>
          </h1>
          <p className="text-[16px] font-[500] text-white">
          El sistema eléctrico de <strong>Puerto Rico</strong> ya no da abasto, pero la energía solar sí. Comienza a recibir todos los beneficios de tener energía
          solar en tu hogar con <strong>Windmar Home</strong>.
          </p>
          
          <FormsLeads_PR_RHF
            id="Team-Consultores-Elite"
            campaign={'ConsultoresElite'}
            estilos={Consultores_Elite}
            boton={'Enviar'}
            phone={true}
            email={true}
            placeholder={true}
          />
        </div>
        <div className="flex md:relative md:left-8 md:top-[305px] md:z-20 md:h-0 md:w-full md:items-end md:justify-end">
          <img className="md:h-[700px] md:w-[460px]" src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Dilan/Foto_Dylan.webp" alt="" />
        </div>
      </section>

      <h1 className="my-8 w-full text-center text-[36px] font-[700] text-[#224694] md:text-[48px]">
        
        
      </h1>
      <section className="flex w-full items-center justify-center bg-[#224694] px-12 py-10">
        <iframe
          className="h-[202px] w-[360px] max-w-[747px] md:h-[445px] md:w-full"
          src="https://www.youtube.com/embed/uUgvqZV8TkE"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>

      <h1 className="my-8 text-center text-[36px] font-[700] text-[#224694] md:text-[48px]">
        <span className="inline-block bg-[linear-gradient(180deg,_white_75%,_#A4C2E5_25%)] px-2 py-1 md:bg-[linear-gradient(180deg,_white_60%,_#A4C2E5_40%)]">
          Conoce nuestros productos{' '}
        </span>
      </h1>
      <section className="my-8 flex w-full flex-col items-center justify-center md:flex-row">
        <div className="mx-4 flex w-full flex-col items-center justify-center">
          <div className="relative top-44 z-20 flex h-0 w-full flex-col items-center justify-center">
            <h1 className="my-8 w-full text-center text-[40px] font-bold text-white">Roofing</h1>
            <div className="relative">
              <img
                className="scale-75 transform transition-transform duration-300 ease-in-out md:hover:scale-110"
                src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Dilan/Roofing_2.webp"
                alt=""
              />
            </div>
          </div>
          <img className="h-[303px] w-[285px]" src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Dilan/Roofing+1.webp" alt="" />
          <p className="mb-8 mt-4 w-[70%] text-center text-[16px] text-[#0A0022] md:my-8">
            <strong>Protege tu hogar</strong> con techos duraderos y de calidad superior, diseñados para resistir a cualquier clima.
          </p>
        </div>
        <div className="mx-4 flex w-full flex-col items-center justify-center">
          <div className="relative top-40 z-20 flex h-0 w-full flex-col items-center justify-center">
            <h1 className="my-8 w-full text-center text-[40px] font-bold text-white">Solar</h1>
            <div className="relative">
              <img
                className="scale-75 transform transition-transform duration-300 ease-in-out md:hover:scale-110"
                src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Dilan/Tesla.webp"
                alt=""
              />
            </div>
          </div>
          <img className="h-[303px] w-[285px]" src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Dilan/Anker_2.webp" alt="" />
          <p className="mb-8 mt-4 w-[70%] text-center text-[16px] text-[#0A0022] md:my-8">
            <strong>Energía confiable y almacenamiento fresco</strong> en cualquier lugar. Perfectas para emergencias, viajes o actividades al aire
            libre.
          </p>
        </div>
        <div className="mx-4 flex w-full flex-col items-center justify-center">
          <div className="relative top-44 z-20 flex h-0 w-full flex-col items-center justify-center">
            <h1 className="my-8 w-full text-center text-[34px] font-bold text-white">Anker</h1>
            <div className="relative">
              <img
                className="scale-75 transform transition-transform duration-300 ease-in-out md:hover:scale-110"
                src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Dilan/Anker-1.webp"
                alt=""
              />
            </div>
          </div>
          <img className="h-[303px] w-[285px]" src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Dilan/Solar.webp" alt="" />
          <p className="mb-8 mt-4 w-[70%] text-center text-[16px] text-[#0A0022] md:my-8">
            <strong>Ahorra en tu factura eléctrica</strong> mientras aprovechas la energía ilimitada con el sol con nuestras placas solares de alta
            eficiencia.
          </p>
        </div>
      </section>
    </div>
  )
}

export default ConsultoresElite

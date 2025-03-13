import { LP_FirmaGana } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'
import FormsLeads_PR_RHF from '../../components/FormsLeads/FormsLeads_reactHookForm/Formsleads_PR_RHF'
import useTitle from '../../hooks/useTitle'
import { useLocation } from 'react-router-dom'

function FirmaGana() {
  let { pathname } = useLocation()
  const location =
    pathname === '/pr/farmacias-caridad'
      ? 'https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Firma_Gana/Logos-+blancos-01.webp'
      : 'https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Firma_Gana/Logos-02-02.webp'

  useTitle(pathname === '/pr/farmacias-caridad' ? 'Farmacias Caridad - WindMar' : 'Firma y písalo x2 - WindMar')

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[url('https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Firma_Gana/Fondo+Mobile-02.webp')] bg-cover bg-no-repeat md:bg-[url('https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Firma_Gana/Fondo+Desktop_Mesa+de+trabajo+1.webp')]">
      <section className="flex w-full items-center justify-center">
        <div className="my-8 flex w-full items-center justify-center">
          <img className="w-[50%] md:w-[600px]" src={location} />
        </div>
      </section>

      <div className="flex w-full flex-col items-center justify-center md:flex-row">
        <section className="mr-auto flex w-full max-w-[700px] flex-col items-center justify-center lg:w-[70%]">
          <div className="w-[80%] md:pl-10">
            <h1 className="w-full text-center text-[35px] text-white md:text-left md:text-[56px]">
              <strong>Firma</strong> y <strong>písalo</strong> x2
            </h1>
            <p className="w-full text-center text-[18px] text-white md:text-left md:text-[25px]">
              Duplica las oportunidades de <strong>GANAR!</strong>
            </p>
            <div className="w-[50%]"></div>
          </div>
          <div className="relative my-4 mt-60 flex w-[80%] max-w-[800px] items-center justify-center md:mt-6">
            <div className="absolute inset-0 w-full rounded-[20px] bg-white opacity-[60%]"></div>
            <div className="relative z-10 w-full">
              <FormsLeads_PR_RHF
                id="Firma_y_pisalo_cyber"
                campaign="Firma_y_pisalo_cyber"
                recruitment="sales"
                estilos={LP_FirmaGana}
                boton="Enviar"
                tittle={false}
                phone={true}
                sales_Rep_Phone={false}
                email={false}
                city={false}
                text={false}
                placeholder={true}
              />
            </div>
          </div>
        </section>
      </div>
      <section className="my-5 flex w-full flex-col items-center justify-center text-center">
        <img
          src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/Firma_Gana/Comp+1.gif"
          alt="Gif animado"
          className="w-[70%] md:w-[50%]"
        />

        <p className="font-midium w-[85%] text-[8px] text-white md:w-full md:text-[10px]">
          Comienza el domingo, 1 de septiembre de 2024 a la 12:01 AM (AST) y finaliza el domingo, 31 de agosto de 2025 a las 11:59PM (AST) (“Periodo
          de Participación”). <br className="hidden md:block" /> El ganador será seleccionado y notificado el día lunes, 15 de septiembre de 2025 en o
          antes de las 5:00PM (AST). <br className="hidden md:block" /> Solo se van a contar los participantes cuyas cuentas estén activas el 31 de
          agosto de 2025. <br className="hidden md:block" /> Nada que comprar para participar. Sorteo auspiciado por WindMar Home.
        </p>
      </section>
    </div>
  )
}

export default FirmaGana

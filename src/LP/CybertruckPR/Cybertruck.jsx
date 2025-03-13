import { Link, useLocation } from 'react-router-dom'
import FormLeads_PR_RHF_Cybertruck from '../../components/FormsLeads/FormsLeads_reactHookForm/FormLeads_PR_RHF_Cybertruck'
import useTitle from '../../hooks/useTitle'
import { useState } from 'react'

function Cybertruck() {
  let { pathname } = useLocation()
  const location = {
    img:
      pathname === '/pr/farmacias-caridad'
        ? 'https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/CybertruckPr-X2/LogoWindmarX2_Caridad.webp'
        : 'https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/CybertruckPr-X2/LogoWindmarX2.webp',
  }
  useTitle(pathname === '/pr/farmacias-caridad' ? 'Farmacias Caridad - WindMar' : 'Firma y písalo x2 - WindMar')
  const [Error, setError] = useState(0)

  function AjusteEspacio() {
    let variable = 820
    for (let i = 0; i < Error; i++) {
      variable += 20
    }
    return variable
  }

  console.log(AjusteEspacio())

  return (
    <div className="flex h-full w-full flex-col items-center bg-black">
      <section className="relative w-full text-white">
        <img
          src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/CybertruckPr-X2/Background.webp"
          alt=""
          className="h-[600px] w-full object-cover object-right lg:h-full lg:max-h-[90vh] lg:min-h-[800px]"
        />
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-[#000000] via-transparent to-[#000000]"></div>
        <div className="absolute top-0 flex h-full w-full flex-col justify-between py-5 lg:justify-around lg:py-0">
          <div className="sticky flex flex-col gap-8">
            <img
              src={location.img}
              alt="Logo Windmar; Logo Windmar x Firmalo y pisalo; Logo firmalo y pisalo x2; Cybertruck Sorteo"
              className="mx-auto w-[70%] max-w-[550px]"
            />
            <h2 className="mb-8 w-full bg-gradient-to-r from-[#ffffff1f] via-transparent to-[#ffffff1f] p-2 text-center font-bold lg:text-2xl">
              ¡Refiere a 5 personas y duplica la oportunidad de GANAR!
            </h2>
          </div>
          <div className="flex w-full justify-around">
            <div className="hidden w-[600px] lg:block">
              <FormLeads_PR_RHF_Cybertruck setError={setError} />
            </div>
            <div className="my-auto">
              <div>
                <h2 className="text-center font-bold lg:text-[25px]">REGALANDO 2</h2>
                <img
                  src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/CybertruckPr-X2/LogoCybertruck.webp"
                  alt="Logo Cybertruck; Tesla Auto"
                  className="mx-auto h-1/2 w-[60%] max-w-[500px] lg:w-[80%]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Formulario Mobile */}

      <div className="w-[85%] max-w-[600px] lg:hidden">
        <FormLeads_PR_RHF_Cybertruck />
      </div>

      {/* Footer Informacion */}
      <div className="relative mb-2 mt-[70px] hidden w-[80%] max-w-[800px] lg:block" style={{ marginTop: `${AjusteEspacio()}px` }}>
        <div className="max-h-[180px] w-full rounded-t-xl border-[2.5px] border-b-0 border-white border-x-white p-5 pb-0">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-[#000000] to-transparent"></div>
          <div className="flex h-full -translate-y-[44px] flex-col items-center gap-4">
            <div className="text-center text-white">
              <h2 className="mx-auto w-fit bg-black px-4 text-sm lg:text-xl">
                Por cada <span className="text-3xl font-bold">5</span> referidos que ingreses,
              </h2>
              <h2 className="font-bold text-[#F89D25] lg:text-3xl">obtienes un ticket para participar.</h2>
            </div>
            <Link to="/pr/cybertruck/rules" className="rounded-lg border-2 border-white bg-white/20 p-2 text-white">
              Reglas del sorteo
            </Link>
          </div>
        </div>
      </div>
      <div className="relative mb-2 mt-[70px] w-[80%] max-w-[800px] lg:hidden">
        <div className="max-h-[180px] w-full rounded-t-xl border-[2.5px] border-b-0 border-white border-x-white p-5 pb-0">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-[#000000] to-transparent"></div>
          <div className="flex h-full -translate-y-[44px] flex-col items-center gap-4">
            <div className="text-center text-white">
              <h2 className="mx-auto w-fit bg-black px-4 text-sm lg:text-xl">
                Por cada <span className="text-3xl font-bold">5</span> referidos que ingreses,
              </h2>
              <h2 className="font-bold text-[#F89D25] lg:text-3xl">obtienes un ticket para participar.</h2>
            </div>
            <Link to="/pr/cybertruck/rules" className="rounded-lg border-2 border-white bg-white/20 p-2 text-white">
              Reglas del sorteo
            </Link>
          </div>
        </div>
      </div>
      {/* Informacion */}
      <div className="my-4 flex w-full flex-col items-center justify-center text-balance text-center text-[8px] text-white lg:mt-12 lg:w-[90%] lg:text-sm">
        <p>
          Comienza el domingo, 1 de septiembre de 2024 a la 12:01 AM (AST) y finaliza el domingo, 31 de agosto de 2025 a las 11:59PM (AST) (“Periodo
          de Participación”).
        </p>
        <p>
          El ganador será seleccionado y notificado el día lunes, 15 de septiembre de 2025 en o antes de las 5:00PM (AST). Solo se van a contar los
          participantes cuyas cuentas estén activas el 31 de agosto de 2025. Nada que comprar para participar. Sorteo auspiciado por WindMar Home.
        </p>
      </div>
    </div>
  )
}

export default Cybertruck

import './FormLemaDesktop.css'
import './FormLemaMobile.css'
import AknerLogo from '../../../assets/anker/Anker_logo.png'
import ak_aside from '../../../assets/anker/ak_aside.webp'

import { useSelector, useDispatch } from 'react-redux'
// Librearias
import validator from 'validator'

import { getUTMs } from '../../../features/getUTM/getUTM'
import { formDataUTM } from '../../../features/formDataUTM/formDataUTM'
import { SendAPI } from '../../../features/Zoho/CRMAPI/CRMAPI'

// Importamos los estados de Redux
import { setForm_Name, setFull_Name, setPhone, setEmail } from '../../../features/states/formDataSlace'
import FormsLeads_PR_RHF from '../../../components/FormsLeads/FormsLeads_reactHookForm/Formsleads_PR_RHF'
import { LP_Anker } from '../../../utils/Styles_Forms_LP/styles_Forms_Leads'

const FormLema = () => {
  const mobileQuery = useSelector((state) => state.states.mobileQuery)
  const locacion = useSelector((state) => state.states.locacion)

  return (
    <div className={`FormLema-${mobileQuery}`} id="anker_home">
      <div className="flex w-full flex-col items-center justify-center lg:w-[80%] lg:flex-row">
        <article className="px-10vw box-border flex h-full w-[80%] flex-col items-start justify-center text-white lg:w-1/2">
          <img src={AknerLogo} alt="Anker Logo" className="my-5 w-5/6" />
          <h2 className="text-lg font-medium leading-tight md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            La solución más
            <br />
            brillante para tu
          </h2>
          <h1 className="m-0 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-[42px] font-bold text-transparent">apartamento.</h1>
          <p className="m-0 text-2xl font-normal leading-normal">
            <br />
            Completa el formulario y <strong>recibe el catálogo Anker</strong> con información detallada sobre los productos. <br />
            <strong>¡Nuestro equipo te contactará prontamente!</strong>
          </p>
          <FormsLeads_PR_RHF
            id="anker_pr"
            estilos={LP_Anker}
            boton={'¡Adquiere tu catálogo ahora!'}
            tittle=""
            phone={true}
            email={true}
            placeholder={true}
            product={['Anker']}
            campaign={'Anker'}
          />
        </article>
        <aside className="flax h-full w-1/2 items-center justify-center">
          <img className="w-[90%] object-cover" src={ak_aside} alt="Anker PowerHouse" />{' '}
        </aside>
      </div>
    </div>
  )
}

export default FormLema

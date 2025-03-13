import FormsLeads_PR_RHF from '../FormsLeads/FormsLeads_reactHookForm/Formsleads_PR_RHF'
import FormsLeadsFL from '../FormsLeads/FormsLeads_FL'

import { useSelector, useDispatch } from 'react-redux'
import { HomeWebsiteForm } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'
import { setFormvisible } from '../../features/states/statesSlice'
import { IoCloseSharp } from 'react-icons/io5'

const FormLead = () => {
  const locacion = useSelector((state) => state.states.locacion)
  const formvisible = useSelector((state) => state.states.formvisible)

  const dispatch = useDispatch()

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-white/70 p-4 backdrop-blur-sm">
      <div className="relative w-[90%] bg-[#1e429b] p-4 md:w-[600px]">
        <div
          className="absolute -right-4 -top-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#f89b24] p-2"
          onClick={() => dispatch(setFormvisible(!formvisible))}
        >
          <IoCloseSharp className="text-4xl" />
        </div>
        {locacion === 'fl' ? (
          <FormsLeadsFL
            id="HomeWebsiteFormFL"
            campaign={'HomeWebsiteFormFL'}
            estilos={HomeWebsiteForm}
            tittle="Leave us your details, our team of experts is ready to serve you."
            phone={true}
            email={true}
            placeholder={true}
            products={true}
          />
        ) : (
          <FormsLeads_PR_RHF
            id="HomeWebsiteFormPR"
            campaign={'HomeWebsiteFormPR'}
            estilos={HomeWebsiteForm}
            tittle=" Déjanos tus datos, nuestro equipo de expertos está listo para servirte."
            phone={true}
            email={true}
            placeholder={true}
            products={true}
          />
        )}
      </div>
      <div className="hidden flex-col justify-center gap-4 px-8 md:flex">
        {locacion === 'fl' ? (
          <>
            <div className="flex flex-col justify-center gap-2">
              <h2 className="text-4xl font-bold text-[#1e429b]">Central Office Number:</h2>
              <p className="font-semibold text-[#1e429b]">407-308-0099</p>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <h2 className="text-4xl font-bold text-[#1e429b]">Customer support:</h2>
              <p className="font-semibold text-[#1e429b]">787-641-2331</p>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <h2 className="text-4xl font-bold text-[#1e429b]">Hours:</h2>
              <p className="font-semibold text-[#1e429b]">Monday to Friday</p>
              <p className="font-semibold text-[#1e429b]">9:00 a.m. – 5:00 p.m.</p>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col justify-center gap-2">
              <h2 className="text-4xl font-bold text-[#1e429b]">Orientación Gratis:</h2>
              <p className="font-semibold text-[#1e429b]">787-395-7766</p>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <h2 className="text-4xl font-bold text-[#1e429b]">Servicio al Cliente:</h2>
              <p className="font-semibold text-[#1e429b]">787-395-7766</p>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <h2 className="text-4xl font-bold text-[#1e429b]">Horario:</h2>
              <p className="font-semibold text-[#1e429b]">Lunes a Viernes</p>
              <p className="font-semibold text-[#1e429b]">9:00 a.m. - 5:00 p.m</p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default FormLead

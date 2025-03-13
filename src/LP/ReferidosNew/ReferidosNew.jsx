import Header from '../../layouts/General/Header/Header'
import Footer from '../../layouts/General/Footer/Footer'
import { ReferidosNewForm } from '../../utils/Styles_Forms_LP/styles_Forms_Leads'
import referidosMobible from '../../assets/ReferidosNew/referidoMobible.svg'
import referido from '../../assets/ReferidosNew/referido.svg'
import useTitle from '../../hooks/useTitle'
import FormsLeads_PR_REF_Raincoat from '../../components/FormsLeads/FormsLeads_reactHookForm/Formsleads_PR_REF_Raincoat'
import { useState } from 'react'
import ThankYouPage_PR from '../../components/ThankYouPage/ThakYouPage_PR'

export default function ReferidosNew() {
  useTitle('Referidos clientes - WindMar')
  const [Modal, setModal] = useState(false)

  return (
    <>
      {Modal && <ThankYouPage_PR />}
      <div className="bg-[#F2F2F2] bg-no-repeat lg:bg-referidos lg:bg-cover">
        <Header />
        <div className="my-14 flex w-screen flex-col items-center justify-center p-5 lg:my-28 lg:h-[calc(100vh-8vw)] lg:flex-row lg:gap-5 lg:p-20 lg:py-36 lg:pl-[4%] lg:pr-[5%]">
          <div className="w-full px-2 lg:hidden">
            <img src={referidosMobible} alt="" />
          </div>
          <div className="hidden lg:block lg:w-[70%]">
            <img src={referido} className="h-full w-full" alt="" />
          </div>
          <div className="w-full lg:h-[calc(100vh-8vw)] lg:overflow-y-auto">
            <p className="font-semibold uppercase">Referidos</p>
            <h1 className="font-bold text-[#1D429B] lg:text-5xl">Refiere y Gana</h1>
            <FormsLeads_PR_REF_Raincoat
              id="form_de_referidos"
              campaign={'ReferidosNew'}
              estilos={ReferidosNewForm}
              tittle=" Déjanos tus datos, nuestro equipo de expertos está listo para servirte."
              phone={true}
              email={true}
              placeholder={true}
              products={true}
              modalSuccess={setModal}
            />
          </div>
        </div>
        <Footer color="blue" />
      </div>
    </>
  )
}

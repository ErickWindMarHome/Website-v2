import gifForm from '../../assets/formEnviado.gif'
import { Link } from 'react-router-dom'

const ThankYouPage_PR = () => {
  return (
    <>
      <div className="fixed bottom-0 left-0 z-50 flex h-full w-screen items-center justify-center bg-white bg-opacity-50">
        <div className="shadow-2x flex h-[70%] w-[90%] flex-col items-center justify-evenly gap-4 rounded-xl border-2 bg-white p-9 sm:w-3/4 lg:w-1/2">
          <Link
            to={'/pr'}
            className="flex h-7 w-7 items-center justify-center self-end rounded-full border-2 border-[#F89B24] text-xl text-[#1D429B] hover:border-none hover:bg-[#F89B24] hover:text-white"
          >
            ×
          </Link>
          <h1 className="text-[50px] font-bold text-[#1D429B] sm:text-[62px] md:text-[72px] lg:text-[82px] xl:text-[92px] 2xl:text-[102px]">
            ¡Gracias!
          </h1>
          <img src={gifForm} className="w-96" alt="" />
          <div className="flex flex-col items-center">
            <p className="text-center text-sm text-[#1D429B] lg:text-xl">Su respuesta ha sido </p>
            <strong className="text-[#1D429B]">enviada correctamente</strong>
          </div>
          <img src="https://windmar-website-cms.s3.amazonaws.com/Components/Logo/Logo-PR.webp" className="w-1/3 lg:w-1/12" alt="" />
        </div>
      </div>
    </>
  )
}

export default ThankYouPage_PR

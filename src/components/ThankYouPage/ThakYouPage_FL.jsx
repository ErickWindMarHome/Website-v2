import gifForm from '../../assets/formEnviado.gif'
import { Link, useNavigate, useParams } from 'react-router-dom'
const ThankYouPage_FL = () => {
  const navigate = useNavigate()
  useParams

  return (
    <>
      <div className="fixed bottom-0 left-0 z-50 flex h-full w-screen items-center justify-center bg-white bg-opacity-50">
        <div className="shadow-2x flex h-[70%] w-[90%] flex-col items-center justify-evenly gap-4 rounded-xl border-2 bg-white p-9 sm:w-3/4 lg:w-1/2">
          <Link
            to={'/fl'}
            className="flex h-7 w-7 items-center justify-center self-end rounded-full border-2 border-[#F89B24] text-xl text-[#1D429B] hover:border-none hover:bg-[#F89B24] hover:text-white"
            onClick={() => navigate(-1)}
          >
            ×
          </Link>
          <h1 className="text-[50px] font-bold text-[#1D429B] sm:text-[62px] md:text-[72px] lg:text-[82px] xl:text-[92px] 2xl:text-[102px]">
            ¡Thank You!
          </h1>
          <img src={gifForm} className="w-96" alt="" />
          <div className="flex flex-col items-center">
            <p className="text-center text-sm text-[#1D429B] lg:text-xl">Your response has beean </p>
            <strong className="text-[#1D429B]">successfully submitted</strong>
          </div>
          <img src="https://windmar-website-cms.s3.amazonaws.com/Components/Logo/Logo-FL.webp" className="w-1/3 lg:w-1/12" alt="" />
        </div>
      </div>
    </>
  )
}

export default ThankYouPage_FL

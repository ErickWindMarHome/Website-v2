import { useSelector, useDispatch } from 'react-redux'
import { setFormvisible } from '../../../features/states/statesSlice'

const FooterBar = () => {
  const locacion = useSelector((state) => state.states.locacion)
  const formvisible = useSelector((state) => state.states.formvisible)

  const dispatch = useDispatch()

  return locacion === 'fl' ? (
    <div className="fixed bottom-0 left-0 z-20 flex w-full items-center justify-evenly bg-[#1e429b] p-3 text-[1.3rem] font-semibold">
      <article className="flex items-center justify-evenly whitespace-nowrap text-[12px] text-white md:text-[20px]">
        FOR A FREE CONSULTATION,&nbsp;&nbsp;
        <button
          className="flex h-[1vh] min-w-[30%] max-w-[40%] cursor-pointer items-center justify-center rounded-[10px] border border-white bg-[#1e429b] px-5 py-2.5 text-white transition-all duration-200 ease-in-out hover:bg-[#f89b24] hover:text-[#1e429b] md:h-[5vh]"
          onClick={() => dispatch(setFormvisible(formvisible ? false : true))}
        >
          CONTACT US
        </button>
      </article>
    </div>
  ) : (
    <div className="fixed bottom-0 left-0 z-20 flex w-full items-center justify-evenly bg-[#1e429b] p-3 text-[1.3rem] font-semibold">
      <article className="flex items-center justify-evenly whitespace-nowrap text-[12px] text-white md:text-[20px]">
        PARA UNA CONSULTA GRATIS&nbsp;&nbsp;
        <button
          className="flex h-[1vh] min-w-[30%] max-w-[40%] cursor-pointer items-center justify-center rounded-[10px] border border-white bg-[#1e429b] px-5 py-2.5 text-white transition-all duration-200 ease-in-out hover:bg-[#f89b24] hover:text-[#1e429b] md:h-[5vh]"
          onClick={() => {
            dispatch(setFormvisible(formvisible ? false : true))
          }}
        >
          CONTÁCTANOS
        </button>
      </article>
    </div>
  )
}

export default FooterBar

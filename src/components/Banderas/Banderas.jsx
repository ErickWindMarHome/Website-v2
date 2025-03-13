import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setlenguaje } from '../../features/states/statesSlice'

const Banderas = ({ className }) => {
  const dispatch = useDispatch()
  const locacion = useSelector((state) => state.states.locacion)

  const handleLanguageChange = (language) => {
    dispatch(setlenguaje(language))
  }

  return (
    <div className={`flex items-center justify-center pr-1 ${className}`}>
      {locacion === 'fl' ? (
        <div>
          <Link to="/pr" onClick={() => handleLanguageChange('es')} className="flex flex-col items-center justify-center">
            <img alt="Puerto Rico" className="mb-1 w-10" src="https://windmar-website-cms.s3.amazonaws.com/Components/Banderas/PR-Bandera.webp" />
            <p className="m-0 w-[90%] text-center text-xs">Windmar PR</p>
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/fl" onClick={() => handleLanguageChange('en')} className="flex flex-col items-center justify-center">
            <img alt="Florida" className="mb-1 w-10" src="https://windmar-website-cms.s3.amazonaws.com/Components/Banderas/Fl-Bandera.webp" />
            <p className="m-0 w-[90%] text-center text-xs">Windmar FL</p>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Banderas

import { Link } from 'react-router-dom'

const ModalPopUpVacationFL = ({ open }) => {
  return (
    <>
      {open && (
        <div className="fixed bottom-0 left-0 z-50 flex h-full w-screen items-center justify-center bg-black bg-opacity-50">
          <Link to={'/fl'} className="flex items-center justify-center">
            <img src="https://scms.windmar.com/uploads/Unfortunately_homeoeners_154efdbd7e.svg" className="w-2/5" />
          </Link>
        </div>
      )}
    </>
  )
}

export default ModalPopUpVacationFL

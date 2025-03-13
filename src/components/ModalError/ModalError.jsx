import React, { useEffect, useState } from 'react'

function ModalError({ error, setModal }) {
  const handleRefresh = () => {
    window.location.reload(false)
  }

  return (
    <div id="popup-modal" tabIndex="-1" className="fixed inset-0 flex items-center justify-center bg-slate-400/70">
      <div className="relative max-h-full w-full max-w-md p-4">
        <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute end-2.5 top-3 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={handleRefresh}
          >
            <svg className="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span className="sr-only">Cerrar modal</span>
          </button>
          <div className="flex flex-col items-center justify-center p-4 text-center md:p-5">
            <svg
              className={`mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-200 ${error ? 'text-red-400 dark:text-red-200' : 'text-green-400 dark:text-green-200'}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 className="text-balance text-xl font-normal">Error al enviar el formulario</h3>
            <p className="text-gray-400">{error}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalError

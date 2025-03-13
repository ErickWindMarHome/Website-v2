import { useEffect } from 'react'

function useTitle(title) {
  useEffect(() => {
    document.title = title
  }, [title]) // Se re-ejecuta cada vez que el título cambia
}

export default useTitle

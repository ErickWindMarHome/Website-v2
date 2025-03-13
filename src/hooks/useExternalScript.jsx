import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const useExternalScript = (scriptUrl, region, async) => {
  const location = useLocation()

  useEffect(() => {
    let script

    // Verifica si la ruta es para "/fl" o "/pr" según la región proporcionada
    const isPRLocation = region === 'pr' && /^\/pr.*$/.test(location.pathname)
    const isFLLocation = region === 'fl' && /^\/fl.*$/.test(location.pathname)

    if (isFLLocation || isPRLocation) {
      console.log(`Añadiendo script para rutas /${region}`)

      // Crear el script
      script = document.createElement('script')
      script.src = scriptUrl
      script.async = async

      // Agregar el script al documento
      document.body.appendChild(script)
    }

    // Limpiar el script cuando el componente se desmonte o la ubicación cambie
    return () => {
      if (script && script.parentNode) {
        console.log(`Eliminando script para rutas /${region}`)
        script.parentNode.removeChild(script)
      }
    }
  }, [scriptUrl, region, async, location]) // Dependencias del useEffect
}

export default useExternalScript

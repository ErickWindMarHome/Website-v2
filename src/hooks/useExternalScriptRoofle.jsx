import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const useExternalScriptRoofle = (url, async = true, allowedLocations = []) => {
  const location = useLocation()

  useEffect(() => {
    let script

    const isAllowedLocation = allowedLocations.includes(location.pathname)

    if (isAllowedLocation) {
      console.log('Añadiendo script')

      // Crear un nuevo elemento script
      script = document.createElement('script')

      // Establecer el atributo src y async
      script.src = url
      script.async = async

      // Agregar el script al documento
      document.body.appendChild(script)
    }

    // Limpiar el script y el div generado cuando el componente se desmonte o la ubicación cambie
    return () => {
      if (script && script.parentNode) {
        console.log('Eliminando script')
        script.parentNode.removeChild(script)
      }

      // Eliminar el elemento <div> con el ID `roof-quote-pro-widget`
      const widgetDiv = document.getElementById('roof-quote-pro-widget')
      if (widgetDiv) {
        widgetDiv.remove()
        console.log("Eliminando el div con id 'roof-quote-pro-widget'")
      }
    }
  }, [url, async, location, allowedLocations]) // Dependencias del useEffect, incluyendo la ubicación y la lista de ubicaciones permitidas
}

export default useExternalScriptRoofle

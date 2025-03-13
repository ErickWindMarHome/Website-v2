import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactPixel from 'react-facebook-pixel'

function UsePageViews({ pixelID }) {
  let location = useLocation()

  useEffect(() => {
    const options = {
      autoConfig: true, // set pixel's autoConfig
      debug: false, // enable logs
    }
    ReactPixel.init(pixelID, options)
    ReactPixel.pageView() // For tracking page view
  }, [pixelID])

  useEffect(() => {
    ReactPixel.pageView() // For tracking page view
  }, [location])

  return null
}

export default UsePageViews

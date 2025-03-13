// MapComponent.jsx
import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const MapComponent = () => {
  // Ejemplo de ubicación central
  const center = { lat: 40.7128, lng: -74.006, name: 'New York City' }

  return (
    <MapContainer center={center} zoom={12} style={{ width: '100%', height: '400px' }}>
      <TileLayer
        url="https://{s}.stamen.com/toner/{z}/{x}/{y}.png"
        attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      />
      <Marker position={center}>
        <Popup>{center.name}</Popup>
      </Marker>
    </MapContainer>
  )
}

export default MapComponent

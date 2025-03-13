import React from 'react'

const InteractiveMap = () => {
  return (
    <div className="h-64 w-full border-0 sm:h-96">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.0410901769647!2d-81.4376135247428!3d28.451450182344003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77f07340778a3%3A0x672fbb5ef0dc957d!2s6753%20Kingspointe%20Pkwy%2C%20Orlando%2C%20FL%2032819%2C%20USA!5e0!3m2!1sen!2sin!4v1693413736897!5m2!1sen!2sin"
        className="h-full w-full border-0"
        height={1200}
        allowFullScreen=""
        loading="lazy"
        title="Google Map Location"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default InteractiveMap

export const SendAPI = (formData, FormReset) => {
  console.log(Object.fromEntries(formData))
  const config = {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: {
      'Content-Type': 'application/json',
    },
  }

  fetch('https://windmar.com/getdata', config)
    .then((response) => response.text())
    .then((data) => {
      console.log(data)
      alert('Información enviada')
    })
    .catch((error) => {
      console.error('Error:', error)
      alert('Error al enviar la información')
    })
    .finally(() => {
      FormReset()
    })
}
export const SendAPIReclutamiento = (formData, FormReset) => {
  console.log(Object.fromEntries(formData))
  const config = {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: {
      'Content-Type': 'application/json',
    },
  }

  fetch('https://windmar.com/careers', config)
    // fetch("http://localhost:3006/careers", config)
    .then((response) => response.text())
    .then((data) => {
      console.log(data)
      alert('Información enviada')
    })
    .catch((error) => {
      console.error('Error:', error)
      alert('Error al enviar la información')
    })
    .finally(() => {
      FormReset()
    })
}

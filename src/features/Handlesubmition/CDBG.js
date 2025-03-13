import { getUTMs } from '../getUTM/getUTM'
import { formDataUTM } from '../formDataUTM/formDataUTM'
import { SendAPI_CDBG } from '../Zoho/CRMAPI/CRMAPI'

export const HS_CDBG = (form, validateForm, locacion, FormReset) => {
  form.preventDefault()

  if (validateForm(form.target)) {
    const utms = getUTMs()

    console.log(form.target)

    const formData = formDataUTM(utms, form.target, locacion.toUpperCase())

    console.log(formData)

    console.log('Enviando información en formato FormData')
    console.log(Object.fromEntries(formData))

    console.log('Enviando información en formato JSON')
    console.log(JSON.stringify(Object.fromEntries(formData)))

    SendAPI_CDBG(formData, FormReset)
  } else {
    alert('Por favor, llena todos los campos del formulario correctamente')
  }
}

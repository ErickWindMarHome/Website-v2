export const formDataUTM = (utms, form, Location) => {
  const formData = new FormData(form)

  console.log('Datos de de FormDataUTM', formData)

  formData.append('Form_Name', form.name)
  formData.append('Lead_Status', Location === 'FL' ? 'New Lead' : 'Nuevo Lead')
  if (utms?.utm_campaign?.includes('Incentivo')) {
    formData.append('Lead_Source', 'Facebook Website Leads')
  } else {
    formData.append('Lead_Source', utms?.utm_source ? utms?.utm_source : 'website')
  }

  formData.append('UTM_Term', utms?.utm_term ? utms?.utm_term : '')
  formData.append('UTM_Campaign', utms?.utm_campaign ? utms?.utm_campaign : '')
  formData.append('UTM_Content', utms?.utm_content ? utms?.utm_content : '')
  formData.append('UTM_Medium', utms?.utm_medium ? utms?.utm_medium : '')
  formData.append('UTM_Source', utms?.utm_source ? utms?.utm_source : '')
  formData.append('UTM_Status', utms?.utm_status ? utms?.utm_status : '')
  formData.append('Location', Location ? Location : 'PR')

  if (utms?.utm_source) {
    const upperCaseUTMSource = utms?.utm_source.toUpperCase()
    if (upperCaseUTMSource.includes('FACEBOOK')) {
      //"FB_ID": utm_id,
      formData.append('FB_ID', utms?.utm_id ? utms?.utm_id : '')
      formData.append('FB_Ad_Name', utms?.utm_term ? utms?.utm_term : '')
      formData.append('FB_Ad_Set_Name', utms?.utm_content ? utms?.utm_content : '')
      formData.append('FB_Campaign_Name', utms?.utm_campaign ? utms?.utm_campaign : '')
    } else if (upperCaseUTMSource.includes('YOUTUBE') || upperCaseUTMSource.includes('GOOGLE')) {
      formData.append('Google_Adname', utms?.utm_term ? utms?.utm_term : '')
      formData.append('Google_Campaign', utms?.utm_campaign ? utms?.utm_campaign : '')
      formData.append('Google_Adset', utms?.utm_content ? utms?.utm_content : '')
    }
  }
  return formData
}

// Funcion para extrar los UTMs de la URL
export const getUTMs = (campain, traffic) => {
  if (!window.location.search.includes('?')) return { UTM_Source: traffic, UTM_Campaign: campain }
  let urlTemp = window.location.search

  let url = urlTemp.replaceAll('+', ' ').replaceAll('%3A', ':').replaceAll('%40', '@').replaceAll('%20', ' ').replaceAll('%23', '#')

  const utm = url.split('?')[1]
  const utmArray = utm.split('&')
  const utmObject = {}
  utmArray.forEach((element) => {
    const key = element.split('=')[0]
    const value = element.split('=')[1]
    utmObject[key] = value
  })
  const utmObjectZoho = {
    UTM_Source: utmObject.utm_source,
    UTM_Medium: utmObject.utm_medium,
    UTM_Campaign: utmObject.utm_campaign,
    UTM_Term: utmObject.utm_term,
    UTM_Content: utmObject.utm_content,
    Sales_Manager_Id: utmObject.utm_salesid,
  }

  return utmObjectZoho
}

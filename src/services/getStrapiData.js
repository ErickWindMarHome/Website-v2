const VITE_API_URL = import.meta.env.VITE_API_URL
const VITE_API_TOKEN = import.meta.env.VITE_API_TOKEN

export const getStrapiData = async (path, location) => {
  const locationID = location == 'pr' ? '2' : '1'
  const requestUrl = `${VITE_API_URL}${path}/${locationID}?populate=*`

  return await fetch(requestUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + VITE_API_TOKEN,
    },
  })
    .then((response) => response.text())
    .then((data) => data)
    .catch((error) => error)
}

export const FetchStrapiData = async (path, ID) => {
  const requestUrl = `${VITE_API_URL}${path}/${ID}?populate=*`

  return await fetch(requestUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + VITE_API_TOKEN,
    },
  })
    .then((response) => response.json())
    .then((data) => (data?.data?.attributes ? data?.data?.attributes : data))
    .catch((error) => error)
}

export const validateDataObj = (dataStrapi, dataStructure, keysData) => {
  const data = dataStructure
  let detection = false
  keysData.map((key) => {
    for (const [keyData, valueData] of Object.entries(dataStrapi[key])) {
      if (typeof value === 'object') {
        detection = true
        data[keyData] = valueData
      }
    }
  })
  const dataRestructure = {}
  for (const [key, value] of Object.entries(data)) {
    // console.log(`${key}: ${value}`);
    if (typeof value === 'object') {
      if (value?.data?.attributes?.formats) {
        console.log(key)
        dataRestructure[key] = value.data.attributes.formats
        dataRestructure[key].url = value.data.attributes.url
      } else {
        dataRestructure[key] = value
      }
    } else {
      dataRestructure[key] = value
    }
  }

  console.log('Data from strapi', dataRestructure)

  return data
}

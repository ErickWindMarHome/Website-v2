const VITE_API_URL = import.meta.env.VITE_API_URL
const VITE_API_TOKEN = import.meta.env.VITE_API_TOKEN

export const StrapiGetData = async (path, ID) => {
  const url = VITE_API_URL + path + '/' + ID + '?populate=*'
  console.log('URL: ', url, 'TOKEN: ', VITE_API_TOKEN)
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + VITE_API_TOKEN,
      },
    })
    const data = response.json()
    return typeof data === 'object' ? data : { error: true }
  } catch (error) {
    return error
  }
}

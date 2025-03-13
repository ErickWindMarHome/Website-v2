import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL_CMS //

export const getBlogsFl = async () => {
  try {
    const res = await axios.get(
      `${baseURL}/api/blogs?fields[0]=Titulopagina&fields[1]=url&fields[2]=Metadescripcionfinal&populate[Imagen1][fields][0]=url&fields[3]=createdAt&locale=en`,
    )

    return res.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
export const getBlogsPR = async () => {
  try {
    const res = await axios.get(
      `${baseURL}/api/blogs?fields[0]=Titulopagina&fields[1]=url&fields[2]=Metadescripcionfinal&populate[Imagen1][fields][0]=url&fields[3]=createdAt&locale=es-PR`,
    )

    return res.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
export const getBlog = async (slug, locale) => {
  try {
    const res = await axios.get(`${baseURL}/api/blogs?filters[URL][$eq]=${slug}&populate=*&locale=${locale}`)
    return res.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

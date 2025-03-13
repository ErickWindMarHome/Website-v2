import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL
const API_KEY_WH = import.meta.env.VITE_API_KEY
const VITE_API_KEY_ZH = import.meta.env.VITE_API_KEY_ZH

export const postFormLeads = async (data, location) => {
  try {
    const res = await axios.post(`${baseURL}/ApiWindmarHome/v1/${location}/leads?Api_Key=${API_KEY_WH}`, data)
    console.log(res.data)
    return res.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
export const postFormRefered = async (data, location) => {
  try {
    const res = await axios.post(`${baseURL}/ApiWindmarHome/v1/${location}/leads/referred?Api_Key=${API_KEY_WH}`, data)
    console.log(res.data)
    return res.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
export const postFormReferedTecnicos = async (data, location) => {
  try {
    const res = await axios.post(`${baseURL}/ApiWindmarHome/v1/${location}/recruitment/installers/referred?Api_Key=${API_KEY_WH}`, data)
    console.log(res.data)
    return res.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const postFormRecruitment = async (data, recruitment) => {
  try {
    const res = await axios({
      method: 'post',
      url: `${baseURL}/ApiWindmarHome/v1/PR/recruitment/${recruitment}?Api_Key=${API_KEY_WH}`,
      data: data,
    })
    console.log(res.data)
    return res.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getBaterias = async () => {
  try {
    const res = await axios.get(`${baseURL}/ApiWindmarHome/v1/pr/sales/batteries-count/tesla?Api_Key=${API_KEY_WH}`)
    return res.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getSalesRecruitment = async (id) => {
  try {
    const res = await axios.get(`${baseURL}/ApiWindmarHome/v1/pr/recruitment/sales/${id}?Api_Key=${API_KEY_WH}`)
    return res.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const postFormSalesTeam = async (data) => {
  try {
    const res = await axios.post(`${baseURL}/ApiWindmarHome/v1/pr/sales-teams?Api_Key=${VITE_API_KEY_ZH}`, data)

    console.log(res.data)
    return res.data
  } catch (error) {
    console.error(error)
    throw error.response.data
  }
}

export const getSalesTeamsByPhone = async (data) => {
  try {
    const res = await axios.get(
      `${baseURL}/ApiWindmarHome/v1/pr/sales-teams?Api_Key=${API_KEY_WH}&fields=Name%2CFirst_Name%2CLast_Name%2CPhone_Number&Phone_Number=${data}`,
    )
    return res.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getSalesRecruitments = async (data) => {
  try {
    const res = await axios.get(`${baseURL}/ApiWindmarHome/v1/pr/recruitment/sales?${data}`)
    return res.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getSalesTeamsBulk= async () => {
  try {
    const res = await axios.get(`${baseURL}/ApiWindmarHome/v1/pr/sales-teams/bulk`)
    return res.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const postSalesRecruitment = async (data) => {
  try {
    const res = await axios.post(`${baseURL}/ApiWindmarHome/v1/pr/recruitment/sales?Api_Key=${API_KEY_WH}`, data)
    return res.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const putSalesRecruitment = async (id, data) => {
  try {
    console.log('data', data)

    const res = await axios.put(`${baseURL}/ApiWindmarHome/v1/pr/recruitment/sales/${id}?Api_Key=${API_KEY_WH}`, data)
    return res.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getSalesTeamsById = async (id) => {
  try {
    const res = await axios.get(`${baseURL}/ApiWindmarHome/v1/pr/sales-teams/${id}?Api_Key=${API_KEY_WH}`)
    return res.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getAdministrativeByEmail = async (data) => {
  try {
    const res = await axios.get(
      `${baseURL}/ApiWindmarHome/v1/pr/administrative?Api_Key=${API_KEY_WH}&fields=Name%2CCiudad%2CEmail%2CTel_fono&Email=${data}`,
    )
    return res.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getInstallersTeamByPhone = async (data) => {
  try {
    const res = await axios.get(
      `${baseURL}/ApiWindmarHome/v1/pr/installers-team?Api_Key=${API_KEY_WH}&fields=Name%2CCiudad%2CEmail%2CPhone&Phone=${data}`,
    )
    return res.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const postValidationNumber = async (data) => {
  try {
    const res = await axios.post(`${baseURL}/ApiWindmarHome/v1/pr/validations/phones?Api_Key=${API_KEY_WH}`, data)
    // console.log(res.data)
    return res.data
  } catch (error) {
    console.error(error)
    // throw error
  }
}

export const postDealtoLead = async (data) => {
  try {
    const res = await axios.post(`${baseURL}/ApiWindmarHome/v1/pr/leads/by-deal?Api_Key=${VITE_API_KEY_ZH}&${data}`)

    return res.data
  } catch (error) {
    console.error(error)
    throw error.response.data
  }
}

export const updatePrecualificación = async (id, data) => {
  try {
    const res = await axios.put(`${baseURL}/ApiWindmarHome/v1/pr/leads/${id}?Api_Key=${VITE_API_KEY_ZH}`, data)
    return res.data
  } catch (error) {
    console.error(error)
    throw error.response.data
  }
}

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  WhyWindmarData: {},
  attributes: {},
  loading: false,
  error: null,
}

export const homeDataSlice = createSlice({
  name: 'homeData',
  initialState,
  reducers: {
    getHomeDataStart: (state) => {
      state.loading = true
    },
    getHomeDataSuccess: (state, action) => {
      const data = JSON.parse(action.payload)
      state.WhyWindmarData = data.data
      state.attributes = data.data?.attributes ?? {}
      state.loading = false
      state.error = null
    },
    getHomeDataFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const { getHomeDataStart, getHomeDataSuccess, getHomeDataFailure } = homeDataSlice.actions

export default homeDataSlice.reducer

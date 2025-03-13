import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  attributes: {},
  loading: false,
  error: null,
}

export const DataSlice = createSlice({
  name: 'DataStrapi',
  initialState,
  reducers: {
    getDataStart: (state) => {
      state.loading = true
    },
    getDataSuccess: (state, action) => {
      const data = action.payload
      state.attributes = data.data?.attributes ?? {}
      state.loading = false
      state.error = null
    },
    getDataFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const { getDataStart, getDataSuccess, getDataFailure } = DataSlice.actions

export default DataSlice.reducer

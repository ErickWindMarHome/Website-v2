import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  gaStatus: false,
  PixelIDsave: false,
  value: 0,
  menu: window.matchMedia('(max-width: 768px)').matches ? false : true,
  scroll: 0,
  locacion: '',
  lenguaje: 'es',
  pathrute: window.location.pathname,
  mobileQuery: window.matchMedia('(max-width: 768px)').matches ? 'mobile' : 'desktop',
  middleQuery: window.matchMedia('(max-width: 1024px)').matches ? 'middle' : 'desktop',
  formvisible: false,
  traffic: 'Direct',
}

export const statesSlice = createSlice({
  name: 'states',
  initialState,
  reducers: {
    setMobileQuery: (state, action) => {
      state.mobileQuery = action.payload
    },
    setMiddleQuery: (state, action) => {
      state.middleQuery = action.payload
    },
    setMenu: (state, action) => {
      state.menu = action.payload
    },
    setLocacion: (state, action) => {
      state.locacion = action.payload
    },
    setlenguaje: (state, action) => {
      state.lenguaje = action.payload
    },
    setScroll: (state, action) => {
      state.scroll = action.payload
    },
    setFormvisible: (state, action) => {
      state.formvisible = action.payload
    },
    setGaStatus: (state, action) => {
      state.gaStatus = action.payload
    },
    setPixelIDsave: (state, action) => {
      state.PixelIDsave = action.payload
    },
    setTraffic: (state, action) => {
      state.traffic = action.payload
    },
  },
})

export const {
  setMobileQuery,
  setMiddleQuery,
  setMenu,
  setLocacion,
  setlenguaje,
  setScroll,
  setFormvisible,
  setGaStatus,
  setPixelIDsave,
  setTraffic,
} = statesSlice.actions

export default statesSlice.reducer

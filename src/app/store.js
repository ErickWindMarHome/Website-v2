import { configureStore } from '@reduxjs/toolkit'
import statesReducer from '../features/states/statesSlice'
import formDataReducer from '../features/states/formDataSlace'
import homeDataReducer from '../features/states/HomeDataSlace'
import DataStrapi from '../features/states/DataStrapi'

export const store = configureStore({
  reducer: {
    states: statesReducer,
    homeData: homeDataReducer,
    formData: formDataReducer,
    DataStrapi: DataStrapi,
  },
})

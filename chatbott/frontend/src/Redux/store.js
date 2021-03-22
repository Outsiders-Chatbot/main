import { configureStore } from '@reduxjs/toolkit'
import chatSliceReducer from './chatSlice'

export default configureStore({
  reducer: {
      chat : chatSliceReducer
  }
})
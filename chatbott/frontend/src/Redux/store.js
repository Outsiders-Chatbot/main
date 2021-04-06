import { configureStore } from '@reduxjs/toolkit'
import chatSliceReducer from './chatSlice'
import courseSliceReducer from './courseSlice'


export default configureStore({
  reducer: {
      chat : chatSliceReducer,
      course : courseSliceReducer
  }
})
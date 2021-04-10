import { configureStore } from '@reduxjs/toolkit'
import chatSliceReducer from './chatSlice'
import courseSliceReducer from './courseSlice'
import savedcourseSliceReducer from './savedcourseSlice'



export default configureStore({
  reducer: {
      chat : chatSliceReducer,
      course : courseSliceReducer,
      savedcourse :savedcourseSliceReducer
  }
})
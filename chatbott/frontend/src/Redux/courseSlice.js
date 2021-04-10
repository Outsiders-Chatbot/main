import { createSlice } from '@reduxjs/toolkit';
import  axios  from "../axios/axios";
const initialState = {
    courses : []
}

export const courseSlice = createSlice({
    name:'course',
    initialState , 
    reducers : {
        
        initialingData : (state , action)=>{
            state.courses = action.payload;
        } ,
        DeleteTheSavedCourse : (state , action)=>{
            const payload = action.payload;
            const index = state.courses.findIndex((item) => item._id === payload._id);
            if (index !== -1) {
            state.courses.splice(index, 1);
        }
    }
}
})


export const selectCourses = (state) => {
    return state.course.courses;
    };


export const {initialingData,DeleteTheSavedCourse} = courseSlice.actions


export const fetchCourses = ()=> async (dispatch) => {
      const response = await axios.get('/courses/getall')
      console.log(response.data);
      console.log("inside fetchCourses");
      dispatch(initialingData(response.data))
    }
  
  

export default courseSlice.reducer;
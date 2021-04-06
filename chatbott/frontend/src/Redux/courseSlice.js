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
        }
    }
})


export const selectCourses = (state) => {
    return state.course.courses;
    };


export const {initialingData} = courseSlice.actions


export const fetchCourses = ()=> async (dispatch) => {
      const response = await axios.get('/getallCourses')
      console.log(response.data);
      console.log("inside fetchCourses");
      dispatch(initialingData(response.data))
    }
  
  

export default courseSlice.reducer;
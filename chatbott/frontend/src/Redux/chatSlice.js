import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    messages : [ {
        msg : 'hey i m khalil ',
        source : 'user' 
    },
    {
        msg : 'hey i m chatbot ',
        source : 'bot' 
    },
    {
        msg : 'how are you ',
        source : 'bot' 
    },
    {
        msg : 'im good how are you ',
        source : 'user' 
    },
    {
        msg : 'im fine  ',
        source : 'bot' 
    }]
}

export const chatSlice = createSlice({
    name:'chat',
    initialState , 
    reducers : {
        
        addmessage : (state , action) => {
            const message = action.payload ;
            state.messages.push(message)
        }
    }
})


export const selectMessages = (state) => {
    return state.chat.messages;
    };


export const {addmessage} = chatSlice.actions


export default chatSlice.reducer;
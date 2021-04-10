import React, { useEffect } from 'react'
import styled from 'styled-components'
import Botmessage from '../messages/Botmessage'
import UserMessage from '../messages/UserMessage'


import {addmessage,selectMessages} from '../../Redux/chatSlice'
import { useDispatch , useSelector} from 'react-redux'


function ChatMessage() {
    
    const messages =  useSelector(selectMessages)

    return (
        <Container> 
            {
                messages.map( (message,index) =>{
                  return message.source==='bot'?
                  <Botmessage key={index} message={message}/> :
                    <UserMessage key={index} message={message}/>
                } )
            }
        
        </Container>
    )
}

export default ChatMessage

const Container = styled.div`
padding : 10px;
width: 100%;
height: 100%;
padding :20px;
overflow-y : auto;
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
`


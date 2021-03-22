import React , {useState} from 'react'
import SendIcon from '@material-ui/icons/Send';
import styled from 'styled-components'
import {addmessage,selectMessages} from '../../Redux/chatSlice'
import { useDispatch , useSelector} from 'react-redux'
import axios from '../../axios/axios'
function MessageInput() {
   
    const [input, setInput] = useState("");
    
    const dispatch = useDispatch()

    const send =async (e) => {
        e.preventDefault();
        if(!input) return;
        const usermsg = {
            source : 'user',
            msg : input
        }
        dispatch(addmessage(usermsg))
        const BotAnswer = await axios.post('/',usermsg)
        console.log(BotAnswer.data);
        dispatch(addmessage(BotAnswer.data));
        setInput("")
    }
   
   
    return (
        <Container>
            <InputContainer>
                <form>
                    <input 
                        onChange={(e)=>setInput(e.target.value)}
                        type="text" 
                        value={input}
                        placeholder="Message here..." />
                    <SendButton 
                        type="submit"
                        onClick={send}>
                        <Send/>
                    </SendButton>
                </form>
            </InputContainer>
        </Container>
    )
}

export default MessageInput


const Container = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 24px;
`

const InputContainer = styled.div`
    border: 1px solid #8D8D8E;
    border-radius: 4px;
    background-color : white;
    form {
        display: flex;
        height: 42px;
        align-items: center;
        padding-left: 10px;
        input {
            flex: 1;
            border: none;
            font-size: 13px;
        }
        input:focus {
            outline: none;
        }
    }
`

const SendButton = styled.button`
    background: #ffffb3 ;
    border-radius: 2px;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    cursor: pointer;
    border: none;
    .MuiSvgIcon-root {
        width: 18px;
    }
    :hover {
        background:#ffff01;
    }
`

const Send = styled(SendIcon)`
    color: #D9D9D9;
`
import React , {useState,useEffect} from 'react'
import SendIcon from '@material-ui/icons/Send';
import styled from 'styled-components'
import axios from '../../axios/axios'
import { useHistory } from "react-router-dom";

import MicIcon from '@material-ui/icons/Mic';

import {addmessage,selectMessagesAuth} from '../../Redux/chatAuthSlice'
import { useDispatch} from 'react-redux'

function MessageInputAuth({AuthMessages , setAuthMessages}) {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");
    const history = useHistory();

    const [fields, setfields] = useState('email');
    const [Request, setRequest] = useState({source : 'user'})

    const send =async (e) => {
        e.preventDefault();
        if(!input) return;
        const usermsg = {
            source : 'user',
            msg : input
        }
        dispatch(addmessage(usermsg))
        setRequest({
            ...Request,[fields]:input
        })
        setInput("")
        const botmsg = {
            source : 'bot',
            msg : 'give me your password now'
        }
        dispatch(addmessage(botmsg))
        setfields('password')
        setRequest({
            ...Request,[fields]:input
        })
        console.log(Request);
       
    }

    useEffect(() => {
        if(Request.password){
            axios.post('/auth/',Request).then((res)=>{console.log('this is ur data',res.data);})
            setTimeout(() => {
                history.push('/')
            }, 1000);
        }
    }, [Request])



   
   
    return (
        <Container>
            <InputContainer>
                <form>
                    <input 
                        onChange={(e)=>setInput(e.target.value)}
                        type={`${fields}`}
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

export default MessageInputAuth


const Container = styled.div`
background : grey;
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
const MicIconStyled = styled(MicIcon)`
    color: red;
`
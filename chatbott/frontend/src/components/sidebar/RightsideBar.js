import React from 'react'
import styled from 'styled-components'
import SettingsIcon from '@material-ui/icons/Settings';
import Dialogs from './additionalstuff/DialogsSettings'
import './CSS/UserProfile.css'
import StaticProgress from './CSS/RightComponents/StaticProgress';
import Days from './Days';
function RightsideBar() {
    const [open, setOpen] = React.useState(false);
      
    const handleClickOpen = () => {
      setOpen(true);
    };
    return (
       
              <Container>
            <Profile>
                <ProfileBox>
                    <Logo>
                    <img src="https://media.istockphoto.com/photos/businesswoman-portrait-on-white-picture-id615279718?k=6&m=615279718&s=612x612&w=0&h=ozD8oKRFXmyyXoAcDuo09WSkmtLSYYlOBuCCNrMyW2Y="/>
                    </Logo>
                    <Headline>
                        <div>Random user 
                            <SettingButton onClick={()=>handleClickOpen()}>
                            <SettingsIcon className="settings"/>
                            </SettingButton>
                            <Dialogs open={open} setOpen={setOpen} />
                            </div> 
                    </Headline>
                    <Note>
                        <span>hardwork</span>
                    </Note>
                </ProfileBox>
            </Profile>
            <Statics>
                <StaticBox>
                <StaticProgress/>
                </StaticBox>
            </Statics>
            <Report>
                <ReportBox>
                    <Days/>
                </ReportBox>
            </Report>
        </Container>
    
    )
}

export default RightsideBar
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 27% auto 27% ;
  `

const Profile = styled.div`
padding : 15px;
width: 100%;
height: 100%;

`
const SettingButton = styled.button`
border : none ;
background-color : transparent;
:focus{outline: none;}
` 
const ProfileBox= styled.div`
padding : 15px;
width: 100%;
height: 100%;
background-color :#e5edfc;
border-radius: 20px;
overflow : hidden;
box-shadow :0 4px 6px -2px rgba(0, 0, 0, 0.55);
display : flex ; 
flex-direction:column;
align-items : center ;
justify-content : center ;
div {
    white-space: nowrap;
    margin : 2px 10 px;
    font-size : 20px;
    font-weight: bold;
    font-family: 'Dosis', sans-serif;
  }
  
`

const StaticBox = styled.div`
padding : 15px;
width: 100%;
height: 100%;
background-color :#e5edfc;
border-radius: 20px;
overflow : hidden;
box-shadow :0 20px 25px -5px rgba(0, 0, 0, 0.1);
`
const Report = styled.div`
padding : 15px;
width: 100%;
height: 100%;
`

const ReportBox = styled.div`
padding : 15px;
width: 100%;
height: 100%;
background-color :#e5edfc;
border-radius: 20px;
overflow : hidden;
box-shadow :inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
`
const Statics = styled.div`
padding : 5px 15px;
width: 100%;
height: 100%;
`
const Logo = styled.div`
width: 80px;
height: 80px;
border-radius: 50px;
display : flex ; 
align-items : center ;
justify-content : center ;
overflow: hidden;
border : 0.1px solid  #c2c2d6;
margin-left: 8px;
img {
    width: 100%;
}
`

const Headline = styled.div`
width : auto;
color : #2e3746;
height : 20px;
display: grid;
grid-template-columns:  auto 27% ;

.settings:hover{
    cursor : pointer; 
    color : grey;
}
`

const Note = styled.div`
 span {
    
    font-size : 16px;
    color : grey;
    
 }
`
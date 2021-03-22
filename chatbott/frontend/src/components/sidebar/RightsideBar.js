import React from 'react'
import styled from 'styled-components'
function RightsideBar() {
    return (
       
              <Container>
            <Profile>
                <ProfileBox>
                here is the profile of the user
                </ProfileBox>
            </Profile>
            <Statics>
                <StaticBox>

                here is his stats 
                </StaticBox>
            </Statics>
            <Report>
                <ReportBox>
                and here is the report section
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

const ProfileBox= styled.div`
padding : 15px;
width: 100%;
height: 100%;
background-color :#e5edfc;
border-radius: 20px;
overflow : hidden;
box-shadow :0 4px 6px -2px rgba(0, 0, 0, 0.55);
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

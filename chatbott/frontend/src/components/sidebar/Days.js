import React from 'react'
import ProgressBarWeek from './additionalstuff/ProgressBarWeek'
import styled from 'styled-components'
function Days() {
    return (
        <Container>
            <DaysOfWeek>
            <ProgressBarWeek/>
            <ProgressBarWeek/>
            <ProgressBarWeek/>
            <ProgressBarWeek/>
            <ProgressBarWeek/>
            <ProgressBarWeek/>
            <ProgressBarWeek/>
            </DaysOfWeek>
        </Container>
    )
}

export default Days
 

const DaysOfWeek = styled.div`
padding-left:20px;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(33px, 1fr));
height:60%;
width: 100%;
grid-gap:10px;
`
const Container = styled.div`
display:flex ;
    align-items : center ;
    justify-content:center ; 
    height:100%;
    width:100%;
`
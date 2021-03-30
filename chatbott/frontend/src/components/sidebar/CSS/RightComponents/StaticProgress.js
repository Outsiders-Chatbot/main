import React from 'react'
import styled from 'styled-components'
import ProgressBar from '../../additionalstuff/ProgressBar'

function StaticProgress() {
    return (
        <Container>
            <EventsPart><div>events </div>
            <div>progress goal : cheamin : i want to learn web : chemin a-z
                </div>        
                <div>job </div>
            </EventsPart>
            <ProgressPart>
               
            </ProgressPart>
        </Container>
    )
}

export default StaticProgress

// lllll
// here is his stats : 
// - time : how much he passed using the chatbot
// - level : 
// - finished : how many trophies -finshed courses- he got 
// lllll
// here is the progress of the user 
// like coursera with a button to view all

const Container = styled.div`
width: 100%;
height: 100%;
grid-template-rows: 50% auto ;
`

const ProgressPart = styled.div`
`

const EventsPart = styled.div`
position:relative;
height:50%;
background:orange;
`
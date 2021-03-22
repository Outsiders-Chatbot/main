import React from 'react'
import styled from 'styled-components'
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import BookmarkIcon from '@material-ui/icons/Bookmark';
function SavedCourse() {
    return (
        <Container>
             <CourseAvatar>
            <img src="https://cdn.auth0.com/blog/illustrations/react.png"/>
            </CourseAvatar>
            <CourseDetails>
                <div style={{fontStyle:"italic" ,fontSize: "18px" }}>Course name</div>
                <div style={{fontFamily: "cursive" ,fontSize: "13px"}}>Course Domain</div>
            </CourseDetails>
            <Func>
                <div>
                <DetailButton onClick={()=>alert('detailButton')}>
                <OpenInNewIcon className="detail"/>
                </DetailButton>
                
                </div>
            </Func>
        </Container>
    )
}

export default SavedCourse

const Container = styled.div`
padding :2px;
  margin-top :10px;
  width: 100%;
  height:70px;
  display: grid;
  grid-template-columns: minmax(0, 80px) 60% 20%; 
  background-color : white;
  border-radius: 8px;

  :hover {
    box-shadow :inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
    background: #dff3fe;
}
`
const CourseAvatar = styled.div`
    padding :5px;
    width: 100%;
    height: 100%;
    display : flex ; 
    align-items : center ;
    justify-content : center ;
    overflow: hidden;
    margin-left: 8px;
    img {
        margin-right : 13px;
        width: 90%;
        border-radius: 50%;
        border : 0.1px solid grey;
    }
`
const img = styled.img`
height : 10px;
width : 10px;
`
const CourseDetails = styled.div`
margin-left:10px;
padding :  5px 10px;
font-family: Times New Roman , cursive;


`

const Func = styled.div`
height:100%;
width:100%;
padding  : 5px;
display: flex ;
align-items : center;
    .detail:hover{
        color : red;
        cursor : pointer;
    }
    .save:hover{
        color:green;
        cursor : pointer;       
    }
    
    
`
const SaveButton = styled.button`
border : none ;
background-color : transparent;
`
const DetailButton = styled.button`
border : none ;
background-color : transparent;
` 
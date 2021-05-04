import React, {useEffect , useState , useContext}  from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import CameraEnhanceOutlinedIcon from "@material-ui/icons/CameraEnhanceOutlined";
import IconButton from '@material-ui/core/IconButton';

import axios from '../../../axios/axios'
import SettingsIcon from '@material-ui/icons/Settings';
import { UserContext } from '../../../contextProvider/contextProvider';
import styled from 'styled-components'
import TextField from "@material-ui/core/TextField";

function FormUser({handleClose}) {
  const {user,setuser} = useContext(UserContext)

  const [open, setOpen] = React.useState(true);
  const [openEmail, setOpenopenEmail] = React.useState(true);

  const [openIntrest, setOpenIntrest] = React.useState(true);

  const [userInfo, setuserInfo] = React.useState({
    file:[],
    filepreview:"https://media.istockphoto.com/photos/businesswoman-portrait-on-white-picture-id615279718?k=6&m=615279718&s=612x612&w=0&h=ozD8oKRFXmyyXoAcDuo09WSkmtLSYYlOBuCCNrMyW2Y="
})
  
  const handleImage = (event) =>{
    console.log(event.target.files[0]);
    setuserInfo({
        ...userInfo,file:event.target.files[0],
        filepreview: URL.createObjectURL(event.target.files[0])
    })
    console.log(URL.createObjectURL(event.target.files[0]));

}

  
    const handleClickOpen = () => {
      setOpen((olddata)=>!olddata);
    };

    const handleClickOpenEmail = () => {
      setOpenopenEmail((olddata)=>!olddata);
    };

    const handleClickOpenIntrest = () => {
      setOpenIntrest((olddata)=>!olddata);
    };
  //validation 
  const validate = Yup.object({
   
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required')
  
  })

    return (
        <div style={{width:"400px"}}>
 <Container>
            <Profile>

                    <Logo>
                      <div>
                    <img src={`${userInfo.filepreview}`}/>
                      </div>
                    </Logo>
                    
                    
                    
                    <input
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImage}
                id="icon-button-file"
                type="file"
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                  style={{
                    position: "relative",
                    right: -70,
                    top: -10,
                    width: 25,
                    height: 25,
                  }}
                >
                    <CameraEnhanceOutlinedIconStyled/>
                        
                </IconButton>
              </label>
                    
                    
                    
                    
                  
                    <Headline>
                        <div>Random user   </div> 
                    </Headline>
                    <Note>
                        <span>hardwork</span>
                    </Note>
            </Profile>
            <NotLogout>
          
            <Formik
      initialValues={{
        firstName: 'random user' ,
        email:'user.email@khalil.com',
        intrest: 'user.intrest'
      }}
      validationSchema={validate}
      onSubmit={(values,{resetForm}) => {
        console.log(values)
       
      }}
    >
      {formik => (
        <div>
    
          <Form /*onChange={toggleRegister(Object.keys(formik.errors).length)}*/>
         <Labelselect>

          <label style={{whiteSpace: 'nowrap'}} htmlFor="email" hidden={!openEmail}> {formik.values.email}<span onClick={()=>handleClickOpenEmail()}><SettingsIcon/></span>  </label>
          <TextField hidden={openEmail} style={{width:'200px'}} id="email" name="email"  type="email"  onBlur={()=>handleClickOpenEmail()}  onChange={formik.handleChange}  value={formik.values.email} />
         </Labelselect>
         <Labelselect>

          <label style={{whiteSpace: 'nowrap'}} htmlFor="firstName" hidden={!open}> {formik.values.firstName}<span onClick={()=>handleClickOpen()}><SettingsIcon/></span>  </label>
          <TextField hidden={open}  id="firstName" name="firstName"  type="text"  onBlur={()=>handleClickOpen()}  onChange={formik.handleChange}  value={formik.values.firstName} />
        </Labelselect>

        <Labelselect>
          <label style={{whiteSpace: 'nowrap'}} htmlFor="intrest" hidden={!openIntrest}> {formik.values.intrest}<span onClick={()=>handleClickOpenIntrest()}><SettingsIcon/></span>  </label>
          <select
        name="intrest"
        value={formik.values.intrest}
        onBlur={()=>handleClickOpenIntrest()}  onChange={formik.handleChange}
        hidden={openIntrest}
        >
        <option value="" label="intrests ?" />
        <option value="cloud" label="cloud" />
        <option value="finance" label="finance" />

      </select>
        </Labelselect>
          
            <button   /*disabled={disabledd}*/ className="btn btn-dark mt-3" type="submit" >Modify</button>
            
          </Form>
        </div>
      )}
    </Formik>  

            </NotLogout>
        </Container>
        
        
    </div>
    )
}

export default FormUser

const Container = styled.div`
display: grid;
grid-template-columns:  auto 50% ;

  `

const Profile = styled.div`


`
const Labelselect = styled.div`
width : 100px;
height : 20px;
margin-bottom : 20px;
  label {
    padding-left : 5px;
    display : flex;
    
    span{
      margin-left : 5px;
    }
  }

` 

const NotLogout = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
border-left : 1px solid #9bc1e6;
.logout{
    :focus{
        
    }
    :hover{
        cursor : pointer;
        color : red;
    }
}
`
const SettingButton = styled.button`
border : none ;
background-color : transparent;
:focus{outline: none;}
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
div {
  img{
    width: 100%;
  }
}
`

const CameraEnhanceOutlinedIconStyled = styled(CameraEnhanceOutlinedIcon)`
  z-index: 1;
  color: grey;
  :hover {
    color: blue;
    cursor: pointer;
  }
`;


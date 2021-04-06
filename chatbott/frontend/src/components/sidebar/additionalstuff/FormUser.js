import React, {useEffect , useState}  from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {TextField} from './TextField'
import axios from '../../../axios/axios'

function FormUser({handleClose}) {
 
  //validation 
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })

    return (
        <div style={{width:"400px"}}>

        
         <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email:'',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={(values,{resetForm}) => {
        console.log(values)
        const x = ()=>{handleClose()}
        x();
        resetForm({values:''})
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Manage Your Profile</h1>
          <Form /*onChange={toggleRegister(Object.keys(formik.errors).length)}*/>
            <TextField label="Your name " name="firstName" type="text" value={formik.values.firstName}/>
            <TextField label="Your email" name="email" type="email" value={formik.values.email}/>
            <TextField label="Your intrests" name="intrests" type="text" />
            <TextField label="Your background" name="background" type="text" />
            <TextField label="Futur Goals" name="background" type="text" />
           
            <button   /*disabled={disabledd}*/ className="btn btn-dark mt-3" type="submit" >Modify</button>
            <button className="btn btn-danger mt-3 ml-3" type="reset"  >Reset</button>
          </Form>
        </div>
      )}
    </Formik>  
    </div>
    )
}

export default FormUser


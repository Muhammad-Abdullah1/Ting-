import React from "react"
import { Link ,useNavigate} from "react-router-dom";
import{Formik,Form,Field,ErrorMessage} from 'formik'
import * as yup from 'yup'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import axios from "axios";
import {  BsFillArrowLeftCircleFill } from "react-icons/bs";


const ResetPassScreen =()=> {
  const naviagte=useNavigate();
        const defaultValues={email:'' }
      const validationSchema=yup.object().shape({
        email:yup.string().required("Enter Email").email('Inavalid E-Mail')
      })
      const submitHandler=(values)=>{
      axios.post('http://34.125.201.35:8000/api/forgot-password',values)
      .then(function(response){
        if(response.data.error){
      alert(response.data.error)
        }
        else{
            alert("Reset password sent to your Email please Check email")
          naviagte('/ChangePass')
        }
      })
      .catch ((error)=> {
        alert('please Enter Valid email Address')
      })
      }
    return (
        <div class="wrapper ">
        <div id="formContent">
        <div class="fadeIn first">
            <h1>ting</h1>
           

            <h2 class="inactive underlineHover"> <Link className="Link-color" to='/'>< BsFillArrowLeftCircleFill/> Log In/Signup  </Link></h2>
          </div>
          <Formik
            initialValues={defaultValues}
            validationSchema={validationSchema}
            onSubmit={submitHandler} >
          <Form>
            <Field type="email" id="login" class="fadeIn second"   name="email" placeholder="Email"  / >
            <p ><ErrorMessage name="email"/></p>
            <button type="submit"  class="fadeIn fourth" > Reset Password
              </button>
          </Form>
          </Formik>
        </div>
      </div>
    )
}

export default ResetPassScreen;
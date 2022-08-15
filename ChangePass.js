import React from "react"
import { Link,useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import axios from "axios";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const ChangePass = () => {
    const navigate=useNavigate();
    const defaultValues = {
        email: '',
        password: '',
        password_confirmation: '',
        token:''
    }
    const validationSchema = yup.object().shape({
        email: yup.string().required("Enter Email").email('Inavalid E-Mail'),
        password: yup.string().required('Enter Password'),
        password_confirmation: yup.string()
            .oneOf([yup.ref('password'), null], 'Passwords must match'),
            token:yup.string().required("Enter Token")
    })
    const submitHandler = (values) => {
        axios.post('http://34.125.201.35:8000/api/reset-password', values)
            .then(function (response) {
                if (response.data.error) {
                    alert(response.data.error)
                }
                else {
                    alert("Password Changed")
                    navigate('/')
                }
            })
            .catch((error) => {
                alert('please Enter Valid email Address')
            })
    }
    return (
        <div class="wrapper ">
            <div id="formContent">
                <div class="fadeIn first">
                    <h1>ting</h1>
                    <h2 class="inactive underlineHover"> <Link className="Link-color" to='/'>< BsFillArrowLeftCircleFill /> Log In/Signup  </Link></h2>
                </div>
                <Formik
                    initialValues={defaultValues}
                    validationSchema={validationSchema}
                    onSubmit={submitHandler} >
                    <Form>
                        <label ><b>Reset Password</b></label>
                        <Field type="email" id="login" class="fadeIn second" name="email" placeholder="Email" />
                        <p ><ErrorMessage name="email" /></p>
                        <Field type="password" id="login" class="fadeIn second" name="password" placeholder="New Password" />
                        <p ><ErrorMessage name="password" /></p>
                        <Field type="password" id="login" class="fadeIn second" name="password_confirmation" placeholder="Conferm Password" />
                        <p ><ErrorMessage name="password_confirmation" /></p>
                        <Field type="text" id="login" class="fadeIn second" name="token" placeholder="token" />
                        <p ><ErrorMessage name="token" /></p>
                        <button type="submit" class="fadeIn fourth" >Save
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default ChangePass
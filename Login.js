import React from "react"
import { Link ,useNavigate} from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useState } from "react";
// import ForgetPass from "./ForgetPass";
import * as yup from 'yup'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import axios from "axios";
import ForgetPassword from "./ForgetPassword";
const Login = () => {
    const navigate=useNavigate();
    // const [token,setToken]=useState();
    // localStorage.setItem('token',token)
    const defaultValues = { email: '', password: '',checkbox: false}
    const validationSchema = yup.object().shape({
        email: yup.string().required("Enter Email").email('Inavalid E-Mail'),
        password: yup.string().required('Enter Password'),
        checkbox:yup.boolean().oneOf([true],"PLease fill checkbox")
    })
    const submitHandler = (values) => {
        axios.post('http://34.125.201.35:8000/api/login', values)
            .then(function (response) {
                if (response.data.error) {
                    alert(response.data.error)
                }
                else {
                   localStorage.setItem('auth',response.data.token)
                   localStorage.setItem("authID",response.data.hotspot.id)
                    navigate('/Home')

                }
            })
            .catch((error) => {
                console.error('Error:${error}')
            })
    }
    return (
        <div class="wrapper ">
            <div id="formContent">
                <div class="fadeIn first">
                    <h1>ting</h1>
                    <h2 class="active"> <Link className="Link-color" to='/'>Log In </Link></h2>
                    <h2 class="inactive underlineHover"><Link className="Link-color" to='/SignUp'>Sign Up</Link> </h2>
                </div>
                <Formik
                    initialValues={defaultValues}
                    validationSchema={validationSchema}
                    onSubmit={submitHandler} >
                    <Form>
                        <Field type="email" id="login" class="fadeIn second" name="email" placeholder="Email" />
                        <p ><ErrorMessage name="email" /></p>
                        <Field type="password" id="password" class="fadeIn third " name="password" placeholder="password" />
                        <p ><ErrorMessage name="password" /></p>
                        <ForgetPassword />
                        <label>
                            <Field type="checkbox" name="checkbox" ></Field>
                            By continue logging in,you agree to <span className="label_color">Terms of service </span> and <span className="label_color">privacy policy.</span>
                        </label>
                        <p><ErrorMessage name="checkbox"/></p>
                        <button type="submit" class="fadeIn fourth" > Log  In
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}
export default Login;
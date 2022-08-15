import React from "react"
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import axios from "axios";
const SignUp = () => {
    const defaultValues = {
        hotspot_name: '',
        contact_name: '',
        hotspot_city: '',
        hotspot_postcode: '',
        hotspot_street: '',
        hotspot_country: '',
        email: '',
        password: '',
        confirmPassword: '',
        description: '',
        role_id: '1',
        first_name: 'farhan',
        last_name: "amjad",
        username: "abdullah123"
    }
    const validationSchema = yup.object().shape({
        hotspot_name: yup.string().required('Enter Hotspot Name'),
        contact_name: yup.string().required('Enter Contact Name'),
        hotspot_city: yup.string().required('Enter Hotspot City'),
        hotspot_postcode: yup.string().required('Enter Hotspot Code'),
        hotspot_street: yup.string().required('Enter Hotspot Street'),
        hotspot_country: yup.string().required('Enter Hotspot Country'),
        email: yup.string().required("Enter Email").email('Inavalid E-Mail'),
        password: yup.string().required('Enter Password'),
        confirmPassword: yup.string().required('Confirm Password'),
        description: yup.string().required('Enter Description'),
    })
    const submitHandler = (values) => {
        axios.post('http://34.125.201.35:8000/api/register', values)
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div class="wrapper ">
            <div id="formContent">
                <div class="fadeIn first">
                    <h1>ting</h1>
                    <h2 class="inactive underlineHover "> <Link className="Link-color" to='/'>Log In </Link></h2>
                    <h2 class="active"><Link className="Link-color" to='/SignUp'>Sign Up</Link> </h2>
                </div>
                <Formik
                    initialValues={defaultValues}
                    validationSchema={validationSchema}
                    onSubmit={submitHandler} >
                    <Form>
                        <Field type="text" id="hotspot_name" class="fadeIn second" name="hotspot_name" placeholder="Hotspot Name" />
                        <p ><ErrorMessage name="hotspot_name" /></p>
                        <Field type="text" id="contact_name" class="fadeIn second" name="contact_name" placeholder="Contact Name" />
                        <p ><ErrorMessage name="contact_name" /></p>
                        <Field type="text" id="hotspot_city" class="fadeIn second" name="hotspot_city" placeholder="Hotspot City" />
                        <p ><ErrorMessage name="hotspot_city" /></p>
                        <Field type="text" id="hotspot_postcode" class="fadeIn second" name="hotspot_postcode" placeholder="Hotspot Post Code" />
                        <p ><ErrorMessage name="hotspot_postcode" /></p>
                        <Field type="text" id="hotspot_street" class="fadeIn second" name="hotspot_street" placeholder="Hotspot Post Street" />
                        <p ><ErrorMessage name="hotspot_street" /></p>
                        <Field type="text" id="hotspot_country" class="fadeIn second" name="hotspot_country" placeholder="Hotspot Post Country" />
                        <p ><ErrorMessage name="hotspot_country" /></p>
                        <Field type="email" id="email" class="fadeIn second" name="email" placeholder="Email" />
                        <p ><ErrorMessage name="email" /></p>
                        <Field type="password" id="password" class="fadeIn third " name="password" placeholder="Password" />
                        <p ><ErrorMessage name="password" /></p>
                        <Field type="password" id="confirmPassword" class="fadeIn third " name="confirmPassword" placeholder="Confirm Password" />
                        <p ><ErrorMessage name="confirmPassword" /></p>
                        <Field as="textarea" id="description" class="fadeIn third textarea " name="description" placeholder="Tell Us Why You Should Be A Ting Hotspot" rows="4" cols="50" />
                        <p ><ErrorMessage name="description" /></p>
                        <button type="submit" class="fadeIn fourth" > Sign  Up
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}
export default SignUp;
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const ForgetPassword=()=>  {
  
    return (
        <div id='formFooter'>
       <Link to='/ResetPassScreen'> Forgot Password?</Link>
    </div>)
}

export default ForgetPassword

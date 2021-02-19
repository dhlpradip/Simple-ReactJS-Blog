
import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Cookies from 'universal-cookie';
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const cookies = new Cookies();

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(response => response.json()).then(response=>{
        cookies.set("TOKEN", response.token);

      })
   }

const LoginPage = () => {

  const formik =useFormik({
    initialValues:{
      email: '',
      username: '',
      password: ''
    },
    onSubmit: values =>{
      console.log(values)
        const token = loginUser(values)
          .then(response=>{
          history.push('/admin')
        })
      },
      validationSchema: Yup.object({
        email: Yup.string()
        .email("Invalid Email Format")
        .required("Required!"),
        username: Yup.string()
        .min(3, "Minimum 3 characters!")
        .max(25, "Maximum 25 characters!")
        .required("Required!"),
        password: Yup.string()
        .min(8,"Minimum 8 characters!")
        .required("Required!")
        
      })
    });
    
    const history = useHistory();
    
    useEffect(()=>{
      const token = cookies.get("TOKEN")
      if(token){
        history.push('/admin')
      }
    })
    
    return ( 
      <div className="login-wrapper">
            <h1>Login to get access to Admin Zone</h1>
            <form onSubmit= {formik.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
           type="email"
           id="email"
           name="email"
           value={formik.values.email}
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email && 
          (<p className="text-danger mt-1">
            {formik.errors.email}</p>
          )}
                <label htmlFor="username">Username:</label>
                    <input
                    type="text"
                    id="username"
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    ></input>
                    {formik.errors.username && formik.touched.username && 
                    (<p className="text-danger mt-1">
                      {formik.errors.username}</p>
                    )}
                <label htmlFor="password">Password:</label>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    ></input>
                    {formik.errors.password && formik.touched.password && 
                    (<p className="text-danger mt-1">
                      {formik.errors.password}</p>
                    )}
           

                    <div>
                    <button type="submit" className="btn btn-dark" style={{margin:"20px"}}>Submit</button>  
                    </div>

            </form>
            <h2>Not an Admin? Go <Link to ="/blog">Back</Link></h2>


        </div>

     );
}

 
export default LoginPage;

LoginPage.propTypes = {
    setToken: PropTypes.func.isRequired
};
import "./formik.css";
import { useFormik } from "formik";
import * as Yup from "yup";


const FormikUse = () => {

    const formik= useFormik({
        initialValues: {
            name:'',
            email:'',
            password: '',
            confirm_password:''
        },
        onSubmit: values => {
            console.log('form data',  values)
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, "Minimum 2 Characteristics")
                .max(20, "Maximum 20 characters")
                .required("Required!"),
            email:Yup.string()
                .email("Invalid Email Format. Must contain @")
                .required("Required!"),
            password:Yup.string()
                .min(8, "Minimum 8 characters")
                .required("Required!"),
            confirm_password:Yup.string()
                .oneOf([Yup.ref("password")], "Password do not match")
                .required("Required!")   
        })

    });

    return ( 
        <div>
            <form onSubmit= {formik.handleSubmit}>
              <label htmlFor="name">Name</label>
              <input 
              type="text" 
              id='name' 
              name='name' 
              onChange={formik.handleChange} 
              value={formik.values.name} 
              onBlur={formik.handleBlur}

              />
              {formik.errors.name && formik.touched.name && (
            <p className="text-danger mt-1">{formik.errors.name}</p>
          )}

              <label htmlFor="email">E-mail</label>
              <input 
              type="email" 
              id='email' 
              name='email' 
              onChange={formik.handleChange} 
              value={formik.values.email} 
              onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email && (
                <p className="text-danger mt-1">
                {formik.errors.email}</p>
            )}
              
              <label htmlFor="name">Password</label>
              <input 
              type="password" 
              id='password' 
              name='password' 
              onChange={formik.handleChange} 
              value={formik.values.password}
              onBlur={formik.handleBlur} 
              />
              {formik.errors.password && formik.touched.password && (
            <p className="text-danger mt-1">{formik.errors.password}</p>
          )}

              <label htmlFor="name">Confirm Password</label>
              <input 
              type="password" 
              id='confirm_password' 
              name='confirm_password' 
              onChange={formik.handleChange} 
              value={formik.values.confirm_password}
              onBlur={formik.handleBlur} 
              />
              {formik.errors.confirm_password && formik.touched.confirm_password && (
            <p className="text-danger mt-1">{formik.errors.confirm_password}</p>
          )}

              <br/>

              <button type= 'submit' className="btn btn-dark" style={{margin:"10px", float:"center"}} onClick={formik.handleReset}>Submit</button>


            </form>
        </div>
     );
}
 
export default FormikUse;

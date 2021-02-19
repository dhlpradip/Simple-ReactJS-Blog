import { useFormik } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

const Create = () => {
    const formik=useFormik({
        initialValues:{
            title: '',
            body: '',
            author: 'pradeep'
        },
        onSubmit: values =>{
            console.log(values)
            fetch('http://localhost:8010/blogs', {
            method: 'POST',
            headers: {"content-Type": "application/json"},
            body: JSON.stringify(values)
        }).then(()=>{
            console.log('new blog added') 
            history.push('/blog');
        })

        },
        validationSchema: Yup.object({
            title: Yup.string()
                .min(5,"Minimum 5 Characters")
                .required("Required"),
            body: Yup.string()
                .min(10, "Minimum 10 Characters")
                .required("Required"),
            author: Yup.string()
                .required("Required")
        })
    })
    const history = useHistory();

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit= {formik.handleSubmit}> 
            <label htmlFor="title">Blog Title:</label>
                <input
                 type="text"
                 id="title"
                 name="title"
                 onChange={formik.handleChange}
                 value={formik.values.title}
                 onBlur={formik.handleBlur}
                 />
                    {formik.errors.title && formik.touched.title && 
                    (<p className="text-danger mt-1">
                      {formik.errors.title}</p>
                    )}

            <label htmlFor="body">Blog Body:</label>
                <textarea
                 type="text"
                 name="body"
                 id="body"
                 value={formik.values.body}
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 ></textarea>                 
                    {formik.errors.body && formik.touched.body && 
                    (<p className="text-danger mt-1">
                      {formik.errors.body}</p>
                    )}

            <label htmlFor="author">Blog Author:</label>
            <select 
                id="author"
                name="author"
                value={formik.values.author} 
                onChange={formik.handleChange}>
                <option value="mario">mario</option>
                <option value="yoshi">yoshi</option>
                <option value="pradeep">pradeep</option>
            </select>
            {formik.errors.author && formik.touched.author && 
                    (<p className="text-danger mt-1">
                      {formik.errors.author}</p>
                    )}

            <button type="submit" >Submit</button>
           

            </form>
        </div>
    );
}
 
export default Create;
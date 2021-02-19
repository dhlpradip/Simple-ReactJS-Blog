import { Link, useHistory } from "react-router-dom";
import Blogs from "./Blogs";
import React,{ useEffect } from "react";

import Cookies from 'universal-cookie';

const cookies = new Cookies();

const handleLogOut=()=>{
    cookies.remove('TOKEN')
    window.location.reload();

}

function Admin(){
    const history = useHistory();

    useEffect(()=>{
        const token = cookies.get("TOKEN");
        if(!token){
            history.push("/login")
        }

    })

    return ( 
        <div>
        <h1>Welcome to Admin page</h1><br/><br/>
        <div style={{display: "flex",
                     flexFlow: "row wrap", 
                     alignItems:"center",
                     justifyContent: "right"
                     }}>
        <Link to="/create"style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: '8px',
            padding: '10px',
            textDecoration: 'none',
            margin:"10px"
        }} >Create New</Link><br/><br/>
        <button onClick={handleLogOut} style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: '8px',
            padding: '10px',
            textDecoration: 'none',
            border: "none",
            margin:"5"
        }}>Log Out</button>            
        </div>
    <div>
                <Blogs />
            </div>
        </div>
     );
}
 
export default Admin;
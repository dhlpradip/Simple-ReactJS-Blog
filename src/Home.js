import { Link } from "react-router-dom";
import Blogs from "./Blogs";


const Home = () => {
    
    return (
        <div>
            <div>
            <Link to="/login"style={{
                color: "white",
                backgroundColor: "#f1356d",
                borderRadius: '8px',
                padding: '10px',
                textDecoration: 'none',
                float:'right'
            }} >Admin</Link>
            </div>
            <div>

            </div>
            <div>
            <br/>
            <br/>
        </div>
        <Blogs />
        </div> 
    );
}
 
export default Home;